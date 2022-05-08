# Biero database API


## Beers
For accessing and manipulating the `olut` table.

### METHOD GET
Returns all found beers with given search parameter of beer name or type

URL: /api/beer?param=`SEARCHPARAM`



### METHOD POST
Adds a new beer to the table

URL: /api/beer

HEADERS: Content-Type: 'application/json'

BODY: 

    Beer{
        id: Integer,
        nimi: String,
        kuvaus: String,
        maku: String,
        tyyppi: Integer,
        kuvaURL: String
    }

### METHOD PUT
Updates a beer

URL: /api/beer

HEADERS: Content-Type: 'application/json'

BODY: 
    
    Beer{
        id: Integer,
        nimi: String,
        kuvaus: String,
        maku: String,
        tyyppi: Integer,
        kuvaURL: String
    }

### METHOD DELETE
Deletes the beer with given ID

URL = '/api/beer?id=`BEER ID`'
