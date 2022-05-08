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

URL = /api/beer?id=`BEER ID`

## List

### METHOD GET
Returns all beers from current users list

URL = /api/list?userid=`USER ID`

### METHOD Post
Adds a beer to users own list

URL = /api/list

### METHOD DELETE
Deletes the beer from users own list with given beerID

URL = /api/list?id=`BEER ID`
