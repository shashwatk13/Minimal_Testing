import { assert } from "chai";

export class LoginPage{
   
    get inputUsername () {return $('//input[@name="email"]');}

    get inputPassword () {return $('//input[@name="password"]');}

    get btnSubmit () {return $('//button[@type="submit"]');}

    get invalidCredentialsError(){return $("//div[text()='Incorrect username or password.']");}

    get welcomeText(){return $("//h3[contains(text(),'Welcome')]");}

    get muiAvatarTab(){
        return $("//div[@class='MuiStack-root css-1jkfhk6']/button[4]");
    }

    get logoutButton(){
        return $("//li[text()='Logout']");
    }

    async login (username, password) {
        await this.verify_login_Page();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async invalidLogin(username, password) {
        await this.verify_login_Page();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async waitForElementDisplayed(element,timeToWait){
        browser.waitUntil(() => {
            return element.isDisplayed();
        }, {
            timeout: timeToWait,
            timeoutMsg: 'Element is not displayed after 10 seconds' 
        });
    }

    async verify_application_home_Page(){
        await this.waitForElementDisplayed(this.muiAvatarTab,5000);
        await this.muiAvatarTab.click();

        if((await this.logoutButton).isDisplayed()){
            console.log("=========Login successfully=========");
        }else{
            assert.fail("User is not able to logged in successfully");
        }
       
    }

    async verify_login_Page(){
        if(await this.welcomeText.getText()==="Hi, Welcome back"){
            console.log("Application login page loaded successfully");
        }else{
            assert.fail("Something went wrong..Unable to load login page");
        }
    }

    async verify_Invalid_Credentials_Error(){
        const expectedInvalidErrorMessage = "Incorrect username or password.";
        assert.equal(expectedInvalidErrorMessage,(await this.invalidCredentialsError.getText()),"Invalid credentials");
    }

}
