var today = new Date()
if(today.getDay() < 24){
    document.write("Please check your own day")//write st on your own page
}

var newArr = new Array('Tao', 'Buoi', 'Ngo') //make a new array
var show = document.getElementById('text')
//make a new var access the id that attach before
show.innerHTML  = newArr[0]//access to the first item in array

var arr1 = []
arr1[0] = "Xin chao Viet Nam"
//can add, remove or replace the value of the array
document.write(arr1)

var show1 = document.getElementById("text1")
function App(x, y)  {  
    return x * y;
}
show1.innerHTML = "Tich cua so nay la " + App(4, 2);

const x = 2;
var y = convert(x)
document.write(y)