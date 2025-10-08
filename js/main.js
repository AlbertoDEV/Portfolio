// Initialize the plugins
$(document).ready(function() {
  // One Page Nav
  if ($.fn.onePageNav) {
    $('#primary-menu').onePageNav({
      currentClass: 'current',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing'
    });
  }


  // Portfolio filtering
  if ($.fn.isotope) {
    var $grid = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('.portfolio-filters').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
      $('.portfolio-filters button').removeClass('active');
      $(this).addClass('active');
    });
  }

    // Video hover effect for portfolio
    const videoCards = document.querySelectorAll('.project-card-video');

    videoCards.forEach(card => {
        const video = card.querySelector('video');
        if (video) {
            card.addEventListener('mouseenter', () => {
                video.play();
            });

            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        }
    });

    // Scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay');
                if (delay) {
                    entry.target.style.transitionDelay = `${delay * 0.1}s`;
                }
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Collapsible menu toggle
    const toggleButton = document.getElementById('header-toggle-button');
    const siteHeader = document.getElementById('masthead');
    const siteContent = document.getElementById('cww-site-content');

    if (toggleButton && siteHeader && siteContent) {
        toggleButton.addEventListener('click', () => {
            siteHeader.classList.toggle('collapsed');
            siteContent.classList.toggle('collapsed');
        });
    }
});