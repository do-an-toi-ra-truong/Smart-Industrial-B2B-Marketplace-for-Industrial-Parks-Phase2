//MEGA-DANHMUC(index.html)
  function switchMegaCat(el) {
    var cat = el.dataset.cat;
    // Sidebar active
    document.querySelectorAll('.mgs-item').forEach(function (item) {
      item.classList.remove('active');
    });
    el.classList.add('active');
    // Switch right panel
    document.querySelectorAll('.mgc-panel').forEach(function (panel) {
      panel.classList.remove('active');
    });
    var target = document.querySelector('.mgc-panel[data-panel="' + cat + '"]');
    if (target) target.classList.add('active');
  }

// ===== TOP BUY PRODUCTS – Category Filter (index.html) =====
(function () {
  'use strict';

  var filterTabs = document.getElementById('tbpFilterTabs');
  var grid = document.getElementById('tbpGrid');
  if (!filterTabs || !grid) return;

  var cards = Array.from(grid.querySelectorAll('.tbp-card'));

  filterTabs.addEventListener('click', function (e) {
    var btn = e.target.closest('.tbp-tab');
    if (!btn) return;

    // Update active tab
    filterTabs.querySelectorAll('.tbp-tab').forEach(function (t) {
      t.classList.remove('active');
    });
    btn.classList.add('active');

    var selectedCat = btn.dataset.cat;

    // Filter cards with a subtle fade
    cards.forEach(function (card) {
      var cardCat = card.dataset.cat;
      if (selectedCat === 'all' || cardCat === selectedCat) {
        card.style.opacity = '0';
        card.classList.remove('tbp-hidden');
        // Stagger fade-in
        requestAnimationFrame(function () {
          setTimeout(function () { card.style.opacity = '1'; }, 60);
        });
      } else {
        card.style.opacity = '0';
        setTimeout(function () { card.classList.add('tbp-hidden'); }, 180);
      }
    });
  });

  // Add transition to all cards on load
  cards.forEach(function (card) {
    card.style.transition = 'opacity 0.22s ease';
  });
}());

// ===== NEWS & INSIGHTS – Hover effects are CSS-only; section is static HTML =====
// No additional JS needed for the base news section.
// The purecounter library (already loaded) auto-initialises .purecounter elements.