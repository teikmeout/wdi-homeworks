BEGIN;

INSERT INTO muvies (Title, Released, Runtime, Poster, imdbRating, imdbID, Plot)
VALUES (
  'Harry Potter and the Deathly Hallows Part 2',
  '15 Jul 2011',
  '102 min',
  'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2MTk3MDQ1N15BMl5BanBnXkFtZTcwMzI4NzA2NQ@@._V1_SX300.jpg',
  '8.1',
  'tt1201607',
  'hipster ipsum +1 Jesus like raybans expensive tea'
),
(
  'Blade',
  '21 Aug 1998',
  '102 min',
  'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzkzNjcxNV5BMl5BanBnXkFtZTcwNzk4NTU0Mg@@._V1_SX300.jpg',
  '7.1',
  'tt0120611',
  'hipster ipsum +1 Jesus like raybans expensive tea'
),
(
  'Frozen',
  '27 Nov 2013',
  '102 min',
  'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg',
  '7.6',
  'tt2294629',
  'hipster ipsum +1 Jesus like raybans expensive tea'
);

INSERT INTO muvies (Title, Released, Runtime, imdbRating, imdbID)
VALUES
(
  'Anchorman',
  '01 Dec 2009',
  '102 min',
  '5.9',
  'tt1930281'
);

COMMIT;
