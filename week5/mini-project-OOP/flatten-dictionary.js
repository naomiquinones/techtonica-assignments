function flatten_dict(input_dict){
  // Add functionality here! 
  let flat = {};
  
  for ( let key in input_dict ) {
    // if( isObject(input_dict[key]) ) {
    if(input_dict[key] !== null &&  typeof(input_dict[key]) ==="object") {
      flat = `"${key}".${flatten_dict(input_dict[key])}"`;
    } else {
      // flat[key] = input_dict[key]; //outputs: { A: { B: 'C', D: { E: 'F' } } }
      flat = `"${key}":"${input_dict[key]}`;
    }
  }
  
  return flat;
}
console.log(
  flatten_dict({ 
    "A" : {
      "B": "C", 
      "D": {"E": "F"}
    } })
)