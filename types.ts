export type Language = 'ID' | 'EN' | 'KR' | 'JP' | 'CN' | 'DE' | 'AR';

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface VideoSample {
  id: string;
  title: string;
  thumbnail?: string;
}

export interface TranslationContent {
  nav: {
    home: string;
    features: string;
    comparison: string;
    portfolio: string;
    testimonials: string;
    contact: string;
    order: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
    readability: {
      title: string;
      desc: string;
    };
    cps: {
      title: string;
      desc: string;
    };
    formatting: {
      title: string;
      desc: string;
    };
  };
  comparison: {
    title: string;
    desc: string;
    machineLabel: string;
    manualLabel: string;
    sampleText: {
      machine: string;
      manual: string;
    };
    stats: {
      cps: string;
      lines: string;
    };
  };
  portfolio: {
    title: string;
    desc: string;
  };
  testimonials: {
    title: string;
  };
  contact: {
    title: string;
    email: string;
    whatsapp: string;
    shopee: string;
  };
}