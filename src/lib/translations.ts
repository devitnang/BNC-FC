export type Language = 'en' | 'kh';

export interface TranslationContent {
  nav: {
    home: string;
    collections: string;
    players: string;
    contact: string;
    about: string;
    sponsorLabel: string;
    switchLang: string;
    menu: string;
    close: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    exploreKits: string;
    meetSquad: string;
    scrollPrompt: string;
    stats: {
      label1: string;
      val1: string;
      label2: string;
      val2: string;
      label3: string;
      val3: string;
      label4: string;
      val4: string;
    };
  };
  collections: {
    tag: string;
    title: string;
    subtitle: string;
    badge: string;
    homeKit: {
      title: string;
      season: string;
      price: string;
      description: string;
      features: string[];
      viewDetails: string;
    };
    awayKit: {
      title: string;
      season: string;
      price: string;
      description: string;
      features: string[];
      viewDetails: string;
    };
    modal: {
      selectSize: string;
      addToCart: string;
      preorderNote: string;
      close: string;
      specifications: string;
      fabric: string;
      fabricVal: string;
      fit: string;
      fitVal: string;
      origin: string;
      originVal: string;
    };
  };
  players: {
    tag: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterFwd: string;
    filterMid: string;
    filterDef: string;
    filterGk: string;
    hoverHint: string;
    statOverall: string;
    viewProfile: string;
  };
  about: {
    tag: string;
    title: string;
    subtitle: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    stadiumTitle: string;
    stadiumDesc: string;
    pillarsTitle: string;
    pillars: {
      title: string;
      desc: string;
    }[];
    honoursTitle: string;
    honours: {
      count: string;
      title: string;
      year: string;
    }[];
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    sendingBtn: string;
    successMsg: string;
    errorMsg: string;
    botNotice: string;
    botNoticeDesc: string;
    hqTitle: string;
    hqAddress: string;
    phoneTitle: string;
    phoneVal: string;
    emailTitle: string;
    emailVal: string;
    telegramTitle: string;
    telegramVal: string;
    securityBadge: string;
    validation: {
      nameMin: string;
      emailInvalid: string;
      phoneInvalid: string;
      subjectMin: string;
      messageMin: string;
      tooFast: string;
      rateLimit: string;
    };
  };
  footer: {
    tagline: string;
    quickLinks: string;
    sponsors: string;
    socials: string;
    rights: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      home: 'Home',
      collections: 'Feature Collection',
      players: 'Players',
      contact: 'Contact Us',
      about: 'About Us',
      sponsorLabel: 'OFFICIAL SPONSOR',
      switchLang: 'ភាសាខ្មែរ',
      menu: 'MENU',
      close: 'CLOSE',
    },
    hero: {
      badge: 'OFFICIAL CLUB PORTAL // SEASON 2025/2026',
      titleLine1: 'BNC FOOTBALL',
      titleLine2: 'CLUB',
      description: 'The pinnacle of precision, passion, and tactical mastery. Welcome to the official digital domain of BNC FC.',
      exploreKits: 'EXPLORE KITS',
      meetSquad: 'MEET THE SQUAD',
      scrollPrompt: 'SCROLL TO EXPLORE',
      stats: {
        label1: 'FOUNDED',
        val1: '1998',
        label2: 'MAJOR TROPHIES',
        val2: '14',
        label3: 'SQUAD SIZE',
        val3: '26',
        label4: 'STADIUM CAPACITY',
        val4: '45,000',
      },
    },
    collections: {
      tag: '01 // OFFICIAL APPAREL',
      title: 'FEATURE COLLECTIONS',
      subtitle: 'Engineered for tactical dominance and streetwear aesthetics. Discover the two official jerseys of the 2025/2026 campaign.',
      badge: 'MATCHDAY AUTHENTIC',
      homeKit: {
        title: '2025/26 HOME MATCH JERSEY',
        season: 'PRIMARY KIT // ROYAL DEEP BLUE',
        price: '$45.00',
        description: 'Imbued with our signature deep cobalt blue, geometric tactical pitch motifs, and the prominent BNC Star crest.',
        features: [
          'Aero-Dry cooling ventilation weave',
          'High-definition woven BNC crest with tactical grid background',
          'Reinforced flatlock sharp seam stitching',
          'Authentic serial number badge on hem',
        ],
        viewDetails: 'INSPECT JERSEY',
      },
      awayKit: {
        title: '2025/26 AWAY MATCH JERSEY',
        season: 'SECONDARY KIT // ALPINE CHILL WHITE',
        price: '$45.00',
        description: 'A striking minimalist alpine white canvas with deep navy geometric accent stripes and metallic gold club embroidery.',
        features: [
          'Ultra-lightweight moisture-control fabric',
          'Deep navy ribbed crew collar & cuff accents',
          'Reflective matchday sponsor lettering',
          'Tailored athletic precision silhouette',
        ],
        viewDetails: 'INSPECT JERSEY',
      },
      modal: {
        selectSize: 'SELECT SIZE',
        addToCart: 'ORDER VIA TELEGRAM SHOP',
        preorderNote: 'Free nationwide delivery & official BNC gift box with every jersey order.',
        close: 'CLOSE PREVIEW',
        specifications: 'TECHNICAL SPECIFICATIONS',
        fabric: 'Fabric Composition',
        fabricVal: '100% Recycled Poly-Mesh Ultra-Knit',
        fit: 'Fit Type',
        fitVal: 'Athletic Slim Fit',
        origin: 'Authenticity',
        originVal: 'Official BNC FC Licensed Gear',
      },
    },
    players: {
      tag: '02 // SQUAD ROSTER',
      title: 'FIRST TEAM SQUAD',
      subtitle: 'Hover over any player card to reveal their identity, field position, and tactical stats.',
      filterAll: 'ALL SQUAD',
      filterFwd: 'FORWARDS',
      filterMid: 'MIDFIELDERS',
      filterDef: 'DEFENDERS',
      filterGk: 'GOALKEEPERS',
      hoverHint: 'HOVER TO REVEAL DETAILS',
      statOverall: 'OVR RATING',
      viewProfile: 'TACTICAL BIO',
    },
    about: {
      tag: '03 // CLUB HERITAGE',
      title: 'THE BNC LEGACY',
      subtitle: 'Built upon a foundation of fearless attack, ironclad defense, and community pride.',
      storyTitle: 'OUR PHILOSOPHY & VISION',
      storyP1: 'BNC Football Club stands as a beacon of modern football culture. Founded with an uncompromising ambition, the club integrates European tactical rigor with relentless athletic stamina to compete at the highest tier.',
      storyP2: 'Our crest—featuring the iconic tactical football pitch geometry and six-pointed Star of Excellence—represents our unity, sharp focus, and commitment to sporting greatness.',
      stadiumTitle: 'THE BNC FORTRESS ARENA',
      stadiumDesc: 'A state-of-the-art 45,000-seat arena designed for electrifying matchday atmosphere, supreme acoustics, and world-class hybrid turf.',
      pillarsTitle: 'FOUR PILLARS OF EXCELLENCE',
      pillars: [
        { title: 'TACTICAL DISCIPLINE', desc: 'Systematic pitch control with ruthless counter-pressing mechanics.' },
        { title: 'YOUTH ACADEMY', desc: 'Developing next-generation talent through scientific sports methodology.' },
        { title: 'COMMUNITY BOND', desc: 'Deep-rooted connection with passionate supporters and grassroots football.' },
        { title: 'VICTORY AMBITION', desc: 'Relentless drive for silverware, records, and championship legacy.' },
      ],
      honoursTitle: 'CLUB HONOURS',
      honours: [
        { count: '5x', title: 'National Premier League Champions', year: '2019, 2021, 2023, 2024, 2025' },
        { count: '4x', title: 'National Super Cup Winners', year: '2020, 2022, 2024, 2025' },
        { count: '3x', title: 'Federation Champions Trophy', year: '2021, 2023, 2025' },
        { count: '2x', title: 'Continental Club Cup Finalists', year: '2024, 2025' },
      ],
    },
    contact: {
      tag: '03 // DIRECT DISPATCH',
      title: 'GET IN TOUCH',
      subtitle: 'Connect directly with our club headquarters. All inquiries are piped live into our official Telegram Bot dispatch channel.',
      formTitle: 'SEND A MESSAGE TO BNC FC',
      nameLabel: 'FULL NAME *',
      namePlaceholder: 'e.g. John Doe / សុខ សុវណ្ណ',
      emailLabel: 'EMAIL ADDRESS *',
      emailPlaceholder: 'name@domain.com',
      phoneLabel: 'PHONE / TELEGRAM (OPTIONAL)',
      phonePlaceholder: '+855 12 345 678',
      subjectLabel: 'SUBJECT / INQUIRY TOPIC *',
      subjectPlaceholder: 'Jersey Order, Academy Trials, Sponsorship...',
      messageLabel: 'YOUR MESSAGE *',
      messagePlaceholder: 'Write your message details here...',
      submitBtn: 'TRANSMIT VIA TELEGRAM BOT',
      sendingBtn: 'TRANSMITTING TO TELEGRAM...',
      successMsg: 'Message transmitted successfully to BNC FC Telegram Bot! Our staff will respond promptly.',
      errorMsg: 'Transmission failed. Please check your details and try again.',
      botNotice: 'TELEGRAM NOTIFICATION ENGINE',
      botNoticeDesc: 'Your submission triggers real-time Telegram Bot webhook alerts directly to our club executive team.',
      hqTitle: 'CLUB HEADQUARTERS',
      hqAddress: 'BNC Sports Complex, Hun Sen Blvd, Phnom Penh, Cambodia',
      phoneTitle: 'HOTLINE',
      phoneVal: '+855 (0) 23 888 999',
      emailTitle: 'OFFICIAL EMAIL',
      emailVal: 'contact@bncfootball.club',
      telegramTitle: 'TELEGRAM CHANNEL',
      telegramVal: '@BNC_FC_Official',
      securityBadge: 'END-TO-END SECURE // ANTI-SPAM & RATE-PROTECTED',
      validation: {
        nameMin: 'Name must be at least 2 characters long.',
        emailInvalid: 'Please enter a valid email address (e.g. name@domain.com).',
        phoneInvalid: 'Phone format invalid (digits, +, -, () only).',
        subjectMin: 'Subject must be at least 3 characters long.',
        messageMin: 'Message must be at least 10 characters long.',
        tooFast: 'Submission rejected: Form was filled too quickly (anti-bot safeguard).',
        rateLimit: 'Rate limit reached: Please wait a few minutes before submitting another inquiry.',
      },
    },
    footer: {
      tagline: 'Precision. Passion. Glory. The official digital portal of BNC Football Club.',
      quickLinks: 'QUICK NAVIGATION',
      sponsors: 'OFFICIAL PARTNERS',
      socials: 'COMMUNITY CHANNELS',
      rights: '© 2026 BNC FOOTBALL CLUB. ALL RIGHTS RESERVED.',
    },
  },
  kh: {
    nav: {
      home: 'ទំព័រដើម',
      collections: 'ឈុតសម្លៀកបំពាក់',
      players: 'កីឡាករ',
      contact: 'ទំនាក់ទំនង',
      about: 'អំពីយើង',
      sponsorLabel: 'អ្នកឧបត្ថម្ភផ្លូវការ',
      switchLang: 'English',
      menu: 'ម៉ឺនុយ',
      close: 'បិទ',
    },
    hero: {
      badge: 'គេហទំព័រផ្លូវការក្លឹប // រដូវកាល ២០២៥/២០២៦',
      titleLine1: 'ក្លឹបបាល់ទាត់',
      titleLine2: 'BNC FC',
      description: 'ចំណុចកំពូលនៃភាពជាក់លាក់ ចំណង់ចំណូលចិត្ត និងវិន័យយុទ្ធសាស្ត្រ។ សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់ BNC FC។',
      exploreKits: 'ទស្សនាអាវប្រកួត',
      meetSquad: 'ស្វែងយល់ពីកីឡាករ',
      scrollPrompt: 'រំកិលចុះក្រោមដើម្បីស្វែងយល់',
      stats: {
        label1: 'ឆ្នាំបង្កើត',
        val1: '១៩៩៨',
        label2: 'ពានរង្វាន់ធំៗ',
        val2: '១៤',
        label3: 'ចំនួនកីឡាករ',
        val3: '២៦',
        label4: 'ចំណុះកីឡដ្ឋាន',
        val4: '៤៥,០០០',
      },
    },
    collections: {
      tag: '០១ // ឈុតសម្លៀកបំពាក់ផ្លូវការ',
      title: 'ឈុតសម្លៀកបំពាក់ពិសេស',
      subtitle: 'រចនាឡើងយ៉ាងពិសេសសម្រាប់ការប្រកួតកម្រិតខ្ពស់ និងម៉ូដទាន់សម័យ។ មានទាំងឈុតក្នុងដី និងក្រៅដី សម្រាប់រដូវកាល ២០២៥/២០២៦។',
      badge: 'អាវប្រកួតផ្លូវការ',
      homeKit: {
        title: 'អាវប្រកួតក្នុងដី BNC ២០២៥/២៦',
        season: 'ឈុតក្នុងដី // ពណ៌ខៀវចាស់ ROYAL DEEP BLUE',
        price: '$៤៥.០០',
        description: 'រចនាឡើងជាមួយពណ៌ខៀវចាស់តំណាងក្លឹប រំលេចក្រឡាគ្រីតបាល់ទាត់ និងស្លាកសញ្ញាផ្កាយ BNC យ៉ាងរស់រវើក។',
        features: [
          'បច្ចេកវិទ្យាសាច់ក្រណាត់ Aero-Dry បញ្ចេញកម្តៅបានល្អ',
          'ស្លាកសញ្ញាក្លឹប BNC ប៉ាក់យ៉ាងប្រណីតជាមួយក្រឡាយុទ្ធសាស្ត្រ',
          'ថ្នេរដេររឹងមាំ និងមានផាសុកភាពខ្ពស់',
          'មានស្លាកលេខកូដសម្គាល់អាវប្រកួតពិតប្រាកដ',
        ],
        viewDetails: 'ពិនិត្យព័ត៌មានលម្អិត',
      },
      awayKit: {
        title: 'អាវប្រកួតក្រៅដី BNC ២០២៥/២៦',
        season: 'ឈុតក្រៅដី // ពណ៌សសុទ្ធ ALPINE CHILL WHITE',
        price: '$៤៥.០០',
        description: 'អាវប្រកួតក្រៅដីពណ៌សសុទ្ធ រំលេចដោយឆ្នូតពណ៌ខៀវ Cobalt យ៉ាងស្រស់ស្អាត និងប៉ាក់អក្សរពណ៌មាស។',
        features: [
          'សាច់ក្រណាត់ស្រាល ការពារសំណើម និងញើសកម្រិតខ្ពស់',
          'កអាវ និងជាយដៃរចនាឆ្នូតពណ៌ខៀវចាស់',
          'អក្សរអ្នកឧបត្ថម្ភភ្លឺច្បាស់តាមស្តង់ដារប្រកួត',
          'ទម្រង់រាងសមស្របតាមកាយវិការកីឡាករ',
        ],
        viewDetails: 'ពិនិត្យព័ត៌មានលម្អិត',
      },
      modal: {
        selectSize: 'ជ្រើសរើសទំហំ',
        addToCart: 'បញ្ជាទិញតាម TELEGRAM',
        preorderNote: 'សេវាដឹកជញ្ជូនឥតគិតថ្លៃទូទាំងប្រទេស និងប្រអប់កាដូផ្លូវការ BNC រាល់ការកុម្ម៉ង់អាវ។',
        close: 'បិទការមើល',
        specifications: 'ព័ត៌មានលម្អិតបច្ចេកទេស',
        fabric: 'សមាសភាពសាច់ក្រណាត់',
        fabricVal: '100% Recycled Poly-Mesh Ultra-Knit',
        fit: 'ប្រភេទរាង',
        fitVal: 'Athletic Slim Fit',
        origin: 'ភាពត្រឹមត្រូវ',
        originVal: 'ផលិតផលផ្លូវការមានអាជ្ញាប័ណ្ណពី BNC FC',
      },
    },
    players: {
      tag: '០២ // បញ្ជីរាយនាមកីឡាករ',
      title: 'កីឡាករក្រុមធំ',
      subtitle: 'ដាក់ Mouse លើកាតកីឡាករនីមួយៗ ដើម្បីបង្ហាញឈ្មោះ តួនាទីនៅលើទីលាន និងស្ថិតិយុទ្ធសាស្ត្រ។',
      filterAll: 'ទាំងអស់',
      filterFwd: 'ខ្សែប្រយុទ្ធ',
      filterMid: 'ខ្សែបម្រើ',
      filterDef: 'ខ្សែការពារ',
      filterGk: 'អ្នកចាំទី',
      hoverHint: 'ដាក់ MOUSE លើកាតដើម្បីមើលឈ្មោះ',
      statOverall: 'កម្រិតសមត្ថភាព (OVR)',
      viewProfile: 'ព័ត៌មានយុទ្ធសាស្ត្រ',
    },
    about: {
      tag: '០៣ // ប្រវត្តិ និងមរតកក្លឹប',
      title: 'កេរ្តិ៍ដំណែលក្លឹប BNC',
      subtitle: 'កសាងឡើងលើមូលដ្ឋានគ្រឹះនៃការវាយលុកមិនខ្លាចញញើត ការការពាររឹងមាំ និងមោទនភាពរបស់អ្នកគាំទ្រ។',
      storyTitle: 'ទស្សនវិជ្ជា និងចក្ខុវិស័យរបស់យើង',
      storyP1: 'ក្លឹបបាល់ទាត់ BNC គឺជាតំណាងនៃវប្បធម៌បាល់ទាត់ទំនើប។ បង្កើតឡើងដោយការប្តេជ្ញាចិត្តខ្ពស់ ក្លឹបបានរួមបញ្ចូលនូវយុទ្ធសាស្ត្រច្បាស់លាស់ និងកម្លាំងកាយមាំមួនដើម្បីប្រកួតប្រជែងដណ្តើមជើងឯកកំពូល។',
      storyP2: 'ស្លាកសញ្ញារបស់យើង—ដែលរំលេចដោយទម្រង់តារាងយុទ្ធសាស្ត្របាល់ទាត់ និងផ្កាយ៦ជ្រុងនៃឧត្តមភាព—តំណាងឱ្យសាមគ្គីភាព ភាពមុតស្រួច និងការតស៊ូដណ្តើមជ័យជម្នះ។',
      stadiumTitle: 'កីឡដ្ឋាន BNC FORTRESS ARENA',
      stadiumDesc: 'កីឡដ្ឋានស្តង់ដារអន្តរជាតិចំណុះ ៤៥,០០០ កៅអី បំពាក់ដោយប្រព័ន្ធសំឡេងទំនើប និងស្មៅកូនកាត់កម្រិតពិភពលោក។',
      pillarsTitle: 'សរសរស្តម្ភទាំង៤នៃភាពជោគជ័យ',
      pillars: [
        { title: 'វិន័យយុទ្ធសាស្ត្រ', desc: 'ការគ្រប់គ្រងទីលានប្រកបដោយប្រព័ន្ធ និងការដាក់សម្ពាធយ៉ាងលឿនរហ័ស។' },
        { title: 'សាលាបណ្តុះបណ្តាលយុវជន', desc: 'ការបណ្តុះបណ្តាលយុវជនជំនាន់ក្រោយតាមវិធីសាស្ត្រវិទ្យាសាស្ត្រកីឡា។' },
        { title: 'ភាពស្អិតរមួតជាមួយសហគមន៍', desc: 'ការផ្សារភ្ជាប់យ៉ាងជិតស្និទ្ធជាមួយអ្នកគាំទ្រ និងការគាំទ្របាល់ទាត់មូលដ្ឋាន។' },
        { title: 'មហិច្ឆតាដណ្តើមជ័យជម្នះ', desc: 'ការប្តេជ្ញាចិត្តមិនឈប់ឈរដើម្បីដណ្តើមពានរង្វាន់ និងកំណត់ត្រាប្រវត្តិសាស្ត្រ។' },
      ],
      honoursTitle: 'កិត្តិយស និងពានរង្វាន់ក្លឹប',
      honours: [
        { count: '5x', title: 'ម្ចាស់ជើងឯកលីគកំពូល', year: '២០១៩, ២០២១, ២០២៣, ២០២៤, ២០២៥' },
        { count: '4x', title: 'ម្ចាស់ពានរង្វាន់ Super Cup', year: '២០២០, ២០២២, ២០២៤, ២០២៥' },
        { count: '3x', title: 'ពានរង្វាន់សហព័ន្ធ Champions Trophy', year: '២០២១, ២០២៣, ២០២៥' },
        { count: '2x', title: 'ឡើងដល់វគ្គផ្តាច់ព្រ័ត្រពានរង្វាន់ទ្វីប', year: '២០២៤, ២០២៥' },
      ],
    },
    contact: {
      tag: '០៣ // ទំនាក់ទំនងផ្ទាល់',
      title: 'ទាក់ទងមកយើងខ្ញុំ',
      subtitle: 'ទំនាក់ទំនងផ្ទាល់មកកាន់ការិយាល័យកណ្តាលក្លឹប។ រាល់សារនឹងបញ្ជូនចូល Telegram Bot របស់ក្លឹបភ្លាមៗ។',
      formTitle: 'ផ្ញើសារមកកាន់ក្លឹប BNC FC',
      nameLabel: 'ឈ្មោះពេញ *',
      namePlaceholder: 'ឧទាហរណ៍៖ សុខ សុវណ្ណ / John Doe',
      emailLabel: 'អាសយដ្ឋានអ៊ីមែល *',
      emailPlaceholder: 'name@domain.com',
      phoneLabel: 'លេខទូរស័ព្ទ / TELEGRAM (ជម្រើស)',
      phonePlaceholder: '+855 12 345 678',
      subjectLabel: 'ប្រធានបទ / បញ្ហាទំនាក់ទំនង *',
      subjectPlaceholder: 'ការកុម្ម៉ង់អាវ, ការចុះឈ្មោះយុវជន, ការឧបត្ថម្ភ...',
      messageLabel: 'អត្ថន័យសារ *',
      messagePlaceholder: 'សូមសរសេរព័ត៌មានលម្អិតនៅទីនេះ...',
      submitBtn: 'ផ្ញើសារចូល TELEGRAM BOT',
      sendingBtn: 'កំពុងបញ្ជូនសារ...',
      successMsg: 'សារត្រូវបានផ្ញើទៅកាន់ Telegram Bot របស់ BNC FC ដោយជោគជ័យ! ក្រុមការងារយើងនឹងទាក់ទងត្រឡប់មកវិញក្នុងពេលឆាប់ៗ។',
      errorMsg: 'ការផ្ញើសារមិនជោគជ័យទេ។ សូមពិនិត្យព័ត៌មានម្តងទៀត។',
      botNotice: 'ប្រព័ន្ធផ្ញើសារ TELEGRAM BOT ស្វ័យប្រវត្តិ',
      botNoticeDesc: 'សាររបស់អ្នកនឹងត្រូវបានផ្ញើចូលទៅកាន់ Telegram Channel របស់គណៈគ្រប់គ្រងក្លឹបភ្លាមៗ។',
      hqTitle: 'ទីស្នាក់ការកណ្តាលក្លឹប',
      hqAddress: 'មជ្ឈមណ្ឌលកីឡា BNC, មហាវិថីសម្តេចតេជោ ហ៊ុន សែន, រាជធានីភ្នំពេញ',
      phoneTitle: 'ទូរស័ព្ទទំនាក់ទំនង',
      phoneVal: '+855 (0) 23 888 999',
      emailTitle: 'អ៊ីមែលផ្លូវការ',
      emailVal: 'contact@bncfootball.club',
      telegramTitle: 'ឆានែល TELEGRAM',
      telegramVal: '@BNC_FC_Official',
      securityBadge: 'ប្រព័ន្ធសុវត្ថិភាពខ្ពស់ // ការពារ SPAM និងកំណត់ចំនួនដង',
      validation: {
        nameMin: 'ឈ្មោះត្រូវមានយ៉ាងតិច ២ តួអក្សរ។',
        emailInvalid: 'សូមបញ្ចូលអ៊ីមែលដែលត្រឹមត្រូវ (ឧ. name@domain.com)។',
        phoneInvalid: 'ទម្រង់លេខទូរស័ព្ទមិនត្រឹមត្រូវ (ប្រើតែលេខ, +, -, ())។',
        subjectMin: 'ប្រធានបទត្រូវមានយ៉ាងតិច ៣ តួអក្សរ។',
        messageMin: 'អត្ថន័យសារត្រូវមានយ៉ាងតិច ១០ តួអក្សរ។',
        tooFast: 'ការផ្ញើត្រូវបានបដិសេធ៖ បានបំពេញទម្រង់លឿនខុសពីធម្មតា (ប្រព័ន្ធការពារ Bot)។',
        rateLimit: 'អ្នកបានផ្ញើសារញឹកញាប់ពេក។ សូមរង់ចាំប៉ុន្មាននាទីមុនពេលផ្ញើម្តងទៀត។',
      },
    },
    footer: {
      tagline: 'ភាពជាក់លាក់។ ចំណង់ចំណូលចិត្ត។ កិត្តិយស។ គេហទំព័រផ្លូវការរបស់ក្លឹបបាល់ទាត់ BNC FC។',
      quickLinks: 'តំណភ្ជាប់រហ័ស',
      sponsors: 'ដៃគូសហការផ្លូវការ',
      socials: 'បណ្តាញសង្គមផ្លូវការ',
      rights: '© ២០២៦ ក្លឹបបាល់ទាត់ BNC FC។ រក្សាសិទ្ធិគ្រប់យ៉ាង។',
    },
  },
};
