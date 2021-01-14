const express = require("express");

const app = express();

const PORT = 3001;
let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/api/persons", (req, res) => {
  res.json(persons);
});
app.get("/info", (req, res) => {
  const created = new Date(Date.now());
  res.send(
    `<div>Phonebook has info for ${persons.length} people <br/><br/>  ${created} </div>`
  );
});
app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const person = persons.find((person) => person.id == id);
  if (person) res.json(person);
  else res.status(404).end();
});
app.delete("/api/persons/:id", (req, res) => {
  const { id } = req.params;
  persons = persons.filter((person) => person.id != id);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
