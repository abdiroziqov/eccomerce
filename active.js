document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    if (currentPath.includes('order.html')) {
        console.log('hello');
      const orderLink = document.querySelector('aside .sidenav ul li a[href="order.html"]');
      if (orderLink) {
        console.log('hello2');
        orderLink.classList.add('active');
        alert('hello')
      }
    }
  });