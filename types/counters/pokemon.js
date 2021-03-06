'use strict';

const Commando = require('discord.js-commando'),
  CountersData = require('../../data/counters');

class CounterPokemonType extends Commando.ArgumentType {
  constructor(client) {
    super(client, 'counterpokemontype');
  }

  validate(value, message, arg) {
    let parm = value.replace(/[^\w\s]/gi, '').toUpperCase();
    let index = CountersData.pokemon.findIndex(x => x.aliases.includes(parm));
    if (index !== -1) {
      return true;
    } else {
      return 'that is an invalid Pokémon name. Please try again.\n\n**Raid boss** must be a currently released Pokémon in Pokémon GO.\n';
    }
  }

  parse(value, message, arg) {
    let parm = value.replace(/[^\w\s]/gi, '').toUpperCase();
    let index = CountersData.pokemon.findIndex(x => x.aliases.includes(parm));
    return CountersData.pokemon[index];
  }
}

module.exports = CounterPokemonType;