# HW-W07-D05
## Jonathan Ahrens

## Table of contents
1. [ERD](#erd)  
2. [Answers](#answers)

## ERD
![ERD Renting DB](http://i.imgur.com/ZtNpJKd.jpg?1)


 BUILDING | datatype ||
 --- | --- | --- 
building_id | PRIMARY KEY | other key
name | VARCHAR
address | VARCHAR
floors | INT

APARTMENT | datatype
--- | ---
apt_id | PRIMARY KEY
building_id | FOREIGN KEY
name | VARCHAR
floor | INT
price | INT
sq_footage | INT
num_bed | INT
num_bath | INT

TENANT | datatype
--- | ---
tenant_id | PRIMARY KEY
apt_id | FOREIGN KEY
name | VARCHAR
age | INT
gender | VARCHAR

DOORMAN | datatype
--- | ---
doorman_id | PRIMARY KEY
building_id | FOREIGN KEY
name | VARCHAR
experience | INT
shift | what




## Answers
