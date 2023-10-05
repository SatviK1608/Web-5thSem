var arr=[1,2,3,4,5,6,7,8,1,4,5,3,2];
var temp=[];
for(let i=0;i<arr.length;i++){
    temp[i]=arr[i];
}
console.log("Copy:["+temp+"]");

var sorted=arr;
sorted.sort();
var nodup=[];
for(let i=0;i<sorted.length-1;i++){
    if(arr[i]!=arr[i+1]){
        nodup.push(arr[i]);
    }
}
nodup.push(sorted[sorted.length-1]);
console.log("Removed Duplicates:["+nodup+"]");


arr=[1,2,3,4,5,6,7,8,1,4,5,3,2];
var reverse=arr;
let l=0,h=arr.length-1;
while(l<=h){
    let temp=reverse[l];
    reverse[l]=reverse[h];
    reverse[h]=temp;
    l++;
    h--;
}
console.log("Reverse:["+reverse+"]");



let x=0,pos=2;
for(var i=arr.length-1;i>=pos;i--){
    arr[i+1]=arr[i];
}
arr[pos]=x;
console.log("Inserted 0 at pos=2:["+arr+"]");

for(let i=pos;i<arr.length-1;i++){
    arr[i]=arr[i+1];
}
arr.pop();
console.log("Removed ele at pos=2:["+arr+"]");

let ele=20,posi=4;
for(let i=0;i<pos;i++);
arr[posi]=ele;
console.log("Updated ele at posi=4:["+arr+"]");