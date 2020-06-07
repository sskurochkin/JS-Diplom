let wrapper = document.querySelector('.catalog_wrapper');
console.log(wrapper.children);
// сортировка по возрастанию
document.querySelector('#to_up').addEventListener('click', function () {
    mySortUp('price');
});

// сортировка по убыванию цены
document.querySelector('#to_down').addEventListener('click', function () {
    mySortDown('price');
});

//функции сортировок
function mySortUp(attr) {
    for (let i = 0; i < wrapper.children.length; i++) {
        for (let j = i; j < wrapper.children.length; j++) {
            if (+wrapper.children[i].getAttribute(attr) > +wrapper.children[j].getAttribute(attr)) {
                replaceNode = wrapper.replaceChild(wrapper.children[j], wrapper.children[i]);
                insertAfter(replaceNode, wrapper.children[i]);
            }
        }
    }
}

function mySortDown(attr) {
    for (let i = 0; i < wrapper.children.length; i++) {
        for (let j = i; j < wrapper.children.length; j++) {
            if (+wrapper.children[i].getAttribute(attr) < +wrapper.children[j].getAttribute(attr)) {
                replaceNode = wrapper.replaceChild(wrapper.children[j], wrapper.children[i]);
                insertAfter(replaceNode, wrapper.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}


//Фильтры по категориям

filterWork = document.querySelector('#filter_work');
filterRelax = document.querySelector('#filter_relax');
filterSport = document.querySelector('#filter_sport');


// filterWork.addEventListener('click', function(){
//     filterGoods(filterWork,'work');
// }
// );

// filterRelax.addEventListener('click', function(){
//     filterGoods(filterRelax,'relax');
// }
// );

// filterSport.addEventListener('click', function(){
//     filterGoods(filterSport,'sport');
// }
// );


function sortGoods() {
    let flag = false;

    for (let key of wrapper.children) {
        key.style.display = 'none';
    }
    if (filterWork.checked == true) {
        flag = true;
        for (let key of wrapper.children) {
            if (key.attributes[2].value == 'work') {
                key.style.display = 'block';
            }
        }
    }
    if (filterRelax.checked == true) {
        flag = true;
        for (let key of wrapper.children) {
            if (key.attributes[2].value == 'relax') {
                key.style.display = 'block';
            }
        }
    }
    if (filterSport.checked == true) {
        flag = true;
        for (let key of wrapper.children) {
            if (key.attributes[2].value == 'sport') {
                key.style.display = 'block';
            }
        }

    }

    if(!flag){
        for (let key of wrapper.children) {
            key.style.display = 'block';
        }
    }

}




// function filterGoods(name, param){
//     if(name.checked == true){
//         for(let key of wrapper.children){
//             if(key.attributes[2].value != param){
//                 key.style.display = 'none';
//             }
//         }
//     }
//     if(name.checked == false){
//         for(let key of wrapper.children){
//             key.style.display = 'block';
//         }
//     }