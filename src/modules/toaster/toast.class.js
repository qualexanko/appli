/**
 * @name Toast
 * @desc Affiche un toast
 * @author Aélion
 * @version 1.0.0
 */

class Toast {
    constructor(params) {
        if (!params.hasOwnProperty('background')) {

            //parametre de d"finition de la couleur du fond du toast
            this.backgroundClass = 'danger';
        } else {
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
        // crée en mémoire un nouvel element dans le DOM
        const toaster = $('<div>');

        // on lui ajoute les classes
        toaster
            .addClass(this.backgroundClass)
            .addClass('toast')
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

