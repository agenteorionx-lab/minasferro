/**
 * ==========================================================================
 * MINASFERRO - JAVASCRIPT PRINCIPAL (MAIN.JS)
 * Interatividades: Menu Mobile, FAQ Accordion, WhatsApp Generator e Smooth Scroll
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFaqAccordion();
  initSmoothScroll();
  initSolutionsCarousel();
  initCounterAnimation();
});

/**
 * 1. Controle do Menu Mobile
 */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

/**
 * 2. FAQ Accordion (8 Perguntas Estruturadas)
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-button');
    if (!button) return;

    button.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha todos os outros itens para manter elegância limpa
      faqItems.forEach(i => i.classList.remove('active'));

      // Se não estava ativo, abre
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * 3. Rolagem Suave com Compensação do Header Fixo
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  const headerHeight = 85;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * 4. Filtro do Catálogo de Peças
 */
function filterCatalog(category) {
  const cards = document.querySelectorAll('.piece-card');
  const buttons = document.querySelectorAll('.cat-btn');

  buttons.forEach(btn => {
    btn.classList.remove('active', 'bg-brand-navy', 'text-white');
    btn.classList.add('bg-white', 'text-steel-700', 'border', 'border-steel-200');
  });

  const activeBtn = document.querySelector(`.cat-btn[data-cat="${category}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active', 'bg-brand-navy', 'text-white');
    activeBtn.classList.remove('bg-white', 'text-steel-700', 'border');
  }

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-cat');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

/**
 * 5. Disparador Dinâmico de Cotação para WhatsApp
 * @param {string} categoryOrProduct Nome da solução ou item
 */
function cotarItem(categoryOrProduct) {
  const phone = '556933223312';
  const text = encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para ${categoryOrProduct} na Minasferro.`);
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

/**
 * 6. Carrossel de Soluções Especializadas
 * Suporta navegação por setas, arraste com mouse, toque mobile, autoplay e dots de paginação
 */
function initSolutionsCarousel() {
  const track = document.getElementById('solutions-carousel-track');
  const prevBtn = document.getElementById('solutions-carousel-prev');
  const nextBtn = document.getElementById('solutions-carousel-next');
  const dotsContainer = document.getElementById('solutions-carousel-dots');

  if (!track) return;

  const items = track.querySelectorAll('.carousel-item');
  if (!items.length) return;

  // Gerar os dots de paginação correspondentes
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    items.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Ir para solução ${idx + 1}`);
      dot.addEventListener('click', () => {
        scrollToIndex(idx);
      });
      dotsContainer.appendChild(dot);
    });
  }

  const dots = dotsContainer ? dotsContainer.querySelectorAll('.carousel-dot') : [];

  function getStepWidth() {
    const item = items[0];
    const gap = 24; // gap de 1.5rem = 24px
    return item.offsetWidth + gap;
  }

  function updateActiveDot() {
    if (!dots.length) return;
    const scrollLeft = track.scrollLeft;
    const step = getStepWidth();
    const activeIndex = Math.min(
      items.length - 1,
      Math.max(0, Math.round(scrollLeft / step))
    );

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });
  }

  function scrollToIndex(idx) {
    const step = getStepWidth();
    track.scrollTo({
      left: idx * step,
      behavior: 'smooth'
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const step = getStepWidth();
      if (track.scrollLeft <= 10) {
        // Se estiver no início, vai para o final
        track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: -step, behavior: 'smooth' });
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const step = getStepWidth();
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 15) {
        // Se estiver no final, retorna ao início com suavidade
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: step, behavior: 'smooth' });
      }
    });
  }

  track.addEventListener('scroll', () => {
    updateActiveDot();
  }, { passive: true });

  // Autoplay com pausa ao interagir
  let autoplayTimer = null;
  function startAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => {
      const step = getStepWidth();
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 20) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 4500);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);
  track.addEventListener('touchstart', stopAutoplay, { passive: true });
  track.addEventListener('touchend', startAutoplay, { passive: true });

  startAutoplay();

  // Arraste com o Mouse no Desktop
  let isDown = false;
  let startX = 0;
  let scrollLeftPos = 0;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.classList.add('is-dragging');
    startX = e.pageX - track.offsetLeft;
    scrollLeftPos = track.scrollLeft;
    stopAutoplay();
  });

  window.addEventListener('mouseup', () => {
    if (isDown) {
      isDown = false;
      track.classList.remove('is-dragging');
      startAutoplay();
    }
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeftPos - walk;
  });
}

/**
 * 7. Efeito de Contagem Gradual nos Números da Faixa de Autoridade
 */
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          if (isNaN(target)) return;

          const duration = 1600;
          const startTime = performance.now();

          function step(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Curva easeOutCubic: 1 - (1 - progress)^3
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);

            counter.textContent = current;

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              counter.textContent = target;
            }
          }

          requestAnimationFrame(step);
        });
      }
    });
  }, { threshold: 0.25 });

  const section = document.getElementById('faixa-metricas');
  if (section) {
    observer.observe(section);
  }
}
