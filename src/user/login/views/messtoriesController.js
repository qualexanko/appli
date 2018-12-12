import { userInfo } from "os";
import { User } from './../../user.class';
/**
 * @name StoriesController
 * @desc Controleur pour la gestion du formulaire de login
 * @aythor Aélion
 * @version 1.0.0
 * 
 */

export class StorieController {
    constructor() {
        // Definit la vue pour ce controller
        this.view =  './src/user/login/views/messtories.view.html';
    }
    /** 
     * méthode pour recuperer la vue à afficher 
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

