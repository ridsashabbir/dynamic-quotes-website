let realData = "";

const getNewQuotes = () => {
  let rnum = Math.random();
  console.log(realData[0].author);
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
    // console.log(realData);
    // console.log(realData[0]);
    // console.log(realData[0].length);
    // console.log(realData[0].text);
    // console.log(realData[0].author);
  } catch (error) {}
};

getQuotes();
