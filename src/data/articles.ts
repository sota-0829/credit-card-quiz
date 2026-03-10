export type ArticleCategory = 'REWARD' | 'STATUS' | 'TRAVEL' | 'CONVENIENCE' | 'AMAZON' | 'PAYPAY';

export interface Article {
    slug: string;
    title: string;
    description: string;
    category: ArticleCategory;
    content: string; // Markdown-like content
    pros: string[];
    cons: string[];
    rating: number; // 0-5
    affiliateUrl: string;
    updatedAt: string;
}

export const articles: Article[] = [
    {
        slug: 'rakuten-premium-card-review',
        title: '楽天プレミアムカードのメリット・デメリットをエンジニア視点で徹底解説',
        description: '楽天プレミアムカードは本当に最強の還元率なのか？プライオリティ・パスや楽天市場でのポイント倍率など、実利を重視するエンジニア向けの徹底レビュー。',
        category: 'REWARD',
        pros: ['楽天市場でポイント最大5倍', 'プライオリティ・パスが無料発行可能', '海外旅行保険が手厚い'],
        cons: ['年会費が11,000円かかる', '2023年12月のポイント改定で一部還元率ダウン'],
        rating: 4.5,
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=YOUR_RAKUTEN_ID',
        content: `
## 楽天プレミアムカードがエンジニアに選ばれる理由

結論から言うと、**「楽天市場での買い物が多い」「海外カンファレンスや旅行に行く」**エンジニアにとって、これ以上のカードはありません。

### 1. 楽天市場での還元率が圧倒的
楽天プレミアムカード会員は、楽天市場でのポイント還元率が通常のカードよりも優遇されます。PCパーツ、技術書、ガジェット類を楽天で購入する機会が多い場合、年会費（11,000円）の元はすぐに取れます。

### 2. プライオリティ・パスが無料で発行可能
世界1,300ヶ所以上の空港ラウンジが使い放題になる「プライオリティ・パス（プレステージ会員相当）」を無料で発行できます。通常であれば469ドルの年会費がかかるサービスが、カードの年会費だけで手に入るのは驚異的です。

### 3. 海外・国内旅行傷害保険が最高5,000万円
自動付帯（一部利用付帯）で手厚い保険がついてくるため、万が一の際も安心です。
        `,
        updatedAt: '2024-03-11'
    },
    {
        slug: 'epos-card-travel-insurance',
        title: 'エポスカードは持っているだけで得をする？海外旅行保険と優待の活用術',
        description: '年会費無料なのに海外旅行保険が手厚いエポスカード。サブカードとして必須と言われる理由と、全国10,000店舗以上の優待を使い倒す方法をまとめました。',
        category: 'STATUS',
        pros: ['年会費が永年無料', '海外旅行傷害保険がついてくる', '全国1,0000店以上で優待あり'],
        cons: ['基本のポイント還元率は0.5%と平均的'],
        rating: 4.8,
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=YOUR_EPOS_ID',
        content: `
## エポスカードが「最強のサブカード」と呼ばれる理由

エンジニアの多くがメインカードの他に、エポスカードを財布に忍ばせています。その最大の理由は**「維持コストゼロで得られる安心感」**にあります。

### 1. 年会費はずっと無料
発行から維持まで、一切の費用がかかりません。使わなくても損をしない、まさに「持っておくだけ」で良いカードです。

### 2. 海外旅行傷害保険の充実
2023年10月より「利用付帯」となりましたが、旅行代金（電車代や空港バス代など）を1円でもカードで払えば、非常に手厚い保険が適用されます。他社のゴールドカード並みの補償が無料で手に入るのは魅力です。
        `,
        updatedAt: '2024-03-11'
    },
    {
        slug: 'smbc-card-nl-review',
        title: '三井住友カード（NL）の最大7%還元を使い倒す！コンビニ・飲食店最強の活用術',
        description: '対象のコンビニ・飲食店で驚異のポイント還元を誇る三井住友カード（NL）。ナンバーレスの安全性と、Vポイントの効率的な貯め方を徹底解説。',
        category: 'CONVENIENCE',
        pros: ['対象のコンビニ・飲食店で最大7%還元', 'ナンバーレスで高いセキュリティ', '最短10秒で即時発行'],
        cons: ['通常の還元率は0.5%とそれほど高くない', '最大還元の条件がタッチ決済に限定される'],
        rating: 4.7,
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=YOUR_SMBC_ID',
        content: `
## 三井住友カード（NL）が「現代人の必須カード」である理由

最近、コンビニやマクドナルドで「タッチ決済」をしている人を見かけませんか？その多くがこの**三井住友カード（NL）**を使っています。

### 1. 対象のコンビニ・飲食店で最大7％還元
セブン-イレブン、ローソン、マクドナルド、サイゼリヤなどの対象店舗で、スマホのタッチ決済（Apple Pay / Google Pay）を利用すると、ポイント還元率が最大7％まで跳ね上がります。
        `,
        updatedAt: '2024-03-11'
    },
    {
        slug: 'jcb-card-w-review',
        title: 'JCB CARD Wはなぜ若者に人気？Amazon・スタバでポイント最大10倍の秘密',
        description: '39歳以下限定のJCB CARD W。Amazonやスターバックスでの圧倒的な還元率と、JCBブランドならではの安心感を徹底レビュー。',
        category: 'AMAZON',
        pros: ['Amazonでの還元率が2.0%', 'スターバックスカードへのチャージで10倍', '39歳までなら年会費永年無料'],
        cons: ['40歳以降は申し込めない', 'ポイントの交換ルールが少し複雑'],
        rating: 4.6,
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=YOUR_JCB_ID',
        content: `
## JCB CARD Wが「デジタルネイティブ世代」に選ばれる理由

JCBが満を持して投入した高還元カード、それが**JCB CARD W**です。39歳以下限定という縛りはありますが、その分Webサービス利用時の還元率が極めて高く設定されています。
        `,
        updatedAt: '2024-03-11'
    },
    {
        slug: 'paypay-card-review',
        title: 'PayPayカードを作るべき人は？PayPay経済圏での活用メリットを徹底比較',
        description: 'キャッシュレス決済シェアNo.1のPayPay。その恩恵を最大化するPayPayカードの強みと、ポイントの貯まりやすさを徹底解説。',
        category: 'PAYPAY',
        pros: ['PayPayポイントが直接貯まる', 'Yahoo!ショッピングで5%還元', '年会費が永年無料'],
        cons: ['海外旅行保険が付帯していない'],
        rating: 4.4,
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=YOUR_PAYPAY_ID',
        content: `
## PayPayカードが「キャッシュレス派」に必須な理由

今や日本中の店で使えるPayPay。その真価を発揮させるには、この**PayPayカード**が欠かせません。
        `,
        updatedAt: '2024-03-11'
    }
];
