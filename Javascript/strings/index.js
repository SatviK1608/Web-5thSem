let str="hello";
let s=str[0];
s=s.toUpperCase();
str=s+str.slice(1,str.length)
console.log(str);

let temp="";
let h=str.length-1;
while(h>=0){
    temp+=str[h];
    h--;
}
console.log(temp);

let ch=str.split("");
ch[0]='A';
str=ch.join("");
console.log(str);

let a="1",b="2";
console.log(parseInt(a)+parseInt(b));


let pal="1234321";
let chararr=pal.split("");
chararr=chararr.reverse();
let rev=chararr.join("");
if(pal==rev)
console.log("is Palindrome")


let s2="HeLl0";
let chararr2=s2.split("");
for(let i=0;i<chararr2.length;i++){
    if(chararr2[i]>='a'&&chararr2[i]<='z')
        chararr2[i]=chararr2[i].toUpperCase();
    else if(chararr2[i]>='A'&&chararr2[i]<='Z')
        chararr2[i]=chararr2[i].toLowerCase();
}
s2=chararr2.join("");
console.log(s2);