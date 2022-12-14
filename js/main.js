const tabItems = document.querySelectorAll('.tab-item'); //This will add every item in an nodeList like an array
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e){

    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');

    //Grab the content for DOM (dyamically)
    // console.log(this.id);
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    console.log(tabContentItem)
    tabContentItem.classList.add('show');
}


function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Listent for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));