-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE table books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR NOT NULL,
    release INT NOT NULL
);

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    writer VARCHAR NOT NULL,
    pob VARCHAR NOT NULL,
    dob VARCHAR NOT NULL
);

INSERT INTO books (
    title,
    release
)

VALUES 
('Poilu', 2015),
('My Sisters Keeper', 2004),
('War As I Knew It', 1947),
('Never Split The Difference', 2016),
('The Late Great Me', 1976),
('The Notebook', 1996),
('Fear And Loathing In Las Vegas', 1971);


INSERT INTO authors (
    writer,
    pob,
    dob
)

VALUES
('Louis Barthas', 'Homps, Aude, France', '7.14.1879'),
('Hunter S Thompson', 'Louisville, Kentucky, U.S.', '7.18.1937'),
('Chris Voss', 'Mt. Pleasant, Iowa, U.S.', '11.28.1957'),
('Tahl Raz', 'Parts Unkown', '4.15.1978'),
('George S. Patton','San Gabriel, California, U.S.', '11.11.1885'),
('Jodi Picoult', 'Nesconset, New York, U.S.', '5.19.1966'),
('Nicholas Sparks', 'Omaha, Nebraska, U.S.', '12.31.1965'),
('Sandra Scoppettone', 'Morristown, New Jersey, U.S.', '6.14.1936');




