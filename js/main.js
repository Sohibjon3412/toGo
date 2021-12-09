let elAddBtn = document.querySelectorAll('.add-button');
let elList = document.querySelector('.cart-items');
let elItem = document.querySelector('.menu-item');
let elImg = document.querySelector('.menu-image')
let elTitle = document.querySelector('.menu-item-heading');
let elPrice = document.querySelector('.g-price');
let plusBtn = document.querySelector('.count-plus-btn')
let minusBtn = document.querySelector('.count-minus-btn')

let data=[];
let count = 1;

elAddBtn.forEach(event => {
  event.addEventListener('click', (e) => {
  myFunc(elImg.src, e.target.attributes["data-title"].nodeValue,e.target.attributes["data-price"].nodeValue)
  }) 
})
let sum = 1;
function myFunc (elImg, elTitle, elPrice) {
  let li = document.createElement("li");
  li.className = "menu-item";
  li.innerHTML = `<img src=${elImg} alt="French Fries with Ketchup" class="menu-image">
  <div class="menu-item-dets">
  <p class="menu-item-heading">${elTitle}</p>
  <p class="g-price">$${elPrice}</p>
  </div>
  
  <p class="btn btn-info ms-2">${sum}</p>
  `
  let plusBtn = document.createElement("button");
  let minusBtn = document.createElement("button");

  plusBtn.className = "count-plus-btn btn btn-primary ms-3 mb-3"
  plusBtn.innerHTML = "+";
  minusBtn.className = "count-minus-btn btn btn-primary mb-3 ms-5";
  minusBtn.innerHTML = "-";
  li.append(minusBtn,plusBtn)
  plusBtn.addEventListener('click', () => {
    sum++;
    myFunc(elImg, elTitle, elPrice*sum);
  })
  minusBtn.addEventListener('click', () => {
    if(sum == 1) {
      sum = 1;
    }
    else {
      sum--;
    }
    myFunc(elImg, elTitle, elPrice);
    
  })
 
  let elLi = document.querySelectorAll('.menu-item')
  if(count == 1) {
    elList.append(li);
    count++;
  } 
  else {
    elList.innerHTML = "";
    elLi.forEach(element => {
    
      if(!(element == li)) {
        elList.append(li);
      }
    });
  }
}