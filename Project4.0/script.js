document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Get the ID of the target section
            const targetSection = document.getElementById(targetId);
            
            // Smooth scroll to the section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Sticky Navigation Bar: Change style when scrolling down
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

    // Dropdown Menu for Destinations
    const destinationsMenu = document.querySelector('nav ul li:hover ul');
    const destinationItem = document.querySelector('nav ul li');
    
    // Ensuring dropdown menu shows and hides on hover
    destinationItem.addEventListener('mouseenter', () => {
        const dropdown = destinationItem.querySelector('ul');
        if (dropdown) {
            dropdown.style.display = 'block';
            dropdown.classList.add('fade-in'); // Optional class for animation
        }
    });

    destinationItem.addEventListener('mouseleave', () => {
        const dropdown = destinationItem.querySelector('ul');
        if (dropdown) {
            dropdown.style.display = 'none';
            dropdown.classList.remove('fade-in');
        }
    });

    

    // Show "Back to Top" button after scrolling
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTopButton.style.opacity = "1";
        } else {
            backToTopButton.style.opacity = "0";
        }
    });

    // Scroll back to top when button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover animation for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll to section when "Learn More" button is clicked
    const buttons = document.querySelectorAll('.destination-card .button');
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Get the target section (the id of the destination section)
            const targetId = button.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Scroll to the target section with smooth behavior
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            // Highlight the destination card (optional)
            const allCards = document.querySelectorAll('.destination-card');
            allCards.forEach(card => {
                card.classList.remove('active');
            });
            const activeCard = button.closest('.destination-card');
            activeCard.classList.add('active');
        });
    });

    

    // Show the "Back to Top" button when any destination card is clicked
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        card.addEventListener('click', () => {
            backToTopButton.style.opacity = "1";
            backToTopButton.style.visibility = "visible";
        });
    });

    // Add event listener to scroll back to top
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Hide the "Back to Top" button after clicking
        backToTopButton.style.opacity = "0";
        backToTopButton.style.visibility = "hidden";
    });

    // Smooth scroll for the page load anchor (if any)
    if (window.location.hash) {
        const initialHash = window.location.hash.substring(1);
        const initialTarget = document.getElementById(initialHash);
        if (initialTarget) {
            initialTarget.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

});


document.addEventListener('DOMContentLoaded', () => {
    // Add a fade-in animation to attractions as they load
    const attractions = document.querySelectorAll('.attraction');
    attractions.forEach((attraction, index) => {
        setTimeout(() => {
            attraction.style.opacity = 1;
        }, index * 200); // Staggered fade-in
    });

    // Highlight attraction on hover and click
    attractions.forEach(attraction => {
        attraction.addEventListener('click', () => {
            attractions.forEach(a => a.classList.remove('highlighted'));
            attraction.classList.add('highlighted');
            staytoattractions('top-attractions'); // Scroll to the blog section
        });
    });

    // Add smooth scrolling to the "Read More" button
    const readMoreButton = document.querySelector('.button');
    if (readMoreButton) {
        readMoreButton.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(readMoreButton.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Function to scroll to the blog section
    function scrollToBlogSection(id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
});



document.addEventListener('DOMContentLoaded', function () {
    // Define the locations with their respective Google Maps embed URLs
    const locations = {
      default: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509309!2d144.9537363153155!3d-37.81627974202112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f0f7c1b5%3A0xff0b3f4e321a6f1d!2sFederation%20Square%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1684500608903!5m2!1sen!2sus",
      location1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.910553368835!2d144.983144315254!3d-37.80804197975292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64323c5c5c239%3A0xbdb87290b6c0da62!2sMelbourne%20Zoo!5e0!3m2!1sen!2sus!4v1684500668904!5m2!1sen!2sus",
      location2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.957256416206!2d144.9668911152582!3d-37.816732839896846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5dfdddf2eb%3A0x7fa443cbeefc5c78!2sRoyal%20Botanic%20Gardens%2C%20Melbourne!5e0!3m2!1sen!2sus!4v1684500738905!5m2!1sen!2sus",
    };
  
    // Get references to the iframe and buttons
    const iframe = document.querySelector('.interactive-map iframe');
    const buttons = document.querySelectorAll('.map-options button');
  
    // Add click event listeners to each button
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const locationKey = button.getAttribute('data-location'); // Get the location key
        if (locations[locationKey]) {
          iframe.src = locations[locationKey]; // Update the iframe src to the selected location
        }
      });
    });
  });
  
  

document.addEventListener('DOMContentLoaded', function () {
    // Select the iframe and other related elements
    const mapIframe = document.querySelector('.interactive-map iframe');
    const mapSection = document.querySelector('.interactive-map');
    
    // Example: Update map src dynamically (optional)
    const locations = {
      default: "https://www.google.com/maps/embed?pb=...",
      location1: "https://www.google.com/maps/embed?pb=...location1",
      location2: "https://www.google.com/maps/embed?pb=...location2",
    };
  
    // Add hover event to display some action or update styles dynamically
    mapIframe.addEventListener('mouseenter', function () {
      mapSection.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
      mapSection.style.transition = "box-shadow 0.3s ease";
    });
  
    mapIframe.addEventListener('mouseleave', function () {
      mapSection.style.boxShadow = "none";
    });
  
    // Optional: Add click functionality to update iframe src dynamically
    document.querySelector('#some-button-or-menu').addEventListener('click', function () {
      mapIframe.src = locations.location1; // Update this based on user selection
    });
  
    // Optional: Add responsiveness to iframe dimensions
    window.addEventListener('resize', function () {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        mapIframe.width = "100%";
        mapIframe.height = "300";
      } else {
        mapIframe.width = "600";
        mapIframe.height = "450";
      }
    });
  
    // Trigger resize logic on page load
    window.dispatchEvent(new Event('resize'));
  });
  
// JavaScript for Weather Widget
// JavaScript to handle clicking on a day and showing the weather details for that day
document.addEventListener('DOMContentLoaded', function () {
    // Data for the weather (you can replace this with dynamic data from an API)
    const weatherData = {
      "Friday": {
        "temperature": "+22°C",
        "feelsLike": "23°C",
        "windSpeed": "3.8 m/s",
        "humidity": "47%",
        "pressure": "1024 hPa",
        "precipitation": "2%",
        "sunrise": "4:59",
        "sunset": "20:47",
      },
      "Saturday": {
        "temperature": "+21°C",
        "feelsLike": "22°C",
        "windSpeed": "4.2 m/s",
        "humidity": "45%",
        "pressure": "1025 hPa",
        "precipitation": "5%",
        "sunrise": "5:01",
        "sunset": "20:50",
      },
      "Sunday": {
        "temperature": "+20°C",
        "feelsLike": "19°C",
        "windSpeed": "3.0 m/s",
        "humidity": "50%",
        "pressure": "1023 hPa",
        "precipitation": "10%",
        "sunrise": "5:02",
        "sunset": "20:52",
      },
      "Monday": {
        "temperature": "+23°C",
        "feelsLike": "24°C",
        "windSpeed": "4.0 m/s",
        "humidity": "43%",
        "pressure": "1026 hPa",
        "precipitation": "1%",
        "sunrise": "5:03",
        "sunset": "20:53",
      },
      "Tuesday": {
        "temperature": "+24°C",
        "feelsLike": "25°C",
        "windSpeed": "3.5 m/s",
        "humidity": "42%",
        "pressure": "1027 hPa",
        "precipitation": "0%",
        "sunrise": "5:04",
        "sunset": "20:54",
      },
      "Wednesday": {
        "temperature": "+25°C",
        "feelsLike": "26°C",
        "windSpeed": "3.8 m/s",
        "humidity": "40%",
        "pressure": "1028 hPa",
        "precipitation": "0%",
        "sunrise": "5:05",
        "sunset": "20:55",
      },
      "Thursday": {
        "temperature": "+19°C",
        "feelsLike": "18°C",
        "windSpeed": "4.3 m/s",
        "humidity": "55%",
        "pressure": "1022 hPa",
        "precipitation": "15%",
        "sunrise": "5:06",
        "sunset": "20:56",
      }
    };
  
    // Loop through each day and add an event listener to display the details when clicked
    const days = document.querySelectorAll('.day');
    days.forEach(day => {
      day.addEventListener('click', function() {
        // Get the day name from the clicked element
        const dayName = day.querySelector('p').textContent;
  
        // Get the weather data for the clicked day
        const dayWeather = weatherData[dayName];
  
        // Get the details container
        const detailsContainer = document.querySelector('.weather-today');
  
        // Update the weather details
        detailsContainer.innerHTML = `
          <div class="current-weather">
            <h2>${dayName} ${new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })} ${new Date().toLocaleTimeString()}</h2>
            <h1>${dayWeather.temperature}</h1>
            <p>Feels like ${dayWeather.feelsLike}</p>
            <div class="weather-icon">
              <img src="https://cdn.dribbble.com/users/2099521/screenshots/16506483/media/ed0ce87d07591bb43b003da80178c929.gif?resize=400x0" alt="Cloudy Weather">
            </div>
            <p>Sunrise: ${dayWeather.sunrise} | Sunset: ${dayWeather.sunset}</p>
          </div>
          <div class="more-details">
            <h3>More Details:</h3>
            <ul>
              <li>Wind speed: ${dayWeather.windSpeed}</li>
              <li>Humidity: ${dayWeather.humidity}</li>
              <li>Pressure: ${dayWeather.pressure}</li>
              <li>Precipitation probability: ${dayWeather.precipitation}</li>
            </ul>
          </div>
        `;
      });
    });
  });
  


// Function to change temperature units between Celsius and Fahrenheit
const temperatureToggle = document.querySelector('.settings span:first-child');
temperatureToggle.addEventListener('click', function() {
  const currentTempElement = document.querySelector('.current-weather h1');
  const tempValue = parseInt(currentTempElement.innerText.slice(1, -2)); // Extracting temperature value (e.g. 22°C)
  
  if (currentTempElement.innerText.includes('°C')) {
    // Convert to Fahrenheit
    const tempFahrenheit = (tempValue * 9/5) + 32;
    currentTempElement.innerText = `+${Math.round(tempFahrenheit)}°F`;
  } else {
    // Convert to Celsius
    const tempCelsius = (tempValue - 32) * 5/9;
    currentTempElement.innerText = `+${Math.round(tempCelsius)}°C`;
  }
});

// Function to change language (EN | RU)
const languageToggle = document.querySelector('.settings span:nth-child(2)');
languageToggle.addEventListener('click', function() {
  const locationText = document.querySelector('.location p');
  
  if (locationText.innerText.includes('Eiffel Tower')) {
    locationText.innerText = 'Погода в Эйфелевой башне'; // Russian translation for Eiffel Tower weather
  } else {
    locationText.innerText = 'Weather in Eiffel Tower'; // English translation for Eiffel Tower weather
  }
});

// Function to scroll to the top of the page when the button is clicked
const scrollToTopButton = document.getElementById('scrollToTop');
scrollToTopButton.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// JavaScript for Weekly Forecast Hover Effect
const days = document.querySelectorAll('.forecast .day');
days.forEach(day => {
  day.addEventListener('mouseenter', function() {
    day.style.transform = 'scale(1.05)';
  });
  day.addEventListener('mouseleave', function() {
    day.style.transform = 'scale(1)';
  });
});

// Optionally, you can also dynamically update the weekly forecast by adding weather API data here
// For now, it just uses static data as shown in the HTML
// Function to update the current time, week, date, weather, and sunrise/sunset times
async function updateTime() {
    const timeElement = document.querySelector('.current-weather h2');
    const dateElement = document.querySelector('.current-weather p');
    const sunriseElement = document.querySelector('.sunrise');
    const sunsetElement = document.querySelector('.sunset');
    const windElement = document.querySelector('.wind');
    const humidityElement = document.querySelector('.humidity');
    const pressureElement = document.querySelector('.pressure');
    const precipitationElement = document.querySelector('.precipitation');
    
    const currentDate = new Date();
    
    // Get the current hours, minutes, and seconds
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';  // Check if it's AM or PM
  
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12 for 12-hour format
    minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero for minutes less than 10
    seconds = seconds < 10 ? '0' + seconds : seconds; // Add leading zero for seconds less than 10
    
    // Format the current date and time with seconds
    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    // Get the full date (weekday, month, day, year)
    const weekday = currentDate.toLocaleString('en-US', { weekday: 'long' });
    const month = currentDate.toLocaleString('en-US', { month: 'long' });
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    
    const formattedDate = `${weekday}, ${month} ${day}, ${year}`;
    
    // Update the elements with the formatted time and date
    timeElement.innerText = formattedTime;  // Update time
    dateElement.innerText = `Weather in Eiffel Tower / ${formattedDate}`;  // Update date and week
  
    // Get sunrise and sunset times from the API
    const sunriseSunsetData = await getSunriseSunsetTimes();
    
    // Format the sunrise and sunset times
    const sunriseTime = formatTime(sunriseSunsetData.sunrise);
    const sunsetTime = formatTime(sunriseSunsetData.sunset);
    
    // Update the elements for sunrise and sunset
    sunriseElement.innerText = `Sunrise: ${sunriseTime}`;
    sunsetElement.innerText = `Sunset: ${sunsetTime}`;
  
    // Get the weather data (wind speed, humidity, pressure, and precipitation) based on the day
    const weatherData = await getWeatherData(weekday);
    
    // Update the elements with weather data
    windElement.innerText = `Wind Speed: ${weatherData.windSpeed} m/s`;
    humidityElement.innerText = `Humidity: ${weatherData.humidity}%`;
    pressureElement.innerText = `Pressure: ${weatherData.pressure} hPa`;
    precipitationElement.innerText = `Precipitation Probability: ${weatherData.precipitation}%`;
  }
  
  // Function to fetch sunrise and sunset times using the Sunrise-Sunset API
  async function getSunriseSunsetTimes() {
    // Coordinates for Eiffel Tower (Paris, France)
    const latitude = 48.8584;
    const longitude = 2.2945;
  
    // API URL
    const apiUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      // Return the sunrise and sunset times
      return {
        sunrise: data.results.sunrise,
        sunset: data.results.sunset
      };
    } catch (error) {
      console.error("Error fetching sunrise and sunset times:", error);
      return {
        sunrise: "Not available",
        sunset: "Not available"
      };
    }
  }
  
  // Function to fetch weather data based on the day of the week
  async function getWeatherData(day) {
    // Default weather conditions (to be modified based on the day of the week)
    let windSpeed = 5; // in m/s
    let humidity = 50; // in %
    let pressure = 1013; // in hPa
    let precipitation = 0; // Precipitation probability in %
  
    // Adjust weather data based on the day of the week
    switch(day) {
      case 'Monday':
        humidity = 70;  // Higher humidity on Mondays
        break;
      case 'Wednesday':
        precipitation = 80;  // Higher chance of rain on Wednesdays
        break;
      case 'Friday':
        windSpeed = 12;  // Windy Fridays
        break;
      case 'Saturday':
      case 'Sunday':
        windSpeed = 4;   // Stable weather on weekends
        humidity = 60;   // Average humidity
        break;
      default:
        windSpeed = 5;   // Default wind speed for other days
        humidity = 50;   // Default humidity
        break;
    }
    
    // Return the adjusted weather data
    return {
      windSpeed: windSpeed,
      humidity: humidity,
      pressure: pressure,
      precipitation: precipitation
    };
  }
  
  // Function to convert UTC time to local time and format it
  function formatTime(utcTime) {
    const date = new Date(utcTime);
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    const localTime = date.toLocaleString('en-US', options);
    return localTime;
  }
  
  // Call the function initially to show the time, date, weather, and sunrise/sunset times immediately
  updateTime();
  
  // Set an interval to update the time every 1 second
  setInterval(updateTime, 1000);  // 1000 ms = 1 second
  
  


document.addEventListener('DOMContentLoaded', () => {
    // Function to create and append modal to the document
    function createModal() {
        // Create the modal div
        const modal = document.createElement('div');
        modal.id = 'image-modal';
        modal.style.display = 'none'; // Hidden by default
        modal.style.position = 'fixed';
        modal.style.zIndex = '1000';
        modal.style.left = '0';
        modal.style.top = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        modal.style.display = 'none'; // Hidden initially
        modal.style.animation = 'slideIn 0.5s ease-out'; // Animation for sliding
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';

        // Create the modal image element
        const modalImage = document.createElement('img');
        modalImage.id = 'modal-image';
        modalImage.style.maxWidth = '90%';
        modalImage.style.maxHeight = '80%';
        modalImage.style.objectFit = 'contain';
        modalImage.style.borderRadius = '10px';
        
        // Create close button
        const closeButton = document.createElement('span');
        closeButton.classList.add('close-btn');
        closeButton.innerHTML = '&times;';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '20px';
        closeButton.style.color = 'white';
        closeButton.style.fontSize = '30px';
        closeButton.style.fontWeight = 'bold';
        closeButton.style.cursor = 'pointer';

        // Append close button and modal image to modal
        modal.appendChild(closeButton);
        modal.appendChild(modalImage);
        
        // Append the modal to the body
        document.body.appendChild(modal);

        // Add event listener for closing the modal
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close modal if clicked outside the image
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Create the modal structure when the page loads
    createModal();

    // Get all the images with class 'tip-img'
    const images = document.querySelectorAll('.tip-img');

    // Add click event to each image to show it in the modal
    images.forEach(image => {
        image.addEventListener('click', () => {
            // Set the modal image source to the clicked image's source
            const modalImage = document.getElementById('modal-image');
            modalImage.src = image.src;

            // Show the modal
            const modal = document.getElementById('image-modal');
            modal.style.display = 'flex';
        });
    });

    // Add the CSS for the slide-in animation dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes slideIn {
            from {
                top: -100%;
            }
            to {
                top: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Function to dynamically add a new tip
function addTip(imageSrc, title, description) {
    const tipsContainer = document.querySelector('.tips');

    // Create the new tip element
    const newTip = document.createElement('div');
    newTip.classList.add('tip');

    // Create the image element
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.alt = title;

    // Create the heading element
    const heading = document.createElement('h3');
    heading.textContent = title;

    // Create the paragraph element
    const paragraph = document.createElement('p');
    paragraph.textContent = description;

    // Append the image, heading, and paragraph to the new tip
    newTip.appendChild(imgElement);
    newTip.appendChild(heading);
    newTip.appendChild(paragraph);

    // Append the new tip to the container
    tipsContainer.appendChild(newTip);
}

// Call the function to add new tips dynamically
document.addEventListener('DOMContentLoaded', () => {
    addTip(
        'https://www.snexplores.org/wp-content/uploads/2019/11/Eiffeltower_main.jpg', 
        'Nature', 
        'Explore local parks and nature reserves for a peaceful escape.'
    );


    // You can keep calling addTip() with different arguments to add more tips
});

//Gallery
document.addEventListener('DOMContentLoaded', () => {
    // Fullscreen Photo Viewer for Gallery
    const galleryImages = document.querySelectorAll('.gallery-container img');
    const modal = document.createElement('div');
    modal.id = 'photo-modal';
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    modal.style.overflowY = 'auto';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'flex-start';
    modal.style.zIndex = '1000';

    const modalImage = document.createElement('img');
    modalImage.style.width = 'auto';
    modalImage.style.height = '100%';
    modalImage.style.margin = 'auto';
    modalImage.style.display = 'block';

    const closeButton = document.createElement('span');
    closeButton.textContent = '×';
    closeButton.style.position = 'fixed';
    closeButton.style.top = '10px';
    closeButton.style.right = '20px';
    closeButton.style.fontSize = '30px';
    closeButton.style.color = '#fff';
    closeButton.style.cursor = 'pointer';

    modal.appendChild(modalImage);
    modal.appendChild(closeButton);
    document.body.appendChild(modal);

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            modalImage.src = image.src;
            modal.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


// JavaScript for Contact Page and Testimonials Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Contact Button Scroll to Contact Section
    const contactButton = document.querySelector('.contact-button');
    const contactSection = document.querySelector('.contact-section');

    contactButton.addEventListener('click', () => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Make Phone Number Clickable for Direct Call
    const phoneNumber = document.querySelector('.detail-item h3 + p');
    phoneNumber.addEventListener('click', () => {
        const telLink = document.createElement('a');
        telLink.href = `tel:${phoneNumber.textContent.trim()}`;
        telLink.click();
    });

    // Make Location Clickable to Open in Google Maps
    const locationElement = document.querySelector('.detail-item:nth-child(4) p');

    locationElement.addEventListener('click', () => {
        const locationQuery = locationElement.textContent.trim();
        if (locationQuery) {
            window.open(`https://www.google.com/maps?q=${encodeURIComponent(locationQuery)}`, '_blank');
        } else {
            alert('Location information is not available.');
        }
    });

    // Form Submission Handling
    const contactForm = document.querySelector('.message-form form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(contactForm);
        const formObject = Object.fromEntries(formData);

        // Validate email
        const email = formObject['Email Address'];
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert('Invalid email address. Please enter a valid Gmail address.');
            return;
        }

        alert(`Thank you, ${formObject['Your Name']}! Your message has been sent.`);
        contactForm.reset();
    });

    // Footer Subscribe Handling
    const subscribeButton = document.querySelector('.footer-content button');
    const emailInput = document.querySelector('.footer-content input[type="email"]');

    subscribeButton.addEventListener('click', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailInput.value && emailRegex.test(emailInput.value)) {
            alert(`Subscription successful for ${emailInput.value}`);
            emailInput.value = '';
        } else {
            alert('Invalid email address. Please enter a valid email.');
        }
    });

    // Animation Enhancements
    const animatedElements = document.querySelectorAll('[class*="animation"]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Testimonials: Highlight Selected Testimonial
    const testimonials = document.querySelectorAll('.testimonial');

    testimonials.forEach(testimonial => {
        testimonial.addEventListener('click', () => {
            testimonials.forEach(t => t.classList.remove('highlight'));
            testimonial.classList.add('highlight');

            // Add animation when selected
            testimonial.classList.add('animated');
            setTimeout(() => {
                testimonial.classList.remove('animated');
            }, 1000); // Animation duration in ms
        });
    });
});

