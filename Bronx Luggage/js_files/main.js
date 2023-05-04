// For frame 1
$(document).ready(function(){
  var owl = $("#pic_slider");
  owl.owlCarousel({
    items: 5,
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: false
  });

  // Target the previous button and add a click event listener
  $("#prev").click(function(){
    owl.trigger('prev.owl.carousel');
  });

  // Target the next button and add a click event listener
  $("#next").click(function(){
    owl.trigger('next.owl.carousel');
  });
});



// This is for the animation in frame3 which may or may not be removed
$(document).ready(function(){
  $('#owl-carousel').owlCarousel({
    items: 5,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
  });
});
// This is for the ticking timer of my web app
		// Get the date
    function updateTime() {
      let timeElement = document.querySelector('.time');

      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      // create a new time string with the demarcation element
      let timeString = `${hours} <span class="demarcation"></span> ${minutes} <span class="demarcation"></span> ${seconds} ${ampm}`;
      timeElement.innerHTML = timeString;
    }
    setInterval(updateTime,1000)

      let date = new Date();
      let day = date.getDate();
      let month = date.toLocaleString('default', { month: 'long' });
      let year = date.getFullYear();
      document.querySelector('.date').textContent = `${day} ${month} ${year}`
      
      // Update the time
      

      // Get the location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        document.querySelector('.location').textContent = 'Geolocation is not supported by this browser.';
      }

      // I am using an api to set the person's current location
      async function showPosition(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let apiKey = 'a670e79c60d44997858c6469863df2b6';
        // TODO: Remove later the commented url
        let url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
      
        try {
          let response = await fetch(url);
          let data = await response.json();
          let state = data.results[0].components.state;
          let county = data.results[0].components.county;
          console.log(data)
          let country = data.results[0].components.country;
          document.querySelector('.location').textContent = `Your location: ${county}, ${state}, ${country}`;
        } catch (error) {
          console.log('Error:', error);
          document.querySelector('.location').textContent = 'Error getting location.';
        }
      }
    
    

    $(document).ready(function(){
      //when the hamburger is clicked
      $('.hamburger').click(function(){
        //toggle the active class on the hamburger
        $(this).toggleClass('active');
        //toggle the active class on the menu
        $('.menu').toggleClass('active');
      });
    });
    


// So here, the responsive view for the menu is being recreated because due to the arrangement of the menu in the original desktop view,the way the menu's were arranged did not make it so feasible to create a hamburger with them. So this was the solution we took to, creating another div but using js and then styling it in the css

// create a new div element for the hamburger menu
const hamburgerNav = document.createElement('div');
hamburgerNav.classList.add('hamburger-nav');

// create a search button and add it to the top of the new menu
const searchBtn = document.createElement('button');
searchBtn.classList.add('search');
hamburgerNav.appendChild(searchBtn);

// create new menu items and add them to the new menu
const menuItems = [
  {text: 'MEN', link: '#'},
  {text: 'WOMEN', link: '#'},
  {text: 'ACCESSORIES', link: '#'},
  {text: 'GALLERY', link: '../Bronx Luggage/Gallery/gallery.html'},
  {text: 'ABOUT US', action: () => scrollTo('#aboutus')},
  {text: 'CONTACT US', action: () => scrollTo('#contactus')},
  {text: "FAQ's", link: 'FAQ_page/index.html'},
];

menuItems.forEach(item => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  if (item.action) {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = item.text;
    link.addEventListener('click', event => {
      event.preventDefault();
      item.action();
    });
    menuItem.appendChild(link);
  } else if (item.link) {
    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = item.text;
    menuItem.appendChild(link);
  } else {
    menuItem.textContent = item.text;
  }

  hamburgerNav.appendChild(menuItem);
});

// function to scroll to a specific element
function scrollTo(selector) {
  const element = document.querySelector(selector);
  element.scrollIntoView({ behavior: 'smooth' });
}

// append the new hamburger menu to the DOM

  const header = document.querySelector('.hamburger');
  header.appendChild(hamburgerNav);

  // add a click event listener to the hamburger menu button
  const hamburger = document.querySelector('.hamburger span');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
  });


// hide old menu items when the hamburger menu is displayed
const oldMenuItems = document.querySelectorAll('nav ul li');
const mediaQuery = window.matchMedia('(max-width: 670px)');

mediaQuery.addEventListener('change', () => {
  if (mediaQuery.matches) {
    oldMenuItems.forEach(item => item.style.display = 'none');
  } else {
    oldMenuItems.forEach(item => item.style.display = 'block');
  }
});

  