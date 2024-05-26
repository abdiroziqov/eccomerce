const product = JSON.parse(localStorage.getItem('product') ?? {})

function renderSingle() {
        let card = `<div class="description">
                <h1>${product.title}</h1>
                <img src=${product.image} alt="image"/>
                <div>
                    <h5>Модел</h5>
                    <p>${product.description}</p>
                </div>
                <div>
                    <h5>Тип продукта</h5>
                    <p>${product.category}</p>
                </div>
                <div>
                    <h5>Сумма</h5>
                    <p>$${product.price}</p>
                </div>
                <div>
                    <h5>Валюта</h5>
                    <select name="cars" id="cars">
                        <option value="volvo">USD</option>
                        <option value="volvo">UZS</option>
                        <option value="volvo">EUR</option>
                        <option value="volvo">RUB</option>
                    </select>
                </div>
                <button style="margin-top: 20px;" class="yellow-btn" id="offer">Оформить заказ</button>
            </div>`
        document.getElementById('product__main').innerHTML = card;
}

renderSingle()

let offerBtn = document.getElementById("offer");

offerBtn.onclick = function (e) {
    window.location.href = '/form.html'
};
