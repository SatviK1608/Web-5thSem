var i=document.getElementById("alpha");
document.getElementById("alphaC").onclick=function(){

    var n=i.value;


    let pattern="";
    for(let j=0;j<n;j++){
        for(let k=0;k<n;k++){
            
            pattern+="*";
        }
        pattern+="\n";
    }
    console.log(pattern);

    pattern="";
    for(let j=0;j<n;j++){
        for(let k=0;k<n;k++){
            if(j==0||j==n-1||k==0||k==n-1)
            pattern+="*";
            else
            pattern+=" ";
        }
        pattern+="\n";
    }
    console.log(pattern);

    pattern="";
    for(let j=0;j<n;j++){
        for(let k=0;k<n-j;k++){
            pattern+="*";
        }
        pattern+="\n";
    }
    console.log(pattern);

    pattern="";
    for(let j=0;j<n;j++){
        for(let k=0;k<n-j;k++){
            if(j==0||j==n-1||k==0||k==n-j-1)
            pattern+="*";
            else
            pattern+=" ";
        }
        pattern+="\n";
    }
    console.log(pattern);

    pattern="";
    for(let j=0;j<n;j++){
        for(let k=0;k<n;k++){
            if(k<j)
            pattern+=" ";
            else
            pattern+="*";
        }
        pattern+="\n";
    }
    console.log(pattern);   

    pattern="";
    for(let j=0;j<n;j++){
        for(let k=0;k<n;k++){
            if(j==0||k==j||k==n-1)
            pattern+="*";
            else
            pattern+=" ";
        }
        pattern+="\n";
    }
    console.log(pattern);



    pattern="";
    for(let i=0;i<n;i++){
        for (let j=0; j<n-i; j++){
                // printing spaces
                pattern+=" ";
        }
        for (let j=n-i; j<n; j++){
                // printing spaces
                
                    pattern+="* ";
        }
        pattern+="\n";
    }
    for(let i=0;i<n;i++){
        pattern+="* ";
    }
    pattern+="\n";
    console.log(pattern);



    pattern="";
    for(let i=0;i<n;i++){
        for (let j=0; j<n-i; j++){
                // printing spaces
                pattern+=" ";
        }
        for (let j=n-i; j<n; j++){
                // printing spaces
                    if(j==n-i||j==n-1)
                    pattern+="* ";
                    else 
                    pattern+="  ";
        }
        pattern+="\n";
    }
    for(let i=0;i<n;i++){
        pattern+="* ";
    }
    pattern+="\n";
    console.log(pattern);


    pattern="";
    for(let i=0;i<n;i++){
        
        for (let j=0; j<i; j++){
                // printing spaces
                pattern+=" ";
        }
        for (let j=i; j<n; j++){
            pattern+="* ";
        }
        pattern+="\n";
    }
    console.log(pattern);


    pattern="";
    for(let i=0;i<n;i++){
        
        for (let j=0; j<i; j++){
                // printing spaces
                pattern+=" ";
        }
        for (let j=i; j<n; j++){
            if(i==0)
            pattern+="* ";
            else if(j==i||j==n-1)
            pattern+="* ";
            else
            pattern+="  ";
        }
        pattern+="\n";
    }
    console.log(pattern);



    pattern="";
    for(let i=0;i<n;i++){
        for (let j=0; j<n-i; j++){
                // printing spaces
                pattern+=" ";
        }
        for (let j=n-i; j<n; j++){
                // printing spaces
                
                    pattern+="* ";
        }
        pattern+="\n";
    }
    for(let i=0;i<n;i++){
        pattern+="* ";
    }
    pattern+="\n";
    for(let i=0;i<n;i++){
        
        for (let j=0; j<i; j++){
                // printing spaces
                pattern+=" ";
        }
        for (let j=i; j<n; j++){
            pattern+="* ";
        }
        pattern+="\n";
    }
    console.log(pattern);



    pattern="";
    for(let i=0;i<n;i++){
        for (let j=0; j<n-i; j++){
                // printing spaces
                pattern+=" ";
        }
        for (let j=n-i; j<n; j++){
                // printing spaces
                    if(j==n-i||j==n-1)
                    pattern+="* ";
                    else 
                    pattern+="  ";
        }
        pattern+="\n";
    }
    for(let i=0;i<n;i++){
        pattern+="* ";
    }
    pattern+="\n";
    for(let i=0;i<n;i++){
        
        for (let j=0; j<i; j++){
                // printing spaces
                pattern+=" ";
        }
        for (let j=i; j<n; j++){
            if(i==0)
            pattern+="* ";
            else if(j==i||j==n-1)
            pattern+="* ";
            else
            pattern+="  ";
        }
        pattern+="\n";
    }
    console.log(pattern);





    pattern="";
    for(let i=0;i<n;i++){
        
        for (let j=0; j<i; j++){
                // printing spaces
                pattern+=" ";
        }
        for (let j=i; j<n; j++){
            pattern+="* ";
        }
        if(i!=n-1)
        pattern+="\n";
    }
    for(let i=0;i<n;i++){
        for (let j=0; j<n-i; j++){
                // printing spaces
                pattern+=" ";
        }
        for (let j=n-i; j<n; j++){
                // printing spaces
                
                    pattern+="* ";
        }
        pattern+="\n";
    }
    for(let i=0;i<n;i++){
        pattern+="* ";
    }
    pattern+="\n";
    console.log(pattern);




    pattern="";
    for(let i=0;i<n;i++){
        
        for (let j=0; j<i; j++){
                // printing spaces
                pattern+=" ";
        }
        for (let j=i; j<n; j++){
            if(i==0)
            pattern+="* ";
            else if(j==i||j==n-1)
            pattern+="* ";
            else
            pattern+="  ";
        }
        if(i!=n-1)
        pattern+="\n";
    }
    for(let i=0;i<n;i++){
        for (let j=0; j<n-i; j++){
                // printing spaces
                pattern+=" ";
        }
        for (let j=n-i; j<n; j++){
                // printing spaces
                    if(j==n-i||j==n-1)
                    pattern+="* ";
                    else 
                    pattern+="  ";
        }
        pattern+="\n";
    }
    for(let i=0;i<n;i++){
        pattern+="* ";
    }
    pattern+="\n";
    
    console.log(pattern);





    
}

