const form = document.querySelector('.contact-form')
const formBtn = document.querySelector('.contact-form button')

form.addEventListener('submit', function(event) {
  event.preventDefault()
  $.ajax({
    url:'http://fvi-grad.com:4004/email',
    method: 'Post',
   data: $(form).serialize(),
   success: function() {
     form.reset()
     formBtn.classList.add('sent')
    //  formBtn.style.backgroundColor = '#6F7'
     formBtn.textContent = 'message Sent!'

   }

  })
})
