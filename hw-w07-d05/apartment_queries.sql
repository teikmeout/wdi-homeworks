-- Put answers for apartment query section here

-- Retrieve all info on all tenants
-- SELECT *
-- FROM tenants;

-- Retrieve the name, age, and gender of all tenants
-- SELECT name, age, gender
-- FROM tenants;

-- Retrieve all info on all tenants older than 65
-- SELECT *
-- FROM tenants
-- WHERE age > 65;

-- Retrieve all info on all tenants in apartment with id 20
-- SELECT *
-- FROM tenants
-- WHERE apartment_id = 20;

-- Retrieve all info on all tenants in apartment with ids 20 or 21
-- SELECT *
-- FROM tenants
-- WHERE apartment_id = 20 OR apartment_id = 21;

-- Retrieve the names of all doormen and the address where they work
-- SELECT doormen.name, buildings.address
-- FROM doormen
-- INNER JOIN buildings
--   ON (doormen.building_id = buildings.id);

-- Delete all tenants whose age is greater than 65
-- DELETE FROM tenants
-- WHERE tenants.age > 65;

-- Change all doormen from building 3 to work night shifts.
-- UPDATE doormen
-- SET shift = 'Night'
-- WHERE building_id = 3;
-- checking it worked
-- SELECT *
-- FROM doormen
-- WHERE doormen.building_id = 3;

-- Create one new tenant, put them in any apartment you want
-- INSERT INTO tenants (
--   id, name, age, gender, apartment_id)
-- VALUES (5372, 'Taka Ahrens', 28, 'Female', 21);

-- Find just the ids for all apartments for building with id of 2
-- SELECT id
-- FROM apartments
-- WHERE building_id = 2;

-- Find all info for apartments in building number 3 whose price is greater than $2300
-- SELECT *
-- FROM apartments
-- WHERE building_id = 3 AND price > 2300;

-- Geriatric Birthday! Update all tenants whose age is 90 to be 91
-- UPDATE tenants
-- SET age = 91
-- WHERE age = 90;
-- -- this cannot run cuz I just delted all the tenants above 65

-- Change all tenants ages to increase by 1
-- UPDATE tenants
-- SET age = age+1;

-- Retrieve all info on all tenants who live in an apartment that costs more than $2300
-- SELECT *
-- FROM tenants
-- INNER JOIN apartments
--  ON (tenants.apartment_id = apartments.id)
-- WHERE apartments.price > 2300;

-- Retrieve all doormen that work in a building with more than 5 floors
-- SELECT *
-- FROM doormen
-- INNER JOIN buildings
--   ON (doormen.building_id = buildings.id)
-- WHERE buildings.num_floors > 5;

-- Retrieve the tenant names, ages and the apartment price for all tenants living in an apartment larger than 1000 square feet
-- SELECT tenants.name, tenants.age, apartments.price
-- FROM tenants
-- INNER JOIN apartments
--   ON (tenants.apartment_id = apartments.id)
-- WHERE apartments.sqft > 1000;

-- Retrieve the names and experience levels for all night-shift doormen from the building Kshlerin-Klein
-- SELECT doormen.name, doormen.experience
-- FROM doormen
-- INNER JOIN buildings
--   ON (doormen.building_id = buildings.id)
-- WHERE doormen.shift = 'Night' AND buildings.name = 'Kshlerin-Klein';

-- Retrieve the names and ages of all tenants that live in a building with more than 6 floors and pays over $1500 for their apartment
SELECT tenants.name, tenants.age
FROM tenants
INNER JOIN apartments
  ON (tenants.apartment_id = apartments.id)
INNER JOIN buildings
  ON (apartments.building_id = buildings.id)
WHERE buildings.num_floors > 6 AND apartments.price > 1500;
