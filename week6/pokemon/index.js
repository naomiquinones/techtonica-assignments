// make a function to get a list of all pokemons
const pokemonList = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
  $.ajax(url)
    .done( response => {
      // make a variable to hold ajax response data
      const jsonResponse = response.results;
      // call function to create list and pass response to it
      createPokemonList(jsonResponse);
    })
    .fail( response => console.log('Something went wrong with getting the Pokemon list: ',response))
    .always( () => console.log('function "pokemonList" finished doing something'));
}

// use json object passed in to generate list
const createPokemonList = jsonObj => {
  // loop through list of pokemons
  jsonObj.forEach(pokemon => {
    // console.log('current pokemon: ', pokemon.name)
    const optionElement = `
      <option value="${pokemon.name}">${pokemon.name}</option>
    `;
    $('#pokemon-list').append(optionElement);
  }) 
}

// function to get a specific pokemon's picture
const getPokemonPicture = name => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  
  $.ajax(url)
    .done( response => {
      console.log(response.sprites);
      $('#pokemon-pic').html(`
        <table>
          <tr>
            <td><img src="${response.sprites.front_default}"></td>
            <td><img src="${response.sprites.back_default}"></td>
          </tr>
          <tr>
            <td><img src="${response.sprites.front_shiny}"></td>
            <td><img src="${response.sprites.back_shiny}"></td>
          </tr>
        </table>
      `);
      })
    .fail( response => console.log(response))
    .always( () => console.log('getPokemonPic finished'));
}

// when the select menu changes, use name to call the getPicture
$(document).ready( function() {
  // run the function to get the list
  pokemonList();

  // when user clicks/selects in the list
  // make sure this is written with function keyword
  // so can retain 'this'- arrow function won't retain 'this'
  $('#pokemon-list').change( function(){
    // console.log('this: ',this)
    let name = this.value;
    console.log('name: ', this.value)
    getPokemonPicture(name);
  });
});