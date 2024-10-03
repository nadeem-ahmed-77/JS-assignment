function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = (hours >= 12) || false; // true for PM, false for AM
    if (ampm) {
      ampm = 'PM';
    } else {
      ampm = 'AM';
    }
      
    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hour is 0, display 12
  
    // Add leading zeros to minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    // Display the time
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
  
    // Get the current date and day of the week
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayOfWeek = days[now.getDay()];
    let day = now.getDate();
    let month = now.getMonth() + 1; // Months are 0-based
    let year = now.getFullYear();
  
    // Add leading zeros to day and month if necessary
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
  
    // Display the date and day
    document.getElementById('day').textContent = dayOfWeek;
    document.getElementById('date').textContent = `${day}-${month}-${year}`;
  }
  
  // Call the updateClock function every second
  setInterval(updateClock, 1000);
  
  // Initialize clock when the page loads
  updateClock();
  