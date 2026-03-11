export type ArticleCategory = 'REWARD' | 'STATUS' | 'TRAVEL' | 'CONVENIENCE' | 'AMAZON' | 'PAYPAY' | 'GENERAL' | 'GOLD' | 'SPECIFIC';

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
    image: string;
    updatedAt: string;
}

export const articles: Article[] = [
    {
        slug: 'rakuten-card-review',
        title: '楽天カードのメリット・デメリットを徹底解説！楽天経済圏の必須カード',
        description: '楽天市場でポイント常時3%還元を誇る楽天カード。SPUの仕組みやポイントの使い勝手など、初心者から上級者まで満足できる理由を解説。',
        category: 'REWARD',
        pros: ['楽天市場でポイント最大3%以上', '貯まったポイントが街のお店で使える', '年会費が永年無料で作りやすい'],
        cons: ['期間限定ポイントの有効期限に注意が必要', '広告メールが多いと感じる場合がある'],
        rating: 4.5,
        affiliateUrl: '#',
        image: '/images/cards/rakuten.png',
        content: `
## 楽天カードが「ポイント還元最強」と言われる理由

結論から言うと、**「楽天市場での買い物が多い」「ポイントの使い道に困りたくない」**方にとって、これ以上のカードはありません。

### 1. 楽天市場での還元率が圧倒的
通常の還元率は1.0%ですが、楽天市場での利用なら常時3%以上に跳ね上がります。さらに「お買い物マラソン」などのイベントを組み合わせれば、10%以上の還元も珍しくありません。

### 2. 楽天ポイントの圧倒的な使いやすさ
貯まったポイントは、マクドナルド、ファミリーマートなどの街のお店や、楽天ペイを通じてどこでも使えます。ポイントの出口が広いことが、実質的な価値をさらに高めています。
        `,
        updatedAt: '2024-03-12'
    },
    {
        slug: 'rakuten-premium-card-review',
        title: '楽天プレミアムカードのメリット・デメリットをエンジニア視点で徹底解説',
        description: '楽天プレミアムカードは本当に最強の還元率なのか？プライオリティ・パスや楽天市場でのポイント倍率など、実利を重視するエンジニア向けの徹底レビュー。',
        category: 'TRAVEL',
        pros: ['楽天市場でポイント最大5倍', 'プライオリティ・パスが無料発行可能', '海外旅行保険が手厚い'],
        cons: ['年会費が11,000円かかる', '2023年12月のポイント改定で一部還元率ダウン'],
        rating: 4.5,
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=YOUR_RAKUTEN_ID',
        image: '/images/cards/rakuten.png',
        content: `
## 楽天プレミアムカードがエンジニアに選ばれる理由

結論から言うと、**「楽天市場での買い物が多い」「海外カンファレンスや旅行に行く」**エンジニアにとって、これ以上のカードはありません。

### 1. 楽天市場での還元率が圧倒的
楽天プレミアムカード会員は、楽天市場でのポイント還元率が通常のカードよりも優遇されます。PCパーツ、技術書、ガジェット類を楽天で購入する機会が多い場合、年会費（11,000円）の元はすぐに取れます。

### 2. プライオリティ・パスが無料で発行可能
世界1,300ヶ所以上の空港ラウンジが使い放題になる「プライオリティ・パス（プレステージ会員相当）」を無料で発行できます。通常であれば469ドルの年会費がかかるサービスが、カードの年会費だけで手に入るのは驚異的です。
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
        image: '/images/cards/epos.png',
        content: `
## エポスカードが「最強のサブカード」と呼ばれる理由

エンジニアの多くがメインカードの他に、エポスカードを財布に忍ばせています。その最大の理由は**「維持コストゼロで得られる安心感」**にあります。

### 1. 年会費はずっと無料
発行から維持まで、一切の費用がかかりません。使わなくても損をしない、まさに「持っておくだけ」で良いカードです。

### 2. 優待の幅が異常に広い
全国1万店以上の飲食店やレジャー施設、カラオケ、美容院などで割引優待が受けられます。これだけで年会費以上の価値は十分あります。
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
        image: '/images/cards/smbc.png',
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
        title: 'JCB CARD Wはなぜ若者に人気？Amazon・スタバでポイント最大10.5倍の秘密',
        description: '39歳以下限定のJCB CARD W。Amazonやスターバックスでの圧倒的な還元率と、JCBブランドならではの安心感を徹底レビュー。',
        category: 'AMAZON',
        pros: ['Amazonでの還元率が2.0%', 'スターバックスのモバイルオーダーで最大10.5%', '39歳までなら年会費永年無料'],
        cons: ['40歳以降は申し込めない', 'ポイントの交換ルールが少し複雑'],
        rating: 4.6,
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=YOUR_JCB_ID',
        image: '/images/cards/jcb.png',
        content: `
## JCB CARD Wが「デジタルネイティブ世代」に選ばれる理由

JCBが満を持して投入した高還元カード、それが**JCB CARD W**です。39歳以下限定という縛りはありますが、その分Webサービス利用時の還元率が極めて高く設定されています。
        `,
        updatedAt: '2024-03-12'
    },
    {
        slug: 'paypay-card-review',
        title: 'PayPayカードを作るべき人は？PayPay経済圏での活用メリットを徹底比較',
        description: 'キャッシュレス決済シェアNo.1のPayPay。その恩恵を最大化するPayPayカードの強みと、ポイントの貯まりやすさを徹底解説。',
        category: 'PAYPAY',
        pros: ['PayPayポイントが直接貯まる', 'Yahoo!ショッピングで最大5%還元', '年会費が永年無料'],
        cons: ['海外旅行保険が付帯していない'],
        rating: 4.4,
        affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=YOUR_PAYPAY_ID',
        image: '/images/cards/paypay.png',
        content: `
## PayPayカードが「キャッシュレス派」に必須な理由

今や日本中の店で使えるPayPay。その真価を発揮させるには、この**PayPayカード**が欠かせません。
        `,
        updatedAt: '2024-03-11'
    },
    {
        slug: 'recruit-card-review',
        title: 'リクルートカードはどこでも1.2%還元！メインカードに最適な理由',
        description: '基本還元率1.2%という驚異のスペックを誇るリクルートカード。場所を選ばず、固定費の支払いでもポイントを最大限に貯める方法を解説。',
        category: 'GENERAL',
        pros: ['基本還元率が1.2%と業界最高水準', '公共料金の支払いでも還元率が下がらない', '貯まったポイントの交換先が豊富'],
        cons: ['独自の電子マネーチャージには上限がある'],
        rating: 4.3,
        affiliateUrl: '#',
        image: '/images/cards/recruit.png',
        content: `
## リクルートカードが「メインカード1枚派」に支持される理由

「カードの使い分けが面倒」「どこでも安定してポイントを貯めたい」という方に最もおすすめなのが**リクルートカード**です。

### 1. どこでも1.2%還元の破壊力
多くのカードが0.5%〜1.0%の間で推移する中、リクルートカードは標準で1.2%還元です。月10万円使う場合、年間で14,400ポイントが貯まります。
        `,
        updatedAt: '2024-03-12'
    },
    {
        slug: 'smbc-gold-nl-review',
        title: '三井住友カード ゴールド（NL）は100万円修行で最強のコスパに？',
        description: '年間100万円の利用で年会費が永年無料になる「100万円修行」。達成後のメリットと、ゴールドカードならではの特典を徹底検証。',
        category: 'GOLD',
        pros: ['100万円利用で年会費が永年無料', '毎年継続ボーナスとして1万ポイント付与', '空港ラウンジなどの特典も充実'],
        cons: ['年間利用額が100万円に満たない場合は年会費がかかる'],
        rating: 4.9,
        affiliateUrl: '#',
        image: '/images/cards/smbc_gold.png',
        content: `
## 三井住友カード ゴールド（NL）の「100万円修行」とは？

このカードの最大の魅力は、一度でも年間100万円以上を利用すれば、**翌年以降の年会費が半永久的に無料**になる点にあります。
        `,
        updatedAt: '2024-03-12'
    },
    {
        slug: 'mufg-card-review',
        title: '三菱ＵＦＪカードの最大20%還元は本当か？特定店舗での活用術',
        description: 'セブン-イレブンやローソン、松屋などで驚異の還元率を誇る三菱ＵＦＪカード。条件達成の方法と、賢い使い分けを解説。',
        category: 'SPECIFIC',
        pros: ['特定店舗で最大20%還元', '年1回の利用で年会費無料', '銀行系カードならではの安心感'],
        cons: ['基本還元率は0.5%と平均的', '最大還元の条件がやや複雑'],
        rating: 4.2,
        affiliateUrl: '#',
        image: '/images/cards/mufg.png',
        content: `
## 三菱ＵＦＪカードが「サブの最強候補」と言われる理由

セブン-イレブン、ローソン、松屋、ピザハットオンラインなどの対象店舗を頻繁に利用するなら、このカードを検討しない手はありません。
        `,
        updatedAt: '2024-03-12'
    }
];
