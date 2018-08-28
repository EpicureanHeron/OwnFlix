-- create ownlix_db database
DROP DATABASE IF EXISTS ownflix;
CREATE DATABASE ownflix;
USE ownflix;

-- create User Table
-- CREATE TABLE users
-- (
--     id INT NOT NULL AUTO_INCREMENT,
--     user_first_name VARCHAR (55) NOT NULL,
--     user_last_name VARCHAR (55) NOT NUll,
--     user_email VARCHAR (55) NOT NULL,
--     user_address VARCHAR (255),
--     user_city VARCHAR (55),
--     user_state VARCHAR (55),
--     user_zip INT,
--     user_password VARCHAR (55),
--     PRIMARY KEY (id)
-- );

-- create Movie Info Table
-- CREATE TABLE movies
-- (
--     movie_id INT NOT NULL AUTO_INCREMENT,
--     movie_omdb_key VARCHAR (55) NOT NULL,
--     movie_title VARCHAR (255),
--     movie_rating INT,
--     movie_actors VARCHAR (255),
--     movie_poster_img VARCHAR (255),
--     movie_decription VARCHAR (255),
--     movie_loan_status BOOLEAN DEFAULT false,
--     movie_owner_id INT NOT NULL,
--     movie_renter_id INT,
--     PRIMARY KEY (movie_id)
-- );
