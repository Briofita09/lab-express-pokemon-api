const { query } = require("express");
const express = require("express");

const PORT = 1234;

// Importing all the pokemon for our data file
const allPokemon = require("./data");

const app = express();

app.use(express.json());

app.get("/pokemon", (req, res) => {
  console.log("Você abriu a pokedex");
  return res.json(allPokemon);
});

app.get("/pokemon/:id", (req, res) => {
  const id = req.params.id;

  const foundPokemon = allPokemon.find((unique) => {
    return unique.id == id;
  });

  if (foundPokemon) {
    return res.json(foundPokemon);
  } else {
    return res.json({ msg: "Pokemon não listado na pokedex" });
  }
});

app.get("/pokemon/search", (req, res) => {

    const queryParams = req.query

    for(let key in queryParams){
        let typedPokemons = allPokemon.type.filter(type)
        if(typedPokemons){
            return res.json(typedPokemons)
        } else{
            return res.json({ msg: "Pokemon not found!"})
        }
    }
    res.json(queryParams)
}

// -- Define your route listeners here! --

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));
