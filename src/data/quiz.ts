export type ResultType = 'REWARD' | 'STATUS' | 'TRAVEL' | 'CONVENIENCE' | 'AMAZON' | 'PAYPAY' | 'GENERAL' | 'GOLD' | 'SPECIFIC';

export interface Score {
  REWARD: number;
  STATUS: number;
  TRAVEL: number;
  CONVENIENCE: number;
  AMAZON: number;
  PAYPAY: number;
  GENERAL: number;
  GOLD: number;
  SPECIFIC: number;
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
  catchphrase: string;
  targetLabel: string;
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
      { text: "10万円未満", points: { REWARD: 1, STATUS: 2, TRAVEL: 0, CONVENIENCE: 2, AMAZON: 1, PAYPAY: 1, GENERAL: 1, GOLD: 0, SPECIFIC: 2 } },
      { text: "10万円〜30万円", points: { REWARD: 2, STATUS: 1, TRAVEL: 1, CONVENIENCE: 1, AMAZON: 2, PAYPAY: 2, GENERAL: 2, GOLD: 2, SPECIFIC: 1 } },
      { text: "30万円以上", points: { REWARD: 1, STATUS: 0, TRAVEL: 4, CONVENIENCE: 0, AMAZON: 1, PAYPAY: 0, GENERAL: 1, GOLD: 4, SPECIFIC: 0 } },
    ],
  },
  {
    id: 2,
    title: "出張や旅行に行く頻度はどの程度ですか？",
    options: [
      { text: "ほとんど行かない", points: { REWARD: 1, STATUS: 0, TRAVEL: 0, CONVENIENCE: 2, AMAZON: 2, PAYPAY: 2, GENERAL: 2, GOLD: 0, SPECIFIC: 2 } },
      { text: "年に1〜2回程度", points: { REWARD: 2, STATUS: 2, TRAVEL: 1, CONVENIENCE: 0, AMAZON: 0, PAYPAY: 0, GENERAL: 1, GOLD: 1, SPECIFIC: 0 } },
      { text: "年に3回以上（よく行く）", points: { REWARD: 0, STATUS: 2, TRAVEL: 4, CONVENIENCE: 0, AMAZON: 0, PAYPAY: 0, GENERAL: 0, GOLD: 3, SPECIFIC: 0 } },
    ],
  },
  {
    id: 3,
    title: "最もよく利用するお店・サービスは次のうちどれですか？",
    options: [
      { text: "コンビニやマクドナルドなどの飲食チェーン", points: { REWARD: 0, STATUS: 0, TRAVEL: 0, CONVENIENCE: 5, AMAZON: 0, PAYPAY: 0, GENERAL: 0, GOLD: 2, SPECIFIC: 4 } },
      { text: "Amazonやスターバックス", points: { REWARD: 0, STATUS: 0, TRAVEL: 0, CONVENIENCE: 0, AMAZON: 5, PAYPAY: 0, GENERAL: 1, GOLD: 1, SPECIFIC: 0 } },
      { text: "楽天市場やYahoo!ショッピング", points: { REWARD: 4, STATUS: 0, TRAVEL: 1, CONVENIENCE: 0, AMAZON: 0, PAYPAY: 3, GENERAL: 0, GOLD: 0, SPECIFIC: 0 } },
    ],
  },
  {
    id: 4,
    title: "普段お使いのスマホキャリアやメインのスマホ決済は？",
    options: [
      { text: "ソフトバンク/Y!mobile・PayPayをよく使う", points: { REWARD: 0, STATUS: 0, TRAVEL: 0, CONVENIENCE: 0, AMAZON: 0, PAYPAY: 5, GENERAL: 1, GOLD: 1, SPECIFIC: 0 } },
      { text: "楽天モバイル・楽天ペイをよく使う", points: { REWARD: 5, STATUS: 0, TRAVEL: 3, CONVENIENCE: 0, AMAZON: 0, PAYPAY: 0, GENERAL: 0, GOLD: 0, SPECIFIC: 0 } },
      { text: "特にこだわりはない・その他", points: { REWARD: 1, STATUS: 2, TRAVEL: 0, CONVENIENCE: 2, AMAZON: 2, PAYPAY: 1, GENERAL: 3, GOLD: 2, SPECIFIC: 2 } },
    ],
  },
  {
    id: 5,
    title: "クレジットカードの「年会費」に対するお考えは？",
    options: [
      { text: "絶対に無料がいい", points: { REWARD: 2, STATUS: 1, TRAVEL: 0, CONVENIENCE: 2, AMAZON: 2, PAYPAY: 2, GENERAL: 3, GOLD: 0, SPECIFIC: 2 } },
      { text: "保険や優待などのメリットがあれば許容できる", points: { REWARD: 1, STATUS: 4, TRAVEL: 1, CONVENIENCE: 1, AMAZON: 1, PAYPAY: 1, GENERAL: 1, GOLD: 3, SPECIFIC: 1 } },
      { text: "数万円払ってでも豪華な特権が欲しい", points: { REWARD: 0, STATUS: 1, TRAVEL: 5, CONVENIENCE: 0, AMAZON: 0, PAYPAY: 0, GENERAL: 0, GOLD: 3, SPECIFIC: 0 } },
    ],
  },
];

export const results: Record<ResultType, ResultData> = {
  REWARD: {
    type: 'REWARD',
    title: '楽天経済圏の必須カード',
    cardName: '楽天カード',
    catchphrase: '顧客満足度15年連続No.1！',
    targetLabel: '初めての1枚におすすめ',
    description: '楽天市場でのお買い物におすすめの最強カード。買い物が常に3%以上の還元になり、楽天ポイントを日常的に貯めて使いたい方に最適です。',
    features: ['楽天市場でいつでもポイント3倍以上', '街のお店や楽天ペイでもポイントが使える', '新規入会キャンペーンが非常に手厚い'],
    affiliateLink: 'https://hb.afl.rakuten.co.jp/hsc/51918dce.84286293.51918dcf.3ba9ee28/?link_type=hybrid_url&ut=eyJwYWdlIjoic2hvcCIsInR5cGUiOiJoeWJyaWRfdXJsIiwiY29sIjoxLCJjYXQiOjEsImJhbiI6MTY3NDAxLCJhbXAiOmZhbHNlfQ%3D%3D',
    campaignText: '🎉 もれなく新規入会で楽天ポイントプレゼント中！',
    image: '/images/cards/rakuten.png',
    specs: {
      annualFee: '永年無料',
      rewardRate: '1.0%〜3.0%',
      brands: ['Visa', 'Mastercard', 'JCB', 'AMEX'],
      insurance: '海外(利用付帯)'
    }
  },
  STATUS: {
    type: 'STATUS',
    title: '優待と旅行保険のサブカード',
    cardName: 'エポスカード',
    catchphrase: '持っているだけで得をする1枚',
    targetLabel: 'サブカードとしておすすめ',
    description: '全国1万店以上の施設で優待が受けられるおすすめのサブカード。年会費無料ながら海外旅行保険も付帯し、マルイでの即日発行も可能です。',
    features: ['全国1万店以上の飲食店・施設で割引', '年会費無料で海外旅行傷害保険が付帯', 'マルイ店舗での即日発行が可能'],
    affiliateLink: 'https://px.a8.net/svt/ejp?a8mat=4AZ8K8+3YW1YQ+38L8+BXQOH',
    campaignText: '✨ 新規入会で2,000円相当のエポスポイント！',
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
      rewardRate: '0.5%',
      brands: ['Visa'],
      insurance: '海外(利用付帯)'
    }
  },
  TRAVEL: {
    type: 'TRAVEL',
    title: 'ワンランク上の特権・プレミアム型',
    cardName: '楽天プレミアムカード',
    catchphrase: '空港ラウンジ使い放題の至高',
    targetLabel: '旅行・出張が多い方におすすめ',
    description: '世界中の空港ラウンジが使い放題になる「プライオリティ・パス」が無料で発行可能なおすすめカード。楽天市場での還元率も驚異的です。',
    features: ['プライオリティ・パスが無料で発行可能', '楽天市場でのポイント還元が驚異の5倍以上', '国内・海外旅行傷害保険が最高5,000万円'],
    affiliateLink: 'https://hb.afl.rakuten.co.jp/hsc/51918f0a.735b8dbe.51918dcf.3ba9ee28/?link_type=hybrid_url&ut=eyJwYWdlIjoic2hvcCIsInR5cGUiOiJoeWJyaWRfdXJsIiwiY29sIjoxLCJjYXQiOjEsImJhbiI6NTUwOTk0LCJhbXAiOmZhbHNlfQ%3D%3D',
    campaignText: '✈️ プレミアムカード限定の入会特典あり！',
    image: '/images/cards/rakuten.png',
    specs: {
      annualFee: '11,000円',
      rewardRate: '1.0%〜5.0%',
      brands: ['Visa', 'Mastercard', 'JCB', 'AMEX'],
      insurance: '国内・海外'
    }
  },
  CONVENIENCE: {
    type: 'CONVENIENCE',
    title: 'コンビニ・飲食店の覇者',
    cardName: '三井住友カード（NL）',
    catchphrase: '対象店舗で驚異の最大7％還元',
    targetLabel: 'コンビニ利用者に最もおすすめ',
    description: '対象のコンビニや飲食店でおすすめの最強カード。スマホのタッチ決済を利用すると最大7％還元という驚異的な還元率を誇ります。',
    features: ['対象店舗で最大7%還元', '年会費永年無料', '審査後最短10秒で即時発行可能'],
    affiliateLink: '#',
    campaignText: '📱 新規入会＆利用でVポイントプレゼント！',
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
    title: 'Amazon・スタバ特化の万能カード',
    cardName: 'JCB CARD W',
    catchphrase: 'セブンやスタバでポイント爆増',
    targetLabel: '39歳以下の若年層におすすめ',
    description: 'Amazonやスタバをよく使う若年層におすすめの万能カード。スタバのモバイルオーダーで最大10.5%という圧倒的な還元率を誇ります。',
    features: ['Amazonやスタバでポイント高還元', '年会費永年無料（39歳以下限定）', '貯めたポイントはAmazonでそのまま利用可能'],
    affiliateLink: '#',
    campaignText: '🎁 Amazon.co.jpご利用分キャッシュバック実施中！',
    image: '/images/cards/jcb.png',
    specs: {
      annualFee: '永年無料',
      rewardRate: '1.0%〜10.5%',
      brands: ['JCB'],
      insurance: '海外(利用付帯)'
    }
  },
  PAYPAY: {
    type: 'PAYPAY',
    title: 'PayPayユーザーに必須の経済圏型',
    cardName: 'PayPayカード',
    catchphrase: 'PayPayポイントが一番貯まる',
    targetLabel: 'ソフトバンク・ワイモバユーザーにおすすめ',
    description: 'PayPayをメインで使う方におすすめの最強カード。Yahoo!ショッピングやLOHACOでの利用でも最大5%還元され、ポイントがどんどん貯まります。',
    features: ['PayPayポイントが直接貯まる', 'Yahoo!ショッピングでいつでも最大5%還元', '年会費永年無料でナンバーレス仕様'],
    affiliateLink: '#',
    campaignText: '🔥 新規入会でPayPayポイントプレゼント！',
    image: '/images/cards/paypay.png',
    specs: {
      annualFee: '永年無料',
      rewardRate: '1.0%〜5.0%',
      brands: ['Visa', 'Mastercard', 'JCB'],
      insurance: 'なし'
    }
  },
  GENERAL: {
    type: 'GENERAL',
    title: 'どこでも高還元・メインカード型',
    cardName: 'リクルートカード',
    catchphrase: '基本還元率1.2%の業界最高水準',
    targetLabel: 'メインカードとして広くおすすめ',
    description: '場所を選ばず常に1.2%還元されるおすすめのメインカード。公共料金の支払いでも還元率が下がらず、効率的にポイントを貯めたい方に最適です。',
    features: ['場所を選ばず常に1.2%還元', '公共料金の支払いでも高還元', '貯まったポイントはPontaやdポイントに交換可能'],
    affiliateLink: '#',
    campaignText: '💳 新規入会＆利用で最大ポイントプレゼント！',
    image: '/images/cards/recruit.png',
    specs: {
      annualFee: '永年無料',
      rewardRate: '1.2%',
      brands: ['Visa', 'Mastercard', 'JCB'],
      insurance: '国内・海外'
    }
  },
  GOLD: {
    type: 'GOLD',
    title: 'コスパ最強のゴールドカード',
    cardName: '三井住友カード ゴールド（NL）',
    catchphrase: '100万円利用で年会費が永年無料',
    targetLabel: 'ステータスと実利を求める方におすすめ',
    description: '年間100万円利用する方におすすめの最強ゴールドカード。翌年以降の年会費が永年無料になり、毎年1万ポイントのボーナスも付与されます。',
    features: ['100万円修行達成で年会費が永年無料', '毎年最大10,000ポイントの継続特典', '空港ラウンジ無料利用などのゴールド特典'],
    affiliateLink: '#',
    campaignText: '🏆 100万円利用で年会費永年無料のチャンス！',
    image: '/images/cards/smbc_gold.png',
    specs: {
      annualFee: '5,500円(条件付無料)',
      rewardRate: '0.5%〜7.0%',
      brands: ['Visa', 'Mastercard'],
      insurance: '国内・海外'
    }
  },
  SPECIFIC: {
    type: 'SPECIFIC',
    title: '対象店舗で最大20%の超高還元',
    cardName: '三菱ＵＦＪカード',
    catchphrase: 'ローソン・松屋で最大20%還元',
    targetLabel: '特定の飲食店利用者におすすめ',
    description: 'セブン-イレブンやローソンでおすすめの超高還元カード。アプリへのログイン等の条件クリアで最大20%還元という驚異的な数値を叩き出せます。',
    features: ['コンビニや松屋で最大20%還元', '年会費は年1回の利用で無料', '不正利用の24時間モニタリングで安心'],
    affiliateLink: '#',
    campaignText: '🔥 特定店舗での超高還元キャンペーン中！',
    image: '/images/cards/mufg.png',
    specs: {
      annualFee: '無料(年1回利用)',
      rewardRate: '0.5%〜20.0%',
      brands: ['Visa', 'Mastercard', 'JCB', 'AMEX'],
      insurance: '海外'
    }
  }
};
