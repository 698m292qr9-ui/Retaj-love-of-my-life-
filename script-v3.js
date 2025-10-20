document.addEventListener('DOMContentLoaded', () => {
    // ===========================================
    // 1. وظائف التنقل بين الصفحات (تم تبسيطها)
    // ===========================================
    // افترض أن لديك صفحات في الـ HTML كلها تحمل الكلاس .page
    const allPages = document.querySelectorAll('.page');
    const loveLanguagesPage = document.getElementById('love-languages-page'); // تم تصحيح النطاق هنا

    function navigateTo(targetId) {
        allPages.forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(targetId);
        if (targetPage) {
            targetPage.classList.add('active');
            window.scrollTo(0, 0); 

            // تهيئة محتوى الصفحة عند الانتقال إليها
            if (targetId === 'quiz-page') {
                loadQuizQuestion(0); // ابدأ من السؤال الأول (فهرس 0)
            } else if (targetId === 'love-languages-page') {
                initLoveLanguages();
            } else if (targetId === 'home-page') {
                // عند العودة للرئيسية، أعد تشغيل الترحيب
                arGreeting.innerHTML = '';
                enGreeting.innerHTML = '';
                startTypingGreetings();
            }
        }
    }

    // إعداد أزرار القائمة والتنقل
    document.querySelectorAll('.menu-button, .back-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('data-target');
            navigateTo(targetId);
        });
    });

    // ===========================================
    // 2. الترحيب المتحرك
    // ===========================================
    const arGreeting = document.querySelector('.greeting-text');
    const enGreeting = document.querySelector('.greeting-text-en');

    const arMessage = "مرحبًا بكِ يا نجمتي الساطعة";
    const enMessage = "Welcome, My Bright Star";

    function typeText(element, message, delay) {
        return new Promise(resolve => {
            let i = 0;
            function typing() {
                if (i < message.length) {
                    element.innerHTML += message.charAt(i);
                    i++;
                    setTimeout(typing, delay);
                } else {
                    resolve();
                }
            }
            typing();
        });
    }

    async function startTypingGreetings() {
        await typeText(arGreeting, arMessage, 80); 
        await typeText(enGreeting, enMessage, 60);
    }

    startTypingGreetings();

    // ===========================================
    // 3. نظام الأسئلة (Quiz Logic) - المنطق المُعدّل لزر التالي
    // ===========================================
    const quizContent = document.getElementById('quiz-content');
    const feedbackEmoji = document.getElementById('feedback-emoji');

    const quizQuestions = [
        // السؤال 1 (فهرس 0)
        {
            id: 1,
            question: "ما مقدار حُب شادي لأميرته ريتاج؟",
            options: ["كعدد النجوم في السماء", "كعدد قطرات المطر", "كحجم ماء البحر"],
            // تم حذف الإيموجي
            feedback: 'غلط! لأن حُب شادي لأميرته ريتاج ليس له حدود ولا قياس.', 
        },
        // السؤال 2 (فهرس 1)
        {
            id: 2,
            question: "ما هو الشيء الجميل في أميرة شادي ريتاج؟",
            options: ["عيونها", "ابتسامتها", "صوتها", "شعرها", "أسلوبها"],
            // تم حذف الإيموجي وتعديل النص
            feedback: 'غلط! يا فاتنة القلب، لأن الحب لا يختار شيئاً واحداً... كل تفاصيل ريتاج فاتنة وليس لها مثيل.',
        },
        // السؤال 3 (فهرس 2) - إدخال نص
        {
            id: 3,
            question: "ما مقدار حُبكِ لشادي؟",
            inputType: 'text',
        },
        // السؤال 4 (فهرس 3) - الأخير
        {
            id: 4,
            question: "ماذا أستحق منكِ؟",
            options: ["بوسة (فيديو)", "عشر كلمات أحبك (فيديو أو فويس)", "صورة جميلة لكِ وأنتِ مبتسمة", "جميع ما سبق"],
            feedback: 'انتظرها منكِ بفارغ الصبر! أُحِبُكِ ❤️',
        }
    ];

    function showFeedback(message) { // تم إزالة وسيط الإيموجي
        // إزالة أي تغذية راجعة قديمة
        const oldFeedback = quizContent.querySelector('.quiz-feedback');
        if (oldFeedback) oldFeedback.remove();

        const feedbackBox = document.createElement('div');
        feedbackBox.className = 'quiz-feedback';
        feedbackBox.innerHTML = message;
        quizContent.appendChild(feedbackBox);
    }

    function loadQuizQuestion(index) {
        const q = quizQuestions[index];
        if (!q) return; 

        quizContent.innerHTML = ''; 

        const qBox = document.createElement('div');
        qBox.className = 'question-box';
        qBox.innerHTML = `<h4>السؤال ${q.id}: ${q.question}</h4>`;

        if (q.inputType === 'text') {
            // السؤال الثالث (إدخال نص)
            qBox.innerHTML += `
                <input type="text" id="q3-input" placeholder="اكتبي إجابتكِ هنا بصدق..." dir="rtl">
                <button class="option-button" id="q3-submit-btn">إرسال الإجابة</button>
            `;
            quizContent.appendChild(qBox);

            document.getElementById('q3-submit-btn').onclick = () => {
                const answer = document.getElementById('q3-input').value;
                if (answer.trim()) {
                    // الانتقال لصفحة الشكر بعد الإجابة
                    quizContent.innerHTML = `
                        <div class="quiz-feedback" style="background-color:#FFD700; color:#0A0A2A;">
                            <h4 style="color:#0A0A2A;">شُكرًا لكِ يا أجمل أميرة! 💖</h4>
                            <p style="font-size: 1.2em; border-right: 3px solid #0A0A2A; padding-right: 10px;">" ${answer} "</p>
                            <p>أُحِبُكِ، أُحِبُكِ يا أميرتي الجميلة.</p>
                        </div>
                        <div class="quiz-next-question">
                            <button onclick="loadQuizQuestion(3)">التالي → (السؤال الأخير)</button>
                        </div>
                    `;
                }
            };
        } else {
            // الأسئلة ذات الخيارات (1، 2، 4)
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'quiz-options';

            q.options.forEach((optionText) => {
                const btn = document.createElement('button');
                btn.className = 'option-button';
                btn.textContent = optionText;
                // تم تمرير qBox هنا للتحكم في الأزرار
                btn.onclick = () => handleAnswer(q, optionText, qBox, index); 
                optionsDiv.appendChild(btn);
            });

            qBox.appendChild(optionsDiv);
            quizContent.appendChild(qBox);
        }
    }

    function handleAnswer(q, selectedOption, qBox, index) {
        // تعطيل جميع الأزرار بعد أول إجابة
        qBox.querySelectorAll('.option-button').forEach(btn => btn.disabled = true); 

        if (q.id === 1 || q.id === 2) {
            // الأسئلة 1 و 2 (إجابة خاطئة ثابتة)
            showFeedback(`<p>${q.feedback}</p>`);

            const nextBtnContainer = document.createElement('div');
            nextBtnContainer.className = 'quiz-next-question';
            nextBtnContainer.innerHTML = `<button onclick="loadQuizQuestion(${index + 1})">التالي →</button>`;
            quizContent.appendChild(nextBtnContainer);

        } else if (q.id === 4) {
            // السؤال 4 (كل الإجابات صحيحة)
            showFeedback(`<p>${q.feedback}</p>`);

            // الانتقال لصفحة الشكر النهائية
            const nextBtnContainer = document.createElement('div');
            nextBtnContainer.className = 'quiz-next-question';
            nextBtnContainer.innerHTML = `<button onclick="navigateTo('home-page')">العودة للقائمة الرئيسية</button>`;
            quizContent.appendChild(nextBtnContainer);
        }
    }


    // ===========================================
    // 4. نظام أحبك بكل اللغات
    // ===========================================
    const loveDisplay = document.getElementById('language-display');
    const loveLanguages = [
        "أُحِبُك (Arabic)", "I Love You (English)", "Te Amo (Spanish)", 
        "Je t'aime (French)", "Ich liebe dich (German)", "Ti amo (Italian)",
        "我爱你 (Wǒ ài nǐ) (Chinese)", "사랑해 (Saranghae) (Korean)", "愛してる (Aishiteru) (Japanese)"
    ];
    let langIndex = 0;

    function initLoveLanguages() {
        if(loveDisplay) { // تأكد من وجود العنصر
            loveDisplay.textContent = 'اضغطي هنا...';
            langIndex = 0;
        }
    }

    if(loveLanguagesPage) {
        loveLanguagesPage.addEventListener('click', (e) => {
            if (e.target.id === 'language-display' || e.target.closest('.page')) {
                if (langIndex < loveLanguages.length) {
                    loveDisplay.textContent = loveLanguages[langIndex];
                    loveDisplay.style.color = `hsl(${langIndex * 40}, 80%, 70%)`;
                    langIndex++;
                } else {
                    loveDisplay.textContent = 'أُحِبُكِ! (الجميع يجمع على ذلك)';
                    loveDisplay.style.color = 'gold';
                }
            }
        });
    }
    
    // ===========================================
    // 5. تأثير النجوم في الخلفية (Stars Canvas)
    // ===========================================
    // بقية كود الـ Canvas يبقى كما هو...
    const starCanvas = document.getElementById('star-canvas');
    if (starCanvas) {
        const starCtx = starCanvas.getContext('2d');
        
        starCanvas.width = window.innerWidth;
        starCanvas.height = window.innerHeight;

        let stars = [];
        const numStars = 150;

        function Star() {
            this.x = Math.random() * starCanvas.width;
            this.y = Math.random() * starCanvas.height;
            this.radius = Math.random() * 1.5 + 0.5;
            this.alpha = Math.random(); 
            this.velocity = Math.random() * 0.05 + 0.01;
        }

        Star.prototype.draw = function() {
            starCtx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            starCtx.beginPath();
            starCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            starCtx.fill();
        };

        Star.prototype.update = function() {
            this.alpha += this.velocity;
            if (this.alpha > 1 || this.alpha < 0) {
                this.velocity = -this.velocity;
            }
        };

        function initStars() {
            for (let i = 0; i < numStars; i++) {
                stars.push(new Star());
            }
        }

        function animateStars() {
            // استخدم لون الخلفية الداكن بدلاً من المسح الكامل
            starCtx.fillStyle = '#0A0A2A'; 
            starCtx.fillRect(0, 0, starCanvas.width, starCanvas.height);
            
            for (let i = 0; i < stars.length; i++) {
                stars[i].update();
                stars[i].draw();
            }
            requestAnimationFrame(animateStars);
        }
        
        initStars();
        animateStars();

        window.addEventListener('resize', () => {
            starCanvas.width = window.innerWidth;
            starCanvas.height = window.innerHeight;
        });
    }

    // تحميل الصفحة الرئيسية عند البداية
    // إذا كنت تستخدم نظام التنقل الموضح، يجب أن يتم تنفيذ هذا
    // navigateTo('home-page'); 
});
