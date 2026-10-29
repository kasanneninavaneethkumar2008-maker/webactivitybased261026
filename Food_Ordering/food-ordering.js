let total = 0;
let itemCount = 0;
document.querySelectorAll('.add').forEach(function(button) {
  button.addEventListener('click', function() {
    total += Number(button.dataset.price);
    itemCount++;
    document.querySelector('#count').textContent = itemCount;
    alert(button.dataset.name + ' added to your order.');
  });
});
document.querySelector('#order').addEventListener('click', function() {
  alert('Items: ' + itemCount + '\nTotal: ₹' + total);
});