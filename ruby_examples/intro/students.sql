CREATE DATABASE ga;

CREATE TABLE students(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100),
  age INTEGER,
  gender VARCHAR(10),
);

INSERT INTO students (name, age, gender) VALUES ('code', 3, 'female');
INSERT INTO students (name, age, gender) VALUES ('dependent', 5, 'male');
INSERT INTO students (name, age, gender) VALUES ('Pancake', 11, 'female');
