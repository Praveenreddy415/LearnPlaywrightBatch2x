//used in flaky test trial 
let retry = 0;
do {
    console.log("execute the code");
    console.log("Retry: " + retry);
    retry++;
} while (retry < 5);

