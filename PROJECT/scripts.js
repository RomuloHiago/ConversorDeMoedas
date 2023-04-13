const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")


const dolar = 5.2
const euro = 5.9
const bitcoin = 141835.09

const convertValues = () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')
    


    
   
    realValueText.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency: "BRL"
    }).format(inputReal)


    if(select.value === "U$$ Dolar Americano"){
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency: "USD"
        }).format(inputReal / dolar)

    }
    if(select.value === "€ Euro"){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency: "EUR"
            
        }).format(inputReal / euro)

    }

    if(select.value === "Bitcoin"){
      currencyValueText.innerHTML = new Intl.NumberFormat("XBT",{
          style:"currency",
          currency: "BTC",
          minimumFractionDigits: 8
      }).format(inputReal / bitcoin)

  }
    

}

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name")
  const currencyImg = document.getElementById("currency-img")


  if(select.value === 'U$$ Dolar Americano'){
    currencyName.innerHTML = "Dolar americano"
    currencyImg.src="./assets/eua.png"
  }


  if(select.value === '€ Euro'){
    currencyName.innerHTML = "Euro"
    currencyImg.src="./assets/euro.png"
  }


  if(select.value === 'Bitcoin'){
    currencyName.innerHTML = "Bitcoin"
    currencyImg.src="./assets/bitcoin.png"
  }
  
  convertValues()

}




button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency )































// const button = document.getElementById('convert-button')
// const select = document.getElementById('currency-select')


// const dolar = 5.2;
// const euro = 5.9;


// const convertValues = () => {
//     const inputReais = document.getElementById("input-real").value; // o .value serve pra capturar o valor digitado pelo usuario
//     const realValueText = document.getElementById("real-value-text");
//     const currencyValueText = document.getElementById("currency-value-text");

    
//     realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
//         style: "currency",
//         currency:  "BRL",
//         }).format(inputReais);



//     if(select.value === "U$$ Dólar Americano") {
//         currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
//             style: "currency",
//             currency:  "USD",
//         }).format(inputReais / dolar);

//     }
    
//     if(select.value === "€ Euro"){
//         currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
//             style: "currency",
//             currency:  "EUR",
//         }).format(inputReais / euro);

//     }

// };

// changeCurrency = () => {
//     const currencyName = document.getElementById("currency-name")
//     const currencyImg = document.getElementById("currency-img")

//     if(select.value === 'U$$ Dólar Americano'){
//         currencyName.innerHTML = "Dólar Americano"
//         currencyImg.src = "./assets/estados-unidos (1) 1.png"
//     }
    
//     if(select.value === '€ Euro'){
//         currencyName.innerHTML = "Euro"
//         currencyImg.src = "./assets/euro.png"
//     }
//     //./assets/euro.png
// }

// button.addEventListener("click", convertValues)
// select.addEventListener("change",changeCurrency)












// Ctrl + :; = comenta tudo que selecioanar JS

