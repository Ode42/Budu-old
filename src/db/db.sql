CREATE DATABASE budu;
CREATE TABLE budjets(
    budjetId SERIAL PRIMARY KEY,
    budjetName VARCHAR(255),
    initialAmount SERIAL,
    costCentres TEXT[]
);

INSERT INTO budjets(budjetid, budjetname, initialamount, costcentres)
VALUES (0, "Testibudjetti", 100, '{"Ruoka", "Opiskelu"}');