
/* LIST BY USER */		
SELECT Olut.id, Olut.nimi, Olut.kuvaus, Olut.maku, Tyyppi.nimi AS Tyyppi, kuvaURL FROM Olut, Tyyppi, Lista
WHERE Olut.tyyppi = Tyyppi.id 
AND Olut.id IN (
	SELECT olutID FROM Lista
	WHERE userID = (
		SELECT id FROM Users
		WHERE username='kape' /*<=USERNAME HERE*/
	)
) 
GROUP BY Olut.id;