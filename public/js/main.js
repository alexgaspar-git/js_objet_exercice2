// # Exo 1
// Créer un exercice ou une personne rentre dans un magasin avec une somme d'argent et a la fin il faut soustraire l'argent depensé
// ex: je rentre dans un magasin, j'ai 30€, j'achete un chocolat qui coute 2€, et une tartine qui coute 3,50€.
// Au final, j'ai 24,50€ 

let personne = {
    argent: 30,
}

let magasin = {
    chocolat: 2,
    tartine: 3.50,
    vendre(a) {
        let acheter = prompt('quel element veux-tu?');
        for (const key in this) {
            console.log(key);
            if (key == acheter) {
                console.log(key);
                console.log(magasin[key])
                a.argent -= magasin[key]
            }
        }
    }
}

magasin.vendre(personne);
console.log(magasin);
console.log(personne);


// # Exo 2
// - Créer un objet "vieille_dame" avec une propriété "age" assez élevée une propriété "nom" contnant un "prenom" et un "nom de famille", une dernière propriété "moral" avec comme valeur "mal"
// - une propriété "objet" par exemple une canne 
// - une method se_plaindre qui selon son moral fait une alert différente, si son moral = mal alors elle dira "Vous me dérangez", si son moral = bien alors elle dira bonjour monsieur + le nom du vieil_homme

let vieille_dame = {
    age: 1000,
    nom: {
        prenom: "mamie",
        nom_de_famille: "janette",
    },
    moral: "mal",
    objet: "canne",
    se_plaindre() {
        if (this.moral === "mal") {
            alert('Vous me dérangez');
        } else if (this.moral === "bien") {
            alert(`Bonjour monsieur ${vieil_homme.nom}`);
        }
    },
    se_promener() {
        this.objet = "perdu";
    },
}

let vieil_homme = {
    nom: "gilbert",
    age: 6,
    saluer() {
        console.log(`Bonjour ${vieille_dame.nom}`);
        vieille_dame.se_plaindre();
    },
    adoucir(a) {
        a.moral = "bien"
    }
}
vieil_homme.adoucir(vieille_dame);
vieil_homme.saluer();

// # Exo 2 B
// - Rajouter une method "se_promener" à la vieille_dame, qui change la valeur de l'objet à perdu 

// # Exo 3
// - Rajouter a vieil_homme une propriété "age","prenom" et une method saluer qui dira bonjour "le prenom de la vieille_dame + son nom de famille" et juste après lancera la fonction se_plaindre de la vieille dame 
// - Rajoutez égalment une method adoucir, cette method changera le moral de la vieille_dame en "bien" -->

console.dir(window);

const titre = document.querySelectorAll("h1")[0]
console.log(titre);
console.dir(titre);
titre.addEventListener("click", () => {
    console.log(document.scrollingElement);
});
