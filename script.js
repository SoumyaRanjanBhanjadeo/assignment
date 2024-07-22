document.getElementById('selectAll').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.checking');
    checkboxes.forEach(checkbox => checkbox.checked = this.checked);
  })

