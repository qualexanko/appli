class Login {
    constructor() {
        // Modifier le titre du document HTML
        $(document).attr('title', 'Identification');

        // Modifier le titre de la page
        $('#main-title').html('Identifiez-vous');


        // déinition du listener sur le formulaire
        this.formListener();
        this.submitListener();
    }


    /** 
     * formListener Gestionnaire d'évenement sur le formulaire de login
     * @param void
     * @return void
     *
    */

    formListener() {
        $('#loginForm').on(
            'keyup',
            // callback : fonction appelée si l'évenement défini survient
            function (event) {
                // verifier le contenu des deux champs
                const login = $('[name="loginField"]');
                const password = $('[name="passwordField"]');

                if (login.val().length > 4 && password.val() !== '') {
                    // on active le bouton
                    $('#btnLogin').removeAttr('disabled');
                } else {
                    $('#btnLogin').attr('disabled', 'disabled');
                }

                console.log('Login : ' + login.val() + password.val());

            }
        );
    }


    submitListener() {

        $('#loginForm').on(
            'submit',
            function (event) {
                event.preventDefault(); // empeche l'action par défaut

                const login = $('[name="loginField"]');
                const password = $('[name="passwordField"]');

                const user = new User;

                console.log('Le formulaire est validé !');

                user.setUserName(login.val());
                user.setPassword(password.val());

                if (user.authentificate()) {
                    console.log('ok c est bon');
                } else {
                    console.log('cest pas bon');
                    login.val('');
                    password.val('');

                    $('#btnLogin').attr('disabled', 'disabled');

                    const toast = new Toast(
                        {
                        'message': 'nom d utilisateur ou mdp incorrect',
                        'duration' : 2
                        }
                    );
                    toast.toastIt();
                }
            }
        );
    }
}