import {LoginPage} from "../pageobjects/login.page.js";
import {readFileSync} from "fs";

const loginPage = new LoginPage();
let loginCredentials = JSON.parse(readFileSync("test/testData/LoginTest.json"));
let invalidCredentials = JSON.parse(readFileSync("test/testData/IndvaidLoginTest.json"));

describe('Login Functionality', () => {

    invalidCredentials.forEach(({username,password})=>{
        it('should throw an error with invalid credentials',async() => {
            await loginPage.invalidLogin(username,password);
            await loginPage.verify_Invalid_Credentials_Error();
        })
    });

    loginCredentials.forEach(({username,password}) => {
        it('should login with valid credentials', async () => {
            await loginPage.login(username,password);
            await loginPage.verify_application_home_Page();
        })
    });

})

