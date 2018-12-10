/** 
 * @name User
 * @desc Service de gestion des utilisateurs
 * @author Aélion
 * @version 1.0.0
*/

class User {
    constructor() {}

    /** Définit le username de l'utilisateur
     * @param {*} userName
     */

    setUserName(userName) {
        this.userName = userName;
    }

    /** Définit le mdp utilisateur */
    setPassword(password) {
        this.password = password;
    }

    authentificate() {
        if (this.userName === 'qalexanko' && this.password === 'qal') {
            this.group = 'Administrateur';
            return true;
        }
        return false;
    }

}