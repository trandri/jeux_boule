const btnRed = document.getElementById('btn-red');
//console.log(btnRed,"Bouton rouge");
const btnBlue = document.getElementById('btn-blue');
//console.log(btnBlue);
let compteur = 0;
console.log(compteur, "compteur au démarrage");

let isActive = true;

btnRed.addEventListener('click', function(){
    if(isActive){
        add()
    }
})

btnBlue.addEventListener('click', function(){
    if(isActive){
        add();
    }
})

function add(){
    compteur = compteur + 1;
    console.log(compteur,"compteur après incrémentation");
    document.getElementById('score').innerHTML = "Nombre de clics : " + compteur;
}

setTimeout(function(){
    isActive = false
    document.getElementById('chrono').innerHTML = 'fin du chrono'
    btnRed.classList.add('paused');
    btnBlue.classList.add('paused');
},10000);

