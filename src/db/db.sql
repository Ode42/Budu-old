CREATE DATABASE budu;
CREATE TABLE budjets(
    budjet_id SERIAL PRIMARY KEY,
    budjet_name VARCHAR(50) UNIQUE NOT NULL,
    budjet_balance SERIAL NOT NULL
);
CREATE TABLE cost_centres(
    budjet_id SERIAL NOT NULL,
    cost_centre VARCHAR(50) NOT NULL,
    cost_centre_balance SERIAL NOT NULL
);