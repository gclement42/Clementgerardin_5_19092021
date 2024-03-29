const orderBtn = document.querySelector(".product__order");
const cart = document.querySelector(".panier");
orderBtn.addEventListener("click", () => {
    
    let idBtn = orderBtn.dataset.id;
    let nameBtn = orderBtn.dataset.name;
    let priceBtn = orderBtn.dataset.price;
    if (!localStorage.getItem(idBtn)) {
        const teddy = new Object;
        teddy.name = nameBtn;
        teddy.id = idBtn;
        teddy.price = priceBtn;
        teddy.qte = 1;
        teddy.totalPrice = teddy.price * teddy.qte;
        teddy.colors = document.querySelector('.product__custom').value
        localStorage.setItem(idBtn, JSON.stringify(teddy));
    } else {
        let getQte = localStorage.getItem(idBtn);
        let parse = JSON.parse(getQte);
        parse.qte++;
        parse.totalPrice = parse.qte * parse.price;
        localStorage.setItem(idBtn, JSON.stringify(parse));
    }
});
