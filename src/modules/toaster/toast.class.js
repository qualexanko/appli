/**
 * @name Toast
 * @desc Affiche un toast
 * @author Aélion
 * @version 1.0.0
 */

class Toast {
    constructor(params) {
        if (!params.hasOwnProperty('background')) { //si l'attribut backgroud n'existe pas (point d'excalamation pour n'existe pas)

            //parametre de d"finition de la couleur du fond du toast par défaut
            this.backgroundClass = 'danger';
        } else { //sinon le parametre défini dans l'objet params qui est de type json dans login.class.js
            this.backgroundClass = params.background;
        }
        if (!params.hasOwnProperty('duration')) {
            //durée d'affichage du toast (en seconde)
            this.duration = 3;
        } else {
             this.duration = params.duration; 
        }
        if (!params.hasOwnProperty('message')) {
            //contenu du message
            this.message= 'default message';
        } else {
             this.message = params.message; 
        }

    }

    setBackground(cssClass) {
        this.backgroundClass = cssClass;

    }
    setDuration(duration) {
        this.duration = duration;
    }
    toastIt() {
        // crée en mémoire un nouvel element dans le DOM, c'est a dire un <div></div> dans l'index.html
        const toaster = $('<div>');

        // on lui ajoute les classes
        toaster
            .addClass(this.backgroundClass) // revient a fair <div class = "danger"> 
            .addClass('toast') // revient a faire <div class = "danger toast"> 
            // Ajouter du contenu entre les balises div :
            .html(this.message);

        //ajoute le toaster au document lui-meme
        toaster.appendTo($('body'));

        // Affiche pendant un certain temps
        setTimeout(
            function () {
                //ici, quand on arrive au bout de l'intervalle de temps
                toaster.remove();
            },
            this.duration = 1000
        );

    }
}

