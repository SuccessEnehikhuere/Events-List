const ctx = document.getElementById('eventChart').getContext('2d')
const eventChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [620, 890, 790, 410, 1000, 490, 820, 390, 810, 610, 990, 600],
        backgroundColor: '#8576FF',
        barThickness: 24,
        maxBarThickness: 30,
        lineWidth: 0.5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          lineWidth: 1,
          drawOnChartArea: true,
        },
        ticks: {
          stepSize: 200,
          max: 1200,
        },
      },
      x: {
        grid: {
          lineWidth: 0.5,
          drawOnChartArea: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
})

//CAROUSEL
let currentSlide = 0
const totalSlides = document.querySelectorAll('.carousel-item').length
const dots = document.querySelectorAll('.dot')

// Function to show the current slide
function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item')

  // Ensure the index wraps around
  currentSlide = (index + totalSlides) % totalSlides // Wraps around if out of bounds
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`
  })

  // Update active dot
  dots.forEach((dot, i) => {
    dot.classList.remove('active')
    if (i === currentSlide) {
      dot.classList.add('active')
    }
  })
}

// Function to move to the next slide
function moveSlide(direction) {
  showSlide(currentSlide + direction)
}

// Function to move to a specific slide based on dot click
function moveToSlide(index) {
  showSlide(index)
}

// Auto-slide function
function autoSlide() {
  currentSlide++
  showSlide(currentSlide)
}

// Start auto-slide
const slideInterval = setInterval(autoSlide, 2000)

// Stop auto-slide on manual navigation
document.querySelector('.next').addEventListener('click', () => {
  clearInterval(slideInterval) // Stop auto-slide
  moveSlide(1) // Move to the next slide
})

document.querySelector('.prev').addEventListener('click', () => {
  clearInterval(slideInterval) // Stop auto-slide
  moveSlide(-1) // Move to the previous slide
})

// Add click event for dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(slideInterval) // Stop auto-slide
    moveToSlide(index) // Move to the clicked dot
  })
})

// Initial display
showSlide(currentSlide)

// EVENTS HISTORY
const placeholderData = [
  {
    eventName: 'Cloud Innovation Summit',
    date: '2024-10-15',
    speaker: 'Jane Doe',
    status: 'Completed',
  },
  {
    eventName: 'Blockchain Revolution Conference',
    date: '2024-11-05',
    speaker: 'Dr. Peter Smith',
    status: 'In Progress',
  },
  {
    eventName: 'AI in Healthcare Symposium',
    date: '2024-12-01',
    speaker: 'Dr. Aisha Malik',
    status: 'Completed',
  },
  {
    eventName: 'Future of Fintech Forum',
    date: '2024-10-25',
    speaker: 'John Lee',
    status: 'Completed',
  },
  {
    eventName: 'Data Analytics in Business',
    date: '2024-11-12',
    speaker: 'Rachel Moore',
    status: 'Completed',
  },
  {
    eventName: 'Sustainable Energy Expo',
    date: '2024-09-28',
    speaker: 'Prof. Alan Green',
    status: 'Completed',
  },
  {
    eventName: 'Web3 Interfaces Workshop',
    date: '2024-10-10',
    speaker: 'Kevin Adams',
    status: 'In Progress',
  },
  {
    eventName: 'Cybersecurity for Startups',
    date: '2024-11-19',
    speaker: 'Emily Zhang',
    status: 'Completed',
  },
  {
    eventName: 'Smart Cities Forum',
    date: '2024-10-18',
    speaker: 'Dr. Maria Hernandez',
    status: 'In Progress',
  },
  {
    eventName: 'Tech Safari Mixer',
    date: '2024-09-30',
    speaker: 'Guest Panel',
    status: 'In Progress',
  },
  {
    eventName: 'GreenTech Expo',
    date: '2024-11-22',
    speaker: 'David West',
    status: 'Completed',
  },
  {
    eventName: 'Quantum Computing Roundtable',
    date: '2024-12-15',
    speaker: 'Dr. Ellen Bishop',
    status: 'In Progress',
  },
  {
    eventName: 'Virtual Reality in Education',
    date: '2024-11-30',
    speaker: 'Sarah Lawson',
    status: 'Completed',
  },
  {
    eventName: 'Ethical AI Workshop',
    date: '2024-10-07',
    speaker: 'Dr. Victor Ochoa',
    status: 'In Progress',
  },
  {
    eventName: 'E-commerce & Retail Innovations',
    date: '2024-12-05',
    speaker: 'Michael Jordan',
    status: 'Completed',
  },
  {
    eventName: '5G Infrastructure Conference',
    date: '2024-11-03',
    speaker: 'Laura Chen',
    status: 'Completed',
  },
  {
    eventName: 'Digital Transformation Forum',
    date: '2024-10-21',
    speaker: 'Chris Williams',
    status: 'In Progress',
  },
  {
    eventName: 'Autonomous Vehicles Summit',
    date: '2024-12-09',
    speaker: 'Amanda Price',
    status: 'In Progress',
  },
  {
    eventName: 'Internet of Things Expo',
    date: '2024-10-12',
    speaker: 'Tom Harris',
    status: 'Completed',
  },
  {
    eventName: 'EdTech Startup Showcase',
    date: '2024-11-18',
    speaker: 'Olivia Bennett',
    status: 'In Progress',
  },
  {
    eventName: 'Biotech Innovations Forum',
    date: '2024-12-13',
    speaker: 'Dr. Linda Barrett',
    status: 'Completed',
  },
  {
    eventName: 'Space Exploration Symposium',
    date: '2024-10-29',
    speaker: 'Dr. Marcus Kane',
    status: 'Completed',
  },
  {
    eventName: 'Digital Banking Revolution',
    date: '2024-11-07',
    speaker: 'Elizabeth Carter',
    status: 'In Progress',
  },
  {
    eventName: 'AR/VR Innovations in Retail',
    date: '2024-12-20',
    speaker: 'Jim Matthews',
    status: 'Completed',
  },
  {
    eventName: 'Advanced Robotics Expo',
    date: '2024-11-11',
    speaker: 'Alice Ng',
    status: 'In Progress',
  },
  {
    eventName: 'Environmental Tech Innovations',
    date: '2024-12-27',
    speaker: 'Sarah Brown',
    status: 'Completed',
  },
  {
    eventName: 'Genomics & Health Symposium',
    date: '2024-12-06',
    speaker: 'Dr. Carlos Rivera',
    status: 'Completed',
  },
  {
    eventName: 'Next-Gen Networking Forum',
    date: '2024-11-09',
    speaker: 'George Daniels',
    status: 'In Progress',
  },
  {
    eventName: 'Future of Transportation Summit',
    date: '2024-12-29',
    speaker: 'Michelle King',
    status: 'Completed',
  },
  {
    eventName: 'Startup Incubation Bootcamp',
    date: '2024-10-05',
    speaker: 'Henry Scott',
    status: 'In Progress',
  },
]

// Function to render the table rows based on the placeholder data
let rowsPerPage = 10 // Default value is 10 rows per page
let currentPage = 1
let totalPages = Math.ceil(placeholderData.length / rowsPerPage)

function renderTableRows(page = 1) {
  tableBody.innerHTML = ''

  const start = (page - 1) * rowsPerPage
  const end = start + rowsPerPage
  const eventsToShow = placeholderData.slice(start, end)

  eventsToShow.forEach((event) => {
    const statusBadgeClass =
      event.status === 'Completed' ? 'badge-success' : 'badge-info'

    const row = document.createElement('tr')
    row.innerHTML = `
      <td class="event-name">${event.eventName}</td>
      <td>${event.date}</td>
      <td>${event.speaker}</td>
      <td>
        <ul class="status-list">
          <li><span class="badge ${statusBadgeClass}">${event.status}</span></li>
        </ul>
      </td>
    `

    // Add event listener to open modal when the event name is clicked
    row
      .querySelector('.event-name')
      .addEventListener('click', () => openModal(event))

    tableBody.appendChild(row)
  })

  updatePaginationDisplay()
}

function updatePaginationDisplay() {
  const paginationList = document.querySelector('.pagination-list')
  paginationList.innerHTML = ''

  for (let i = 1; i <= totalPages; i++) {
    const activeClass = i === currentPage ? 'active' : ''
    paginationList.insertAdjacentHTML(
      'beforeend',
      `<li class="pagination-item ${activeClass}" onclick="changePage(${i})">${i}</li>`
    )
  }
}

function changePage(page) {
  if (page >= 1 && page <= totalPages) {
    currentPage = page
    renderTableRows(currentPage)
  }
}

// Event listener for the rows per page selector
document.querySelector('.rows').addEventListener('change', (event) => {
  rowsPerPage = parseInt(event.target.value)
  totalPages = Math.ceil(placeholderData.length / rowsPerPage)
  currentPage = 1
  renderTableRows(currentPage)
})

// Add event listeners for previous and next buttons
document.querySelector('.pagination-prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--
    renderTableRows(currentPage)
  }
})

document.querySelector('.pagination-next').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++
    renderTableRows(currentPage)
  }
})

// Call the function to render the table rows when the page loads
document.addEventListener('DOMContentLoaded', () => {
  renderTableRows(currentPage)
})


// THEME TOGGLE
const darkModeToggle = document.getElementById('dark-mode-toggle')
const darkModeIcon = document.getElementById('dark-mode-icon')
const body = document.body

// Function to enable dark mode
const enableDarkMode = () => {
  body.classList.add('dark-mode')
  darkModeIcon.src = 'assets/icons/dark-mode-icon.svg' // Change to dark mode icon
  localStorage.setItem('darkMode', 'enabled') // Save preference to localStorage
}

// Function to disable dark mode
const disableDarkMode = () => {
  body.classList.remove('dark-mode')
  darkModeIcon.src = 'assets/icons/Base Switch.svg' // Change to light mode icon
  localStorage.setItem('darkMode', 'disabled') // Save preference to localStorage
}

// Check localStorage for dark mode preference on page load
if (localStorage.getItem('darkMode') === 'enabled') {
  enableDarkMode() // Enable dark mode if preference is set
} else {
  disableDarkMode() // Disable dark mode if no preference or preference is disabled
}

// Add event listener to toggle dark mode
darkModeToggle.addEventListener('click', (e) => {
  e.preventDefault() // Prevent default anchor behavior

  // Check if dark mode is currently enabled
  if (body.classList.contains('dark-mode')) {
    disableDarkMode() // Disable dark mode
  } else {
    enableDarkMode() // Enable dark mode
  }
})




// Function to hide search icon when typing
const searchInput = document.getElementById('searchInput')
const searchIcon = document.getElementById('searchIcon')

searchInput.addEventListener('input', () => {
  if (searchInput.value) {
    searchIcon.classList.add('hidden') // Hide icon when typing
  } else {
    searchIcon.classList.remove('hidden') // Show icon when input is empty
  }
})


//  hides the icon when the input is focused
searchInput.addEventListener('focus', () => {
  searchIcon.classList.add('hidden')
})

searchInput.addEventListener('blur', () => {
  if (!searchInput.value) {
    searchIcon.classList.remove('hidden')
  }
})



// MODAL
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal-close');
const tableBody = document.getElementById('events-table-body');
const backdrop = document.querySelector('.modal-backdrop'); // Move backdrop selector outside

// Function to open the modal
function openModal(eventData) {
  // Update modal content with the clicked event's details
  modal.querySelector('h3').innerText = eventData.eventName;
  modal.querySelector('.modal-header p').innerText = eventData.date;
  modal.querySelector('.modal-event-des').innerText = "Event Description";
  
  // Show the modal and backdrop
  modal.style.display = 'block';
  backdrop.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}

// Event listener to close modal when clicking outside of it
window.onclick = function (event) {
  // Check if the click is outside the modal or on the backdrop
  if (event.target === modal || event.target === backdrop) {
    closeModal();
  }
};

// Close modal when the close button is clicked
closeModalButton.addEventListener('click', closeModal);




// COLLAPSED SIDEBAR
document
  .getElementById('collapse-button')
  .addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('collapsed')

    // Select all the icons
    const icons = sidebar.querySelectorAll('nav ul li a img')

    // Change icon based on collapsed state
    if (sidebar.classList.contains('collapsed')) {
      icons.forEach((icon) => {
        switch (icon.alt) {
          case 'Company Logo':
            icon.src = 'assets/icons/Logo-collapsed.svg' // Collapsed icon for Home
            break
          case 'Home Icon':
            icon.src = 'assets/icons/Home-collapsed.svg' // Collapsed icon for Home
            break
          case 'Events Icon':
            icon.src = 'assets/icons/events-collapsed.svg' // Collapsed icon for Events
            break
          case 'Speakers Icon':
            icon.src = 'assets/icons/speakers-collapsed.svg' // Collapsed icon for Speakers
            break
          case 'Reports Icon':
            icon.src = 'assets/icons/reports-collapsed.svg' // Collapsed icon for Reports
            break
          case 'Notifications Icon':
            icon.src = 'assets/icons/notifications-collapsed.svg' // Collapsed icon for Notifications
            break
          case 'Messages Icon':
            icon.src = 'assets/icons/messages-collapsed.svg' // Collapsed icon for Messages
            break
          case 'Settings Icon':
            icon.src = 'assets/icons/settings-collapsed.svg' // Collapsed icon for Settings
            break
          case 'Collapse Icon':
            icon.src = 'assets/icons/double-chevron-right.svg' // Switch icon for collapsed state
            break
          default:
            break
        }
      })
    } else {
      // Switch back to original icons when expanded
      icons.forEach((icon) => {
        switch (icon.alt) {
          case 'Company Logo':
            icon.src = 'assets/images/Logo (3).svg' // Expanded icon for Home
            break
          case 'Home Icon':
            icon.src = 'assets/icons/home.svg' // Expanded icon for Home
            break
          case 'Events Icon':
            icon.src = 'assets/icons/solar_calendar-linear.svg' // Expanded icon for Events
            break
          case 'Speakers Icon':
            icon.src = 'assets/icons/solar_user-speak-rounded-linear.svg' // Expanded icon for Speakers
            break
          case 'Reports Icon':
            icon.src = 'assets/icons/solar_document-linear.svg' // Expanded icon for Reports
            break
          case 'Notifications Icon':
            icon.src = 'assets/icons/bell (1).svg' // Expanded icon for Notifications
            break
          case 'Messages Icon':
            icon.src = 'assets/icons/double-chat-bubble.svg' // Expanded icon for Messages
            break
          case 'Settings Icon':
            icon.src = 'assets/icons/settings-2.svg' // Expanded icon for Settings
            break
          case 'Collapse Icon':
            icon.src = 'assets/icons/double-chevron-left.svg' // Switch icon for expanded state
            break
          default:
            break
        }
      })
    }
  })





