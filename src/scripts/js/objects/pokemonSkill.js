const pokemonSkill = {
   abilities : [],
   moves     : [],
   descs     : [],

   setSkills(pokemon, desc) {
      this.abilities = pokemon.abilities.map(abilitie => abilitie.ability.name);
      this.moves     = pokemon.moves.map(move => move.move.name);
      this.descs     = desc;
   }
}

export default pokemonSkill