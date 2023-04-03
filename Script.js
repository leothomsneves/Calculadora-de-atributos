var ultimaRaca="";
var checkBoxSelecionadas=0;
var totalFor=0;
var totalDes=0;
var totalCon=0;
var totalInt=0;
var totalSab=0;
var totalCar=0;
var custoTotal=10;
var ultimovalorFor=0;
var ultimovalorDes=0;
var ultimovalorCon=0;
var ultimovalorInt=0;
var ultimovalorSab=0;
var ultimovalorCar=0;
var ultimoBonusRacaFor=0;
var ultimoBonusRacaDes=0;
var ultimobonusracaCon=0;
var ultimobonusracaInt=0;
var ultimobonusracaSab=0;
var ultimobonusracaCar=0;
var ultimoBonusFor=0;
var ultimoBonusDes=0;
var ultimoBonusCon=0;
var ultimoBonusInt=0;
var ultimoBonusSab=0;
var ultimoBonusCar=0;
var custoanteriorFor=0;
var custoanteriorDes=0;
var custoanteriorCon=0;
var custoanteriorInt=0;
var custoanteriorSab=0;
var custoanteriorCar=0;

function CalculaCusto(valor,custo){
    var diferencaCusto=0;
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
            switch(valor){
                case 'val_for':
                    if(custoanteriorFor==0){
                        custoTotal-=-1;
                    }
                    else if(custoanteriorFor==1){
                        custoTotal-=-2
                    }
                    else if(custoanteriorFor==2){
                        custoTotal-=-3
                    }
                    else if(custoanteriorFor==4){
                        custoTotal-=-5
                    }
                    else if(custoanteriorFor==7){
                        custoTotal-=-8
                    }
                    custoanteriorFor=-1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorFor=n1;
                    break;
                case 'val_des':
                    if(custoanteriorDes==0){
                        custoTotal-=-1;
                    }
                    else if(custoanteriorDes==1){
                        custoTotal-=-2
                    }
                    else if(custoanteriorDes==2){
                        custoTotal-=-3
                    }
                    else if(custoanteriorDes==4){
                        custoTotal-=-5
                    }
                    else if(custoanteriorDes==7){
                        custoTotal-=-8
                    }
                    custoanteriorDes=-1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorDes=n1;
                    break; 
                case 'val_con':
                    if(custoanteriorCon==0){
                        custoTotal-=-1;
                    }
                    else if(custoanteriorCon==1){
                        custoTotal-=-2
                    }
                    else if(custoanteriorCon==2){
                        custoTotal-=-3
                    }
                    else if(custoanteriorCon==4){
                        custoTotal-=-5
                    }
                    else if(custoanteriorCon==7){
                        custoTotal-=-8
                    }
                    custoanteriorCon=-1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorCon=n1;
                    break;
                case 'val_int':
                    if(custoanteriorInt==0){
                        custoTotal-=-1;
                    }
                    else if(custoanteriorInt==1){
                        custoTotal-=-2
                    }
                    else if(custoanteriorInt==2){
                        custoTotal-=-3
                    }
                    else if(custoanteriorInt==4){
                        custoTotal-=-5
                    }
                    else if(custoanteriorInt==7){
                        custoTotal-=-8
                    }
                    custoanteriorInt=-1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorInt=n1;
                    break;
                case 'val_sab':
                    if(custoanteriorSab==0){
                        custoTotal-=-1;
                    }
                    else if(custoanteriorSab==1){
                        custoTotal-=-2
                    }
                    else if(custoanteriorSab==2){
                        custoTotal-=-3
                    }
                    else if(custoanteriorSab==4){
                        custoTotal-=-5
                    }
                    else if(custoanteriorSab==7){
                        custoTotal-=-8
                    }
                    custoanteriorSab=-1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorSab=n1;
                    break;
                case 'val_car':
                    if(custoanteriorCar==0){
                        custoTotal-=-1;
                    }
                    else if(custoanteriorCar==1){
                        custoTotal-=-2
                    }
                    else if(custoanteriorCar==2){
                        custoTotal-=-3
                    }
                    else if(custoanteriorCar==4){
                        custoTotal-=-5
                    }
                    else if(custoanteriorCar==7){
                        custoTotal-=-8
                    }
                    custoanteriorCar=-1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorCar=n1;
                    break; 
            }
            break;
        case 0:
            window.document.getElementById(custo).innerHTML=0;
            SomarTotal(valor);
            switch(valor){
                case 'val_for':
                    custoTotal-=custoanteriorFor;
                    custoanteriorFor=0;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorFor=n1;
                    break;
                case 'val_des':
                    custoTotal-=custoanteriorDes;
                    custoanteriorDes=0;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorDes=n1;
                    break; 
                case 'val_con':
                    custoTotal-=custoanteriorCon;
                    custoanteriorCon=0;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorCon=n1;
                    break;
                case 'val_int':
                    custoTotal-=custoanteriorInt;
                    custoanteriorInt=0;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorInt=n1;
                    break;
                case 'val_sab':
                    custoTotal-=custoanteriorSab;
                    custoanteriorSab=0;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorSab=n1;
                    break;
                case 'val_car':
                    custoTotal-=custoanteriorCar;
                    custoanteriorCar=0;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorCar=n1;
                    break; 
            }
            break;
        case 1:
            window.document.getElementById(custo).innerHTML=1;
            SomarTotal(valor);
            switch(valor){
                case 'val_for':
                    if(custoanteriorFor==-1){
                        custoTotal-=2;
                    }
                    else if(custoanteriorFor==0){
                        custoTotal-=1
                    }
                    else if(custoanteriorFor==2){
                        custoTotal-=-1
                    }
                    else if(custoanteriorFor==4){
                        custoTotal-=-3
                    }
                    else if(custoanteriorFor==7){
                        custoTotal-=-6
                    }
                    custoanteriorFor=1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorFor=n1;
                    break;
                case 'val_des':
                    if(custoanteriorDes==-1){
                        custoTotal-=2;
                    }
                    else if(custoanteriorDes==0){
                        custoTotal-=1
                    }
                    else if(custoanteriorDes==2){
                        custoTotal-=-1
                    }
                    else if(custoanteriorDes==4){
                        custoTotal-=-3
                    }
                    else if(custoanteriorDes==7){
                        custoTotal-=-6
                    }
                    custoanteriorDes=1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorDes=n1;
                    break; 
                case 'val_con':
                    if(custoanteriorCon==-1){
                        custoTotal-=2;
                    }
                    else if(custoanteriorCon==0){
                        custoTotal-=1
                    }
                    else if(custoanteriorCon==2){
                        custoTotal-=-1
                    }
                    else if(custoanteriorCon==4){
                        custoTotal-=-3
                    }
                    else if(custoanteriorCon==7){
                        custoTotal-=-6
                    }
                    custoanteriorCon=1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorCon=n1;
                    break;
                case 'val_int':
                    if(custoanteriorInt==-1){
                        custoTotal-=2;
                    }
                    else if(custoanteriorInt==0){
                        custoTotal-=1
                    }
                    else if(custoanteriorInt==2){
                        custoTotal-=-1
                    }
                    else if(custoanteriorInt==4){
                        custoTotal-=-3
                    }
                    else if(custoanteriorInt==7){
                        custoTotal-=-6
                    }
                    custoanteriorInt=1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorInt=n1;
                    break;
                case 'val_sab':
                    if(custoanteriorSab==-1){
                        custoTotal-=2;
                    }
                    else if(custoanteriorSab==0){
                        custoTotal-=1
                    }
                    else if(custoanteriorSab==2){
                        custoTotal-=-1
                    }
                    else if(custoanteriorSab==4){
                        custoTotal-=-3
                    }
                    else if(custoanteriorSab==7){
                        custoTotal-=-6
                    }
                    custoanteriorSab=1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorSab=n1;
                    break;
                case 'val_car':
                    if(custoanteriorCar==-1){
                        custoTotal-=2;
                    }
                    else if(custoanteriorCar==0){
                        custoTotal-=1
                    }
                    else if(custoanteriorCar==2){
                        custoTotal-=-1
                    }
                    else if(custoanteriorCar==4){
                        custoTotal-=-3
                    }
                    else if(custoanteriorCar==7){
                        custoTotal-=-6
                    }
                    custoanteriorCar=1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorCar=n1;
                    break; 
            }
            break;
        case 2:
            window.document.getElementById(custo).innerHTML=2;
            SomarTotal(valor);
            switch(valor){
                case 'val_for':
                    if(custoanteriorFor==-1){
                        custoTotal-=3;
                    }
                    else if(custoanteriorFor==0){
                        custoTotal-=2
                    }
                    else if(custoanteriorFor==1){
                        custoTotal-=1
                    }
                    else if(custoanteriorFor==4){
                        custoTotal-=-2
                    }
                    else if(custoanteriorFor==7){
                        custoTotal-=-5
                    }
                    custoanteriorFor=2;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorFor=n1;
                    break;
                case 'val_des':
                    if(custoanteriorDes==-1){
                        custoTotal-=3;
                    }
                    else if(custoanteriorDes==0){
                        custoTotal-=2
                    }
                    else if(custoanteriorDes==1){
                        custoTotal-=1
                    }
                    else if(custoanteriorDes==4){
                        custoTotal-=-2
                    }
                    else if(custoanteriorDes==7){
                        custoTotal-=-5
                    }
                    custoanteriorDes=2;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorDes=n1;
                    break; 
                case 'val_con':
                    if(custoanteriorCon==-1){
                        custoTotal-=3;
                    }
                    else if(custoanteriorCon==0){
                        custoTotal-=2
                    }
                    else if(custoanteriorCon==1){
                        custoTotal-=1
                    }
                    else if(custoanteriorCon==4){
                        custoTotal-=-2
                    }
                    else if(custoanteriorCon==7){
                        custoTotal-=-5
                    }
                    custoanteriorCon=2;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorCon=n1;
                    break;
                case 'val_int':
                    if(custoanteriorInt==-1){
                        custoTotal-=3;
                    }
                    else if(custoanteriorInt==0){
                        custoTotal-=2
                    }
                    else if(custoanteriorInt==1){
                        custoTotal-=1
                    }
                    else if(custoanteriorInt==4){
                        custoTotal-=-2
                    }
                    else if(custoanteriorInt==7){
                        custoTotal-=-5
                    }
                    custoanteriorInt=2;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorInt=n1;
                    break;
                case 'val_sab':
                    if(custoanteriorSab==-1){
                        custoTotal-=3;
                    }
                    else if(custoanteriorSab==0){
                        custoTotal-=2
                    }
                    else if(custoanteriorSab==1){
                        custoTotal-=1
                    }
                    else if(custoanteriorSab==4){
                        custoTotal-=-2
                    }
                    else if(custoanteriorSab==7){
                        custoTotal-=-5
                    }
                    custoanteriorSab=2;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorSab=n1;
                    break;
                case 'val_car':
                    if(custoanteriorCar==-1){
                        custoTotal-=3;
                    }
                    else if(custoanteriorCar==0){
                        custoTotal-=2
                    }
                    else if(custoanteriorCar==1){
                        custoTotal-=1
                    }
                    else if(custoanteriorCar==4){
                        custoTotal-=-2
                    }
                    else if(custoanteriorCar==7){
                        custoTotal-=-5
                    }
                    custoanteriorCar=2;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorCar=n1;
                    break; 
            }
            break;
        case 3:
            window.document.getElementById(custo).innerHTML=4;
            SomarTotal(valor);
            switch(valor){
                case 'val_for':
                    if(custoanteriorFor==-1){
                        custoTotal-=5;
                    }
                    else if(custoanteriorFor==0){
                        custoTotal-=4
                    }
                    else if(custoanteriorFor==1){
                        custoTotal-=3
                    }
                    else if(custoanteriorFor==2){
                        custoTotal-=2
                    }
                    else if(custoanteriorFor==7){
                        custoTotal-=-3
                    }
                    custoanteriorFor=4;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorFor=n1;
                    break;
                case 'val_des':
                    if(custoanteriorDes==-1){
                        custoTotal-=5;
                    }
                    else if(custoanteriorDes==0){
                        custoTotal-=4
                    }
                    else if(custoanteriorDes==1){
                        custoTotal-=3
                    }
                    else if(custoanteriorDes==2){
                        custoTotal-=2
                    }
                    else if(custoanteriorDes==7){
                        custoTotal-=-3
                    }
                    custoanteriorDes=4;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorDes=n1;
                    break; 
                case 'val_con':
                    if(custoanteriorCon==-1){
                        custoTotal-=5;
                    }
                    else if(custoanteriorCon==0){
                        custoTotal-=4;
                    }
                    else if(custoanteriorCon==1){
                        custoTotal-=3;
                    }
                    else if(custoanteriorCon==2){
                        custoTotal-=2;
                    }
                    else if(custoanteriorCon==7){
                        custoTotal-=-3;
                    }
                    custoanteriorCon=4;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorCon=n1;
                    break;
                case 'val_int':
                    if(custoanteriorInt==-1){
                        custoTotal-=5;
                    }
                    else if(custoanteriorInt==0){
                        custoTotal-=4;
                    }
                    else if(custoanteriorInt==1){
                        custoTotal-=3;
                    }
                    else if(custoanteriorInt==2){
                        custoTotal-=2;
                    }
                    else if(custoanteriorInt==7){
                        custoTotal-=-3;
                    }
                    custoanteriorInt=4;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorInt=n1;
                    break;
                case 'val_sab':
                    if(custoanteriorSab==-1){
                        custoTotal-=5;
                    }
                    else if(custoanteriorSab==0){
                        custoTotal-=4;
                    }
                    else if(custoanteriorSab==1){
                        custoTotal-=3;
                    }
                    else if(custoanteriorSab==2){
                        custoTotal-=2;
                    }
                    else if(custoanteriorSab==7){
                        custoTotal-=-3;
                    }
                    custoanteriorSab=4;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorSab=n1;
                    break;
                case 'val_car':
                    if(custoanteriorCar==-1){
                        custoTotal-=5;
                    }
                    else if(custoanteriorCar==0){
                        custoTotal-=4;
                    }
                    else if(custoanteriorCar==1){
                        custoTotal-=3;
                    }
                    else if(custoanteriorCar==2){
                        custoTotal-=2;
                    }
                    else if(custoanteriorCar==7){
                        custoTotal-=-3
                    }
                    custoanteriorCar=4;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorCar=n1;
                    break; 
            }
            break;
        case 4:
            window.document.getElementById(custo).innerHTML=7;
            SomarTotal(valor);
            switch(valor){
                case 'val_for':
                    if(custoanteriorFor==-1){
                        custoTotal-=8;
                    }
                    else if(custoanteriorFor==0){
                        custoTotal-=7;
                    }
                    else if(custoanteriorFor==1){
                        custoTotal-=6;
                    }
                    else if(custoanteriorFor==2){
                        custoTotal-=5;
                    }
                    else if(custoanteriorFor==4){
                        custoTotal-=3;
                    }
                    custoanteriorFor=7;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorFor=n1;
                    break;
                case 'val_des':
                    if(custoanteriorDes==-1){
                        custoTotal-=8;
                    }
                    else if(custoanteriorDes==0){
                        custoTotal-=7;
                    }
                    else if(custoanteriorDes==1){
                        custoTotal-=6;
                    }
                    else if(custoanteriorDes==2){
                        custoTotal-=5;
                    }
                    else if(custoanteriorDes==4){
                        custoTotal-=3;
                    }
                    custoanteriorDes=7;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorDes=n1;
                    break; 
                case 'val_con':
                    if(custoanteriorCon==-1){
                        custoTotal-=8;
                    }
                    else if(custoanteriorCon==0){
                        custoTotal-=7;
                    }
                    else if(custoanteriorCon==1){
                        custoTotal-=6;
                    }
                    else if(custoanteriorCon==2){
                        custoTotal-=5;
                    }
                    else if(custoanteriorCon==4){
                        custoTotal-=3;
                    }
                    custoanteriorCon=7;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorCon=n1;
                    break;
                case 'val_int':
                    if(custoanteriorInt==-1){
                        custoTotal-=8;
                    }
                    else if(custoanteriorInt==0){
                        custoTotal-=7;
                    }
                    else if(custoanteriorInt==1){
                        custoTotal-=6;
                    }
                    else if(custoanteriorInt==2){
                        custoTotal-=5;
                    }
                    else if(custoanteriorInt==4){
                        custoTotal-=3;
                    }
                    custoanteriorInt=7;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorInt=n1;
                    break;
                case 'val_sab':
                    if(custoanteriorSab==-1){
                        custoTotal-=8;
                    }
                    else if(custoanteriorSab==0){
                        custoTotal-=7;
                    }
                    else if(custoanteriorSab==1){
                        custoTotal-=6;
                    }
                    else if(custoanteriorSab==2){
                        custoTotal-=5;
                    }
                    else if(custoanteriorSab==4){
                        custoTotal-=3;
                    }
                    custoanteriorSab=7;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalorSab=n1;
                    break;
                case 'val_car':
                    if(custoanteriorCar==-1){
                        custoTotal-=8;
                    }
                    else if(custoanteriorCar==0){
                        custoTotal-=7;
                    }
                    else if(custoanteriorCar==1){
                        custoTotal-=6;
                    }
                    else if(custoanteriorCar==2){
                        custoTotal-=5;
                    }
                    else if(custoanteriorCar==4){
                        custoTotal-=3;
                    }
                    custoanteriorCar=7;
                    window.document.getElementById("custo").innerHTML=custoTotal;
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
            checkBoxSelecionadas=0;
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            console.log(ultimaRaca);
            ResetarValor("raca_for");
            ResetarValor("raca_des");
            ResetarValor("raca_con");
            ResetarValor("raca_int");
            ResetarValor("raca_sab");
            ResetarValor("raca_car");
            ultimoBonusRacaFor=0;
            ultimoBonusRacaDes=0;
            ultimobonusracaCon=0;
            ultimobonusracaInt=0;
            ultimobonusracaSab=0;
            ultimobonusracaCar=0;
            if(!document.getElementById("label_for")){
                CriarCheckbox(valor);
            }
        break;

        case "anao":
            console.log(ultimaRaca);
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ValorMaior("raca_con");
            ValorMenor("raca_sab");
            Penalidade("raca_des");
            ResetarValor("raca_for");
            ResetarValor("raca_int");
            ResetarValor("raca_car");
            ultimoBonusRacaFor=0;
            ultimoBonusRacaDes=-1;
            ultimobonusracaCon=2;
            ultimobonusracaInt=0;
            ultimobonusracaSab=1;
            ultimobonusracaCar=0;
        break;

        case "dahllan":
            console.log(ultimaRaca);
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ValorMaior("raca_sab");
            ValorMenor("raca_des");
            Penalidade("raca_int");
            ResetarValor("raca_for");
            ResetarValor("raca_con");
            ResetarValor("raca_car");
            ultimoBonusRacaFor=0;
            ultimoBonusRacaDes=1;
            ultimobonusracaCon=0;
            ultimobonusracaInt=-1;
            ultimobonusracaSab=2;
            ultimobonusracaCar=0;
        break;

        case "elfo":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ValorMaior("raca_int");
            ValorMenor("raca_des");
            Penalidade("raca_con");
            ResetarValor("raca_for");
            ResetarValor("raca_sab");
            ResetarValor("raca_car");
            ultimoBonusRacaFor=0;
            ultimoBonusRacaDes=1;
            ultimobonusracaCon=-1;
            ultimobonusracaInt=2;
            ultimobonusracaSab=0;
            ultimobonusracaCar=0;
         break;

         case "goblin":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ValorMaior("raca_des");
            ValorMenor("raca_int");
            Penalidade("raca_car");
            ResetarValor("raca_for");
            ResetarValor("raca_con");
            ResetarValor("raca_sab");
            ultimoBonusRacaFor=0;
            ultimoBonusRacaDes=2;
            ultimobonusracaCon=0;
            ultimobonusracaInt=1;
            ultimobonusracaSab=0;
            ultimobonusracaCar=-1;
         break;

         case "lefou":
            checkBoxSelecionadas=0;
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ResetarValor("raca_for");
            ResetarValor("raca_des");
            ResetarValor("raca_con");
            ResetarValor("raca_int");
            ResetarValor("raca_sab");
            ultimoBonusRacaFor=0;
            ultimoBonusRacaDes=0;
            ultimobonusracaCon=0;
            ultimobonusracaInt=0;
            ultimobonusracaSab=0;
            ultimobonusracaCar=0;
            if(!document.getElementById("label_for")){
                CriarCheckbox(valor);
            }
            Penalidade("raca_car");
            ultimobonusracaCar=-1;
         break;

         case "minotauro":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ValorMaior("raca_for");
            ValorMenor("raca_con");
            Penalidade("raca_sab");
            ResetarValor("raca_des");
            ResetarValor("raca_int");
            ResetarValor("raca_car");
            ultimoBonusRacaFor=2;
            ultimoBonusRacaDes=0;
            ultimobonusracaCon=1;
            ultimobonusracaInt=0;
            ultimobonusracaSab=-1;
            ultimobonusracaCar=0;
         break;

         case "qareen":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ValorMaior("raca_car");
            ValorMenor("raca_int");
            Penalidade("raca_sab");
            ResetarValor("raca_for");
            ResetarValor("raca_des");
            ResetarValor("raca_con");
            ultimoBonusRacaFor=0;
            ultimoBonusRacaDes=0;
            ultimobonusracaCon=0;
            ultimobonusracaInt=1;
            ultimobonusracaSab=-1;
            ultimobonusracaCar=2;
         break;

         case "golem":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ValorMaior("raca_for");
            ValorMenor("raca_con");
            Penalidade("raca_car");
            ResetarValor("raca_des");
            ResetarValor("raca_int");
            ResetarValor("raca_sab");
            ultimoBonusRacaFor=2;
            ultimoBonusRacaDes=0;
            ultimobonusracaCon=1;
            ultimobonusracaInt=0;
            ultimobonusracaSab=0;
            ultimobonusracaCar=-1;
         break;

         case "hynne":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ValorMaior("raca_des");
            ValorMenor("raca_car");
            Penalidade("raca_for");
            ResetarValor("raca_con");
            ResetarValor("raca_int");
            ResetarValor("raca_sab");
            ultimoBonusRacaFor=-1;
            ultimoBonusRacaDes=2;
            ultimobonusracaCon=0;
            ultimobonusracaInt=0;
            ultimobonusracaSab=0;
            ultimobonusracaCar=1;
         break;

         case "kliren":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ValorMaior("raca_int");
            ValorMenor("raca_car");
            Penalidade("raca_for");
            ResetarValor("raca_des");
            ResetarValor("raca_con");
            ResetarValor("raca_sab");
            ultimoBonusRacaFor=-1;
            ultimoBonusRacaDes=0;
            ultimobonusracaCon=0;
            ultimobonusracaInt=2;
            ultimobonusracaSab=0;
            ultimobonusracaCar=1;
         break;

         case "medusa":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ValorMaior("raca_des");
            ValorMenor("raca_car");
            ResetarValor("raca_for");
            ResetarValor("raca_con");
            ResetarValor("raca_int");
            ResetarValor("raca_sab");
            ultimoBonusRacaFor=0;
            ultimoBonusRacaDes=2;
            ultimobonusracaCon=0;
            ultimobonusracaInt=0;
            ultimobonusracaSab=0;
            ultimobonusracaCar=1;
         break;

         case "osteon":
            checkBoxSelecionadas=0;
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ResetarValor("raca_for");
            ResetarValor("raca_des");
            ResetarValor("raca_con");
            ResetarValor("raca_int");
            ResetarValor("raca_sab");
            ResetarValor("raca_car");
            ultimoBonusRacaFor=0;
            ultimoBonusRacaDes=0;
            ultimobonusracaCon=0;
            ultimobonusracaInt=0;
            ultimobonusracaSab=0;
            ultimobonusracaCar=0;
            if(!document.getElementById("label_for")){
                CriarCheckbox(valor);
            }
            Penalidade("raca_con");
            ultimobonusracaCon=-1;
         break;

         case "sereia":
            checkBoxSelecionadas=0;
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ResetarValor("raca_for");
            ResetarValor("raca_des");
            ResetarValor("raca_con");
            ResetarValor("raca_int");
            ResetarValor("raca_sab");
            ResetarValor("raca_car");
            ultimoBonusRacaFor=0;
            ultimoBonusRacaDes=0;
            ultimobonusracaCon=0;
            ultimobonusracaInt=0;
            ultimobonusracaSab=0;
            ultimobonusracaCar=0;
            if(!document.getElementById("label_for")){
                CriarCheckbox(valor);
            }
         break;

         case "silfide":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ValorMaior("raca_car");
            ValorMenor("raca_des");
            PenalidadeMaior("raca_for");
            ResetarValor("raca_con");
            ResetarValor("raca_int");
            ResetarValor("raca_sab");
            ultimoBonusRacaFor=-2;
            ultimoBonusRacaDes=1;
            ultimobonusracaCon=0;
            ultimobonusracaInt=0;
            ultimobonusracaSab=0;
            ultimobonusracaCar=2;
         break;

         case "aggelus":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ValorMaior("raca_sab");
            ValorMenor("raca_car");
            ResetarValor("raca_for");
            ResetarValor("raca_des");
            ResetarValor("raca_con");
            ResetarValor("raca_int");
            ultimoBonusRacaFor=0;
            ultimoBonusRacaDes=0;
            ultimobonusracaCon=0;
            ultimobonusracaInt=0;
            ultimobonusracaSab=2;
            ultimobonusracaCar=1;

         break;
         case "sulfure":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ValorMaior("raca_des");
            ValorMenor("raca_int");
            ResetarValor("raca_for");
            ResetarValor("raca_con");
            ResetarValor("raca_sab");
            ResetarValor("raca_car");
            ultimoBonusRacaFor=0;
            ultimoBonusRacaDes=2;
            ultimobonusracaCon=0;
            ultimobonusracaInt=1;
            ultimobonusracaSab=0;
            ultimobonusracaCar=0;
         break;

         case "trog":
            if(document.getElementById("label_for")){
                ApagarCheckbox(ultimaRaca);
            }
            ultimaRaca=valor;
            ValorMaior("raca_con");
            ValorMenor("raca_for");
            Penalidade("raca_int");
            ResetarValor("raca_des");
            ResetarValor("raca_sab");
            ResetarValor("raca_car");
            ultimoBonusRacaFor=1;
            ultimoBonusRacaDes=0;
            ultimobonusracaCon=2;
            ultimobonusracaInt=-1;
            ultimobonusracaSab=0;
            ultimobonusracaCar=0;
         break;
    }
}

function BonusRacaCheckbox(checkbox){
    var c=document.getElementById(checkbox)
    if(c.checked){
        if(checkBoxSelecionadas<=2){
            switch(checkbox){
                case "selet_for":
                    ValorMenor("raca_for");
                    ultimoBonusRacaFor=1;
                    checkBoxSelecionadas++;
                break;
                case "selet_des":
                    ValorMenor("raca_des");
                    ultimoBonusRacaDes=1;
                    checkBoxSelecionadas++;
                break;
                case "selet_con":
                    ValorMenor("raca_con");
                    ultimobonusracaCon=1;
                    checkBoxSelecionadas++;
                break;
                case "selet_int":
                    ValorMenor("raca_int");
                    ultimobonusracaInt=1;
                    checkBoxSelecionadas++;
                break;
                case "selet_sab":
                    ValorMenor("raca_sab");
                    ultimobonusracaSab=1;
                    checkBoxSelecionadas++;
                break;
                case "selet_car":
                    ValorMenor("raca_car");
                    ultimobonusracaCar=1;
                    checkBoxSelecionadas++;
                break;

            }
        }
        else{
            c.checked=false;
        }
    }
    else{
        if(checkBoxSelecionadas>=0){
            switch(checkbox){
                case "selet_for":
                    ResetarValor("raca_for");
                    ultimoBonusRacaFor=0;
                    checkBoxSelecionadas--;
                break;
                case "selet_des":
                    ResetarValor("raca_des");
                    ultimoBonusRacaDes=0;
                    checkBoxSelecionadas--;
                break;
                case "selet_con":
                    ResetarValor("raca_con");
                    ultimobonusracaCon=0;
                    checkBoxSelecionadas--;
                break;
                case "selet_int":
                    ResetarValor("raca_int");
                    ultimobonusracaInt=0;
                    checkBoxSelecionadas--;
                break;
                case "selet_sab":
                    ResetarValor("raca_sab");
                    ultimobonusracaSab=0;
                    checkBoxSelecionadas--;
                break;
                case "selet_car":
                    ResetarValor("raca_car");
                    ultimobonusracaCar=0;
                    checkBoxSelecionadas--;
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

function PenalidadeMaior(valor){
    var b1 =document.getElementById(valor);
    b1.value=parseInt(-2);
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

function ApagarCheckbox(ultimaRaca){
    if(ultimaRaca=="humano" || ultimaRaca=="sereia")
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
    else if(ultimaRaca=="lefou"){
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
    else if(ultimaRaca=="osteon"){
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
    console.log("BATATA")
    console.log(valorasomar);
    if(valor=="val_for"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalorFor);
            totalFor=totalFor-ultimovalorFor;
        }
        else{
            diferenca=ultimovalorFor-valorasomar;
            console.log(ultimovalorFor);
            if(diferenca<0){
                totalFor+=-diferenca;
            }else if(diferenca>0){
                totalFor-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_for").innerHTML=totalFor;
        console.log(totalFor);

    } 
    else if(valor=="raca_for"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimoBonusRacaFor);
            totalFor=totalFor-ultimoBonusRacaFor;
        }
        else{
            diferenca=ultimoBonusRacaFor-valorasomar;
            console.log(ultimoBonusRacaFor);
            if(diferenca<0){
                totalFor+=-diferenca;
            }else if(diferenca>0){
                totalFor-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_for").innerHTML=totalFor;
        console.log(totalFor);

    }
    else if(valor=="bon_for"){
        console.log("SORVETE");
        if(valorasomar==0){
            console.log("AAAAAAAAAAAAAAAAAAAAAAA");
            console.log(ultimoBonusFor);
            totalFor=totalFor-ultimoBonusFor;
        }
        else{
            diferenca=ultimoBonusFor-valorasomar;
            console.log(ultimoBonusFor);
            if(diferenca<0){
                totalFor+=-diferenca;
            }else if(diferenca>0){
                totalFor-=diferenca;
            }
        }

        ultimoBonusFor=valorasomar;
        console.log("vai somar")
        window.document.getElementById("tot_for").innerHTML=totalFor;
        console.log(totalFor);

    }
    else if(valor=="val_des"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalorDes);
            totalDes=totalDes-ultimovalorDes;
        }
        else{
            diferenca=ultimovalorDes-valorasomar;
            console.log(ultimovalorDes);
            if(diferenca<0){
                totalDes+=-diferenca;
            }else if(diferenca>0){
                totalDes-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_des").innerHTML=totalDes;
        console.log(totalDes);

    }
    else if(valor=="raca_des"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimoBonusRacaDes);
            totalDes=totalDes-ultimoBonusRacaDes;
        }
        else{
            diferenca=ultimoBonusRacaDes-valorasomar;
            console.log(ultimoBonusRacaDes);
            if(diferenca<0){
                totalDes+=-diferenca;
            }else if(diferenca>0){
                totalDes-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_des").innerHTML=totalDes;
        console.log(totalDes);

    }
    else if(valor=="bon_des"){
        console.log("SORVETE");
        if(valorasomar==0){
            console.log("AAAAAAAAAAAAAAAAAAAAAAA");
            console.log(ultimoBonusDes);
            totalDes=totalDes-ultimoBonusDes;
        }
        else{
            diferenca=ultimoBonusDes-valorasomar;
            console.log(ultimoBonusDes);
            if(diferenca<0){
                totalDes+=-diferenca;
            }else if(diferenca>0){
                totalDes-=diferenca;
            }
        }

        ultimoBonusDes=valorasomar;
        console.log("vai somar")
        window.document.getElementById("tot_des").innerHTML=totalDes;
        console.log(totalDes);

    }
    else if(valor=="val_con"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalorCon);
            totalCon=totalCon-ultimovalorCon;
        }
        else{
            diferenca=ultimovalorCon-valorasomar;
            console.log(ultimovalorCon);
            if(diferenca<0){
                totalCon+=-diferenca;
            }else if(diferenca>0){
                totalCon-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_con").innerHTML=totalCon;
        console.log(totalCon);

    }
    else if(valor=="raca_con"){
        if(valorasomar==0){
            console.log("AQUI LEONARDO");
            console.log(ultimobonusracaCon);
            console.log(totalCon);
            totalCon-=ultimobonusracaCon;
            console.log(totalCon);
        }
        else{
            diferenca=ultimobonusracaCon-valorasomar;
            console.log(ultimobonusracaCon);
            if(diferenca<0){
                totalCon+=-diferenca;
            }else if(diferenca>0){
                totalCon-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_con").innerHTML=totalCon;
        console.log(totalCon);

    }
    else if(valor=="bon_con"){
        console.log("SORVETE");
        if(valorasomar==0){
            console.log("AAAAAAAAAAAAAAAAAAAAAAA");
            console.log(ultimoBonusCon);
            totalCon=totalCon-ultimoBonusCon;
        }
        else{
            diferenca=ultimoBonusCon-valorasomar;
            console.log(ultimoBonusCon);
            if(diferenca<0){
                totalCon+=-diferenca;
            }else if(diferenca>0){
                totalCon-=diferenca;
            }
        }

        ultimoBonusCon=valorasomar;
        console.log("vai somar")
        window.document.getElementById("tot_con").innerHTML=totalCon;
        console.log(totalCon);

    }
    else if(valor=="val_int"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalorInt);
            totalInt=totalInt-ultimovalorInt;
        }
        else{
            diferenca=ultimovalorInt-valorasomar;
            console.log(ultimovalorInt);
            if(diferenca<0){
                totalInt+=-diferenca;
            }else if(diferenca>0){
                totalInt-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_int").innerHTML=totalInt;
        console.log(totalInt);

    }
    else if(valor=="raca_int"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimobonusracaInt);
            totalInt=totalInt-ultimobonusracaInt;
        }
        else{
            diferenca=ultimobonusracaInt-valorasomar;
            console.log(ultimobonusracaInt);
            if(diferenca<0){
                totalInt+=-diferenca;
            }else if(diferenca>0){
                totalInt-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_int").innerHTML=totalInt;
        console.log(totalInt);

    }
    else if(valor=="bon_int"){
        console.log("SORVETE");
        if(valorasomar==0){
            console.log("AAAAAAAAAAAAAAAAAAAAAAA");
            console.log(ultimoBonusInt);
            totalInt=totalInt-ultimoBonusInt;
        }
        else{
            diferenca=ultimoBonusInt-valorasomar;
            console.log(ultimoBonusInt);
            if(diferenca<0){
                totalInt+=-diferenca;
            }else if(diferenca>0){
                totalInt-=diferenca;
            }
        }

        ultimoBonusInt=valorasomar;
        console.log("vai somar")
        window.document.getElementById("tot_int").innerHTML=totalInt;
        console.log(totalInt);

    }
    else if(valor=="val_sab"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalorSab);
            totalSab=totalSab-ultimovalorSab;
        }
        else{
            diferenca=ultimovalorSab-valorasomar;
            console.log(ultimovalorSab);
            if(diferenca<0){
                totalSab+=-diferenca;
            }else if(diferenca>0){
                totalSab-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_sab").innerHTML=totalSab;
        console.log(totalSab);
    }
    else if(valor=="raca_sab"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimobonusracaSab);
            totalSab=totalSab-ultimobonusracaSab;
        }
        else{
            diferenca=ultimobonusracaSab-valorasomar;
            console.log(ultimobonusracaSab);
            if(diferenca<0){
                totalSab+=-diferenca;
            }else if(diferenca>0){
                totalSab-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_sab").innerHTML=totalSab;
        console.log(totalSab);

    }
    else if(valor=="bon_sab"){
        console.log("SORVETE");
        if(valorasomar==0){
            console.log("AAAAAAAAAAAAAAAAAAAAAAA");
            console.log(ultimoBonusSab);
            totalSab=totalSab-ultimoBonusSab;
        }
        else{
            diferenca=ultimoBonusSab-valorasomar;
            console.log(ultimoBonusSab);
            if(diferenca<0){
                totalSab+=-diferenca;
            }else if(diferenca>0){
                totalSab-=diferenca;
            }
        }

        ultimoBonusSab=valorasomar;
        console.log("vai somar")
        window.document.getElementById("tot_sab").innerHTML=totalSab;
        console.log(totalSab);

    }

    else if(valor=="val_car"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalorCar);
            totalCar=totalCar-ultimovalorCar;
        }
        else{
            diferenca=ultimovalorCar-valorasomar;
            console.log(ultimovalorCar);
            if(diferenca<0){
                totalCar+=-diferenca;
            }else if(diferenca>0){
                totalCar-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_car").innerHTML=totalCar;
        console.log(totalCar);

    }
    else if(valor=="raca_car"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimobonusracaCar);
            totalCar=totalCar-ultimobonusracaCar;
        }
        else{
            diferenca=ultimobonusracaCar-valorasomar;
            console.log(ultimobonusracaCar);
            if(diferenca<0){
                totalCar+=-diferenca;
            }else if(diferenca>0){
                totalCar-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_car").innerHTML=totalCar;
        console.log(totalCar);

    }

    else if(valor=="bon_car"){
        console.log("HAMBURGUER");
        if(valorasomar==0){
            console.log("AAAAAAAAAAAAAAAAAAAAAAA");
            console.log(ultimoBonusCar);
            totalCar=totalCar-ultimoBonusCar;
        }
        else{
            console.log("BACONNNNN")
            diferenca=ultimoBonusCar-valorasomar;
            console.log(ultimoBonusCar);
            if(diferenca<0){
                console.log("MOSTARDAAAAAA")
                totalCar+=-diferenca;
            }else if(diferenca>0){
                console.log("MAIONESEEEE")
                totalCar-=diferenca;
            }
        }

        ultimoBonusCar=valorasomar;
        console.log("vai somar")
        window.document.getElementById("tot_car").innerHTML=totalCar;
        console.log(totalCar);

    }
}