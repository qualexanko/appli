




export class UserService {
    constructor() {}

    hasUser() {
        const user = JSON.parse(localStorage.getItem('storiesUser'));
        if (user){
            return true;
               } return false;
    }
}