/* ========================
      CHART
======================== */
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

/* ========================
      CAROUSEL
======================== */
let currentSlide = 0
const totalSlides = document.querySelectorAll('.carousel-item').length
const dots = document.querySelectorAll('.dot')

// Function to show the current slide
function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item')
  currentSlide = (index + totalSlides) % totalSlides
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`
  })

  // Update active dot on carousel
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
  clearInterval(slideInterval)
  moveSlide(-1)
})

// Add click event for dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(slideInterval)
    moveToSlide(index)
  })
})

// Initial display
showSlide(currentSlide)

/* ========================
      EVENTS HISTORY
======================== */
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
let rowsPerPage = 10
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
    <td class="event-name" onclick="toggleDetails(this)">${event.eventName}</td>
      <td>${event.date}</td>
      <td>${event.speaker}</td>
      <td class=>
        <ul class="status-list">
          <li><span class="badge ${statusBadgeClass}">${event.status}</span></li>
        </ul>
      </td> `

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

document.querySelector('.rows').addEventListener('change', (event) => {
  rowsPerPage = parseInt(event.target.value)
  totalPages = Math.ceil(placeholderData.length / rowsPerPage)
  currentPage = 1
  renderTableRows(currentPage)
})

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

/* ======================================
     THEME TOGGLE DARK AND LIGHT MODE
===================================== */
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
  darkModeIcon.src = 'assets/icons/Base Switch.svg'
  localStorage.setItem('darkMode', 'disabled')
}

if (localStorage.getItem('darkMode') === 'enabled') {
  enableDarkMode()
} else {
  disableDarkMode()
}

darkModeToggle.addEventListener('click', (e) => {
  e.preventDefault()

  if (body.classList.contains('dark-mode')) {
    disableDarkMode()
  } else {
    enableDarkMode()
  }
})

/* ============================================
     FUNCTION TO HIDE SEARCH ICON WHEN TYPING
=============================================== */
const searchInput = document.getElementById('searchInput')
const searchIcon = document.getElementById('searchIcon')

searchInput.addEventListener('input', () => {
  if (searchInput.value) {
    searchIcon.classList.add('hidden')
  } else {
    searchIcon.classList.remove('hidden')
  }
})

searchInput.addEventListener('focus', () => {
  searchIcon.classList.add('hidden')
})

searchInput.addEventListener('blur', () => {
  if (!searchInput.value) {
    searchIcon.classList.remove('hidden')
  }
})

/* ==========
    MODAL
============= */

const modal = document.querySelector('.modal')
const closeModalButton = document.querySelector('.modal-close')
const tableBody = document.getElementById('events-table-body')
const backdrop = document.querySelector('.modal-backdrop')

function openModal(eventData) {
  modal.querySelector('h3').innerText = eventData.eventName
  modal.querySelector('.modal-header p').innerText = eventData.date
  modal.querySelector('.modal-event-des').innerText = 'Event Description'

  modal.style.display = 'block'
  backdrop.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none'
  backdrop.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target === modal || event.target === backdrop) {
    closeModal()
  }
}

// Close modal when the close button is clicked
closeModalButton.addEventListener('click', closeModal)

/* =================
   COLLAPSED SIDEBAR
===================== */
document
  .getElementById('collapse-button')
  .addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('collapsed')

    const icons = sidebar.querySelectorAll('nav ul li a img')

    // Change icon based on collapsed state
    if (sidebar.classList.contains('collapsed')) {
      icons.forEach((icon) => {
        switch (icon.alt) {
          case 'Company Logo':
            icon.src = 'assets/icons/Logo-collapsed.svg'
            break
          case 'Home Icon':
            icon.src = 'assets/icons/Home-collapsed.svg'
            break
          case 'Events Icon':
            icon.src = 'assets/icons/events-collapsed.svg'
            break
          case 'Speakers Icon':
            icon.src = 'assets/icons/speakers-collapsed.svg'
            break
          case 'Reports Icon':
            icon.src = 'assets/icons/reports-collapsed.svg'
            break
          case 'Notifications Icon':
            icon.src = 'assets/icons/notifications-collapsed.svg'
            break
          case 'Messages Icon':
            icon.src = 'assets/icons/messages-collapsed.svg'
            break
          case 'Settings Icon':
            icon.src = 'assets/icons/settings-collapsed.svg'
            break
          case 'Collapse Icon':
            icon.src = 'assets/icons/double-chevron-right.svg'
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
            icon.src = 'assets/images/Logo (3).svg'
            break
          case 'Home Icon':
            icon.src = 'assets/icons/home.svg'
            break
          case 'Events Icon':
            icon.src = 'assets/icons/solar_calendar-linear.svg'
            break
          case 'Speakers Icon':
            icon.src = 'assets/icons/solar_user-speak-rounded-linear.svg'
            break
          case 'Reports Icon':
            icon.src = 'assets/icons/solar_document-linear.svg'
            break
          case 'Notifications Icon':
            icon.src = 'assets/icons/bell (1).svg'
            break
          case 'Messages Icon':
            icon.src = 'assets/icons/double-chat-bubble.svg'
            break
          case 'Settings Icon':
            icon.src = 'assets/icons/settings-2.svg'
            break
          case 'Collapse Icon':
            icon.src = 'assets/icons/double-chevron-left.svg'
            break
          default:
            break
        }
      })
    }
  })

/* =================
EVENT LIST ON MOBILE
===================== */
let eventCurrentPage = 1
let eventRowsPerPage = 10
let eventTotalPages = Math.ceil(placeholderData.length / eventRowsPerPage)

function renderEventList() {
  const eventList = document.querySelector('.event-list')
  eventList.innerHTML = ''

  const startIndex = (eventCurrentPage - 1) * eventRowsPerPage
  const endIndex = Math.min(
    startIndex + eventRowsPerPage,
    placeholderData.length
  )

  const currentEvents = placeholderData.slice(startIndex, endIndex)

  let currentlyOpen = null

  currentEvents.forEach((event) => {
    const BadgeClass =
      event.status === 'Completed' ? 'badge-Success' : 'badge-Info'

    const listItem = document.createElement('li')
    listItem.innerHTML = `
      <div class="mobile-event-list">
        <div class="mobile-event-name">
          <img src="assets/icons/chevron-right.svg" alt="Event Image" class="event-icon" /> 
          <p class="speaker-names">${event.eventName}</p>
        </div> 
        <div class="mobile-event-status">
          <span id="mobile-status" class="${BadgeClass}">${event.status}</span>
        </div>
      </div>
      <div class="mobile-event-speaker-date">
        <span>${event.speaker}</span>
        <span>${event.date}</span>
      </div>
    `

    eventList.appendChild(listItem)

    const eventIcon = listItem.querySelector('.event-icon')
    const speakerDate = listItem.querySelector('.mobile-event-speaker-date')

    listItem
      .querySelector('.speaker-names')
      .addEventListener('click', () => openModal(event))

    eventIcon.addEventListener('click', () => {
      if (currentlyOpen && currentlyOpen !== listItem) {
        const openIcon = currentlyOpen.querySelector('.event-icon')
        const openSpeakerDate = currentlyOpen.querySelector(
          '.mobile-event-speaker-date'
        )
        const openListItem = currentlyOpen.querySelector('.mobile-event-list')

        openSpeakerDate.style.display = 'none'
        openIcon.src = 'assets/icons/chevron-right.svg'
        openListItem.classList.remove('active-background')
      }

      // Toggle the clicked event's details
      const isOpen = speakerDate.style.display === 'flex'
      speakerDate.style.display = isOpen ? 'none' : 'flex' 
      eventIcon.src = isOpen
        ? 'assets/icons/chevron-right.svg'
        : 'assets/icons/chevron-down.svg' 

      if (isOpen) {
        listItem.classList.remove('active-background') 
      } else {
        listItem.classList.add('active-background') 
      }

      currentlyOpen = isOpen ? null : listItem
    })
  })

  updateEventPaginationDisplay(); 
}

// New function for updating pagination display for event list
function updateEventPaginationDisplay() {
  const paginationList = document.querySelector('.pagination-list')
  paginationList.innerHTML = '' // Clear existing pagination

  eventTotalPages = Math.ceil(placeholderData.length / eventRowsPerPage)

  for (let i = 1; i <= eventTotalPages; i++) {
    const activeClass = i === eventCurrentPage ? 'active' : ''
    paginationList.insertAdjacentHTML(
      'beforeend',
      `<li class="pagination-item ${activeClass}" onclick="eventChangePage(${i})">${i}</li>`
    )
  }
}

function eventChangePage(page) {
  if (page >= 1 && page <= eventTotalPages) {
    eventCurrentPage = page
    renderEventList() 
  }
}

document.querySelector('.rows').addEventListener('change', (event) => {
  eventRowsPerPage = parseInt(event.target.value)
  eventTotalPages = Math.ceil(placeholderData.length / eventRowsPerPage)
  eventCurrentPage = 1 
  renderEventList();
})

document.querySelector('.pagination-prev').addEventListener('click', () => {
  if (eventCurrentPage > 1) {
    eventCurrentPage--
    renderEventList() 
  }
})

document.querySelector('.pagination-next').addEventListener('click', () => {
  if (eventCurrentPage < eventTotalPages) {
    eventCurrentPage++
    renderEventList() 
  }
})

renderEventList(); 

document.addEventListener('DOMContentLoaded', () => {
  renderEventList()
});


/* ==============
MOBILE SIDEBAR
================= */
const hamburgerToggle = document.getElementById('hamburger-toggle')
const mobileSidebar = document.querySelector('.mobile-sidebar')
const sidebarCloseButton = document.querySelector('.mobile-sidebar-close')

hamburgerToggle.addEventListener('click', () => {
  mobileSidebar.classList.toggle('show-sidebar')
  if (mobileSidebar.classList.contains('show-sidebar')) {
    mobileSidebar.style.display = 'flex'
  } else {
    mobileSidebar.style.display = 'none'
  }
})

sidebarCloseButton.addEventListener('click', () => {
  mobileSidebar.classList.remove('show-sidebar')
  mobileSidebar.style.display = 'none'
})

//dark mode for the mobile sidebar
const mobiledarkModeToggle = document.getElementById('mobile-dark-mode-toggle')
const mobiledarkModeIcon = document.getElementById('mobile-dark-mode-icon')
const pageBody = document.body 

// Function to enable dark mode
const enableMobileDarkMode = () => {
  pageBody.classList.add('mobile-dark-mode') 
  mobiledarkModeIcon.src = 'assets/icons/dark-mode-icon.svg'
  localStorage.setItem('mobileDarkMode', 'enabled')
}

// Function to disable dark mode
const disableMobileDarkMode = () => {
  pageBody.classList.remove('mobile-dark-mode') 
  mobiledarkModeIcon.src = 'assets/icons/Base Switch.svg'
  localStorage.setItem('mobileDarkMode', 'disabled')
}

if (localStorage.getItem('mobileDarkMode') === 'enabled') {
  enableMobileDarkMode()
} else {
  disableMobileDarkMode()
}

mobiledarkModeToggle.addEventListener('click', (e) => {
  e.preventDefault()

  if (pageBody.classList.contains('mobile-dark-mode')) {
    disableMobileDarkMode()
  } else {
    enableMobileDarkMode()
  }
})

/* ========================
TABLE FILTERING AND SORTING
============================ */
let filteredData = [...placeholderData]

// filtering by search input
document.querySelector('#searchInput').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase()
  filteredData = placeholderData.filter((event) =>
    event.eventName.toLowerCase().includes(searchTerm)
  )
  updatePaginationAndRender(); 
})

// filtering by date
document
  .querySelector('[aria-label="Filter by Date"]')
  .addEventListener('change', function () {
    const sortBy = this.value
    if (sortBy === '1') {
      filteredData = [...placeholderData].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      )
    } else if (sortBy === '2') {
      filteredData = [...placeholderData].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      )
    }
    updatePaginationAndRender();
  })

//  filtering by status
document
  .querySelector('[aria-label="Filter by Status"]')
  .addEventListener('change', function () {
    const statusFilter = this.value
    if (statusFilter === '1') {
      filteredData = placeholderData.filter(
        (event) => event.status === 'Completed'
      )
    } else if (statusFilter === '2') {
      filteredData = placeholderData.filter(
        (event) => event.status === 'In Progress'
      )
    }
    updatePaginationAndRender();
  })

// filtering by sorting the newest
document
  .querySelector('.sort-group select')
  .addEventListener('change', function () {
    const sortBy = this.value
    if (sortBy === '1') {
      filteredData = [...placeholderData].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      ) // Oldest first
    } else {
      filteredData = [...placeholderData].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      ) // Newest first
    }
    updatePaginationAndRender();
  })

function updatePaginationAndRender() {
  totalPages = Math.ceil(filteredData.length / rowsPerPage)
  if (currentPage > totalPages) {
    currentPage = totalPages
  }

  updatePaginationDisplay();
  // Render the filtered rows with pagination
  renderFilteredRows(filteredData);
}

//filtering by name
function populateSpeakerDropdown() {
  const speakerDropdown = document.getElementById('speakerFilter')
  const speakers = new Set(placeholderData.map((event) => event.speaker))

  const allOption = document.createElement('option')
  allOption.value = '' 
  allOption.textContent = 'All Speakers'
  speakerDropdown.appendChild(allOption)

  // Populate the dropdown
  speakers.forEach((speaker) => {
    const option = document.createElement('option')
    option.value = speaker
    option.textContent = speaker
    speakerDropdown.appendChild(option)
  })
}

// Function to filter events based on the selected speaker
function filterBySpeaker(speaker) {
  if (speaker) {
    return placeholderData.filter((event) => event.speaker === speaker)
  }
  return placeholderData;
}

// Event listener for the speaker dropdown change
document
  .getElementById('speakerFilter')
  .addEventListener('change', function () {
    const selectedSpeaker = this.value

    const filteredEvents = filterBySpeaker(selectedSpeaker);
    totalPages = Math.ceil(filteredEvents.length / rowsPerPage)

    if (currentPage > totalPages) {
      currentPage = totalPages
    }

    // Update pagination display
    updatePaginationDisplay()

    renderFilteredRows(filteredEvents);
  })

// Call the function to populate the speaker dropdown when the page loads
document.addEventListener('DOMContentLoaded', () => {
  populateSpeakerDropdown();
})

// Re-rendering the table with filtered/sorted data
function renderFilteredRows(filteredData) {
  const start = (currentPage - 1) * rowsPerPage
  const end = start + rowsPerPage
  const eventsToShow = filteredData.slice(start, end)

  tableBody.innerHTML = ''
  eventsToShow.forEach((event) => {
    const statusBadgeClass =
      event.status === 'Completed' ? 'badge-success' : 'badge-info'
    const row = document.createElement('tr')
    row.innerHTML = `
      <td class="event-name" onclick="toggleDetails(this)">${event.eventName}</td>
      <td>${event.date}</td>
      <td>${event.speaker}</td>
      <td>
        <ul class="status-list">
          <li><span class="badge ${statusBadgeClass}">${event.status}</span></li>
        </ul>
      </td>
    `
    tableBody.appendChild(row)
  })
}
