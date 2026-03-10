import Link from "next/link";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black font-sans">
            {/* Nav */}
            <header className="fixed top-0 left-0 right-0 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 z-50">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tighter flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-[10px] text-white">C</div>
                        Credit Optimizer
                    </Link>
                    <Link href="/" className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2">
                        <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        トップへ戻る
                    </Link>
                </div>
            </header>

            <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-12">プライバシーポリシー・免責事項</h1>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-sm md:text-base text-slate-700 dark:text-slate-300">
                    <section className="space-y-4">
                        <h2 className="text-xl font-black text-slate-900 dark:text-white">1. 個人情報の収集と利用目的</h2>
                        <p>
                            当サイトでは、お問い合わせの際や、特定の機能を利用する際に、お名前やメールアドレス等の個人情報をご登録いただく場合がございます。これらの個人情報は、質問に対する回答や必要な情報を電子メールなどでご連絡する場合に利用するものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-black text-slate-900 dark:text-white">2. 広告の配信について</h2>
                        <p>
                            当サイトは、アフィリエイトプログラム（A8.net、楽天アフィリエイト等）に参加しています。当サイト内のリンクからサービスを申し込まれた場合、対価として報酬が発生することがあります。
                        </p>
                        <p>
                            これらのプログラムにおいて、第三者がコンテンツおよび宣伝を提供し、ユーザーから直接情報を収集し、ユーザーのブラウザにクッキー（Cookie）を設定したり認識したりする場合があります。クッキーはユーザーのプライバシーを侵すものではなく、またコンピューターへ悪影響を及ぼすことはありません。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-black text-slate-900 dark:text-white">3. 免責事項</h2>
                        <p>
                            当サイトの診断結果および掲載されている情報は、可能な限り正確を期して提供されていますが、その正確性や安全性を保証するものではありません。各クレジットカードの還元率、キャンペーン内容、規約などは随時変更されるため、最終的な判断、お申し込みは必ず各公式サイトの情報を確認した上で行ってください。
                        </p>
                        <p>
                            当サイトを利用したことによって生じたいかなる損害・損失についても、運営者は一切の責任を負いかねますのでご了承ください。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-black text-slate-900 dark:text-white">4. プライバシーポリシーの変更について</h2>
                        <p>
                            当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
                        </p>
                    </section>
                </div>
            </main>

            <footer className="w-full py-12 px-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <p>© {new Date().getFullYear()} Credit Optimizer Diagnosis</p>
            </footer>
        </div>
    );
}
