function Calculadora() {
  this.display = document.querySelector(".display");
  this.inicia = () => {
    this.clickBtn();
    this.pressEnter();
  };

  this.pressEnter = function (e) {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.resFinish();
      }
    });
  };

  this.clickBtn = function () {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("num")) {
        this.btnOnDisplay(el.innerHTML);
      }
      if (el.classList.contains("del")) {
        this.delOneButton();
      }
      if (el.classList.contains("clear")) {
        this.clearAll();
      }
      if (el.classList.contains("total")) {
        this.resFinish();
      }

      this.display.focus();
    });
  };

  this.resFinish = function () {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert("conta inválida");
        return this.clearAll()
      }

      this.display.value = conta;
    } catch {
      alert("conta inválida");
      return this.clearAll()
    }
  };

  this.clearAll = function () {
    this.display.value = "";
  };

  this.delOneButton = function () {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.btnOnDisplay = function (valor) {
    this.display.value += valor;
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
