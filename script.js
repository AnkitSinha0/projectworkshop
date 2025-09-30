
window.addEventListener("load", () => {
  gsap.from("#navbar", {
    y: -80,          
    opacity: 0,      
    duration: 1,     
    ease: "power3.out"
  });

  gsap.to("#iphoneTitle", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.5
  });

  gsap.to("#iphonePrice", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.8
  });

  gsap.to("#iphoneDate", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 1.1
  });
    gsap.to("#iphoneImg", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 1.1
  });

  
});

const video = document.getElementById('iphoneVideo');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  },
  {
    root: null, 
    threshold: 0.5, 
  }
);

observer.observe(video);
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  function toggleMenu() {
    mobileMenu.classList.toggle('right-0');
    mobileMenu.classList.toggle('right-[-100%]');
  }

  menuBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

