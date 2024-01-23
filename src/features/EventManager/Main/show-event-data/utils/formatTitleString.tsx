const formatTitleString = (title: string) => {
  // divide the string into words by capital letters
  const words = [];
  let currentWord = "";

  for (let i = 0; i < title.length; i++) {
    const char = title[i];

    if (char === char.toUpperCase()) {
      words.push(currentWord);
      currentWord = char.toLowerCase();
    } else {
      currentWord += char;
    }
  }

  words.push(currentWord);

  const result = words.join(" ").toUpperCase();
  return result;
};

export default formatTitleString;
