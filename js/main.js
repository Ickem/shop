var cart={}; 

function init() {
    $.getJSON("goods.json", goodsOut);
}

function goodsOut(data) {
    //let goods = JSON.parse(data);
    console.log(data);
    let outNewGoods='';
    let outFeaturedGoods='';


    for(let key in data) {
        if (data[key].status == 'new') {
            outNewGoods += '<div class="cart">';
            outNewGoods += '<img src="' + data[key].img + '" alt="not found">';
            outNewGoods += '<p class="name">' + data[key].name + '</p>';
            outNewGoods += '<div class="cost">$' + data[key].cost + '</div>';
            outNewGoods += `<a href="#" data-id="${key}" class="add-to-cart" onclick="return false;"><i class="fas fa-shopping-basket"></i></a>`;
            //outNewGoods+='<a href="#description"></a>';
            outNewGoods += '<div class="status-tape-new">NEW</div>';
            outNewGoods += '</div>';
            $('.goods-new-out').html(outNewGoods);
            $('.add-to-cart').on('click', addToCart);

        }
        if (data[key].status != undefined) {
             outFeaturedGoods+='<div class="cart">';
             outFeaturedGoods+='<img src="'+data[key].img+'" alt="not found">';
             outFeaturedGoods+='<p class="name">'+data[key].name+'</p>';
             outFeaturedGoods+='<div class="cost">$'+data[key].cost+'</div>';
             outFeaturedGoods+=`<a href="#" data-id="${key}" class="add-to-cart" onclick="return false;"><i class="fas fa-shopping-basket"></i></a>`;
            if (data[key].status == 'new') {
                outFeaturedGoods += '<div class="status-tape-new">NEW</div>';
            }
            if (data[key].status == 'sale') {
                outFeaturedGoods += '<div class="status-tape-sale">SALE</div>';
            }
            outFeaturedGoods += '</div>';
        }
        $('.goods-featured-out').html(outFeaturedGoods);
        $('.add-to-cart').on('click', addToCart);
    }
}

function addToCart(){
    let id=$(this).attr('data-id');
   // console.log(id);
    if(cart[id] == undefined){
        cart[id]=1; 
    }else{
        cart[id]++;
    }
    showMiniCart();
    saveCart();
    showMessage();

}

function saveCart(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

function showMiniCart(){
    //let out='';
    let count = 0;
    for(let key in cart){
      //  out+=key+'---------'+cart[key];
        count+=cart[key];
    }
    $('.count-goods').html('('+count+')');
   // $('.mini-cart').html(out);
}

function showMessage(){
    $('.content').prepend('<div class="dialog-box">Item added to cart!</div>');
    setTimeout(function() {
        $('.dialog-box').fadeOut('fast');
    }, 1000);

}

function loadCart(){
    if(localStorage.getItem('cart')){
        cart=JSON.parse(localStorage.getItem('cart'));
        showMiniCart();
    }
}

$(document).ready(function () {
    init();
    loadCart();
});