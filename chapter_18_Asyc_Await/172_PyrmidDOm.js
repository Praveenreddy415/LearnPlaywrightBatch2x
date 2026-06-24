async function runTheE2E() {

    let msg1 = await openBrowser();
    console.log("Step 1: " + msg1);
    let msg2 = await openNewTab();
    console.log("Step 2: " + msg2);
    let msg4 = await goTologin();
    console.log("Step 4: " + msg4);
    let msg5 = await enterUserName("Praveen");
    console.log("Step 5: " + msg5);
    let msg6 = await enterPassword("Praveen@123");
    console.log("Step 6: " + msg6);
    let msg7 = await clickLogin();
    console.log("Step 7: " + msg7);
    let msg8 = await verifyLoginSuccess();
    console.log("Step 8: " + msg8);


}

runTheE2E();

