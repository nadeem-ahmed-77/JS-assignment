// var elm = document.getElementById("imgTag")
// var links = ["02.jpg","03.PNG"]
// var count = 0
// function fun(value){
//     if(count>1){
//         count = 0
//     }
//     elm.setAttribute("src", links[count]);
//     if(value === '+'){
//         count++;
//         return;
//     }
//     count--;
// }
// setInterval(fun, 2000)


function getValues(username,sid, ...data ){ //rest parameter
    console.log(username)
    console.log(sid)
    console.log(data)

}

getValues(3,5,7,8,10)
getValues([6,5,7,8,10,12,"hello"],5)

getValues('ali', '1234', [1,3,4,6], true, 1000)