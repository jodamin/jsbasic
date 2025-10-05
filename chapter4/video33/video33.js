//Khai báo biến phạm vi global
let globalVar = "HAHAHA NHIN CC"; //tips: dùng let ở đâu thì phạm vi ở đó

console.log("Global says: ", globalVar);

(() => {
    console.log("Function says: ", globalVar);
})();


//Khai báo biến phạm vi function
(() => {
    let globalVar1 = "HAHAHA NHIN CC";
    console.log("Function says: ", globalVar1);
})();
console.log("Global says: ", globalVar1); //not defined