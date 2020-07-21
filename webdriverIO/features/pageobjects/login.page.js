const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstname () { return $('//*[@id="first_name"]') }
    get lastname () { return $('//*[@id="last_name"]') }
    get email () { return $('//*[@id="email"]') }
    get password () { return $('//*[@id="password"]') }
    get confirmpassword () { return $('//*[@id="password-confirm"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login () {
        this.firstname.setValue(username);
        this.lastname.setValue(this.lastname);
        this.email.setValue(email);
        this.password.setValue(password);
        this.confirmpassword.setValue(password);
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
