

checkCart();

//проверяю наличие корзины в хранилище
function checkCart(){
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
        let myOrder = document.querySelector('#cart_counter');

        myOrder.innerHTML = Object.keys(cart).length; 

    }
}


showCart(); // показ корзины

function showCart() {
    let myCart = document.getElementById('my-cart');

    if (Object.keys(cart).length == 0) {
        myCart.innerHTML = '<p class="name">Корзина пуста. Добавьте товар в корзину. <a href="./catalog.html">В каталог</a></p>';
    } else {

        myCart.innerHTML = '';
        let out = '';

        for (let key in cart) {

            let cartItem = document.createElement('div');
            cartItem.className = 'item cart-item';
            out += '<p class="name">' + catalogProduct[key].name + '</p>';
            out += '<img src="' + catalogProduct[key].img + '" class="item-image">';
            out += '<p class="cart-order">' + '<button class="btn-plus" data-id="' + key + '"></button>' + cart[key] + '<button class="btn-minus" data-id="' + key + '"></button>' + '</p>';
            out += '<p class="price">' + 'Общая стоимость - ' + cart[key] * catalogProduct[key].price + '</p>';
            out += '<button class="btn-delete" data-id="' + key + '"> Удалить из корзины </button>';


            cartItem.innerHTML = out;
            myCart.append(cartItem);
            out = '';
        }

        let plusGood = document.querySelectorAll('.btn-plus'); // увеличение товара на еденицу
        for (let btn of plusGood) {
            btn.addEventListener('click', function () {
                let articul = this.attributes[1].value;
                cart[articul]++;
                localStorage.setItem('cart', JSON.stringify(cart));
                console.log(cart);
                showCart();
            });
        }

        let minusGood = document.querySelectorAll('.btn-minus'); // уменьшение товара на еденицу
        for (let btn of minusGood) {

            btn.addEventListener('click', function () {
                let articul = this.attributes[1].value;
                if (cart[articul] > 1) {
                    cart[articul]--;
                } else {
                    delete cart[articul];
                }

                console.log(cart);
                localStorage.setItem('cart', JSON.stringify(cart));
                showCart();
            });
        }

        let deleteGood = document.querySelectorAll('.btn-delete'); // удаление товара из корзины
        for (let btn of deleteGood) {
            btn.addEventListener('click', function () {
                let articul = this.attributes[1].value;
                delete cart[articul];

                console.log(cart);
                localStorage.setItem('cart', JSON.stringify(cart));
                showCart();
            });
        }
    }


}









