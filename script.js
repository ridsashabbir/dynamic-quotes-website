let realData = "";
const 

const getNewQuotes = () => {
  let rnum = Math.floor(Math.random() * 10);
  console.log(rnum);
  console.log(realData[rnum].author);
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
