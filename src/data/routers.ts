const languageArray = [
  "🇩🇪 Deutsch",
  "🇺🇸 English",
  "🇺🇦 Ukrainisch",
  "🇷🇺 Russisch",
  "🇷🇺 Russisch",
];

function testFunc(array: string[]) {
  const sortetArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sortetArray.push(element);
  }
  //console.log(sortetArray.join("|"));

  return sortetArray.join("|");
}

const sortetArray = testFunc(languageArray);

export { languageArray, sortetArray };
