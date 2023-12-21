import express from "express";
import cors from "cors";

const app = express(); // instanciranje aplikacije
const port = 3200; // port na kojem će web server slušati

app.use(express.json());
app.use(cors());

//Registracija/Login novog korisnika POST
app.post("/korisnici", (req, res) => {
  console.log("podaci", req.body);
  res.status(201);
  res.send();
});

//Prikazi sve artikle GET /artikli
app.get("/artikli", (req, res) => {
  let artikli = [
    {
      id_artikla: "1525",
      naziv: "Bijela ruža",
      lokacija: "Pula",
      cijena: "17",
    },
    {
      id_artikla: "1456",
      naziv: "Jasmin",
      lokacija: "Zagreb",
      cijena: "18",
    },
  ];
  res.status(200);
  res.send(artikli);
});

//Prikazi informacije o jednom artiklu GET /artikli/<id>
app.get("/artikli/:id", (req, res) => {
  let artikl = [
    {
      id_artikla: "1525",
      naziv: "Bijela ruža",
      kategorija: "Cvjetnice",
      cijena: "10.50",
      lokacija: "Zagreb",
      korisnik: "user1223",
      kontakt: "user@gmail.com",
      recenzija: 5,
    },
  ];
  res.status(200);
  res.send(artikl);
});

//Pretraživanje po nazivu artikla - query string
app.get("/artikli", (req, res) => {
  console.log("Query string", req.query);
  let naziv = req.query.naziv;
  console.log("Naziv", naziv);
  let artikli = [
    {
      id_artikla: "1525",
      naziv: "Bijela ruža",
      lokacija: "Pula",
      cijena: "17",
    },
    {
      id_artikla: "1456",
      naziv: "Jasmin",
      lokacija: "Zagreb",
      cijena: "18",
    },
  ];

  res.status(200);
  res.send(artikli);
});

//Prikazi profil GET korisnik/profil/<id>
app.get("/moj_profil:id", (req, res) => {
  let profil = [
    {
      userName: "user1234",
      ime: "Martina",
      prezime: "Rubil",
      grad: "Zagreb",
      adresa: "Voltićeva ulica",
      kontaktBroj: "0987562347",
      kontaktEmail: "user1234@gmail.com",
      artikli: [
        {
          id_artikla: 1525,
          naziv: "Bijela ruža",
          lokacija: "Zagreb",
          cijena: "10.50",
        },
        {
          id_artikla: "1456",
          naziv: "Jasmin",
          lokacija: "Zagreb",
          cijena: "18",
        },
      ],
    },
  ];
  res.send(profil);
});

//Uredi profil korisnika/dodaj informacije o korisniku PATCH
app.patch("/uredi_profil/:id", (req, res) => {
  console.log("Podaci", req.params.id, req.body);
  res.status(200);
  res.send();
});

//Dodaj novi artikl POST
app.post("/moji_artikli/:id", (req, res) => {
  console.log("Podaci", req.body);
  res.status(201);
  res.send();
});

//Uredi artikl PATCH
app.patch("/moji_artikli/:id_artikla", (req, res) => {
  console.log("Podaci", req.params.id_artikla, req.body);
  res.status(200);
  res.send();
});

//Obrisi artikl DELETE
app.delete("/moji_artikli/:id_artikla", (req, res) => {
  console.log("Podaci", req.params.id_artikla);
  res.status(200);
  res.send();
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
