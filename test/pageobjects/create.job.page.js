import { Key } from 'webdriverio';

export class CreateJobPage{

    get jobTab(){
        return $("//span[text()='job']");
    }

    get createJobTab(){
        return $("//span[text()='create']");
    }

    get createANewJobText(){
        return $("//h4[text()='Create a new job']");
    }

    get inputTitle(){
        return $("//input[@name='title']");
    }

    get inputContent(){
        return $("//div[@data-placeholder='Write something awesome...']");
    }

    get employmentType(){
        return $("//span[text()='Full-time']/../span");
    }

    get experience(){
        return $("//span[text()='> 3 year exp']/../span[1]");
    }

    get role(){
        return $("#autocomplete-role");
    }

    get buttonClearRoleText(){
        return $("//button[@title='Clear']");
    }

    get skills(){
        return $("#autocomplete-skills");
    }

    get workingSchedule(){
        return $("#autocomplete-workingSchedule");
    }

    get locations(){
        return $("#autocomplete-locations");
    }

    get expiryDate(){
        return $("//button[contains(@aria-label,'Choose date')]");
    }

    get buttonNextMonth(){
        return $("//button[@title='Next month']");
    }

    get dateCalender(){
        return $("//div[@aria-rowindex='4']/button[@aria-colindex='2']");
    }

    get salary(){
        return $("//button[text()='Hourly']");
    }

    get salaryPrice(){
        return $("//input[@name='salary.price']");
    }

    get salaryNegotiable(){
        return $("//input[@name='salary.negotiable']");
    }

    get salaryPrice(){
        return $("//input[@name='salary.price']");
    }

    get benefits(){
        return $("//span[text()='Travel']");
    }

    get buttonCreateJob(){
        return $("//button[@type='submit']");
    }

    async createNewJob(title,content,role,skills,workingSchedule,location,salaryPrice){
        await this.goToCreateJobPage();
        await this.verify_create_New_Job_Page();
        (await this.inputTitle).setValue(title);
        (await this.inputContent).setValue(content);
        (await this.employmentType).click();
        (await this.experience).click();
        (await this.buttonClearRoleText).moveTo();
        (await this.buttonClearRoleText).click();
        (await this.role).setValue(role);
        await browser.keys(Key.ArrowDown);
        await browser.keys(Key.Enter);
        (await this.skills).setValue(skills);
        await browser.keys(Key.ArrowDown);
        await browser.keys(Key.Enter);
        (await this.workingSchedule).setValue(workingSchedule);
        await browser.keys(Key.ArrowDown);
        await browser.keys(Key.Enter);
        (await this.locations).setValue(location);
        await browser.keys(Key.ArrowDown);
        await browser.keys(Key.Enter);
        (await this.expiryDate).click();
       
        for(var i=0; i<=2; i++)
            {
                if(i===2)
                (await this.buttonNextMonth).click();
            }
        
        (await this.dateCalender).click();

        (await this.salary).click();
        (await this.salaryPrice).setValue(salaryPrice);
        (await this.salaryNegotiable).click();
        (await this.benefits).click();
        (await this.buttonCreateJob).click();
    }

    async goToCreateJobPage(){
        (await this.jobTab).scrollIntoView();
        await this.jobTab.click();
        await this.waitForElementDisplayed(this.createJobTab,5000);
        await this.createJobTab.click();
    }

    async verify_create_New_Job_Page(){
        if((await this.createANewJobText).isDisplayed()){
            console.log("On create job page");
        }else{
            assert.fail("Something went wrong..Unable to load create job page");
        }
    }

    async waitForElementDisplayed(element,timeToWait){
        browser.waitUntil(() => {
            return element.isDisplayed();
        }, {
            timeout: timeToWait,
            timeoutMsg: 'Element is not displayed after 10 seconds' 
        });
    }

}