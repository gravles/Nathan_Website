// ===== Translations =====
const translations = {
  en: {
    'nav.about': 'About',
    'nav.competencies': 'Competencies',
    'nav.topics': 'Topics',
    'nav.research': 'Research',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Director Analyst – IT Services &nbsp;·&nbsp; Gartner',
    'hero.subtitle': 'Sourcing, Procurement &amp; Vendor Management',
    'hero.tags': '<span>IT Sourcing &amp; Contracting</span><span>Global Service Providers</span><span>AI / GenAI / Cloud</span><span>Bilingual EN/FR</span><span>20+ Years Experience</span><span>Ottawa, Ontario</span>',
    'hero.cta': 'Get in Touch',
    'hero.cv': 'Download CV',

    'topics.label': 'Research Areas',
    'topics.title': 'Topics I Cover',
    'topics.cloud': '<span class="topic-tag topic-lg">IT Sourcing &amp; Procurement</span><span class="topic-tag topic-lg">Global Service Providers</span><span class="topic-tag topic-lg">RFP &amp; SOW Review</span><span class="topic-tag topic-md">Artificial Intelligence (AI)</span><span class="topic-tag topic-md">GenAI</span><span class="topic-tag topic-lg">Vendor Management</span><span class="topic-tag topic-md">Cloud Computing</span><span class="topic-tag topic-sm">DevOps</span><span class="topic-tag topic-md">ERP – SAP</span><span class="topic-tag topic-md">ERP – Oracle</span><span class="topic-tag topic-sm">MS Dynamics</span><span class="topic-tag topic-md">CRM / HCM</span><span class="topic-tag topic-sm">Workday</span><span class="topic-tag topic-sm">Salesforce</span><span class="topic-tag topic-md">Outsourcing Strategy</span><span class="topic-tag topic-sm">Nearshore / Offshore Delivery</span><span class="topic-tag topic-md">Contract Negotiation</span><span class="topic-tag topic-sm">SLA / KPI Frameworks</span><span class="topic-tag topic-sm">LCAP / RPA</span><span class="topic-tag topic-md">Custom Software Engineering</span><span class="topic-tag topic-sm">QA &amp; Testing</span><span class="topic-tag topic-sm">API Integration</span><span class="topic-tag topic-sm">Agile / Scrum</span><span class="topic-tag topic-md">Enterprise Architecture</span><span class="topic-tag topic-sm">Analytics &amp; Data</span><span class="topic-tag topic-sm">CX &amp; UX Services</span><span class="topic-tag topic-sm">Federal Government IT</span>',

    'contact.cv': 'Download CV',

    'about.label': 'Profile',
    'about.title': 'Analyst. Advisor.<br/>Thought Leader.',
    'about.text1': 'Director Analyst at <strong>Gartner</strong>, focused on IT Services Sourcing, Procurement, and Vendor Management. I produce thought-leading research and guide enterprise clients through mission-critical decisions — from RFP design and contract negotiation to global service provider selection across software engineering, cloud, AI/GenAI, ERP, and CRM markets.',
    'about.text2': 'Grounded in <strong>20+ years</strong> of hands-on experience in IT strategy, enterprise architecture, and federal government consulting, I bring a rare combination of practitioner depth and research rigour. My work spans sourcing advisory, written research (Lead Author, 8+ notes per year), webinars, conference presentations, and direct client engagement across Gartner\'s global network of 14,000+ client enterprises in 90+ countries.',
    'about.pills': '<span>IT Sourcing &amp; Procurement</span><span>Vendor Management</span><span>RFP &amp; Contract Review</span><span>Global Service Providers</span><span>AI / GenAI / Cloud</span><span>ERP · CRM · DevOps</span><span>Thought Leadership</span><span>Executive Advisory</span>',

    'comp.label': 'Expertise',
    'comp.title': 'Core Competencies',
    'comp.card1.title': 'IT Sourcing &amp; Procurement',
    'comp.card1.desc': 'RFP Design &amp; Review, SOW Analysis, SLA/KPI Frameworks, Vendor Negotiations, Outsourcing Strategy',
    'comp.card2.title': 'Global Service Providers',
    'comp.card2.desc': 'Incumbent &amp; Disruptor Landscape, Nearshore/Offshore Delivery, Provider Evaluation &amp; Selection',
    'comp.card3.title': 'Emerging Technology',
    'comp.card3.desc': 'AI, GenAI, Cloud, DevOps, LCAP/RPA, API Integration, Custom Software, QA &amp; Testing',
    'comp.card4.title': 'Enterprise Applications',
    'comp.card4.desc': 'ERP (SAP, Oracle, MS Dynamics), CRM/HCM (Workday, Salesforce), Enterprise Architecture',
    'comp.card5.title': 'Thought Leadership &amp; Research',
    'comp.card5.desc': 'Lead Author (8+ notes/year), 300+ Client Interactions/year, Webinars, Conference Presentations, Strategic Writing',

    'research.label': 'Research &amp; Speaking',
    'research.title': 'Selected Research &amp; Talks',
    'research.intro': 'Recent Gartner research authored as Lead Author, and conference presentations delivered to public- and private-sector technology leaders.',
    'research.pubType': 'Gartner Research Note',
    'research.pub1.date': 'May 2026',
    'research.pub1.desc': 'A performance control framework for AI "silent failures" — vendor models that meet uptime SLAs while quietly degrading in accuracy, fairness, or reliability — enforced through telemetry and financial accountability.',
    'research.pub1.tags': '<span>AI Vendor Management</span><span>SLAs &amp; Telemetry</span><span>Shadow AI</span>',
    'research.pub2.date': 'May 2026',
    'research.pub2.desc': 'Why buyers keep paying static, point-in-time pricing while vendors internalize AI productivity gains — and how to shift the burden of proof to vendors: prove it, price it, or rebalance it.',
    'research.pub2.tags': '<span>AI Contracting</span><span>Pricing &amp; Negotiation</span><span>Value Capture</span>',
    'research.pub3.date': 'March 2026',
    'research.pub3.desc': 'A modular "Spine and Ribs" sourcing architecture that balances the scale of global megavendors with sovereign, substitutable local components — executed through dynamic sourcing.',
    'research.pub3.tags': '<span>Sourcing Strategy</span><span>Digital Sovereignty</span><span>IT Resilience</span>',
    'research.pub4.date': 'January 2026',
    'research.pub4.desc': 'Embedding low-code application platforms into sourcing, planning, and vendor evaluation so IT operations move beyond resilience — gaining value from volatility and change.',
    'research.pub4.tags': '<span>Low-Code (LCAP)</span><span>Vendor Evaluation</span><span>Antifragility</span>',
    'research.speaking.type': 'Conference Presentation · 2026',
    'research.speaking.desc': 'An executive briefing for public-sector leaders on sovereign AI — the "kill switch" reality, why sovereignty is a spectrum rather than a checkbox, and a pragmatic road map for AI adoption in the Canadian government.',
    'research.speaking.tags': '<span>Sovereign AI</span><span>Government &amp; Public Sector</span><span>Geopolitical Risk</span><span>Canada</span>',
    'research.note': 'Full research notes are available to Gartner clients via gartner.com.',

    'exp.label': 'Career',
    'exp.title': 'Professional Experience',
    'gartner.h3': 'Director Analyst – IT Services',
    'gartner.subtitle': 'Sourcing, Procurement &amp; Vendor Management',
    'gartner.stat1': 'Advisory Notes<br/>per Year (Lead Author)',
    'gartner.stat2': 'Client Interactions<br/>per Year',
    'gartner.stat3': 'Client Enterprises<br/>Worldwide',
    'gartner.stat4': 'Countries<br/>Served',
    'gartner.stat5': 'Technology Domains<br/>(AI, ERP, Cloud &amp; more)',
    'gartner.topics': '<span>RFP &amp; SOW Review</span><span>SLA / KPI Analysis</span><span>Global Service Providers</span><span>AI &amp; GenAI</span><span>DevOps / LCAP / RPA</span><span>ERP (SAP · Oracle · MS Dynamics)</span><span>Cloud</span><span>CRM / HCM (Workday · Salesforce)</span><span>Custom Software</span><span>QA &amp; Testing</span>',

    'job1.date': 'September 2025 – Present',
    'job1.title': 'Director Analyst – IT Services',
    'job1.org': 'Gartner – Sourcing, Procurement &amp; Vendor Management',
    'job1.bullets': '<li>Creates thought-leading research and guides clients in the Software Engineering and IT application services market with a focus on sourcing practices, contracting, and negotiations.</li><li>Advises clients on sourcing issues, RFPs, and provider proposals; delivers actionable guidance through inquiries, presentations, webinars, and written content.</li><li>Produces high-quality advisory notes as Lead Author (8+ per year), covering areas including AI/GenAI, cloud, agile, custom software, analytics, CX, API, and QA.</li><li>Reviews IT outsourcing and application solution RFPs; guides clients on global service providers for software development and enterprise implementations.</li><li>Conducts research on global service provider landscape including DevOps, LCAP, RPA, ERP (SAP, Oracle, MS Dynamics), Cloud, and CRM/HCM (Workday, Salesforce).</li><li>Advises 300+ clients per year and collaborates with sales to support client acquisition and retention across 14,000+ client enterprises in 90+ countries.</li>',

    'job2.date': 'November 2021 – September 2025',
    'job2.title': 'Senior Business Consultant',
    'job2.org': 'Treasury Board Secretariat (TBS) – Office of the Chief HR Officer (OCHRO)',
    'job2.bullets': '<li>Advised senior executives on government relations strategies, public policy development, and regulatory compliance.</li><li>Conducted policy analysis on HR systems and federal initiatives, ensuring alignment with government priorities.</li><li>Developed stakeholder engagement strategies, fostering collaboration with federal departments and external partners.</li>',

    'job3.date': 'May 2021 – January 2022',
    'job3.title': 'Senior Business Consultant',
    'job3.org': 'Public Services and Procurement Canada (PSPC) – Digital Services Branch (DSB)',
    'job3.bullets': '<li>Delivered strategic advisory on government engagement, public policy alignment, and communications strategies for digital services.</li><li>Conducted detailed policy analysis on technology initiatives, advising on regulatory compliance and strategic communications.</li>',

    'job4.date': 'December 2019 – May 2021',
    'job4.title': 'Senior Business Transformation Consultant',
    'job4.org': 'Public Services and Procurement Canada (PSPC) – Digital Services Branch (DSB)',
    'job4.bullets': '<li>Led the design and implementation of government relations strategies to support technology adoption and service delivery.</li><li>Conducted scenario planning to navigate complex policy issues, delivering clear strategic guidance.</li>',

    'job5.date': 'June 2012 – March 2023',
    'job5.title': 'Founder',
    'job5.org': 'Easy Manifest Inc. – Ottawa, ON',
    'job5.bullets': '<li>Developed a SaaS platform for commercial freight carriers ensuring compliance with government regulations.</li><li>Advised clients on regulatory compliance, policy navigation, and stakeholder engagement.</li>',

    'job6.date': 'September 2017 – October 2018',
    'job6.title': 'Senior Business Consultant',
    'job6.org': 'Department of National Defence (DND) – Director Defence Information Management Programme (DDIMP)',
    'job6.bullets': '<li>Provided strategic advisory on government engagement, policy analysis, and regulatory compliance for large-scale IM/IT projects.</li><li>Delivered clear, actionable policy recommendations to senior leadership.</li>',

    'job7.date': 'September 2015 – August 2017',
    'job7.title': 'Senior Business Consultant',
    'job7.org': 'Employment and Social Development Canada (ESDC)',
    'job7.bullets': '<li>Streamlined policy development for Employment Insurance (EI), aligning service delivery with regulatory frameworks.</li><li>Conducted detailed policy analysis and provided strategic advisory on government relations.</li>',

    'lang.label': 'Languages',
    'lang.title': 'Bilingual Professional',
    'lang.en.title': 'English',
    'lang.en.level': 'Native / Full Professional Proficiency',
    'lang.en.desc': 'Primary language for all Gartner research, client advisory, conference presentations, and executive communications.',
    'lang.fr.title': 'Français',
    'lang.fr.level': 'Full Professional Proficiency',
    'lang.fr.desc': 'Used for client consultations, presentations, and communications with Canadian federal organizations.',

    'contact.label': 'Contact',
    'contact.title': 'Get in Touch',
    'contact.intro': 'Open to professional connections, research inquiries, and speaking opportunities.',
    'contact.linkedin': 'LinkedIn Profile',

    'footer.text': '&copy; 2026 Nathan Davie. All rights reserved.',
  },

  fr: {
    'nav.about': 'À propos',
    'nav.competencies': 'Compétences',
    'nav.topics': 'Thèmes',
    'nav.research': 'Recherche',
    'nav.experience': 'Expérience',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Analyste directeur – Services TI &nbsp;·&nbsp; Gartner',
    'hero.subtitle': 'Approvisionnement, achats et gestion des fournisseurs',
    'hero.tags': '<span>Approvisionnement et contrats TI</span><span>Fournisseurs de services mondiaux</span><span>IA / GenAI / Infonuagique</span><span>Bilingue AN/FR</span><span>20+ ans d\'expérience</span><span>Ottawa, Ontario</span>',
    'hero.cta': 'Me contacter',
    'hero.cv': 'Télécharger CV',

    'topics.label': 'Domaines de recherche',
    'topics.title': 'Thèmes couverts',
    'topics.cloud': '<span class="topic-tag topic-lg">Approvisionnement TI</span><span class="topic-tag topic-lg">Fournisseurs de services mondiaux</span><span class="topic-tag topic-lg">Appels d\'offres et énoncés de travaux</span><span class="topic-tag topic-md">Intelligence artificielle (IA)</span><span class="topic-tag topic-md">GenAI</span><span class="topic-tag topic-lg">Gestion des fournisseurs</span><span class="topic-tag topic-md">Infonuagique</span><span class="topic-tag topic-sm">DevOps</span><span class="topic-tag topic-md">ERP – SAP</span><span class="topic-tag topic-md">ERP – Oracle</span><span class="topic-tag topic-sm">MS Dynamics</span><span class="topic-tag topic-md">CRM / HCM</span><span class="topic-tag topic-sm">Workday</span><span class="topic-tag topic-sm">Salesforce</span><span class="topic-tag topic-md">Stratégie d\'impartition</span><span class="topic-tag topic-sm">Livraison proche-rive / délocalisée</span><span class="topic-tag topic-md">Négociation de contrats</span><span class="topic-tag topic-sm">Cadres SLA / KPI</span><span class="topic-tag topic-sm">LCAP / RPA</span><span class="topic-tag topic-md">Génie logiciel personnalisé</span><span class="topic-tag topic-sm">Assurance qualité et tests</span><span class="topic-tag topic-sm">Intégration API</span><span class="topic-tag topic-sm">Agile / Scrum</span><span class="topic-tag topic-md">Architecture d\'entreprise</span><span class="topic-tag topic-sm">Analytique et données</span><span class="topic-tag topic-sm">Services CX et UX</span><span class="topic-tag topic-sm">TI du gouvernement fédéral</span>',

    'contact.cv': 'Télécharger CV',

    'about.label': 'Profil',
    'about.title': 'Analyste. Conseiller.<br/>Leader d\'opinion.',
    'about.text1': 'Analyste directeur chez <strong>Gartner</strong>, spécialisé dans l\'approvisionnement, les achats et la gestion des fournisseurs en services TI. Je produis des recherches de pointe et guide les clients entreprises dans des décisions stratégiques — de la conception d\'appels d\'offres et de la négociation de contrats à la sélection de fournisseurs mondiaux dans les domaines du génie logiciel, de l\'infonuagique, de l\'IA/GenAI, des ERP et des CRM.',
    'about.text2': 'Fort de <strong>plus de 20 ans</strong> d\'expérience pratique en stratégie TI, architecture d\'entreprise et consultation auprès du gouvernement fédéral, j\'apporte une combinaison rare de profondeur de praticien et de rigueur de recherche. Mon travail couvre l\'approvisionnement stratégique, la recherche écrite (auteur principal, 8+ notes par an), les webinaires, les présentations en conférence et l\'engagement direct avec les clients à travers le réseau mondial de Gartner de 14 000+ entreprises clientes dans 90+ pays.',
    'about.pills': '<span>Approvisionnement TI</span><span>Gestion des fournisseurs</span><span>Appels d\'offres et contrats</span><span>Fournisseurs mondiaux</span><span>IA / GenAI / Infonuagique</span><span>ERP · CRM · DevOps</span><span>Leadership éclairé</span><span>Conseil aux dirigeants</span>',

    'comp.label': 'Expertise',
    'comp.title': 'Compétences clés',
    'comp.card1.title': 'Approvisionnement et achats TI',
    'comp.card1.desc': 'Conception et révision d\'appels d\'offres, analyse d\'énoncés de travaux, cadres SLA/KPI, négociations fournisseurs, stratégie d\'impartition',
    'comp.card2.title': 'Fournisseurs de services mondiaux',
    'comp.card2.desc': 'Paysage des acteurs établis et émergents, livraison proche-rive/délocalisée, évaluation et sélection de fournisseurs',
    'comp.card3.title': 'Technologies émergentes',
    'comp.card3.desc': 'IA, GenAI, infonuagique, DevOps, LCAP/RPA, intégration API, logiciels personnalisés, assurance qualité et tests',
    'comp.card4.title': 'Applications d\'entreprise',
    'comp.card4.desc': 'ERP (SAP, Oracle, MS Dynamics), CRM/HCM (Workday, Salesforce), architecture d\'entreprise',
    'comp.card5.title': 'Leadership éclairé et recherche',
    'comp.card5.desc': 'Auteur principal (8+ notes/an), 300+ interactions clients/an, webinaires, présentations en conférence, rédaction stratégique',

    'research.label': 'Recherche et conférences',
    'research.title': 'Recherches et présentations choisies',
    'research.intro': 'Recherches Gartner récentes rédigées à titre d\'auteur principal, et présentations livrées à des dirigeants technologiques des secteurs public et privé.',
    'research.pubType': 'Note de recherche Gartner',
    'research.pub1.date': 'Mai 2026',
    'research.pub1.desc': 'Un cadre de contrôle de la performance pour les « défaillances silencieuses » de l\'IA — des modèles qui respectent les SLA de disponibilité tout en se dégradant en précision, en équité ou en fiabilité — appliqué par la télémétrie et l\'imputabilité financière.',
    'research.pub1.tags': '<span>Gestion des fournisseurs d\'IA</span><span>SLA et télémétrie</span><span>IA fantôme</span>',
    'research.pub2.date': 'Mai 2026',
    'research.pub2.desc': 'Pourquoi les acheteurs continuent de payer des prix statiques alors que les fournisseurs internalisent les gains de productivité de l\'IA — et comment renverser le fardeau de la preuve : prouver, ajuster le prix ou rééquilibrer.',
    'research.pub2.tags': '<span>Contrats d\'IA</span><span>Prix et négociation</span><span>Capture de valeur</span>',
    'research.pub3.date': 'Mars 2026',
    'research.pub3.desc': 'Une architecture d\'approvisionnement modulaire « colonne et côtes » qui équilibre l\'échelle des mégafournisseurs mondiaux avec des composantes locales souveraines et substituables — exécutée par l\'approvisionnement dynamique.',
    'research.pub3.tags': '<span>Stratégie d\'approvisionnement</span><span>Souveraineté numérique</span><span>Résilience TI</span>',
    'research.pub4.date': 'Janvier 2026',
    'research.pub4.desc': 'Intégrer les plateformes low-code à l\'approvisionnement, à la planification et à l\'évaluation des fournisseurs afin que les opérations TI dépassent la résilience — et tirent de la valeur de la volatilité et du changement.',
    'research.pub4.tags': '<span>Low-code (LCAP)</span><span>Évaluation des fournisseurs</span><span>Antifragilité</span>',
    'research.speaking.type': 'Présentation en conférence · 2026',
    'research.speaking.desc': 'Un breffage exécutif pour les dirigeants du secteur public sur l\'IA souveraine — la réalité du « bouton d\'arrêt », pourquoi la souveraineté est un spectre plutôt qu\'une case à cocher, et une feuille de route pragmatique pour l\'adoption de l\'IA au sein du gouvernement canadien.',
    'research.speaking.tags': '<span>IA souveraine</span><span>Gouvernement et secteur public</span><span>Risque géopolitique</span><span>Canada</span>',
    'research.note': 'Les notes de recherche complètes sont accessibles aux clients Gartner via gartner.com.',

    'exp.label': 'Carrière',
    'exp.title': 'Expérience professionnelle',
    'gartner.h3': 'Analyste directeur – Services TI',
    'gartner.subtitle': 'Approvisionnement, achats et gestion des fournisseurs',
    'gartner.stat1': 'Notes consultatives<br/>par an (auteur principal)',
    'gartner.stat2': 'Interactions clients<br/>par an',
    'gartner.stat3': 'Entreprises clientes<br/>dans le monde',
    'gartner.stat4': 'Pays<br/>desservis',
    'gartner.stat5': 'Domaines technologiques<br/>(IA, ERP, infonuagique et plus)',
    'gartner.topics': '<span>Révision d\'appels d\'offres et d\'énoncés de travaux</span><span>Analyse SLA / KPI</span><span>Fournisseurs de services mondiaux</span><span>IA &amp; GenAI</span><span>DevOps / LCAP / RPA</span><span>ERP (SAP · Oracle · MS Dynamics)</span><span>Infonuagique</span><span>CRM / HCM (Workday · Salesforce)</span><span>Logiciels personnalisés</span><span>Assurance qualité et tests</span>',

    'job1.date': 'Septembre 2025 – Présent',
    'job1.title': 'Analyste directeur – Services TI',
    'job1.org': 'Gartner – Approvisionnement, achats et gestion des fournisseurs',
    'job1.bullets': '<li>Crée des recherches de pointe et guide les clients dans le marché des services TI et de génie logiciel, avec une attention particulière aux pratiques d\'approvisionnement, à la contractualisation et aux négociations.</li><li>Conseille les clients sur les enjeux d\'approvisionnement, les appels d\'offres et les propositions de fournisseurs; offre des orientations concrètes par le biais de consultations, présentations, webinaires et contenu écrit.</li><li>Produit des notes consultatives de haute qualité en tant qu\'auteur principal (8+ par an), couvrant notamment l\'IA/GenAI, l\'infonuagique, l\'agilité, les logiciels personnalisés, l\'analytique, l\'expérience client, les API et l\'assurance qualité.</li><li>Examine les appels d\'offres en impartition TI et en solutions applicatives; guide les clients dans le choix de fournisseurs de services mondiaux pour le développement logiciel et les déploiements d\'entreprise.</li><li>Conduit des recherches sur le paysage mondial des fournisseurs, incluant DevOps, LCAP, RPA, ERP (SAP, Oracle, MS Dynamics), infonuagique et CRM/HCM (Workday, Salesforce).</li><li>Conseille 300+ clients par an et collabore avec les équipes commerciales pour soutenir l\'acquisition et la rétention de clients dans le réseau de 14 000+ entreprises clientes dans 90+ pays.</li>',

    'job2.date': 'Novembre 2021 – Septembre 2025',
    'job2.title': 'Conseiller principal en affaires',
    'job2.org': 'Secrétariat du Conseil du Trésor (SCT) – Bureau du dirigeant principal des RH (BDPRH)',
    'job2.bullets': '<li>Conseillait les cadres supérieurs sur les stratégies de relations gouvernementales, l\'élaboration de politiques publiques et la conformité réglementaire.</li><li>Conduisait des analyses de politiques sur les systèmes RH et les initiatives fédérales, assurant l\'alignement avec les priorités gouvernementales.</li><li>Développait des stratégies d\'engagement des parties prenantes, favorisant la collaboration avec les ministères fédéraux et les partenaires externes.</li>',

    'job3.date': 'Mai 2021 – Janvier 2022',
    'job3.title': 'Conseiller principal en affaires',
    'job3.org': 'Services publics et Approvisionnement Canada (SPAC) – Direction des services numériques (DSN)',
    'job3.bullets': '<li>Offrait des conseils stratégiques sur l\'engagement gouvernemental, l\'alignement des politiques publiques et les stratégies de communication pour les services numériques.</li><li>Conduisait des analyses de politiques sur les initiatives technologiques, conseillant sur la conformité réglementaire et les communications stratégiques.</li>',

    'job4.date': 'Décembre 2019 – Mai 2021',
    'job4.title': 'Conseiller principal en transformation des affaires',
    'job4.org': 'Services publics et Approvisionnement Canada (SPAC) – Direction des services numériques (DSN)',
    'job4.bullets': '<li>Dirigeait la conception et la mise en œuvre de stratégies de relations gouvernementales pour soutenir l\'adoption de la technologie et la prestation de services.</li><li>Menait des exercices de planification de scénarios pour naviguer des enjeux politiques complexes, fournissant des orientations stratégiques claires.</li>',

    'job5.date': 'Juin 2012 – Mars 2023',
    'job5.title': 'Fondateur',
    'job5.org': 'Easy Manifest Inc. – Ottawa, ON',
    'job5.bullets': '<li>Développé une plateforme SaaS pour les transporteurs commerciaux assurant la conformité aux réglementations gouvernementales.</li><li>Conseillait les clients sur la conformité réglementaire, la navigation dans les politiques et l\'engagement des parties prenantes.</li>',

    'job6.date': 'Septembre 2017 – Octobre 2018',
    'job6.title': 'Conseiller principal en affaires',
    'job6.org': 'Ministère de la Défense nationale (MDN) – Direction du programme de gestion de l\'information de la défense (DPGID)',
    'job6.bullets': '<li>Fournissait des conseils stratégiques sur l\'engagement gouvernemental, l\'analyse de politiques et la conformité réglementaire pour de grands projets GI/TI.</li><li>Livrait des recommandations politiques claires et exploitables à la haute direction.</li>',

    'job7.date': 'Septembre 2015 – Août 2017',
    'job7.title': 'Conseiller principal en affaires',
    'job7.org': 'Emploi et Développement social Canada (EDSC)',
    'job7.bullets': '<li>Rationalisait l\'élaboration de politiques pour l\'assurance-emploi (AE), alignant la prestation de services sur les cadres réglementaires.</li><li>Conduisait des analyses détaillées de politiques et fournissait des conseils stratégiques sur les relations gouvernementales.</li>',

    'lang.label': 'Langues',
    'lang.title': 'Professionnel bilingue',
    'lang.en.title': 'English',
    'lang.en.level': 'Compétence professionnelle complète',
    'lang.en.desc': 'Langue principale pour toutes les recherches Gartner, les conseils aux clients, les présentations en conférence et les communications avec les dirigeants.',
    'lang.fr.title': 'Français',
    'lang.fr.level': 'Compétence professionnelle complète',
    'lang.fr.desc': 'Utilisé pour les consultations clients, les présentations et les communications avec les organisations fédérales canadiennes.',

    'contact.label': 'Contact',
    'contact.title': 'Me contacter',
    'contact.intro': 'Ouvert aux connexions professionnelles, aux demandes de recherche et aux occasions de conférences.',
    'contact.linkedin': 'Profil LinkedIn',

    'footer.text': '&copy; 2026 Nathan Davie. Tous droits réservés.',
  }
};

// ===== Setup =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGSAP = typeof gsap !== 'undefined';
const useMotion = hasGSAP && !prefersReducedMotion;

if (!useMotion) document.documentElement.classList.add('no-motion');
if (hasGSAP && typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

// ===== Language toggle =====
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang][key];
    if (text !== undefined) el.innerHTML = text;
  });
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  document.getElementById('lang-toggle').textContent = lang === 'en' ? 'FR' : 'EN';
}

setLanguage(currentLang);

document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  setLanguage(currentLang);
});

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Navbar state + scroll progress + back-to-top =====
const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('scroll-progress');
const backToTop = document.getElementById('back-to-top');

function onScroll() {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 24);
  backToTop.classList.toggle('visible', y > 480);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
});

// ===== Active nav link highlight =====
const sections = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -50% 0px' }
);

sections.forEach(s => sectionObserver.observe(s));

// ===== three.js hero particle field =====
(async function initHeroParticles() {
  if (prefersReducedMotion) return;

  const canvas = document.getElementById('hero-canvas');
  const hero = document.getElementById('hero');
  if (!canvas || !hero) return;

  let THREE;
  try {
    THREE = await import('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js');
  } catch (e) {
    return; // CDN unavailable — CSS gradient background remains
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (e) {
    return; // no WebGL — CSS gradient background remains
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.z = 16;

  const isSmall = window.matchMedia('(max-width: 700px)').matches;
  const COUNT = isSmall ? 320 : 850;

  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const gold = new THREE.Color(0xe0b35a);
  const blue = new THREE.Color(0x5b9cf6);
  const white = new THREE.Color(0xaec3e0);

  for (let i = 0; i < COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 44;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 26;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 22;

    const r = Math.random();
    const c = r < 0.22 ? gold : (r < 0.55 ? blue : white);
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Soft round sprite — default points render as hard squares
  const spriteCanvas = document.createElement('canvas');
  spriteCanvas.width = spriteCanvas.height = 64;
  const ctx = spriteCanvas.getContext('2d');
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.35, 'rgba(255,255,255,.7)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  const sprite = new THREE.CanvasTexture(spriteCanvas);

  const material = new THREE.PointsMaterial({
    size: 0.22,
    map: sprite,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // Constellation network: drifting nodes connected by faint lines (desktop only)
  let network = null;
  if (!isSmall) {
    const N = 80;
    const LINK_DIST = 4.6;
    const nodeBase = new Float32Array(N * 3);
    const nodePhase = new Float32Array(N);
    const nodePos = new Float32Array(N * 3);

    for (let i = 0; i < N; i++) {
      nodeBase[i * 3]     = (Math.random() - 0.5) * 38;
      nodeBase[i * 3 + 1] = (Math.random() - 0.5) * 22;
      nodeBase[i * 3 + 2] = (Math.random() - 0.5) * 8;
      nodePhase[i] = Math.random() * Math.PI * 2;
    }

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePos, 3).setUsage(THREE.DynamicDrawUsage));
    const nodeMat = new THREE.PointsMaterial({
      size: 0.16,
      map: sprite,
      color: 0x8fb6f0,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const nodes = new THREE.Points(nodeGeo, nodeMat);

    const maxPairs = (N * (N - 1)) / 2;
    const linePos = new Float32Array(maxPairs * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3).setUsage(THREE.DynamicDrawUsage));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x6f9ddf,
      transparent: true,
      opacity: 0.13,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);

    const group = new THREE.Group();
    group.add(nodes);
    group.add(lines);
    scene.add(group);

    network = { N, LINK_DIST, nodeBase, nodePhase, nodePos, nodeGeo, lineGeo, linePos, group };
  }

  function updateNetwork(t) {
    if (!network) return;
    const { N, LINK_DIST, nodeBase, nodePhase, nodePos, nodeGeo, lineGeo, linePos, group } = network;

    for (let i = 0; i < N; i++) {
      const p = nodePhase[i];
      nodePos[i * 3]     = nodeBase[i * 3]     + Math.sin(t * 0.22 + p) * 0.9;
      nodePos[i * 3 + 1] = nodeBase[i * 3 + 1] + Math.cos(t * 0.18 + p * 1.4) * 0.7;
      nodePos[i * 3 + 2] = nodeBase[i * 3 + 2] + Math.sin(t * 0.15 + p * 0.8) * 0.5;
    }
    nodeGeo.attributes.position.needsUpdate = true;

    let v = 0;
    const distSq = LINK_DIST * LINK_DIST;
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = nodePos[i * 3] - nodePos[j * 3];
        const dy = nodePos[i * 3 + 1] - nodePos[j * 3 + 1];
        const dz = nodePos[i * 3 + 2] - nodePos[j * 3 + 2];
        if (dx * dx + dy * dy + dz * dz < distSq) {
          linePos[v++] = nodePos[i * 3]; linePos[v++] = nodePos[i * 3 + 1]; linePos[v++] = nodePos[i * 3 + 2];
          linePos[v++] = nodePos[j * 3]; linePos[v++] = nodePos[j * 3 + 1]; linePos[v++] = nodePos[j * 3 + 2];
        }
      }
    }
    lineGeo.setDrawRange(0, v / 3);
    lineGeo.attributes.position.needsUpdate = true;

    group.rotation.y = points.rotation.y;
    group.rotation.x = points.rotation.x;
  }

  function resize() {
    const w = hero.clientWidth;
    const h = hero.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  // Mouse parallax (desktop only — touch devices keep the slow drift)
  let targetX = 0, targetY = 0;
  window.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    targetX = (e.clientX / window.innerWidth - 0.5) * 1.6;
    targetY = (e.clientY / window.innerHeight - 0.5) * 1.0;
  }, { passive: true });

  let rafId = null;
  const clock = new THREE.Clock();

  function animate() {
    rafId = requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    points.rotation.y = t * 0.02;
    points.rotation.x = Math.sin(t * 0.08) * 0.05;
    updateNetwork(t);
    camera.position.x += (targetX - camera.position.x) * 0.04;
    camera.position.y += (-targetY - camera.position.y) * 0.04;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }

  // Only render while the hero is on screen
  const visObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && rafId === null) {
        clock.start();
        animate();
      } else if (!entry.isIntersecting && rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    });
  }, { threshold: 0 });

  visObserver.observe(hero);
})();

// ===== GSAP animations =====
if (useMotion) {

  // --- Hero entrance ---
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .from('.hero-photo-wrap', { opacity: 0, scale: 0.85, duration: 1 })
    .from('.hero-eyebrow', { opacity: 0, y: 24, duration: .7 }, '-=.6')
    .from('.hero-name-line', { opacity: 0, y: 60, duration: .9, stagger: .12 }, '-=.45')
    .from('.hero-subtitle', { opacity: 0, y: 24, duration: .7 }, '-=.55')
    .from('.hero-tags span', { opacity: 0, y: 16, duration: .5, stagger: .055 }, '-=.4')
    .from('.hero-actions > *', { opacity: 0, y: 18, duration: .55, stagger: .1 }, '-=.3')
    .from('.hero-scroll-hint', { opacity: 0, duration: .8 }, '-=.2');

  // Subtle parallax: hero content drifts up as you scroll away
  gsap.to('.hero-inner', {
    yPercent: -12,
    opacity: 0.35,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // --- Scroll reveals ---
  function reveal(targets, opts) {
    gsap.utils.toArray(targets).forEach(el => {
      el.classList.add('gs-reveal');
      gsap.fromTo(el,
        { opacity: 0, y: opts.y ?? 36, x: opts.x ?? 0 },
        {
          opacity: 1, y: 0, x: 0,
          duration: opts.duration ?? .8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%' }
        }
      );
    });
  }

  function revealBatch(targets, opts) {
    const els = gsap.utils.toArray(targets);
    els.forEach(el => el.classList.add('gs-reveal'));
    ScrollTrigger.batch(els, {
      start: 'top 88%',
      once: true,
      onEnter: batch => gsap.fromTo(batch,
        { opacity: 0, y: opts.y ?? 32 },
        { opacity: 1, y: 0, duration: .7, ease: 'power3.out', stagger: .09 }
      )
    });
  }

  reveal('.section-label', { y: 20, duration: .6 });
  reveal('.section-title', { y: 30 });
  reveal('.about-text', { y: 30 });
  reveal('.about-pills', { y: 24 });
  reveal('.gartner-spotlight', { y: 44 });
  reveal('.topics-cloud', { y: 30 });
  reveal('.research-intro', { y: 20, duration: .6 });
  reveal('.speaking-card', { y: 40 });
  reveal('.research-note', { y: 14, duration: .5 });
  reveal('.contact-intro', { y: 20, duration: .6 });

  revealBatch('.comp-card', { y: 36 });
  revealBatch('.research-card', { y: 34 });
  revealBatch('.timeline-item', { y: 30 });
  revealBatch('.lang-card', { y: 32 });
  revealBatch('.contact-card', { y: 30 });

  // --- Desktop-only pointer flourishes: 3D card tilt + magnetic buttons ---
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {

    document.querySelectorAll('.comp-card, .lang-card, .research-card, .contact-card:not(.no-link)')
      .forEach(card => {
        const rx = gsap.quickTo(card, 'rotationX', { duration: .45, ease: 'power2.out' });
        const ry = gsap.quickTo(card, 'rotationY', { duration: .45, ease: 'power2.out' });
        const lift = gsap.quickTo(card, 'y', { duration: .35, ease: 'power2.out' });

        // Perspective applied on hover only — a permanent 3D layer per card
        // strains the compositor with this many cards on the page
        card.addEventListener('pointerenter', () => {
          gsap.set(card, { transformPerspective: 900 });
          lift(-5);
        });
        card.addEventListener('pointermove', e => {
          const r = card.getBoundingClientRect();
          ry(((e.clientX - r.left) / r.width - .5) * 8);
          rx(-((e.clientY - r.top) / r.height - .5) * 8);
        });
        card.addEventListener('pointerleave', () => {
          rx(0); ry(0); lift(0);
          gsap.set(card, { clearProps: 'transformPerspective' });
        });
      });

    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
      const xTo = gsap.quickTo(btn, 'x', { duration: .35, ease: 'power3.out' });
      const yTo = gsap.quickTo(btn, 'y', { duration: .35, ease: 'power3.out' });

      btn.addEventListener('pointermove', e => {
        const r = btn.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * .3);
        yTo((e.clientY - (r.top + r.height / 2)) * .4);
      });
      btn.addEventListener('pointerleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: .7, ease: 'elastic.out(1, .45)' });
      });
    });
  }

  // --- Gartner stat counters ---
  gsap.utils.toArray('.gartner-stat-num').forEach(el => {
    const raw = el.textContent.trim();          // "8+", "300+", "14k+"
    const hasK = raw.includes('k');
    const hasPlus = raw.includes('+');
    const target = parseFloat(raw);
    const counter = { val: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.floor(counter.val) + (hasK ? 'k' : '') + (hasPlus ? '+' : '');
          },
          onComplete: () => { el.textContent = raw; }
        });
      }
    });
  });

  // Recalculate trigger positions once everything (fonts/images) has loaded
  window.addEventListener('load', () => ScrollTrigger.refresh());
}
