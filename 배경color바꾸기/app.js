const colors = ["green",'red','rgba(133,122,200)',"#f15025"]
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  // get random number between 0-3 (초-빨-?-?)

  const randomNumber = getRandomNumber();
  console.log(randomNumber)
  document.body.style.backgroundColor = colors[randomNumber] // vs code 제공
  color.textContent = colors[randomNumber]; // 하나의 색만 만들어짐

})

function getRandomNumber(){
  return Math.floor(Math.random()*colors.length); // 이렇게만 하면 소수점으로 값이 나옴 결국 모두 하얀색
  // 우린 0-3까지 값이 필요함
  // *color.length 하면 length 아래까지의 값이 나옴


}