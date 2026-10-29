let cartCount = 0;
document.querySelectorAll('.add').forEach(function(button) {
  button.addEventListener('click', function() {
    cartCount++;
    document.querySelector('#count').textContent = cartCount;
    alert(button.dataset.name + ' added to your cart.');
  });
});
document.querySelector('#cart').addEventListener('click', function() {
  alert('You have ' + cartCount + ' item(s) in your cart.');
});