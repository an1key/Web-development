
const form = document.getElementById("form");
const cryptoFrom = document.getElementById("cryptoFrom");
const cryptoTo = document.getElementById("cryptoTo");
const cryptoAmount = document.getElementById("cryptoAmount")
cryptoAmount.defaultValue = 1;
const resultText = document.getElementById("resultText")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const from = cryptoFrom.value;
    const to = cryptoTo.value;
    const amount = cryptoAmount.value;

    const apiResponse = fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${from}&vs_currencies=${to}`)
    apiResponse.then(res => {
        const data = res.json();
        data.then(d => {
            resultText.innerText = `${parseInt(d[from][to]) * amount}`;
        })
    })
})