function copyProperties(source, destination) {
  let propertiesCopied = 0;
  for (const sourceProperty in source) {
    destination[sourceProperty] = source[sourceProperty];

    propertiesCopied++;
  }

  return propertiesCopied;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal) === 2);
console.log(sal.model === 9000);
console.log(sal.enabled === true);