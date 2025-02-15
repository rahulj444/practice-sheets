var arr=[];
function f1(){
    var element=document.getElementById("txt");
    var str=element.value;
    //add to the array
    if(str.trim().length!= 0)
            arr.push(str);
    var span=document.getElementById('span');
    span.textContent=`${arr.length} words found`;
}

function f2(){
    //var element=document.getElementsByTagName("p")[0];
    var element=document.querySelector('p');
    element.style.fontSize='35px';
    element.style.color='green';
    element.style.fontStyle='italic';
    element.style.fontFamily='Arial';
}
 