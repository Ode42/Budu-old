CREATE DATABASE budu;
CREATE TABLE budjets(
    budjet_id SERIAL PRIMARY KEY,
    budjet_name VARCHAR(50) UNIQUE NOT NULL,
    budjet_balance SERIAL NOT NULL,
    cost_centres JSON
);