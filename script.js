
let thisPage = 1;
let limit = 3;
let list = document.querySelectorAll('.list .item');

function loadItem(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage -1;
    list.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    listPage();
});
}
loadItem();
function listPage(){
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';
    
    if(thisPage != 1)
    {
        let prev = document.createElement('li');
        prev.innerHTML = 'PREV';
        prev.setAttribute('onclick', "changePage("+(thisPage-1) +")");
        document.querySelector('.listPage').appendChild(prev);
    }
    
    for(i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerHTML = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    if(thisPage != count)
    {
        let next = document.createElement('li');
        next.innerHTML = 'NEXT';
        next.setAttribute('onclick', "changePage("+ (thisPage+1) +")");
        document.querySelector('.listPage').appendChild(next);
    }

}

function changePage(i) {
    thisPage = i;
    loadItem();
}


let List = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
    {
        id: 1,
        name: 'Skin 1004 Hyalu- Cica Toner1',
        price: 22.00,
        quantyti:0,
        image: 'face6.jpg',
        nature: {
            color:['blue'],
            size: ['M', 'L'],
            type:'Toner'
        }
    },
    {
        id: 2,
        name:'Skin 1004 Serum Centella8',
        price:22.00,
        quantyti:1,
        image: 'face2.jpg',
        nature:{
            color:['golden'],
            size:['M','S'],
            type:'Serum'
        }
    },
    {
        id: 3,
        name:'Unove Deep Damage Treatment EX9',
        price:22.00,
        quantyti:2,
        image:'hair3.webp',
        nature:{
            color:['pink'],
            size:['S'],
            type:'Damage Treatment'
        }
    },
    {
        id: 4,
        name:'Skin 1004 Hyalu-Cica Serum',
        price:22.00,
        quantyti:3,
        image:'face7.webp',
        nature:{
            color:['blue'],
            size:['S'],
            type:'Serum'
        }
    },
    {
        id: 5,
        name:'Skin 1004 Centella Toner11',
        price:22.00,
        quantyti:4,
        image:'face8.jpg',
        nature:{
            color:['golden'],
            size:['S'],
            type:'Toner'
        }
    },
    {
        id:6,
        name:'Paula Choice Weightless Body Treatment 2% BHA12',
        price:22.00,
        quantyti:5,
        image:'body3.jpg',
        nature:{
            color:['purple'],
            size:['L'],
            type:'Body Treatment'
        }
    }
   

];
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter){
   count.innerText = productFilter.length;
   list.innerHTML = '';
   productFilter.forEach(item =>{
let newItem = document.createElement('div');
    newItem.classList.add('item');


    let newImage = new Image();
    newImage.src = item.image;
    newItem.appendChild(newImage);

    let newTitle = document.createElement('div');
    newTitle.classList.add('title');
    newTitle.innerText = item.name;
    newItem.appendChild(newTitle);

list.appendChild(newItem);   
});
   }
   filter.addEventListener('sumit',function(event){
    alert('1111');
   })
