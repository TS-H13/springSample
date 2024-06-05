var myModal = document.getElementById('confirmModal')
myModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget

  // Extract info from data-bs-* attributes
  var userId = button.getAttribute('data-bs-user-id')

  // Update the modal's content.
  var deleteBtn = myModal.querySelector('#deleteBtn')
  deleteBtn.href = "/user/" + userId + "/delete"
})
