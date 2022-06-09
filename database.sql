-- Don't forget to add your create table SQL 
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    quantity DECIMAL(5,2),
    unit VARCHAR(20)
    purchased BOOLEAN DEFAULT FALSE
);
-- It is also helpful to include some test data
INSERT INTO items ("name", quantity, unit)
VALUES 
('chocolate milk', 3, 'gal'),
('dog food', 70, 'lb'),
('CBD Ointment', 4.3, 'oz'),
('black tea', 8.4, 'oz'),
('pokemon cards', 20, 'packs');
