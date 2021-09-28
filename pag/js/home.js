let weeklyCalculation = document.getElementById("weeklyCalculation");
weeklyCalculation.addEventListener('submit', calcExpenses)


function getValues() {
  let mes = document.getElementById("mes").value;
  let presupuesto = document.getElementById("presupuesto").value;
  let hogar = document.getElementById("hogar").value;
  let transporte = document.getElementById("transporte").value;
  let comida = document.getElementById("comida").value;


  return {
    mes,
    presupuesto,
    hogar,
    transporte,
    comida
  };
}

function calcExpenses(e) {
  e.preventDefault();

  const {
    mes,
    presupuesto,
    hogar,
    transporte,
    comida
  } = getValues();
  let totalGastos = parseInt(hogar) + parseInt(transporte) + parseInt(comida);
  let balance = presupuesto - totalGastos;

  ui(mes, presupuesto, balance, totalGastos);
}

function ui(mes, presupuesto, balance, totalGastos) {
  let result = document.getElementById("result");
  let dataPrint = document.createElement('div');
  dataPrint.innerHTML = `
    <div class="containerData ">
      <div>
        <h6 class="mesD">${mes}</h6>
      </div>
      <div>
        <h6>$ ${presupuesto}</h6>
      </div>
      <div>
      <h6>$ ${totalGastos}</h6>
    </div>
      <div>
        <h6> $ ${balance}</h6>
      </div>
    </div>
    `
  result.appendChild(dataPrint);

  reset();
}

//Funcion para resetiar resultados
function reset() {
  document.getElementById("weeklyCalculation").reset();
}