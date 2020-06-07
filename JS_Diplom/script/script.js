
// showMiniCart();

class AllProducts{
    constructor(containerProducts, catalogProducts){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProducts = catalogProducts;
        this.createProducts();
    }


    createProducts(){
        let wrapper = document.createElement('slot');
        wrapper.className = 'catalog_wrapper';
        for(let key in this.catalogProducts){
            
            let item = this.getProductItem({
                nameTag: 'div',
                nameClass: 'item',
                price: this.catalogProducts[key].price,
                category: this.catalogProducts[key].category
            });
            let name = this.getProductItem({
                nameTag: 'p',
                nameClass: 'name',
                contentText: this.catalogProducts[key].name
            });
            let image = this.getProductItem({
                nameTag: 'img',
                nameClass: 'item-image',
                bgImage: `${this.catalogProducts[key].img}`
            });
            let price = this.getProductItem({
                nameTag: 'p',
                nameClass: 'price',
                contentText: this.catalogProducts[key].price    
            });
            let btn = this.getProductItem({
                nameTag: 'button',
                nameClass: 'add-cart btn-add ',
                contentText: 'Добавить в корзину',
                id: key    
            });

            item.appendChild(name);
            item.appendChild(image);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        }
        this.containerProducts.appendChild(wrapper);
    }
    getProductItem(card){
        let element = document.createElement(card.nameTag);
        if('nameClass' in card){
            element.className = card.nameClass;
        }
        if('contentText' in card){
            element.innerHTML = card.contentText;
        }
        if('bgImage' in card){
            element.setAttribute('src', card.bgImage);
        }
        if('id' in card){
            element.setAttribute('data-id', card.id);
        }
        if('price' in card){
            element.setAttribute('price', card.price);
        }
        if('category' in card){
            element.setAttribute('cat', card.category);
        }

        return element;    
    }
}

let allProducts = new AllProducts('.container_products', catalogProduct);


let addBtn = document.getElementsByClassName('add-cart'); //кнопка "добавить в корзину"

for (let key of addBtn){
    key.addEventListener('click', addToCart);
    key.addEventListener('click', checkCart);
}

//добавление товара в  корзину
function addToCart(){
    let articul = this.attributes[1].value;
    if(cart[articul] != undefined){
        cart[articul]++;
    }
    else{cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

checkCart();

//проверяю наличие корзины в хранилище
function checkCart(){
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
        let myOrder = document.querySelector('#cart_counter');

        myOrder.innerHTML = Object.keys(cart).length; 

    }
}




