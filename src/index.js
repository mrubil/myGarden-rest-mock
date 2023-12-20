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
      naziv: "Bijela",
      kategorija: "Ruža",
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

//Prikazi profil GET korisnik/profil/<id>

//Uredi profil korisnika/dodaj informacije o korisniku PATCH
app.patch("/korisnici/:id", (req, res) => {
  console.log("Podaci", req.params.id, req.body);
  res.status(200);
  res.send();
});

//Dodaj novi artikl POST
app.post("/novi_artikl", (req, res) => {
  console.log("Podaci", req.body);
  res.status(201);
  res.send();
});

//Uredi artikl PATCH

//Obrisi artikl DELETE

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
