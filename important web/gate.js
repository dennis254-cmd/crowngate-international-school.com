// Responsive Navbar
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Modal Controls
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.style.display = 'block';
});
signupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  signupModal.style.display = 'block';
});
closeLogin.addEventListener('click', () => {
  loginModal.style.display = 'none';
});
closeSignup.addEventListener('click', () => {
  signupModal.style.display = 'none';
});
window.onclick = function(event) {
  if (event.target == loginModal) loginModal.style.display = "none";
  if (event.target == signupModal) signupModal.style.display = "none";
}

// Accessibility: High Contrast Toggle
const accessBtn = document.getElementById('accessBtn');
accessBtn.addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');
});

// Language Switcher (mock demo)
const langSelect = document.getElementById('langSelect');
langSelect.addEventListener('change', function() {
  alert('Language switched to ' + this.options[this.selectedIndex].text + ' (Demo only)');
});

// Search Form (Mock Handler)
document.getElementById('searchForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Search is a demo! No actual search will be performed.');
});

// Contact Form (Mock Handler)
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('contactStatus').textContent = "Thank you for contacting us! We'll get back to you soon.";
  this.reset();
});
document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('loginStatus').textContent = "Login successful (Demo).";
  setTimeout(() => {
    loginModal.style.display = 'none';
    document.getElementById('loginStatus').textContent = "";
    this.reset();
  }, 1200);
});
document.getElementById('signupForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('signupStatus').textContent = "Registration successful (Demo).";
  setTimeout(() => {
    signupModal.style.display = 'none';
    document.getElementById('signupStatus').textContent = "";
    this.reset();
  }, 1200);
});

// Hero Carousel (Home)
const slides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.getElementById('carouselDots');
let currentSlide = 0;
let heroInterval = null;

function showHeroSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
  });
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
  currentSlide = idx;
}
function nextHeroSlide() {
  showHeroSlide((currentSlide + 1) % slides.length);
}
function createHeroDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => showHeroSlide(i));
    dotsContainer.appendChild(dot);
  }
}
createHeroDots();
heroInterval = setInterval(nextHeroSlide, 4000);

// Gallery Carousel
const galleryImages = document.querySelectorAll("#galleryImages img");
const galleryCaption = document.getElementById("galleryCaption");
const captions = [
  "Kids learning",
  "Art class",
  "Outdoor activities",
  "Classroom"
];
let galleryIndex = 0;
function showGalleryImg(idx) {
  galleryImages.forEach((img, i) => {
    img.classList.toggle('active', i === idx);
  });
  galleryCaption.textContent = captions[idx];
  galleryIndex = idx;
}
document.getElementById('galleryPrev').addEventListener('click', () => {
  showGalleryImg((galleryIndex - 1 + galleryImages.length) % galleryImages.length);
});
document.getElementById('galleryNext').addEventListener('click', () => {
  showGalleryImg((galleryIndex + 1) % galleryImages.length);
});
setInterval(() => {
  showGalleryImg((galleryIndex + 1) % galleryImages.length);
}, 4500);
showGalleryImg(0);