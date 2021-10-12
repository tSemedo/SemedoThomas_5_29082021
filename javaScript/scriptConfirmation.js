main();

function main() {
  recupereIdInLS();
}

function recupereIdInLS() {
    const totalConfirmation = document.querySelector(".prixTotal");
    const orderIdTotal = document.querySelector(".orderId");
    
    TotalPrix = localStorage.getItem("totalPrix");
    IdOrder = localStorage.getItem("orderId");

    totalConfirmation.innerHTML = TotalPrix/100;
    orderIdTotal.innerHTML = IdOrder;
  }