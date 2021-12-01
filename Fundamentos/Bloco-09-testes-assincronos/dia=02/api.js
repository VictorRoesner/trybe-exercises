const coinUrl = `https://api.coincap.io/v2/assets`;

const fetchCoin = () => {
  const ulCoin = document.getElementById('coinCount');

  fetch(coinUrl)
    .then(response => response.json())
    .then(data => {
      const coinData = data.data;
      const coins = coinData
      .filter((coin) => Number(coin.rank) <= 10)
      .map((elem) => `${elem.id} (${elem.symbol}): ${Number(elem.priceUsd).toFixed(2)}`)
      console.log(coins);
      coins
      .forEach((coin) => {
        const li = document.createElement('li')
        ulCoin.appendChild(li);
        li.innerText = coin;
      })
    });
};

fetchCoin();