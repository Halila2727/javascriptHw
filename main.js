//1. LOOPING A TRIANGLE
let n = 7;
let str = "";
for(let i=0; i<7; i++)
{
    str += "#";
    console.log(str);
}

console.log();
//2. FizzBuzz
for(let j=1; j<=100; j++)
{
    if(j%3==0 && j%5==0)
    {
        console.log("FizzBuzz");
    }
    else if(j%3==0)
    {
        console.log("Fizz");
    }
    else if(j%5==0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(j);
    }
}

//3. CHESSBOARD
let bindingSize = 8;
let strOut = "";
for(let i=0; i<bindingSize; i++)
{
    for(let j=0; j<bindingSize; j++)
    {
        if(i%2==0)
        {
            if(j%2==0) strOut += " ";
            else strOut += "#";
        }
        else
        {
            if(j%2==0) strOut += "#";
            else strOut += " ";
        }
    }
    if(i != bindingSize - 1) strOut += "\n";
}
console.log(strOut);