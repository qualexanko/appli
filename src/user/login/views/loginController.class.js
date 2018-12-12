/**
 * @name LoginController
 * @desc Controleur pour la gestion du formulaire de login
 * @aythor Aélion
 * @version 1.0.0
 * 
 */

export class LoginController {
    constructor() {
        // Definit la vue pour ce controller
        this.view = './src/user/login/views/loginform.view.html';
    }
    /** 
     * méthode pour recuperer la vur à afficher 
    */
    getView() {
        const app = $('[app]')

        $.get(
            this.view,
            function (viewContent) {
                app.empty();
                app.html(viewContent);

            }
        );
    }
}

