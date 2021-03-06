// _-_-_-_-_-_-_-_BASE DE DONNE_-_-_-_-_-_-_-_-
//Chaud
var chaud1 = {
    "nom": "Chaud 1",
    "categorie": "chaud",
    "prix": "10.90"
};
var chaud2 = {
    "nom": "Chaud 2",
    "categorie": "chaud",
    "prix": "10.90"
};
var chaud3 = {
    "nom": "Chaud 3",
    "categorie": "chaud",
    "prix": "10.90"
};

//Froid
var froid1 = {
    "nom": "Froid 1",
    "categorie": "froid",
    "prix": "11.60"
};
var froid2 = {
    "nom": "Froid 2",
    "categorie": "froid",
    "prix": "11.60"
};
var froid3 = {
    "nom": "Froid 3",
    "categorie": "froid",
    "prix": "11.60"
};

//Standard
var standard1 = {
    "nom": "Standard 1",
    "categorie": "standard",
    "prix": "21.60"
};
var standard2 = {
    "nom": "Standard 2",
    "categorie": "standard",
    "prix": "21.60"
};
var standard3 = {
    "nom": "Standard 3",
    "categorie": "standard",
    "prix": "21.60"
};

//Accessoires
var accessoire1 = {
    "nom": "Accessoire 1",
    "categorie": "Accessoires",
    "prix": "15.90"
};
var accessoire2 = {
    "nom": "Accessoire 2",
    "categorie": "Accessoires",
    "prix": "15.90"
};
var accessoire3 = {
    "nom": "Accessoire 3",
    "categorie": "Accessoires",
    "prix": "15.90"
};

var produit = [
    //Chaud 0
    [chaud1, chaud2, chaud3],
    //Froid 1
    [froid1, froid2, froid3],
    //Standard 2    
    [standard1, standard2, standard3],
    //Accessoire 3
    [accessoire1, accessoire2, accessoire3]
];

// Fonction qui va chercher tous les produit avec comme entrer "produit[x]"
function searchProduct(a) {
    for (var i = 0; i < produit[a].length; i++) {
        var nom = produit[a][i].nom;
        var categorie = produit[a][i].categorie;
        var prix = produit[a][i].prix;
        addHtmlProduct(nom, prix, a, i);

    }
};

/* Fonction qui créé et implante du code html avec les valeurs de la fonction ci-dessus 
! ATTENTION ! Cette fonction devra être appeler dans la boucle for de searchProdudct()*/
function addHtmlProduct(nom, prix, x, y) {
    var parent = document.querySelector("#shop_container");
    parent.insertAdjacentHTML('beforeend', '<div id="" class="shop_grid_produit"><img src="https://picsum.photos/200" class="shop_grid_produit_img" alt=""><h2 class="shop_grid_produit_nom">' + nom + '</h2><h2 class="shop_grid_produit_prix">' + prix + ' €</h2><div class="shop_grid_produit_btn_grp"><a class="shop_grid_produit_detail" href="fiche_produit.html">Détails</a></div></div>');
};

// Fonction qui supprime du html par class
function removeElementsByClass(classname) {
    var elements = document.getElementsByClassName(classname.toString());
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// AddEventlistener qui appel les deux fonctions ci-dessus 
searchProduct(0);


var chaud = document.querySelector('#shop_btn_chaud');
var froid = document.querySelector('#shop_btn_froid');
var standard = document.querySelector('#shop_btn_standard');
var access = document.querySelector('#shop_btn_access');

function buttonColor(a){

    var list = [chaud, froid, standard, access];

    for(var i = 0; i < list.length; i++){
        list[i].classList.remove("shop_nav_btn_click");
        list[i].classList.remove("shop_nav_btn");
        list[i].classList.add("shop_nav_btn");
    }
    a.classList.remove("shop_nav_btn");
    a.classList.add("shop_nav_btn_click");
}
// Ajout de produit
chaud.addEventListener("click", function (e) {
    buttonColor(chaud);
    removeElementsByClass("shop_grid_produit");
    searchProduct(0);

});

froid.addEventListener("click", function (e) {
    buttonColor(froid);
    removeElementsByClass("shop_grid_produit");
    searchProduct(1);
});

standard.addEventListener("click", function (e) {
    buttonColor(standard);
    removeElementsByClass("shop_grid_produit");
    searchProduct(2);
});

access.addEventListener("click", function (e) {
    buttonColor(access);
    removeElementsByClass("shop_grid_produit");
    searchProduct(3);
});

// _-_-_-_-_-_-_-_SIDEBAR PANIER_-_-_-_-_-_-_-_-

var panierProduct = [];

// prend en entrer les valeurs multi dimensionnel
function addPanier(a,b){
    panierProduct.push(produit[a][b])
    console.log(panierProduct);
    var nom = produit[a][b].nom;
    var prix = produit[a][b].prix;
    var parent = document.querySelector("#sidebar_title");
    parent.insertAdjacentHTML('afterend','<div class="sidebar_element '+ a + b +'" id="'+ a + b +'"><h1 class="sidebar_element_title">'+ nom +'</h1><div class="container_sidebar_prix"><p class="sidebar_element_prix">'+ prix +'€</p><button onclick="removeElementsByClass('+ a + b +')">X</button></div></div>');
};

