class BaseTest{
    setup(){
        console.log("BaseTest setup");
    }
    tearDown(){
        console.log("BaseTest tearDown");
    }
}

class UITest extends BaseTest{
    setup(){
        super.setup();
        console.log("UITest setup");
    }
    tearDown(){
        super.tearDown();
        console.log("UITest tearDown");
    }
}
let uiTest = new UITest();
uiTest.setup();
uiTest.tearDown();