import json
import sqlite3
from collections import defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DB_PATH = ROOT / "data" / "modo_carreira.sqlite"
OUTPUT_DIR = ROOT / "assets" / "data"


def rows(conn, query, params=()):
    conn.row_factory = sqlite3.Row
    return [dict(row) for row in conn.execute(query, params)]


def write_json(path, payload):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def export_competitions(conn):
    results = rows(
        conn,
        """
        SELECT category, type, competition_name, season, champion_name, source
        FROM championship_results
        ORDER BY competition_name, season
        """,
    )
    rankings = rows(
        conn,
        """
        SELECT competition_name, champion_name, titles, first_year, last_year
        FROM competition_champion_rankings
        ORDER BY competition_name, titles DESC, champion_name
        """,
    )
    club_titles = rows(
        conn,
        """
        SELECT team_name, title_name, total, source
        FROM club_relevant_titles
        ORDER BY team_name, title_name
        """,
    )

    competitions = {}
    for row in results:
        key = row["competition_name"]
        competitions.setdefault(
            key,
            {
                "name": key,
                "category": row["category"],
                "type": row["type"],
                "results": [],
                "ranking": [],
            },
        )
        competitions[key]["results"].append(
            {
                "season": row["season"],
                "champion": row["champion_name"],
                "source": row["source"],
            }
        )

    for row in rankings:
        if row["competition_name"] not in competitions:
            competitions[row["competition_name"]] = {
                "name": row["competition_name"],
                "category": "",
                "type": "",
                "results": [],
                "ranking": [],
            }
        competitions[row["competition_name"]]["ranking"].append(
            {
                "team": row["champion_name"],
                "titles": row["titles"],
                "firstYear": row["first_year"],
                "lastYear": row["last_year"],
            }
        )

    titles_by_team = defaultdict(list)
    for row in club_titles:
        titles_by_team[row["team_name"]].append(
            {
                "title": row["title_name"],
                "total": row["total"],
                "source": row["source"],
            }
        )

    payload = {
        "competitions": list(competitions.values()),
        "clubRelevantTitles": [
            {"team": team, "titles": title_rows}
            for team, title_rows in sorted(titles_by_team.items())
        ],
    }
    write_json(OUTPUT_DIR / "competicoes.json", payload)
    return {
        "competitions": len(payload["competitions"]),
        "results": len(results),
        "clubRelevantTitles": len(club_titles),
    }


def export_ballon(conn):
    rankings = rows(
        conn,
        """
        SELECT year, position, player_name, podium, medal
        FROM ballon_rankings
        ORDER BY year, position
        """,
    )
    stats = rows(
        conn,
        """
        SELECT player_name, nominations, podiums, wins, seconds, thirds,
               best_position, best_position_years, first_nomination, last_nomination, history
        FROM ballon_player_stats
        ORDER BY wins DESC, podiums DESC, nominations DESC, player_name
        """,
    )

    rankings_by_year = defaultdict(list)
    for row in rankings:
        rankings_by_year[str(row["year"])].append(
            {
                "position": row["position"],
                "player": row["player_name"],
                "podium": row["podium"] == "Sim",
                "medal": row["medal"] or "",
            }
        )

    payload = {
        "rankingsByYear": dict(sorted(rankings_by_year.items())),
        "playerStats": [
            {
                "player": row["player_name"],
                "nominations": row["nominations"],
                "podiums": row["podiums"],
                "wins": row["wins"],
                "seconds": row["seconds"],
                "thirds": row["thirds"],
                "bestPosition": row["best_position"],
                "bestPositionYears": row["best_position_years"],
                "firstNomination": row["first_nomination"],
                "lastNomination": row["last_nomination"],
                "history": row["history"],
            }
            for row in stats
        ],
    }
    write_json(OUTPUT_DIR / "bola-de-ouro.json", payload)
    return {
        "years": len(payload["rankingsByYear"]),
        "rankingRows": len(rankings),
        "players": len(stats),
    }


def export_players(conn):
    players = rows(
        conn,
        """
        SELECT slug, name, matches, goals, assists,
               hub_matches, hub_goals, hub_assists,
               hub_matches_diff, hub_goals_diff, hub_assists_diff,
               collective_titles, individual_awards
        FROM players
        ORDER BY name
        """,
    )
    spells = rows(
        conn,
        """
        SELECT id, player_slug, player_name, spell_order, team_name, team_full_name,
               team_type, matches, goals, assists, page_path, description
        FROM player_spells
        ORDER BY player_slug, spell_order
        """,
    )
    competition_stats = rows(
        conn,
        """
        SELECT spell_id, player_name, team_name, competition_name, matches, goals, assists
        FROM player_competition_stats
        ORDER BY spell_id, competition_name
        """,
    )
    spell_honors = rows(
        conn,
        """
        SELECT spell_id, player_name, team_name, category, honor_name, quantity
        FROM player_spell_honors
        ORDER BY spell_id, category, honor_name
        """,
    )
    aggregate_honors = rows(
        conn,
        """
        SELECT player_slug, player_name, category, honor_name, quantity
        FROM player_aggregate_honors
        ORDER BY player_slug, category, honor_name
        """,
    )

    stats_by_spell = defaultdict(list)
    for row in competition_stats:
        stats_by_spell[row["spell_id"]].append(
            {
                "competition": row["competition_name"],
                "matches": row["matches"],
                "goals": row["goals"],
                "assists": row["assists"],
            }
        )

    honors_by_spell = defaultdict(list)
    for row in spell_honors:
        honors_by_spell[row["spell_id"]].append(
            {
                "category": row["category"],
                "name": row["honor_name"],
                "quantity": row["quantity"],
            }
        )

    honors_by_player = defaultdict(list)
    for row in aggregate_honors:
        honors_by_player[row["player_slug"]].append(
            {
                "category": row["category"],
                "name": row["honor_name"],
                "quantity": row["quantity"],
            }
        )

    spells_by_player = defaultdict(list)
    for row in spells:
        spells_by_player[row["player_slug"]].append(
            {
                "id": row["id"],
                "order": row["spell_order"],
                "team": row["team_name"],
                "teamFullName": row["team_full_name"],
                "teamType": row["team_type"],
                "matches": row["matches"],
                "goals": row["goals"],
                "assists": row["assists"],
                "pagePath": row["page_path"],
                "description": row["description"],
                "competitionStats": stats_by_spell[row["id"]],
                "honors": honors_by_spell[row["id"]],
            }
        )

    payload = {
        "players": [
            {
                "slug": row["slug"],
                "name": row["name"],
                "totals": {
                    "matches": row["matches"],
                    "goals": row["goals"],
                    "assists": row["assists"],
                    "collectiveTitles": row["collective_titles"],
                    "individualAwards": row["individual_awards"],
                },
                "hubTotals": {
                    "matches": row["hub_matches"],
                    "goals": row["hub_goals"],
                    "assists": row["hub_assists"],
                    "diffMatches": row["hub_matches_diff"],
                    "diffGoals": row["hub_goals_diff"],
                    "diffAssists": row["hub_assists_diff"],
                },
                "spells": spells_by_player[row["slug"]],
                "honors": honors_by_player[row["slug"]],
            }
            for row in players
        ]
    }
    write_json(OUTPUT_DIR / "jogadores.json", payload)
    return {
        "players": len(players),
        "spells": len(spells),
        "competitionStats": len(competition_stats),
        "spellHonors": len(spell_honors),
        "aggregateHonors": len(aggregate_honors),
    }


def export_index(summary):
    payload = {
        "generatedFrom": "data/modo_carreira.sqlite",
        "files": {
            "competitions": "assets/data/competicoes.json",
            "ballonDor": "assets/data/bola-de-ouro.json",
            "players": "assets/data/jogadores.json",
        },
        "summary": summary,
    }
    write_json(OUTPUT_DIR / "index.json", payload)


def main():
    if not DB_PATH.exists():
        raise FileNotFoundError(f"Banco nao encontrado: {DB_PATH}")

    conn = sqlite3.connect(DB_PATH)
    summary = {
        "competitions": export_competitions(conn),
        "ballonDor": export_ballon(conn),
        "players": export_players(conn),
    }
    export_index(summary)
    conn.close()

    print(OUTPUT_DIR)
    print(json.dumps(summary, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
