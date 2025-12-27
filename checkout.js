// Store product info when "Buy Now" is clicked on product pages
document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    const imgSrc = card.querySelector('img').src;
    const name = card.querySelector('h3').innerText;
    const price = card.querySelector('.price').innerText;

    localStorage.setItem('productImg', imgSrc);
    localStorage.setItem('productName', name);
    localStorage.setItem('productPrice', price);
  });
});

// Populate checkout page order summary
window.addEventListener('DOMContentLoaded', () => {
  const img = localStorage.getItem('productImg');
  const name = localStorage.getItem('productName');
  const price = localStorage.getItem('productPrice');

  if (img && name && price) {
    document.getElementById('summary-img').src = img;
    document.getElementById('summary-name').innerText = name;
    document.getElementById('summary-price').innerText = price;
  }
});
