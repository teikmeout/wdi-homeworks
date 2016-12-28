-- Apartment schema goes here
BEGIN;

-- dropping table if they are already there
DROP TABLE IF EXISTS buildings;
DROP TABLE IF EXISTS apartments;
DROP TABLE IF EXISTS tenants;
DROP TABLE IF EXISTS doormen;

-- starting table creation
-- [x]check table values
-- id, name, address, num_floors
CREATE TABLE buildings (
  id INT PRIMARY KEY,
  name VARCHAR NOT NULL,
  address VARCHAR NOT NULL,
  num_floors INTEGER NOT NULL
);

-- [x]check table values
-- id, name, experience, shift, building_id
CREATE TABLE doormen (
  id INT PRIMARY KEY,
  name VARCHAR NOT NULL,
  experience INT NOT NULL,
  shift VARCHAR NOT NULL,
  building_id INT REFERENCES buildings(id)
);

-- [x]check table values
-- id, floor, name, price, sqft, bedrooms, bathrooms, building_id
CREATE TABLE apartments (
  id INT PRIMARY KEY,
  floor INT NOT NULL,
  name VARCHAR NOT NULL,
  price INT NOT NULL,
  sqft INT NOT NULL,
  bedrooms INT NOT NULL,
  bathrooms INT NOT NULL,
  -- how do I define this as a foreign key?
  building_id INT REFERENCES buildings(id)
);

-- [x]check table values
-- id, name, age, gender, apartment_id
CREATE TABLE tenants (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  age INT NOT NULL,
  gender VARCHAR NOT NULL,
  apartment_id INT REFERENCES apartments(id)
);

COMMIT;
