(function () {
    emailjs.init("KB4Ph3R669P_Ara6P"); // Replace with your user ID from EmailJS
  })();
  
  // Handle form submission
  document.getElementById("conta").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
  
    // Create the email parameters
    const templateParams = {
      name: name,
      from_email: email,
      subject:subject,
      message: message
    };
  
    // Send the email using EmailJS
    emailjs.send("service_f59251o", "template_4rnr415", templateParams)
      .then(function(response) {
        console.log("Success", response);
      //   document.getElementById('status').innerHTML = "Message sent successfully!";
      }, function(error) {
        console.log("Failed", error);
      //   document.getElementById('status').innerHTML = "Error sending message.";
      });
  
    // Optionally clear the form after submission
    event.target.reset();
  });
  
          // form 
  
          function toggleMenu() {
    const menu = document.getElementById('menu');
    const bars = document.querySelectorAll('.menu-icon .bar');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    
    // Toggle menu icon animation
    bars[0].classList.toggle('bar-1');
    bars[1].classList.toggle('bar-2');
    bars[2].classList.toggle('bar-3');
  }
  
  // Close the menu when a link is clicked
  const menuLinks = document.querySelectorAll('.menu-list li a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('menu').style.display = 'none';
      const bars = document.querySelectorAll('.menu-icon .bar');
      bars[0].classList.remove('bar-1');
      bars[1].classList.remove('bar-2');
      bars[2].classList.remove('bar-3');
    });
  });
          // after 
          // Mobile Navigation Toggle
          // const hamburger = document.querySelector('.hamburger');
          // const navLinks = document.querySelector('.nav-links');
          // const links = document.querySelectorAll('.nav-links li');
  
          // hamburger.addEventListener('click', () => {
          //     navLinks.classList.toggle('active');
              
          //     links.forEach((link, index) => {
          //         if (link.style.animation) {
          //             link.style.animation = '';
          //         } else {
          //             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          //         }
          //     });
              
          //     hamburger.classList.toggle('toggle');
          // });
  
          // Smooth Scrolling
         
  
          // Form submission handling
          
  
          // Countdown Timer
          const countdownDate = new Date();
          countdownDate.setDate(countdownDate.getDate() + 5); // Set to 7 days from now
          
          const updateCountdown = () => {
              const now = new Date().getTime();
              const distance = countdownDate - now;
              
              const days = Math.floor(distance / (1000 * 60 * 60 * 24));
              const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((distance % (1000 * 60)) / 1000);
              
              document.getElementById("days").innerHTML = days;
              document.getElementById("hours").innerHTML = hours;
              document.getElementById("minutes").innerHTML = minutes;
              document.getElementById("seconds").innerHTML = seconds;
              
              if (distance < 0) {
                  clearInterval(countdownInterval);
                  document.getElementById("days").innerHTML = "0";
                  document.getElementById("hours").innerHTML = "0";
                  document.getElementById("minutes").innerHTML = "0";
                  document.getElementById("seconds").innerHTML = "0";
              }
          };
          
          updateCountdown(); // Initial call
          const countdownInterval = setInterval(updateCountdown, 1000);