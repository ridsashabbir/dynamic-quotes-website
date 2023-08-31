const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    let realData = await data.json();
    console.log(realData);
    console.log(realData[0]);
    console.log(realData[0].text);
  } catch (error) {}
};

getQuotes();
