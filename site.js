const page = document.body.dataset.page;

const company = {
  phone: "1300 AILA 00",
  phoneHref: "tel:1300245200",
  email: "ailapropertysolutions@outlook.com",
  emailHref: "mailto:ailapropertysolutions@outlook.com",
  location: "Melbourne, Victoria, Australia",
  locationUrl: "https://www.facebook.com/Melbourne-Victoria-Australia-116190411724975/"
};

const pageMeta = {
  home: {
    title: "AILA Property Solutions | Cleaning Specialists Melbourne",
    description: "Fast, reliable commercial and property cleaning across Melbourne with flexible scheduling, after-hours service and free onsite quotes."
  },
  commercial: {
    title: "Commercial Cleaning Melbourne | AILA Property Solutions",
    description: "Commercial cleaning for offices, workspaces, warehouses, factories and industrial sites across Melbourne."
  },
  property: {
    title: "Property Cleaning Melbourne | AILA Property Solutions",
    description: "Property and real estate cleaning in Melbourne for end of lease, builders cleans, handovers, pre-sale cleans and more."
  },
  offices: {
    title: "Office Cleaning Melbourne | AILA Property Solutions",
    description: "Flexible office cleaning in Melbourne for workspaces, meeting rooms, staff kitchens and shared amenities."
  },
  industrial: {
    title: "Industrial Cleaning Melbourne | AILA Property Solutions",
    description: "Industrial and warehouse cleaning in Melbourne with site-aware crews, White Card certification and flexible scheduling."
  },
  lease: {
    title: "End of Lease Cleaning Melbourne | AILA Property Solutions",
    description: "Detailed end of lease cleaning across Melbourne with responsive booking, final presentation checks and optional extras."
  },
  builders: {
    title: "Builders Cleaning Melbourne | AILA Property Solutions",
    description: "White Card certified builders cleaning in Melbourne from rough cleans to final handover presentation."
  },
  industries: {
    title: "Industries We Serve | AILA Property Solutions",
    description: "Commercial, industrial, property and builders cleaning tailored to different site types across Melbourne."
  },
  blog: {
    title: "Cleaning Blog Melbourne | AILA Property Solutions",
    description: "SEO-ready cleaning guides, property care tips, handover advice and commercial cleaning checklists for Melbourne."
  },
  post: {
    title: "Cleaning Article | AILA Property Solutions",
    description: "Read an in-depth AILA Property Solutions article about cleaning, handovers and property presentation in Melbourne."
  },
  about: {
    title: "About AILA Property Solutions",
    description: "Learn more about AILA Property Solutions, our Melbourne cleaning approach and how we work around your site and schedule."
  },
  contact: {
    title: "Contact AILA Property Solutions",
    description: "Contact AILA Property Solutions for commercial cleaning, property cleaning or a free onsite quote in Melbourne."
  },
  quote: {
    title: "Get a Cleaning Quote | AILA Property Solutions",
    description: "Request a free onsite walkthrough and quote for commercial or property cleaning across Melbourne."
  }
};

const servicesByCategory = {
  "Commercial cleaning": "commercial cleaning",
  "Property cleaning": "property cleaning",
  "Builders cleaning": "builders cleaning"
};

const pages = {
  commercial: {
    kicker: "Commercial cleaning",
    title: "Your workplace, ready for what comes next.",
    intro:
      "Flexible, reliable cleaning for Melbourne businesses—from offices and staff amenities to warehouses, factories and industrial sites.",
    image: "assets/work-office-clean.jpg",
    stats: [
      ["After-hours", "Service available"],
      ["Flexible", "Routine schedules"],
      ["On-call", "Short-notice support"]
    ],
    sectionTitle: "Commercial cleaning built around your operation.",
    sectionCopy:
      "Every site works differently. We start with a walkthrough, understand your operating hours and priorities, then create a clear plan your team can rely on.",
    services: [
      ["Offices & workspaces", "A consistently clean, comfortable workplace without disrupting the workday.", "offices-workspaces.html"],
      ["Staff kitchens & amenities", "High-touch hygiene for shared spaces your people use every day.", "contact.html"],
      ["Warehouses & factories", "Practical cleaning for active sites, amenities and production environments.", "industrial-cleaning.html"],
      ["Industrial spaces", "Safety-aware service for demanding commercial environments.", "industrial-cleaning.html"],
      ["External windows", "Professional external glass cleaning for a strong first impression.", "contact.html"],
      ["Routine & deep cleans", "Ongoing maintenance or an intensive reset when the space needs it.", "quote.html"]
    ]
  },
  property: {
    kicker: "Property & real estate cleaning",
    title: "Every property, ready for its next chapter.",
    intro:
      "Detail-focused cleaning for leases, sales, handovers, building completion and every move in between.",
    image: "assets/work-property-kitchen.jpg",
    stats: [
      ["Fast", "Turnaround"],
      ["Weekend", "Availability"],
      ["Detailed", "Final checks"]
    ],
    sectionTitle: "Property cleaning when timing and presentation matter.",
    sectionCopy:
      "We help agents, owners, builders and property managers turn spaces around quickly—with responsive scheduling and one accountable team.",
    services: [
      ["End of lease cleaning", "A thorough top-to-bottom clean for inspection and handover.", "end-of-lease.html"],
      ["Pre-sale cleaning", "Presentation-led cleaning that helps every room show at its best.", "contact.html"],
      ["Handover cleaning", "A polished final clean before owners, tenants or clients arrive.", "quote.html"],
      ["Builders cleaning", "White Card certified post-construction cleaning for finished sites.", "builders-cleaning.html"],
      ["Move-in / move-out", "A clean reset before the boxes arrive or after they leave.", "end-of-lease.html"],
      ["Estate clearance", "Respectful, practical cleaning for sensitive property transitions.", "contact.html"],
      ["Carpet cleaning", "Targeted deep cleaning to refresh commercial and residential carpet.", "quote.html"],
      ["Pressure washing", "External surface cleaning for paths, entries and hardstand areas.", "quote.html"]
    ]
  },
  offices: {
    kicker: "Commercial / Offices & workspaces",
    title: "A workplace people notice for the right reasons.",
    intro:
      "Quiet, consistent office cleaning scheduled around your team, customers and building access.",
    image: "assets/work-office-clean.jpg",
    stats: [
      ["Daily–weekly", "Flexible frequency"],
      ["Evenings", "After-hours access"],
      ["One team", "Clear accountability"]
    ],
    sectionTitle: "Everything your workplace needs. Nothing it doesn’t.",
    sectionCopy:
      "We tailor the scope to the people, traffic and surfaces in your space, with reliable routines and clear quality checks.",
    services: [
      ["Workstations & meeting rooms", "Dusting, touchpoint cleaning, floors and presentation details.", "quote.html"],
      ["Kitchens & amenities", "Sanitising shared kitchens, bathrooms and staff facilities.", "quote.html"],
      ["Entries & common areas", "Clean, welcoming spaces from the first step inside.", "quote.html"],
      ["Periodic deep cleans", "Planned resets for carpets, glass, detail work and high-use areas.", "quote.html"]
    ]
  },
  industrial: {
    kicker: "Commercial / Industrial",
    title: "Serious cleaning for working sites.",
    intro:
      "Reliable warehouse, factory and industrial cleaning delivered by site-aware professionals.",
    image: "assets/work-staff-kitchen.jpg",
    stats: [
      ["Site-ready", "White Card certified"],
      ["Responsive", "On-call crews"],
      ["Flexible", "Around operations"]
    ],
    sectionTitle: "Built around access, safety and production.",
    sectionCopy:
      "We scope every industrial site before work begins, align with your access and safety requirements, and schedule around active operations.",
    services: [
      ["Warehouse floors", "Machine and manual cleaning plans suited to your floor and traffic.", "quote.html"],
      ["Factory spaces", "Targeted cleaning for operational and non-production areas.", "quote.html"],
      ["Staff amenities", "Consistent hygiene for change rooms, kitchens and washrooms.", "quote.html"],
      ["One-off deep cleans", "Extra resources for shutdowns, handovers and urgent resets.", "quote.html"]
    ]
  },
  lease: {
    kicker: "Property / End of lease",
    title: "Leave it spotless. Leave on time.",
    intro:
      "A detailed move-out clean for tenants, owners, agents and property managers across Melbourne.",
    image: "assets/work-polished-floor.jpg",
    stats: [
      ["Detailed", "Room-by-room scope"],
      ["Prompt", "Booking response"],
      ["Flexible", "Weekend options"]
    ],
    sectionTitle: "A confident clean before the final inspection.",
    sectionCopy:
      "Moving is already a full day. We handle the cleaning detail with a clear scope and efficient crew, so the property is ready to inspect and hand over.",
    services: [
      ["Kitchen detail", "Cabinet fronts, benches, sinks, splashbacks and appliance exteriors.", "quote.html"],
      ["Bathrooms", "Fixtures, surfaces, mirrors, floors and high-touch areas.", "quote.html"],
      ["Rooms & floors", "Dusting, vacuuming, mopping and presentation details throughout.", "quote.html"],
      ["Optional extras", "Carpet cleaning, external windows and pressure washing as required.", "quote.html"]
    ]
  },
  builders: {
    kicker: "Property / Builders cleaning",
    title: "From construction site to finished space.",
    intro:
      "White Card certified post-construction cleaning for builders, developers and property teams.",
    image: "assets/work-builders-handover.jpg",
    stats: [
      ["Certified", "White Card crews"],
      ["Staged", "Rough to final clean"],
      ["On-time", "Handover focused"]
    ],
    sectionTitle: "The final trade before handover.",
    sectionCopy:
      "We remove building dust, debris and presentation marks in planned stages, coordinating with your program so the finished work is what people see.",
    services: [
      ["Initial clean", "Removal of loose debris, packaging and heavy construction dust.", "quote.html"],
      ["Detail clean", "Surfaces, joinery, fixtures, glass and fine dust throughout.", "quote.html"],
      ["Final presentation", "A last quality pass before inspection, photography or handover.", "quote.html"],
      ["External areas", "Entries, glazing and pressure washing where required.", "quote.html"]
    ]
  }
};

const blogTopicDefinitions = [
  { slug: "commercial-cleaning-checklist-melbourne", title: "Commercial cleaning checklist for busy Melbourne workplaces", category: "Commercial cleaning", image: "assets/work-office-clean.jpg", keyword: "commercial cleaning checklist Melbourne", angle: "office hygiene, presentation and frequency planning" },
  { slug: "office-kitchen-cleaning-standards", title: "Office kitchen cleaning standards that reduce complaints and downtime", category: "Commercial cleaning", image: "assets/work-staff-kitchen.jpg", keyword: "office kitchen cleaning Melbourne", angle: "shared kitchen hygiene and staff experience" },
  { slug: "warehouse-cleaning-schedule-guide", title: "How to build a warehouse cleaning schedule that works around operations", category: "Commercial cleaning", image: "assets/work-staff-kitchen.jpg", keyword: "warehouse cleaning schedule Melbourne", angle: "industrial planning without disrupting production" },
  { slug: "after-hours-office-cleaning-benefits", title: "Why after-hours office cleaning works better for growing teams", category: "Commercial cleaning", image: "assets/work-office-clean.jpg", keyword: "after-hours office cleaning Melbourne", angle: "quiet cleaning windows and presentation" },
  { slug: "factory-cleaning-safety-planning", title: "Factory cleaning safety planning before work begins on site", category: "Commercial cleaning", image: "assets/work-office-clean.jpg", keyword: "factory cleaning Melbourne", angle: "access, safety and practical site preparation" },
  { slug: "routine-vs-deep-commercial-cleaning", title: "Routine vs deep commercial cleaning: what Melbourne sites actually need", category: "Commercial cleaning", image: "assets/work-office-clean.jpg", keyword: "deep commercial cleaning Melbourne", angle: "difference between maintenance and resets" },
  { slug: "meeting-room-and-reception-cleaning", title: "Meeting room and reception cleaning that protects first impressions", category: "Commercial cleaning", image: "assets/work-office-clean.jpg", keyword: "office reception cleaning Melbourne", angle: "client-facing areas and presentation detail" },
  { slug: "external-window-cleaning-for-businesses", title: "External window cleaning for businesses that want a stronger first impression", category: "Commercial cleaning", image: "assets/work-window-clean.jpg", keyword: "external window cleaning Melbourne business", angle: "street presence and presentation value" },
  { slug: "short-notice-commercial-cleaning-response", title: "What to expect from short-notice commercial cleaning support", category: "Commercial cleaning", image: "assets/work-office-clean.jpg", keyword: "urgent commercial cleaning Melbourne", angle: "response times and urgent scope planning" },
  { slug: "staff-amenities-cleaning-guide", title: "A practical staff amenities cleaning guide for busy workplaces", category: "Commercial cleaning", image: "assets/work-staff-kitchen.jpg", keyword: "staff amenities cleaning Melbourne", angle: "shared amenities, hygiene and consistency" },
  { slug: "industrial-cleaning-walkthrough-checklist", title: "Industrial cleaning walkthrough checklist before quoting a site", category: "Commercial cleaning", image: "assets/work-office-clean.jpg", keyword: "industrial cleaning quote Melbourne", angle: "site walkthroughs and scope accuracy" },
  { slug: "office-cleaning-frequency-guide", title: "How often should an office be cleaned? A simple Melbourne guide", category: "Commercial cleaning", image: "assets/work-office-clean.jpg", keyword: "office cleaning frequency Melbourne", angle: "matching schedules to team size and usage" },
  { slug: "end-of-lease-cleaning-timing-guide", title: "When to book end of lease cleaning so inspections run smoothly", category: "Property cleaning", image: "assets/work-polished-floor.jpg", keyword: "end of lease cleaning Melbourne", angle: "inspection timing and move-out planning" },
  { slug: "pre-sale-cleaning-priority-list", title: "Pre-sale cleaning priorities that help a Melbourne property present better", category: "Property cleaning", image: "assets/work-property-kitchen.jpg", keyword: "pre-sale cleaning Melbourne", angle: "presentation before photography and opens" },
  { slug: "move-in-move-out-cleaning-guide", title: "Move-in and move-out cleaning guide for a faster property reset", category: "Property cleaning", image: "assets/work-kitchen-clean.jpg", keyword: "move in move out cleaning Melbourne", angle: "resetting a space between occupants" },
  { slug: "handover-cleaning-for-property-managers", title: "Handover cleaning for property managers juggling multiple deadlines", category: "Property cleaning", image: "assets/work-property-kitchen.jpg", keyword: "handover cleaning Melbourne", angle: "handover presentation and coordination" },
  { slug: "carpet-cleaning-before-inspection", title: "When carpet cleaning makes the biggest difference before inspection day", category: "Property cleaning", image: "assets/work-polished-floor.jpg", keyword: "carpet cleaning before inspection Melbourne", angle: "timing carpet work with end of lease cleans" },
  { slug: "pressure-washing-for-property-presentation", title: "Pressure washing for property presentation before sale or handover", category: "Property cleaning", image: "assets/work-window-clean.jpg", keyword: "pressure washing property Melbourne", angle: "external surfaces and street appeal" },
  { slug: "estate-clearance-cleaning-process", title: "Estate clearance cleaning: how to approach sensitive property transitions", category: "Property cleaning", image: "assets/work-polished-floor.jpg", keyword: "estate clearance cleaning Melbourne", angle: "respectful planning and practical cleaning stages" },
  { slug: "vacant-property-cleaning-checklist", title: "Vacant property cleaning checklist for agents and owners", category: "Property cleaning", image: "assets/work-kitchen-clean.jpg", keyword: "vacant property cleaning Melbourne", angle: "presentation details for empty homes and units" },
  { slug: "real-estate-cleaning-turnaround-tips", title: "Real estate cleaning turnaround tips when time is tight", category: "Property cleaning", image: "assets/work-property-kitchen.jpg", keyword: "real estate cleaning Melbourne", angle: "fast turnarounds with fewer handover issues" },
  { slug: "bathroom-detail-cleaning-guide", title: "Bathroom detail cleaning guide for inspections and handovers", category: "Property cleaning", image: "assets/work-bathroom-clean.jpg", keyword: "bathroom detail cleaning Melbourne", angle: "high-visibility bathroom presentation" },
  { slug: "kitchen-detail-cleaning-before-sale", title: "Kitchen detail cleaning before sale: the surfaces buyers notice first", category: "Property cleaning", image: "assets/work-kitchen-clean.jpg", keyword: "kitchen cleaning before sale Melbourne", angle: "sale-ready kitchen presentation" },
  { slug: "builders-cleaning-handover-readiness", title: "What builders cleaning should cover before final handover", category: "Builders cleaning", image: "assets/work-bathroom-clean.jpg", keyword: "builders cleaning handover Melbourne", angle: "staged builders cleaning and handover detail" },
  { slug: "post-construction-dust-removal-guide", title: "Post-construction dust removal guide for finished residential projects", category: "Builders cleaning", image: "assets/work-builders-handover.jpg", keyword: "post construction cleaning Melbourne", angle: "dust removal after construction work" },
  { slug: "builders-cleaning-stage-by-stage", title: "Builders cleaning stage by stage: rough clean, detail clean, final clean", category: "Builders cleaning", image: "assets/work-builders-handover.jpg", keyword: "builders clean stages Melbourne", angle: "breaking the clean into practical stages" },
  { slug: "new-build-handover-cleaning-checklist", title: "New-build handover cleaning checklist for developers and builders", category: "Builders cleaning", image: "assets/work-new-build-clean.jpg", keyword: "new build handover cleaning Melbourne", angle: "developer handover preparation" },
  { slug: "builders-cleaning-for-bathrooms-and-kitchens", title: "Builders cleaning for bathrooms and kitchens that need a polished finish", category: "Builders cleaning", image: "assets/work-bathroom-clean.jpg", keyword: "builders bathroom cleaning Melbourne", angle: "wet area and kitchen detail presentation" },
  { slug: "glass-and-joinery-cleaning-after-construction", title: "Glass and joinery cleaning after construction without missing the details", category: "Builders cleaning", image: "assets/work-builders-handover.jpg", keyword: "construction glass cleaning Melbourne", angle: "joinery, fixtures and glazing detail" },
  { slug: "white-card-cleaning-crews-why-it-matters", title: "Why White Card certified cleaning crews matter on active building sites", category: "Builders cleaning", image: "assets/work-builders-handover.jpg", keyword: "White Card cleaning Melbourne", angle: "site compliance and safer scheduling" }
];

const blogImages = ["assets/work-office-clean.jpg", "assets/work-property-kitchen.jpg", "assets/work-bathroom-clean.jpg", "assets/work-polished-floor.jpg", "assets/work-window-clean.jpg", "assets/work-builders-handover.jpg", "assets/work-kitchen-clean.jpg", "assets/work-new-build-clean.jpg"];

const makeExcerpt = (topic) =>
  `A practical ${topic.category.toLowerCase()} guide covering ${topic.angle}, timing, walkthrough planning and presentation standards for Melbourne sites.`;

const makeIntro = (topic) =>
  `${topic.title.charAt(0).toUpperCase() + topic.title.slice(1)} matters because ${topic.angle} can directly affect how a site feels, how quickly it turns around and how confidently owners, tenants, teams or clients move to the next step. This guide breaks the process into a practical plan businesses and property teams across Melbourne can actually use.`;

const makeFaqs = (topic) => [
  {
    q: `How often should ${topic.category === "Commercial cleaning" ? "this kind of cleaning" : "a clean like this"} be scheduled?`,
    a: `That depends on how busy the site is, how quickly standards drop between visits and whether the space is being prepared for an inspection, handover or day-to-day use. A walkthrough is usually the fastest way to set the right schedule.`
  },
  {
    q: "Can this be booked after hours or on weekends?",
    a: "Yes. Flexible scheduling is often the best way to protect access, avoid disruption and keep the cleaning aligned with your deadline."
  },
  {
    q: "What makes the biggest difference to the final result?",
    a: `Clear access, a realistic scope and enough time for detail work. The best outcomes usually come from knowing which spaces matter most and planning the clean around those priorities from the start.`
  }
];

const makeSections = (topic) => {
  const focusMap = {
    "Commercial cleaning": [
      "Start with the highest-use spaces",
      "Match the frequency to real site traffic",
      "Protect presentation in client-facing areas",
      "Build flexibility into the cleaning schedule",
      "Use walkthroughs to tighten the scope"
    ],
    "Property cleaning": [
      "Plan the clean around access and timing",
      "Focus on the rooms people judge first",
      "Handle optional extras in the same scope",
      "Leave room for final presentation checks",
      "Keep handover standards consistent"
    ],
    "Builders cleaning": [
      "Break the clean into practical stages",
      "Treat dust and residue as separate problems",
      "Prioritise glass, joinery and wet areas",
      "Coordinate the clean with the build program",
      "Finish with a handover-focused final check"
    ]
  };

  return focusMap[topic.category].map((heading, index) => ({
    heading,
    body: [
      `${heading} is where ${topic.keyword} becomes practical. Instead of treating every job the same, the better approach is to look at how the site is used, where presentation matters most and what needs to be finished before the next person walks through the door. That is usually the point where a generic clean starts to feel inadequate and a planned scope becomes much more valuable.`,
      `For Melbourne teams dealing with ${topic.angle}, this step helps reduce rework and creates a cleaner sequence from access to final check. It also makes it easier to allocate time properly so the detail work is not rushed at the end.`,
      `A reliable outcome usually comes from choosing the right priorities early, confirming access, clarifying expectations and adjusting the clean to the condition of the space on the day. That sounds simple, but it is exactly what helps a site feel genuinely ready instead of just quickly tidied.`
    ]
  }));
};

const blogPosts = blogTopicDefinitions.map((topic, index) => ({
  ...topic,
  image: topic.image || blogImages[index % blogImages.length],
  date: `${String(22 - (index % 20)).padStart(2, "0")} June 2026`,
  readTime: `${6 + (index % 4)} min read`,
  excerpt: makeExcerpt(topic),
  intro: makeIntro(topic),
  sections: makeSections(topic),
  faqs: makeFaqs(topic),
  seoTitle: `${topic.title} | AILA Property Solutions Melbourne`,
  seoDescription: `Read AILA Property Solutions' guide to ${topic.keyword}, with practical advice for Melbourne workplaces, properties and handovers.`
}));

const blogIndex = Object.fromEntries(blogPosts.map((post) => [post.slug, post]));

const image = (src, alt, loading = "lazy") => `<img src="${src}" alt="${alt}" loading="${loading}">`;
const overline = (text, dark = false) => `<small class="overline${dark ? " dark" : ""}">${text}</small>`;
const articleUrl = (slug) => `blog-post.html?slug=${slug}`;
const articleLink = (slug, pageNumber) => `blog-post.html?slug=${slug}${pageNumber && pageNumber > 1 ? `&page=${pageNumber}` : ""}`;

const setSeo = ({ title, description }) => {
  if (title) document.title = title;
  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag && description) descriptionTag.setAttribute("content", description);
};

const setArticleSchema = (post) => {
  const existing = document.getElementById("article-schema");
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.id = "article-schema";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    datePublished: "2026-06-22",
    dateModified: "2026-06-22",
    author: { "@type": "Organization", name: "AILA Property Solutions" },
    publisher: { "@type": "Organization", name: "AILA Property Solutions" },
    articleSection: post.category,
    mainEntityOfPage: `${location.origin}${location.pathname}?slug=${post.slug}`
  });
  document.head.appendChild(script);
};

const header = () => `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="utility">
    <div class="wrap">
      <span>Melbourne-wide cleaning specialists</span>
      <div>
        <span>After-hours & weekends available</span>
        <a href="${company.phoneHref}">${company.phone}</a>
      </div>
    </div>
  </div>
  <header class="header" id="top">
    <div class="wrap nav-row">
      <a class="logo" href="index.html"><img src="assets/aila-logo.png" alt="AILA Property Solutions — Cleaning Specialists"></a>
      <button class="menu-btn" aria-expanded="false" aria-controls="nav" aria-label="Open navigation"><span></span><span></span><span></span></button>
      <nav id="nav" aria-label="Main navigation">
        <div class="nav-item has-mega">
          <button aria-expanded="false">Commercial <i>⌄</i></button>
          <div class="mega">
            <div class="mega-intro">
              <small>Commercial cleaning</small>
              <h2>Keep business<br><em>moving.</em></h2>
              <p>Reliable cleaning shaped around your workplace, access requirements and operating hours.</p>
              <a href="commercial-cleaning.html">Explore commercial cleaning <span>↗</span></a>
            </div>
            <div class="mega-links">
              <small>Workplace services</small>
              <a href="offices-workspaces.html"><b>Offices & workspaces</b><span>Clean, productive environments for teams and visitors.</span></a>
              <a href="industrial-cleaning.html"><b>Warehouses & factories</b><span>Practical cleaning for active sites and high-traffic facilities.</span></a>
              <a href="industrial-cleaning.html"><b>Industrial spaces</b><span>Site-aware support for demanding commercial environments.</span></a>
              <a href="commercial-cleaning.html"><b>All commercial services</b><span>Routine, one-off and after-hours cleaning solutions.</span></a>
            </div>
            <div class="mega-aside">
              <small>Popular</small>
              <a href="commercial-cleaning.html"><span>External window cleaning</span><i>↗</i></a>
              <a href="commercial-cleaning.html"><span>Ongoing routine cleaning</span><i>↗</i></a>
              <a href="quote.html"><span>One-off deep cleans</span><i>↗</i></a>
              <div class="mega-callout">
                <b>Need us quickly?</b>
                <p>Ask about short-notice attendance and after-hours support.</p>
                <a href="quote.html">Get a fast quote →</a>
              </div>
            </div>
          </div>
        </div>
        <div class="nav-item has-mega">
          <button aria-expanded="false">Property <i>⌄</i></button>
          <div class="mega">
            <div class="mega-intro property">
              <small>Property cleaning</small>
              <h2>Ready for<br><em>what’s next.</em></h2>
              <p>Detailed cleans for leases, sales, handovers, builders projects and fast property resets.</p>
              <a href="property-cleaning.html">Explore property cleaning <span>↗</span></a>
            </div>
            <div class="mega-links">
              <small>Property services</small>
              <a href="end-of-lease.html"><b>End of lease cleaning</b><span>Inspection-ready move-out cleans with detail where it counts.</span></a>
              <a href="builders-cleaning.html"><b>Builders cleaning</b><span>White Card certified final-stage cleaning for handovers.</span></a>
              <a href="property-cleaning.html"><b>Pre-sale & handover</b><span>Presentation-focused cleaning when deadlines are close.</span></a>
              <a href="property-cleaning.html"><b>Move-in / move-out</b><span>A clean reset between occupants, tenants or owners.</span></a>
            </div>
            <div class="mega-aside">
              <small>Specialist services</small>
              <a href="property-cleaning.html"><span>Estate clearance cleaning</span><i>↗</i></a>
              <a href="quote.html"><span>Carpet cleaning</span><i>↗</i></a>
              <a href="quote.html"><span>Pressure washing</span><i>↗</i></a>
              <div class="mega-callout">
                <b>Property deadline?</b>
                <p>Weekend and after-hours options available across Melbourne.</p>
                <a href="contact.html">Talk to our team →</a>
              </div>
            </div>
          </div>
        </div>
        <a href="industries.html">Industries</a>
        <a href="blog.html">Blog</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>
      <a class="header-cta" href="quote.html">Get a free quote <span>↗</span></a>
    </div>
  </header>
`;

const footer = () => `
  <section class="cta-band">
    <div class="wrap">
      <div>
        <small>Free onsite walkthrough & quote</small>
        <h2>Let’s get your space ready.</h2>
      </div>
      <a class="button lime" href="quote.html">Tell us what you need <span>↗</span></a>
    </div>
  </section>
  <footer>
    <div class="wrap footer-grid">
      <div class="footer-brand">
        <img src="assets/aila-logo.png" alt="AILA Property Solutions">
        <p>Commercial and property cleaning that keeps Melbourne moving.</p>
      </div>
      <div>
        <h3>Commercial</h3>
        <a href="offices-workspaces.html">Offices & workspaces</a>
        <a href="industrial-cleaning.html">Warehouses & factories</a>
        <a href="commercial-cleaning.html">Routine cleaning</a>
        <a href="commercial-cleaning.html">Deep cleaning</a>
      </div>
      <div>
        <h3>Property</h3>
        <a href="end-of-lease.html">End of lease</a>
        <a href="builders-cleaning.html">Builders cleaning</a>
        <a href="property-cleaning.html">Pre-sale & handover</a>
        <a href="blog.html">Blog & insights</a>
      </div>
      <div>
        <h3>Talk to us</h3>
        <a class="accent" href="${company.phoneHref}">${company.phone}</a>
        <a href="${company.emailHref}">${company.email}</a>
        <p><a href="${company.locationUrl}" target="_blank" rel="noopener">${company.location}</a><br>Monday–Sunday</p>
      </div>
    </div>
    <div class="wrap footer-bottom">
      <span>© ${new Date().getFullYear()} AILA Property Solutions</span>
      <div><a href="#">Privacy</a><a href="#">Terms</a></div>
      <a href="#top">Back to top ↑</a>
    </div>
  </footer>
  <a class="mobile-cta" href="quote.html">Get a free quote <span>↗</span></a>
`;

const trust = () => `
  <section class="trust-strip">
    <div class="wrap">
      <span><b>✓</b> Fully insured</span>
      <span><b>✓</b> White Card certified</span>
      <span><b>✓</b> Weekend availability</span>
      <span><b>✓</b> After-hours service</span>
      <span><b>✓</b> Short-notice attendance</span>
    </div>
  </section>
`;

const recentWork = () => `
  <section class="recent-work section">
    <div class="wrap">
      <div class="section-heading">
        <div>${overline("Recent AILA work", true)}<h2>Real spaces.<br><em>Ready to go.</em></h2></div>
        <p>A selection of commercial, property and handover cleans completed across Melbourne and surrounding suburbs.</p>
      </div>
      <div class="work-grid">
        <figure>${image("assets/work-office-clean.jpg", "Cleaned Melbourne commercial office", "eager")}<figcaption>Commercial office cleaning</figcaption></figure>
        <figure>${image("assets/work-kitchen-clean.jpg", "Clean kitchen after an AILA property clean", "eager")}<figcaption>Property handover cleaning</figcaption></figure>
        <figure>${image("assets/work-bathroom-clean.jpg", "Clean modern bathroom and shower", "eager")}<figcaption>Builders detail clean</figcaption></figure>
        <figure>${image("assets/work-polished-floor.jpg", "Polished timber floor after cleaning", "eager")}<figcaption>Move-out floor clean</figcaption></figure>
        <figure>${image("assets/work-window-clean.jpg", "Clean exterior window reflecting blue sky", "eager")}<figcaption>External window cleaning</figcaption></figure>
        <figure>${image("assets/work-new-build-clean.jpg", "New-build kitchen and living space after handover cleaning", "eager")}<figcaption>New-build handover clean</figcaption></figure>
      </div>
    </div>
  </section>
`;

const servicePage = (data) => `
  <main id="main">
    <section class="inner-hero">
      <div class="inner-hero-img">${image(data.image, data.title)}</div>
      <div class="hero-overlay"></div>
      <div class="wrap inner-hero-copy">
        <div class="crumb"><a href="index.html">Home</a><span>—</span><span>${data.kicker}</span></div>
        ${overline(data.kicker)}
        <h1>${data.title}</h1>
        <p>${data.intro}</p>
        <a class="button lime" href="quote.html">Book a free walkthrough <span>↗</span></a>
      </div>
    </section>
    ${trust()}
    <section class="page-intro section">
      <div class="wrap split">
        <div>${overline("The AILA approach", true)}<h2>${data.sectionTitle}</h2></div>
        <div><p class="lead">${data.sectionCopy}</p><a class="line-link" href="about.html">Why choose AILA <span>↗</span></a></div>
      </div>
      <div class="wrap stat-row">${data.stats.map(([title, meta]) => `<div><strong>${title}</strong><span>${meta}</span></div>`).join("")}</div>
    </section>
    <section class="service-grid-section section">
      <div class="wrap">
        <div class="section-heading">
          <div>${overline("Services", true)}<h2>What we can handle.</h2></div>
          <p>Choose a service to start a conversation, or request a walkthrough and we’ll shape a complete scope for your site.</p>
        </div>
        <div class="cards">${data.services.map(([title, copy, href], index) => `<a class="service-card" href="${href}"><span>0${index + 1}</span><h3>${title}</h3><p>${copy}</p><i>↗</i></a>`).join("")}</div>
      </div>
    </section>
    <section class="why-section section">
      <div class="wrap why-grid">
        <div class="why-photo">${image("assets/work-bathroom-clean.jpg", "Professional cleaner working on site")}</div>
        <div class="why-copy">
          ${overline("Why AILA")}
          <h2>Fast answers.<br><em>Reliable action.</em></h2>
          <p>We understand that cleaning often sits on the critical path. Our team is easy to reach, flexible when plans move and accountable from scope to final check.</p>
          <ul><li>Free onsite walkthrough and quote</li><li>Flexible scheduling around your operations</li><li>Weekend and after-hours availability</li><li>Fully insured and White Card certified</li></ul>
          <a class="button white" href="contact.html">Talk to our team <span>↗</span></a>
        </div>
      </div>
    </section>
  </main>
`;

const home = () => `
  <main id="main">
    <section class="home-hero">
      <img src="assets/aila-office-cleaning-hero.png" alt="AILA cleaning specialists in a modern office">
      <div class="hero-overlay"></div>
      <div class="wrap home-copy">
        ${overline("Commercial & property cleaning · Melbourne")}
        <h1>Your space.<br><em>Our standard.</em></h1>
        <p>Fast, reliable cleaning for workplaces and properties—on your schedule, even at short notice.</p>
        <div><a class="button lime" href="quote.html">Book a free walkthrough <span>↗</span></a><a class="text-button" href="commercial-cleaning.html">Explore our services ↓</a></div>
      </div>
    </section>
    ${trust()}
    <section class="home-intro section">
      <div class="wrap split">
        <div>${overline("Clean without compromise", true)}<h2>We work around<br><em>the way you work.</em></h2></div>
        <div><p class="lead">A clean space should make business easier—not become another job to manage.</p><p>From routine workplace cleaning to urgent property handovers, one responsive team keeps every detail moving.</p><a class="line-link" href="about.html">Meet AILA Property Solutions <span>↗</span></a></div>
      </div>
    </section>
    <section class="home-services">
      <a href="commercial-cleaning.html"><div class="service-image">${image("assets/work-office-clean.jpg", "Modern commercial office")}</div><div><span>01 / Commercial</span><h2>Workplaces that<br>work better.</h2><p>Offices, warehouses, factories, industrial sites and more.</p><b>Explore commercial cleaning ↗</b></div></a>
      <a href="property-cleaning.html"><div class="service-image">${image("assets/work-property-kitchen.jpg", "Clean modern property interior")}</div><div><span>02 / Property</span><h2>Properties ready<br>for what’s next.</h2><p>Leases, sales, handovers, builders cleans and moving day.</p><b>Explore property cleaning ↗</b></div></a>
    </section>
    <section class="quick-section section">
      <div class="wrap">
        <div class="section-heading">
          <div>${overline("Ready when you are", true)}<h2>The cleaner who says<br><em>“Yes, we can.”</em></h2></div>
          <p>Schedules change. Tenants move. A site needs to be ready tomorrow. We respond quickly and work around your operations.</p>
        </div>
        <div class="quick-grid"><article><b>01</b><h3>After-hours service</h3><p>We clean around your people, customers and production.</p></article><article><b>02</b><h3>Weekend availability</h3><p>Get the work done while your space is quiet and accessible.</p></article><article><b>03</b><h3>Short-notice attendance</h3><p>A responsive team for urgent cleans and changing deadlines.</p></article></div>
      </div>
    </section>
    ${recentWork()}
  </main>
`;

const industries = () => `
  <main id="main">
    <section class="simple-hero">
      <div class="wrap">
        <div>${overline("Industries we serve")}<h1>Cleaning that fits<br><em>your environment.</em></h1></div>
        <p>Different sites demand different methods. We shape the scope around your people, access, risks and operating hours.</p>
      </div>
    </section>
    ${trust()}
    <section class="industry-list section">
      <div class="wrap">${[
        ["Corporate & offices", "Productive, presentation-ready workplaces cleaned around your team.", "offices-workspaces.html", "assets/work-office-clean.jpg"],
        ["Industrial & warehouse", "Safety-aware cleaning for active facilities and high-traffic sites.", "industrial-cleaning.html", "assets/work-staff-kitchen.jpg"],
        ["Real estate & property", "Fast turnarounds for listings, leases, moves and handovers.", "property-cleaning.html", "assets/work-property-kitchen.jpg"],
        ["Builders & construction", "White Card certified crews for staged and final construction cleans.", "builders-cleaning.html", "assets/work-builders-handover.jpg"]
      ].map(([title, copy, href, img], index) => `<a href="${href}" class="industry-row"><span>0${index + 1}</span><div><h2>${title}</h2><p>${copy}</p><b>Explore service ↗</b></div>${image(img, title)}</a>`).join("")}</div>
    </section>
  </main>
`;

const about = () => `
  <main id="main">
    <section class="simple-hero about-hero">
      <div class="wrap">
        <div>${overline("About AILA")}<h1>We make clean<br><em>feel effortless.</em></h1></div>
        <p>A Melbourne cleaning partner built around responsiveness, flexibility and doing the job properly.</p>
      </div>
    </section>
    ${trust()}
    <section class="story section">
      <div class="wrap split">
        <div>${overline("Our story", true)}<h2>A straightforward approach to a detail-heavy job.</h2></div>
        <div><p class="lead">AILA Property Solutions exists to make commercial and property cleaning easier to organise and easier to trust.</p><p>We believe good service is simple: answer quickly, turn up prepared, communicate clearly and leave the space ready for what comes next.</p></div>
      </div>
      <div class="wrap values"><article><span>01</span><h3>Responsive</h3><p>Fast answers and practical action when timing matters.</p></article><article><span>02</span><h3>Flexible</h3><p>Scheduling built around your site, team and deadline.</p></article><article><span>03</span><h3>Accountable</h3><p>Clear scopes, reliable communication and a final check.</p></article><article><span>04</span><h3>Prepared</h3><p>Fully insured, White Card certified and ready to work.</p></article></div>
    </section>
    <section class="photo-banner">${image("assets/work-open-plan-clean.jpg", "Professional team and workplace environment")}<div class="wrap"><h2>One team.<br>One high standard.</h2></div></section>
  </main>
`;

const form = (quoteMode = false) => `
  <form class="contact-form" id="contact-form">
    <div class="field-row"><label>Your name<input name="name" required placeholder="Jane Smith"></label><label>Phone<input name="phone" required placeholder="04xx xxx xxx"></label></div>
    <div class="field-row"><label>Email<input name="email" type="email" required placeholder="jane@company.com.au"></label><label>Service<select name="service"><option>Commercial cleaning</option><option>Property cleaning</option><option>Builders cleaning</option><option>Carpet cleaning</option><option>Pressure washing</option><option>Other</option></select></label></div>
    ${quoteMode ? '<div class="field-row"><label>Site type<input name="site" placeholder="Office, warehouse, property..."></label><label>Melbourne suburb<input name="suburb" placeholder="e.g. Richmond"></label></div>' : ""}
    <label>How can we help?<textarea name="message" rows="5" placeholder="Tell us about your space, timing and priorities..."></textarea></label>
    <button class="button lime" type="submit">${quoteMode ? "Request my free quote" : "Send enquiry"} <span>↗</span></button>
    <p class="form-note">Demo form—connect your preferred CRM or form handler before launch.</p>
    <div class="success" role="status" hidden><b>Thanks—your enquiry is ready.</b><span>This demo form is not connected yet.</span></div>
  </form>
`;

const contactPage = (quoteMode = false) => `
  <main id="main">
    <section class="contact-page">
      <div class="wrap contact-grid">
        <div class="contact-copy">
          ${overline(quoteMode ? "Free onsite walkthrough" : "Contact AILA")}
          <h1>${quoteMode ? "Get a clear scope.<br><em>Get a free quote.</em>" : "Let’s talk about<br><em>your space.</em>"}</h1>
          <p>${quoteMode ? "Tell us what needs cleaning and when. We’ll arrange a walkthrough, understand the details and give you a clear, no-obligation quote." : "Need routine service, a one-off clean or help at short notice? Our Melbourne team is ready to respond."}</p>
          <div class="contact-details"><a href="${company.phoneHref}"><span>Call us</span><b>${company.phone}</b></a><a href="${company.emailHref}"><span>Email us</span><b>${company.email}</b></a><a href="${company.locationUrl}" target="_blank" rel="noopener"><span>Location</span><b>${company.location}</b></a><div><span>Availability</span><b>Monday–Sunday<br>Day, evening & after-hours</b></div></div>
        </div>
        ${form(quoteMode)}
      </div>
    </section>
  </main>
`;

const blogCard = (post, currentPage) => `
  <article class="blog-card" data-slug="${post.slug}">
    <a class="blog-card-image" href="${articleLink(post.slug, currentPage)}">${image(post.image, post.title)}</a>
    <div class="blog-card-copy">
      <div class="blog-meta"><span>${post.category}</span><span>${post.readTime}</span></div>
      <h3><a href="${articleLink(post.slug, currentPage)}">${post.title}</a></h3>
      <p>${post.excerpt}</p>
      <a class="line-link" href="${articleLink(post.slug, currentPage)}">Read article <span>↗</span></a>
    </div>
  </article>
`;

const pagination = (currentPage, totalPages) => `
  <nav class="pagination" aria-label="Blog pagination">
    <a class="pagination-link ${currentPage === 1 ? "is-disabled" : ""}" href="blog.html?page=${Math.max(1, currentPage - 1)}" ${currentPage === 1 ? 'aria-disabled="true"' : ""}>Previous</a>
    <div class="pagination-numbers">
      ${Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => `<a class="pagination-number ${pageNumber === currentPage ? "is-current" : ""}" href="blog.html?page=${pageNumber}">${pageNumber}</a>`).join("")}
    </div>
    <a class="pagination-link ${currentPage === totalPages ? "is-disabled" : ""}" href="blog.html?page=${Math.min(totalPages, currentPage + 1)}" ${currentPage === totalPages ? 'aria-disabled="true"' : ""}>Next</a>
  </nav>
`;

const blogPage = () => {
  const pageParam = Number(new URLSearchParams(window.location.search).get("page")) || 1;
  const postsPerPage = 15;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const currentPage = Math.min(Math.max(pageParam, 1), totalPages);
  const featured = blogPosts[0];
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  return `
    <main id="main">
      <section class="simple-hero blog-hero">
        <div class="wrap">
          <div>${overline("AILA blog")}<h1>Cleaning guides<br><em>built to rank and convert.</em></h1></div>
          <p>Long-form SEO content for commercial cleaning, property presentation, builders cleaning, end of lease handovers and maintenance planning across Melbourne.</p>
        </div>
      </section>
      ${trust()}
      ${currentPage === 1 ? `
        <section class="blog-feature section">
          <div class="wrap blog-feature-grid">
            <a class="blog-feature-image" href="${articleLink(featured.slug, currentPage)}">${image(featured.image, featured.title, "eager")}</a>
            <div class="blog-feature-copy">
              ${overline("Featured article", true)}
              <div class="blog-meta"><span>${featured.category}</span><span>${featured.date}</span><span>${featured.readTime}</span></div>
              <h2><a href="${articleLink(featured.slug, currentPage)}">${featured.title}</a></h2>
              <p>${featured.intro}</p>
              <a class="button lime" href="${articleLink(featured.slug, currentPage)}">Read featured article <span>↗</span></a>
            </div>
          </div>
        </section>
      ` : ""}
      <section class="blog-listing section">
        <div class="wrap">
          <div class="section-heading">
            <div>${overline("Latest posts", true)}<h2>30 SEO-ready blog articles with pagination.</h2></div>
            <p>Each article is long-form, category-based and structured so the same system can later pull from a headless CMS, spreadsheet feed or API.</p>
          </div>
          <div class="blog-grid">
            ${paginatedPosts.map((post) => blogCard(post, currentPage)).join("")}
          </div>
          ${pagination(currentPage, totalPages)}
        </div>
      </section>
    </main>
  `;
};

const articleCtaCard = () => `
  <aside class="blog-post-sidebar">
    ${overline("Need cleaning help?", true)}
    <h3>Get a fast quote from a Melbourne team that actually responds.</h3>
    <p>Tell us what needs cleaning, your timeline and your suburb. We’ll help you scope it properly and move quickly if timing is tight.</p>
    <ul class="cta-points">
      <li>Free onsite walkthrough and quote</li>
      <li>Short-notice attendance available</li>
      <li>Weekend and after-hours service</li>
      <li>Fully insured and White Card certified</li>
    </ul>
    <div class="cta-actions">
      <a class="button lime" href="quote.html">Get a free quote <span>↗</span></a>
      <a class="button ghost" href="${company.phoneHref}">Call ${company.phone} <span>↗</span></a>
    </div>
  </aside>
`;

const faqMarkup = (faqs) => `
  <section class="blog-faq">
    <h2>Frequently asked questions</h2>
    <div class="faq-list">
      ${faqs.map((faq) => `<article><h3>${faq.q}</h3><p>${faq.a}</p></article>`).join("")}
    </div>
  </section>
`;

const blogPostPage = (post) => {
  const related = blogPosts.filter((entry) => entry.slug !== post.slug).slice(0, 3);
  const originPage = Number(new URLSearchParams(window.location.search).get("page")) || 1;
  return `
    <main id="main">
      <article class="blog-post-page">
        <section class="inner-hero blog-post-hero">
          <div class="inner-hero-img">${image(post.image, post.title, "eager")}</div>
          <div class="hero-overlay"></div>
          <div class="wrap inner-hero-copy">
            <div class="crumb"><a href="index.html">Home</a><span>—</span><a href="blog.html?page=${originPage}">Blog</a><span>—</span><span>${post.category}</span></div>
            ${overline(post.category)}
            <h1>${post.title}</h1>
            <p>${post.excerpt}</p>
            <div class="blog-meta blog-meta-light"><span>${post.date}</span><span>${post.readTime}</span><span>Melbourne guide</span></div>
          </div>
        </section>
        <section class="blog-post-body section">
          <div class="wrap blog-post-layout">
            ${articleCtaCard()}
            <div class="blog-post-content">
              <p class="lead">${post.intro}</p>
              ${post.sections.map((section) => `<section class="blog-copy-block"><h2>${section.heading}</h2>${section.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}</section>`).join("")}
              ${faqMarkup(post.faqs)}
            </div>
          </div>
        </section>
        <section class="blog-related section">
          <div class="wrap">
            <div class="section-heading">
              <div>${overline("More from AILA", true)}<h2>Related articles.</h2></div>
              <p>More long-form guides designed to support search visibility, answer buyer questions and turn content traffic into leads.</p>
            </div>
            <div class="blog-grid">
              ${related.map((item) => blogCard(item, originPage)).join("")}
            </div>
          </div>
        </section>
      </article>
    </main>
  `;
};

const renderPage = () => {
  const slug = new URLSearchParams(window.location.search).get("slug");
  switch (page) {
    case "home":
      setSeo(pageMeta.home);
      return home();
    case "industries":
      setSeo(pageMeta.industries);
      return industries();
    case "about":
      setSeo(pageMeta.about);
      return about();
    case "contact":
      setSeo(pageMeta.contact);
      return contactPage(false);
    case "quote":
      setSeo(pageMeta.quote);
      return contactPage(true);
    case "blog":
      setSeo(pageMeta.blog);
      return blogPage();
    case "post": {
      const post = blogIndex[slug] || blogPosts[0];
      setSeo({ title: post.seoTitle, description: post.seoDescription });
      setTimeout(() => setArticleSchema(post), 0);
      return blogPostPage(post);
    }
    default:
      setSeo(pageMeta[page] || pageMeta.home);
      return servicePage(pages[page]);
  }
};

document.querySelector("#app").innerHTML = header() + renderPage() + footer();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#nav");
const compactNav = matchMedia("(max-width: 1100px)");
const desktopMega = matchMedia("(min-width: 1101px)");

const closeNav = () => {
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.setAttribute("aria-label", "Open navigation");
  nav.classList.remove("open");
  document.body.classList.remove("nav-open");
  document.querySelectorAll(".has-mega > button").forEach((button) => button.setAttribute("aria-expanded", "false"));
};

menuBtn.addEventListener("click", () => {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!isOpen));
  menuBtn.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  nav.classList.toggle("open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

document.querySelectorAll(".has-mega > button").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (!compactNav.matches) return;
    event.preventDefault();
    const isOpen = button.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".has-mega > button").forEach((item) => item.setAttribute("aria-expanded", "false"));
    button.setAttribute("aria-expanded", String(!isOpen));
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNav();
});

document.querySelectorAll("nav a").forEach((anchor) => {
  const current = location.pathname.split("/").pop() || "index.html";
  const href = anchor.getAttribute("href");
  if (href === current || (page === "post" && href === "blog.html")) anchor.classList.add("current");
  anchor.addEventListener("click", () => {
    if (compactNav.matches) closeNav();
  });
});

document.querySelectorAll(".pagination-link.is-disabled").forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

const resetNavigationState = () => {
  if (desktopMega.matches) closeNav();
};

compactNav.addEventListener("change", resetNavigationState);
desktopMega.addEventListener("change", resetNavigationState);

const formEl = document.querySelector("#contact-form");
if (formEl) {
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    formEl.querySelector(".success").hidden = false;
    formEl.querySelector("button").innerHTML = "Enquiry prepared ✓";
  });
}

const loadMotionLibrary = (src) =>
  new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

const initPremiumMotion = () => {
  if (!window.gsap || !window.ScrollTrigger || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });
  gsap.ticker.lagSmoothing(800, 33);
  ScrollTrigger.config({ ignoreMobileResize: true });

  const isCompact = compactNav.matches;

  const revealOnScroll = (targets, vars = {}) => {
    const items = gsap.utils.toArray(targets).filter(Boolean);
    if (!items.length) return;
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { y: vars.y ?? 24, x: vars.x ?? 0, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: vars.duration ?? 0.56,
          delay: vars.stagger ? index * vars.stagger : 0,
          ease: vars.ease ?? "power2.out",
          immediateRender: false,
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: vars.trigger ? vars.trigger(item) : item,
            start: vars.start ?? "top 89%",
            once: true,
            fastScrollEnd: true
          }
        }
      );
    });
  };

  const hero = document.querySelector(".home-hero, .inner-hero, .simple-hero, .contact-page");
  const heroCopy = document.querySelector(".home-copy, .inner-hero-copy, .simple-hero .wrap, .contact-grid");
  if (hero && heroCopy) {
    const heroElements = heroCopy.querySelectorAll(".overline, .crumb, h1, p, .button, .text-button, .contact-details, .blog-meta");
    gsap.timeline({ defaults: { ease: "power2.out" } })
      .from(".header .logo", { y: -10, opacity: 0, duration: 0.38 })
      .from(".header nav > *, .header-cta", { y: -8, opacity: 0, duration: 0.3, stagger: 0.035 }, "-=.14")
      .from(heroElements, { y: 18, opacity: 0, duration: 0.5, stagger: isCompact ? 0.035 : 0.045 }, "-=.08");

    const heroImage = hero.querySelector(":scope > img, .inner-hero-img img");
    if (heroImage && !isCompact) {
      gsap.fromTo(heroImage, { scale: 1.025 }, { scale: 1, duration: 1, ease: "power2.out" });
    }
  }

  revealOnScroll(".trust-strip span", { y: 10, duration: 0.34, stagger: 0.03, trigger: () => document.querySelector(".trust-strip"), start: "top 95%" });

  document.querySelectorAll(".section-heading, .split, .blog-feature-grid, .blog-post-layout").forEach((group) => {
    revealOnScroll(group.children, { y: isCompact ? 18 : 22, duration: 0.5, stagger: 0.04, trigger: () => group, start: "top 89%" });
  });

  document.querySelectorAll(".quick-grid, .cards, .values, .stat-row, .blog-grid, .faq-list").forEach((grid) => {
    revealOnScroll(grid.children, { y: 18, duration: 0.48, stagger: isCompact ? 0.02 : 0.035, trigger: () => grid, start: "top 91%" });
  });

  revealOnScroll(".home-services > a, .industry-row, .work-grid figure, .pagination", { y: 22, duration: 0.52, stagger: 0.02 });

  if (!isCompact) {
    document.querySelectorAll(".service-image img, .why-photo img, .photo-banner > img, .blog-feature-image img").forEach((img) => {
      gsap.fromTo(
        img,
        { yPercent: -2, scale: 1.015 },
        {
          yPercent: 2,
          scale: 1.015,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.25
          }
        }
      );
    });
    document.querySelectorAll(".has-mega").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const panel = item.querySelector(".mega");
        gsap.fromTo(panel, { opacity: 0, y: -5 }, { opacity: 1, y: 0, duration: 0.16, ease: "power2.out", overwrite: true });
      });
    });
  }

  ScrollTrigger.refresh();
};

loadMotionLibrary("https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js")
  .then(() => loadMotionLibrary("https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"))
  .then(initPremiumMotion)
  .catch(() => document.documentElement.classList.add("motion-fallback"));
