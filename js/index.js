let navbar = document.querySelector('.header .navbar')
let searchform = document.querySelector('.header .search-form')
let loginform = document.querySelector('.header .login-form')
let contactinfo = document.querySelector('.contact-info')
let closecontactinfo = document.querySelector('#close-contact-info')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle ('active')
    searchform.classList.remove ('active')
    loginform.classList.remove ('active')
}


document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle ('active')
    navbar.classList.remove('active')
    loginform.classList.remove ('active')
}


document.querySelector('#login-btn').onclick = () => {
    loginform.classList.toggle ('active')
    navbar.classList.remove('active')
    searchform.classList.remove ('active')
}
 

document.querySelector('#info-btn').onclick = () => {
    contactinfo.classList.add('active')
   
}


document.querySelector('#close-contact-info').onclick = () => {
    contactinfo.classList.remove ('active')
}

window.onscroll = () =>{
        navbar.classList.remove('active')
        searchform.classList.remove ('active')
        loginform.classList.remove ('active')
        
}

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
      
        640: {
          slidesPerView: 3,
        
        },
        768: {
          slidesPerView: 4,
          
        },
        991: {
          slidesPerView: 5,
          
        },
      },
  });

var swiper = new Swiper(".skill-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
      
        640: {
          slidesPerView: 1,
        
        },
        768: {
          slidesPerView: 2,
          
        },
        991: {
          slidesPerView: 3,
          
        },
      },
  });


var swiper = new Swiper(".stat-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
      
       450: {
          slidesPerView: 2,
        
        },
        640: {
          slidesPerView: 3,
        
        },
        768: {
          slidesPerView: 4,
          
        },
        1000: {
          slidesPerView: 5,
          
        },
      },
  });


  
  // search.js

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission and page refresh

  // Get the search query input value
  const query = document.getElementById('searchQuery').value;

  // Encode the query for the URL
  const searchQuery = encodeURIComponent(query);

  // Redirect the user to Google search results with the query
  const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;
  
  // Open the search results in a new tab
  window.open(googleSearchUrl, '_blank');
});


// validate.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get input field values
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Email pattern (RegEx) for basic validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Clear previous error messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('phoneError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  // Validation flag
  let isValid = true;

  // Validate name
  if (!name) {
      document.getElementById('nameError').textContent = 'Name is required.';
      isValid = false;
  }

  // Validate phone
  if (!phone) {
      document.getElementById('phoneError').textContent = 'Phone is required.';
      isValid = false;
  }

  // Validate email
  if (!email) {
      document.getElementById('emailError').textContent = 'Email is required.';
      isValid = false;
  } else if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      isValid = false;
  }

  // Validate message
  if (!message) {
      document.getElementById('messageError').textContent = 'Message is required.';
      isValid = false;
  }

  // If the form is valid, you can proceed with submission (e.g., send form data)
  if (isValid) {
      alert('Form submitted successfully!');
      // Here you could proceed with form submission logic, like AJAX or server-side handling
      // Remove event.preventDefault() if you want to submit to a backend
  }
});


function openForm() {
  window.open('form.html', '_blank');  // Opens the form in a new tab
}
