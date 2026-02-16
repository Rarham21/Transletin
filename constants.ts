import { Language, Testimonial, TranslationContent, VideoSample } from './types';

// Using a publicly available abstract network background that matches the cyan/blue description
export const VIDEO_BG_URL = "https://static.vecteezy.com/system/resources/previews/001/803/236/mp4/abstract-network-background-free-video.mp4";


export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'ID', label: 'Indonesia', flag: '🇮🇩' },
  { code: 'EN', label: 'English', flag: '🇺🇸' },
  { code: 'KR', label: 'Korea', flag: '🇰🇷' },
  { code: 'JP', label: 'Japan', flag: '🇯🇵' },
  { code: 'CN', label: 'China', flag: '🇨🇳' },
  { code: 'DE', label: 'Germany', flag: '🇩🇪' },
  { code: 'AR', label: 'Arabic', flag: '🇸🇦' },
];

export const PORTFOLIO_VIDEOS: VideoSample[] = [
  { id: 'caBLmWWjV_8', title: 'Sample 1' },
  { id: 'Fpz4eTEOc6E', title: 'Sample 2' },
  { id: 'FZCzm8HpAiI', title: 'Sample 3' },
  { id: 'qpUQ0uMcg5A', title: 'Sample 4' },
  { id: 'HMa6zQ_STD4', title: 'Sample 5' },
  { id: 'rQEesf-lVrk', title: 'Sample 6' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Andi Pratama",
    role: "Content Creator",
    text: "Subtitle yang sangat akurat! CPS-nya pas banget, penonton saya jadi lebih nyaman nonton video panjang.",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Sarah Jenkins",
    role: "Filmmaker",
    text: "The manual line breaks make a huge difference. Much better than the AI generated ones I used to use.",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Kim Min-ji",
    role: "YouTuber",
    text: "Penerjemahan bahasa Koreanya sangat natural. Sangat merekomendasikan jasa Transletin.",
    avatar: "https://picsum.photos/100/100?random=3"
  },
  {
    name: "Budi Santoso",
    role: "Lecturer",
    text: "Sangat profesional. Waktu pengerjaan cepat dan hasilnya sangat memuaskan untuk materi kuliah saya.",
    avatar: "https://picsum.photos/100/100?random=4"
  },
  {
    name: "Jessica Lee",
    role: "Marketing Manager",
    text: "We used Transletin for our corporate video. The readability was perfect for our diverse audience.",
    avatar: "https://picsum.photos/100/100?random=5"
  }
];

export const CONTENT: Record<Language, TranslationContent> = {
  ID: {
    nav: {
      home: "Beranda",
      features: "Keunggulan",
      comparison: "Perbandingan",
      portfolio: "Portfolio",
      testimonials: "Ulasan",
      contact: "Kontak",
      order: "Pesan Sekarang"
    },
    hero: {
      title: "Subtitle Profesional yang Nyaman Dibaca",
      subtitle: "Jasa terjemahan manual dengan memperhatikan Readability, CPS, dan Line-break yang tepat.",
      cta: "Lihat Portfolio"
    },
    features: {
      title: "Mengapa Transletin?",
      readability: {
        title: "Keterbacaan Tinggi",
        desc: "Diksi dipilih agar mudah dipahami oleh penonton lokal maupun internasional."
      },
      cps: {
        title: "Kontrol CPS Akurat",
        desc: "Characters Per Second (CPS) dijaga agar penonton sempat membaca subtitle tanpa terburu-buru."
      },
      formatting: {
        title: "Line-Break Sempurna",
        desc: "Pemenggalan kalimat yang logis, tidak memutus frasa, dan estetik di layar."
      }
    },
    comparison: {
      title: "Mesin vs Manusia",
      desc: "Geser slider untuk melihat perbedaan kualitas subtitle.",
      machineLabel: "Terjemahan Mesin (Kaku)",
      manualLabel: "Transletin (Natural)",
      sampleText: {
        machine: "Ini adalah sebuah contoh dari bagaimana mesin mungkin memotong kalimat di tempat yang salah dan membuatnya susah dibaca.",
        manual: "Ini contoh pemenggalan kalimat\nyang tepat agar nyaman dibaca."
      },
      stats: {
        cps: "Maks 42 Char/baris",
        lines: "Maks 2 Baris"
      }
    },
    portfolio: {
      title: "Contoh Hasil Karya",
      desc: "Video-video yang telah kami kerjakan dengan subtitle profesional."
    },
    testimonials: {
      title: "Apa Kata Mereka?"
    },
    contact: {
      title: "Hubungi Kami",
      email: "Email Kami",
      whatsapp: "Chat WhatsApp",
      shopee: "Order via Shopee"
    }
  },
  EN: {
    nav: {
      home: "Home",
      features: "Features",
      comparison: "Comparison",
      portfolio: "Portfolio",
      testimonials: "Reviews",
      contact: "Contact",
      order: "Order Now"
    },
    hero: {
      title: "Professional Subtitles that Flow",
      subtitle: "Manual translation services focusing on Readability, CPS, and proper Line-breaks.",
      cta: "View Portfolio"
    },
    features: {
      title: "Why Transletin?",
      readability: {
        title: "High Readability",
        desc: "Wording selected for easy comprehension by local and international audiences."
      },
      cps: {
        title: "Accurate CPS Control",
        desc: "Characters Per Second (CPS) maintained so viewers have time to read without rushing."
      },
      formatting: {
        title: "Perfect Line-Breaks",
        desc: "Logical sentence splitting that doesn't break phrases and looks aesthetic on screen."
      }
    },
    comparison: {
      title: "Machine vs Human",
      desc: "Slide to see the difference in subtitle quality.",
      machineLabel: "Machine Translation (Stiff)",
      manualLabel: "Transletin (Natural)",
      sampleText: {
        machine: "This is an example of how a machine might break the sentence in the wrong place making it hard to read.",
        manual: "This is an example of proper line breaks\nthat make reading comfortable."
      },
      stats: {
        cps: "Max 42 Char/line",
        lines: "Max 2 Lines"
      }
    },
    portfolio: {
      title: "Our Work",
      desc: "Videos we have worked on with professional subtitles."
    },
    testimonials: {
      title: "Testimonials"
    },
    contact: {
      title: "Contact Us",
      email: "Email Us",
      whatsapp: "Chat WhatsApp",
      shopee: "Order via Shopee"
    }
  },
  KR: {
    nav: { home: "홈", features: "특징", comparison: "비교", portfolio: "포트폴리오", testimonials: "후기", contact: "연락처", order: "주문하기" },
    hero: { title: "읽기 편한 전문 자막", subtitle: "가독성, CPS, 줄바꿈을 고려한 수동 번역 서비스.", cta: "포트폴리오 보기" },
    features: {
      title: "왜 Transletin인가요?",
      readability: { title: "높은 가독성", desc: "현지 및 해외 시청자가 쉽게 이해할 수 있는 단어 선택." },
      cps: { title: "정확한 CPS 제어", desc: "시청자가 서두르지 않고 읽을 수 있도록 초당 문자 수(CPS) 유지." },
      formatting: { title: "완벽한 줄바꿈", desc: "구문을 끊지 않고 화면에서 보기 좋은 논리적인 문장 분할." }
    },
    comparison: {
      title: "기계 vs 인간",
      desc: "자막 품질의 차이를 확인하려면 슬라이드하세요.",
      machineLabel: "기계 번역 (부자연스러움)",
      manualLabel: "Transletin (자연스러움)",
      sampleText: {
        machine: "이것은 기계가 문장을 잘못된 곳에서 끊어 읽기 어렵게 만드는 방법의 예입니다.",
        manual: "이것은 우리가 문장을 올바르게 나누어\n읽기 편하게 만드는 예입니다."
      },
      stats: {
        cps: "최대 42자/줄",
        lines: "최대 2줄"
      }
    },
    portfolio: {
      title: "포트폴리오",
      desc: "전문 자막으로 작업한 영상들입니다."
    },
    testimonials: { title: "고객 후기" },
    contact: { title: "문의하기", email: "이메일", whatsapp: "WhatsApp 채팅", shopee: "Shopee 주문" }
  },
  JP: {
    nav: { home: "ホーム", features: "特徴", comparison: "比較", portfolio: "ポートフォリオ", testimonials: "レビュー", contact: "お問い合わせ", order: "注文する" },
    hero: { title: "読みやすいプロの字幕", subtitle: "可読性、CPS、適切な改行に重点を置いた手動翻訳サービス。", cta: "ポートフォリオを見る" },
    features: {
      title: "Transletinを選ぶ理由",
      readability: { title: "高い可読性", desc: "国内外の視聴者が理解しやすい言葉選び。" },
      cps: { title: "正確なCPS制御", desc: "視聴者が急がずに読めるよう、秒間文字数（CPS）を維持。" },
      formatting: { title: "完璧な改行", desc: "フレーズを途切れさせず、画面上で美しく見える論理的な文章分割。" }
    },
    comparison: {
      title: "機械 vs 人間",
      desc: "スライドして字幕の品質の違いを確認してください。",
      machineLabel: "機械翻訳 (不自然)",
      manualLabel: "Transletin (自然)",
      sampleText: {
        machine: "これは、機械が間違った場所で文を区切り、読みにくくする方法の例です。",
        manual: "これは、私たちが適切に改行し、\n読みやすくする方法の例です。"
      },
      stats: {
        cps: "最大42文字/行",
        lines: "最大2行"
      }
    },
    portfolio: {
      title: "制作実績",
      desc: "プロの字幕で制作した動画です。"
    },
    testimonials: { title: "お客様の声" },
    contact: { title: "お問い合わせ", email: "メール", whatsapp: "WhatsAppチャット", shopee: "Shopeeで注文" }
  },
  CN: {
    nav: { home: "首页", features: "特点", comparison: "比较", portfolio: "作品集", testimonials: "评价", contact: "联系我们", order: "立即下单" },
    hero: { title: "流畅易读的专业字幕", subtitle: "注重可读性、CPS和正确换行的人工翻译服务。", cta: "查看作品集" },
    features: {
      title: "为什么选择 Transletin？",
      readability: { title: "高可读性", desc: "措辞通俗易懂，适合国内外观众。" },
      cps: { title: "精准CPS控制", desc: "保持每秒字符数（CPS），让观众从容阅读。" },
      formatting: { title: "完美换行", desc: "逻辑分行，不断句，画面美观。" }
    },
    comparison: {
      title: "机器 vs 人工",
      desc: "滑动查看字幕质量差异。",
      machineLabel: "机器翻译 (生硬)",
      manualLabel: "Transletin (自然)",
      sampleText: {
        machine: "这是一个机器如何在错误的地方断句并使其难以阅读的例子。",
        manual: "这是一个我们如何正确分行，\n使其阅读舒适的例子。"
      },
      stats: {
        cps: "每行最多42字",
        lines: "最多2行"
      }
    },
    portfolio: {
      title: "作品展示",
      desc: "我们制作的专业字幕视频。"
    },
    testimonials: { title: "客户评价" },
    contact: { title: "联系我们", email: "发送邮件", whatsapp: "WhatsApp", shopee: "Shopee 下单" }
  },
  DE: {
    nav: { home: "Start", features: "Features", comparison: "Vergleich", portfolio: "Portfolio", testimonials: "Bewertungen", contact: "Kontakt", order: "Bestellen" },
    hero: { title: "Professionelle Untertitel", subtitle: "Manuelle Übersetzung mit Fokus auf Lesbarkeit, CPS und korrekte Zeilenumbrüche.", cta: "Portfolio ansehen" },
    features: {
      title: "Warum Transletin?",
      readability: { title: "Hohe Lesbarkeit", desc: "Wortwahl für einfaches Verständnis." },
      cps: { title: "Präzise CPS-Kontrolle", desc: "Zeichen pro Sekunde (CPS) optimiert für entspanntes Lesen." },
      formatting: { title: "Perfekte Zeilenumbrüche", desc: "Logische Satzteilung, die Phrasen nicht unterbricht." }
    },
    comparison: {
      title: "Maschine vs Mensch",
      desc: "Schieben Sie, um den Unterschied zu sehen.",
      machineLabel: "Maschine (Steif)",
      manualLabel: "Transletin (Natürlich)",
      sampleText: {
        machine: "Dies ist ein Beispiel dafür, wie eine Maschine den Satz an der falschen Stelle unterbrechen könnte.",
        manual: "Dies ist ein Beispiel für korrekte\nZeilenumbrüche für besseres Lesen."
      },
      stats: {
        cps: "Max. 42 Zeichen/Zeile",
        lines: "Max. 2 Zeilen"
      }
    },
    portfolio: {
      title: "Unsere Arbeit",
      desc: "Videos, die wir mit professionellen Untertiteln bearbeitet haben."
    },
    testimonials: { title: "Kundenstimmen" },
    contact: { title: "Kontakt", email: "E-Mail", whatsapp: "WhatsApp", shopee: "Shopee" }
  },
  AR: {
    nav: { home: "الرئيسية", features: "المميزات", comparison: "مقارنة", portfolio: "أعمالنا", testimonials: "آراء العملاء", contact: "اتصل بنا", order: "اطلب الآن" },
    hero: { title: "ترجمة احترافية سهلة القراءة", subtitle: "خدمة ترجمة يدوية تركز على سهولة القراءة، والسرعة المناسبة، وفواصل الأسطر الصحيحة.", cta: "شاهد الأعمال" },
    features: {
      title: "لماذا Transletin؟",
      readability: { title: "سهولة قراءة عالية", desc: "اختيار كلمات يسهل فهمها للجمهور المحلي والدولي." },
      cps: { title: "تحكم دقيق في CPS", desc: "الحفاظ على عدد الأحرف في الثانية ليتسنى للمشاهد القراءة بـأريحية." },
      formatting: { title: "فواصل أسطر مثالية", desc: "تقسيم منطقي للجمل لا يقطع المعنى ويبدو جميلاً على الشاشة." }
    },
    comparison: {
      title: "الآلة مقابل الإنسان",
      desc: "حرك لرؤية الفرق في جودة الترجمة.",
      machineLabel: "ترجمة آلية (ركيكة)",
      manualLabel: "Transletin (طبيعية)",
      sampleText: {
        machine: "هذا مثال على كيف يمكن للآلة أن تقطع الجملة في المكان الخطأ مما يجعل قراءتها صعبة.",
        manual: "هذا مثال على كيفية تقسيم الأسطر\nبشكل صحيح لتكون مريحة للقراءة."
      },
      stats: {
        cps: "حد أقصى 42 حرف/سطر",
        lines: "سطران كحد أقصى"
      }
    },
    portfolio: {
      title: "معرض الأعمال",
      desc: "فيديوهات قمنا بترجمتها بشكل احترافي."
    },
    testimonials: { title: "آراء العملاء" },
    contact: { title: "اتصل بنا", email: "البريد الإلكتروني", whatsapp: "واتساب", shopee: "Shopee" }
  }
};