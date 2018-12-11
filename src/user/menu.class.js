class Menu {

    constructor (User) {
       this.connect = User.userName; 
    this.setConnect();
    
    }

      
  
    setConnect(){
    const navbar = $('#navbarDropdown');
    navbar.html(this.connect);
}
}

