export type ResultType = 'REWARD' | 'STATUS' | 'TRAVEL';

export interface Score {
  REWARD: number;
  STATUS: number;
  TRAVEL: number;
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
}

export const questions: Question[] = [
  {
    id: 1,
    title: "月のクレジットカード決済額はどれくらいですか？",
    options: [
      { text: "10万円未満", points: { REWARD: 2, STATUS: 0, TRAVEL: 0 } },
      { text: "10万円〜30万円", points: { REWARD: 1, STATUS: 1, TRAVEL: 1 } },
      { text: "30万円以上", points: { REWARD: 0, STATUS: 2, TRAVEL: 2 } },
    ],
  },
  {
    id: 2,
    title: "出張や旅行の頻度はどの程度ですか？",
    options: [
      { text: "ほとんど行かない", points: { REWARD: 2, STATUS: 1, TRAVEL: 0 } },
      { text: "年に1〜2回程度", points: { REWARD: 1, STATUS: 2, TRAVEL: 1 } },
      { text: "年に3回以上（よく行く）", points: { REWARD: 0, STATUS: 0, TRAVEL: 3 } },
    ],
  },
  {
    id: 3,
    title: "クレジットカードに求める最も重要な要素はどれですか？",
    options: [
      { text: "とにかくポイント還元率・実利主義", points: { REWARD: 3, STATUS: 0, TRAVEL: 0 } },
      { text: "ラウンジ等の特典やステータス感", points: { REWARD: 0, STATUS: 3, TRAVEL: 1 } },
      { text: "マイルの貯まりやすさ・旅行特典", points: { REWARD: 0, STATUS: 1, TRAVEL: 3 } },
    ],
  },
  {
    id: 4,
    title: "貯めたい・よく使うポイント圏はどれですか？",
    options: [
      { text: "楽天ポイントや共通ポイント", points: { REWARD: 2, STATUS: 0, TRAVEL: 0 } },
      { text: "Vポイント等の銀行系・特になし", points: { REWARD: 1, STATUS: 2, TRAVEL: 0 } },
      { text: "航空会社のマイル（ANA/JAL）", points: { REWARD: 0, STATUS: 0, TRAVEL: 3 } },
    ],
  },
  {
    id: 5,
    title: "クレジットカードの年会費の許容範囲は？",
    options: [
      { text: "絶対に無料がいい", points: { REWARD: 3, STATUS: 0, TRAVEL: 0 } },
      { text: "1万円台なら出してもいい", points: { REWARD: 1, STATUS: 2, TRAVEL: 1 } },
      { text: "数万円でも特典に見合うならOK", points: { REWARD: 0, STATUS: 3, TRAVEL: 2 } },
    ],
  },
];

export const results: Record<ResultType, ResultData> = {
  REWARD: {
    type: 'REWARD',
    title: '還元率最強・実利重視型',
    cardName: '楽天プレミアムカード（または楽天カード）',
    description: 'あなたは徹底した実利主義のエンジニア。無駄なくザクザクポイントが貯まり、すぐに生活費やガジェット購入に充てられる高還元率カードが最適です。',
    features: ['どこでも高還元率', '貯まったポイントが使いやすい', '年会費の元がすぐ取れる'],
    affiliateLink: 'https://px.a8.net/svt/ejp?a8mat=4AZ8K8+3YW1YQ+38L8+BXQOH', // Note: Derived from the tracking pixel
    campaignText: '🎉 もれなく新規入会で最大10,000ポイントプレゼント中！',
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
    adPixel: 'https://www10.a8.net/0.gif?a8mat=4AZ8K8+3YW1YQ+38L8+BXQOH'
  },
  STATUS: {
    type: 'STATUS',
    title: 'ステータス・特化型',
    cardName: '三井住友カード プラチナプリファード',
    description: 'ステータスと効率を両立したいあなたには、特化型プラチナカードがベスト。コンシェルジュやラウンジなど、ワンランク上の体験と高還元を兼ね備えています。',
    features: ['特約店での驚異的な還元率', '充実した付帯保険とラウンジ', '洗練された券面デザイン'],
    affiliateLink: '#',
    campaignText: '✨ 当サイト限定！初年度年会費相当のポイント還元キャンペーン！',
  },
  TRAVEL: {
    type: 'TRAVEL',
    title: 'マイル・旅行特化型',
    cardName: 'Marriott Bonvoy アメリカン・エキスプレス・プレミアム・カード',
    description: '旅行や出張を楽しむインフライトハッカーなあなたに。日常の決済でマイルや高級ホテルのポイントが貯まり、非日常の体験を劇的にアップグレードします。',
    features: ['無料宿泊特典のチャンス', '高還元なマイル移行率', '空港ラウンジや手荷物無料宅配など'],
    affiliateLink: '#',
    campaignText: '✈️ 新規入会後3ヶ月以内の利用で最大39,000ポイント獲得！',
  },
};
