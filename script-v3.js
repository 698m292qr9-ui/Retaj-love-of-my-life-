‏/* Custom Arabic Font - نستخدم خط "Cairo" الذي يعطي شكلاً مشابهاً للموجود في الصورة */
‏@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');

‏:root {
‏    --dark-bg: #1a0033; /* خلفية أرجوانية داكنة جداً */
‏    --star-color: #ffffff; /* لون النجوم أبيض فاتح */
‏    --main-text-color: #ffffff; /* لون النص الرئيسي أبيض */
‏    --highlight-text-color: #f1c40f; /* لون ذهبي/أصفر للعناوين المميزة */
‏    --button-bg: rgba(70, 0, 100, 0.7); /* خلفية زر أرجوانية شفافة */
‏    --button-border: #f1c40f; /* حدود الزر باللون الذهبي */
‏    --button-hover-bg: rgba(100, 0, 150, 0.8); /* خلفية زر عند التحويم */
‏    --container-bg: rgba(0, 0, 0, 0.3); /* خلفية حاوية شفافة أكثر */
‏    --font-family: 'Cairo', sans-serif;
‏    --base-font-size: 1.2rem; /* خط أساسي أكبر قليلاً */
}

/* التنسيقات العامة */
‏body {
‏    font-family: var(--font-family);
‏    background-color: var(--dark-bg);
‏    color: var(--main-text-color);
‏    margin: 0;
‏    padding: 0;
‏    direction: rtl;
‏    text-align: right;
‏    font-size: var(--base-font-size);
‏    line-height: 1.6;
‏    min-height: 100vh;
‏    display: flex; 
‏    flex-direction: column;
‏    align-items: center;
‏    justify-content: center;
‏    transition: background-color 0.5s ease;
}

/* خلفية النجوم (أكثر وضوحاً كما في الصورة) */
‏.star-background {
‏    position: fixed;
‏    top: 0;
‏    left: 0;
‏    width: 100%;
‏    height: 100%;
‏    background-image: 
‏        radial-gradient(circle at 10% 10%, var(--star-color) 1px, transparent 1.5px),
‏        radial-gradient(circle at 90% 90%, var(--star-color) 1.5px, transparent 2.5px),
‏        radial-gradient(circle at 50% 30%, var(--star-color) 0.8px, transparent 2px),
‏        radial-gradient(circle at 70% 70%, var(--star-color) 1.2px, transparent 2.2px),
‏        radial-gradient(circle at 30% 60%, var(--star-color) 1.1px, transparent 2.1px),
‏        var(--dark-bg);
‏    background-size: 100px 100px, 120px 120px, 80px 80px, 110px 110px, 90px 90px, cover; /* أحجام مختلفة للنجوم */
‏    background-position: 0 0, 60px 60px, 30px 30px, 90px 90px, 45px 45px; /* مواقع مختلفة للنجوم */
‏    z-index: -1;
}

‏.container {
‏    width: 90%;
‏    max-width: 600px; /* لتقريب الحجم من الصورة */
‏    margin: 20px auto;
‏    padding: 30px;
‏    background-color: var(--container-bg); /* خلفية شفافة للحاوية */
‏    border-radius: 15px; /* حواف دائرية */
‏    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); /* ظل خفيف */
‏    text-align: center; /* توسيط المحتوى داخل الحاوية */
}

‏h1, h2, h3 {
‏    color: var(--main-text-color); /* العناوين الرئيسية باللون الأبيض */
‏    text-align: center;
‏    margin-bottom: 20px;
‏    font-weight: bold; /* خط سميك */
}

‏h1 {
‏    font-size: 2.5em; /* حجم كبير للعنوان الرئيسي */
‏    color: var(--highlight-text-color); /* لون ذهبي للعنوان الرئيسي */
‏    margin-bottom: 30px;
}

/* الأزرار / الخيارات (تعديل جذري لتطابق الصورة) */
‏.option-button, .button {
‏    display: block;
‏    width: 100%;
‏    padding: 20px 25px; /* حجم أكبر للزر */
‏    margin: 20px auto; /* توسيط وزيادة المسافة */
‏    border: 3px solid var(--button-border); /* حدود ذهبية سميكة */
‏    background-color: var(--button-bg); 
‏    color: var(--main-text-color);
‏    font-size: 1.5em; /* خط أكبر داخل الزر */
‏    cursor: pointer;
‏    border-radius: 15px; /* حواف دائرية واضحة */
‏    transition: background-color 0.3s, border-color 0.3s, color 0.3s;
‏    text-align: center;
‏    font-weight: bold;
‏    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* ظل للزر */
}

‏.option-button:hover, .button:hover {
‏    background-color: var(--button-hover-bg);
‏    border-color: var(--highlight-text-color);
‏    color: var(--highlight-text-color);
}

/* النصوص الثانوية داخل الأزرار */
‏.button-subtitle {
‏    display: block;
‏    font-size: 0.8em; /* خط أصغر للترجمة */
‏    opacity: 0.7;
‏    margin-top: 5px;
}

/* نماذج الإدخال - تبقى كما هي تقريباً مع تحديث الألوان */
‏input[type="text"], input[type="password"], textarea {
‏    width: 80%; /* عرض أقل ليتناسب مع التصميم */
‏    padding: 15px;
‏    margin: 15px auto;
‏    border: 1px solid var(--button-border); /* حدود ذهبية */
‏    background-color: rgba(255, 255, 255, 0.1); /* خلفية شفافة فاتحة */
‏    color: var(--main-text-color);
‏    border-radius: 10px;
‏    box-sizing: border-box;
‏    text-align: center; /* توسيط النص المدخل */
‏    font-size: var(--base-font-size);
‏    display: block; /* لجعل margin auto يعمل */
}

/* رسائل الخطأ (تعديل بسيط في الخلفية واللون) */
‏.feedback-box {
‏    text-align: center;
‏    margin-top: 30px;
‏    padding: 20px;
‏    background-color: rgba(192, 57, 43, 0.7); /* لون أحمر أغمق قليلاً وشفافية */
‏    border-radius: 10px;
‏    display: none; 
‏    animation: fadn 0.5s ease-out;
‏    border: 2px solid var(--highlight-text-color); /* حدود ذهبية */
}

‏.feedback-box p {
‏    color: var(--main-text-color); /* النص باللون الأبيض */
‏    font-size: var(--base-font-size);
}

‏@keyframes fadeIn {
‏    from { opacity: 0; transform: translateY(20px); }
‏    to { opacity: 1; transform: translateY(0); }
}

/* تنسيق قائمة التنقل (الرئيسية) - تم دمجها مع الأزرار العامة */
‏.main-menu a {
‏    background-color: var(--button-bg);
‏    border: 3px solid var(--button-border);
‏    color: var(--main-text-color);
‏    margin: 20px auto;
‏    font-size: 1.5em;
‏    padding: 20px 25px;
}
‏.main-menu a:hover {
‏    background-color: var(--button-hover-bg);
‏    border-color: var(--highlight-text-color);
‏    color: var(--highlight-text-color);
}


/* تنسيق قسم وقت اللقاء (المعدل: حذف رمز قطرة المطر) */
‏.meeting-time {
‏    text-align: center;
‏    margin-top: 50px;
‏    padding-top: 30px;
‏    border-top: none; /* إزالة الخط الفاصل */
}

‏.meeting-e h2 {
‏    color: var(--highlight-text-color); /* عنوان ابيض */
‏    font-size: 2em;
‏    margin-bottom: 10px;
}

‏.meeting-time p {
‏    font-size: 1.1em;
‏    color: rgba(255, 255, 255, 0.8);
‏    margin-bottom: 15px;
}

‏.date-box {
‏    font-size: 2.8em; /* حجم متوسط للتاريخ */
‏    font-weight: bold;
‏    color: var(--highlight-text-color); /* لون ازرق غامق */
‏    position: relative;
‏    display: inline-block;
‏    padding: 15px 30px;
‏    border: 4px solid var(--highlight-text-color); /**/
‏    border-radius: 15px;
‏    box-shadow: 0 0 25px rgba(241, 196, 15, 0.5); /* */
‏    background-color: rgba(0, 0, 0, 0.4); /* خلفية شفافة */
‏    letter-spacing: 2px; /* تباعد الحروف */
}

/* تنسيق صفحة 'أحبك' بلغات مختلفة */
‏.love-container {
‏    text-align: center;
‏    cursor: pointer;
‏    padding: 50px;
‏    background-image: linear-gradient(to bottom right, #4a0072, #2c003e); /* خلفية أرجوانية متدرجة */
‏    : 3px solid var(--highlight-text-color);
}

‏.love-message {
‏    font-size: 3.5em; /* حجم وسط */
‏    min-height: 120px;
‏    display: flex;
‏    align-items: center;
‏    justify-content: center;
‏    transition: color 0.3s ease, transform 0.3s;
‏    color: var(--highlight-text-color); /* لون ازرق غامق */
‏    margin-top: 50px;
‏    font-: bold;
‏    text-shadow: 0 0 15px rgba(241, 196, 15, 0.8); /**/
}

‏.love-message:hover {
‏    transform: scale(1.05);
}

/* تنسيق الصورة النهائية */
‏.final-image-container {
‏    text-align: center;
‏    margin-top: 40px;
}

‏.final-image {
‏    max-width: 100%;
‏    height: auto;
‏    border: 5px solid var(--highlight-text-color); /* حدود زرقاء*/
‏    border-radius: 15px;
‏    box-shadow: 0 0 25px var(--highlight-text-color);
}
