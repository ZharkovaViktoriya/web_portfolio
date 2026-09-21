/* =========================================================
   PORTFOLIO — VIKTORIA ZHARKOVA
   Vanilla JS (ES6+)
   ========================================================= */

/* ---------------------------------------------------------
   1. TRANSLATIONS
   --------------------------------------------------------- */
   const translations = {
    ru: {
      'nav.home': 'Главная',
      'nav.about': 'Обо мне',
      'nav.experience': 'Опыт',
      'nav.projects': 'Проекты',
      'nav.skills': 'Навыки',
      'nav.contact': 'Контакты',
  
      'hero.eyebrow': '✦ Привет! ✦',
      'hero.portfolio': 'ПОРТФОЛИО / 2026',
      'hero.role': 'Веб-Дизайнер',
      'hero.handNote': 'и не только ↓',
      'hero.tagline': 'Создаю визуальные идеи, интерфейсы и цифровые проекты',
      'hero.viewProjects': 'Посмотреть проекты',
      'hero.contact': 'Связаться со мной',
  
      'about.title': 'Обо мне',
      'about.marker': 'About me →',
      'about.markerLabel': 'Обо мне',
      'about.cardTitle': 'Прикладная информатика в дизайне',
      'about.cardMeta': '4 курс · 2023—2027',
      'about.photoCaption': 'Привет, Я Вика :)',
      'about.p1': 'Я студентка 4 курса СПбГУПТД, изучаю дизайн и цифровые технологии на программе «Прикладная информатика в дизайне».',
      'about.p2': 'Работаю на стыке дизайна и разработки: создаю интерфейсы, веб-сайты, визуальные концепции, брендинг, логотипы, 3D-модели и цифровые проекты. Мне особенно интересно 3D-направление, которое я постепенно развиваю через учебные и самостоятельные проекты.',
      'about.p3': 'В работе ценю системность, внимание к деталям и желание довести результат до действительно качественного состояния.',
      'about.fact1': 'Системность',
      'about.fact2': 'Внимание к деталям',
      'about.fact3': 'Постоянное развитие',
      'about.fact4': 'Трудолюбие',
  
      'exp.title': 'Опыт',
      'exp.marker': '2025 — 2026 →',
      
      'exp.roleLabel': 'Роль:',
      'exp.toolsLabel': 'Инструменты:',
      'exp.skildo.sub': 'Веб-приложение',
      'exp.skildo.role': 'Организатор, визуализатор',
      'exp.skildo.desc': 'Концепция веб-приложения для критического мышления и интерактивного обучения: структура, экраны, адаптивная вёрстка, user flow, task flow, screen maps, оформление для App Store и рекламный видеоролик.',
      'exp.shift': 'Смена',
      'exp.shift.sub': 'Концепция 3D-игры',
      'exp.shift.role': 'Автор проекта',
      'exp.shift.desc': 'Создание концепции 3D-игры: разработка 3D-моделей персонажей и локаций, эскизы, а также интерфейсы.',
      'exp.pilo': 'Пило',
      'exp.pilo.sub': 'Концепция робота-трекера для таблеток',
      'exp.pilo.role': 'Автор проекта',
      'exp.pilo.desc': 'Разработка концепции, 3D-модели, прототипа и интерфейсов. Анализ аналогов.',
      'exp.print': 'Студия 3Д-печати',
      'exp.print.sub': 'Веб-сайт для студии 3D-печати',
      'exp.print.role': 'Разработчик',
      'exp.print.desc': 'Создание интерактивного прототипа, структуры сайта, интерфейса и финального сайта на HTML/CSS/JS.',
      'exp.tommy.sub': 'Концепция интерактивной выставки',
      'exp.tommy.role': 'Визуализатор',
      'exp.tommy.desc': 'Разработка логотипа, landing page, афиш, баннеров, 3D-пространства выставки, рекламного ролика и дизайна билета.',
  
      'projects.title': 'Проекты',
      'projects.marker': 'Последнее →',
      'badge.web': 'WEB APP',
      'badge.3d': '3D',
      'badge.product': 'PRODUCT',
      'badge.brand': 'BRANDING',
      'card.more': 'Смотреть →',

      'card.shift': 'Смена',
      'card.pilo': 'Пило',
      'card.print': 'Студия 3Д-печати',

      'card.skildo.desc': 'Веб-приложение для критического мышления и интерактивного обучения.',
      'card.shift.desc': '3D-игра: персонажи, локации и интерфейсы.',
      'card.pilo.desc': 'Концепт робота-трекера для таблеток.',
      'card.print.desc': 'Веб-сайт для студии 3D-печати: прототип и финальная реализация на HTML/CSS/JS.',
      'card.tommy.desc': 'Концепция интерактивной выставки: айдентика, 3D-пространство, афиши.',
  
      'filter.all': 'ВСЕ',
      'filter.web': 'WEB',
      'filter.ui': 'UI',
      'filter.3d': '3D',
      'filter.branding': 'БРЕНДИНГ',
      'filter.graphic': 'ГРАФИКА',
  
      'edu.title': 'Образование',
      'edu.marker': 'Образование →',
      'edu.uni': 'СПБГУПТД',
      'edu.uniFull': 'Санкт-Петербургский государственный университет промышленных технологий и дизайна',
      'edu.faculty': 'ЦАТ',
      'edu.program': '«Прикладная информатика в дизайне»',
      'edu.current': 'Сейчас: 4 курс',
  
      'skills.title': 'Навыки',
      'skills.marker': 'Skills →',
      'skills.design': 'DESIGN',
      'skills.tools': 'TOOLS',
      'skills.dev': 'DEVELOPMENT',
      'languages.title': 'LANGUAGES',
      'lang.russian': 'Russian',
      'lang.native': 'Native',
  
      'contact.title': 'Связаться со мной',
      'contact.marker': 'Let\'s talk →',
      'contact.heading': 'Есть идея? Давай обсудим.',
      'contact.sub': 'Открыта к коллаборациям, стажировкам и интересным проектам в дизайне.',
      'contact.mailBtn': 'Написать на почту',
      'contact.tgBtn': 'Открыть Telegram',
      'contact.copyBtn': 'Скопировать email',
      'contact.emailLabel': 'Email',
      'contact.tgLabel': 'Telegram',
      'contact.note': 'Лучше писать в Telegram ☺',
  
      'footer.made': 'Создано с вниманием к деталям.',
  
      'toast.copied': '✓ Email copied',
      'modal.role': 'Роль',
      'modal.tasks': 'Задачи',
      'modal.tools': 'Инструменты',
      'modal.tags': 'Теги',
      'modal.close': 'Закрыть',
      'back.top': 'Наверх'
    },
  
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',
  
      'hero.eyebrow': '✦ Designer portfolio ✦',
      'hero.portfolio': 'PORTFOLIO / 2026',
      'hero.role': 'Web Designer',
      'hero.handNote': 'creating ideas ↓',
      'hero.tagline': 'Creating visual ideas, interfaces and digital experiences.',
      'hero.viewProjects': 'View projects',
      'hero.contact': 'Contact me',
  
      'about.title': 'About Me',
      'about.marker': 'About me →',
      'about.markerLabel': 'About',
      'about.cardTitle': 'Applied Informatics in Design',
      'about.cardMeta': '4th year · 2023—2027',
      'about.photoCaption': 'HELLO, I\'M VICTORIA :)',
      'about.p1': 'I\'m a 4th-year student at SPbSUITD, studying design and digital technologies in the "Applied Informatics in Design" program.',
      'about.p2': 'I work at the intersection of design and development: interfaces, websites, visual concepts, branding, logos, 3D models and digital projects. I\'m especially drawn to 3D, which I\'m developing through academic and personal projects.',
      'about.p3': 'In my work I value systematic thinking, attention to detail and the drive to bring the result to a genuinely high-quality state.',
      'about.fact1': 'Systematic',
      'about.fact2': 'Detail-oriented',
      'about.fact3': 'Always learning',
      'about.fact4': 'Diligent',
  
      'exp.title': 'Experience',
      'exp.marker': 'Selected experience →',
      'exp.roleLabel': 'Role:',
      'exp.toolsLabel': 'Tools:',
      'exp.skildo.sub': 'Web application',
      'exp.skildo.role': 'Organizer, Visualizer',
      'exp.skildo.desc': 'Concept for a web application for critical thinking and interactive learning: structure, screens, responsive layouts, user flow, task flow, screen maps, App Store visuals and a promo video.',
      'exp.shift': 'Shift',
      'exp.shift.sub': '3D game concept',
      'exp.shift.role': 'Solo author',
      'exp.shift.desc': 'Creating a 3D game concept: 3D models of characters and environments, sketches and interfaces.',
      'exp.pilo': 'Pilo',
      'exp.pilo.sub': 'Concept of a medication tracker robot',
      'exp.pilo.role': 'Solo author',
      'exp.pilo.desc': 'Concept development, 3D model, prototype and interfaces. Competitive analysis.',
      'exp.print': '3D Print Studio',
      'exp.print.sub': 'Website for a 3D printing studio',
      'exp.print.role': 'Developer',
      'exp.print.desc': 'Interactive prototype, site structure, UI and a final website built with HTML/CSS/JS.',
      'exp.tommy.sub': 'Interactive exhibition concept',
      'exp.tommy.role': 'Visualizer',
      'exp.tommy.desc': 'Logo, landing page, posters, banners, 3D exhibition space, promo video and ticket design.',
  
      'projects.title': 'Selected Projects',
      'projects.marker': '2025 — 2026 →',
      'badge.web': 'WEB APP',
      'badge.3d': '3D',
      'badge.product': 'PRODUCT',
      'badge.brand': 'BRANDING',
      'card.more': 'View →',
      'card.shift': 'Shift',
      'card.pilo': 'Pilo',
      'card.print': '3D Print Studio',
      'card.skildo.desc': 'Web application for critical thinking and interactive learning.',
      'card.shift.desc': '3D game: characters, environments and interfaces.',
      'card.pilo.desc': 'Concept of a medication tracker robot.',
      'card.print.desc': 'Website for a 3D printing studio: prototype and final HTML/CSS/JS build.',
      'card.tommy.desc': 'Interactive exhibition concept: identity, 3D space, posters.',
  
      'filter.all': 'ALL',
      'filter.web': 'WEB',
      'filter.ui': 'UI',
      'filter.3d': '3D',
      'filter.branding': 'BRANDING',
      'filter.graphic': 'GRAPHIC',
  
      'edu.title': 'Education',
      'edu.marker': 'Education →',
      'edu.uni': 'SPbSUITD',
      'edu.uniFull': 'St. Petersburg State University of Industrial Technologies and Design',
      'edu.faculty': 'IA&CT',
      'edu.program': '"Applied Informatics in Design"',
      'edu.current': 'Currently: 4th year',
  
      'skills.title': 'Skills',
      'skills.marker': 'Skills →',
      'skills.design': 'DESIGN',
      'skills.tools': 'TOOLS',
      'skills.dev': 'DEVELOPMENT',
      'languages.title': 'LANGUAGES',
      'lang.russian': 'Russian',
      'lang.native': 'Native',
  
      'contact.title': 'Contact Me',
      'contact.marker': 'Let\'s talk →',
      'contact.heading': 'Got an idea? Let\'s talk.',
      'contact.sub': 'Open to collaborations, internships and interesting design projects.',
      'contact.mailBtn': 'Send an email',
      'contact.tgBtn': 'Open Telegram',
      'contact.copyBtn': 'Copy email',
      'contact.emailLabel': 'Email',
      'contact.tgLabel': 'Telegram',
      'contact.note': 'Better to write on Telegram ☺',
  
      'footer.made': 'Designed & built with attention to detail.',
  
      'toast.copied': '✓ Email copied',
      'modal.role': 'Role',
      'modal.tasks': 'Tasks',
      'modal.tools': 'Tools',
      'modal.tags': 'Tags',
      'modal.close': 'Close',
      'back.top': 'Back to top'
    }
  };
  
  /* ---------------------------------------------------------
     2. PROJECT DATA
     --------------------------------------------------------- */
  const projectsData = {
    skildo: {
      year: '2026',
      image: 'https://picsum.photos/seed/skildo/1200/800',
      categories: ['web', 'ui'],
      tags: ['Web Design', 'UI Design', 'UX', 'Motion', 'App Design'],
      tools: ['Figma', 'Adobe After Effects'],
      ru: {
        title: 'SKILDO',
        subtitle: 'Веб-приложение',
        description: 'Веб-приложение для критического мышления и интерактивного обучения.',
        role: 'Организатор, визуализатор',
        tasks: [
          'Создание концепции веб-приложения',
          'Проектирование структуры и экранов',
          'Адаптивная вёрстка и проработка user flow',
          'Task flow и screen maps',
          'Оформление App Store',
          'Разработка рекламного видеоролика'
        ]
      },
      en: {
        title: 'SKILDO',
        subtitle: 'Web application',
        description: 'Web application for critical thinking and interactive learning.',
        role: 'Organizer / Visualizer',
        tasks: [
          'Concept development',
          'Structure and screen design',
          'Responsive layouts and user flow',
          'Task flow and screen maps',
          'App Store visuals',
          'Promo video production'
        ]
      }
    },
    shift: {
      year: '2026',
      image: 'https://picsum.photos/seed/shift/1200/800',
      categories: ['3d', 'graphic'],
      tags: ['3D', 'Game Design', 'Character Design', 'UI', 'Concept'],
      tools: ['Figma', 'Blender', 'Photoshop'],
      ru: {
        title: 'SHIFT',
        subtitle: 'Концепция 3D-игры «Смена»',
        description: '3D-игра с проработанными персонажами и окружением.',
        role: 'Автор проекта',
        tasks: [
          'Создание концепции игры',
          'Разработка 3D-моделей персонажей',
          'Разработка локаций',
          'Создание эскизов',
          'Разработка интерфейсов'
        ]
      },
      en: {
        title: 'SHIFT',
        subtitle: '3D game concept',
        description: '3D game concept with character and environment design.',
        role: 'Solo designer',
        tasks: [
          'Game concept development',
          '3D character models',
          'Environment design',
          'Sketches',
          'UI design'
        ]
      }
    },
    pilo: {
      year: '2026',
      image: 'https://picsum.photos/seed/pilo/1200/800',
      categories: ['3d', 'ui'],
      tags: ['3D', 'Product Design', 'UI', 'Concept', 'Prototyping'],
      tools: ['Figma', 'Blender', 'Illustrator'],
      ru: {
        title: 'PILO',
        subtitle: 'Концепция робота-трекера для таблеток',
        description: 'Концепт робота-трекера для напоминаний о приёме лекарств.',
        role: 'Автор проекта',
        tasks: [
          'Создание концепции',
          'Разработка 3D-модели',
          'Разработка прототипа',
          'Разработка интерфейсов',
          'Анализ аналогов'
        ]
      },
      en: {
        title: 'PILO',
        subtitle: 'Medication tracker robot',
        description: 'Concept of a robot tracker for medication reminders.',
        role: 'Solo designer',
        tasks: [
          'Concept development',
          '3D model',
          'Prototype',
          'Interfaces',
          'Competitive analysis'
        ]
      }
    },
    print: {
      year: '2025',
      image: 'https://picsum.photos/seed/3dprint/1200/800',
      categories: ['web', 'ui', 'graphic'],
      tags: ['Web Design', 'Frontend', 'UI', 'HTML', 'CSS', 'JavaScript'],
      tools: ['HTML', 'CSS', 'JavaScript', 'Figma'],
      ru: {
        title: '3D PRINT STUDIO',
        subtitle: 'Веб-сайт для студии 3D-печати',
        description: 'Веб-сайт для студии 3D-печати: интерактивный прототип и финальная реализация.',
        role: 'Разработчик',
        tasks: [
          'Создание интерактивного прототипа',
          'Разработка структуры сайта',
          'Разработка интерфейса',
          'Создание сайта на HTML/CSS/JS'
        ]
      },
      en: {
        title: '3D PRINT STUDIO',
        subtitle: 'Website for a 3D printing studio',
        description: 'Website for a 3D printing studio: interactive prototype and final build.',
        role: 'Developer',
        tasks: [
          'Interactive prototype',
          'Site structure',
          'Interface design',
          'HTML/CSS/JS implementation'
        ]
      }
    },
    tommy: {
      year: '2025',
      image: 'https://picsum.photos/seed/tommy/1200/800',
      categories: ['branding', 'graphic'],
      tags: ['Branding', '3D', 'Graphic Design', 'Exhibition', 'Visual Design'],
      tools: ['Figma', 'Blender'],
      ru: {
        title: 'TOMMY HILFIGER',
        subtitle: 'Концепция интерактивной выставки',
        description: 'Интерактивная выставка для бренда Tommy Hilfiger.',
        role: 'Визуализатор',
        tasks: [
          'Разработка логотипа',
          'Landing page',
          'Афиши и баннеры',
          '3D-разработка выставочного пространства',
          'Рекламный ролик',
          'Дизайн билета'
        ]
      },
      en: {
        title: 'TOMMY HILFIGER',
        subtitle: 'Interactive exhibition concept',
        description: 'Interactive exhibition concept for Tommy Hilfiger.',
        role: 'Visualizer',
        tasks: [
          'Logo design',
          'Landing page',
          'Posters & banners',
          '3D exhibition space',
          'Promo video',
          'Ticket design'
        ]
      }
    }
  };
  
  /* ---------------------------------------------------------
     3. STATE
     --------------------------------------------------------- */
  const state = {
    lang: localStorage.getItem('vz-lang') || 'ru',
    theme: localStorage.getItem('vz-theme') || 'light',
    activeFilter: 'all',
    lastFocusedEl: null
  };
  
  /* ---------------------------------------------------------
     4. HELPERS
     --------------------------------------------------------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  
  function t(key) {
    return (translations[state.lang] && translations[state.lang][key]) || key;
  }
  
  /* ---------------------------------------------------------
     5. THEME
     --------------------------------------------------------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#222222' : '#F5F3ED');
    localStorage.setItem('vz-theme', theme);
    state.theme = theme;
  }
  
  function initThemeToggle() {
    const btn = $('#theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    });
  }
  
  /* ---------------------------------------------------------
     6. LANGUAGE
     --------------------------------------------------------- */
  function applyLang(lang) {
    document.documentElement.lang = lang;
    state.lang = lang;
    localStorage.setItem('vz-lang', lang);
  
    const htmlLang = lang === 'ru' ? 'ru' : 'en';
    document.documentElement.setAttribute('lang', htmlLang);
  
    // update <title>
    document.title = lang === 'ru'
      ? 'Виктория Жаркова — Web Designer'
      : 'Victoria Zharkova — Web Designer';
  
    // swap texts
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const value = t(key);
      if (value !== undefined) el.textContent = value;
    });
  
    // swap attributes (data-i18n-attr="attr:key,attr:key")
    $$('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split(',').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        const value = t(key);
        if (value !== undefined) el.setAttribute(attr, value);
      });
    });
  
    // update lang toggle label
    const label = $('.lang-switch__label');
    if (label) label.textContent = lang === 'ru' ? 'EN' : 'RU';
  
    // update modal if open
    const modal = $('#project-modal');
    if (modal && modal.classList.contains('is-open')) {
      const currentId = modal.dataset.projectId;
      if (currentId) openModal(currentId, false);
    }
  }
  
  function initLangToggle() {
    const btn = $('#lang-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      applyLang(state.lang === 'ru' ? 'en' : 'ru');
    });
  }
  
  /* ---------------------------------------------------------
     7. MOBILE MENU
     --------------------------------------------------------- */
  function initMobileMenu() {
    const burger = $('#burger');
    const nav = $('#nav-menu');
    if (!burger || !nav) return;
  
    burger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(isOpen));
    });
  
    // close on link click
    $$('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  
    // close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
      }
    });
  }
  
  /* ---------------------------------------------------------
     8. HEADER SCROLL STATE
     --------------------------------------------------------- */
  function initHeaderScroll() {
    const header = $('#site-header');
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  
  /* ---------------------------------------------------------
     9. ACTIVE NAV
     --------------------------------------------------------- */
  function initActiveNav() {
    const sections = $$('main section[id]');
    const links = $$('.nav__link');
    if (!sections.length || !links.length) return;
  
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            links.forEach(l => {
              l.classList.toggle('is-active', l.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
  
    sections.forEach(s => observer.observe(s));
  }
  
  /* ---------------------------------------------------------
     10. SCROLL REVEAL
     --------------------------------------------------------- */
  function initReveal() {
    const items = $$('.section, .project-card, .timeline__item, .paper-card, .polaroid');
    items.forEach(el => el.setAttribute('data-reveal', ''));
  
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
  
    items.forEach(el => observer.observe(el));
  }
  
  /* ---------------------------------------------------------
     11. SMOOTH SCROLL (anchor offsets for sticky header)
     --------------------------------------------------------- */
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const id = link.getAttribute('href');
        if (!id || id === '#' || id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const headerH = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--header-h')
        ) || 62;
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 10;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }
  
  /* ---------------------------------------------------------
     12. PROJECT FILTER
     --------------------------------------------------------- */
  function initProjectFilter() {
    const buttons = $$('.filter');
    const cards = $$('.project-card');
    if (!buttons.length) return;
  
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        state.activeFilter = filter;
  
        buttons.forEach(b => {
          const active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-selected', String(active));
        });
  
        cards.forEach(card => {
          const cats = (card.dataset.category || '').split(/\s+/);
          const matches = filter === 'all' || cats.includes(filter);
          card.classList.toggle('is-hidden', !matches);
        });
      });
    });
  }
  
  /* ---------------------------------------------------------
     13. MODAL
     --------------------------------------------------------- */
  function openModal(projectId, focus = true) {
    const modal = $('#project-modal');
    const body = $('#modal-body');
    const data = projectsData[projectId];
    if (!modal || !body || !data) return;
  
    const lang = state.lang;
    const d = data[lang] || data.ru;
  
    body.innerHTML = `
      <div class="modal__hero">
        <img src="${data.image}" alt="${d.title}" loading="lazy" />
      </div>
      <div class="modal__content">
        <div class="modal__head">
          <h2 class="modal__title" id="modal-title">${d.title}</h2>
          <span class="modal__year">${data.year}</span>
        </div>
        <span class="modal__category">${d.subtitle}</span>
  
        <div class="modal__section">
          <h3 class="modal__section-title">${t('modal.role')}</h3>
          <p class="modal__desc"><strong>${d.role}</strong></p>
        </div>
  
        <div class="modal__section">
          <h3 class="modal__section-title">${t('modal.tasks')}</h3>
          <ul class="modal__tasks">
            ${d.tasks.map(task => `<li>${task}</li>`).join('')}
          </ul>
        </div>
  
        <div class="modal__section">
          <h3 class="modal__section-title">${t('modal.tools')}</h3>
          <div class="modal__tools">
            ${data.tools.map(tool => `<span class="tag tag--blue">${tool}</span>`).join('')}
          </div>
        </div>
  
        <div class="modal__section">
          <h3 class="modal__section-title">${t('modal.tags')}</h3>
          <div class="modal__tags">
            ${data.tags.map((tag, i) => {
              const colors = ['pink', 'purple', 'yellow', 'green', 'orange', 'blue'];
              const c = colors[i % colors.length];
              return `<span class="tag tag--${c}">${tag}</span>`;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  
    state.lastFocusedEl = document.activeElement;
    modal.dataset.projectId = projectId;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  
    if (focus) {
      setTimeout(() => {
        const closeBtn = modal.querySelector('.modal__close');
        if (closeBtn) closeBtn.focus();
      }, 50);
    }
  }
  
  function closeModal() {
    const modal = $('#project-modal');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('data-project-id');
    document.body.style.overflow = '';
  
    if (state.lastFocusedEl && typeof state.lastFocusedEl.focus === 'function') {
      state.lastFocusedEl.focus();
    }
  }
  
  function initModal() {
    // open on card click / Enter / Space
    $$('.project-card').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.project));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(card.dataset.project);
        }
      });
    });
  
    // close triggers
    $$('[data-modal-close]').forEach(el => {
      el.addEventListener('click', closeModal);
    });
  
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        const modal = $('#project-modal');
        if (modal && modal.classList.contains('is-open')) closeModal();
      }
    });
  
    // focus trap
    document.addEventListener('keydown', e => {
      const modal = $('#project-modal');
      if (!modal || !modal.classList.contains('is-open')) return;
      if (e.key !== 'Tab') return;
  
      const focusables = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
  
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }
  
  /* ---------------------------------------------------------
     14. COPY EMAIL
     --------------------------------------------------------- */
  function showToast(msg) {
    const toast = $('#toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(showToast._tid);
    showToast._tid = setTimeout(() => toast.classList.remove('is-visible'), 2000);
  }
  
  function initCopyEmail() {
    const btn = $('#copy-email');
    if (!btn) return;
    const originalText = btn.textContent.trim();
  
    btn.addEventListener('click', async () => {
      const email = btn.dataset.email;
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          // fallback
          const ta = document.createElement('textarea');
          ta.value = email;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }
        btn.textContent = state.lang === 'ru' ? 'Скопировано!' : 'Copied!';
        showToast(t('toast.copied'));
        setTimeout(() => {
          btn.textContent = t('contact.copyBtn') || originalText;
        }, 1800);
      } catch (err) {
        showToast('⚠ Copy failed');
      }
    });
  }
  
  /* ---------------------------------------------------------
     15. BACK TO TOP
     --------------------------------------------------------- */
  function initBackToTop() {
    const btn = $('#back-to-top');
    if (!btn) return;
  
    const onScroll = () => {
      btn.classList.toggle('is-visible', window.scrollY > 500);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  /* ---------------------------------------------------------
     16. INIT
     --------------------------------------------------------- */
  function init() {
    applyTheme(state.theme);
    applyLang(state.lang);
  
    initThemeToggle();
    initLangToggle();
    initMobileMenu();
    initHeaderScroll();
    initSmoothScroll();
    initProjectFilter();
    initModal();
    initCopyEmail();
    initReveal();
    initActiveNav();
    initBackToTop();
  }
  
  document.addEventListener('DOMContentLoaded', init);