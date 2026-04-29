// nav.js — shared navigation + language switcher

(function () {

  // ── TRANSLATIONS ────────────────────────────────────────────────────────────
  const T = {
    // NAV
    'nav.home':       { es: 'Inicio',        en: 'Home' },
    'nav.product':    { es: 'Producto',      en: 'Product' },
    'nav.app':        { es: 'App',           en: 'App' },
    'nav.technology': { es: 'Tecnología',    en: 'Technology' },
    'nav.contact':    { es: 'Contacto',      en: 'Contact' },
    'nav.cta':        { es: 'Comenzar',      en: 'Get Started' },

    // INDEX
    'home.eyebrow':   { es: 'Sistema Residencial de Alto Desempeño', en: 'High-Performance Residential System' },
    'home.h1a':       { es: 'La vivienda,',  en: 'The home,' },
    'home.h1b':       { es: 'reinventada.',  en: 'reinvented.' },
    'home.sub':       { es: 'Automatización invisible. Eficiencia total. Retorno real. Un sistema operativo para el hogar del futuro — inteligencia que no se ve, pero se percibe en cada decisión, en cada recurso y en tu patrimonio.', en: 'Invisible automation. Total efficiency. Real return. An operating system for the home of the future — intelligence you don\'t see, but feel in every decision, every resource, and your wealth.' },
    'home.cta1':      { es: 'Explorar sistema', en: 'Explore system' },
    'home.cta2':      { es: 'Ver sensores',  en: 'View sensors' },
    'home.scroll':    { es: 'Descubrir',     en: 'Discover' },
    'home.s1.label':  { es: 'El ecosistema', en: 'The ecosystem' },
    'home.s1.h2a':    { es: 'Inteligencia que', en: 'Intelligence that' },
    'home.s1.h2b':    { es: 'genera valor.',  en: 'generates value.' },
    'home.s1.lead':   { es: 'Cinco kits modulares. Un sistema unificado. Cada dispositivo comunica con los demás. Tu hogar aprende, optimiza y te reporta.', en: 'Five modular kits. One unified system. Every device communicates with the others. Your home learns, optimizes, and reports back.' },
    'home.b1.num':    { es: 'Kits disponibles', en: 'Available kits' },
    'home.b1.h3':     { es: 'Modular por diseño', en: 'Modular by design' },
    'home.b1.p':      { es: 'Comienza con un kit. Escala a cinco. La infraestructura está lista desde el primer día.', en: 'Start with one kit. Scale to five. The infrastructure is ready from day one.' },
    'home.b2.num':    { es: 'Ahorro en climatización', en: 'HVAC savings' },
    'home.b2.h3':     { es: 'Eficiencia medible', en: 'Measurable efficiency' },
    'home.b2.p':      { es: 'Cada sensor genera datos reales. Cada dato reduce costos. Cada reducción es patrimonio.', en: 'Every sensor generates real data. Every data point reduces costs. Every reduction is wealth.' },
    'home.b3.num':    { es: 'Más rápido en venta', en: 'Faster time to sale' },
    'home.b3.h3':     { es: 'Plusvalía tecnológica', en: 'Technological equity' },
    'home.b3.p':      { es: 'Los desarrollos PEAR-ROI se venden más rápido y a mayor precio. La tecnología visible genera confianza.', en: 'PEAR-ROI developments sell faster and at a higher price. Visible technology generates trust.' },
    'home.b4.h3':     { es: '60% menor costo de integración vs. marcas tradicionales.', en: '60% lower integration cost vs. traditional brands.' },
    'home.s2.label':  { es: 'Plataforma', en: 'Platform' },
    'home.s2.h2a':    { es: 'Cinco sistemas.', en: 'Five systems.' },
    'home.s2.h2b':    { es: 'Una sola app.', en: 'One single app.' },
    'home.s2.lead':   { es: 'Desde la seguridad hídrica hasta la inteligencia de hábitat — todo desde una interfaz diseñada para la claridad.', en: 'From water security to habitat intelligence — all from one interface designed for clarity.' },
    'home.studio.label': { es: 'PEAR-ROI Studio', en: 'PEAR-ROI Studio' },
    'home.studio.h2': { es: 'El espacio construido bajo PRMS.', en: 'Built space under PRMS.' },
    'home.studio.p1': { es: 'PEAR-ROI Studio es el estudio de arquitectura que diseña el entorno habitable del futuro. Arquitectura, obra, sistemas e ingeniería de confort — integrados bajo el framework PRMS (Performance-Responsive Metabolic System).', en: 'PEAR-ROI Studio is the architecture studio that designs the livable environment of the future. Architecture, construction, systems, and comfort engineering — integrated under the PRMS framework.' },
    'home.studio.p2': { es: 'El estudio no fabrica sensores. Diseña los espacios donde los sensores tienen sentido.', en: 'The studio doesn\'t manufacture sensors. It designs the spaces where sensors make sense.' },
    'home.studio.link': { es: 'Conocer PRMS Framework →', en: 'Explore PRMS Framework →' },
    'home.studio.t1': { es: 'Arquitectura', en: 'Architecture' },
    'home.studio.t2': { es: 'Obra & Sistemas', en: 'Construction & Systems' },
    'home.studio.t3': { es: 'Diseño Industrial', en: 'Industrial Design' },
    'home.studio.t4': { es: 'PRMS Certified', en: 'PRMS Certified' },
    'home.cta.h2':    { es: 'El futuro de tu hogar comienza hoy.', en: 'The future of your home starts today.' },
    'home.cta.p':     { es: 'Habla con un especialista PEAR-ROI. Sin compromisos. Con respuestas reales.', en: 'Talk to a PEAR-ROI specialist. No commitment. Real answers.' },
    'home.cta.btn':   { es: 'Contactar ahora', en: 'Contact now' },

    // PRODUCT PAGE
    'prod.eyebrow':   { es: 'Sensores & Kits', en: 'Sensors & Kits' },
    'prod.h1a':       { es: 'Tecnología que',  en: 'Technology that' },
    'prod.h1b':       { es: 'trabaja por ti.', en: 'works for you.' },
    'prod.sub':       { es: 'Cinco kits modulares basados en ESP32, controlados por nuestra app propietaria. Hardware y software de casa — 60% más económico que las marcas tradicionales.', en: 'Five modular kits based on ESP32, controlled by our proprietary app. In-house hardware and software — 60% more affordable than traditional brands.' },
    'prod.all':       { es: 'Todos los kits', en: 'All kits' },
    'prod.roi.label': { es: 'Impacto Financiero', en: 'Financial Impact' },
    'prod.comp.label':{ es: 'Componentes', en: 'Components' },

    // Kit names & descriptions
    'kit.h2oe.name':  { es: 'Kit H2O Essential', en: 'Kit H2O Essential' },
    'kit.h2oe.sub':   { es: 'Seguridad Hídrica', en: 'Water Security' },
    'kit.h2oe.desc':  { es: 'Monitoreo continuo de nivel, flujo y corte automático. Elimina el riesgo de inundaciones y habilita gestión remota de suministro.', en: 'Continuous level, flow, and automatic shutoff monitoring. Eliminates flood risk and enables remote supply management.' },
    'kit.h2oe.c1':    { es: 'Control de niveles', en: 'Level control' },
    'kit.h2oe.c2':    { es: 'Caudalímetro', en: 'Flow meter' },
    'kit.h2oe.c3':    { es: 'Electro-válvula de corte', en: 'Shutoff electrovalve' },
    'kit.h2oe.roi':   { es: 'Elimina costos por daños catastróficos de inundación.', en: 'Eliminates costs from catastrophic flood damage.' },

    'kit.h2op.name':  { es: 'Kit H2O Premium', en: 'Kit H2O Premium' },
    'kit.h2op.sub':   { es: 'Salud y Sustentabilidad', en: 'Health & Sustainability' },
    'kit.h2op.desc':  { es: 'Monitorea calidad del agua en tiempo real. pH, turbidez, TDS, lluvia y temperatura solar — el kit que posiciona tu edificio en el segmento Wellness.', en: 'Monitors water quality in real time. pH, turbidity, TDS, rain, and solar temperature — the kit that positions your building in the Wellness segment.' },
    'kit.h2op.c1':    { es: 'Sensores de calidad (pH, Turbidez, TDS)', en: 'Quality sensors (pH, Turbidity, TDS)' },
    'kit.h2op.c2':    { es: 'Monitoreo pluvial', en: 'Rainfall monitoring' },
    'kit.h2op.c3':    { es: 'Temperatura solar', en: 'Solar temperature' },
    'kit.h2op.roi':   { es: 'Certificación "Edificio Sustentable" + optimización de agua pluvial.', en: '"Sustainable Building" certification + rainwater optimization.' },

    'kit.energy.name':{ es: 'Kit Energy Pro', en: 'Kit Energy Pro' },
    'kit.energy.sub': { es: 'Independencia Energética', en: 'Energy Independence' },
    'kit.energy.desc':{ es: 'Visualización en tiempo real de consumo, producción fotovoltaica y gestión de carga EV. El kit más financiero del ecosistema.', en: 'Real-time visualization of consumption, photovoltaic production, and EV charge management. The most financial kit in the ecosystem.' },
    'kit.energy.c1':  { es: 'Monitor de consumo', en: 'Consumption monitor' },
    'kit.energy.c2':  { es: 'Producción fotovoltaica', en: 'Photovoltaic production' },
    'kit.energy.c3':  { es: 'Gestión de cargador EV', en: 'EV charger management' },
    'kit.energy.roi': { es: 'ROI visible en el recibo eléctrico. Preparación EV Ready.', en: 'ROI visible on electricity bill. EV Ready preparation.' },

    'kit.climate.name':{ es: 'Kit Climate Elite', en: 'Kit Climate Elite' },
    'kit.climate.sub':{ es: 'Confort Eficiente', en: 'Efficient Comfort' },
    'kit.climate.desc':{ es: 'Automatización climática basada en datos de ambiente reales. Reduce el consumo de climatización hasta un 25% mediante control inteligente IR.', en: 'Climate automation based on real environmental data. Reduces HVAC consumption by up to 25% through smart IR control.' },
    'kit.climate.c1': { es: 'Sensor de ambiente (Temp/Hum)', en: 'Environmental sensor (Temp/Hum)' },
    'kit.climate.c2': { es: 'Control IR para aire acondicionado', en: 'IR control for air conditioning' },
    'kit.climate.roi':{ es: 'Reducción de consumo por climatización hasta 25%.', en: 'Up to 25% reduction in HVAC consumption.' },

    'kit.habitat.name':{ es: 'Kit Habitat Intelligence', en: 'Kit Habitat Intelligence' },
    'kit.habitat.sub':{ es: 'Seguridad y Lifestyle', en: 'Security & Lifestyle' },
    'kit.habitat.desc':{ es: 'El kit más aspiracional. Seguridad de vanguardia con sensores mmWave, acceso inteligente y control total del hábitat. Eleva el precio por m² entre 8% y 12%.', en: 'The most aspirational kit. Cutting-edge security with mmWave sensors, smart access, and total habitat control. Elevates price per m² by 8% to 12%.' },
    'kit.habitat.c1': { es: 'Chapa inteligente', en: 'Smart lock' },
    'kit.habitat.c2': { es: 'Sensores de presencia mmWave', en: 'mmWave presence sensors' },
    'kit.habitat.c3': { es: 'Cámaras de seguridad', en: 'Security cameras' },
    'kit.habitat.c4': { es: 'Control de iluminación', en: 'Lighting control' },
    'kit.habitat.c5': { es: 'Control de persianas', en: 'Blind control' },
    'kit.habitat.roi':{ es: 'Premium Pricing +8–12% por m². Check-in automatizado para rentas.', en: 'Premium Pricing +8–12% per m². Automated check-in for rentals.' },

    // APP PAGE
    'app.eyebrow':    { es: 'App & Ecosistema', en: 'App & Ecosystem' },
    'app.h1a':        { es: 'Un hogar que',    en: 'A home that' },
    'app.h1b':        { es: 'te habla.',        en: 'speaks to you.' },
    'app.sub':        { es: 'La app PEAR-ROI centraliza todos tus kits en una interfaz clara. Alertas en tiempo real, métricas de eficiencia y control total desde cualquier lugar.', en: 'The PEAR-ROI app centralizes all your kits in one clear interface. Real-time alerts, efficiency metrics, and total control from anywhere.' },
    'app.f1.label':   { es: 'Dashboard', en: 'Dashboard' },
    'app.f1.h2':      { es: 'Todo en una sola pantalla.', en: 'Everything on one screen.' },
    'app.f1.p':       { es: 'El dashboard de PEAR-ROI muestra el estado de todos tus sistemas en tiempo real. Energía generada, consumo actual, calidad del agua, temperatura, seguridad — un vistazo, contexto completo.', en: 'The PEAR-ROI dashboard shows the status of all your systems in real time. Energy generated, current consumption, water quality, temperature, security — one glance, complete context.' },
    'app.f2.label':   { es: 'Alertas', en: 'Alerts' },
    'app.f2.h2':      { es: 'Antes de que algo falle.', en: 'Before something fails.' },
    'app.f2.p':       { es: 'El sistema detecta anomalías en patrones de consumo y te notifica antes de que se conviertan en problemas. Mantenimiento predictivo que reduce costos de garantía post-venta hasta en un 40%.', en: 'The system detects anomalies in consumption patterns and notifies you before they become problems. Predictive maintenance that reduces after-sale warranty costs by up to 40%.' },
    'app.f3.label':   { es: 'Automatización', en: 'Automation' },
    'app.f3.h2':      { es: 'Tu hogar aprende.', en: 'Your home learns.' },
    'app.f3.p':       { es: 'Define rutinas, umbrales y respuestas automáticas. Si la temperatura sube, el AC se ajusta. Si hay fuga, la válvula se cierra. Si llega un huésped, la chapa se abre. Sin intervención manual.', en: 'Set routines, thresholds, and automatic responses. If temperature rises, AC adjusts. If there\'s a leak, the valve closes. If a guest arrives, the lock opens. No manual intervention.' },

    // TECHNOLOGY PAGE
    'tech.eyebrow':   { es: 'Cómo funciona', en: 'How it works' },
    'tech.h1a':       { es: 'Ingeniería',    en: 'Engineering' },
    'tech.h1b':       { es: 'sin complejidad.', en: 'without complexity.' },
    'tech.sub':       { es: 'Arquitectura modular basada en ESP32. Software propietario. Hardware diseñado en casa. Un sistema que crece con el edificio.', en: 'Modular architecture based on ESP32. Proprietary software. In-house designed hardware. A system that grows with the building.' },
    'tech.s1.h3':     { es: 'Sensores en campo', en: 'Field sensors' },
    'tech.s1.p':      { es: 'Cada kit incluye sensores ESP32 de bajo consumo instalados en los puntos críticos del hogar — tanque, tablero eléctrico, entrada, climatización. Comunicación WiFi nativa, sin hubs adicionales.', en: 'Each kit includes low-power ESP32 sensors installed at critical home points — tank, electrical panel, entrance, HVAC. Native WiFi communication, no additional hubs.' },
    'tech.s2.h3':     { es: 'Gateway local', en: 'Local gateway' },
    'tech.s2.p':      { es: 'Un módulo central procesa y almacena datos localmente. El sistema funciona sin internet — la nube es complementaria, no obligatoria. Tu información permanece en tu hogar.', en: 'A central module processes and stores data locally. The system works without internet — the cloud is complementary, not mandatory. Your information stays in your home.' },
    'tech.s3.h3':     { es: 'App propietaria', en: 'Proprietary app' },
    'tech.s3.p':      { es: 'La interfaz PEAR-ROI recibe, interpreta y presenta los datos de todos los kits. Diseñada para claridad: métricas en tiempo real, historial, alertas y automatizaciones desde un solo lugar.', en: 'The PEAR-ROI interface receives, interprets, and presents data from all kits. Designed for clarity: real-time metrics, history, alerts, and automations from one place.' },
    'tech.s4.h3':     { es: 'Nube & API', en: 'Cloud & API' },
    'tech.s4.p':      { es: 'Reportes técnicos automáticos, acceso remoto y compatibilidad futura con integraciones externas — aseguradoras, certificadoras y plataformas ESG.', en: 'Automatic technical reports, remote access, and future compatibility with external integrations — insurers, certifiers, and ESG platforms.' },
    'tech.arch.label':{ es: 'Arquitectura del sistema', en: 'System architecture' },
    'tech.arch.h2':   { es: 'Hardware de casa. Sin dependencia externa.', en: 'In-house hardware. No external dependency.' },
    'tech.arch.p':    { es: 'PEAR-ROI no revende hardware de terceros. Diseñamos y fabricamos nuestros módulos para garantizar compatibilidad total, costos controlados y evolución continua del sistema.', en: 'PEAR-ROI does not resell third-party hardware. We design and manufacture our modules to guarantee total compatibility, controlled costs, and continuous system evolution.' },
    'tech.b1.h3':     { es: 'ESP32 nativo', en: 'Native ESP32' },
    'tech.b1.p':      { es: 'Microcontrolador de bajo consumo con WiFi y Bluetooth integrados. Base de todo el ecosistema.', en: 'Low-power microcontroller with integrated WiFi and Bluetooth. The foundation of the entire ecosystem.' },
    'tech.b2.h3':     { es: 'Protocolo MQTT', en: 'MQTT Protocol' },
    'tech.b2.p':      { es: 'Comunicación ligera y confiable entre sensores y gateway. Latencia mínima, máxima estabilidad.', en: 'Lightweight and reliable communication between sensors and gateway. Minimal latency, maximum stability.' },
    'tech.b3.h3':     { es: 'OTA Updates', en: 'OTA Updates' },
    'tech.b3.p':      { es: 'Actualizaciones de firmware enviadas de forma inalámbrica. El sistema mejora sin intervención física.', en: 'Firmware updates sent wirelessly. The system improves without physical intervention.' },
    'tech.b4.h3':     { es: '60% menor costo', en: '60% lower cost' },
    'tech.b4.p':      { es: 'Frente a marcas tradicionales del mercado, gracias al diseño y fabricación propios.', en: 'Compared to traditional market brands, thanks to own design and manufacturing.' },

    // CONTACT PAGE
    'contact.eyebrow':{ es: 'Contacto', en: 'Contact' },
    'contact.h1a':    { es: 'Construyamos',  en: 'Let\'s build' },
    'contact.h1b':    { es: 'algo juntos.',  en: 'something together.' },
    'contact.sub':    { es: 'Habla con un especialista PEAR-ROI. Ya sea que seas desarrollador inmobiliario, propietario o distribuidor — tenemos una solución para ti.', en: 'Talk to a PEAR-ROI specialist. Whether you are a real estate developer, homeowner, or distributor — we have a solution for you.' },
    'contact.form.name':  { es: 'Nombre', en: 'Name' },
    'contact.form.email': { es: 'Correo electrónico', en: 'Email' },
    'contact.form.type':  { es: 'Soy...', en: 'I am...' },
    'contact.form.t1':    { es: 'Desarrollador inmobiliario', en: 'Real estate developer' },
    'contact.form.t2':    { es: 'Propietario de vivienda', en: 'Homeowner' },
    'contact.form.t3':    { es: 'Distribuidor / Instalador', en: 'Distributor / Installer' },
    'contact.form.t4':    { es: 'Inversionista', en: 'Investor' },
    'contact.form.t5':    { es: 'Otro', en: 'Other' },
    'contact.form.msg':   { es: 'Cuéntanos tu proyecto', en: 'Tell us about your project' },
    'contact.form.btn':   { es: 'Enviar mensaje', en: 'Send message' },
    'contact.info.label': { es: 'Información', en: 'Information' },
    'contact.info.h2':    { es: 'Estamos en Querétaro, México.', en: 'We are in Querétaro, Mexico.' },
    'contact.info.p':     { es: 'Atendemos proyectos en toda la República Mexicana y con desarrolladores internacionales interesados en el sistema PEAR-ROI.', en: 'We serve projects throughout Mexico and international developers interested in the PEAR-ROI system.' },
    'contact.dev.h3':     { es: 'Para desarrolladores', en: 'For developers' },
    'contact.dev.p':      { es: 'Ofrecemos kits de demostración, visitas técnicas y presentaciones para equipos de ventas. El primer kit es un piloto sin riesgo.', en: 'We offer demo kits, technical visits, and sales team presentations. The first kit is a risk-free pilot.' },
    'contact.dist.h3':    { es: 'Distribuidores', en: 'Distributors' },
    'contact.dist.p':     { es: 'Programa de distribución activo. Márgenes competitivos, soporte técnico completo y materiales de venta provistos.', en: 'Active distribution program. Competitive margins, full technical support, and sales materials provided.' },

    // FOOTER
    'footer.tagline': { es: 'Sistema operativo para el hogar del futuro.', en: 'Operating system for the home of the future.' },
    'footer.products':{ es: 'Productos', en: 'Products' },
    'footer.company': { es: 'Empresa', en: 'Company' },
    'footer.legal':   { es: 'Legal', en: 'Legal' },
    'footer.copy':    { es: '© 2025 PEAR-ROI · Renewable Pear. Todos los derechos reservados.', en: '© 2025 PEAR-ROI · Renewable Pear. All rights reserved.' },
    'footer.prms':    { es: 'Powered by PRMS Framework', en: 'Powered by PRMS Framework' },
  };

  // ── LANG STATE ────────────────────────────────────────────────────────────
  function getLang() { return localStorage.getItem('pear-lang') || 'es'; }
  function setLang(l) { localStorage.setItem('pear-lang', l); }

  function applyLang(lang) {
    document.querySelectorAll('[data-t]').forEach(el => {
      const key = el.getAttribute('data-t');
      if (T[key] && T[key][lang] !== undefined) el.innerHTML = T[key][lang];
    });
    document.querySelectorAll('[data-t-placeholder]').forEach(el => {
      const key = el.getAttribute('data-t-placeholder');
      if (T[key] && T[key][lang] !== undefined) el.placeholder = T[key][lang];
    });
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    document.documentElement.lang = lang;
  }

  // ── NAV INJECT ────────────────────────────────────────────────────────────
  function buildNav() {
    const el = document.getElementById('site-nav');
    if (!el) return;
    const path = window.location.pathname;
    const page = path === '/' ? 'index.html' : path.split('/').pop();
    
    const links = [
      { href: 'index.html', key: 'nav.home', logo: true },
      { href: 'product.html', key: 'nav.product' },
      { href: 'app.html',     key: 'nav.app' },
      { href: 'technology.html', key: 'nav.technology' },
      { href: 'contact.html', key: 'nav.contact' },
    ];

el.innerHTML = `
  <div class="nav-container">

    <div class="nav-logo">
      <img src="favicon.png" alt="PEAR-ROI" onerror="this.style.display='none'">
      <span class="nav-logo-text">PEAR-ROI</span>
    </div>

    <!-- BOTÓN MOBILE -->
    <button class="nav-toggle" id="navToggle">☰</button>

    <ul class="nav-links" id="navLinks">
      ${links.map(l => {
        if (l.logo) {
          return `
            <li>
              <a href="${l.href}" class="${page===l.href?'active':''}">
                <img src="favicon.png" style="height:18px;">
              </a>
            </li>
          `;
        }
        return `
          <li>
            <a href="${l.href}" class="${page===l.href?'active':''}" data-t="${l.key}">
              ${T[l.key]['es']}
            </a>
          </li>
        `;
      }).join('')}
    </ul>

    <div class="nav-right">
      <div class="lang-switcher">
        <button class="lang-btn" data-lang="es">ES</button>
        <span class="lang-sep">|</span>
        <button class="lang-btn" data-lang="en">EN</button>
      </div>
      <a href="contact.html" class="nav-cta" data-t="nav.cta">${T['nav.cta']['es']}</a>
    </div>

  </div>
`;

    el.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => { setLang(btn.dataset.lang); applyLang(btn.dataset.lang); });
    });
  }
  
  // MOBILE MENU (esto es adicional, no reemplazo)
const toggle = document.getElementById('navToggle');
const linksMenu = document.getElementById('navLinks');
if (toggle && linksMenu) {
  toggle.addEventListener('click', () => {
    linksMenu.classList.toggle('active');
  });
}

  // ── SCROLL REVEAL ─────────────────────────────────────────────────────────
  function initReveal() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  // ── INIT ──────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    buildNav();
    applyLang(getLang());
    initReveal();
  });

})();
