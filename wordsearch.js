const wordSearch = (letters, word) => {

  if (!letters.length){
    return false;
  }

  const horizontalJoin = letters.map((ls, index) => {
    return ls.join("");
  });

  const verticalJoin = verticalLettersArray().map((ls) => {
    return ls.join("");
  })

  const backwardsHorizontalJoin = letters.map((ls) => {
    return ls.reverse().join("");
  });

  const backwardsVerticalJoin = verticalLettersArray().map((ls) => {
    return ls.reverse().join("");
  })

  function verticalLettersArray() {
    const results = [];
    for (let i = 0; i < letters[0].length; i++) {
      const arr = [];
      for (let j = 0; j < letters.length; j++) {
        arr.push(letters[j][i]);
      }
      results.push(arr);
    }
    return results;
  }

  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  for (l of backwardsHorizontalJoin) {
    //console.log(l);
    if (l.includes(word)) {
      return true;
    }
  }

  for (l of backwardsVerticalJoin) {
    //console.log(l);
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;
