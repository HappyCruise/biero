INSERT INTO Tyyppi 
VALUES( NULL, "Tumma"), (NULL, "Vaalea"), (NULL, "IPA");

INSERT INTO Olut
VALUES( NULL, "Karhu", "Se klassine jumaltenjuoma", "iha ok", 2, "https://reddit.com/r/trees/kuva.jpg"),
(NULL, "Aura", "Se tumma", "kyl", 1, "google.com"),
(NULL, "Pirkka Parhaat IPA", "Maistuu paskalt ja kallist", "hyi", 3, "https://www.meatspin.com");

INSERT INTO Users
VALUES(NULL, "kape", "kapensalis"),(NULL, "leka","lekamyballs");

INSERT INTO Lista 
VALUES(1, 3),(2,1),(2,2),(2,3);

SELECT * FROM Tyyppi;
SELECT * FROM Olut;
SELECT * FROM Users;
SELECT * FROM Lista;