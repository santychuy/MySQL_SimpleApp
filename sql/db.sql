CREATE DATABASE news_Portal_nodejs;

USE news_Portal;

CREATE TABLE news(
    id_news INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    news TEXT,
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE news;

INSERT INTO news (title, news) VALUES('My Title', 'Hello Sql');

SELECT * FROM news;