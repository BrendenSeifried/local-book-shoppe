-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books;

CREATE table books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR,
    release VARCHAR
);

INSERT INTO books (
    title,
    release
)

VALUES 
('Poilu', 2015)
('My Sisters Keeper', 2004)
('War As I Knew It', 1947)
('Never Split The Difference', 2016)
('The Late Great Me', 1976)
('The Notebook' 1996)
('Fear And Loathing In Las Vegas', 1971)

