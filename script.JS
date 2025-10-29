var original  = document.getElementById("original")
var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var img4 = document.getElementById("img4")
var img5 = document.getElementById("img5")
var box = document.getElementById("box")
var box2 = document.getElementById("box2")
var box3 = document.getElementById("box3")
var box4 = document.getElementById("box4")
var box5 = document.getElementById("box5")



box.addEventListener('dragover' , (e)=> e.preventDefault())

box.addEventListener('drop' , () =>{
  box.appendChild(img1)
})


box2.addEventListener('dragover' , (e)=> e.preventDefault())

box2.addEventListener('drop' , () =>{
  box2.appendChild(img2)
})

box3.addEventListener('dragover' , (e)=> e.preventDefault())

box3.addEventListener('drop' , () =>{
  box3.appendChild(img3)
})

box4.addEventListener('dragover' , (e)=> e.preventDefault())

box4.addEventListener('drop' , () =>{
  box4.appendChild(img4)
})

box5.addEventListener('dragover' , (e)=> e.preventDefault())

box5.addEventListener('drop' , () =>{
  box5.appendChild(img5)
})
