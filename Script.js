var ultimaraca="";
var checkboxselecionadas=0;
var totalfor=0;
var totaldes=0;
var totalcon=0;
var totalint=0;
var totalsab=0;
var totalcar=0;
var custototal=10;
var ultimovalorFor=0;
var ultimovalorDes=0;
var ultimovalorCon=0;
var ultimovalorInt=0;
var ultimovalorSab=0;
var ultimovalorCar=0;
var ultimobonusracafor=0;
var ultimobonusracades=0;
var ultimobonusracacon=0;
var ultimobonusracaint=0;
var ultimobonusracasab=0;
var ultimobonusracacar=0;
var custoanterior=0;

function CalculaCusto(valor,custo){
    console.log("Entrou");
    var v1=window.document.getElementById(valor);
    var n1=Number(v1.value);
    if(n1<-1){
        v1.value=-1;
        n1=Number(v1.value);
        console.log(n1);
    }
    else if(n1>4){
        v1.value=4;
        n1=Number(v1.value);
    }
    switch (n1){
        case -1:
            console.log(n1);
            window.document.getElementById(custo).innerHTML=-1;
            SomarTotal(valor);
            custototal-=-1;
            custoanterior=-1;
            window.document.getElementById("custo").innerHTML=custototal;
            switch(valor){
                case 'val_for':
                    ultimovalorFor=n1;
                    break;
                case 'val_des':
                    ultimovalorDes=n1;
                    break; 
                case 'val_con':
                    ultimovalorCon=n1;
                    break;
                case 'val_int':
                    ultimovalorInt=n1;
                    break;
                case 'val_sab':
                    ultimovalorSab=n1;
                    break;
                case 'val_car':
                    ultimovalorCar=n1;
                    break; 
            }
            break;
        case 0:
            window.document.getElementById(custo).innerHTML=0;
            SomarTotal(valor);
            custototal+=custoanterior;
            window.document.getElementById("custo").innerHTML=custototal;
            switch(valor){
                case 'val_for':
                    ultimovalorFor=n1;
                    break;
                case 'val_des':
                    ultimovalorDes=n1;
                    break; 
                case 'val_con':
                    ultimovalorCon=n1;
                    break;
                case 'val_int':
                    ultimovalorInt=n1;
                    break;
                case 'val_sab':
                    ultimovalorSab=n1;
                    break;
                case 'val_car':
                    ultimovalorCar=n1;
                    break; 
            }
            break;
        case 1:
            window.document.getElementById(custo).innerHTML=1;
            SomarTotal(valor);
            custototal-=1
            custoanterior=1
            window.document.getElementById("custo").innerHTML=custototal
            switch(valor){
                case 'val_for':
                    ultimovalorFor=n1;
                    break;
                case 'val_des':
                    ultimovalorDes=n1;
                    break; 
                case 'val_con':
                    ultimovalorCon=n1;
                    break;
                case 'val_int':
                    ultimovalorInt=n1;
                    break;
                case 'val_sab':
                    ultimovalorSab=n1;
                    break;
                case 'val_car':
                    ultimovalorCar=n1;
                    break; 
            }
            break;
        case 2:
            window.document.getElementById(custo).innerHTML=2;
            custoanterior=-1;
            SomarTotal(valor);
            custototal-=2;
            custoanterior=2;
            window.document.getElementById("custo").innerHTML=custototal
            switch(valor){
                case 'val_for':
                    ultimovalorFor=n1;
                    break;
                case 'val_des':
                    ultimovalorDes=n1;
                    break; 
                case 'val_con':
                    ultimovalorCon=n1;
                    break;
                case 'val_int':
                    ultimovalorInt=n1;
                    break;
                case 'val_sab':
                    ultimovalorSab=n1;
                    break;
                case 'val_car':
                    ultimovalorCar=n1;
                    break; 
            }
            break;
        case 3:
            window.document.getElementById(custo).innerHTML=4;
            SomarTotal(valor);
            custototal-=4;
            custoanterior=4;
            window.document.getElementById("custo").innerHTML=custototal
            switch(valor){
                case 'val_for':
                    ultimovalorFor=n1;
                    break;
                case 'val_des':
                    ultimovalorDes=n1;
                    break; 
                case 'val_con':
                    ultimovalorCon=n1;
                    break;
                case 'val_int':
                    ultimovalorInt=n1;
                    break;
                case 'val_sab':
                    ultimovalorSab=n1;
                    break;
                case 'val_car':
                    ultimovalorCar=n1;
                    break; 
            }
            break;
        case 4:
            window.document.getElementById(custo).innerHTML=7;
            SomarTotal(valor);
            custototal-=7;
            custoanterior=7;
            window.document.getElementById("custo").innerHTML=custototal
            switch(valor){
                case 'val_for':
                    ultimovalorFor=n1;
                    break;
                case 'val_des':
                    ultimovalorDes=n1;
                    break; 
                case 'val_con':
                    ultimovalorCon=n1;
                    break;
                case 'val_int':
                    ultimovalorInt=n1;
                    break;
                case 'val_sab':
                    ultimovalorSab=n1;
                    break;
                case 'val_car':
                    ultimovalorCar=n1;
                    break; 
            }
            break;
    }
}
function Bonusderaca(){
    var raca=document.getElementById("racas");
    var valor=raca.options[raca.selectedIndex].value;

    switch(valor){
        case "humano":
            checkboxselecionadas=0;
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            console.log(ultimaraca);
            ResetarValor("raca_for");
            ResetarValor("raca_des");
            ResetarValor("raca_con");
            ResetarValor("raca_int");
            ResetarValor("raca_sab");
            ResetarValor("raca_car");
            if(!document.getElementById("label_for")){
                CriarCheckbox(valor);
            }
        break;

        case "anao":
            console.log(ultimaraca);
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ValorMaior("raca_con");
            ValorMenor("raca_sab");
            Penalidade("raca_des");
            ResetarValor("raca_for");
            ResetarValor("raca_int");
            ResetarValor("raca_car");
            ultimobonusracafor=0;
            ultimobonusracades=-1;
            ultimobonusracacon=2;
            ultimobonusracaint=0;
            ultimobonusracasab=1;
            ultimobonusracacar=0;
        break;

        case "dahllan":
            console.log(ultimaraca);
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ValorMaior("raca_sab");
            ValorMenor("raca_des");
            Penalidade("raca_int");
            ResetarValor("raca_for");
            ResetarValor("raca_con");
            ResetarValor("raca_car");
            ultimobonusracafor=0;
            ultimobonusracades=1;
            ultimobonusracacon=0;
            ultimobonusracaint=1;
            ultimobonusracasab=2;
            ultimobonusracacar=0;
        break;

        case "elfo":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ValorMaior("raca_int");
            ValorMenor("raca_des");
            Penalidade("raca_con");
            ResetarValor("raca_for");
            ResetarValor("raca_sab");
            ResetarValor("raca_car");
            ultimobonusracafor=0;
            ultimobonusracades=1;
            ultimobonusracacon=-1;
            ultimobonusracaint=2;
            ultimobonusracasab=0;
            ultimobonusracacar=0;
         break;

         case "goblin":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ValorMaior("raca_des");
            ValorMenor("raca_int");
            Penalidade("raca_car");
            ResetarValor("raca_for");
            ResetarValor("raca_con");
            ResetarValor("raca_sab");
            ultimobonusracafor=0;
            ultimobonusracades=2;
            ultimobonusracacon=0;
            ultimobonusracaint=1;
            ultimobonusracasab=0;
            ultimobonusracacar=-1;
         break;

         case "lefou":
            checkboxselecionadas=0;
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ResetarValor("raca_for");
            ResetarValor("raca_des");
            ResetarValor("raca_con");
            ResetarValor("raca_int");
            ResetarValor("raca_sab");
            if(!document.getElementById("label_for")){
                CriarCheckbox(valor);
            }
            Penalidade("raca_car");
            ultimobonusracacar=-1;
         break;

         case "minotauro":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ValorMaior("raca_for");
            ValorMenor("raca_con");
            Penalidade("raca_sab");
            ResetarValor("raca_des");
            ResetarValor("raca_int");
            ResetarValor("raca_car");
            ultimobonusracafor=2;
            ultimobonusracades=0;
            ultimobonusracacon=1;
            ultimobonusracaint=0;
            ultimobonusracasab=-1;
            ultimobonusracacar=0;
         break;

         case "qareen":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ValorMaior("raca_car");
            ValorMenor("raca_int");
            Penalidade("raca_sab");
            ResetarValor("raca_for");
            ResetarValor("raca_des");
            ResetarValor("raca_con");
            ultimobonusracafor=0;
            ultimobonusracades=0;
            ultimobonusracacon=0;
            ultimobonusracaint=1;
            ultimobonusracasab=-1;
            ultimobonusracacar=2;
         break;

         case "golem":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ValorMaior("raca_for");
            ValorMenor("raca_con");
            Penalidade("raca_car");
            ResetarValor("raca_des");
            ResetarValor("raca_int");
            ResetarValor("raca_sab");
            ultimobonusracafor=2;
            ultimobonusracades=1;
            ultimobonusracacon=0;
            ultimobonusracaint=0;
            ultimobonusracasab=0;
            ultimobonusracacar=-1;
         break;

         case "hynne":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ValorMaior("raca_des");
            ValorMenor("raca_car");
            Penalidade("raca_for");
            ResetarValor("raca_con");
            ResetarValor("raca_int");
            ResetarValor("raca_sab");
            ultimobonusracafor=-1;
            ultimobonusracades=2;
            ultimobonusracacon=0;
            ultimobonusracaint=0;
            ultimobonusracasab=0;
            ultimobonusracacar=1;
         break;

         case "kliren":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ValorMaior("raca_int");
            ValorMenor("raca_car");
            Penalidade("raca_for");
            ResetarValor("raca_des");
            ResetarValor("raca_con");
            ResetarValor("raca_sab");
            ultimobonusracafor=-1;
            ultimobonusracades=0;
            ultimobonusracacon=0;
            ultimobonusracaint=2;
            ultimobonusracasab=0;
            ultimobonusracacar=1;
         break;

         case "medusa":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ValorMaior("raca_des");
            ValorMenor("raca_car");
            ResetarValor("raca_for");
            ResetarValor("raca_con");
            ResetarValor("raca_int");
            ResetarValor("raca_sab");
            ultimobonusracafor=0;
            ultimobonusracades=2;
            ultimobonusracacon=0;
            ultimobonusracaint=0;
            ultimobonusracasab=0;
            ultimobonusracacar=1;
         break;

         case "osteon":
            checkboxselecionadas=0;
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ResetarValor("raca_for");
            ResetarValor("raca_des");
            ResetarValor("raca_con");
            ResetarValor("raca_int");
            ResetarValor("raca_sab");
            ResetarValor("raca_car");
            if(!document.getElementById("label_for")){
                CriarCheckbox(valor);
            }
            Penalidade("raca_con");
            ultimobonusracacon=-1;
         break;

         case "sereia":
            checkboxselecionadas=0;
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ResetarValor("raca_for");
            ResetarValor("raca_des");
            ResetarValor("raca_con");
            ResetarValor("raca_int");
            ResetarValor("raca_sab");
            ResetarValor("raca_car");
            if(!document.getElementById("label_for")){
                CriarCheckbox(valor);
            }
            console.log("colocar sereia aqui")
         break;

         case "silfide":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ValorMaior("raca_car");
            ValorMenor("raca_des");
            Penalidade("raca_for");
            ResetarValor("raca_con");
            ResetarValor("raca_int");
            ResetarValor("raca_sab");
            ultimobonusracafor=-1;
            ultimobonusracades=1;
            ultimobonusracacon=0;
            ultimobonusracaint=0;
            ultimobonusracasab=0;
            ultimobonusracacar=2;
         break;

         case "aggelus":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ValorMaior("raca_sab");
            ValorMenor("raca_car");
            ResetarValor("raca_for");
            ResetarValor("raca_des");
            ResetarValor("raca_con");
            ResetarValor("raca_int");
            ultimobonusracafor=0;
            ultimobonusracades=0;
            ultimobonusracacon=0;
            ultimobonusracaint=0;
            ultimobonusracasab=2;
            ultimobonusracacar=1;

         break;
         case "sulfure":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ValorMaior("raca_des");
            ValorMenor("raca_int");
            ResetarValor("raca_for");
            ResetarValor("raca_con");
            ResetarValor("raca_sab");
            ResetarValor("raca_car");
            ultimobonusracafor=0;
            ultimobonusracades=2;
            ultimobonusracacon=0;
            ultimobonusracaint=1;
            ultimobonusracasab=0;
            ultimobonusracacar=0;
         break;

         case "trog":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaraca);
            }
            ultimaraca=valor;
            ValorMaior("raca_con");
            ValorMenor("raca_for");
            Penalidade("raca_int");
            ResetarValor("raca_des");
            ResetarValor("raca_sab");
            ResetarValor("raca_car");
            ultimobonusracafor=1;
            ultimobonusracades=0;
            ultimobonusracacon=2;
            ultimobonusracaint=-1;
            ultimobonusracasab=0;
            ultimobonusracacar=0;
         break;
    }
}

function BonusRacaCheckbox(checkbox){
    var c=document.getElementById(checkbox)
    if(c.checked){
        if(checkboxselecionadas<=2){
            switch(checkbox){
                case "selet_for":
                    ValorMenor("raca_for");
                    checkboxselecionadas++;
                break;
                case "selet_des":
                    ValorMenor("raca_des");
                    checkboxselecionadas++;
                break;
                case "selet_con":
                    ValorMenor("raca_con");
                    checkboxselecionadas++;
                break;
                case "selet_int":
                    ValorMenor("raca_int");
                    checkboxselecionadas++;
                break;
                case "selet_sab":
                    ValorMenor("raca_sab");
                    checkboxselecionadas++;
                break;
                case "selet_car":
                    ValorMenor("raca_car");
                    checkboxselecionadas++;
                break;

            }
        }
        else{
            c.checked=false;
        }
    }
    else{
        if(checkboxselecionadas>=0){
            switch(checkbox){
                case "selet_for":
                    ResetarValor("raca_for");
                    checkboxselecionadas--;
                break;
                case "selet_des":
                    ResetarValor("raca_des");
                    checkboxselecionadas--;
                break;
                case "selet_con":
                    ResetarValor("raca_con");
                    checkboxselecionadas--;
                break;
                case "selet_int":
                    ResetarValor("raca_int");
                    checkboxselecionadas--;
                break;
                case "selet_sab":
                    ResetarValor("raca_sab");
                    checkboxselecionadas--;
                break;
                case "selet_car":
                    ResetarValor("raca_car");
                    checkboxselecionadas--;
                break;

            }
        }
    }
}

function ValorMaior(valor){
    var b1 =document.getElementById(valor);
    b1.value=parseInt(2);
    SomarTotal(valor);
}

function ValorMenor(valor){
    var b1 =document.getElementById(valor);
    b1.value=parseInt(1);
    SomarTotal(valor);
}

function Penalidade(valor){
    var b1 =document.getElementById(valor);
    b1.value=parseInt(-1);
    SomarTotal(valor);
}

function ResetarValor(valor){
    var b1 =document.getElementById(valor);
    b1.value=0;
    SomarTotal(valor);
}

function CriarCheckbox(raca){
    if(raca=="humano"||raca=="sereia"){
        var labelFor=document.createElement("label");
        labelFor.setAttribute("id","label_for");
        labelFor.innerText="Força";
        var seletFor=document.createElement("input");
        seletFor.setAttribute("type","checkbox");
        seletFor.setAttribute("id","selet_for");
        seletFor.setAttribute("onclick","BonusRacaCheckbox('selet_for')")
        document.getElementById("checkracas").appendChild(labelFor);
        document.getElementById("checkracas").appendChild(seletFor);
        var labelDes=document.createElement("label");
        labelDes.setAttribute("id","label_des");
        labelDes.innerText="Destreza";
        var seletDes=document.createElement("input");
        seletDes.setAttribute("type","checkbox");
        seletDes.setAttribute("id","selet_des");
        seletDes.setAttribute("onclick","BonusRacaCheckbox('selet_des')")
        document.getElementById("checkracas").appendChild(labelDes);
        document.getElementById("checkracas").appendChild(seletDes);
        var labelCon=document.createElement("label");
        labelCon.setAttribute("id","label_con");
        labelCon.innerText="Constituição";
        var seletCon=document.createElement("input");
        seletCon.setAttribute("type","checkbox");
        seletCon.setAttribute("id","selet_con");
        seletCon.setAttribute("onclick","BonusRacaCheckbox('selet_con')")
        document.getElementById("checkracas").appendChild(labelCon);
        document.getElementById("checkracas").appendChild(seletCon);
        var labelInt=document.createElement("label");
        labelInt.setAttribute("id","label_int");
        labelInt.innerText="Inteligência";
        var seletInt=document.createElement("input");
        seletInt.setAttribute("type","checkbox");
        seletInt.setAttribute("id","selet_int");
        seletInt.setAttribute("onclick","BonusRacaCheckbox('selet_int')")
        document.getElementById("checkracas").appendChild(labelInt);
        document.getElementById("checkracas").appendChild(seletInt);
        var labelSab=document.createElement("label");
        labelSab.setAttribute("id","label_sab");
        labelSab.innerText="Sabedoria";
        var seletSab=document.createElement("input");
        seletSab.setAttribute("type","checkbox");
        seletSab.setAttribute("id","selet_sab");
        seletSab.setAttribute("onclick","BonusRacaCheckbox('selet_sab')")
        document.getElementById("checkracas").appendChild(labelSab);
        document.getElementById("checkracas").appendChild(seletSab);
        var labelCar=document.createElement("label");
        labelCar.setAttribute("id","label_car");
        labelCar.innerText="Carisma";
        var seletCar=document.createElement("input");
        seletCar.setAttribute("type","checkbox");
        seletCar.setAttribute("id","selet_car");
        seletCar.setAttribute("onclick","BonusRacaCheckbox('selet_car')")
        document.getElementById("checkracas").appendChild(labelCar);
        document.getElementById("checkracas").appendChild(seletCar);
    }
    else if(raca=="lefou"){
        var labelFor=document.createElement("label");
        labelFor.setAttribute("id","label_for");
        labelFor.innerText="Força";
        var seletFor=document.createElement("input");
        seletFor.setAttribute("type","checkbox");
        seletFor.setAttribute("id","selet_for");
        seletFor.setAttribute("onclick","BonusRacaCheckbox('selet_for')")
        document.getElementById("checkracas").appendChild(labelFor);
        document.getElementById("checkracas").appendChild(seletFor);
        var labelDes=document.createElement("label");
        labelDes.setAttribute("id","label_des");
        labelDes.innerText="Destreza";
        var seletDes=document.createElement("input");
        seletDes.setAttribute("type","checkbox");
        seletDes.setAttribute("id","selet_des");
        seletDes.setAttribute("onclick","BonusRacaCheckbox('selet_des')")
        document.getElementById("checkracas").appendChild(labelDes);
        document.getElementById("checkracas").appendChild(seletDes);
        var labelCon=document.createElement("label");
        labelCon.setAttribute("id","label_con");
        labelCon.innerText="Constituição";
        var seletCon=document.createElement("input");
        seletCon.setAttribute("type","checkbox");
        seletCon.setAttribute("id","selet_con");
        seletCon.setAttribute("onclick","BonusRacaCheckbox('selet_con')")
        document.getElementById("checkracas").appendChild(labelCon);
        document.getElementById("checkracas").appendChild(seletCon);
        var labelInt=document.createElement("label");
        labelInt.setAttribute("id","label_int");
        labelInt.innerText="Inteligência";
        var seletInt=document.createElement("input");
        seletInt.setAttribute("type","checkbox");
        seletInt.setAttribute("id","selet_int");
        seletInt.setAttribute("onclick","BonusRacaCheckbox('selet_int')")
        document.getElementById("checkracas").appendChild(labelInt);
        document.getElementById("checkracas").appendChild(seletInt);
        var labelSab=document.createElement("label");
        labelSab.setAttribute("id","label_sab");
        labelSab.innerText="Sabedoria";
        var seletSab=document.createElement("input");
        seletSab.setAttribute("type","checkbox");
        seletSab.setAttribute("id","selet_sab");
        seletSab.setAttribute("onclick","BonusRacaCheckbox('selet_sab')")
        document.getElementById("checkracas").appendChild(labelSab);
        document.getElementById("checkracas").appendChild(seletSab);
    }
    else if(raca=="osteon"){
        var labelFor=document.createElement("label");
        labelFor.setAttribute("id","label_for");
        labelFor.innerText="Força";
        var seletFor=document.createElement("input");
        seletFor.setAttribute("type","checkbox");
        seletFor.setAttribute("id","selet_for");
        seletFor.setAttribute("onclick","BonusRacaCheckbox('selet_for')")
        document.getElementById("checkracas").appendChild(labelFor);
        document.getElementById("checkracas").appendChild(seletFor);
        var labelDes=document.createElement("label");
        labelDes.setAttribute("id","label_des");
        labelDes.innerText="Destreza";
        var seletDes=document.createElement("input");
        seletDes.setAttribute("type","checkbox");
        seletDes.setAttribute("id","selet_des");
        seletDes.setAttribute("onclick","BonusRacaCheckbox('selet_des')")
        document.getElementById("checkracas").appendChild(labelDes);
        document.getElementById("checkracas").appendChild(seletDes);
        var labelInt=document.createElement("label");
        labelInt.setAttribute("id","label_int");
        labelInt.innerText="Inteligência";
        var seletInt=document.createElement("input");
        seletInt.setAttribute("type","checkbox");
        seletInt.setAttribute("id","selet_int");
        seletInt.setAttribute("onclick","BonusRacaCheckbox('selet_int')")
        document.getElementById("checkracas").appendChild(labelInt);
        document.getElementById("checkracas").appendChild(seletInt);
        var labelSab=document.createElement("label");
        labelSab.setAttribute("id","label_sab");
        labelSab.innerText="Sabedoria";
        var seletSab=document.createElement("input");
        seletSab.setAttribute("type","checkbox");
        seletSab.setAttribute("id","selet_sab");
        seletSab.setAttribute("onclick","BonusRacaCheckbox('selet_sab')")
        document.getElementById("checkracas").appendChild(labelSab);
        document.getElementById("checkracas").appendChild(seletSab);
        var labelCar=document.createElement("label");
        labelCar.setAttribute("id","label_car");
        labelCar.innerText="Carisma";
        var seletCar=document.createElement("input");
        seletCar.setAttribute("type","checkbox");
        seletCar.setAttribute("id","selet_car");
        seletCar.setAttribute("onclick","BonusRacaCheckbox('selet_car')")
        document.getElementById("checkracas").appendChild(labelCar);
        document.getElementById("checkracas").appendChild(seletCar);
    }
}

function ApagarCheckbox(ultimaraca){
    if(ultimaraca=="humano" || ultimaraca=="sereia")
    {
        var l1=document.getElementById("label_for");
        var c1=document.getElementById("selet_for");
        l1.remove();
        c1.remove();
        var l2=document.getElementById("label_des");
        var c2=document.getElementById("selet_des");
        l2.remove();
        c2.remove();
        var l3=document.getElementById("label_con");
        var c3=document.getElementById("selet_con");
        l3.remove();
        c3.remove();
        var l4=document.getElementById("label_int");
        var c4=document.getElementById("selet_int");
        l4.remove();
        c4.remove();
        var l5=document.getElementById("label_sab");
        var c5=document.getElementById("selet_sab");
        l5.remove();
        c5.remove();
        var l6=document.getElementById("label_car");
        var c6=document.getElementById("selet_car");
        l6.remove();
        c6.remove();
    }
    else if(ultimaraca=="lefou"){
        var l1=document.getElementById("label_for");
        var c1=document.getElementById("selet_for");
        l1.remove();
        c1.remove();
        var l2=document.getElementById("label_des");
        var c2=document.getElementById("selet_des");
        l2.remove();
        c2.remove();
        var l3=document.getElementById("label_con");
        var c3=document.getElementById("selet_con");
        l3.remove();
        c3.remove();
        var l4=document.getElementById("label_int");
        var c4=document.getElementById("selet_int");
        l4.remove();
        c4.remove();
        var l5=document.getElementById("label_sab");
        var c5=document.getElementById("selet_sab");
        l5.remove();
        c5.remove();
    }
    else if(ultimaraca=="osteon"){
        var l1=document.getElementById("label_for");
        var c1=document.getElementById("selet_for");
        l1.remove();
        c1.remove();
        var l2=document.getElementById("label_des");
        var c2=document.getElementById("selet_des");
        l2.remove();
        c2.remove();
        var l3=document.getElementById("label_int");
        var c3=document.getElementById("selet_int");
        l3.remove();
        c3.remove();
        var l4=document.getElementById("label_sab");
        var c4=document.getElementById("selet_sab");
        l4.remove();
        c4.remove();
        var l5=document.getElementById("label_car");
        var c5=document.getElementById("selet_car");
        l5.remove();
        c5.remove();
    }
}

function SomarTotal(valor){
    var diferenca=0;
    var atributo;
    atributo=document.getElementById(valor);
    var valorasomar=Number(atributo.value);
    console.log(valorasomar);
    if(valor=="val_for" || valor=="bon_for"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalorFor);
            totalfor=totalfor-ultimovalorFor;
        }
        else{
            diferenca=ultimovalorFor-valorasomar;
            console.log(ultimovalorFor);
            if(diferenca<0){
                totalfor+=-diferenca;
            }else if(diferenca>0){
                totalfor-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_for").innerHTML=totalfor;
        console.log(totalfor);

    } 
    else if(valor=="raca_for"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimobonusracafor);
            totalfor=totalfor-ultimobonusracafor;
        }
        else{
            diferenca=ultimobonusracafor-valorasomar;
            console.log(ultimobonusracafor);
            if(diferenca<0){
                totalfor+=-diferenca;
            }else if(diferenca>0){
                totalfor-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_for").innerHTML=totalfor;
        console.log(totalfor);

    }
    else if(valor=="val_des" || valor=="bon_des"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalorDes);
            totaldes=totaldes-ultimovalorDes;
        }
        else{
            diferenca=ultimovalorDes-valorasomar;
            console.log(ultimovalorDes);
            if(diferenca<0){
                totaldes+=-diferenca;
            }else if(diferenca>0){
                totaldes-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_des").innerHTML=totaldes;
        console.log(totaldes);

    }
    else if(valor=="raca_des"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimobonusracades);
            totaldes=totaldes-ultimobonusracades;
        }
        else{
            diferenca=ultimobonusracades-valorasomar;
            console.log(ultimobonusracades);
            if(diferenca<0){
                totaldes+=-diferenca;
            }else if(diferenca>0){
                totaldes-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_des").innerHTML=totaldes;
        console.log(totaldes);

    }
    else if(valor=="val_con" || valor=="bon_con"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalorCon);
            totalcon=totalcon-ultimovalorCon;
        }
        else{
            diferenca=ultimovalorCon-valorasomar;
            console.log(ultimovalorCon);
            if(diferenca<0){
                totalcon+=-diferenca;
            }else if(diferenca>0){
                totalcon-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_con").innerHTML=totalcon;
        console.log(totalcon);

    }
    else if(valor=="raca_con"){
        if(valorasomar==0){
            console.log("AQUI LEONARDO");
            console.log(ultimobonusracacon);
            console.log(totalcon);
            totalcon-=ultimobonusracacon;
            console.log(totalcon);
        }
        else{
            diferenca=ultimobonusracacon-valorasomar;
            console.log(ultimobonusracacon);
            if(diferenca<0){
                totalcon+=-diferenca;
            }else if(diferenca>0){
                totalcon-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_con").innerHTML=totalcon;
        console.log(totalcon);

    }
    else if(valor=="val_int" || valor=="bon_int"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalorInt);
            totalint=totalint-ultimovalorInt;
        }
        else{
            diferenca=ultimovalorInt-valorasomar;
            console.log(ultimovalorInt);
            if(diferenca<0){
                totalint+=-diferenca;
            }else if(diferenca>0){
                totalint-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_int").innerHTML=totalint;
        console.log(totalint);

    }
    else if(valor=="raca_int"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimobonusracaint);
            totalint=totalint-ultimobonusracaint;
        }
        else{
            diferenca=ultimobonusracaint-valorasomar;
            console.log(ultimobonusracaint);
            if(diferenca<0){
                totalint+=-diferenca;
            }else if(diferenca>0){
                totalint-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_int").innerHTML=totalint;
        console.log(totalint);

    }
    else if(valor=="val_sab" || valor=="bon_sab"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalorSab);
            totalsab=totalsab-ultimovalorSab;
        }
        else{
            diferenca=ultimovalorSab-valorasomar;
            console.log(ultimovalorSab);
            if(diferenca<0){
                totalsab+=-diferenca;
            }else if(diferenca>0){
                totalsab-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_sab").innerHTML=totalsab;
        console.log(totalsab);
    }
    else if(valor=="raca_sab"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimobonusracasab);
            totalsab=totalsab-ultimobonusracasab;
        }
        else{
            diferenca=ultimobonusracasab-valorasomar;
            console.log(ultimobonusracasab);
            if(diferenca<0){
                totalsab+=-diferenca;
            }else if(diferenca>0){
                totalsab-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_sab").innerHTML=totalsab;
        console.log(totalfor);

    }
    else if(valor=="val_car" || valor=="bon_car"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalorCar);
            totalcar=totalcar-ultimovalorCar;
        }
        else{
            diferenca=ultimovalorCar-valorasomar;
            console.log(ultimovalorCar);
            if(diferenca<0){
                totalcar+=-diferenca;
            }else if(diferenca>0){
                totalcar-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_car").innerHTML=totalcar;
        console.log(totalcar);

    }
    else if(valor=="raca_car"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimobonusracacar);
            totalcar=totalcar-ultimobonusracacar;
        }
        else{
            diferenca=ultimobonusracacar-valorasomar;
            console.log(ultimobonusracacar);
            if(diferenca<0){
                totalcar+=-diferenca;
            }else if(diferenca>0){
                totalcar-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_car").innerHTML=totalcar;
        console.log(totalcar);

    }
}