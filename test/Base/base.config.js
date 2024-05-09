
export class base{

    async inputValueInTextBox(element,value){
        
    }

    async clickOnElement(element){

        await
    }

    async waitForElementDisplayed(element,timeToWait){
        browser.waitUntil(() => {
            return element;
        }, {
            timeout: timeToWait,
            timeoutMsg: 'Element is not displayed after 10 seconds' 
        });
    }

}