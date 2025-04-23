//Criação das variaveis
let ultimaRaca = "";
let ultimoatr = "";
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
//criação do map de raças
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
mapRaca.set('trogA', [1, -1, 2, -1, 0, 0]);
mapRaca.set('ogro', [3, 0, 2, -1, 0, -1]);
mapRaca.set('bugbear', [2, 1, 0, 0, 0, -1]);
mapRaca.set('hobgoblin', [0, 1, 2, 0, 0, -1]);
mapRaca.set('centauro', [1, 0, 0, -1, 2, 0])
mapRaca.set('gnoll', [0, 0, 2, -1, 1, 0]);
mapRaca.set('kallyanach', [0, 0, 0, 0, 0, 0]);
mapRaca.set('kaijin', [2, 0, 1, 0, 0, -2]);
mapRaca.set('kappa', [0, 2, 1, 0, 0, -1]);
mapRaca.set('mashin', [1, 0, 0, 0, 0, -1]);
mapRaca.set('nezumi', [0, 1, 2, -1, 0, 0]);
mapRaca.set('tengu', [0, 2, 0, 1, 0, 0]);
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
mapRaca.set('duende', [0, 0, 0, 0, 0, 0]);
mapRaca.set('duendeVM', [0, 0, 0, 0, 0, 0]);
mapRaca.set('eiradaan', [-1, 0, 0, 0, 2, 1]);
mapRaca.set('meio-elfo', [0, 0, 0, 1, 0, 0]);
mapRaca.set('meio-gigante', [1, 0, 1, 0, 0, -1]);
mapRaca.set('satiro', [0, 1, 0, 0, -1, 2]);
mapRaca.set('inevitavel', [2, 0, 0, 0, 0, 1]);
mapRaca.set('naidora', [0, 2, -1, 0, 0, 1])
mapRaca.set('personalizado', [0, 0, 0, 0, 0, 0]);



//função para calculo do custo do atributo baseado no valor digitado. é passado o id do campo de valor preenchido e o id do custo correspondente. A função salva o valor passado e a 
// partir dele realiza as contas seguindo os valores minimo de -1 e máximo de 4 na distribuição de pontos
function CalculaCusto(valor, custo) {
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

//função para adicionar os bonus raciais. chama a função de atualizar os bônus

function Bonusderaca() {//Ela salva o elemento select, o valor selecionado atualmente e os campos de bônus raciais por atributo
    let raca = document.getElementById("racas");
    let valor = raca.options[raca.selectedIndex].value;
    camposRacas[forca] = document.getElementById("raca_for");
    camposRacas[des] = document.getElementById("raca_des");
    camposRacas[con] = document.getElementById("raca_con");
    camposRacas[int] = document.getElementById("raca_int");
    camposRacas[sab] = document.getElementById("raca_sab");
    camposRacas[car] = document.getElementById("raca_car");

    atualizarBonusdeRaca(valor);
    if (valor == "personalizado") { //habilita o personalizado e adiciona os eventos se for o caso,
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
        valor == "golemC" || valor == "golemE" || valor == "golemG" || valor == "golemP" || valor == "golemS" || valor == "minauro" || valor == "kallyanach" || valor == "mashin" ||
        valor == "yidishan" || valor == "moreauC" || valor == "moreauH" || valor == "moreauR" || valor == "moreauS" || valor == "moreauB" || valor == "moreauCO" || valor == "moreauCR"
        || valor == "moreauG" || valor == "moreauL" || valor == "moreauLO" || valor == "moreauM" || valor == "moreauU" || valor == "meio-elfo" || valor == "duende" || valor == "duendeVM"
        || valor == "meio-gigante" || valor == "inevitavel") { //Se for uma raça de atributo flexivel, chama a função de checkbox 
        CriarCheckbox(valor);
    }
}

function atualizarBonusdeRaca(racaSelecionada) {
    checkBoxSelecionadas = 0; //zera as checkbox selecionadas se existirem
    checkBoxBonusSelecionadas = 0;
    for (let i = 0; i < 6; i++) { //Se a ultima raça foi o personalizado,para cada campo de bônus racial, desabilita a edição e remove as funções
        if (ultimaRaca == "personalizado") {
            camposRacas[i].disabled = true;
            camposRacas[i].removeAttribute("onblur");
            camposRacas[i].removeAttribute("onkeydown");
        }
    }
    if (document.getElementById("label_for") || document.getElementById("label_des") || document.getElementById("label_gra")) { //Caso existam os labels (e por consequencia as checkbox)
        ApagarCheckbox(ultimaRaca); //chama a função de apagar elas
    }
    if (document.getElementById("atranimal")) {//mesma coisa que o anterior mas para o select do duende animal
        ApagarSelectAnimal()
    }
    ultimaRaca = racaSelecionada; //salva a uktima raça selecionada como a atual
    for (let i = 0; i < 6; i++) {//Para cada campo de bônus racial, muda o valor dele para o correspondente da raça no map
        camposRacas[i].value = mapRaca.get(racaSelecionada)[i];
        SomarTotal(camposRacas[i].id); //Chama a função de somar no total do atributo passando o campo de bônus racial do atributo correspondente
        ultimoBonusRaca[i] = camposRacas[i].value; //salva o valor do ultimo bônus racial daquele atributo como sendo o do campo correspondente
    }
}

function ValorMaior(campo) {//Ao ser chamada, essa função armazena o campo passado, adiciona +2 ao seu valor e
    let b1 = document.getElementById(campo);//chama a função de somar no total do atributo passando o campo de bônus racial do atributo correspondente
    b1.value = Number(b1.value) + 2;
    SomarTotal(campo);
}

function ValorMenor(campo) {//Ao ser chamada, essa função armazena o campo passado, adiciona +1 ao seu valor e
    let b1 = document.getElementById(campo);//chama a função de somar no total do atributo passando o campo de bônus racial do atributo correspondente
    b1.value = Number(b1.value) + 1;
    SomarTotal(campo);
}

function Penalidade(campo) {//Ao ser chamada, essa função armazena o campo passado, diminui -1 ao seu valor e
    let b1 = document.getElementById(campo);//chama a função de somar no total do atributo passando o campo de bônus racial do atributo correspondente
    b1.value = Number(b1.value) - 1;
    SomarTotal(campo);
}

function PenalidadeMaior(campo) {//Ao ser chamada, essa função armazena o campo passado, diminui -2 ao seu valor e
    let b1 = document.getElementById(campo);//chama a função de somar no total do atributo passando o campo de bônus racial do atributo correspondente
    b1.value = Number(b1.value) - 2;
    SomarTotal(campo);
}

function ResetarValor(campo) {
    let b1 = document.getElementById(campo);
    b1.value = 0;
    SomarTotal(campo);
}

function CriarCheckbox(raca) {//Ao ser chamada, essa função, essa função cria os ckeckbox de acordo com a raça passada
    if (raca == "humano" || raca == "sereia" || raca == "minauro" || raca == "mashin" || raca == "moreauC" || raca == "moreauH" || raca == "moreauR" || raca == "moreauS" ||
        raca == "moreauB" || raca == "moreauCO" || raca == "moreauCR" || raca == "moreauG" || raca == "moreauL" || raca == "moreauLO" || raca == "moreauM" || raca == "moreauU"
        || raca == "meio-gigante") {//raças que podem ter bônus nos 6 atributos
        CriarTodasCheckbox();
    }
    else if (raca == "lefou" || raca == "yidishan") {//raças que podem ter bônus nos 6 atributos exceto carisma
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
    else if (raca == "osteon" || raca == "meio-elfo") {//raças que podem ter bônus nos 6 atributos exceto constituição
        let labels = new Array(5);
        let box = new Array(5);
        for (let i = 0; i < 5; i++) {//cria os arrays de labels e boxes, cria os elementos e os armazena e dá a eles os ids e as funções
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
    else if (raca == "meio-orc") {//Apenas o meio-orc
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
    else if (raca == "golemB" || raca == "duendeVM") {//raças que podem ter bônus nos 6 atributos e podem ser de tamanhos diferentes
        CriarTodasCheckbox();
        CriarTamanhos();
    }
    else if (raca == "duende") {//Apenas o duende de natureza animal
        CriarTodasCheckbox();
        CriarTamanhos();
        CriarSelectAnimal();
    }
    else if (raca == "kallyanach") {//Apenas o Kallyanach
        CriarTodasCheckbox();
        CriarAtrKally();
    }
    else {//todas as outras raças que precisam de checkbox (no momento apenas golens)
        CriarTamanhos();
    }
}

function CriarTodasCheckbox() {//cria os arrays de labels e boxes, cria os elementos e os armazena e dá a eles os ids e as funções
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

function CriarTamanhos() {//cria os arrays de labels e boxes, cria os elementos e os armazena e dá a eles os ids e as funções
    let raca = document.getElementById("racas");
    let valor = raca.options[raca.selectedIndex].value;
    let labels = new Array(2);
    let box = new Array(2);
    for (let i = 0; i < 2; i++) {
        labels[i] = document.createElement("label");
        box[i] = document.createElement("input");
        box[i].setAttribute("type", "checkbox");
    }
    labels[0].setAttribute("id", "label_peq");
    if (valor == "duende" || valor == "duendeVM") {
        labels[0].innerText = "Minúsculo";
    }
    else {
        labels[0].innerText = "Pequeno";
    }
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

function CriarAtrKally() {//cria os arrays de labels e boxes, cria os elementos e os armazena e dá a eles os ids e as funções
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

function CriarSelectAnimal() {
    let selectanimal = document.createElement("select");
    selectanimal.id = "atranimal"

    let opcoes = ["Forca", "Destreza", "Constituição", "Inteligência", "Sabedoria", "Carisma"]
    let placeholder = document.createElement("option")
    placeholder.textContent = "Selecione o atributo da natureza animal"
    placeholder.disabled = true;
    placeholder.selected = true;
    placeholder.hidden = true;
    selectanimal.appendChild(placeholder);

    opcoes.forEach(opcaoTexto => {
        let opcao = document.createElement("option");//Para cada um dos itens no array, é criada uma opção no select
        opcao.value = opcaoTexto.toLowerCase();// Definindo um valor para a opção
        opcao.textContent = opcaoTexto; // Definindo o texto visível
        selectanimal.appendChild(opcao); //Conecta a opção ao select
    })

    selectanimal.onchange = function () {//Quando o valor do select mudar 
        let atratual = document.getElementById("atranimal").options[document.getElementById("atranimal").selectedIndex].value;//armazena o valor atual
        let campo = getCampoRaca(ultimoatr);//associa para qual atributo é o bônus baseado na opção selecionada
        ultimoatr = atratual //armazena a  opção como sendo o ultimo atributo selecionado
        ValorMenor(getCampoRaca(atratual));//Chama a função de valor menor passando o atributo relacionado a opção
        ultimoBonusRaca[GetAtributo(atratual)] = Number(ultimoBonusRaca[GetAtributo(atratual)]) + 1; //muda o valor do ultimo bônus racial daquele atributo para ele +1
        if (campo) {//Se existe a variavel campo (ou seja, se uma opção já foi selecionada)
            Penalidade(campo);//Chama a função de penalidade passando o atributo relacionado a opção
            ultimoBonusRaca[GetAtributo(campo)] = Number(ultimoBonusRaca[GetAtributo(campo)]) - 1;//muda o valor do ultimo bônus racial daquele atributo para ele -1
        }
    }
    document.getElementById("divanimal").appendChild(selectanimal);//Associa o select a div

}

function BonusRacaCheckbox(checkbox) {//A função recebe o id da checkbox que foi clicada
    let raca = document.getElementById("racas");
    let valor = raca.options[raca.selectedIndex].value;//Armazena o seletor de raças e seu valor atual
    let atributo = GetAtributo(checkbox);//Passa o checkbox recebido para uma função que retorna qual o atributo vai ser mudado
    let campo = getCampoRaca(checkbox);//Passa o checkbox recebido para uma função que retorna qual campo de bônus racial vai ser mudado
    let c = document.getElementById(checkbox)//Armazena o checkbox pelo id
    if (valor == "golemB" || valor == "mashin" || valor == "minauro" || valor == "moreauC" || valor == "moreauH" || valor == "moreauR" || valor == "moreauS" || valor == "moreauB" || valor == "moreauCO" ||
        valor == "moreauCR" || valor == "moreauG" || valor == "moreauL" || valor == "moreauLO" || valor == "moreauM" || valor == "moreauU" || valor == "duende" || valor == "duendeVM" || valor == "meio-elfo") {
        if (c.checked) {//Se a raça selecionada é uma das acima e a ckeckbox está selecionado
            if (checkBoxSelecionadas < 2) {//Se o total de ckeckbox selecionadas é menor que 2
                ValorMenor(campo);//Chama a função de valor menor passando o campo relacionado a checkbox
                ultimoBonusRaca[atributo] = Number(ultimoBonusRaca[atributo]) + 1;//Muda o valor do ultimo bônus racial daquele atributo para ele +1
                checkBoxSelecionadas++;//Encrementa a quantidade de checkbox selecionadas
            }
            else {//Se o total de ckeckbox selecionadas é maior ou igual a 2
                c.checked = false;//A checkbox não é selecionada
            }
        }
        else {//Se a checkbox não está selecionada
            if (checkBoxSelecionadas >= 0) {//Se o total de ckeckbox selecionadas é maior ou igual a 0
                Penalidade(campo);//Chama a função de penalidade passando o atributo relacionado a
                ultimoBonusRaca[atributo] = Number(ultimoBonusRaca[atributo]) - 1;//muda o valor do ultimo bônus racial daquele atributo para ele -1
                checkBoxSelecionadas--;//Decrementa a quantidade de checkbox selecionadas
            }
        }
    }
    else if (valor == "meio-orc" || valor == "meio-gigante") {
        if (c.checked) {
            if (checkBoxSelecionadas < 1) {//Mesma lógica acima, porem o máximo de checkbox selecionadas por vez é de apenas 1
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
        let atrMaisUm = document.getElementById("selet_atr2"); //Armazenas as checkbox de +2 em 1 atributo e +1 em 2 atributos
        if (atrMaisDois.checked) {//Se a checkbox de +2 em 1 atributo for selecionada
            if (c.checked) {//Segue a lógica acima, mas aqui a soma é de +2
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
                if (checkBoxSelecionadas >= 0) {//Segue a lógica acima, mas aqui a subtração é de -2
                    PenalidadeMaior(campo);
                    ultimoBonusRaca[atributo] = Number(ultimoBonusRaca[atributo]) - 2;
                    checkBoxSelecionadas--;
                }
            }
        }
        else if (atrMaisUm.checked) {//se a checkbox +1 em 2 atributos
            if (c.checked) {
                if (checkBoxSelecionadas < 2) {//Mesma lógica vista acima
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
    else {//todas as outras raças que não apareceram até agora que os atributos não são fixos
        if (c.checked) {
            if (checkBoxSelecionadas < 3) {//Mesma lógica acima, mas o máximo aqui é 3
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

function BonusTamanho(checkbox) {//A função recebe o id da checkbox de tamanho que foi clicada
    let raca = document.getElementById("racas");//Recebe o select de raças
    let valor = raca.options[raca.selectedIndex].value;//Armazena a raça selecionada
    let c = document.getElementById(checkbox)//Recebe o id da checkbox selecionada
    if (valor == "duende" || valor == "duendeVM") {//Se for um dos duendes
        if (c.checked) {
            if (checkBoxBonusSelecionadas < 1) {
                if (checkbox == "selet_peq") {//se o tamanho minúsculo for selecionado
                    Penalidade("raca_for");//aplica o -1 em força
                    ultimoBonusRaca[forca] = Number(ultimoBonusRaca[forca]) - 1;//muda o valor do ultimo bônus racial de força para ele-1
                    checkBoxBonusSelecionadas++;
                }
                else {
                    Penalidade("raca_des");//Mesma lógica acima, mas muda o tamanho pra grande e o atributo pra destreza
                    ultimoBonusRaca[des] = Number(ultimoBonusRaca[des]) - 1;
                    checkBoxBonusSelecionadas++;
                }
            }
            else {
                c.checked = false;
            }
        }
        else {
            if (checkBoxBonusSelecionadas >= 0) {//inverte a lógica acima, se deixar de ser selecionado tira o redutor
                if (checkbox == "selet_peq") {
                    ValorMenor("raca_for");
                    ultimoBonusRaca[forca] = Number(ultimoBonusRaca[forca]) + 1;
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
    else {//Para todas as outras raças com tamanho variado, segue a mesma lógica 
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

}

function BonusKallyanach(checkbox) {//A função recebe o id da checkbox de bônus de kallyanach que foi clicada
    let c = document.getElementById(checkbox)//armazena a checkbox selecionada
    if (c.checked) {//Se a checkbox está selecionada
        if (checkBoxBonusSelecionadas < 1) {//Se não tem nenhuma das duas selecionadas
            checkBoxBonusSelecionadas++;//Encrementa a quantidade
        }
        else {
            c.checked = false;//Se não, mantem deselecionada
        }
    }
    else {//Se a checkbox não está selecionada
        //if (checkBoxBonusSelecionadas >= 0) {//Se uma das duas está selecionada
            checkBoxBonusSelecionadas--;//Decrementa a quantidade
            checkBoxSelecionadas = 0;//Zera o bônus racial em todos os atributos
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
        //}
    }
}

function ApagarCheckbox(ultimaRaca) {//Recebe a ultima raça que estava selecionada quando mudou a raça e apaga os checkbox equivalentes
    if (ultimaRaca == "humano" || ultimaRaca == "sereia" || ultimaRaca == "minauro" || ultimaRaca == "moreauC" || ultimaRaca == "moreauH" || ultimaRaca == "moreauR" ||
        ultimaRaca == "moreauS" || ultimaRaca == "moreauB" || ultimaRaca == "moreauCO" || ultimaRaca == "moreauCR" || ultimaRaca == "moreauG" || ultimaRaca == "moreauL" ||
        ultimaRaca == "moreauLO" || ultimaRaca == "moreauM" || ultimaRaca == "moreauU" || ultimaRaca == "meio-gigante") {
        Apagar("label_for", "selet_for");
        Apagar("label_des", "selet_des");
        Apagar("label_con", "selet_con");
        Apagar("label_int", "selet_int");
        Apagar("label_sab", "selet_sab");
        Apagar("label_car", "selet_car");
    }
    else if (ultimaRaca == "lefou" || ultimaRaca == "yidishan") {
        Apagar("label_for", "selet_for");
        Apagar("label_des", "selet_des");
        Apagar("label_con", "selet_con");
        Apagar("label_int", "selet_int");
        Apagar("label_sab", "selet_sab");
    }
    else if (ultimaRaca == "osteon" || ultimaRaca == "meio-elfo") {
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
    else if (ultimaRaca == "golemB" || ultimaRaca == "duende" || ultimaRaca == "duendeVM") {
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
        ultimaRaca == "golemS" ||ultimaRaca=="inevitavel") {
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

function ApagarSelectAnimal() {//apaga o seletor de atributo do duende animal
    let s = document.getElementById("atranimal");
    s.remove();
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
    let campo = GetCampo(valor);//Armazena o campo pra saber em qual coluna entra o valor
    let atributo = GetAtributo(valor);//Armazena o atributo certo
    let valorasomar = Number(document.getElementById(valor).value);//Armazena o valor do campo passado

    if (campo == 1) {
        if (valorasomar == 0) {//Se o valor a somar é zero
            totalAtributo[atributo] = Number(totalAtributo[atributo]) - Number(ultimovalor[atributo]);//pega o total daquele atributo e diminui dele o ultimo valor
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
        if (raca == "personalizado") {
            ultimoBonusRaca[atributo] = valorasomar;
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
    if (campo == "val_for" || campo == "raca_for" || campo == "bon_for" || campo == "selet_for" || campo == "forca") {
        return forca;
    }
    else if (campo == "val_des" || campo == "raca_des" || campo == "bon_des" || campo == "selet_des" || campo == "destreza") {
        return des;
    }
    else if (campo == "val_con" || campo == "raca_con" || campo == "bon_con" || campo == "selet_con" || campo == "constituição") {
        return con;
    }
    else if (campo == "val_int" || campo == "raca_int" || campo == "bon_int" || campo == "selet_int" || campo == "inteligência") {
        return int;
    }
    else if (campo == "val_sab" || campo == "raca_sab" || campo == "bon_sab" || campo == "selet_sab" || campo == "sabedoria") {
        return sab;
    }
    else if (campo == "val_car" || campo == "raca_car" || campo == "bon_car" || campo == "selet_car" || campo == "carisma") {
        return car;
    }
}

function getCampoRaca(campo) {
    if (campo == "selet_for" || campo == "forca") {
        return "raca_for"
    }
    else if (campo == "selet_des" || campo == "destreza") {
        return "raca_des"
    }
    else if (campo == "selet_con" || campo == "constituição") {
        return "raca_con"
    }
    else if (campo == "selet_int" || campo == "inteligência") {
        return "raca_int"
    }
    else if (campo == "selet_sab" || campo == "sabedoria") {
        return "raca_sab"
    }
    else if (campo == "selet_car" || campo == "carisma") {
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