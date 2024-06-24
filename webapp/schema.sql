CREATE Table User (
    id BIGINT NOT NULL UNIQUE PRIMARY KEY,
    username VARCHAR(30) NOT NULL UNIQUE,
    name VARCHAR(30),
    email VARCHAR(256),
    passhash VARCHAR(60) NOT NULL,
    perms_blog BOOLEAN DEFAULT FALSE
);

CREATE Table BlogCategory (
    id INT NOT NULL UNIQUE PRIMARY KEY,
    name VARCHAR(30) NOT NULL UNIQUE
);

CREATE Table BlogPost (
    id BIGINT NOT NULL UNIQUE PRIMARY KEY,
    name VARCHAR(60) NOT NULL UNIQUE,
    category INT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    edited TIMESTAMP
);