let text1 = 'Uwielbiam JavaScript';
let text2 = 'Jestem świetnym programistą';
let t1 = text1.length;
let t2 = text2.length;
function dlugosc(a, b)
{
    if(a>b)
    {
       return 0; 
    }
    else return 1;
}
if(dlugosc(t1, t2)>0)
{
    console.log('Ten string jest najdłuższy: ', text2);
}
else console.log('Ten string jest najdłuższy: ', text1);
