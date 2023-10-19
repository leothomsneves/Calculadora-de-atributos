let ultimaRaca = "";
let checkBoxSelecionadas = 0;
let checkBoxBonusSelecionadas = 0;
let totalAtributo = [0, 0, 0, 0, 0, 0];
let custoTotal = 10;
let ultimovalor = [0, 0, 0, 0, 0, 0];
let ultimoBonusRaca = [0, 0, 0, 0, 0, 0];
let ultimoBonus = [0, 0, 0, 0, 0, 0];
let custoanterior = [0, 0, 0, 0, 0, 0];
const forca = 0;
const des = 1;
const con = 2;
const int = 3;
const sab = 4;
const car = 5;
let camposRacas = new Array(6);

const mapRaca = new Map();
mapRaca.set('humano', [0, 0, 0, 0, 0, 0]);
mapRaca.set('anao', [0, -1, 2, 0, 1, 0]);
mapRaca.set('dahllan', [0, 1, 0, -1, 2, 0]);
mapRaca.set('elfo', [0, 1, -1, 2, 0, 0]);
mapRaca.set('goblin', [0, 2, 0, 1, 0, -1]);
mapRaca.set('lefou', [0, 0, 0, 0, 0, 0 - 1]);
mapRaca.set('minotauro', [2, 0, 1, 0, -1, 0]);
mapRaca.set('qareen', [0, 0, 0, 1, -1, 2]);
mapRaca.set('golemF', [2, 0, 1, 0, 0, -1]);
mapRaca.set('golemBa', [1, 0, 2, 0, 0, -1]);
mapRaca.set('golemB', [1, 0, 0, 0, 0, -1]);
mapRaca.set('golemC', [2, 0, 2, 0, 0, -2]);
mapRaca.set('golemE', [1, 0, -1, 0, 1, 1]);
mapRaca.set('golemG', [1, 0, 2, 0, 0, -1]);
mapRaca.set('golemP', [1, 0, 2, 0, 0, -1]);
mapRaca.set('golemS', [2, 0, 1, 0, 0, -1]);
mapRaca.set('hynne', [-1, 2, 0, 0, 0, 1]);
mapRaca.set('kliren', [-1, 0, 0, 2, 0, 1]);
mapRaca.set('medusa', [0, 2, 0, 0, 0, 1]);
mapRaca.set('osteon', [0, 0, -1, 0, 0, 0]);
mapRaca.set('sereia', [0, 0, 0, 0, 0, 0]);
mapRaca.set('silfide', [-2, 1, 0, 0, 0, 2]);
mapRaca.set('aggelus', [0, 0, 0, 0, 2, 1]);
mapRaca.set('sulfure', [0, 2, 0, 1, 0, 0]);
mapRaca.set('trog', [1, 0, 2, -1, 0, 0]);
mapRaca.set('meio-orc', [2, 0, 0, 0, 0, 0]);
mapRaca.set('orc', [2, 0, 1, -1, 0, 0]);
mapRaca.set('tabrachi', [1, 0, 2, 0, 0, -1]);
mapRaca.set('ogro', [2, 0, 1, -1, 0, -1]);
mapRaca.set('bugbear', [2, 1, 0, 0, 0, -1]);
mapRaca.set('hobgoblin', [0, 1, 2, 0, 0, -1]);
mapRaca.set('centauro', [1, 0, 0, -1, 2, 0])
mapRaca.set('gnoll', [0, 0, 2, -1, 1, 0]);
mapRaca.set('kaijin', [2, 0, 1, 0, 0, -2]);
mapRaca.set('kappa', [0, 2, 1, 0, 0, -1]);
mapRaca.set('nezumi', [0, 1, 2, -1, 0, 0]);
mapRaca.set('tengu', [0, 2, 0, 1, 0, 0]);
mapRaca.set('kallyanach', [0, 0, 0, 0, 0, 0]);
mapRaca.set('minauro', [1, 0, 0, 0, 0, 0]);
mapRaca.set('kobolds', [-1, 2, 0, 0, 0, 0])
mapRaca.set('harpia', [0, 2, 0, -1, 0, 1]);
mapRaca.set('ceratops', [1, -1, 2, -1, 0, 0]);
mapRaca.set('pteros', [0, 1, 0, -1, 2, 0]);
mapRaca.set('velocis', [0, 2, 0, -1, 1, 0]);
mapRaca.set('voracis', [0, 2, 1, -1, 0, 0]);
mapRaca.set('yidishan', [0, 0, 0, 0, 0, 0 - 2]); //+1 em tres exceto carisma
mapRaca.set('moreauC', [0, 0, 0, 0, 1, 0]); //+1 em dois
mapRaca.set('moreauH', [0, 0, 0, 0, 1, 0]); //+1 em dois
mapRaca.set('moreauR', [0, 0, 0, 1, 0, 0]); //+1 em dois
mapRaca.set('moreauS', [0, 0, 0, 1, 0, 0]); //+1 em dois
mapRaca.set('moreauB', [1, 0, 0, 0, 0, 0]); //+1 em dois
mapRaca.set('moreauCO', [0, 1, 0, 0, 0, 0]); //+1 em dois
mapRaca.set('moreauCR', [0, 0, 1, 0, 0, 0]); //+1 em dois
mapRaca.set('moreauG', [0, 0, 0, 0, 0, 1]); //+1 em dois
mapRaca.set('moreauL', [1, 0, 0, 0, 0, 0]); //+1 em dois
mapRaca.set('moreauLO', [0, 0, 0, 0, 0, 1]); //+1 em dois
mapRaca.set('moreauM', [0, 1, 0, 0, 0, 0]); //+1 em dois
mapRaca.set('moreauU', [0, 0, 1, 0, 0, 0]); //+1 em dois
mapRaca.set('elfoM', [0, 2, 1, -1, 0, 0]);
mapRaca.set('nagahM', [1, 1, 1, 0, 0, 0]);
mapRaca.set('nagahF', [0, 0, 0, 1, 1, 1]);
mapRaca.set('finntroll', [-1, 0, 1, 2, 0, 0]);
mapRaca.set('personalizado', [0, 0, 0, 0, 0, 0]);



function CalculaCusto(valor, custo) {
    console.log(valor)
    let atributo = GetAtributo(valor);
    let v1 = window.document.getElementById(valor);
    let n1 = Number(v1.value);
    if (n1 < -1) {
        v1.value = -1;
        n1 = Number(v1.value);
    }
    else if (n1 > 4) {
        v1.value = 4;
        n1 = Number(v1.value);
    }
    switch (n1) {
        case -1:
            window.document.getElementById(custo).innerHTML = -1;
            SomarTotal(valor);
            if (custoanterior[atributo] == 0) {
                custoTotal -= -1;
            }
            else if (custoanterior[atributo] == 1) {
                custoTotal -= -2
            }
            else if (custoanterior[atributo] == 2) {
                custoTotal -= -3
            }
            else if (custoanterior[atributo] == 4) {
                custoTotal -= -5
            }
            else if (custoanterior[atributo] == 7) {
                custoTotal -= -8
            }
            custoanterior[atributo] = -1;
            window.document.getElementById("custo").innerHTML = custoTotal;
            ultimovalor[atributo] = n1;
            break;
        case 0:
            window.document.getElementById(custo).innerHTML = 0;
            SomarTotal(valor);
            custoTotal += custoanterior[atributo];
            custoanterior[atributo] = 0;
            window.document.getElementById("custo").innerHTML = custoTotal;
            ultimovalor[atributo] = n1;
            break;
        case 1:
            window.document.getElementById(custo).innerHTML = 1;
            SomarTotal(valor);
            if (custoanterior[atributo] == -1) {
                custoTotal -= 2;
            }
            else if (custoanterior[atributo] == 0) {
                custoTotal -= 1
            }
            else if (custoanterior[atributo] == 2) {
                custoTotal -= -1
            }
            else if (custoanterior[atributo] == 4) {
                custoTotal -= -3
            }
            else if (custoanterior[atributo] == 7) {
                custoTotal -= -6
            }
            custoanterior[atributo] = 1;
            window.document.getElementById("custo").innerHTML = custoTotal;
            ultimovalor[atributo] = n1;
            break;
        case 2:
            window.document.getElementById(custo).innerHTML = 2;
            SomarTotal(valor);
            if (custoanterior[atributo] == -1) {
                custoTotal -= 3;
            }
            else if (custoanterior[atributo] == 0) {
                custoTotal -= 2
            }
            else if (custoanterior[atributo] == 1) {
                custoTotal -= 1
            }
            else if (custoanterior[atributo] == 4) {
                custoTotal -= -2
            }
            else if (custoanterior[atributo] == 7) {
                custoTotal -= -5
            }
            custoanterior[atributo] = 2;
            window.document.getElementById("custo").innerHTML = custoTotal;
            ultimovalor[atributo] = n1;
            break;
        case 3:
            window.document.getElementById(custo).innerHTML = 4;
            SomarTotal(valor);
            if (custoanterior[atributo] == -1) {
                custoTotal -= 5;
            }
            else if (custoanterior[atributo] == 0) {
                custoTotal -= 4
            }
            else if (custoanterior[atributo] == 1) {
                custoTotal -= 3
            }
            else if (custoanterior[atributo] == 2) {
                custoTotal -= 2
            }
            else if (custoanterior[atributo] == 7) {
                custoTotal -= -3
            }
            custoanterior[atributo] = 4;
            window.document.getElementById("custo").innerHTML = custoTotal;
            ultimovalor[atributo] = n1;
            break;
        case 4:
            window.document.getElementById(custo).innerHTML = 7;
            SomarTotal(valor);
            if (custoanterior[atributo] == -1) {
                custoTotal -= 8;
            }
            else if (custoanterior[atributo] == 0) {
                custoTotal -= 7;
            }
            else if (custoanterior[atributo] == 1) {
                custoTotal -= 6;
            }
            else if (custoanterior[atributo] == 2) {
                custoTotal -= 5;
            }
            else if (custoanterior[atributo] == 4) {
                custoTotal -= 3;
            }
            custoanterior[atributo] = 7;
            window.document.getElementById("custo").innerHTML = custoTotal;
            ultimovalor[atributo] = n1;
            break;
    }
}

function Bonusderaca() {
    let raca = document.getElementById("racas");
    let valor = raca.options[raca.selectedIndex].value;
    camposRacas[forca] = document.getElementById("raca_for");
    camposRacas[des] = document.getElementById("raca_des");
    camposRacas[con] = document.getElementById("raca_con");
    camposRacas[int] = document.getElementById("raca_int");
    camposRacas[sab] = document.getElementById("raca_sab");
    camposRacas[car] = document.getElementById("raca_car");

    atualizarBonusdeRaca(valor);
    if (valor == "personalizado") {
        for (let i = 0; i < camposRacas.length; i++) {
            camposRacas[i].disabled = false;
        }
        camposRacas[0].addEventListener("keydown", function (event) {
            if (event.keyCode == 13) {
                SomarTotal("raca_for");
            }
        });
        camposRacas[1].addEventListener("keydown", function (event) {
            if (event.keyCode == 13) {
                SomarTotal("raca_des");
            }
        });
        camposRacas[2].addEventListener("keydown", function (event) {
            if (event.keyCode == 13) {
                SomarTotal("raca_con");
            }
        });
        camposRacas[3].addEventListener("keydown", function (event) {
            if (event.keyCode == 13) {
                SomarTotal("raca_int");
            }
        });
        camposRacas[4].addEventListener("keydown", function (event) {
            if (event.keyCode == 13) {
                SomarTotal("raca_sab");
            }
        });
        camposRacas[5].addEventListener("keydown", function (event) {
            if (event.keyCode == 13) {
                SomarTotal("raca_car");
            }
        });
        camposRacas[0].setAttribute("onblur", "SomarTotal('raca_for')");
        camposRacas[1].setAttribute("onblur", "SomarTotal('raca_des')");
        camposRacas[2].setAttribute("onblur", "SomarTotal('raca_con')");
        camposRacas[3].setAttribute("onblur", "SomarTotal('raca_int')");
        camposRacas[4].setAttribute("onblur", "SomarTotal('raca_sab')");
        camposRacas[5].setAttribute("onblur", "SomarTotal('raca_car')");
    }
    if (valor == "humano" || valor == "lefou" || valor == "osteon" || valor == "sereia" || valor == "meio-orc" || valor == "golemF" || valor == "golemBa" || valor == "golemB" ||
        valor == "golemC" || valor == "golemE" || valor == "golemG" || valor == "golemP" || valor == "golemS" || valor == "minauro" || valor == "kallyanach" || valor == "yidishan" ||
        valor == "moreauC" || valor == "moreauH" || valor == "moreauR" || valor == "moreauS" || valor == "moreauB" || valor == "moreauCO" || valor == "moreauCR" || valor == "moreauG" ||
        valor == "moreauL" || valor == "moreauLO" || valor == "moreauM" || valor == "moreauU") {
        CriarCheckbox(valor);
    }
}

function atualizarBonusdeRaca(racaSelecionada) {
    checkBoxSelecionadas = 0;
    checkBoxBonusSelecionadas = 0;
    for (let i = 0; i < 6; i++) {
        if (ultimaRaca == "personalizado") {
            camposRacas[i].disabled = true;
            camposRacas[i].removeAttribute("onblur");
            camposRacas[i].removeAttribute("onkeydown");
        }
    }
    if (document.getElementById("label_for") || document.getElementById("label_des") || document.getElementById("label_gra")) {
        ApagarCheckbox(ultimaRaca);
    }
    ultimaRaca = racaSelecionada;
    for (let i = 0; i < 6; i++) {
        camposRacas[i].value = mapRaca.get(racaSelecionada)[i];
        SomarTotal(camposRacas[i].id);
        ultimoBonusRaca[i] = camposRacas[i].value;
    }
}


function ValorMaior(campo) {
    let b1 = document.getElementById(campo);
    b1.value = Number(b1.value) + 2;
    SomarTotal(campo);
}

function ValorMenor(campo) {
    let b1 = document.getElementById(campo);
    b1.value = Number(b1.value) + 1;
    SomarTotal(campo);
}

function Penalidade(campo) {
    let b1 = document.getElementById(campo);
    b1.value = Number(b1.value) - 1;
    SomarTotal(campo);
}

function PenalidadeMaior(campo) {
    let b1 = document.getElementById(campo);
    b1.value = Number(b1.value) - 2;
    SomarTotal(campo);
}

function ResetarValor(campo) {
    let b1 = document.getElementById(campo);
    b1.value = 0;
    SomarTotal(campo);
}

function CriarCheckbox(raca) {
    if (raca == "humano" || raca == "sereia" || raca == "minauro" || raca == "moreauC" || raca == "moreauH" || raca == "moreauR" || raca == "moreauS" || raca == "moreauB" ||
        raca == "moreauCO" || raca == "moreauCR" || raca == "moreauG" || raca == "moreauL" || raca == "moreauLO" || raca == "moreauM" || raca == "moreauU") {
        CriarTodasCheckbox();
    }
    else if (raca == "lefou" || raca == "yidishan") {
        let labels = new Array(5);
        let box = new Array(5);
        for (let i = 0; i < 5; i++) {
            labels[i] = document.createElement("label");
            box[i] = document.createElement("input");
            box[i].setAttribute("type", "checkbox");

        }
        labels[0].setAttribute("id", "label_for");
        labels[0].innerText = "For";
        labels[1].setAttribute("id", "label_des");
        labels[1].innerText = "Des";
        labels[2].setAttribute("id", "label_con");
        labels[2].innerText = "Con";
        labels[3].setAttribute("id", "label_int");
        labels[3].innerText = "Int";
        labels[4].setAttribute("id", "label_sab");
        labels[4].innerText = "Sab";
        box[0].setAttribute("id", "selet_for");
        box[0].setAttribute("onclick", "BonusRacaCheckbox('selet_for')")
        box[1].setAttribute("id", "selet_des");
        box[1].setAttribute("onclick", "BonusRacaCheckbox('selet_des')")
        box[2].setAttribute("id", "selet_con");
        box[2].setAttribute("onclick", "BonusRacaCheckbox('selet_con')")
        box[3].setAttribute("id", "selet_int");
        box[3].setAttribute("onclick", "BonusRacaCheckbox('selet_int')")
        box[4].setAttribute("id", "selet_sab");
        box[4].setAttribute("onclick", "BonusRacaCheckbox('selet_sab')")
        for (let i = 0; i < 5; i++) {
            document.getElementById("checkracas").appendChild(labels[i]);
            document.getElementById("checkracas").appendChild(box[i]);
        }
    }
    else if (raca == "osteon") {
        let labels = new Array(5);
        let box = new Array(5);
        for (let i = 0; i < 5; i++) {
            labels[i] = document.createElement("label");
            box[i] = document.createElement("input");
            box[i].setAttribute("type", "checkbox");

        }
        labels[0].setAttribute("id", "label_for");
        labels[0].innerText = "For";
        labels[1].setAttribute("id", "label_des");
        labels[1].innerText = "Des";
        labels[2].setAttribute("id", "label_int");
        labels[2].innerText = "Int";
        labels[3].setAttribute("id", "label_sab");
        labels[3].innerText = "Sab";
        labels[4].setAttribute("id", "label_car");
        labels[4].innerText = "Car";
        box[0].setAttribute("id", "selet_for");
        box[0].setAttribute("onclick", "BonusRacaCheckbox('selet_for')")
        box[1].setAttribute("id", "selet_des");
        box[1].setAttribute("onclick", "BonusRacaCheckbox('selet_des')")
        box[2].setAttribute("id", "selet_int");
        box[2].setAttribute("onclick", "BonusRacaCheckbox('selet_int')")
        box[3].setAttribute("id", "selet_sab");
        box[3].setAttribute("onclick", "BonusRacaCheckbox('selet_sab')")
        box[4].setAttribute("id", "selet_car");
        box[4].setAttribute("onclick", "BonusRacaCheckbox('selet_car')")
        for (let i = 0; i < 5; i++) {
            document.getElementById("checkracas").appendChild(labels[i]);
            document.getElementById("checkracas").appendChild(box[i]);
        }
    }
    else if (raca == "meio-orc") {
        let labels = new Array(4);
        let box = new Array(4);
        for (let i = 0; i < 4; i++) {
            labels[i] = document.createElement("label");
            box[i] = document.createElement("input");
            box[i].setAttribute("type", "checkbox");

        }
        labels[0].setAttribute("id", "label_des");
        labels[0].innerText = "Des";
        labels[1].setAttribute("id", "label_con");
        labels[1].innerText = "Con";
        labels[2].setAttribute("id", "label_int");
        labels[2].innerText = "Int";
        labels[3].setAttribute("id", "label_sab");
        labels[3].innerText = "Sab";
        box[0].setAttribute("id", "selet_des");
        box[0].setAttribute("onclick", "BonusRacaCheckbox('selet_des')");
        box[1].setAttribute("id", "selet_con");
        box[1].setAttribute("onclick", "BonusRacaCheckbox('selet_con')");
        box[2].setAttribute("id", "selet_int");
        box[2].setAttribute("onclick", "BonusRacaCheckbox('selet_int')");
        box[3].setAttribute("id", "selet_sab");
        box[3].setAttribute("onclick", "BonusRacaCheckbox('selet_sab')");
        for (let i = 0; i < 4; i++) {
            document.getElementById("checkracas").appendChild(labels[i]);
            document.getElementById("checkracas").appendChild(box[i]);
        }
    }
    else if (raca == "golemB") {
        CriarTodasCheckbox();
        CriarTamanhos()
    }
    else if (raca == "kallyanach") {
        CriarTodasCheckbox();
        CriarAtrKally();
    }
    else {
        CriarTamanhos()
    }
}

function CriarTodasCheckbox() {
    let labels = new Array(6);
    let box = new Array(6);
    for (let i = 0; i < 6; i++) {
        labels[i] = document.createElement("label");
        box[i] = document.createElement("input");
        box[i].setAttribute("type", "checkbox");

    }
    labels[forca].setAttribute("id", "label_for");
    labels[forca].innerText = "For";
    labels[des].setAttribute("id", "label_des");
    labels[des].innerText = "Des";
    labels[con].setAttribute("id", "label_con");
    labels[con].innerText = "Con";
    labels[int].setAttribute("id", "label_int");
    labels[int].innerText = "Int";
    labels[sab].setAttribute("id", "label_sab");
    labels[sab].innerText = "Sab";
    labels[car].setAttribute("id", "label_car");
    labels[car].innerText = "Car";
    box[forca].setAttribute("id", "selet_for");
    box[forca].setAttribute("onclick", "BonusRacaCheckbox('selet_for')")
    box[des].setAttribute("id", "selet_des");
    box[des].setAttribute("onclick", "BonusRacaCheckbox('selet_des')")
    box[con].setAttribute("id", "selet_con");
    box[con].setAttribute("onclick", "BonusRacaCheckbox('selet_con')")
    box[int].setAttribute("id", "selet_int");
    box[int].setAttribute("onclick", "BonusRacaCheckbox('selet_int')")
    box[sab].setAttribute("id", "selet_sab");
    box[sab].setAttribute("onclick", "BonusRacaCheckbox('selet_sab')")
    box[car].setAttribute("id", "selet_car");
    box[car].setAttribute("onclick", "BonusRacaCheckbox('selet_car')")
    for (let i = 0; i < 6; i++) {
        document.getElementById("checkracas").appendChild(labels[i]);
        document.getElementById("checkracas").appendChild(box[i]);
    }
}

function CriarTamanhos() {
    let labels = new Array(2);
    let box = new Array(2);
    for (let i = 0; i < 2; i++) {
        labels[i] = document.createElement("label");
        box[i] = document.createElement("input");
        box[i].setAttribute("type", "checkbox");
    }
    labels[0].setAttribute("id", "label_peq");
    labels[0].innerText = "Pequeno";
    labels[1].setAttribute("id", "label_gra");
    labels[1].innerText = "Grande";
    box[0].setAttribute("id", "selet_peq");
    box[0].setAttribute("onclick", "BonusTamanho('selet_peq')");
    box[1].setAttribute("id", "selet_gra");
    box[1].setAttribute("onclick", "BonusTamanho('selet_gra')");
    for (let i = 0; i < 2; i++) {
        document.getElementById("checktamanhos").appendChild(labels[i]);
        document.getElementById("checktamanhos").appendChild(box[i]);
    }
}

function CriarAtrKally() {
    let labels = new Array(2);
    let box = new Array(2);
    for (let i = 0; i < 2; i++) {
        labels[i] = document.createElement("label");
        box[i] = document.createElement("input");
        box[i].setAttribute("type", "checkbox");
    }
    labels[0].setAttribute("id", "label_atr1");
    labels[0].innerText = "+2 em 1 atributo";
    labels[1].setAttribute("id", "label_atr2");
    labels[1].innerText = "+1 em 2 atributos";
    box[0].setAttribute("id", "selet_atr1");
    box[0].setAttribute("onclick", "BonusKallyanach('selet_atr1')");
    box[1].setAttribute("id", "selet_atr2");
    box[1].setAttribute("onclick", "BonusKallyanach('selet_atr2')");
    for (let i = 0; i < 2; i++) {
        document.getElementById("checktamanhos").appendChild(labels[i]);
        document.getElementById("checktamanhos").appendChild(box[i]);
    }
}

function BonusRacaCheckbox(checkbox) {
    let raca = document.getElementById("racas");
    let valor = raca.options[raca.selectedIndex].value;
    let atributo = GetAtributo(checkbox);
    let campo = getCampoRaca(checkbox);
    let c = document.getElementById(checkbox)
    if (valor == "golemB" || valor == "minauro" || valor == "moreauC" || valor == "moreauH" || valor == "moreauR" || valor == "moreauS" || valor == "moreauB" || valor == "moreauCO" ||
        valor == "moreauCR" || valor == "moreauG" || valor == "moreauL" || valor == "moreauLO" || valor == "moreauM" || valor == "moreauU") {
        if (c.checked) {
            if (checkBoxSelecionadas < 2) {
                ValorMenor(campo);
                ultimoBonusRaca[atributo] = Number(ultimoBonusRaca[atributo]) + 1;
                checkBoxSelecionadas++;
            }
            else {
                c.checked = false;
            }
        }
        else {
            if (checkBoxSelecionadas >= 0) {
                Penalidade(campo);
                ultimoBonusRaca[atributo] = Number(ultimoBonusRaca[atributo]) - 1;
                checkBoxSelecionadas--;
            }
        }
    }
    else if (valor == "meio-orc") {
        if (c.checked) {
            if (checkBoxSelecionadas < 1) {
                ValorMenor(campo);
                ultimoBonusRaca[atributo] = Number(ultimoBonusRaca[atributo]) + 1;
                checkBoxSelecionadas++;
            }
            else {
                c.checked = false;
            }
        }
        else {
            if (checkBoxSelecionadas >= 0) {
                Penalidade(campo);
                ultimoBonusRaca[atributo] = Number(ultimoBonusRaca[atributo]) - 1;
                checkBoxSelecionadas--;
            }
        }
    }
    else if (valor == "kallyanach") {
        let atrMaisDois = document.getElementById("selet_atr1");
        let atrMaisUm = document.getElementById("selet_atr2");
        if (atrMaisDois.checked) {
            if (c.checked) {
                if (checkBoxSelecionadas < 1) {
                    ValorMaior(campo);
                    ultimoBonusRaca[atributo] = Number(ultimoBonusRaca[atributo]) + 2;
                    checkBoxSelecionadas++;
                }
                else {
                    c.checked = false;
                }
            }
            else {
                if (checkBoxSelecionadas >= 0) {
                    PenalidadeMaior(campo);
                    ultimoBonusRaca[atributo] = Number(ultimoBonusRaca[atributo]) - 2;
                    checkBoxSelecionadas--;
                }
            }
        }
        else if (atrMaisUm.checked) {
            if (c.checked) {
                if (checkBoxSelecionadas < 2) {
                    ValorMenor(campo);
                    ultimoBonusRaca[atributo] = Number(ultimoBonusRaca[atributo]) + 1;
                    checkBoxSelecionadas++;
                }
                else {
                    c.checked = false;
                }
            }
            else {
                if (checkBoxSelecionadas >= 0) {
                    Penalidade(campo);
                    ultimoBonusRaca[atributo] = Number(ultimoBonusRaca[atributo]) - 1;
                    checkBoxSelecionadas--;
                }
            }
        }
        else {
            c.checked = false;
        }
    }
    else {
        if (c.checked) {
            if (checkBoxSelecionadas < 3) {
                ValorMenor(campo);
                ultimoBonusRaca[atributo] = Number(ultimoBonusRaca[atributo]) + 1;
                checkBoxSelecionadas++;
            }
            else {
                c.checked = false;
            }
        }
        else {
            if (checkBoxSelecionadas >= 0) {
                Penalidade(campo);
                ultimoBonusRaca[atributo] = Number(ultimoBonusRaca[atributo]) - 1;
                checkBoxSelecionadas--;
            }
        }
    }
}

function BonusTamanho(checkbox) {
    let c = document.getElementById(checkbox)
    if (c.checked) {
        if (checkBoxBonusSelecionadas < 1) {
            if (checkbox == "selet_peq") {
                ValorMenor("raca_des");
                ultimoBonusRaca[des] = Number(ultimoBonusRaca[des]) + 1;
                checkBoxBonusSelecionadas++;
            }
            else {
                Penalidade("raca_des");
                ultimoBonusRaca[des] = Number(ultimoBonusRaca[des]) - 1;
                checkBoxBonusSelecionadas++;
            }
        }
        else {
            c.checked = false;
        }
    }
    else {
        if (checkBoxBonusSelecionadas >= 0) {
            if (checkbox == "selet_peq") {
                Penalidade("raca_des");
                ultimoBonusRaca[des] = Number(ultimoBonusRaca[des]) - 1;
                checkBoxBonusSelecionadas--;
            }
            else {
                ValorMenor("raca_des");
                ultimoBonusRaca[des] = Number(ultimoBonusRaca[des]) + 1;
                checkBoxBonusSelecionadas--;
            }
        }
    }
}

function BonusKallyanach(checkbox) {
    let c = document.getElementById(checkbox)
    if (c.checked) {
        if (checkBoxBonusSelecionadas < 1) {
            checkBoxBonusSelecionadas++;
        }
        else {
            c.checked = false;
        }
    }
    else {
        if (checkBoxBonusSelecionadas >= 0) {
            checkBoxBonusSelecionadas--;
            checkBoxSelecionadas = 0;
            document.getElementById("selet_for").checked = false;
            document.getElementById("selet_des").checked = false;
            document.getElementById("selet_con").checked = false;
            document.getElementById("selet_int").checked = false;
            document.getElementById("selet_sab").checked = false;
            document.getElementById("selet_car").checked = false;
            for (let i = 0; i < 6; i++) {
                camposRacas[i].value = 0;
                SomarTotal(camposRacas[i].id);
                ultimoBonusRaca[i] = camposRacas[i].value;
            }
        }
    }
}

function ApagarCheckbox(ultimaRaca) {
    if (ultimaRaca == "humano" || ultimaRaca == "sereia" || ultimaRaca == "minauro" || ultimaRaca == "moreauC" || ultimaRaca == "moreauH" || ultimaRaca == "moreauR" ||
        ultimaRaca == "moreauS" || ultimaRaca == "moreauB" || ultimaRaca == "moreauCO" || ultimaRaca == "moreauCR" || ultimaRaca == "moreauG" || ultimaRaca == "moreauL" ||
        ultimaRaca == "moreauLO" || ultimaRaca == "moreauM" || ultimaRaca == "moreauU") {
        Apagar("label_for", "selet_for");
        Apagar("label_des", "selet_des");
        Apagar("label_con", "selet_con");
        Apagar("label_int", "selet_int");
        Apagar("label_sab", "selet_sab");
        Apagar("label_car", "selet_car");
    }
    else if (ultimaRaca == "lefou") {
        Apagar("label_for", "selet_for");
        Apagar("label_des", "selet_des");
        Apagar("label_con", "selet_con");
        Apagar("label_int", "selet_int");
        Apagar("label_sab", "selet_sab");
    }
    else if (ultimaRaca == "osteon") {
        Apagar("label_for", "selet_for");
        Apagar("label_des", "selet_des");
        Apagar("label_int", "selet_int");
        Apagar("label_sab", "selet_sab");
        Apagar("label_car", "selet_car");
    }
    else if (ultimaRaca == "meio-orc") {
        Apagar("label_des", "selet_des");
        Apagar("label_con", "selet_con");
        Apagar("label_int", "selet_int");
        Apagar("label_sab", "selet_sab");
    }
    else if (ultimaRaca == "golemB") {
        Apagar("label_for", "selet_for");
        Apagar("label_des", "selet_des");
        Apagar("label_con", "selet_con");
        Apagar("label_int", "selet_int");
        Apagar("label_sab", "selet_sab");
        Apagar("label_car", "selet_car");
        Apagar("label_peq", "selet_peq");
        Apagar("label_gra", "selet_gra");
    }
    else if (ultimaRaca == "golemF" || ultimaRaca == "golemBa" || ultimaRaca == "golemC" || ultimaRaca == "golemE" || ultimaRaca == "golemG" || ultimaRaca == "golemP" ||
        ultimaRaca == "golemS") {
        Apagar("label_peq", "selet_peq");
        Apagar("label_gra", "selet_gra");
    }
    else if (ultimaRaca == "kallyanach") {
        Apagar("label_for", "selet_for");
        Apagar("label_des", "selet_des");
        Apagar("label_con", "selet_con");
        Apagar("label_int", "selet_int");
        Apagar("label_sab", "selet_sab");
        Apagar("label_car", "selet_car");
        Apagar("label_atr1", "selet_atr1");
        Apagar("label_atr2", "selet_atr2");
    }
}

function Apagar(label, check) {
    let l = document.getElementById(label);
    let c = document.getElementById(check);
    l.remove();
    c.remove();
}

function SomarTotal(valor) {
    let racas = document.getElementById("racas");
    let raca = racas.options[racas.selectedIndex].value;
    let diferenca = 0;
    let campo = GetCampo(valor);
    let atributo = GetAtributo(valor);
    let valorasomar = Number(document.getElementById(valor).value);

    if (campo == 1) {
        if (valorasomar == 0) {
            totalAtributo[atributo] = Number(totalAtributo[atributo]) - Number(ultimovalor[atributo]);
        }
        else {
            diferenca = ultimovalor[atributo] - valorasomar;
            totalAtributo[atributo] = Number(totalAtributo[atributo]) - diferenca;
        }
        window.document.getElementById(GetTotal(valor)).innerHTML = totalAtributo[atributo];
    }

    else if (campo == 2) {
        if (valorasomar == 0) {
            totalAtributo[atributo] = Number(totalAtributo[atributo]) - Number(ultimoBonusRaca[atributo]);
        }
        else {
            diferenca = ultimoBonusRaca[atributo] - valorasomar;
            totalAtributo[atributo] = Number(totalAtributo[atributo]) - diferenca;
        }
        if(raca=="personalizado"){
            ultimoBonusRaca[atributo]=valorasomar;
        }
        window.document.getElementById(GetTotal(valor)).innerHTML = totalAtributo[atributo];
    }

    else if (campo == 3) {
        if (valorasomar == 0) {
            totalAtributo[atributo] = Number(totalAtributo[atributo]) - Number(ultimoBonus[atributo]);
        }
        else {
            diferenca = ultimoBonus[atributo] - valorasomar;
            totalAtributo[atributo] = Number(totalAtributo[atributo]) - diferenca;
        }
        ultimoBonus[atributo] = valorasomar;
        window.document.getElementById(GetTotal(valor)).innerHTML = totalAtributo[atributo];
    }
}

function GetCampo(campo) {
    if (campo == "val_for" || campo == "val_des" || campo == "val_con" || campo == "val_int" || campo == "val_sab" || campo == "val_car") {
        return 1;
    }
    else if (campo == "raca_for" || campo == "raca_des" || campo == "raca_con" || campo == "raca_int" || campo == "raca_sab" || campo == "raca_car") {
        return 2;
    }
    else if (campo == "bon_for" || campo == "bon_des" || campo == "bon_con" || campo == "bon_int" || campo == "bon_sab" || campo == "bon_car") {
        return 3;
    }
}

function GetAtributo(campo) {
    if (campo == "val_for" || campo == "raca_for" || campo == "bon_for" || campo == "selet_for") {
        return forca;
    }
    else if (campo == "val_des" || campo == "raca_des" || campo == "bon_des" || campo == "selet_des") {
        return des;
    }
    else if (campo == "val_con" || campo == "raca_con" || campo == "bon_con" || campo == "selet_con") {
        return con;
    }
    else if (campo == "val_int" || campo == "raca_int" || campo == "bon_int" || campo == "selet_int") {
        return int;
    }
    else if (campo == "val_sab" || campo == "raca_sab" || campo == "bon_sab" || campo == "selet_sab") {
        return sab;
    }
    else if (campo == "val_car" || campo == "raca_car" || campo == "bon_car" || campo == "selet_car") {
        return car;
    }
}

function getCampoRaca(campo) {
    if (campo == "selet_for") {
        return "raca_for"
    }
    else if (campo == "selet_des") {
        return "raca_des"
    }
    else if (campo == "selet_con") {
        return "raca_con"
    }
    else if (campo == "selet_int") {
        return "raca_int"
    }
    else if (campo == "selet_sab") {
        return "raca_sab"
    }
    else if (campo == "selet_car") {
        return "raca_car"
    }
}

function GetTotal(campo) {
    if (campo == "val_for" || campo == "raca_for" || campo == "bon_for") {
        return "tot_for";
    }
    else if (campo == "val_des" || campo == "raca_des" || campo == "bon_des") {
        return "tot_des";
    }
    else if (campo == "val_con" || campo == "raca_con" || campo == "bon_con") {
        return "tot_con";
    }
    else if (campo == "val_int" || campo == "raca_int" || campo == "bon_int") {
        return "tot_int";
    }
    else if (campo == "val_sab" || campo == "raca_sab" || campo == "bon_sab") {
        return "tot_sab";
    }
    else if (campo == "val_car" || campo == "raca_car" || campo == "bon_car") {
        return "tot_car";
    }
}