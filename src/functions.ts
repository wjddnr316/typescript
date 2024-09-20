function add (n1: number, n2: number): number {
    return n1 + n2;
}

function printResultResum (num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb (result);
}


let combineValue: (a: number, b: number) => number;

printResultResum(add(5, 12));

combineValue = add;
// combineValue = printResultResum;
// combineValue = 5;

console.log(combineValue(8, 8));  
// let someValue = undefined;

addAndHandle (10, 20, (result) => {
    console.log (result);
})

function sendRequest(data: string, cb: (response: any) => void) {
    return cb('Hi there');
}
   
sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
});