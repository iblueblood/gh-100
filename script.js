// script.js — minimal interactivity for the landing
(function(){
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');

  if(toggle){
    toggle.addEventListener('click', ()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? '' : 'flex';
      // simple animation
      nav.classList.toggle('open');
    });

    // close nav when a link is clicked (mobile)
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
      if(window.innerWidth < 900){
        nav.style.display = '';
        toggle.setAttribute('aria-expanded','false');
      }
    }));

    // close on escape key
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape'){
        nav.style.display = '';
        toggle.setAttribute('aria-expanded','false');
      }
    });
  }

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        history.replaceState(null,'',this.getAttribute('href'));
      }
    });
  });
})();
