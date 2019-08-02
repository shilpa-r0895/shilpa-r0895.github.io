let showDiff = function() {
  let input = document.getElementById("inputArray").value;
  let base = document.getElementById("baseArray").value;
  base = base.split(",").map(value => parseInt(value));
  let totalArray = getTotalArray(input.split(","));
  let duplicates = findDuplicates(base, totalArray);
  let unique = findUnique(base, totalArray);
  document.getElementById(
    "diffArray"
  ).innerText = `Duplicates are: [${duplicates}]`;
  document.getElementById(
    "uniqueArray"
  ).innerText = `Unique values are: [${unique}]`;
};

let getTotalArray = function(testArray) {
  let totalNumbers = [];
  for (let i = 0; i < testArray.length; i++) {
    let temp = testArray[i];
    if (temp.includes("-")) {
      let range = temp.split("-");
      totalNumbers.push(parseInt(range[0].trim()));
      for (
        let j = parseInt(range[0].trim()) + 1;
        j < parseInt(range[1].trim());
        j++
      ) {
        totalNumbers.push(j);
      }
      totalNumbers.push(parseInt(range[1].trim()));
    } else {
      totalNumbers.push(parseInt(temp.trim()));
    }
  }
  return totalNumbers;
};

let findDuplicates = function(baseArray, inputArray) {
  return baseArray.filter(value => -1 !== inputArray.indexOf(value));
};

let findUnique = function(baseArray, inputArray) {
  let unique = inputArray.filter(value => -1 === baseArray.indexOf(value));
  unique = unique.concat(
    baseArray.filter(value => -1 === inputArray.indexOf(value))
  );
  return unique;
};
