
const deleteHome = document.getElementsByClassName('remove');
const quantity = document.getElementById('quantity');

//addition Button//
function totalClick(click){
  const totalClick = document.getElementById('quantity');
  const sumValues =parseInt(totalClick.innerText) + click;
  console.log(sumValues + click);

  totalClick.innerText = sumValues;
//how to make the answer not go beyond 0//
  if(sumValues < 0){
    totalClick.innerText = 0 ;
  }
}
if(click===0){
  totalButton.innerText = 0
}
;

//decrement button
function totalButton(click){
  const totalButton = document.getElementById('quantity-1');
  const addValues = parseInt(totalButton.innerText) + click;
  console.log (addValues + click);
  totalButton.innerText = addValues;

//how to make the answer not go beyond 0//
  if(addValues<0){
    totalButton.innerText = 0;
  }
}
if(click===0){
  totalButton.innerText = 0
}

var likeButton = document.getElementById('like-button');

likeButton.addEventListener('click', function() {
  likeButton.classList.toggle('clicked');
});

let btn = document.querySelector('.remove');
btn.onclick =function(){
  btn.classList.toggle('active')
}