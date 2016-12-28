-- Part 1 =======================
-- empty out DB if it's there
DROP TABLE IF EXISTS players;

-- add create table here
CREATE TABLE players (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  age INTEGER NOT NULL,
  team VARCHAR NOT NULL,
  games INTEGER,
  points INTEGER
  );

-- add insert player here
-- INSERT INTO players (name, age, team, games, points) VALUES ('Anderson Varejao', 29, 'CLE', 25, 271);


-- Part 2 =======================
-- add copy players here (with YOUR file path!)
COPY players
  (name, age, team, games, points)
FROM '/Users/taka/code/wdi/homework/hw-w07-d04/nba_season_2011_2012.csv'
  DELIMITER ',' CSV;

--COPY players
  --(name, age, team, games, points)
--FROM '/Users/Irwin/wdi/diamonds-instructor/homeworks/hw-w07-d04/nba_season_2011_2012.csv'
    --DELIMITER ',' CSV;
