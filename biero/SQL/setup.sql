DROP DATABASE IF EXISTS bieroDB;
CREATE DATABASE bieroDB;
USE bieroDB;

CREATE TABLE Tyyppi(
                       id INT NOT NULL AUTO_INCREMENT,
                       nimi VARCHAR(20),
                       PRIMARY KEY ( id )
);

CREATE TABLE Olut(
                     id INT NOT NULL AUTO_INCREMENT,
                     nimi VARCHAR(30) NOT NULL,
                     kuvaus VARCHAR(255),
                     maku VARCHAR(155),
                     tyyppi INT NOT NULL,
                     kuvaURL VARCHAR(500),
                     PRIMARY KEY ( id ),
                     FOREIGN KEY ( tyyppi ) REFERENCES Tyyppi(id)
);

CREATE TABLE Users(
                      id INT NOT NULL AUTO_INCREMENT,
                      username VARCHAR(20) NOT NULL,
                      password VARCHAR(40) NOT NULL,
                      PRIMARY KEY (id)
);

CREATE TABLE Lista(
                      userID int NOT NULL,
                      olutID int NOT NULL,
                      PRIMARY KEY( userID, olutID ),
                      FOREIGN KEY ( userID ) REFERENCES Users(id),
                      FOREIGN KEY ( olutID ) REFERENCES Olut(id)
);

INSERT INTO Tyyppi
VALUES( NULL, "Tumma"), (NULL, "Vaalea"), (NULL, "IPA");

INSERT INTO Olut
VALUES(NULL, "Litovel Premium", "Pähkinänruskea", "Hedelmäinen ja suklainen", 1, "https://images.alko.fi/images/cs_srgb,f_auto,t_products/cdn/789706/litovel-premium-dark.jpg"),
      (NULL, "Saku Tume", "Kastanjanruskea", "Luumuinen ja banaaninen", 1, "https://images.alko.fi/images/cs_srgb,f_auto,t_products/cdn/785544/saku-tume-tolkki.jpg"),
      (NULL, "Aura", "Kastanjanruskea", "Mallasleipäinen ja siirappinen", 1, "https://images.alko.fi/images/cs_srgb,f_auto,t_products/cdn/799496/aura-tumma-tolkki.jpg"),
      (NULL, "Karhu", "Se aito", "Raikas ja täyteläinen", 2, "https://images.alko.fi/images/cs_srgb,f_auto,t_medium/cdn/000071/karhu-53.jpg"),
      (NULL, "San Miguel", "Kullankeltainen", "Viljainen ja yrttinen", 2, "https://images.alko.fi/images/cs_srgb,f_auto,t_products/cdn/705184/san-miguel-fresca.jpg"),
      (NULL, "Koff", "Keltainen", "Hedelmäinen ja maltainen", 2, "https://images.alko.fi/images/cs_srgb,f_auto,t_products/cdn/792244/koff.jpg"),
      (NULL, "Lapin Kulta", "Kusenkeltainen", "Pähkinäinen ja yrttinen", 2, "https://images.alko.fi/images/cs_srgb,f_auto,t_products/cdn/795674/lapin-kulta-a-tolkki.jpg"),
      (NULL, "Saimaa Vahva", "Kullankeltainen", "Greippinen ja hedelmäinen", 3, "https://images.alko.fi/images/cs_srgb,f_auto,t_products/cdn/748776/saimaa-vahva-ipa-tolkki.jpg"),
      (NULL, "Apex Klaxon", "Vaaleankeltainen", "Hedelmäinen ja sitruksinen", 3, "https://images.alko.fi/images/cs_srgb,f_auto,t_products/cdn/921712/apex-klaxon-ipa-tolkki.jpg"),
      (NULL, "Olaf Gepardi", "Ruskeankeltainen", "Greippinen ja sitruksinen", 3, "https://images.alko.fi/images/cs_srgb,f_auto,t_products/cdn/762544/olaf-gepardi-ipa.jpg");

INSERT INTO Users
VALUES(NULL, "admin", "admin1234");

INSERT INTO Lista
VALUES(1, 1),
      (1, 2),
      (1, 3),
      (1, 4),
      (1, 5),
      (1, 6);

SELECT * FROM Tyyppi;
SELECT * FROM Olut;
SELECT * FROM Users;
SELECT * FROM Lista;