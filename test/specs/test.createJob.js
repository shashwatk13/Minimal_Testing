import {LoginPage} from "../pageobjects/login.page.js";
import {CreateJobPage} from "../pageobjects/create.job.page.js";
import {readFileSync} from "fs";

const loginPage = new LoginPage();
const createJobPage = new CreateJobPage();
let createJobDetails = JSON.parse(readFileSync("test/testData/createJobTest.json"));

describe('Create new Job', () => {

    createJobDetails.forEach(({title,content,role,skills,workingSchedule,location,salaryPrice}) => {
        it('should create new job', async () => {
            await loginPage.login("demo@minimals.cc","demo1234");
            await createJobPage.createNewJob(title,content,role,skills,workingSchedule,location,salaryPrice);
        })
    });

})
