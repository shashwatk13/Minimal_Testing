import {LoginPage} from "../pageobjects/login.page.js";
import {CreateJobPage} from "../pageobjects/create.job.page.js";
import {readFileSync} from "fs";

const loginPage = new LoginPage();
const createJobPage = new CreateJobPage();
let loginCredentials = JSON.parse(readFileSync("test/testData/LoginTest.json"));
let invalidCredentials = JSON.parse(readFileSync("test/testData/IndvaidLoginTest.json"));
let createJobDetails = JSON.parse(readFileSync("test/testData/createJobTest.json"));

describe('Create new Job', () => {

    loginCredentials.forEach(({username,password}) => {
        xit('should login with valid credentials', async () => {
            await loginPage.login(username,password);
            await loginPage.verify_application_home_Page();
        })
    });

    createJobDetails.forEach(({title,content,role,skills,workingSchedule,location,salaryPrice}) => {
        it('should create new job', async () => {
            await loginPage.login("demo@minimals.cc","demo1234");
            await createJobPage.createNewJob(title,content,role,skills,workingSchedule,location,salaryPrice);
        })
    });
    
    invalidCredentials.forEach(({username,password})=>{
    xit('should throw an error with invalid credentials',async() => {
        await loginPage.invalidLogin(username,password);
        await loginPage.verify_Invalid_Credentials_Error();
    })
});

})

