var ultimaRaca="";
var checkBoxSelecionadas=0;
var totalAtributo=[0,0,0,0,0,0];
var custoTotal=10;
var ultimovalor=[0,0,0,0,0,0];
var ultimoBonusRaca=[0,0,0,0,0,0];
var ultimoBonus=[0,0,0,0,0,0];
var custoanterior=[0,0,0,0,0,0];
const forca=0;
const des=1;
const con=2;
const int=3;
const sab=4;
const car=5;
var camposRacas=new Array(6);

const mapRaca=new Map();
mapRaca.set('humano',[0,0,0,0,0,0]);
mapRaca.set('anao',[0,-1,2,0,1,0]);
mapRaca.set('dahllan',[0,1,0,-1,2,0]);
mapRaca.set('elfo',[0,1,-1,2,0,0]);
mapRaca.set('goblin',[0,2,0,1,0,-1]);
mapRaca.set('lefou',[0,0,0,0,0,0-1]);
mapRaca.set('minotauro',[2,0,1,0,-1,0]);
mapRaca.set('qareen',[0,0,0,1,-1,2]);
mapRaca.set('golem',[2,0,1,0,0,-1]);
mapRaca.set('hynne',[-1,2,0,0,0,1]);
mapRaca.set('kliren',[-1,0,0,2,0,1]);
mapRaca.set('medusa',[0,2,0,0,0,1]);
mapRaca.set('osteon',[0,0,-1,0,0,0]);
mapRaca.set('sereia',[0,0,0,0,0,0]);
mapRaca.set('silfide',[-2,1,0,0,0,2]);
mapRaca.set('aggelus',[0,0,0,0,2,1]);
mapRaca.set('sulfure',[0,2,0,1,0,0]);
mapRaca.set('trog',[1,0,2,-1,0,0]);


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
                    if(custoanterior[forca]==0){
                        custoTotal-=-1;
                    }
                    else if(custoanterior[forca]==1){
                        custoTotal-=-2
                    }
                    else if(custoanterior[forca]==2){
                        custoTotal-=-3
                    }
                    else if(custoanterior[forca]==4){
                        custoTotal-=-5
                    }
                    else if(custoanterior[forca]==7){
                        custoTotal-=-8
                    }
                    custoanterior[forca]=-1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[forca]=n1;
                    break;
                case 'val_des':
                    if(custoanterior[des]==0){
                        custoTotal-=-1;
                    }
                    else if(custoanterior[des]==1){
                        custoTotal-=-2
                    }
                    else if(custoanterior[des]==2){
                        custoTotal-=-3
                    }
                    else if(custoanterior[des]==4){
                        custoTotal-=-5
                    }
                    else if(custoanterior[des]==7){
                        custoTotal-=-8
                    }
                    custoanterior[des]=-1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[des]=n1;
                    break; 
                case 'val_con':
                    if(custoanterior[con]==0){
                        custoTotal-=-1;
                    }
                    else if(custoanterior[con]==1){
                        custoTotal-=-2
                    }
                    else if(custoanterior[con]==2){
                        custoTotal-=-3
                    }
                    else if(custoanterior[con]==4){
                        custoTotal-=-5
                    }
                    else if(custoanterior[con]==7){
                        custoTotal-=-8
                    }
                    custoanterior[con]=-1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[con]=n1;
                    break;
                case 'val_int':
                    if(custoanterior[int]==0){
                        custoTotal-=-1;
                    }
                    else if(custoanterior[int]==1){
                        custoTotal-=-2
                    }
                    else if(custoanterior[int]==2){
                        custoTotal-=-3
                    }
                    else if(custoanterior[int]==4){
                        custoTotal-=-5
                    }
                    else if(custoanterior[int]==7){
                        custoTotal-=-8
                    }
                    custoanterior[int]=-1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[int]=n1;
                    break;
                case 'val_sab':
                    if(custoanterior[sab]==0){
                        custoTotal-=-1;
                    }
                    else if(custoanterior[sab]==1){
                        custoTotal-=-2
                    }
                    else if(custoanterior[sab]==2){
                        custoTotal-=-3
                    }
                    else if(custoanterior[sab]==4){
                        custoTotal-=-5
                    }
                    else if(custoanterior[sab]==7){
                        custoTotal-=-8
                    }
                    custoanterior[sab]=-1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[sab]=n1;
                    break;
                case 'val_car':
                    if(custoanterior[car]==0){
                        custoTotal-=-1;
                    }
                    else if(custoanterior[car]==1){
                        custoTotal-=-2
                    }
                    else if(custoanterior[car]==2){
                        custoTotal-=-3
                    }
                    else if(custoanterior[car]==4){
                        custoTotal-=-5
                    }
                    else if(custoanterior[car]==7){
                        custoTotal-=-8
                    }
                    custoanterior[car]=-1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[car]=n1;
                    break; 
            }
            break;
        case 0:
            window.document.getElementById(custo).innerHTML=0;
            SomarTotal(valor);
            switch(valor){
                case 'val_for':
                    custoTotal+=custoanterior[forca];
                    custoanterior[forca]=0;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[forca]=n1;
                    break;
                case 'val_des':
                    custoTotal+=custoanterior[des];
                    custoanterior[des]=0;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[des]=n1;
                    break; 
                case 'val_con':
                    custoTotal+=custoanterior[con];
                    custoanterior[con]=0;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[con]=n1;
                    break;
                case 'val_int':
                    custoTotal+=custoanterior[int];
                    custoanterior[int]=0;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[int]=n1;
                    break;
                case 'val_sab':
                    custoTotal+=custoanterior[sab];
                    custoanterior[sab]=0;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[sab]=n1;
                    break;
                case 'val_car':
                    custoTotal+=custoanterior[car];
                    custoanterior[car]=0;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[car]=n1;
                    break; 
            }
            break;
        case 1:
            window.document.getElementById(custo).innerHTML=1;
            SomarTotal(valor);
            switch(valor){
                case 'val_for':
                    if(custoanterior[forca]==-1){
                        custoTotal-=2;
                    }
                    else if(custoanterior[forca]==0){
                        custoTotal-=1
                    }
                    else if(custoanterior[forca]==2){
                        custoTotal-=-1
                    }
                    else if(custoanterior[forca]==4){
                        custoTotal-=-3
                    }
                    else if(custoanterior[forca]==7){
                        custoTotal-=-6
                    }
                    custoanterior[forca]=1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[forca]=n1;
                    break;
                case 'val_des':
                    if(custoanterior[des]==-1){
                        custoTotal-=2;
                    }
                    else if(custoanterior[des]==0){
                        custoTotal-=1
                    }
                    else if(custoanterior[des]==2){
                        custoTotal-=-1
                    }
                    else if(custoanterior[des]==4){
                        custoTotal-=-3
                    }
                    else if(custoanterior[des]==7){
                        custoTotal-=-6
                    }
                    custoanterior[des]=1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[des]=n1;
                    break; 
                case 'val_con':
                    if(custoanterior[con]==-1){
                        custoTotal-=2;
                    }
                    else if(custoanterior[con]==0){
                        custoTotal-=1
                    }
                    else if(custoanterior[con]==2){
                        custoTotal-=-1
                    }
                    else if(custoanterior[con]==4){
                        custoTotal-=-3
                    }
                    else if(custoanterior[con]==7){
                        custoTotal-=-6
                    }
                    custoanterior[con]=1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[con]=n1;
                    break;
                case 'val_int':
                    if(custoanterior[int]==-1){
                        custoTotal-=2;
                    }
                    else if(custoanterior[int]==0){
                        custoTotal-=1
                    }
                    else if(custoanterior[int]==2){
                        custoTotal-=-1
                    }
                    else if(custoanterior[int]==4){
                        custoTotal-=-3
                    }
                    else if(custoanterior[int]==7){
                        custoTotal-=-6
                    }
                    custoanterior[int]=1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[int]=n1;
                    break;
                case 'val_sab':
                    if(custoanterior[sab]==-1){
                        custoTotal-=2;
                    }
                    else if(custoanterior[sab]==0){
                        custoTotal-=1
                    }
                    else if(custoanterior[sab]==2){
                        custoTotal-=-1
                    }
                    else if(custoanterior[sab]==4){
                        custoTotal-=-3
                    }
                    else if(custoanterior[sab]==7){
                        custoTotal-=-6
                    }
                    custoanterior[sab]=1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[sab]=n1;
                    break;
                case 'val_car':
                    if(custoanterior[car]==-1){
                        custoTotal-=2;
                    }
                    else if(custoanterior[car]==0){
                        custoTotal-=1
                    }
                    else if(custoanterior[car]==2){
                        custoTotal-=-1
                    }
                    else if(custoanterior[car]==4){
                        custoTotal-=-3
                    }
                    else if(custoanterior[car]==7){
                        custoTotal-=-6
                    }
                    custoanterior[car]=1;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[car]=n1;
                    break; 
            }
            break;
        case 2:
            window.document.getElementById(custo).innerHTML=2;
            SomarTotal(valor);
            switch(valor){
                case 'val_for':
                    if(custoanterior[forca]==-1){
                        custoTotal-=3;
                    }
                    else if(custoanterior[forca]==0){
                        custoTotal-=2
                    }
                    else if(custoanterior[forca]==1){
                        custoTotal-=1
                    }
                    else if(custoanterior[forca]==4){
                        custoTotal-=-2
                    }
                    else if(custoanterior[forca]==7){
                        custoTotal-=-5
                    }
                    custoanterior[forca]=2;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[forca]=n1;
                    break;
                case 'val_des':
                    if(custoanterior[des]==-1){
                        custoTotal-=3;
                    }
                    else if(custoanterior[des]==0){
                        custoTotal-=2
                    }
                    else if(custoanterior[des]==1){
                        custoTotal-=1
                    }
                    else if(custoanterior[des]==4){
                        custoTotal-=-2
                    }
                    else if(custoanterior[des]==7){
                        custoTotal-=-5
                    }
                    custoanterior[des]=2;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[des]=n1;
                    break; 
                case 'val_con':
                    if(custoanterior[con]==-1){
                        custoTotal-=3;
                    }
                    else if(custoanterior[con]==0){
                        custoTotal-=2
                    }
                    else if(custoanterior[con]==1){
                        custoTotal-=1
                    }
                    else if(custoanterior[con]==4){
                        custoTotal-=-2
                    }
                    else if(custoanterior[con]==7){
                        custoTotal-=-5
                    }
                    custoanterior[con]=2;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[con]=n1;
                    break;
                case 'val_int':
                    if(custoanterior[int]==-1){
                        custoTotal-=3;
                    }
                    else if(custoanterior[int]==0){
                        custoTotal-=2
                    }
                    else if(custoanterior[int]==1){
                        custoTotal-=1
                    }
                    else if(custoanterior[int]==4){
                        custoTotal-=-2
                    }
                    else if(custoanterior[int]==7){
                        custoTotal-=-5
                    }
                    custoanterior[int]=2;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[int]=n1;
                    break;
                case 'val_sab':
                    if(custoanterior[sab]==-1){
                        custoTotal-=3;
                    }
                    else if(custoanterior[sab]==0){
                        custoTotal-=2
                    }
                    else if(custoanterior[sab]==1){
                        custoTotal-=1
                    }
                    else if(custoanterior[sab]==4){
                        custoTotal-=-2
                    }
                    else if(custoanterior[sab]==7){
                        custoTotal-=-5
                    }
                    custoanterior[sab]=2;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[sab]=n1;
                    break;
                case 'val_car':
                    if(custoanterior[car]==-1){
                        custoTotal-=3;
                    }
                    else if(custoanterior[car]==0){
                        custoTotal-=2
                    }
                    else if(custoanterior[car]==1){
                        custoTotal-=1
                    }
                    else if(custoanterior[car]==4){
                        custoTotal-=-2
                    }
                    else if(custoanterior[car]==7){
                        custoTotal-=-5
                    }
                    custoanterior[car]=2;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[car]=n1;
                    break; 
            }
            break;
        case 3:
            window.document.getElementById(custo).innerHTML=4;
            SomarTotal(valor);
            switch(valor){
                case 'val_for':
                    if(custoanterior[forca]==-1){
                        custoTotal-=5;
                    }
                    else if(custoanterior[forca]==0){
                        custoTotal-=4
                    }
                    else if(custoanterior[forca]==1){
                        custoTotal-=3
                    }
                    else if(custoanterior[forca]==2){
                        custoTotal-=2
                    }
                    else if(custoanterior[forca]==7){
                        custoTotal-=-3
                    }
                    custoanterior[forca]=4;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[forca]=n1;
                    break;
                case 'val_des':
                    if(custoanterior[des]==-1){
                        custoTotal-=5;
                    }
                    else if(custoanterior[des]==0){
                        custoTotal-=4
                    }
                    else if(custoanterior[des]==1){
                        custoTotal-=3
                    }
                    else if(custoanterior[des]==2){
                        custoTotal-=2
                    }
                    else if(custoanterior[des]==7){
                        custoTotal-=-3
                    }
                    custoanterior[des]=4;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[des]=n1;
                    break; 
                case 'val_con':
                    if(custoanterior[con]==-1){
                        custoTotal-=5;
                    }
                    else if(custoanterior[con]==0){
                        custoTotal-=4;
                    }
                    else if(custoanterior[con]==1){
                        custoTotal-=3;
                    }
                    else if(custoanterior[con]==2){
                        custoTotal-=2;
                    }
                    else if(custoanterior[con]==7){
                        custoTotal-=-3;
                    }
                    custoanterior[con]=4;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[con]=n1;
                    break;
                case 'val_int':
                    if(custoanterior[int]==-1){
                        custoTotal-=5;
                    }
                    else if(custoanterior[int]==0){
                        custoTotal-=4;
                    }
                    else if(custoanterior[int]==1){
                        custoTotal-=3;
                    }
                    else if(custoanterior[int]==2){
                        custoTotal-=2;
                    }
                    else if(custoanterior[int]==7){
                        custoTotal-=-3;
                    }
                    custoanterior[int]=4;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[int]=n1;
                    break;
                case 'val_sab':
                    if(custoanterior[sab]==-1){
                        custoTotal-=5;
                    }
                    else if(custoanterior[sab]==0){
                        custoTotal-=4;
                    }
                    else if(custoanterior[sab]==1){
                        custoTotal-=3;
                    }
                    else if(custoanterior[sab]==2){
                        custoTotal-=2;
                    }
                    else if(custoanterior[sab]==7){
                        custoTotal-=-3;
                    }
                    custoanterior[sab]=4;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[sab]=n1;
                    break;
                case 'val_car':
                    if(custoanterior[car]==-1){
                        custoTotal-=5;
                    }
                    else if(custoanterior[car]==0){
                        custoTotal-=4;
                    }
                    else if(custoanterior[car]==1){
                        custoTotal-=3;
                    }
                    else if(custoanterior[car]==2){
                        custoTotal-=2;
                    }
                    else if(custoanterior[car]==7){
                        custoTotal-=-3
                    }
                    custoanterior[car]=4;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[car]=n1;
                    break; 
            }
            break;
        case 4:
            window.document.getElementById(custo).innerHTML=7;
            SomarTotal(valor);
            switch(valor){
                case 'val_for':
                    if(custoanterior[forca]==-1){
                        custoTotal-=8;
                    }
                    else if(custoanterior[forca]==0){
                        custoTotal-=7;
                    }
                    else if(custoanterior[forca]==1){
                        custoTotal-=6;
                    }
                    else if(custoanterior[forca]==2){
                        custoTotal-=5;
                    }
                    else if(custoanterior[forca]==4){
                        custoTotal-=3;
                    }
                    custoanterior[forca]=7;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[forca]=n1;
                    break;
                case 'val_des':
                    if(custoanterior[des]==-1){
                        custoTotal-=8;
                    }
                    else if(custoanterior[des]==0){
                        custoTotal-=7;
                    }
                    else if(custoanterior[des]==1){
                        custoTotal-=6;
                    }
                    else if(custoanterior[des]==2){
                        custoTotal-=5;
                    }
                    else if(custoanterior[des]==4){
                        custoTotal-=3;
                    }
                    custoanterior[des]=7;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[des]=n1;
                    break; 
                case 'val_con':
                    if(custoanterior[con]==-1){
                        custoTotal-=8;
                    }
                    else if(custoanterior[con]==0){
                        custoTotal-=7;
                    }
                    else if(custoanterior[con]==1){
                        custoTotal-=6;
                    }
                    else if(custoanterior[con]==2){
                        custoTotal-=5;
                    }
                    else if(custoanterior[con]==4){
                        custoTotal-=3;
                    }
                    custoanterior[con]=7;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[con]=n1;
                    break;
                case 'val_int':
                    if(custoanterior[int]==-1){
                        custoTotal-=8;
                    }
                    else if(custoanterior[int]==0){
                        custoTotal-=7;
                    }
                    else if(custoanterior[int]==1){
                        custoTotal-=6;
                    }
                    else if(custoanterior[int]==2){
                        custoTotal-=5;
                    }
                    else if(custoanterior[int]==4){
                        custoTotal-=3;
                    }
                    custoanterior[int]=7;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[int]=n1;
                    break;
                case 'val_sab':
                    if(custoanterior[sab]==-1){
                        custoTotal-=8;
                    }
                    else if(custoanterior[sab]==0){
                        custoTotal-=7;
                    }
                    else if(custoanterior[sab]==1){
                        custoTotal-=6;
                    }
                    else if(custoanterior[sab]==2){
                        custoTotal-=5;
                    }
                    else if(custoanterior[sab]==4){
                        custoTotal-=3;
                    }
                    custoanterior[sab]=7;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[sab]=n1;
                    break;
                case 'val_car':
                    if(custoanterior[car]==-1){
                        custoTotal-=8;
                    }
                    else if(custoanterior[car]==0){
                        custoTotal-=7;
                    }
                    else if(custoanterior[car]==1){
                        custoTotal-=6;
                    }
                    else if(custoanterior[car]==2){
                        custoTotal-=5;
                    }
                    else if(custoanterior[car]==4){
                        custoTotal-=3;
                    }
                    custoanterior[car]=7;
                    window.document.getElementById("custo").innerHTML=custoTotal;
                    ultimovalor[car]=n1;
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
            atualizarBonusdeRaca(valor);
            if(!document.getElementById("label_for")){
                CriarCheckbox(valor);
            }
        break;

        case "anao":
            console.log(ultimaRaca);
            atualizarBonusdeRaca(valor);
        break;

        case "dahllan":
            console.log(ultimaRaca);
            atualizarBonusdeRaca(valor);
        break;

        case "elfo":
            atualizarBonusdeRaca(valor);
         break;

         case "goblin":
            atualizarBonusdeRaca(valor);
         break;

         case "lefou":
            atualizarBonusdeRaca(valor);
            if(!document.getElementById("label_for")){
                CriarCheckbox(valor);
            }
            Penalidade("raca_car");
            ultimoBonusRaca[car]=-1;
         break;

         case "minotauro":
            atualizarBonusdeRaca(valor);
         break;

         case "qareen":
            atualizarBonusdeRaca(valor);
         break;

         case "golem":
            atualizarBonusdeRaca(valor);
         break;

         case "hynne":
            atualizarBonusdeRaca(valor);
         break;

         case "kliren":
            atualizarBonusdeRaca(valor);
         break;

         case "medusa":
            atualizarBonusdeRaca(valor);
         break;

         case "osteon":
            atualizarBonusdeRaca(valor);
            if(!document.getElementById("label_for")){
                CriarCheckbox(valor);
            }
            Penalidade("raca_con");
            ultimoBonusRaca[con]=-1;
         break;

         case "sereia":
            atualizarBonusdeRaca(valor);
            if(!document.getElementById("label_for")){
                CriarCheckbox(valor);
            }
         break;

         case "silfide":
            atualizarBonusdeRaca(valor);
         break;

         case "aggelus":
            atualizarBonusdeRaca(valor);

         break;
         case "sulfure":
            atualizarBonusdeRaca(valor);
         break;

         case "trog":
            atualizarBonusdeRaca(valor);
         break;
    }
}

function atualizarBonusdeRaca(racaSelecionada){
    camposRacas[forca]=document.getElementById("raca_for");
    camposRacas[des]=document.getElementById("raca_des");
    camposRacas[con]=document.getElementById("raca_con");
    camposRacas[int]=document.getElementById("raca_int");
    camposRacas[sab]=document.getElementById("raca_sab");
    camposRacas[car]=document.getElementById("raca_car");
    checkBoxSelecionadas=0;
    if(document.getElementById("label_for")){
        ApagarCheckbox(ultimaRaca);
    }
    ultimaRaca=racaSelecionada;
    for(var i=0;i<6;i++){
        camposRacas[i].value=mapRaca.get(racaSelecionada)[i];
        SomarTotal(camposRacas[i].id);
        ultimoBonusRaca[i]=camposRacas[i].value;
    }
}

function BonusRacaCheckbox(checkbox){
    var c=document.getElementById(checkbox)
    if(c.checked){
        if(checkBoxSelecionadas<=2){
            switch(checkbox){
                case "selet_for":
                    ValorMenor("raca_for");
                    ultimoBonusRaca[forca]=1;
                    checkBoxSelecionadas++;
                break;
                case "selet_des":
                    ValorMenor("raca_des");
                    ultimoBonusRaca[des]=1;
                    checkBoxSelecionadas++;
                break;
                case "selet_con":
                    ValorMenor("raca_con");
                    ultimoBonusRaca[con]=1;
                    checkBoxSelecionadas++;
                break;
                case "selet_int":
                    ValorMenor("raca_int");
                    ultimoBonusRaca[int]=1;
                    checkBoxSelecionadas++;
                break;
                case "selet_sab":
                    ValorMenor("raca_sab");
                    ultimoBonusRaca[sab]=1;
                    checkBoxSelecionadas++;
                break;
                case "selet_car":
                    ValorMenor("raca_car");
                    ultimoBonusRaca[car]=1;
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
                    ultimoBonusRaca[forca]=0;
                    checkBoxSelecionadas--;
                break;
                case "selet_des":
                    ResetarValor("raca_des");
                    ultimoBonusRaca[des]=0;
                    checkBoxSelecionadas--;
                break;
                case "selet_con":
                    ResetarValor("raca_con");
                    ultimoBonusRaca[con]=0;
                    checkBoxSelecionadas--;
                break;
                case "selet_int":
                    ResetarValor("raca_int");
                    ultimoBonusRaca[int]=0;
                    checkBoxSelecionadas--;
                break;
                case "selet_sab":
                    ResetarValor("raca_sab");
                    ultimoBonusRaca[sab]=0;
                    checkBoxSelecionadas--;
                break;
                case "selet_car":
                    ResetarValor("raca_car");
                    ultimoBonusRaca[car]=0;
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
    console.log(valor);
    atributo=document.getElementById(valor);
    console.log(atributo);
    var valorasomar=Number(atributo.value);
    console.log("BATATA")
    console.log(valorasomar);
    if(valor=="val_for"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalor[forca]);
            totalAtributo[forca]=totalAtributo[forca]-ultimovalor[forca];
        }
        else{
            diferenca=ultimovalor[forca]-valorasomar;
            console.log(ultimovalor[forca]);
            if(diferenca<0){
                totalAtributo[forca]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[forca]-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_for").innerHTML=totalAtributo[forca];
        console.log(totalAtributo[forca]);

    } 
    else if(valor=="raca_for"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimoBonusRaca[forca]);
            totalAtributo[forca]=totalAtributo[forca]-ultimoBonusRaca[forca];
        }
        else{
            diferenca=ultimoBonusRaca[forca]-valorasomar;
            console.log(ultimoBonusRaca[forca]);
            if(diferenca<0){
                totalAtributo[forca]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[forca]-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_for").innerHTML=totalAtributo[forca];
        console.log(totalAtributo[forca]);

    }
    else if(valor=="bon_for"){
        console.log("SORVETE");
        if(valorasomar==0){
            console.log("AAAAAAAAAAAAAAAAAAAAAAA");
            console.log(ultimoBonus[forca]);
            totalAtributo[forca]=totalAtributo[forca]-ultimoBonus[forca];
        }
        else{
            diferenca=ultimoBonus[forca]-valorasomar;
            console.log(ultimoBonus[forca]);
            if(diferenca<0){
                totalAtributo[forca]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[forca]-=diferenca;
            }
        }

        ultimoBonus[forca]=valorasomar;
        console.log("vai somar")
        window.document.getElementById("tot_for").innerHTML=totalAtributo[forca];
        console.log(totalAtributo[forca]);

    }
    else if(valor=="val_des"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalor[des]);
            totalAtributo[des]=totalAtributo[des]-ultimovalor[des];
        }
        else{
            diferenca=ultimovalor[des]-valorasomar;
            console.log(ultimovalor[des]);
            if(diferenca<0){
                totalAtributo[des]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[des]-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_des").innerHTML=totalAtributo[des];
        console.log(totalAtributo[des]);

    }
    else if(valor=="raca_des"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimoBonusRaca[des]);
            totalAtributo[des]=totalAtributo[des]-ultimoBonusRaca[des];
        }
        else{
            diferenca=ultimoBonusRaca[des]-valorasomar;
            console.log(ultimoBonusRaca[des]);
            if(diferenca<0){
                totalAtributo[des]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[des]-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_des").innerHTML=totalAtributo[des];
        console.log(totalAtributo[des]);

    }
    else if(valor=="bon_des"){
        console.log("SORVETE");
        if(valorasomar==0){
            console.log("AAAAAAAAAAAAAAAAAAAAAAA");
            console.log(ultimoBonus[des]);
            totalAtributo[des]=totalAtributo[des]-ultimoBonus[des];
        }
        else{
            diferenca=ultimoBonus[des]-valorasomar;
            console.log(ultimoBonus[des]);
            if(diferenca<0){
                totalAtributo[des]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[des]-=diferenca;
            }
        }

        ultimoBonus[des]=valorasomar;
        console.log("vai somar")
        window.document.getElementById("tot_des").innerHTML=totalAtributo[des];
        console.log(totalAtributo[des]);

    }
    else if(valor=="val_con"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalor[con]);
            totalAtributo[con]=totalAtributo[con]-ultimovalor[con];
        }
        else{
            diferenca=ultimovalor[con]-valorasomar;
            console.log(ultimovalor[con]);
            if(diferenca<0){
                totalAtributo[con]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[con]-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_con").innerHTML=totalAtributo[con];
        console.log(totalAtributo[con]);

    }
    else if(valor=="raca_con"){
        if(valorasomar==0){
            console.log("AQUI LEONARDO");
            console.log(ultimoBonusRaca[con]);
            console.log(totalAtributo[con]);
            totalAtributo[con]-=ultimoBonusRaca[con];
            console.log(totalAtributo[con]);
        }
        else{
            diferenca=ultimoBonusRaca[con]-valorasomar;
            console.log(ultimoBonusRaca[con]);
            if(diferenca<0){
                totalAtributo[con]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[con]-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_con").innerHTML=totalAtributo[con];
        console.log(totalAtributo[con]);

    }
    else if(valor=="bon_con"){
        console.log("SORVETE");
        if(valorasomar==0){
            console.log("AAAAAAAAAAAAAAAAAAAAAAA");
            console.log(ultimoBonus[con]);
            totalAtributo[con]=totalAtributo[con]-ultimoBonus[con];
        }
        else{
            diferenca=ultimoBonus[con]-valorasomar;
            console.log(ultimoBonus[con]);
            if(diferenca<0){
                totalAtributo[con]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[con]-=diferenca;
            }
        }

        ultimoBonus[con]=valorasomar;
        console.log("vai somar")
        window.document.getElementById("tot_con").innerHTML=totalAtributo[con];
        console.log(totalAtributo[con]);

    }
    else if(valor=="val_int"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalor[int]);
            totalAtributo[int]=totalAtributo[int]-ultimovalor[int];
        }
        else{
            diferenca=ultimovalor[int]-valorasomar;
            console.log(ultimovalor[int]);
            if(diferenca<0){
                totalAtributo[int]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[int]-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_int").innerHTML=totalAtributo[int];
        console.log(totalAtributo[int]);

    }
    else if(valor=="raca_int"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimoBonusRaca[int]);
            totalAtributo[int]=totalAtributo[int]-ultimoBonusRaca[int];
        }
        else{
            diferenca=ultimoBonusRaca[int]-valorasomar;
            console.log(ultimoBonusRaca[int]);
            if(diferenca<0){
                totalAtributo[int]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[int]-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_int").innerHTML=totalAtributo[int];
        console.log(totalAtributo[int]);

    }
    else if(valor=="bon_int"){
        console.log("SORVETE");
        if(valorasomar==0){
            console.log("AAAAAAAAAAAAAAAAAAAAAAA");
            console.log(ultimoBonus[int]);
            totalAtributo[int]=totalAtributo[int]-ultimoBonus[int];
        }
        else{
            diferenca=ultimoBonus[int]-valorasomar;
            console.log(ultimoBonus[int]);
            if(diferenca<0){
                totalAtributo[int]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[int]-=diferenca;
            }
        }

        ultimoBonus[int]=valorasomar;
        console.log("vai somar")
        window.document.getElementById("tot_int").innerHTML=totalAtributo[int];
        console.log(totalAtributo[int]);

    }
    else if(valor=="val_sab"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalor[sab]);
            totalAtributo[sab]=totalAtributo[sab]-ultimovalor[sab];
        }
        else{
            diferenca=ultimovalor[sab]-valorasomar;
            console.log(ultimovalor[sab]);
            if(diferenca<0){
                totalAtributo[sab]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[sab]-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_sab").innerHTML=totalAtributo[sab];
        console.log(totalAtributo[sab]);
    }
    else if(valor=="raca_sab"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimoBonusRaca[sab]);
            totalAtributo[sab]=totalAtributo[sab]-ultimoBonusRaca[sab];
        }
        else{
            diferenca=ultimoBonusRaca[sab]-valorasomar;
            console.log(ultimoBonusRaca[sab]);
            if(diferenca<0){
                totalAtributo[sab]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[sab]-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_sab").innerHTML=totalAtributo[sab];
        console.log(totalAtributo[sab]);

    }
    else if(valor=="bon_sab"){
        console.log("SORVETE");
        if(valorasomar==0){
            console.log("AAAAAAAAAAAAAAAAAAAAAAA");
            console.log(ultimoBonus[sab]);
            totalAtributo[sab]=totalAtributo[sab]-ultimoBonus[sab];
        }
        else{
            diferenca=ultimoBonus[sab]-valorasomar;
            console.log(ultimoBonus[sab]);
            if(diferenca<0){
                totalAtributo[sab]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[sab]-=diferenca;
            }
        }

        ultimoBonus[sab]=valorasomar;
        console.log("vai somar")
        window.document.getElementById("tot_sab").innerHTML=totalAtributo[sab];
        console.log(totalAtributo[sab]);

    }

    else if(valor=="val_car"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimovalor[car]);
            totalAtributo[car]=totalAtributo[car]-ultimovalor[car];
        }
        else{
            diferenca=ultimovalor[car]-valorasomar;
            console.log(ultimovalor[car]);
            if(diferenca<0){
                totalAtributo[car]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[car]-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_car").innerHTML=totalAtributo[car];
        console.log(totalAtributo[car]);

    }
    else if(valor=="raca_car"){
        if(valorasomar==0){
            console.log("é zero");
            console.log(ultimoBonusRaca[car]);
            totalAtributo[car]=totalAtributo[car]-ultimoBonusRaca[car];
        }
        else{
            diferenca=ultimoBonusRaca[car]-valorasomar;
            console.log(ultimoBonusRaca[car]);
            if(diferenca<0){
                totalAtributo[car]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[car]-=diferenca;
            }
        }

        console.log("vai somar")
        window.document.getElementById("tot_car").innerHTML=totalAtributo[car];
        console.log(totalAtributo[car]);

    }

    else if(valor=="bon_car"){
        console.log("HAMBURGUER");
        if(valorasomar==0){
            console.log("AAAAAAAAAAAAAAAAAAAAAAA");
            console.log(ultimoBonus[car]);
            totalAtributo[car]=totalAtributo[car]-ultimoBonus[car];
        }
        else{
            console.log("BACONNNNN")
            diferenca=ultimoBonus[car]-valorasomar;
            console.log(ultimoBonus[car]);
            if(diferenca<0){
                console.log("MOSTARDAAAAAA")
                totalAtributo[car]+=-diferenca;
            }else if(diferenca>0){
                console.log("MAIONESEEEE")
                totalAtributo[car]-=diferenca;
            }
        }

        ultimoBonus[car]=valorasomar;
        console.log("vai somar")
        window.document.getElementById("tot_car").innerHTML=totalAtributo[car];
        console.log(totalAtributo[car]);
    }
}