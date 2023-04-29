const pokemonInfo = {
   id     : '',
   name   : '',
   height : '',
   weight : '',
   types  : undefined,
   imageM : '',
   imageF : '',
   desc   : '',

   setInfos(pokemon, desc) {
      this.id     = pokemon.id;
      this.name   = pokemon.name;
      this.height = pokemon.height;
      this.weight = pokemon.weight;
      this.types  = pokemon.types;
      this.imageM = pokemon.sprites.front_default;
      this.imageF = pokemon.sprites.front_female;
      this.desc   = desc;
   }
}

export default pokemonInfo