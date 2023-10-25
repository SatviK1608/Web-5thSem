
let bagItems;          //array that stores the id of items added in the bag

onLoad();              //runs as soon as the document is loaded

function onLoad() {

  let bagItemsStr = localStorage.getItem('bagItems');       //to get current items of the bag

  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];    //parse it if not empty and stored in array form with id's

  displayItemsOnHomePage();                                //display items on the page

  displayBagIcon();                                        //displays the count of items in cart/bag

} 

function addToBag(itemId) {                                

  bagItems.push(itemId);                                          //adding the item to the bag

  localStorage.setItem('bagItems', JSON.stringify(bagItems));     //updating the local Storage

  displayBagIcon();                             //since item is added to the bag we will update the count

}

function displayBagIcon() {

  let bagItemCountElement = document.querySelector('.bag-item-count');

  if (bagItems.length > 0) {                            //means there are some itmes in bag

    bagItemCountElement.style.visibility = 'visible';  //mske that count visible

    bagItemCountElement.innerText = bagItems.length;  

  } 
  else {

    bagItemCountElement.style.visibility = 'hidden';   //since bag is empty hide the count display icon

  }

}

function displayItemsOnHomePage() {

  let itemsContainerElement = document.querySelector('.items-container');

  if (!itemsContainerElement) {   
    return;
  }

  let innerHtml = '';

  items.forEach(item => {             //iterate through the arrays of items and add them to the container

    innerHtml += `

    <div class="item-container">

      <img class="item-image" src="${item.image}" alt="item image">

      <div class="rating">

          ${item.rating.stars} ⭐ | ${item.rating.count}

      </div>

      <div class="company-name">${item.company}</div>

      <div class="item-name">${item.item_name}</div>

      <div class="price">

          <span class="current-price">Rs ${item.current_price}</span>

          <span class="original-price">Rs ${item.original_price}</span>

          <span class="discount">(${item.discount_percentage}% OFF)</span>

      </div>

      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>

    </div>`
  });
  itemsContainerElement.innerHTML = innerHtml;        //appending the current itmem into the element
}
