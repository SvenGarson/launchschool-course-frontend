let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor']
let upperNames = [];

for(let index = 0; index < names.length; index++) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(`Upper case names are: ${upperNames}`);