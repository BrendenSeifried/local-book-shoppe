-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS combos cascade;
DROP TABLE IF EXISTS authors cascade;
DROP TABLE IF EXISTS books cascade;

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

CREATE TABLE combos (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    author_id INT NOT NULL,
    book_id INT NOT NULL,
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (author_id) REFERENCES authors(id)

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

INSERT INTO combos (
    book_id,
    author_id
)
VALUES
(1,1),
(2, 6),
(3, 5),
(4, 3),
(4, 4),
(5, 8),
(6, 7),
(7, 2);

INSERT INTO combos (
    author_id,
    book_id
)
VALUES
(1,1),
(6, 2),
(5, 3),
(3, 4),
(4, 4),
(8, 5),
(7, 6),
(2, 7);




