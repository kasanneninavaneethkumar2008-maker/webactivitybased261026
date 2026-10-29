document.querySelector('#swap').addEventListener('click', function() {
  const from = document.querySelector('#from');
  const to = document.querySelector('#to');
  const oldFrom = from.value;
  from.value = to.value;
  to.value = oldFrom;
});
document.querySelector('#search').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Showing sample trips from ' + document.querySelector('#from').value + ' to ' + document.querySelector('#to').value + '.');
});
document.querySelectorAll('.choose').forEach(function(button) {
  button.addEventListener('click', function() {
    const seat = prompt('Enter a seat number (example: A1):');
    if (seat) alert('Seat ' + seat + ' selected. This is a sample booking.');
  });
});