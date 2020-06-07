
//Всплывающее окно
let spam = document.querySelector('.spam_box');

function showSpam(){
    spam.style.display = 'block';
};

// setTimeout(showSpam, 2000);
//Всплывающее окно - конец

let closeSpam = document.querySelector('#closeSpam');

closeSpam.addEventListener('click', function(){
    spam.remove();
});



class Store{
    constructor(){

    }

    getProducts(){
        let products = [];
        let productsLcStorage = localStorage.getItem('cart');

        if(productsLcStorage !== null){
            products = JSON.parse(productsLcStorage);
        }

        return products;
    };

    putProduct(id){
        let products = this.getProducts();
        let index = products.indexOf(id);
        let statusProduct;

        if(index === -1){
            products.push(id);
            statusProduct = true;
        }else{
            products.splice(index, 1);
            statusProduct = false;
        }

        localStorage.set

    }
}