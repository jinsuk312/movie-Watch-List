-- DELETE DATABASE movie_planner_db IF it EXISTS --
DELETE DATABASE IF EXISTS movie_planner_db;
-- CREATE DATABASE movie_planner_db if you can --
CREATE DATABASE movie_planner_db;
-- USE database movie_planner_db --
USE movie_planner_db;
-- CREATE a TABLE called movies --
CREATE TABLE movies(
-- give movies a numeric value, that cannot be null and will auto_increment its id for every submission of data --
    id INT NOT NULL AUTO_INCREMENT,
-- give movies a string value, that can be 255 spaces, and cannot be null --
    movie varchar(255) NOT NULL,
-- sets the primary key to be id --
    PRIMARY KEY (id)
)
-- INSERT INTO movie database, the value of ('Rush Hour 2')
INSERT INTO (movie) VALUES ('Rush Hour 2');