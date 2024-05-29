document.addEventListener('DOMContentLoaded', (event) => {
  let product = JSON.parse(localStorage.getItem('product'))
  if (product) {
    const productCard = `<div class="product-card flex justify-between items-center">
      <div class="product-card-img">
        <img src=${product?.image} alt="image" />
        <div>
          <h2>${product?.title}</h2>
          <div class="flex">
            <p>${product?.category}</p>
            <p>Stars: ${product?.rating?.rate}</p>
          </div>
        </div>
      </div>

      <div class="product-card-info">
        <p>$${product?.price}</p>
        <p>Qty: 1</p>
      </div>
    </div>`
    
    document.getElementById('products_list').innerHTML += productCard
    document.getElementById('product_id').innerHTML = '0000' + product?.id

    // Fill payment data
    let paymentInfo = JSON.parse(localStorage.getItem('datas'))

    const last4Digits = paymentInfo?.creditcardnumber?.slice(-4);
    const maskedNumber = last4Digits.padStart(paymentInfo?.creditcardnumber?.length, '*');

    const paymentCard = `
      <div class="flex justify-between border-top">
      <div>
        <h4>Payment</h4>
        <span class="flex items-center payment__order">
          <p>${paymentInfo?.paymenttype}</p>
          <p>${maskedNumber}</p>
        </span>
      </div>
      <div>
        <h4>Delivery</h4>
        <p class="order__address">Adress</p>
        <p class="address__info">
          ${paymentInfo?.address} ${paymentInfo?.country} ${paymentInfo?.city}
        </p>
      </div>
    </div>`

    document.getElementById('payment_info').innerHTML += paymentCard

    const priceCard = `<div class="footer__right" id="delivery_price">
      <p style="color: #475467; font-size: 20px">$${product?.price}</p>
      <p>(0%) - $${product?.price}</p>
      <p>$0.00</p>
      <p>+$0</p>
      <p>$${product?.price}</p>
    </div>`

    document.getElementById('delivery_price').innerHTML += priceCard

    let now = new Date()

    let orderDate = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`

    document.getElementById('order_date').innerHTML = orderDate

    document.getElementById('delivery_date').innerHTML = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`



    let nowDate = new Date()

    let orderDateNow = `${nowDate.getFullYear()}-${nowDate.getMonth()}-${nowDate.getDate()}`

    document.getElementById('order_date_now').innerHTML = orderDateNow

    document.getElementById('delivery_date_now').innerHTML = `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`
  } else {
    document.getElementById('product_main').innerHTML = `
    <div class="product__main product-status">
          <img src="/image/success.svg" alt="image" />
          <p>Not found</p>
          <a href="product.html">
            <button class="yellow-btn">Вернуться на products</button></a
          >
        </div>
    `
  }
})