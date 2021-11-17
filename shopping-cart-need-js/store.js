if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
   var removeCartItemButtons = document.getElementsByClassName('button-remove')
console.log(removeCartItemButtons)
for(var i=0; i<removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
        })
    } 
}


function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-parent')[0]
    var cartinfo = cartItemContainer.getElementsByClassName('child')[0]
    var total = 0
    for (var i=0; i < cartinfo.length; i++){
        var cartinfo1 = cartinfo[i]
        var priceElement = cartinfo1.getElementsByClassName('cart-item-price')[0]
        var quantityElement = cartinfo1.getElementsByClassName('cart-input')[0]
        console.log(priceElement , quantityElement)
        var price = priceElement.innerText
        console.log(price)
    }
}