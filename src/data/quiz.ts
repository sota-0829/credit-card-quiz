export type ResultType = 'REWARD' | 'STATUS' | 'TRAVEL' | 'CONVENIENCE' | 'AMAZON' | 'PAYPAY';

export interface Score {
  REWARD: number;
  STATUS: number;
  TRAVEL: number;
  CONVENIENCE: number;
  AMAZON: number;
  PAYPAY: number;
}

export interface Option {
  text: string;
  points: Score;
}

export interface Question {
  id: number;
  title: string;
  options: Option[];
}

export interface ResultData {
  type: ResultType;
  title: string;
  cardName: string;
  description: string;
  features: string[];
  affiliateLink: string;
  campaignText?: string;
  // A8.net affiliate code parts
  adScript?: {
    id: string;      // ex: 'div_admane_async_1734_658_2971'
    site: string;    // ex: '1734'
    article: string; // ex: '658'
    link: string;    // ex: '2971'
    image: string;   // ex: '3218'
    ns: string;      // ex: '1'
    sad: string;     // ex: 's00000015110002'
    code1: string;   // ex: '260304920240'
    code2: string;   // ex: '4AZ8K8+3YW1YQ+38L8+BXQOH'
  };
  adPixel?: string;  // ex: 'https://www10.a8.net/0.gif?a8mat=4AZ8K8+3YW1YQ+38L8+BXQOH'
  image: string;      // path to card image
  specs: {
    annualFee: string;
    rewardRate: string;
    brands: string[];
    insurance: string;
  };
}

export const questions: Question[] = [
  {
    id: 1,
    title: "月のクレジットカードのおおよその決済額はどれくらいですか？",
    options: [
      { text: "10万円未満", points: { REWARD: 0, STATUS: 1, TRAVEL: 0, CONVENIENCE: 2, AMAZON: 1, PAYPAY: 1 } },
      { text: "10万円〜30万円", points: { REWARD: 2, STATUS: 1, TRAVEL: 1, CONVENIENCE: 1, AMAZON: 2, PAYPAY: 2 } },
      { text: "30万円以上", points: { REWARD: 1, STATUS: 0, TRAVEL: 3, CONVENIENCE: 0, AMAZON: 1, PAYPAY: 0 } },
    ],
  },
  {
    id: 2,
    title: "出張や旅行に行く頻度はどの程度ですか？",
    options: [
      { text: "ほとんど行かない", points: { REWARD: 1, STATUS: 0, TRAVEL: 0, CONVENIENCE: 2, AMAZON: 2, PAYPAY: 2 } },
      { text: "年に1〜2回程度", points: { REWARD: 2, STATUS: 2, TRAVEL: 1, CONVENIENCE: 0, AMAZON: 0, PAYPAY: 0 } },
      { text: "年に3回以上（よく行く）", points: { REWARD: 0, STATUS: 1, TRAVEL: 3, CONVENIENCE: 0, AMAZON: 0, PAYPAY: 0 } },
    ],
  },
  {
    id: 3,
    title: "最もよく利用するお店・サービスは次のうちどれですか？",
    options: [
      { text: "コンビニやマクドナルドなどの飲食チェーン", points: { REWARD: 0, STATUS: 0, TRAVEL: 0, CONVENIENCE: 4, AMAZON: 0, PAYPAY: 0 } },
      { text: "Amazonやスターバックス", points: { REWARD: 0, STATUS: 0, TRAVEL: 0, CONVENIENCE: 0, AMAZON: 4, PAYPAY: 0 } },
      { text: "楽天市場やYahoo!ショッピング", points: { REWARD: 3, STATUS: 0, TRAVEL: 1, CONVENIENCE: 0, AMAZON: 0, PAYPAY: 2 } },
    ],
  },
  {
    id: 4,
    title: "普段お使いのスマホキャリアやメインのスマホ決済は？",
    options: [
      { text: "ソフトバンク/Y!mobile・PayPayをよく使う", points: { REWARD: 0, STATUS: 0, TRAVEL: 0, CONVENIENCE: 0, AMAZON: 0, PAYPAY: 4 } },
      { text: "楽天モバイル・楽天ペイをよく使う", points: { REWARD: 3, STATUS: 0, TRAVEL: 2, CONVENIENCE: 0, AMAZON: 0, PAYPAY: 0 } },
      { text: "特にこだわりはない・その他", points: { REWARD: 1, STATUS: 2, TRAVEL: 0, CONVENIENCE: 2, AMAZON: 2, PAYPAY: 1 } },
    ],
  },
  {
    id: 5,
    title: "クレジットカードの「年会費」に対するお考えは？",
    options: [
      { text: "絶対に無料がいい", points: { REWARD: 2, STATUS: 1, TRAVEL: 0, CONVENIENCE: 2, AMAZON: 2, PAYPAY: 2 } },
      { text: "海外旅行保険等のサポートが欲しい（無料希望）", points: { REWARD: 0, STATUS: 3, TRAVEL: 0, CONVENIENCE: 0, AMAZON: 0, PAYPAY: 0 } },
      { text: "数万円払ってでもラウンジ等の豪華な特権が欲しい", points: { REWARD: 0, STATUS: 0, TRAVEL: 4, CONVENIENCE: 0, AMAZON: 0, PAYPAY: 0 } },
    ],
  },
];

export const results: Record<ResultType, ResultData> = {
  REWARD: {
    type: 'REWARD',
    title: '還元率最強・実利重視型',
    cardName: '楽天カード',
    description: 'あなたは徹底した実利主義のエンジニア。無駄なくザクザクポイントが貯まり、すぐに生活費やガジェット購入に充てられる高還元率カードが最適です。',
    features: ['どこでも高還元率', '貯まったポイントが使いやすい', '年会費の元がすぐ取れる'],
    affiliateLink: 'https://hb.afl.rakuten.co.jp/hsc/51918dce.84286293.51918dcf.3ba9ee28/?link_type=hybrid_url&ut=eyJwYWdlIjoic2hvcCIsInR5cGUiOiJoeWJyaWRfdXJsIiwiY29sIjoxLCJjYXQiOjEsImJhbiI6MTY3NDAxLCJhbXAiOmZhbHNlfQ%3D%3D',
    campaignText: '🎉 もれなく新規入会で最大10,000ポイントプレゼント中！',
    image: '/images/cards/rakuten.png',
    specs: {
      annualFee: '永年無料',
      rewardRate: '1.0%〜',
      brands: ['Visa', 'Mastercard', 'JCB', 'AMEX'],
      insurance: '海外(利用付帯)'
    }
  },
  STATUS: {
    type: 'STATUS',
    title: '無料＆手厚い保険・サブカード型',
    cardName: 'エポスカード',
    description: 'メインのカードとは別に、持っているだけで安心と恩恵を受けられる優秀なサブカードです。年会費が永年無料で、特に充実した海外旅行傷害保険などの特典が魅力です。',
    features: ['年会費が永年無料', '充実の海外旅行傷害保険が自動付帯', '全国の飲食店や施設で優待割引'],
    affiliateLink: 'https://px.a8.net/svt/ejp?a8mat=4AZ8K8+3YW1YQ+38L8+BXQOH',
    campaignText: '✨ 新規入会で2,000円相当のエポスポイントプレゼント！',
    image: '/images/cards/epos.png',
    adScript: {
      id: 'div_admane_async_1734_658_2971',
      site: '1734',
      article: '658',
      link: '2971',
      image: '3218',
      ns: '1',
      sad: 's00000015110002',
      code1: '260304920240',
      code2: '4AZ8K8+3YW1YQ+38L8+BXQOH'
    },
    adPixel: 'https://www10.a8.net/0.gif?a8mat=4AZ8K8+3YW1YQ+38L8+BXQOH',
    specs: {
      annualFee: '永年無料',
      rewardRate: '0.5%〜',
      brands: ['Visa'],
      insurance: '海外(利用付帯)'
    }
  },
  TRAVEL: {
    type: 'TRAVEL',
    title: 'ワンランク上の特権・プレミアム型',
    cardName: '楽天プレミアムカード',
    description: '国内外の空港ラウンジが使い放題になる「プライオリティ・パス」が無料で発行可能。出張や旅行が多く、楽天市場での買い物もお得にしたい方に真の価値を発揮する至高の一枚です。',
    features: ['世界1,300ヶ所にのぼる空港ラウンジが無料', '楽天市場での脅威のポイント還元', '充実の国内・海外旅行傷害保険'],
    affiliateLink: 'https://hb.afl.rakuten.co.jp/hsc/51918f0a.735b8dbe.51918dcf.3ba9ee28/?link_type=hybrid_url&ut=eyJwYWdlIjoic2hvcCIsInR5cGUiOiJoeWJyaWRfdXJsIiwiY29sIjoxLCJjYXQiOjEsImJhbiI6NTUwOTk0LCJhbXAiOmZhbHNlfQ%3D%3D',
    campaignText: '✈️ 新規入会＆利用でポイントプレゼント中！',
    image: '/images/cards/rakuten.png',
    specs: {
      annualFee: '11,000円',
      rewardRate: '1.0%〜',
      brands: ['Visa', 'Mastercard', 'JCB', 'AMEX'],
      insurance: '国内・海外'
    }
  },
  CONVENIENCE: {
    type: 'CONVENIENCE',
    title: 'コンビニ・ファストフード特化型',
    cardName: '三井住友カード（NL）',
    description: '対象のコンビニや飲食店でスマホの対象のタッチ決済を利用すると、最大7％還元という驚異的な還元率を誇る一枚。普段のちょっとした買い物が一番お得になる、現代人の必須カードです。',
    features: ['対象店舗で最大7%還元', '年会費永年無料', 'ナンバーレスで万全のセキュリティ'],
    affiliateLink: '#',
    campaignText: '📱 新規入会＆利用で最大ポイントプレゼント！',
    image: '/images/cards/smbc.png',
    specs: {
      annualFee: '永年無料',
      rewardRate: '0.5%〜7.0%',
      brands: ['Visa', 'Mastercard'],
      insurance: '海外(利用付帯)'
    }
  },
  AMAZON: {
    type: 'AMAZON',
    title: 'Amazon・スタバ特化型',
    cardName: 'JCB CARD W',
    description: 'Amazonやスターバックスなどの「JCBオリジナルシリーズパートナー」店舗でポイントが倍増する39歳以下限定の特化カード。年会費も永年無料です。',
    features: ['Amazonやスタバでポイント高還元', '年会費永年無料（39歳以下限定）', '貯めたポイントは直接Amazonで使える'],
    affiliateLink: '#',
    campaignText: '🎁 Amazon.co.jpご利用分がキャッシュバック！',
    image: '/images/cards/jcb.png',
    specs: {
      annualFee: '永年無料',
      rewardRate: '1.0%〜5.0%',
      brands: ['JCB'],
      insurance: '海外(利用付帯)'
    }
  },
  PAYPAY: {
    type: 'PAYPAY',
    title: 'スマホ・QR決済経済圏型',
    cardName: 'PayPayカード',
    description: '日本中で使える「PayPay」にチャージできる唯一のクレジットカード。SoftBankやY!mobileユーザーならさらにポイントがザクザク貯まる、経済圏特化の最強カードです。',
    features: ['PayPayポイントがどんどん貯まる', '年会費永年無料', 'Yahoo!ショッピングでいつでも高還元'],
    affiliateLink: '#',
    campaignText: '🔥 新規入会でPayPayポイント大量プレゼント中！',
    image: '/images/cards/paypay.png',
    specs: {
      annualFee: '永年無料',
      rewardRate: '1.0%〜5.0%',
      brands: ['Visa', 'Mastercard', 'JCB'],
      insurance: 'なし'
    }
  }
};
