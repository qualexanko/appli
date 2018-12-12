/**
 * @name main.js
 * @desc Point d'entrée principal dans l'application Javascript
 */
import { Login } from './../../src/user/login.class';
import { LoginController } from './../../src/user/login/views/loginController.class';
import { StorieController } from '../../src/user/login/views/messtoriesController';
import { UserService } from './../../src/services/user-service.class'





//verson 1.0.1 passage par controleur
//const controller = new LoginController();
 //onst controller = new StorieController();
//controller.getView();


const authGuard = new UserService();
if(!authGuard.hasUser()) {
    const controller = new LoginController();
    controller.getView();
    const login = new Login();
} else {

const controller = new StorieController();
controller.getView();
}
// Créer une instance de Login
const login = new Login();

//const controllers = new StorieController();
//controllers.getView();