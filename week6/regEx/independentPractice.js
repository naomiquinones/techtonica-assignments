const endsInTonica = word => {
    let regex = /tonica$/i;
    return regex.test(word) ? true : false;
}

const replaceSymantec = text => {
  return text.replace(/symantec/gi,'semantic');
}

const deleteIngs = text => {
  return text.replace(/ing/gi,'');
}

const isEmail = text => {
  return text.match(/\w+@\w+\.(\)/) ? true : false;
}