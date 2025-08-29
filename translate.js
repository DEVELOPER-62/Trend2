const translations = {
  id: {welcome:"Selamat datang di Trend!", tagline:"Solusi website modern, cepat, dan interaktif.",
       about_text:"Trend hadir untuk membantu Anda memiliki website dengan mudah.",
       services_text:"Kami menyediakan layanan pembuatan website profesional.",
       portfolio_text:"Berikut adalah hasil karya kami.",
       contact_title:"Hubungi Kami", name:"Nama:", email:"Email:", message:"Pesan:", send:"Kirim"},
  en: {welcome:"Welcome to Trend!", tagline:"Modern, fast, and interactive website solutions.",
       about_text:"Trend helps you build websites easily.", services_text:"We provide professional website services.",
       portfolio_text:"Here are our works.", contact_title:"Contact Us", name:"Name:", email:"Email:", message:"Message:", send:"Send"},
  "en-US": {welcome:"Welcome to Trend!", tagline:"Easy, fast, and interactive website solutions.",
       about_text:"Trend makes website building simple.", services_text:"We offer professional web development.",
       portfolio_text:"Take a look at our projects.", contact_title:"Get in Touch", name:"Name:", email:"Email:", message:"Message:", send:"Send"},
  hi: {welcome:"ट्रेंड में आपका स्वागत है!", tagline:"आधुनिक, तेज़ और इंटरैक्टिव वेबसाइट समाधान।",
       about_text:"Trend आपकी वेबसाइट आसानी से बनाने में मदद करता है।", services_text:"हम पेशेवर वेबसाइट सेवाएँ प्रदान करते हैं।",
       portfolio_text:"यहाँ हमारे कार्य हैं।", contact_title:"हमसे संपर्क करें", name:"नाम:", email:"ईमेल:", message:"संदेश:", send:"भेजें"},
  zh: {welcome:"欢迎来到Trend！", tagline:"现代、快速、互动的网站解决方案。",
       about_text:"Trend 帮助您轻松建立网站。", services_text:"我们提供专业的网站服务。",
       portfolio_text:"这是我们的作品。", contact_title:"联系我们", name:"姓名：", email:"电子邮件：", message:"留言：", send:"发送"},
  ru: {welcome:"Добро пожаловать в Trend!", tagline:"Современные, быстрые и интерактивные веб-решения.",
       about_text:"Trend помогает легко создать сайт.", services_text:"Мы предоставляем профессиональные услуги.",
       portfolio_text:"Наши работы.", contact_title:"Свяжитесь с нами", name:"Имя:", email:"Эл. почта:", message:"Сообщение:", send:"Отправить"}
};

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const langSwitcher = document.getElementById("langSwitcher");
  langSwitcher.addEventListener("change", e => {
    applyTranslations(e.target.value);
  });
});
