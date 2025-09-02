// cette variable va contenir le mot o la phrase créé par l'utilisateur
let motUtilisateur;

// Cette variable va contenir le score de l'utilisateur, il commence à zero
let score = 0;

// Tant que l'utilisateur n'a pas choisis "mots" ou "phrases", on lui redemande
let choix = prompt('voulez-vous jouer avec des mots (entrez "mots") ou les phrases (entrez "phrases")?')
while (choix !== 'mots' && choix !=='phrases') {
    choix = prompt('Vous devez choisir entre "mots" et "phrases" !')
}

// Si l'utilisateur a choisi "mots", on lui de mande de taper les mots de la liste
if (choix == 'mots') {
    for (let i = 0; i < listeMots.length; i++) {
        motUtilisateur = prompt('Entrez le mot :' + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            score++
        }
    }
    // Si l'utilisateur a choisi "phrases", on lui demande de taper les phrases de la liste
} else {
    for (let i = 0; i < listePhrases.length; i++) {
        motUtilisateur = prompt('Entrez la phrase :' + listePhrases[i])
        if (motUtilisateur === listePhrases[i]) {
            score++
        }
    }
}

// On affiche le score de l'utilisateur
console.log('Votre score est de ' + score + ' sur ' + listeMots.length)

