'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// --- 語言翻譯字典 (Dictionary) ---
const translations = {
  zh: {
    langBtn: '繁 / EN / 日',
    heroTitle: '穿著即降溫，重塑肌膚的舒適極限',
    heroSubtitle: '搭載專利 HydraVolt™ 水冷卻科技，將實驗室等級的溫控體驗，化作您每天的日常。',
    heroBtn: '搶先預約體驗',
    valTitle: '為什麼選擇 Eztia？',
    val1Title: '降溫有感，拒絕悶熱',
    val1Desc: '專利 HydraVolt™ 凝膠技術，經證實能在高強度活動中，吸收體熱並降低肌膚表面溫度達 10°C。',
    val2Title: '長效防護 8 小時',
    val2Desc: '不僅是瞬間涼感。透過獨特的蒸發冷卻機制，為您提供長達 8 小時的持久乾爽防護。',
    val3Title: '加水即用，輕盈無負擔',
    val3Desc: '告別繁重的電池與冷藏設備。只需少許日常用水即可重新啟動涼感，完美融入日常洗滌。',
    prodTitle: '為不同生活情境打造',
    prod1Title: '零著感機能涼感內衣',
    prod1Desc: '無痕貼合設計，將實驗室級的控溫材料穿在最貼近肌膚的地方，全天候乾爽舒適，告別傳統縫線摩擦。',
    prod2Title: '高透氣降溫運動袖套',
    prod2Desc: '專為高強度戶外運動設計，極輕量且具備完美彈性，讓汗水轉化為驅動涼感的動力。',
    prod3Title: '全天候多功能涼感頭巾',
    prod3Desc: '靈活變換造型，保護頭頸免受烈日侵襲，只需浸水即可瞬間啟動極致涼感。',
    formTitle: '搶先體驗未來穿著',
    formSubtitle: '留下您的資訊，獲得最新產品上市通知、專屬折扣與客製化諮詢服務。',
    fName: '姓名或稱呼',
    fCountry: '所在國家 / Country',
    fSelectCountry: '請選擇國家 Select Country',
    fContact: 'Email',
    fProducts: '感興趣的產品 (可複選)',
    fProd1: '機能內衣',
    fProd2: '運動袖套',
    fProd3: '多功能頭巾',
    fMessage: '其他需求或疑問',
    fMessagePlaceholder: '例如：想了解預計上市時間、尺寸建議，或是團購需求...',
    fSubmit: '送出資料，獲取專屬通知',
    fSubmitting: '資料傳送中...',
    fSuccessTitle: '感謝您的填寫！',
    fSuccessDesc: '我們已收到您的資訊，將會盡快將最新消息發送給您。',
    footer: '將實驗室的突破，轉化為您每天的舒適。'
  },
  en: {
    langBtn: 'EN / 繁 / 日',
    heroTitle: 'Cooling you can wear, redefining skin comfort limits.',
    heroSubtitle: 'Powered by patented HydraVolt™ cooling technology, turning lab-grade temperature control into your everyday essential.',
    heroBtn: 'Experience it First',
    valTitle: 'Why Choose Eztia?',
    val1Title: 'Noticeable Cooling, No More Heat',
    val1Desc: 'Proven to absorb body heat and reduce skin surface temperature by up to 10°C during high-intensity activities.',
    val2Title: '8-Hour Long-Lasting Protection',
    val2Desc: 'Unique evaporative cooling mechanism provides up to 8 hours of dry, comfortable protection.',
    val3Title: 'Just Add Water, Zero Burden',
    val3Desc: 'Say goodbye to heavy batteries. Simply add a little water to reactivate the cooling effect effortlessly.',
    prodTitle: 'Designed for Your Lifestyle',
    prod1Title: 'Zero-Feel Cooling Innershirt',
    prod1Desc: 'Seamless design puts lab-grade temperature control right next to your skin for all-day comfort.',
    prod2Title: 'High-Breathability Arm Sleeves',
    prod2Desc: 'Designed for extreme outdoor sports, extremely lightweight with perfect elasticity.',
    prod3Title: 'Multi-functional Cooling Bandana',
    prod3Desc: 'Flexible styling to protect your head and neck from the sun, instantly activated by water.',
    formTitle: 'Experience the Future of Wear',
    formSubtitle: 'Get launch updates and exclusive offers, or inquire about custom orders.',
    fName: 'Name',
    fCountry: 'Country',
    fSelectCountry: 'Select Country',
    fContact: ' Email',
    fProducts: 'Interested Products (Multiple)',
    fProd1: 'Inner Shirt',
    fProd2: 'Arm Sleeves',
    fProd3: 'Bandana',
    fMessage: 'Comments',
    fMessagePlaceholder: 'e.g., Launch dates, size suggestions, or bulk orders...',
    fSubmit: 'Submit',
    fSubmitting: 'Submitting...',
    fSuccessTitle: 'Thank You!',
    fSuccessDesc: "We've received your info and will send you the latest updates soon.",
    footer: 'Turning lab breakthroughs into your everyday comfort.'
  },
  ja: {
    langBtn: '日 / 繁 / EN',
    heroTitle: '着るクーリング。肌の快適さの限界を再定義。',
    heroSubtitle: '特許取得済みのHydraVolt™冷却テクノロジーを搭載。ラボレベルの温度制御を毎日の日常に。',
    heroBtn: '先行体験を予約する',
    valTitle: 'Eztiaが選ばれる理由',
    val1Title: '確かな冷却、もう蒸れない',
    val1Desc: '激しい活動中でも体熱を吸収し、肌の表面温度を最大10℃下げることが実証されています。',
    val2Title: '8時間の長時間保護',
    val2Desc: '独自の気化熱メカニズムにより、最大8時間のドライで快適な保護を提供します。',
    val3Title: '水だけで起動、負担ゼロ',
    val3Desc: '重いバッテリーはもう不要。少量の水を含ませるだけで冷却効果が復活します。',
    prodTitle: 'あらゆる生活シーンにフィット',
    prod1Title: 'ゼロ感覚クーリングインナー',
    prod1Desc: 'シームレス設計で、ラボレベルの温度制御素材を肌に最も近い場所に配置。一日中快適です。',
    prod2Title: '高通気性アームカバー',
    prod2Desc: '高強度の過酷なアウトドアスポーツ向けに設計。超軽量で完璧な伸縮性を備えています。',
    prod3Title: '多機能クーリングバンダナ',
    prod3Desc: '自由なスタイリングで頭や首を日差しから守り、水に浸すだけで瞬時に冷却を開始します。',
    formTitle: '未来の着用感を体験',
    formSubtitle: '最新の発売情報、限定割引、カスタマイズ相談をご希望の方は情報を入力してください。',
    fName: 'お名前',
    fCountry: '国 / Country',
    fSelectCountry: '国を選択',
    fContact: 'メールアドレス', // 改成只留 Email
    fProducts: '興味のある製品 (複数選択可)',
    fProd1: 'インナー',        // 內衣 (Innerwear)
    fProd2: 'アームカバー',      // 袖套 (Arm Cover)
    fProd3: 'バンダナ',         // 頭巾 (Bandana)問',
    fMessage: 'その他のご要望・ご質問',
    fMessagePlaceholder: '例：発売予定時期、サイズのアドバイスなど...',
    fSubmit: '送信して通知を受け取る',
    fSubmitting: '送信中...',
    fSuccessTitle: 'ありがとうございます！',
    fSuccessDesc: '情報を受け取りました。最新情報をお送りします。',
    footer: 'ラボのブレイクスルーを、毎日の快適さに。'
  }
};

type Language = 'zh' | 'en' | 'ja';

export default function EztiaB2CLandingPage() {
  const [lang, setLang] = useState<Language>('en'); // 預設語言為英文
  const t = translations[lang]; // 根據目前的 lang 取得對應的翻譯包

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const selectedProducts = formData.getAll('products').join(', ');
    formData.set('products', selectedProducts);

    // 👇 記得這裡要換回你設定好的 Apps Script URL 👇
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzlre-y-IpoRy9z_9v2fNcoh5xzTuQV17A2F7g3oTJUG2fYFVtThfekLM1NqlPtCcPo/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Network response error');
      }
    } catch (error) {
      console.error('送出失敗:', error);
      alert('發生錯誤，請稍後再試。');
    } finally {
      setIsLoading(false);
    }
  };

  // 切換語言的函式
  const toggleLanguage = () => {
    if (lang === 'en') setLang('ja');
    else if (lang === 'ja') setLang('zh');
    else setLang('en');
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 leading-relaxed relative">
      
      {/* 語言切換按鈕 (固定在右上角) */}
      <div className="absolute top-6 right-6 z-50">
        <button 
          onClick={toggleLanguage}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-sm"
        >
          🌐 {t.langBtn}
        </button>
      </div>

      {/* 1. Hero Section */}
      <header className="relative bg-[#0d1b2a] text-white py-28 px-6 md:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center bg-neutral-800"></div>
        <div className="relative z-10 max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-md">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-2xl font-light mb-10 opacity-90 max-w-2xl mx-auto">
            {t.heroSubtitle}
          </p>
          <a href="#form-section" className="inline-block bg-white text-[#0d1b2a] font-bold px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-300">
            {t.heroBtn}
          </a>
        </div>
      </header>

      {/* 2. Value Proposition */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-[#1b263b]">{t.valTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6">
              <div className="w-20 h-20 mx-auto bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl font-black mb-6 shadow-sm">-10°C</div>
              <h3 className="text-xl font-bold mb-3 text-neutral-800">{t.val1Title}</h3>
              <p className="text-neutral-500 leading-relaxed">{t.val1Desc}</p>
            </div>
            <div className="p-6">
              <div className="w-20 h-20 mx-auto bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl font-black mb-6 shadow-sm">8 hr</div>
              <h3 className="text-xl font-bold mb-3 text-neutral-800">{t.val2Title}</h3>
              <p className="text-neutral-500 leading-relaxed">{t.val2Desc}</p>
            </div>
            <div className="p-6">
              <div className="w-20 h-20 mx-auto bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl font-black mb-6 shadow-sm">H₂O</div>
              <h3 className="text-xl font-bold mb-3 text-neutral-800">{t.val3Title}</h3>
              <p className="text-neutral-500 leading-relaxed">{t.val3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products Section */}
      <section id="products" className="py-24 px-6 md:px-12 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#1b263b]">{t.prodTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-72 bg-neutral-200 flex items-center justify-center relative overflow-hidden">
                <Image src="/images/Shirt.JPG" alt='' fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform duration-500"/>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">{t.prod1Title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{t.prod1Desc}</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-72 bg-neutral-200 flex items-center justify-center relative overflow-hidden">
                <Image src="/images/Sleeves.png" alt='' fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform duration-500"/>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">{t.prod2Title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{t.prod2Desc}</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-72 bg-neutral-200 flex items-center justify-center relative overflow-hidden">
                <Image src="/images/Bandana.png" alt='' fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform duration-500"/>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">{t.prod3Title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{t.prod3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Form Section */}
      <section id="form-section" className="py-24 px-6 md:px-12 bg-[#0d1b2a] text-white">
        <div className="max-w-3xl mx-auto bg-white text-neutral-900 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-10 md:p-14">
            <h2 className="text-3xl font-bold mb-4 text-center text-[#1b263b]">{t.formTitle}</h2>
            <p className="text-center text-neutral-500 mb-10">{t.formSubtitle}</p>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-2">{t.fSuccessTitle}</h3>
                <p>{t.fSuccessDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-neutral-700">{t.fName}</label>
                    <input type="text" name="customerName" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 transition" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-neutral-700">{t.fCountry}</label>
                    <input 
                      type="text" 
                      name="country" 
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 transition" 
                      placeholder={lang === 'zh' ? '請輸入國家 / Enter Country' : lang === 'en' ? 'Enter your country' : '国を入力してください'}
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-neutral-700">{t.fContact}</label>
                  <input type="text" name="contactInfo" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 transition" required />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-neutral-700">{t.fProducts}</label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer bg-neutral-50 px-5 py-3 rounded-xl border border-neutral-200 hover:border-blue-400 transition">
                      <input type="checkbox" name="products" value="機能內衣" className="w-4 h-4 text-blue-600 rounded" />
                      <span className="font-medium text-neutral-700">{t.fProd1}</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer bg-neutral-50 px-5 py-3 rounded-xl border border-neutral-200 hover:border-blue-400 transition">
                      <input type="checkbox" name="products" value="運動袖套" className="w-4 h-4 text-blue-600 rounded" />
                      <span className="font-medium text-neutral-700">{t.fProd2}</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer bg-neutral-50 px-5 py-3 rounded-xl border border-neutral-200 hover:border-blue-400 transition">
                      <input type="checkbox" name="products" value="多功能頭巾" className="w-4 h-4 text-blue-600 rounded" />
                      <span className="font-medium text-neutral-700">{t.fProd3}</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-neutral-700">{t.fMessage}</label>
                  <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 transition resize-none" placeholder={t.fMessagePlaceholder}></textarea>
                </div>

                <button type="submit" disabled={isLoading} className={`w-full bg-[#1b263b] hover:bg-[#0d1b2a] text-white font-bold py-4 rounded-xl shadow-lg transition-all text-lg ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {isLoading ? t.fSubmitting : t.fSubmit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-neutral-900 text-neutral-400 text-center py-10 text-sm">
        <p className="font-semibold text-neutral-300 mb-2">Eztia Materials</p>
        <p className="mb-4">{t.footer}</p>
        <p className="opacity-60">© 2026 Eztia Materials. All rights reserved.</p>
      </footer>
    </div>
  );
}