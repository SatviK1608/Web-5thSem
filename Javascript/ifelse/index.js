var i=document.getElementById("alpha");
var pass=[],fail=[];
document.getElementById("alphaC").onclick=function(){
    // if(i.value=="a"||i.value=="e"||i.value=="i"||i.value=="o"||i.value=="u"){
    //     console.log("vowel");
    // }
    // else{
    //     console.log("consonant");
    // }

    // if(i.value%2==0){
    //     console.log("even");
    // }
    // else{
    //     console.log("odd");
    // }
    
    if(i.value>=33&&i.value<=100){
        pass.push(i.value);
    }
    else{
        fail.push(i.value);
    }



 
}

document.getElementById("show").onclick=function(){
    var temp=pass;
    temp.sort();
    console.log("1st "+temp[temp.length-1]);
    console.log("2nd "+temp[temp.length-2]);
    console.log("3rd "+temp[temp.length-3]);
    console.log("Pass "+pass);
    console.log("Fail "+fail);
}    