CREATE Table User (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(30) NOT NULL UNIQUE,
    name VARCHAR(30),
    email VARCHAR(256),
    passhash VARCHAR(60) NOT NULL,
    perms_blog BOOLEAN DEFAULT FALSE NOT NULL,
    perms_super BOOLEAN DEFAULT FALSE NOT NULL,
    subscribed BOOLEAN NOT NULL
);

CREATE Table BlogCategory (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(30) NOT NULL UNIQUE
);

CREATE Table BlogPost (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(60) NOT NULL UNIQUE,
    category INTEGER NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    edited TIMESTAMP
);

# Dummy Users

# INSERT INTO User (username, name, email, passhash, perms_blog, perms_super, subscribed) VALUES ('user1', 'John Smith', 'john.smith@example.com', 'hash1', FALSE, FALSE, FALSE);
# INSERT INTO User (username, name, email, passhash, perms_blog, perms_super, subscribed) VALUES ('user2', 'Jane Doe', 'jane.doe@example.com', 'hash2', FALSE, FALSE, FALSE);
# INSERT INTO User (username, name, email, passhash, perms_blog, perms_super, subscribed) VALUES ('user3', 'Michael Brown', 'michael.brown@example.com', 'hash3', FALSE, FALSE, FALSE);
# INSERT INTO User (username, name, email, passhash, perms_blog, perms_super, subscribed) VALUES ('user4', 'Emily Davis', 'emily.davis@example.com', 'hash4', FALSE, FALSE, FALSE);
# INSERT INTO User (username, name, email, passhash, perms_blog, perms_super, subscribed) VALUES ('user5', 'Christopher Perez', 'christopher.perez@example.com', 'hash5', FALSE, FALSE, FALSE);