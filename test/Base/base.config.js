
export class base{

    async waitForElementDisplayed(element,timeToWait){
        browser.waitUntil(() => {
            return element;
        }, {
            timeout: timeToWait,
            timeoutMsg: 'Element is not displayed after 10 seconds' 
        });
    }

}