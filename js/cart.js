var cart={};

function loadCart(){
    if(localStorage.getItem('cart')){
        cart=JSON.parse(localStorage.getItem('cart'));
        showCart();
    } else {
        $('.basket').html('cart is empty');
    }
}

function showCart() {
    if (!isEmpty(cart)) {
        $('.basket').html('cart is empty');
    } else {
        $.getJSON('goods.json', function (data) {
            let goods = data;
            let out = '';
            for (let id in cart) {
                out += `<div class="goods-item" data-id="${id}">`;
                out += `<button class="del-goods">X</button>`;
                out += `<span>${goods[id].name}</span>`;
                out += `<span class="price">${goods[id].cost}</span>`;
                out += `<button class="minus">-</button>`;
                out += `<span class ="count-goods">${cart[id]}</span>`;
                out += `<button class="plus">+</button>`;
                out += `<span class="total-price">0</span>`;
                out += `</div>`
            }
            $('.basket').html('<hr>'+out+'<hr>');
            $('.del-goods').on('click', delGoods);
            $('.minus').on('click', minus);
            $('.plus').on('click', plus);
            totalPrice();
        });
    }
}

function delGoods(){
    let id = $(this).parent().attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
}

function minus(){
    let $count = $(this).parent().find('.count-goods').html();
    if($count>0) {
        $count--;
        $(this).parent().find('.count-goods').html($count);

        $(this).parent().find('.total-price').html($count*$(this).parent().find('.price').html()+ '$');
        //console.log($('.total-price').html());
        totalPrice();

    }
   }

function plus(){
    let $count = $(this).parent().find('.count-goods').html();
        $count++;
        $(this).parent().find('.count-goods').html($count);
        $(this).parent().find('.total-price').html($count* $(this).parent().find('.price').html() + '$');
        totalPrice();

}

function totalPrice(){
    let sum = 0;
    $('.total-price').each(function(){
        sum += parseInt($(this).text());
    });
    $('.total').html('<span>Total:</span><span>'+sum+'$</span>');
}


function saveCart(){
    localStorage.setItem('cart',JSON.stringify(cart));//корзину в строку
}

function isEmpty(object){
    for(let key in object){
        if(object.hasOwnProperty(key)) return true;
        return false;
    }
}

$(document).ready(function(){
   loadCart();
});