På fredag kommer vi att implementera den email service som ni designade under UX kursen.

Innan dess är det bra om du provar på klient rendering genom att ta bort vyerna från Hamstersidan och använda fetch för att hämta och skicka data till servern.

Tips, du kommer att behöva skapa två seperata projekt. Ett server projekt med express varifrån du kan hämta och skicka in data om hamstrar. Klient sidan består av motsvarande vyer som du har skapat i mustache (eller annan template engine) förutom att datan klient renderas med fetch.

[GET] - http://localhost:<port>/pair/hamster/ <-- hämtar två hamstrar
[GET] - http://localhost:<port>/hamster/ <-- hämtar alla hamstrar
[PUT] - http://localhost:<port>/hamster/:id <-- skapar en ny röstning för en hamster

### Level up
[POST] - http://localhost:<port>/hamster/ <-- skapar en ny hamster
[DELETE] - http://localhost:<port>/hamster/:id <-- tar bort en hamster