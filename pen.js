class Pen {
  constructor() {
    this.arrayPens = [];
    this.idPen = 1;
  }

  showData() {
    let pen = this.readData();

    this.cleanData();
    if (this.validate(pen)) {
      this.add(pen);
      res.innerHTML += `<br><strong>ID:</strong> ${pen.idPen}`;
      res.innerHTML += `<br><strong>Modelo:</strong> ${pen.model}`;
      res.innerHTML += `<br><strong>Cor:</strong> ${pen.color}`;
      res.innerHTML += `<br><strong>Ponta:</strong> ${pen.tip}`;
      res.innerHTML += `<br><strong>Carga:</strong> ${pen.charge}%`;
      res.innerHTML += `<br><strong>Tampa:</strong> ${pen.cap}<br>`;

    }
    console.log(this.arrayPens);
  }

  readData() {
    let pen = {};

    pen.idPen = this.idPen;
    pen.model = document.querySelector("#model").value;
    pen.color = document.querySelector("#color").value;
    pen.tip = document.querySelector("#tip").value;
    pen.charge = document.querySelector("#charge").value;

    if (document.querySelector("#cap").checked) {
      pen.cap = document.querySelector("#cap").value;
    } else pen.cap = document.querySelector("#capless").value;

    return pen;
  }
  add(pen) {
    this.arrayPens.push(pen);
    this.idPen++;
  }

  cleanData() {
    document.querySelector("#model").value = "";
    document.querySelector("#color").value = "";
    document.querySelector("#tip").value = "";
    document.querySelector("#charge").value = "";
  }

  cleanScreen() {
    res.innerHTML = "";
    this.cleanData();
    this.idPen = 1;
    this.arrayPens = [];
  }

  validate(pen) {
    let msg = "";
    if (pen.model == "") {
      msg += "- Preencha o campo MODELO corretamente! \n";
    }
    if (pen.color == "") {
      msg += "- Preencha o campo COR corretamente! \n";
    }
    if ((pen.tip == "") || (pen.tip <= 0) ) {
      msg += "- Preencha o campo PONTA corretamente! \n";
    }
    if ((pen.charge == "") || (pen.charge <= 0) ) {
      msg += "- Preencha o campo CARGA corretamente! \n";
    }
    if (msg != "") {
      alert(msg);
      return false;
    }
    return true;
  }
}

let pen = new Pen();
