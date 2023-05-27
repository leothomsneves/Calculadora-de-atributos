let ultimaRaca="";
let checkBoxSelecionadas=0;
let totalAtributo=[0,0,0,0,0,0];
let custoTotal=10;
let ultimovalor=[0,0,0,0,0,0];
let ultimoBonusRaca=[0,0,0,0,0,0];
let ultimoBonus=[0,0,0,0,0,0];
let custoanterior=[0,0,0,0,0,0];
const forca=0;
const des=1;
const con=2;
const int=3;
const sab=4;
const car=5;
let camposRacas=new Array(6);

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
mapRaca.set('meio-orc',[2,0,0,0,0,0]);
mapRaca.set('orc',[2,0,1,-1,0,0]);
mapRaca.set('tabrachi',[1,0,2,0,0,-1])
mapRaca.set('ogro',[2,0,1,-1,0,-1])


function CalculaCusto(valor,custo){
    let diferencaCusto=0;
    console.log("Entrou");
    let v1=window.document.getElementById(valor);
    let n1=Number(v1.value);
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
function Bonusderaca() {
    let raca = document.getElementById("racas");
    let valor = raca.options[raca.selectedIndex].value;

    switch (valor) {
        case "humano":
            atualizarBonusdeRaca(valor);
            CriarCheckbox(valor);
            break;

        case "anao":
            atualizarBonusdeRaca(valor);
            break;

        case "dahllan":
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
            CriarCheckbox(valor);
            Penalidade("raca_car");
            ultimoBonusRaca[car] = -1;
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
            CriarCheckbox(valor);
            Penalidade("raca_con");
            ultimoBonusRaca[con] = -1;
            break;

        case "sereia":
            atualizarBonusdeRaca(valor);
            CriarCheckbox(valor);
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
        case "meio-orc":
            atualizarBonusdeRaca(valor);
            CriarCheckbox(valor);
            break;
        case "orc":
            atualizarBonusdeRaca(valor);
            break;
        case "tabrachi":
            atualizarBonusdeRaca(valor);
            break;
            case "ogro":
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
    if(document.getElementById("label_for") || document.getElementById("label_des")){
        ApagarCheckbox(ultimaRaca);
    }
    ultimaRaca=racaSelecionada;
    for(let i=0;i<6;i++){
        camposRacas[i].value=mapRaca.get(racaSelecionada)[i];
        SomarTotal(camposRacas[i].id);
        ultimoBonusRaca[i]=camposRacas[i].value;
    }
}

function BonusRacaCheckbox(checkbox){
    let raca=document.getElementById("racas");
    let valor=raca.options[raca.selectedIndex].value;
    let c=document.getElementById(checkbox)
    if(valor!="meio-orc"){
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
    else{
        if(c.checked){
            if(checkBoxSelecionadas<1){
                switch(checkbox){
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
                }
            }
            else{
                c.checked=false;
            }
        }
        else{
            if(checkBoxSelecionadas>=0){
                switch(checkbox){
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
                }
            }
        }
    }

}

function ValorMenor(valor){
    let b1 =document.getElementById(valor);
    b1.value=parseInt(1);
    SomarTotal(valor);
}

function Penalidade(valor){
    let b1 =document.getElementById(valor);
    b1.value=parseInt(-1);
    SomarTotal(valor);
}

function ResetarValor(valor){
    let b1 =document.getElementById(valor);
    b1.value=0;
    SomarTotal(valor);
}

function CriarCheckbox(raca){
    if(raca=="humano"||raca=="sereia"){
        let labels=new Array(6);
        let box=new Array(6);
        for (let i = 0; i < 6; i++) {
            labels[i]=document.createElement("label");
            box[i]=document.createElement("input");
            box[i].setAttribute("type","checkbox");
            
        }   
        labels[forca].setAttribute("id","label_for");
        labels[forca].innerText="For";
        labels[des].setAttribute("id","label_des");
        labels[des].innerText="Des";
        labels[con].setAttribute("id","label_con");
        labels[con].innerText="Con";
        labels[int].setAttribute("id","label_int");
        labels[int].innerText="Int";
        labels[sab].setAttribute("id","label_sab");
        labels[sab].innerText="Sab";
        labels[car].setAttribute("id","label_car");
        labels[car].innerText="Car";
        box[forca].setAttribute("id","selet_for");
        box[forca].setAttribute("onclick","BonusRacaCheckbox('selet_for')")
        box[des].setAttribute("id","selet_des");
        box[des].setAttribute("onclick","BonusRacaCheckbox('selet_des')")
        box[con].setAttribute("id","selet_con");
        box[con].setAttribute("onclick","BonusRacaCheckbox('selet_con')")
        box[int].setAttribute("id","selet_int");
        box[int].setAttribute("onclick","BonusRacaCheckbox('selet_int')")
        box[sab].setAttribute("id","selet_sab");
        box[sab].setAttribute("onclick","BonusRacaCheckbox('selet_sab')")
        box[car].setAttribute("id","selet_car");
        box[car].setAttribute("onclick","BonusRacaCheckbox('selet_car')")
        for(let i=0;i<6;i++){
            document.getElementById("checkracas").appendChild(labels[i]);
            document.getElementById("checkracas").appendChild(box[i]);
        }
    }
    else if(raca=="lefou"){
        let labels=new Array(5);
        let box=new Array(5);
        for (let i = 0; i < 5; i++) {
            labels[i]=document.createElement("label");
            box[i]=document.createElement("input");
            box[i].setAttribute("type","checkbox");
            
        }   
        labels[0].setAttribute("id","label_for");
        labels[0].innerText="For";
        labels[1].setAttribute("id","label_des");
        labels[1].innerText="Des";
        labels[2].setAttribute("id","label_con");
        labels[2].innerText="Con";
        labels[3].setAttribute("id","label_int");
        labels[3].innerText="Int";
        labels[4].setAttribute("id","label_sab");
        labels[4].innerText="Sab";
        box[0].setAttribute("id","selet_for");
        box[0].setAttribute("onclick","BonusRacaCheckbox('selet_for')")
        box[1].setAttribute("id","selet_des");
        box[1].setAttribute("onclick","BonusRacaCheckbox('selet_des')")
        box[2].setAttribute("id","selet_con");
        box[2].setAttribute("onclick","BonusRacaCheckbox('selet_con')")
        box[3].setAttribute("id","selet_int");
        box[3].setAttribute("onclick","BonusRacaCheckbox('selet_int')")
        box[4].setAttribute("id","selet_sab");
        box[4].setAttribute("onclick","BonusRacaCheckbox('selet_sab')")
        for(let i=0;i<5;i++){
            document.getElementById("checkracas").appendChild(labels[i]);
            document.getElementById("checkracas").appendChild(box[i]);
        }
    }
    else if(raca=="osteon"){
        let labels=new Array(5);
        let box=new Array(5);
        for (let i = 0; i < 5; i++) {
            labels[i]=document.createElement("label");
            box[i]=document.createElement("input");
            box[i].setAttribute("type","checkbox");
            
        }   
        labels[0].setAttribute("id","label_for");
        labels[0].innerText="For";
        labels[1].setAttribute("id","label_des");
        labels[1].innerText="Des";
        labels[2].setAttribute("id","label_int");
        labels[2].innerText="Int";
        labels[3].setAttribute("id","label_sab");
        labels[3].innerText="Sab";
        labels[4].setAttribute("id","label_car");
        labels[4].innerText="Car";
        box[0].setAttribute("id","selet_for");
        box[0].setAttribute("onclick","BonusRacaCheckbox('selet_for')")
        box[1].setAttribute("id","selet_des");
        box[1].setAttribute("onclick","BonusRacaCheckbox('selet_des')")
        box[2].setAttribute("id","selet_int");
        box[2].setAttribute("onclick","BonusRacaCheckbox('selet_int')")
        box[3].setAttribute("id","selet_sab");
        box[3].setAttribute("onclick","BonusRacaCheckbox('selet_sab')")
        box[4].setAttribute("id","selet_car");
        box[4].setAttribute("onclick","BonusRacaCheckbox('selet_car')")
        for(let i=0;i<5;i++){
            document.getElementById("checkracas").appendChild(labels[i]);
            document.getElementById("checkracas").appendChild(box[i]);
        }
    }
    else if(raca=="meio-orc"){
        let labels=new Array(4);
        let box=new Array(4);
        for (let i = 0; i < 4; i++) {
            labels[i]=document.createElement("label");
            box[i]=document.createElement("input");
            box[i].setAttribute("type","checkbox");
            
        }   
        labels[0].setAttribute("id","label_des");
        labels[0].innerText="Des";
        labels[1].setAttribute("id","label_con");
        labels[1].innerText="Con";
        labels[2].setAttribute("id","label_int");
        labels[2].innerText="Int";
        labels[3].setAttribute("id","label_sab");
        labels[3].innerText="Sab";
        box[0].setAttribute("id","selet_des");
        box[0].setAttribute("onclick","BonusRacaCheckbox('selet_des')")
        box[1].setAttribute("id","selet_con");
        box[1].setAttribute("onclick","BonusRacaCheckbox('selet_con')")
        box[2].setAttribute("id","selet_int");
        box[2].setAttribute("onclick","BonusRacaCheckbox('selet_int')")
        box[3].setAttribute("id","selet_sab");
        box[3].setAttribute("onclick","BonusRacaCheckbox('selet_sab')")
        for(let i=0;i<4;i++){
            document.getElementById("checkracas").appendChild(labels[i]);
            document.getElementById("checkracas").appendChild(box[i]);
        }
    }
}

function ApagarCheckbox(ultimaRaca){
    if(ultimaRaca=="humano" || ultimaRaca=="sereia")
    {
        let l1=document.getElementById("label_for");
        let c1=document.getElementById("selet_for");
        l1.remove();
        c1.remove();
        let l2=document.getElementById("label_des");
        let c2=document.getElementById("selet_des");
        l2.remove();
        c2.remove();
        let l3=document.getElementById("label_con");
        let c3=document.getElementById("selet_con");
        l3.remove();
        c3.remove();
        let l4=document.getElementById("label_int");
        let c4=document.getElementById("selet_int");
        l4.remove();
        c4.remove();
        let l5=document.getElementById("label_sab");
        let c5=document.getElementById("selet_sab");
        l5.remove();
        c5.remove();
        let l6=document.getElementById("label_car");
        let c6=document.getElementById("selet_car");
        l6.remove();
        c6.remove();
    }
    else if(ultimaRaca=="lefou"){
        let l1=document.getElementById("label_for");
        let c1=document.getElementById("selet_for");
        l1.remove();
        c1.remove();
        let l2=document.getElementById("label_des");
        let c2=document.getElementById("selet_des");
        l2.remove();
        c2.remove();
        let l3=document.getElementById("label_con");
        let c3=document.getElementById("selet_con");
        l3.remove();
        c3.remove();
        let l4=document.getElementById("label_int");
        let c4=document.getElementById("selet_int");
        l4.remove();
        c4.remove();
        let l5=document.getElementById("label_sab");
        let c5=document.getElementById("selet_sab");
        l5.remove();
        c5.remove();
    }
    else if(ultimaRaca=="osteon"){
        let l1=document.getElementById("label_for");
        let c1=document.getElementById("selet_for");
        l1.remove();
        c1.remove();
        let l2=document.getElementById("label_des");
        let c2=document.getElementById("selet_des");
        l2.remove();
        c2.remove();
        let l3=document.getElementById("label_int");
        let c3=document.getElementById("selet_int");
        l3.remove();
        c3.remove();
        let l4=document.getElementById("label_sab");
        let c4=document.getElementById("selet_sab");
        l4.remove();
        c4.remove();
        let l5=document.getElementById("label_car");
        let c5=document.getElementById("selet_car");
        l5.remove();
        c5.remove();
    }
    else if(ultimaRaca=="meio-orc"){
        let l1=document.getElementById("label_des");
        let c1=document.getElementById("selet_des");
        l1.remove();
        c1.remove();
        let l2=document.getElementById("label_con");
        let c2=document.getElementById("selet_con");
        l2.remove();
        c2.remove();
        let l3=document.getElementById("label_int");
        let c3=document.getElementById("selet_int");
        l3.remove();
        c3.remove();
        let l4=document.getElementById("label_sab");
        let c4=document.getElementById("selet_sab");
        l4.remove();
        c4.remove();
    }
}

function SomarTotal(valor){
    let diferenca=0;
    let atributo;
    atributo=document.getElementById(valor);
    let valorasomar=Number(atributo.value);
    if(valor=="val_for"){
        if(valorasomar==0){
            totalAtributo[forca]=totalAtributo[forca]-ultimovalor[forca];
        }
        else{
            diferenca=ultimovalor[forca]-valorasomar;
            if(diferenca<0){
                totalAtributo[forca]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[forca]-=diferenca;
            }
        }
        window.document.getElementById("tot_for").innerHTML=totalAtributo[forca];
    } 

    else if(valor=="raca_for"){
        if(valorasomar==0){
            totalAtributo[forca]=totalAtributo[forca]-ultimoBonusRaca[forca];
        }
        else{
            diferenca=ultimoBonusRaca[forca]-valorasomar;
            if(diferenca<0){
                totalAtributo[forca]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[forca]-=diferenca;
            }
        }
        window.document.getElementById("tot_for").innerHTML=totalAtributo[forca];
    }

    else if(valor=="bon_for"){
        if(valorasomar==0){
            totalAtributo[forca]=totalAtributo[forca]-ultimoBonus[forca];
        }
        else{
            diferenca=ultimoBonus[forca]-valorasomar;
            if(diferenca<0){
                totalAtributo[forca]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[forca]-=diferenca;
            }
        }
        ultimoBonus[forca]=valorasomar;
        window.document.getElementById("tot_for").innerHTML=totalAtributo[forca];
    }

    else if(valor=="val_des"){
        if(valorasomar==0){
            totalAtributo[des]=totalAtributo[des]-ultimovalor[des];
        }
        else{
            diferenca=ultimovalor[des]-valorasomar;
            if(diferenca<0){
                totalAtributo[des]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[des]-=diferenca;
            }
        }
        window.document.getElementById("tot_des").innerHTML=totalAtributo[des];
    }

    else if(valor=="raca_des"){
        if(valorasomar==0){
            totalAtributo[des]=totalAtributo[des]-ultimoBonusRaca[des];
        }
        else{
            diferenca=ultimoBonusRaca[des]-valorasomar;
            if(diferenca<0){
                totalAtributo[des]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[des]-=diferenca;
            }
        }
        window.document.getElementById("tot_des").innerHTML=totalAtributo[des];
    }

    else if(valor=="bon_des"){
        if(valorasomar==0){
            totalAtributo[des]=totalAtributo[des]-ultimoBonus[des];
        }
        else{
            diferenca=ultimoBonus[des]-valorasomar;
            if(diferenca<0){
                totalAtributo[des]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[des]-=diferenca;
            }
        }
        ultimoBonus[des]=valorasomar;
        window.document.getElementById("tot_des").innerHTML=totalAtributo[des];
    }

    else if(valor=="val_con"){
        if(valorasomar==0){
            totalAtributo[con]=totalAtributo[con]-ultimovalor[con];
        }
        else{
            diferenca=ultimovalor[con]-valorasomar;
            if(diferenca<0){
                totalAtributo[con]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[con]-=diferenca;
            }
        }
        window.document.getElementById("tot_con").innerHTML=totalAtributo[con];
    }

    else if(valor=="raca_con"){
        if(valorasomar==0){
            totalAtributo[con]-=ultimoBonusRaca[con];
        }
        else{
            diferenca=ultimoBonusRaca[con]-valorasomar;
            if(diferenca<0){
                totalAtributo[con]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[con]-=diferenca;
            }
        }
        window.document.getElementById("tot_con").innerHTML=totalAtributo[con];
    }

    else if(valor=="bon_con"){
        if(valorasomar==0){
            totalAtributo[con]=totalAtributo[con]-ultimoBonus[con];
        }
        else{
            diferenca=ultimoBonus[con]-valorasomar;
            if(diferenca<0){
                totalAtributo[con]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[con]-=diferenca;
            }
        }
        ultimoBonus[con]=valorasomar;
        window.document.getElementById("tot_con").innerHTML=totalAtributo[con];
    }

    else if(valor=="val_int"){
        if(valorasomar==0){
            totalAtributo[int]=totalAtributo[int]-ultimovalor[int];
        }
        else{
            diferenca=ultimovalor[int]-valorasomar;
            if(diferenca<0){
                totalAtributo[int]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[int]-=diferenca;
            }
        }
        window.document.getElementById("tot_int").innerHTML=totalAtributo[int];
    }

    else if(valor=="raca_int"){
        if(valorasomar==0){
            totalAtributo[int]=totalAtributo[int]-ultimoBonusRaca[int];
        }
        else{
            diferenca=ultimoBonusRaca[int]-valorasomar;
            if(diferenca<0){
                totalAtributo[int]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[int]-=diferenca;
            }
        }
        window.document.getElementById("tot_int").innerHTML=totalAtributo[int];
    }

    else if(valor=="bon_int"){
        if(valorasomar==0){
            totalAtributo[int]=totalAtributo[int]-ultimoBonus[int];
        }
        else{
            diferenca=ultimoBonus[int]-valorasomar;
            if(diferenca<0){
                totalAtributo[int]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[int]-=diferenca;
            }
        }
        ultimoBonus[int]=valorasomar;
        window.document.getElementById("tot_int").innerHTML=totalAtributo[int];
    }

    else if(valor=="val_sab"){
        if(valorasomar==0){
            totalAtributo[sab]=totalAtributo[sab]-ultimovalor[sab];
        }
        else{
            diferenca=ultimovalor[sab]-valorasomar;
            if(diferenca<0){
                totalAtributo[sab]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[sab]-=diferenca;
            }
        }
        window.document.getElementById("tot_sab").innerHTML=totalAtributo[sab];
    }

    else if(valor=="raca_sab"){
        if(valorasomar==0){
            totalAtributo[sab]=totalAtributo[sab]-ultimoBonusRaca[sab];
        }
        else{
            diferenca=ultimoBonusRaca[sab]-valorasomar;
            if(diferenca<0){
                totalAtributo[sab]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[sab]-=diferenca;
            }
        }
        window.document.getElementById("tot_sab").innerHTML=totalAtributo[sab];
    }

    else if(valor=="bon_sab"){
        if(valorasomar==0){
            totalAtributo[sab]=totalAtributo[sab]-ultimoBonus[sab];
        }
        else{
            diferenca=ultimoBonus[sab]-valorasomar;
            if(diferenca<0){
                totalAtributo[sab]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[sab]-=diferenca;
            }
        }
        ultimoBonus[sab]=valorasomar;
        window.document.getElementById("tot_sab").innerHTML=totalAtributo[sab];
    }

    else if(valor=="val_car"){
        if(valorasomar==0){
            totalAtributo[car]=totalAtributo[car]-ultimovalor[car];
        }
        else{
            diferenca=ultimovalor[car]-valorasomar;
            if(diferenca<0){
                totalAtributo[car]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[car]-=diferenca;
            }
        }
        window.document.getElementById("tot_car").innerHTML=totalAtributo[car];
    }
    else if(valor=="raca_car"){
        if(valorasomar==0){
            totalAtributo[car]=totalAtributo[car]-ultimoBonusRaca[car];
        }
        else{
            diferenca=ultimoBonusRaca[car]-valorasomar;
            if(diferenca<0){
                totalAtributo[car]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[car]-=diferenca;
            }
        }
        window.document.getElementById("tot_car").innerHTML=totalAtributo[car];
    }

    else if(valor=="bon_car"){
        
        if(valorasomar==0){
            totalAtributo[car]=totalAtributo[car]-ultimoBonus[car];
        }
        else{
            diferenca=ultimoBonus[car]-valorasomar;
            if(diferenca<0){
                totalAtributo[car]+=-diferenca;
            }else if(diferenca>0){
                totalAtributo[car]-=diferenca;
            }
        }
        ultimoBonus[car]=valorasomar;
        window.document.getElementById("tot_car").innerHTML=totalAtributo[car];
    }
}