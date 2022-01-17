const arr = [1,100,20,300,1000,500];
let total = 0;

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    total+=arr[i];
}
console.log(total);