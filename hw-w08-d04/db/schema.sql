BEGIN;

DROP TABLE IF EXISTS muvies;
DROP TABLE IF EXISTS users;


CREATE TABLE users(
  user_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);

CREATE TABLE muvies (
  muvie_id SERIAL PRIMARY KEY NOT NULL,
  Title VARCHAR(100) NOT NULL,
  Released VARCHAR(50) NOT NULL,
  Runtime VARCHAR(50) NOT NULL,
  Poster VARCHAR NOT NULL DEFAULT './images/defaultPoster.jpg',
  imdbRating VARCHAR(10) NOT NULL,
  imdbID VARCHAR NOT NULL,
  Plot VARCHAR NOT NULL DEFAULT 'this movie is so boring it doesnt have a plot'
);



COMMIT;
