DELETE DATABASE IF EXISTS movie_planner_db;
CREATE DATABASE movie_planner_db;
USE movie_planner_db;

CREATE TABLE movies(
    id INT NOT NULL AUTO_INCREMENT,
    movie varchar(255) NOT NULL,
    PRIMARY KEY (id)
)
INSERT INTO (movie) VALUES ('Rush Hour 2');