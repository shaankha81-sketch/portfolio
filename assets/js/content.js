/* All site text in English, Hindi and Urdu.
   Static page text: English lives in index.html; `ui` below holds the Hindi and Urdu for each data-i18n key.
   Dynamic text (tabs, quiz, lab): every entry carries en, hi and ur. Edit content here. */
window.SITE = {

  /* ------------------------------------------------------------------ interface strings */
  ui: {
    'meta.title': { en: 'Shaan Khan | Agentic & Robotic AI Trainer · C++ Programmer', hi: 'शान ख़ान | एजेंटिक और रोबोटिक AI ट्रेनर · C++ प्रोग्रामर', ur: 'شان خان | ایجنٹک اور روبوٹک اے آئی ٹرینر · C++ پروگرامر' },
    'skip': { hi: 'सामग्री पर जाएँ', ur: 'مواد پر جائیں' },
    'nav.about': { hi: 'परिचय', ur: 'تعارف' },
    'nav.cpp': { hi: 'C++', ur: 'C++' },
    'nav.projects': { hi: 'प्रोजेक्ट', ur: 'پروجیکٹس' },
    'nav.skills': { hi: 'कौशल', ur: 'مہارتیں' },
    'nav.lab': { hi: 'लैब', ur: 'لیب' },
    'nav.try': { hi: 'आज़माएँ', ur: 'آزمائیں' },
    'nav.education': { hi: 'शिक्षा', ur: 'تعلیم' },
    'nav.contact': { hi: 'संपर्क', ur: 'رابطہ' },

    'hero.place': { hi: 'भरतपुर, राजस्थान', ur: 'بھرت پور، راجستھان' },
    'hero.role': { hi: 'एजेंटिक और रोबोटिक AI ट्रेनर', ur: 'ایجنٹک اور روبوٹک اے آئی ٹرینر' },
    'hero.summary': {
      hi: 'मैं एक एजेंटिक और रोबोटिक AI ट्रेनर हूँ और मेरी कोडिंग भाषा C++ है, उसके बाद SQL। मैं C++ में समस्याएँ हल करता हूँ और डेटा स्ट्रक्चर का अभ्यास HackerRank और LeetCode पर करता हूँ; मेरे पास तीन HackerRank SQL प्रमाणपत्र हैं (Basic, Intermediate, Advanced); प्रोजेक्ट्स के लिए Python और JavaScript इस्तेमाल करता हूँ। मैं जाँचता हूँ कि AI प्रणालियाँ कैसे उत्तर देती हैं, तर्क करती हैं और योजना बनाती हैं, ठीक वह चरण ढूँढता हूँ जहाँ वे ग़लती करती हैं, और हर रेटिंग का कारण लिखता हूँ। साथ ही मैं महाराजा सूरजमल बृज विश्वविद्यालय, भरतपुर में B.A. अंतिम वर्ष का छात्र हूँ।',
      ur: 'میں ایک ایجنٹک اور روبوٹک اے آئی ٹرینر ہوں اور میری کوڈنگ زبان C++ ہے، اس کے بعد SQL۔ میں C++ میں مسائل حل کرتا ہوں اور ڈیٹا اسٹرکچر کی مشق HackerRank اور LeetCode پر کرتا ہوں؛ میرے پاس HackerRank کے تین SQL سرٹیفکیٹ ہیں (Basic، Intermediate، Advanced)؛ پروجیکٹس کے لیے Python اور JavaScript استعمال کرتا ہوں۔ میں جانچتا ہوں کہ اے آئی نظام کیسے جواب دیتے ہیں، استدلال کرتے ہیں اور منصوبہ بناتے ہیں، ٹھیک وہ مرحلہ ڈھونڈتا ہوں جہاں وہ غلطی کرتے ہیں، اور ہر ریٹنگ کی وجہ لکھتا ہوں۔ ساتھ ہی میں مہاراجہ سورج مل برج یونیورسٹی، بھرت پور میں بی اے آخری سال کا طالب علم ہوں۔'
    },
    'hero.resume': { hi: 'रिज़्यूमे डाउनलोड करें', ur: 'ریزیومے ڈاؤن لوڈ کریں' },
    'hero.contact': { hi: 'संपर्क करें', ur: 'رابطہ کریں' },
    'hero.lab': { hi: 'लैब खोलें', ur: 'لیب کھولیں' },

    'card.title': { hi: 'फ़ील्ड कार्ड', ur: 'فیلڈ کارڈ' },
    'card.role': { hi: 'भूमिका', ur: 'کردار' },
    'card.roleV': { hi: 'एजेंटिक और रोबोटिक AI ट्रेनर', ur: 'ایجنٹک اور روبوٹک اے آئی ٹرینر' },
    'card.code': { hi: 'कोडिंग', ur: 'کوڈنگ' },
    'card.codeV': { hi: 'C++ (मुख्य) · SQL · Python · JavaScript · Java', ur: 'C++ (بنیادی) · SQL · Python · JavaScript · Java' },
    'card.study': { hi: 'अध्ययन', ur: 'تعلیم' },
    'card.studyV': { hi: 'B.A., अंतिम वर्ष', ur: 'بی اے، آخری سال' },
    'card.uni': { hi: 'विश्वविद्यालय', ur: 'یونیورسٹی' },
    'card.uniV': { hi: 'महाराजा सूरजमल बृज विश्वविद्यालय, भरतपुर', ur: 'مہاراجہ سورج مل برج یونیورسٹی، بھرت پور' },
    'card.lang': { hi: 'बोलता हूँ', ur: 'بولتا ہوں' },
    'card.time': { hi: 'स्थानीय समय', ur: 'مقامی وقت' },

    'stat.langs': { hi: 'कोडिंग भाषाएँ, C++ पहली', ur: 'کوڈنگ زبانیں، C++ پہلی' },
    'stat.certs': { hi: 'HackerRank SQL प्रमाणपत्र', ur: 'HackerRank SQL سرٹیفکیٹ' },
    'stat.projects': { hi: 'GitHub पर सार्वजनिक प्रोजेक्ट', ur: 'GitHub پر عوامی پروجیکٹس' },
    'stat.human': { hi: 'भाषाएँ जिनमें मैं काम करता हूँ', ur: 'وہ زبانیں جن میں میں کام کرتا ہوں' },

    'about.kicker': { hi: 'प्रोफ़ाइल', ur: 'پروفائل' },
    'about.title': { hi: 'मेरे बारे में', ur: 'میرے بارے میں' },
    'about.lead': {
      hi: 'मैं एजेंटिक और रोबोटिक AI ट्रेनर के रूप में काम करता हूँ और C++ मेरी कोडिंग भाषा है: मैं जाँचता हूँ कि AI प्रणालियाँ कैसे उत्तर देती हैं, तर्क करती हैं और योजना बनाती हैं, और ठीक-ठीक बताता हूँ कि वे कहाँ ग़लती करती हैं।',
      ur: 'میں ایجنٹک اور روبوٹک اے آئی ٹرینر کے طور پر کام کرتا ہوں اور C++ میری کوڈنگ زبان ہے: میں جانچتا ہوں کہ اے آئی نظام کیسے جواب دیتے ہیں، استدلال کرتے ہیں اور منصوبہ بناتے ہیں، اور ٹھیک ٹھیک بتاتا ہوں کہ وہ کہاں غلطی کرتے ہیں۔'
    },
    'about.p1': {
      hi: 'C++ मेरी मुख्य प्रोग्रामिंग भाषा है, और SQL मेरी दूसरी मज़बूत भाषा, जिसके HackerRank पर मेरे पास तीन प्रमाणपत्र हैं (Basic, Intermediate, Advanced)। मैं HackerRank और LeetCode पर समस्या-समाधान और डेटा स्ट्रक्चर का अभ्यास करता हूँ, और प्रोजेक्ट्स के लिए Python व JavaScript इस्तेमाल करता हूँ, जैसे RajAtlas (राजस्थान का इंटरैक्टिव एटलस) और यह वेबसाइट।',
      ur: 'C++ میری بنیادی پروگرامنگ زبان ہے، اور SQL میری دوسری مضبوط زبان، جس کے HackerRank پر میرے پاس تین سرٹیفکیٹ ہیں (Basic، Intermediate، Advanced)۔ میں HackerRank اور LeetCode پر مسئلہ حل کرنے اور ڈیٹا اسٹرکچر کی مشق کرتا ہوں، اور پروجیکٹس کے لیے Python اور JavaScript استعمال کرتا ہوں، جیسے RajAtlas (راجستھان کا انٹرایکٹو اٹلس) اور یہ ویب سائٹ۔'
    },
    'about.p2': {
      hi: 'मैं महाराजा सूरजमल बृज विश्वविद्यालय, भरतपुर से B.A. (भूगोल, समाजशास्त्र, राजनीति विज्ञान) के अंतिम वर्ष में हूँ। इस पृष्ठभूमि से मानचित्र, संख्याओं और स्रोतों पर मेरी नज़र बारीक रहती है। मैं अंग्रेज़ी, हिंदी और उर्दू पढ़-लिख सकता हूँ, इसलिए तीनों भाषाओं की सामग्री की समीक्षा कर सकता हूँ।',
      ur: 'میں مہاراجہ سورج مل برج یونیورسٹی، بھرت پور سے بی اے (جغرافیہ، سماجیات، سیاسیات) کے آخری سال میں ہوں۔ اس پس منظر سے نقشوں، اعداد اور ماخذ پر میری نظر باریک رہتی ہے۔ میں انگریزی، ہندی اور اردو پڑھ لکھ سکتا ہوں، اس لیے تینوں زبانوں کے مواد کی جانچ کر سکتا ہوں۔'
    },
    'work.tag': { hi: 'मेरे AI ट्रेनिंग कार्य में क्या शामिल है', ur: 'میرے اے آئی ٹریننگ کے کام میں کیا شامل ہے' },
    'work.w1': { hi: 'भूगोल और सामाजिक विज्ञान पर AI उत्तरों का मूल्यांकन', ur: 'جغرافیہ اور سماجی علوم پر اے آئی جوابات کی جانچ' },
    'work.w2': { hi: 'मानचित्र-आधारित और स्थानिक तर्क के कार्य', ur: 'نقشے پر مبنی اور مکانی استدلال کے کام' },
    'work.w3': { hi: 'दृश्य डेटा एनोटेशन', ur: 'بصری ڈیٹا اینوٹیشن' },
    'work.w4': { hi: 'रोबोट के क्रिया-क्रम की चरण-दर-चरण समीक्षा', ur: 'روبوٹ کے عمل کی ترتیب کی مرحلہ وار جانچ' },
    'work.w5': { hi: 'हर रेटिंग का कारण बताने वाले स्पष्ट नोट्स लिखना', ur: 'ہر ریٹنگ کی وجہ بتانے والے واضح نوٹس لکھنا' },
    'about.strTitle': { hi: 'AI ट्रेनिंग के लिए मेरी ताक़तें', ur: 'اے آئی ٹریننگ کے لیے میری خوبیاں' },
    's1.t': { hi: 'C++ प्रोग्रामिंग', ur: 'C++ پروگرامنگ' },
    's1.d': { hi: 'साफ़ और कुशल C++ लिखना: क्लास, STL, पॉइंटर व मेमोरी, और शुरू से गति के बारे में सोचना।', ur: 'صاف اور مؤثر C++ لکھنا: کلاسز، STL، پوائنٹر اور میموری، اور شروع سے رفتار کے بارے میں سوچنا۔' },
    's2.t': { hi: 'समस्या-समाधान', ur: 'مسئلہ حل کرنا' },
    's2.d': { hi: 'समस्या को चरणों में तोड़ना, सही डेटा स्ट्रक्चर चुनना और हल को सीमांत मामलों पर जाँचना।', ur: 'مسئلے کو مرحلوں میں توڑنا، درست ڈیٹا اسٹرکچر چننا اور حل کو انتہائی صورتوں پر جانچنا۔' },
    's3.t': { hi: 'एजेंट व रोबोट योजना की समीक्षा', ur: 'ایجنٹ اور روبوٹ منصوبے کی جانچ' },
    's3.d': { hi: 'यह जाँचना कि AI एजेंट या रोबोट की योजना के हर चरण के पास ज़रूरी चीज़ें हैं और क्रम चलने योग्य है, और पहला विफल चरण चिह्नित करना।', ur: 'یہ جانچنا کہ اے آئی ایجنٹ یا روبوٹ کے منصوبے کے ہر مرحلے کے پاس ضروری چیزیں ہیں اور ترتیب قابلِ عمل ہے، اور پہلا ناکام مرحلہ نشان زد کرنا۔' },
    's4.t': { hi: 'स्थानिक तर्क', ur: 'مکانی استدلال' },
    's4.d': { hi: 'स्थान-आधारित व्याख्याओं की समीक्षा, मानचित्र पढ़ना और भौतिक व मानवीय पर्यावरण के वर्णन को परखना।', ur: 'مقام پر مبنی وضاحتوں کی جانچ، نقشے پڑھنا اور طبعی و انسانی ماحول کی تفصیل کو پرکھنا۔' },
    's5.t': { hi: 'तीन भाषाएँ', ur: 'تین زبانیں' },
    's5.d': { hi: 'अंग्रेज़ी, हिंदी और उर्दू में अर्थ, व्याकरण और लहजे की समीक्षा, दाएँ से बाएँ लिखे उर्दू पाठ सहित।', ur: 'انگریزی، ہندی اور اردو میں معنی، قواعد اور لہجے کی جانچ، دائیں سے بائیں لکھے اردو متن سمیت۔' },
    's6.t': { hi: 'स्वतंत्र सीखना', ur: 'خود سیکھنا' },
    's6.d': { hi: 'स्व-निर्देशित कोडिंग व गणित अभ्यास, और प्रोजेक्ट दिशानिर्देश व मूल्यांकन मानदंड सीखने में सच्ची रुचि।', ur: 'خود رہنمائی میں کوڈنگ اور ریاضی کی مشق، اور پروجیکٹ ہدایات اور جانچ کے معیار سیکھنے میں حقیقی دلچسپی۔' },

    'cpp.kicker': { hi: 'मेरी मुख्य भाषा', ur: 'میری بنیادی زبان' },
    'cpp.title': { hi: 'C++ में कोडिंग', ur: 'C++ میں کوڈنگ' },
    'cpp.lead': {
      hi: 'C++ वह भाषा है जिसमें मैं कोड लिखता हूँ। यह मेमोरी और गति पर सीधा नियंत्रण देती है, इसीलिए बहुत-सा रोबोट और रियल-टाइम सॉफ़्टवेयर इसी में लिखा जाता है, ROS 2 नोड्स सहित। नीचे एक छोटा C++ प्रोग्राम है जो रोबोट की योजना की समीक्षा वैसे ही करता है जैसे मैं हाथ से करता हूँ: हर चरण के चलने से पहले कुछ शर्तों का पूरा होना ज़रूरी है।',
      ur: 'C++ وہ زبان ہے جس میں میں کوڈ لکھتا ہوں۔ یہ میموری اور رفتار پر براہِ راست کنٹرول دیتی ہے، اسی لیے بہت سا روبوٹ اور ریئل ٹائم سافٹ ویئر اسی میں لکھا جاتا ہے، ROS 2 نوڈز سمیت۔ نیچے ایک چھوٹا C++ پروگرام ہے جو روبوٹ کے منصوبے کی جانچ ویسے ہی کرتا ہے جیسے میں ہاتھ سے کرتا ہوں: ہر مرحلے کے چلنے سے پہلے کچھ شرطوں کا پورا ہونا ضروری ہے۔'
    },
    'cpp.out': { hi: 'आउटपुट', ur: 'آؤٹ پٹ' },
    'cpp.note': {
      hi: 'इस पेज के लिए लिखा गया एक छोटा उदाहरण। यह योजना को क्रम से जाँचता है और पहले उस चरण पर रुक जाता है जिसकी शर्त पूरी नहीं है, यानी वही विचार जो नीचे के “उत्तर की समीक्षा” टूल में है।',
      ur: 'اس صفحے کے لیے لکھی گئی ایک مختصر مثال۔ یہ منصوبے کو ترتیب سے جانچتی ہے اور پہلے اس مرحلے پر رک جاتی ہے جس کی شرط پوری نہیں ہوتی، یعنی وہی خیال جو نیچے “جواب کی جانچ” ٹول میں ہے۔'
    },
    'cpp.w1.t': { hi: 'गति और नियंत्रण', ur: 'رفتار اور کنٹرول' },
    'cpp.w1.d': { hi: 'संकलित कोड और मेमोरी पर सीधा नियंत्रण, जिससे प्रोग्राम तेज़ और पूर्वानुमेय रहते हैं।', ur: 'مرتب شدہ کوڈ اور میموری پر براہِ راست کنٹرول، جس سے پروگرام تیز اور قابلِ پیش گوئی رہتے ہیں۔' },
    'cpp.w2.t': { hi: 'रोबोटिक्स इसी पर चलता है', ur: 'روبوٹکس اسی پر چلتا ہے' },
    'cpp.w2.d': { hi: 'कई रोबोटिक्स फ्रेमवर्क, जिनमें ROS 2 भी है, C++ लाइब्रेरी देते हैं, और समय पर चलने वाले कंट्रोल लूप अक्सर C++ में लिखे जाते हैं।', ur: 'کئی روبوٹکس فریم ورک، جن میں ROS 2 بھی شامل ہے، C++ لائبریری فراہم کرتے ہیں، اور وقت پر چلنے والے کنٹرول لوپ اکثر C++ میں لکھے جاتے ہیں۔' },
    'cpp.w3.t': { hi: 'मज़बूत बुनियाद', ur: 'مضبوط بنیاد' },
    'cpp.w3.d': { hi: 'C++ लिखने का मतलब है प्रकार, मेमोरी और जटिलता के बारे में सोचना, ऐसी आदतें जो चरण-दर-चरण तर्क पढ़ने और जाँचने में भी काम आती हैं।', ur: 'C++ لکھنے کا مطلب ہے اقسام، میموری اور پیچیدگی کے بارے میں سوچنا، ایسی عادتیں جو مرحلہ وار منطق پڑھنے اور جانچنے میں بھی کام آتی ہیں۔' },

    'projects.kicker': { hi: 'प्रोजेक्ट', ur: 'پروجیکٹس' },
    'projects.title': { hi: 'जो मैंने बनाया है', ur: 'جو میں نے بنایا ہے' },
    'projects.lead': { hi: 'कोड में लिखे प्रोजेक्ट, खोलने योग्य लिंक के साथ। हर एक में उपयोग हुई भाषाएँ और टूल दिए हैं।', ur: 'کوڈ میں لکھے پروجیکٹس، کھلنے والے لنکس کے ساتھ۔ ہر ایک میں استعمال ہونے والی زبانیں اور ٹولز درج ہیں۔' },
    'projects.stack': { en: 'Built with', hi: 'उपयोग हुआ', ur: 'استعمال ہوا' },
    'certs.title': { hi: 'HackerRank प्रमाणपत्र', ur: 'HackerRank سرٹیفکیٹس' },
    'certs.lead': { hi: 'तीन सत्यापित SQL प्रमाणपत्र। हर कार्ड HackerRank के सत्यापन पेज पर खुलता है।', ur: 'تین تصدیق شدہ SQL سرٹیفکیٹ۔ ہر کارڈ HackerRank کے تصدیقی صفحے پر کھلتا ہے۔' },
    'certs.issuer': { en: 'HackerRank certificate', hi: 'HackerRank प्रमाणपत्र', ur: 'HackerRank سرٹیفکیٹ' },
    'certs.verify': { en: 'Verify on HackerRank', hi: 'HackerRank पर सत्यापित करें', ur: 'HackerRank پر تصدیق کریں' },

    'skills.kicker': { hi: 'कौशल एटलस', ur: 'مہارتوں کا اٹلس' },
    'skills.title': { hi: 'मेरे कौशल, मज़बूती के क्रम में', ur: 'میری مہارتیں، مضبوطی کی ترتیب سے' },
    'skills.lead': {
      hi: 'सबसे पहले C++, फिर SQL, Python, JavaScript और Java, फिर AI ट्रेनिंग और मेरे पढ़ाई के विषय। कोई एक चुनें और देखें कि उसमें क्या शामिल है और AI ट्रेनिंग में वह कहाँ काम आता है।',
      ur: 'سب سے پہلے C++، پھر SQL، Python، JavaScript اور Java، پھر اے آئی ٹریننگ اور میری پڑھائی کے مضامین۔ کوئی ایک چنیں اور دیکھیں کہ اس میں کیا شامل ہے اور اے آئی ٹریننگ میں وہ کہاں کام آتا ہے۔'
    },
    'skills.mapTitle': { hi: 'B.A. पाठ्यक्रम मानचित्र, सेमेस्टर III–VI', ur: 'بی اے نصاب کا نقشہ، سمسٹر III–VI' },
    'skills.mapLead': { hi: 'पिछले दो वर्षों के सभी प्रश्नपत्र, सेमेस्टर के अनुसार। भूगोल के प्रश्नपत्रों में प्रायोगिक भी शामिल हैं।', ur: 'پچھلے دو سالوں کے تمام پرچے، سمسٹر کے لحاظ سے۔ جغرافیہ کے پرچوں میں پریکٹیکل بھی شامل ہیں۔' },

    'lab.kicker': { hi: 'इंटरैक्टिव लैब', ur: 'انٹرایکٹو لیب' },
    'lab.title': { hi: 'कोड में बनाए टूल', ur: 'کوڈ میں بنائے ٹول' },
    'lab.lead': {
      hi: 'JavaScript में लिखे तीन टूल, मेरी पढ़ाई से: किसी AI उत्तर की समीक्षा वैसे करें जैसे ट्रेनर करता है, मानचित्र प्रक्षेपों की तुलना करें, और कम्पास सर्वेक्षण चलाएँ।',
      ur: 'JavaScript میں لکھے تین ٹول، میری پڑھائی سے: کسی اے آئی جواب کی جانچ ویسے کریں جیسے ٹرینر کرتا ہے، نقشہ پروجیکشنز کا موازنہ کریں، اور کمپاس سروے چلائیں۔'
    },
    'try.kicker': { hi: 'आज़माएँ', ur: 'آزمائیں' },
    'try.title': { hi: 'C++ झटपट जाँच', ur: 'C++ فوری جانچ' },
    'try.lead': { hi: 'हर बार नए C++ प्रश्न, साथ में मेरे पढ़ाई के विषयों से एक प्रश्न। ग़लत चुनने पर उत्तर नहीं, संकेत मिलता है। कुछ भी सहेजा नहीं जाता।', ur: 'ہر بار نئے C++ سوال، ساتھ میں میری پڑھائی کے مضامین سے ایک سوال۔ غلط چننے پر جواب نہیں، اشارہ ملتا ہے۔ کچھ بھی محفوظ نہیں کیا جاتا۔' },
    'try.shuffle': { hi: 'नया सेट', ur: 'نیا سیٹ' },
    'edu.kicker': { hi: 'शिक्षा', ur: 'تعلیم' },
    'edu.title': { hi: 'मैंने कहाँ पढ़ाई की', ur: 'میں نے کہاں تعلیم حاصل کی' },

    'contact.kicker': { hi: 'संपर्क', ur: 'رابطہ' },
    'contact.title': { hi: 'आइए बात करें', ur: 'آئیے بات کریں' },
    'contact.lead': {
      hi: 'किसी AI ट्रेनिंग, एजेंटिक AI, रोबोटिक्स या C++ प्रोजेक्ट पर काम कर रहे हैं? मुझ तक पहुँचने का सबसे तेज़ तरीका ईमेल है। मैं अंग्रेज़ी, हिंदी या उर्दू में जवाब देता हूँ।',
      ur: 'کسی اے آئی ٹریننگ، ایجنٹک اے آئی، روبوٹکس یا C++ پروجیکٹ پر کام کر رہے ہیں؟ مجھ تک پہنچنے کا سب سے تیز طریقہ ای میل ہے۔ میں انگریزی، ہندی یا اردو میں جواب دیتا ہوں۔'
    },
    'contact.copy': { hi: 'ईमेल कॉपी करें', ur: 'ای میل کاپی کریں' },
    'contact.where': { hi: 'राजस्थान, भारत · रिमोट काम के लिए तैयार', ur: 'راجستھان، بھارت · ریموٹ کام کے لیے تیار' },
    'contact.formTitle': { hi: 'एक छोटा संदेश भेजें', ur: 'ایک مختصر پیغام بھیجیں' },
    'contact.name': { hi: 'आपका नाम', ur: 'آپ کا نام' },
    'contact.org': { hi: 'कंपनी (वैकल्पिक)', ur: 'کمپنی (اختیاری)' },
    'contact.msg': { hi: 'संदेश', ur: 'پیغام' },
    'contact.send': { hi: 'मेरे ईमेल ऐप में खोलें', ur: 'میری ای میل ایپ میں کھولیں' },
    'contact.formNote': { hi: 'इससे आपका ईमेल ऐप संदेश के साथ खुलता है। इस वेबसाइट से कुछ नहीं भेजा जाता।', ur: 'اس سے آپ کی ای میل ایپ پیغام کے ساتھ کھلتی ہے۔ اس ویب سائٹ سے کچھ نہیں بھیجا جاتا۔' },
    'contact.copied': { en: 'Email copied.', hi: 'ईमेल कॉपी हो गया।', ur: 'ای میل کاپی ہو گیا۔' },
    'contact.need': { en: 'Please add your name and a message.', hi: 'कृपया अपना नाम और संदेश लिखें।', ur: 'براہ کرم اپنا نام اور پیغام لکھیں۔' },
    'contact.opening': { en: 'Opening your email app…', hi: 'आपका ईमेल ऐप खुल रहा है…', ur: 'آپ کی ای میل ایپ کھل رہی ہے…' },
    'profiles.title': { hi: 'मुझे ऑनलाइन खोजें', ur: 'مجھے آن لائن تلاش کریں' },
    'footer.built': { hi: 'HTML, CSS और JavaScript से हाथ से बनाई गई।', ur: 'HTML، CSS اور JavaScript سے ہاتھ سے بنائی گئی۔' },
    'footer.top': { hi: 'ऊपर जाएँ ↑', ur: 'اوپر جائیں ↑' },

    /* atlas */
    'ui.topics': { en: '{n} topics', hi: '{n} विषय', ur: '{n} موضوعات' },
    'ui.studied': { en: 'What I have studied', hi: 'मैंने क्या पढ़ा है', ur: 'میں نے کیا پڑھا ہے' },
    'ui.details': { en: 'Details', hi: 'विवरण', ur: 'تفصیل' },
    'ui.applies': { en: 'Where it helps in AI training', hi: 'AI ट्रेनिंग में कहाँ काम आता है', ur: 'اے آئی ٹریننگ میں کہاں کام آتا ہے' },
    'ui.sem': { en: 'Semester', hi: 'सेमेस्टर', ur: 'سمسٹر' },

    /* quiz */
    'q.pick': { en: 'Pick an answer. A wrong guess shows a hint.', hi: 'एक उत्तर चुनें। ग़लत अनुमान पर संकेत मिलेगा।', ur: 'ایک جواب چنیں۔ غلط اندازے پر اشارہ ملے گا۔' },
    'q.score': { en: 'Solved: {s} · Right first time: {f}', hi: 'हल किए: {s} · पहली बार में सही: {f}', ur: 'حل کیے: {s} · پہلی بار میں درست: {f}' },
    'q.correct': { en: 'Correct. ', hi: 'सही। ', ur: 'درست۔ ' },
    'q.got': { en: 'Got it. ', hi: 'मिल गया। ', ur: 'ٹھیک ہے۔ ' },
    'q.notQuite': { en: 'Not quite. ', hi: 'पूरी तरह नहीं। ', ur: 'پوری طرح نہیں۔ ' },
    'q.skip': { en: 'Skip', hi: 'छोड़ें', ur: 'چھوڑیں' },
    'q.next': { en: 'Next question →', hi: 'अगला प्रश्न →', ur: 'اگلا سوال ←' },
    'cat.cpp': { en: 'C++', hi: 'C++', ur: 'C++' },
    'cat.geo': { en: 'Geography', hi: 'भूगोल', ur: 'جغرافیہ' },
    'cat.map': { en: 'Maps & survey', hi: 'मानचित्र व सर्वेक्षण', ur: 'نقشہ و سروے' },
    'cat.stat': { en: 'Statistics', hi: 'सांख्यिकी', ur: 'شماریات' },
    'cat.soc': { en: 'Society & polity', hi: 'समाज व राजव्यवस्था', ur: 'معاشرہ و سیاست' },

    /* lab: shared */
    'lab.t1': { en: 'Map projections', hi: 'मानचित्र प्रक्षेप', ur: 'نقشہ پروجیکشن' },
    'lab.t2': { en: 'Compass traverse', hi: 'कम्पास सर्वेक्षण', ur: 'کمپاس سروے' },
    'lab.t3': { en: 'Review an answer', hi: 'उत्तर की समीक्षा', ur: 'جواب کی جانچ' },

    /* lab: projections */
    'pj.intro': {
      en: 'Every flat map distorts the globe somewhere. Choose a projection and watch the circles: on the globe they are all the same size, so any change in their shape or size is distortion.',
      hi: 'हर समतल मानचित्र पृथ्वी को कहीं न कहीं विकृत करता है। कोई प्रक्षेप चुनें और वृत्तों को देखें: ग्लोब पर सभी वृत्त बराबर हैं, इसलिए उनके आकार या माप में कोई भी बदलाव विकृति है।',
      ur: 'ہر چپٹا نقشہ زمین کو کہیں نہ کہیں بگاڑتا ہے۔ کوئی پروجیکشن چنیں اور دائروں کو دیکھیں: گلوب پر سب دائرے برابر ہیں، اس لیے ان کی شکل یا سائز میں کوئی بھی تبدیلی بگاڑ ہے۔'
    },
    'pj.proj': { en: 'Projection', hi: 'प्रक्षेप', ur: 'پروجیکشن' },
    'pj.center': { en: 'Centre (zenithal only)', hi: 'केंद्र (केवल खमध्य)', ur: 'مرکز (صرف سمتی)' },
    'pj.polar': { en: 'Polar', hi: 'ध्रुवीय', ur: 'قطبی' },
    'pj.equatorial': { en: 'Equatorial', hi: 'विषुवतीय', ur: 'خط استوائی' },
    'pj.oblique': { en: 'Oblique (over Bharatpur)', hi: 'तिर्यक (भरतपुर के ऊपर)', ur: 'ترچھا (بھرت پور کے اوپر)' },
    'pj.tissot': { en: 'Show distortion circles', hi: 'विकृति वृत्त दिखाएँ', ur: 'بگاڑ کے دائرے دکھائیں' },
    'pj.family': { en: 'Family', hi: 'वर्ग', ur: 'قسم' },
    'pj.preserves': { en: 'Keeps true', hi: 'क्या सही रखता है', ur: 'کیا درست رکھتی ہے' },
    'pj.note': { en: 'Note', hi: 'टिप्पणी', ur: 'نوٹ' },
    'pj.area': { en: 'A circle at 60°N looks {x}× the area of the same circle at the equator.', hi: '60°N पर एक वृत्त, विषुवत रेखा पर उसी वृत्त के क्षेत्रफल का {x} गुना दिखता है।', ur: '60°N پر ایک دائرہ، خط استوا پر اسی دائرے کے رقبے کا {x} گنا دکھائی دیتا ہے۔' },
    'pj.areaZ': { en: 'A circle 60° from the centre looks {x}× the area of the same circle at the centre.', hi: 'केंद्र से 60° दूर एक वृत्त, केंद्र पर उसी वृत्त के क्षेत्रफल का {x} गुना दिखता है।', ur: 'مرکز سے 60° دور ایک دائرہ، مرکز پر اسی دائرے کے رقبے کا {x} گنا دکھائی دیتا ہے۔' },
    'pj.areaNA': { en: 'From this centre, a circle 60° away falls outside the map.', hi: 'इस केंद्र से 60° दूर का वृत्त मानचित्र से बाहर पड़ता है।', ur: 'اس مرکز سے 60° دور کا دائرہ نقشے سے باہر پڑتا ہے۔' },
    'pj.lgEq': { en: 'Equator', hi: 'विषुवत रेखा', ur: 'خط استوا' },
    'pj.lgTr': { en: 'Tropics', hi: 'कर्क व मकर रेखा', ur: 'خط سرطان و جدی' },
    'pj.lgHome': { en: 'Bharatpur', hi: 'भरतपुर', ur: 'بھرت پور' },
    'pj.canvas': { en: 'Map drawn in the selected projection, with graticule and distortion circles', hi: 'चुने गए प्रक्षेप में बना मानचित्र, अक्षांश-देशांतर जाल और विकृति वृत्तों के साथ', ur: 'منتخب پروجیکشن میں بنا نقشہ، عرض و طول بلد کے جال اور بگاڑ کے دائروں کے ساتھ' },
    'fam.cyl': { en: 'Cylindrical', hi: 'बेलनाकार', ur: 'اسطوانی' },
    'fam.zen': { en: 'Zenithal (azimuthal)', hi: 'खमध्य (शिरोबिंदु)', ur: 'سمتی (زینتھل)' },
    'fam.con': { en: 'Conical', hi: 'शंक्वाकार', ur: 'مخروطی' },
    'fam.conv': { en: 'Conventional', hi: 'परंपरागत', ur: 'روایتی' },
    'prop.conformal': { en: 'Shape (conformal)', hi: 'आकृति (शुद्ध आकृतिक)', ur: 'شکل (کنفارمل)' },
    'prop.equalArea': { en: 'Area (equal-area)', hi: 'क्षेत्रफल (समक्षेत्र)', ur: 'رقبہ (مساوی رقبہ)' },
    'prop.equiMer': { en: 'Distances along meridians', hi: 'याम्योत्तरों के साथ दूरी', ur: 'طول بلد کی لکیروں کے ساتھ فاصلہ' },
    'prop.equiCtr': { en: 'Distances and directions from the centre', hi: 'केंद्र से दूरी और दिशा', ur: 'مرکز سے فاصلہ اور سمت' },
    'prop.gc': { en: 'Great circles as straight lines', hi: 'वृहत वृत्त सीधी रेखाओं के रूप में', ur: 'عظیم دائرے سیدھی لکیروں کی صورت میں' },
    'prop.compromise': { en: 'Nothing exactly (a compromise)', hi: 'कुछ भी पूरी तरह नहीं (समझौता)', ur: 'کچھ بھی مکمل طور پر نہیں (درمیانی راستہ)' },
    'prop.persp': { en: 'The look of a globe seen from space', hi: 'अंतरिक्ष से दिखते ग्लोब जैसा रूप', ur: 'خلا سے نظر آنے والے گلوب جیسی صورت' },

    /* lab: traverse */
    'tv.intro': {
      en: "Enter a whole-circle bearing and length for each leg. The tool works out latitudes and departures and the closing error, and adjusts a closed traverse with Bowditch's rule.",
      hi: 'हर भुजा के लिए पूर्ण वृत्त दिक्मान और लंबाई दर्ज करें। टूल लैटिट्यूड और डिपार्चर तथा संवरण त्रुटि निकालता है, और बंद मालारेखन को बाउडिच नियम से संशोधित करता है।',
      ur: 'ہر ضلع کے لیے مکمل دائرہ سمت اور لمبائی درج کریں۔ ٹول لیٹیٹیوڈ اور ڈیپارچر اور بند ہونے کی غلطی نکالتا ہے، اور بند ٹریورس کو باؤڈچ کے اصول سے درست کرتا ہے۔'
    },
    'tv.preset': { en: 'Example', hi: 'उदाहरण', ur: 'مثال' },
    'tv.pClosed': { en: 'Closed traverse (5 legs)', hi: 'बंद मालारेखन (5 भुजाएँ)', ur: 'بند ٹریورس (5 اضلاع)' },
    'tv.pOpen': { en: 'Open traverse (road survey)', hi: 'खुला मालारेखन (सड़क सर्वेक्षण)', ur: 'کھلا ٹریورس (سڑک سروے)' },
    'tv.isClosed': { en: 'Closed traverse (ends where it started)', hi: 'बंद मालारेखन (जहाँ से शुरू, वहीं ख़त्म)', ur: 'بند ٹریورس (جہاں سے شروع، وہیں ختم)' },
    'tv.exag': { en: 'Exaggerate the error ×50 in the drawing', hi: 'चित्र में त्रुटि को ×50 बढ़ाकर दिखाएँ', ur: 'خاکے میں غلطی کو ×50 بڑھا کر دکھائیں' },
    'tv.leg': { en: 'Leg', hi: 'भुजा', ur: 'ضلع' },
    'tv.bearing': { en: 'WCB (°)', hi: 'WCB (°)', ur: 'WCB (°)' },
    'tv.length': { en: 'Length (m)', hi: 'लंबाई (मी)', ur: 'لمبائی (میٹر)' },
    'tv.rb': { en: 'Reduced bearing', hi: 'समानीत दिक्मान', ur: 'مختصر سمت' },
    'tv.lat': { en: 'Latitude ΔN', hi: 'लैटिट्यूड ΔN', ur: 'لیٹیٹیوڈ ΔN' },
    'tv.dep': { en: 'Departure ΔE', hi: 'डिपार्चर ΔE', ur: 'ڈیپارچر ΔE' },
    'tv.adjN': { en: 'Adjusted ΔN', hi: 'संशोधित ΔN', ur: 'درست شدہ ΔN' },
    'tv.adjE': { en: 'Adjusted ΔE', hi: 'संशोधित ΔE', ur: 'درست شدہ ΔE' },
    'tv.sum': { en: 'Sum', hi: 'योग', ur: 'مجموعہ' },
    'tv.add': { en: '+ Add leg', hi: '+ भुजा जोड़ें', ur: '+ ضلع شامل کریں' },
    'tv.remove': { en: 'Remove leg {n}', hi: 'भुजा {n} हटाएँ', ur: 'ضلع {n} ہٹائیں' },
    'tv.err': { en: 'Closing error {e} m over a perimeter of {p} m: accuracy about 1 : {r}.', hi: 'संवरण त्रुटि {e} मी, कुल परिमाप {p} मी: शुद्धता लगभग 1 : {r}।', ur: 'بند ہونے کی غلطی {e} میٹر، کل محیط {p} میٹر: درستی تقریباً 1 : {r}۔' },
    'tv.errNone': { en: 'The traverse closes exactly; nothing to adjust.', hi: 'मालारेखन पूरी तरह बंद होता है; संशोधन की ज़रूरत नहीं।', ur: 'ٹریورس بالکل بند ہوتا ہے؛ درستی کی ضرورت نہیں۔' },
    'tv.bow': {
      en: "Bowditch's rule shares the error among the legs in proportion to their length. Dashed: as observed. Solid: adjusted.",
      hi: 'बाउडिच नियम त्रुटि को भुजाओं की लंबाई के अनुपात में बाँटता है। डैश रेखा: प्रेक्षित। ठोस रेखा: संशोधित।',
      ur: 'باؤڈچ کا اصول غلطی کو اضلاع کی لمبائی کے تناسب سے بانٹتا ہے۔ ٹوٹی لکیر: مشاہدہ شدہ۔ ٹھوس لکیر: درست شدہ۔'
    },
    'tv.openNote': {
      en: 'Open traverse: nothing checks the closure, so errors can be neither found nor adjusted. The end point is {d} m from the start.',
      hi: 'खुला मालारेखन: संवरण की कोई जाँच नहीं होती, इसलिए त्रुटि न पकड़ी जा सकती है न सुधारी जा सकती है। अंतिम बिंदु प्रारंभ से {d} मी दूर है।',
      ur: 'کھلا ٹریورس: بند ہونے کی کوئی جانچ نہیں ہوتی، اس لیے غلطی نہ پکڑی جا سکتی ہے نہ درست کی جا سکتی ہے۔ آخری نقطہ آغاز سے {d} میٹر دور ہے۔'
    },
    'tv.invalid': { en: 'Enter a bearing from 0 to 360 and a length above 0 for every leg.', hi: 'हर भुजा के लिए 0 से 360 के बीच दिक्मान और 0 से अधिक लंबाई दर्ज करें।', ur: 'ہر ضلع کے لیے 0 سے 360 کے درمیان سمت اور 0 سے زیادہ لمبائی درج کریں۔' },
    'tv.canvas': { en: 'Plot of the traverse stations, observed and adjusted', hi: 'मालारेखन स्टेशनों का चित्र, प्रेक्षित और संशोधित', ur: 'ٹریورس اسٹیشنوں کا خاکہ، مشاہدہ شدہ اور درست شدہ' },
    'tv.lgObs': { en: 'Observed', hi: 'प्रेक्षित', ur: 'مشاہدہ شدہ' },
    'tv.lgAdj': { en: 'Adjusted', hi: 'संशोधित', ur: 'درست شدہ' },

    /* lab: review */
    'rv.intro': {
      en: 'A model answered a question. Your job: find the first wrong step, then say what kind of error it is. This is how reviews in AI training work.',
      hi: 'एक मॉडल ने प्रश्न का उत्तर दिया। आपका काम: पहला ग़लत चरण ढूँढें, फिर बताएँ कि त्रुटि किस प्रकार की है। AI ट्रेनिंग में समीक्षा ऐसे ही होती है।',
      ur: 'ایک ماڈل نے سوال کا جواب دیا۔ آپ کا کام: پہلا غلط مرحلہ ڈھونڈیں، پھر بتائیں کہ غلطی کس قسم کی ہے۔ اے آئی ٹریننگ میں جانچ ایسے ہی ہوتی ہے۔'
    },
    'rv.case': { en: 'Case {n} of {t}', hi: 'केस {n} / {t}', ur: 'کیس {n} / {t}' },
    'rv.question': { en: 'Question', hi: 'प्रश्न', ur: 'سوال' },
    'rv.response': { en: 'Model response', hi: 'मॉडल का उत्तर', ur: 'ماڈل کا جواب' },
    'rv.step1': { en: 'Step 1: click the first incorrect step.', hi: 'चरण 1: पहले ग़लत चरण पर क्लिक करें।', ur: 'مرحلہ 1: پہلے غلط مرحلے پر کلک کریں۔' },
    'rv.step2': { en: 'Step 2: what kind of error is it?', hi: 'चरण 2: यह किस प्रकार की त्रुटि है?', ur: 'مرحلہ 2: یہ کس قسم کی غلطی ہے؟' },
    'rv.notThis': { en: 'This step is correct. Check the next one carefully.', hi: 'यह चरण सही है। अगले को ध्यान से जाँचें।', ur: 'یہ مرحلہ درست ہے۔ اگلے کو غور سے جانچیں۔' },
    'rv.later': { en: 'This step is wrong, but only because of an earlier mistake. Find where the error starts.', hi: 'यह चरण ग़लत है, पर केवल पिछली ग़लती के कारण। देखें त्रुटि कहाँ से शुरू हुई।', ur: 'یہ مرحلہ غلط ہے، مگر صرف پچھلی غلطی کی وجہ سے۔ دیکھیں غلطی کہاں سے شروع ہوئی۔' },
    'rv.found': { en: 'Found it. ', hi: 'मिल गया। ', ur: 'مل گیا۔ ' },
    'rv.typeWrong': { en: 'Not quite. Look at what exactly went wrong in that step.', hi: 'पूरी तरह नहीं। देखें उस चरण में ठीक-ठीक क्या ग़लत हुआ।', ur: 'پوری طرح نہیں۔ دیکھیں اس مرحلے میں ٹھیک ٹھیک کیا غلط ہوا۔' },
    'rv.correct': { en: 'Correct. ', hi: 'सही। ', ur: 'درست۔ ' },
    'rv.fix': { en: 'Corrected step', hi: 'सुधरा हुआ चरण', ur: 'درست کیا ہوا مرحلہ' },
    'rv.rubric': { en: 'How a reviewer would rate this response (out of 5)', hi: 'एक समीक्षक इस उत्तर को कैसे आंकेगा (5 में से)', ur: 'ایک جائزہ کار اس جواب کو کیسے پرکھے گا (5 میں سے)' },
    'rv.next': { en: 'Next case →', hi: 'अगला केस →', ur: 'اگلا کیس ←' },
    'et.fact': { en: 'Fact or concept', hi: 'तथ्य या अवधारणा', ur: 'حقیقت یا تصور' },
    'et.calc': { en: 'Calculation', hi: 'गणना', ur: 'حساب' },
    'et.unit': { en: 'Units', hi: 'इकाइयाँ', ur: 'اکائیاں' },
    'et.logic': { en: 'Method or reasoning', hi: 'विधि या तर्क', ur: 'طریقہ یا استدلال' },
    'rb.acc': { en: 'Accuracy', hi: 'शुद्धता', ur: 'درستی' },
    'rb.reason': { en: 'Reasoning', hi: 'तर्क', ur: 'استدلال' },
    'rb.clarity': { en: 'Clarity', hi: 'स्पष्टता', ur: 'وضاحت' }
  },

  /* ------------------------------------------------------------------ skills, in order of strength */
  atlas: [
    { id: 'cpp', k: 1,
      name: { en: 'C++', hi: 'C++', ur: 'C++' },
      groups: [
        { label: { en: 'Language & OOP', hi: 'भाषा व OOP', ur: 'زبان اور OOP' },
          items: {
            en: ['Types, loops & functions', 'Pointers & references', 'Arrays, vectors & strings', 'Classes, inheritance & polymorphism', 'STL containers & algorithms', 'Dynamic memory & smart pointers', 'File input & output', 'Templates (basics)'],
            hi: ['प्रकार, लूप व फ़ंक्शन', 'पॉइंटर व रेफ़रेंस', 'ऐरे, वेक्टर व स्ट्रिंग', 'क्लास, इनहेरिटेंस व पॉलिमॉर्फ़िज़्म', 'STL कंटेनर व एल्गोरिद्म', 'डायनामिक मेमोरी व स्मार्ट पॉइंटर', 'फ़ाइल इनपुट व आउटपुट', 'टेम्पलेट (मूल बातें)'],
            ur: ['اقسام، لوپ اور فنکشن', 'پوائنٹر اور ریفرنس', 'ارے، ویکٹر اور اسٹرنگ', 'کلاس، وراثت اور پولیمورفزم', 'STL کنٹینر اور الگورتھم', 'ڈائنامک میموری اور اسمارٹ پوائنٹر', 'فائل اِن پٹ اور آؤٹ پٹ', 'ٹیمپلیٹ (بنیادی باتیں)']
          } },
        { label: { en: 'Data structures & algorithms', hi: 'डेटा स्ट्रक्चर व एल्गोरिद्म', ur: 'ڈیٹا اسٹرکچر اور الگورتھم' },
          items: {
            en: ['Linked lists', 'Stacks & queues', 'Trees & BSTs', 'Graphs: BFS & DFS', 'Sorting & binary search', 'Hash maps & sets', 'Recursion & backtracking', 'Dynamic programming (basics)', 'Big-O complexity'],
            hi: ['लिंक्ड लिस्ट', 'स्टैक व क्यू', 'ट्री व BST', 'ग्राफ़: BFS व DFS', 'सॉर्टिंग व बाइनरी सर्च', 'हैश मैप व सेट', 'रिकर्शन व बैकट्रैकिंग', 'डायनामिक प्रोग्रामिंग (मूल बातें)', 'Big-O जटिलता'],
            ur: ['لنکڈ لسٹ', 'اسٹیک اور کیو', 'ٹری اور BST', 'گراف: BFS اور DFS', 'سورٹنگ اور بائنری سرچ', 'ہیش میپ اور سیٹ', 'ریکرژن اور بیک ٹریکنگ', 'ڈائنامک پروگرامنگ (بنیادی باتیں)', 'Big-O پیچیدگی']
          } }
      ],
      detail: {
        en: 'My main programming language. I use it for problem solving and to learn how efficient, low-level software is built. I practise on HackerRank and LeetCode and check my solutions against edge cases.',
        hi: 'मेरी मुख्य प्रोग्रामिंग भाषा। मैं इसका उपयोग समस्या-समाधान के लिए और यह सीखने के लिए करता हूँ कि कुशल, निम्न-स्तरीय सॉफ़्टवेयर कैसे बनता है। मैं HackerRank और LeetCode पर अभ्यास करता हूँ और अपने हल को सीमांत मामलों पर जाँचता हूँ।',
        ur: 'میری بنیادی پروگرامنگ زبان۔ میں اسے مسئلہ حل کرنے کے لیے اور یہ سیکھنے کے لیے استعمال کرتا ہوں کہ مؤثر، نچلی سطح کا سافٹ ویئر کیسے بنتا ہے۔ میں HackerRank اور LeetCode پر مشق کرتا ہوں اور اپنے حل کو انتہائی صورتوں پر جانچتا ہوں۔'
      },
      use: {
        en: 'Understanding how agent and robot software is written, reading step-by-step logic, and spotting where a plan or a program breaks first.',
        hi: 'यह समझना कि एजेंट और रोबोट सॉफ़्टवेयर कैसे लिखा जाता है, चरण-दर-चरण तर्क पढ़ना, और यह पकड़ना कि योजना या प्रोग्राम सबसे पहले कहाँ टूटता है।',
        ur: 'یہ سمجھنا کہ ایجنٹ اور روبوٹ سافٹ ویئر کیسے لکھا جاتا ہے، مرحلہ وار منطق پڑھنا، اور یہ پکڑنا کہ منصوبہ یا پروگرام سب سے پہلے کہاں ٹوٹتا ہے۔'
      } },

    { id: 'sql', k: 4,
      name: { en: 'SQL', hi: 'SQL', ur: 'SQL' },
      groups: [
        { label: { en: 'SQL', hi: 'SQL', ur: 'SQL' },
          items: {
            en: ['SELECT, WHERE & ORDER BY', 'Aggregate functions & GROUP BY', 'HAVING & filtering groups', 'JOINs across tables', 'Subqueries', 'Window functions & CTEs', 'Problem solving on HackerRank'],
            hi: ['SELECT, WHERE व ORDER BY', 'समुच्चय फ़ंक्शन व GROUP BY', 'HAVING और समूह फ़िल्टर', 'कई टेबल पर JOIN', 'सबक्वेरी', 'विंडो फ़ंक्शन व CTE', 'HackerRank पर समस्या-समाधान'],
            ur: ['SELECT، WHERE اور ORDER BY', 'ایگریگیٹ فنکشن اور GROUP BY', 'HAVING اور گروپ فلٹر', 'کئی ٹیبلز پر JOIN', 'سب کوئری', 'ونڈو فنکشن اور CTE', 'HackerRank پر مسئلہ حل کرنا']
          } }
      ],
      detail: {
        en: 'I hold three HackerRank SQL certificates: SQL (Basic), SQL (Intermediate) and SQL (Advanced). I also solve SQL problems on HackerRank.',
        hi: 'मेरे पास तीन HackerRank SQL प्रमाणपत्र हैं: SQL (Basic), SQL (Intermediate) और SQL (Advanced)। मैं HackerRank पर SQL की समस्याएँ भी हल करता हूँ।',
        ur: 'میرے پاس HackerRank کے تین SQL سرٹیفکیٹ ہیں: SQL (Basic)، SQL (Intermediate) اور SQL (Advanced)۔ میں HackerRank پر SQL کے مسائل بھی حل کرتا ہوں۔'
      },
      use: {
        en: 'Reading and checking data with precise queries, and bringing the same step-by-step care to a query that I bring to reviewing an AI answer.',
        hi: 'सटीक क्वेरी से डेटा पढ़ना और जाँचना, और किसी क्वेरी में वही चरण-दर-चरण सावधानी लाना जो मैं AI उत्तर की समीक्षा में लाता हूँ।',
        ur: 'درست کوئریز سے ڈیٹا پڑھنا اور جانچنا، اور کسی کوئری میں وہی مرحلہ وار احتیاط لانا جو میں اے آئی جواب کی جانچ میں لاتا ہوں۔'
      } },

    { id: 'py', k: 3,
      name: { en: 'Python', hi: 'Python', ur: 'Python' },
      groups: [
        { label: { en: 'Python', hi: 'Python', ur: 'Python' },
          items: {
            en: ['Variables, loops & functions', 'Lists, dictionaries & sets', 'Reading & writing files', 'Data-cleaning scripts', 'Geodata tools: pyshp, shapely, pyproj', 'Data analysis on Kaggle'],
            hi: ['वेरिएबल, लूप व फ़ंक्शन', 'लिस्ट, डिक्शनरी व सेट', 'फ़ाइलें पढ़ना व लिखना', 'डेटा-सफ़ाई स्क्रिप्ट', 'जियोडेटा टूल: pyshp, shapely, pyproj', 'Kaggle पर डेटा विश्लेषण'],
            ur: ['ویری ایبل، لوپ اور فنکشن', 'لسٹ، ڈکشنری اور سیٹ', 'فائلیں پڑھنا اور لکھنا', 'ڈیٹا صفائی کی اسکرپٹس', 'جیو ڈیٹا ٹولز: pyshp, shapely, pyproj', 'Kaggle پر ڈیٹا تجزیہ']
          } }
      ],
      detail: {
        en: 'I use Python for data work. In RajAtlas it reads boundary files, measures areas on the ellipsoid, simplifies outlines and validates the results. I also use Kaggle for data practice.',
        hi: 'मैं डेटा के काम के लिए Python इस्तेमाल करता हूँ। RajAtlas में यह सीमा फ़ाइलें पढ़ती है, दीर्घवृत्ताभ पर क्षेत्रफल मापती है, रूपरेखाएँ सरल बनाती है और परिणाम जाँचती है। डेटा अभ्यास के लिए मैं Kaggle भी इस्तेमाल करता हूँ।',
        ur: 'میں ڈیٹا کے کام کے لیے Python استعمال کرتا ہوں۔ RajAtlas میں یہ باؤنڈری فائلیں پڑھتی ہے، بیضوی سطح (ellipsoid) پر رقبہ ناپتی ہے، خاکوں کو سادہ بناتی ہے اور نتائج کی توثیق کرتی ہے۔ ڈیٹا کی مشق کے لیے میں Kaggle بھی استعمال کرتا ہوں۔'
      },
      use: {
        en: 'Cleaning and checking data, and scripting repetitive checks.',
        hi: 'डेटा की सफ़ाई और जाँच, और बार-बार होने वाली जाँचों की स्क्रिप्ट लिखना।',
        ur: 'ڈیٹا کی صفائی اور جانچ، اور بار بار ہونے والی جانچوں کی اسکرپٹ لکھنا۔'
      } },

    { id: 'js', k: 7,
      name: { en: 'JavaScript', hi: 'JavaScript', ur: 'JavaScript' },
      groups: [
        { label: { en: 'JavaScript, HTML & CSS', hi: 'JavaScript, HTML व CSS', ur: 'JavaScript، HTML اور CSS' },
          items: {
            en: ['Canvas 2D drawing', 'Event handling & accessibility', 'Pages without a framework', 'Right-to-left layouts (Urdu)', 'Light & dark themes', 'Deploying on Cloudflare'],
            hi: ['Canvas 2D ड्रॉइंग', 'इवेंट हैंडलिंग व एक्सेसिबिलिटी', 'बिना फ़्रेमवर्क के पेज', 'दाएँ से बाएँ लेआउट (उर्दू)', 'लाइट व डार्क थीम', 'Cloudflare पर डिप्लॉय'],
            ur: ['Canvas 2D ڈرائنگ', 'ایونٹ ہینڈلنگ اور رسائی پذیری', 'بغیر فریم ورک کے صفحات', 'دائیں سے بائیں لے آؤٹ (اردو)', 'لائٹ اور ڈارک تھیم', 'Cloudflare پر ڈیپلائے']
          } }
      ],
      detail: {
        en: 'I wrote this website and RajAtlas by hand in plain JavaScript, HTML and CSS, with no libraries: live map projections, a compass-traverse calculator, quizzes and a canvas map.',
        hi: 'मैंने यह वेबसाइट और RajAtlas सादे JavaScript, HTML और CSS में हाथ से लिखे हैं, बिना किसी लाइब्रेरी के: लाइव मानचित्र प्रक्षेप, कम्पास सर्वेक्षण कैलकुलेटर, क्विज़ और canvas मानचित्र।',
        ur: 'میں نے یہ ویب سائٹ اور RajAtlas سادہ JavaScript، HTML اور CSS میں ہاتھ سے لکھے ہیں، بغیر کسی لائبریری کے: لائیو نقشہ پروجیکشن، کمپاس سروے کیلکولیٹر، کوئز اور canvas نقشہ۔'
      },
      use: {
        en: 'Building small tools to test an idea quickly, and checking how content looks and behaves in right-to-left languages.',
        hi: 'किसी विचार को जल्दी परखने के लिए छोटे टूल बनाना, और यह जाँचना कि सामग्री दाएँ से बाएँ भाषाओं में कैसी दिखती और चलती है।',
        ur: 'کسی خیال کو جلد پرکھنے کے لیے چھوٹے ٹول بنانا، اور یہ جانچنا کہ مواد دائیں سے بائیں زبانوں میں کیسا دکھتا اور چلتا ہے۔'
      } },

    { id: 'java', k: 6,
      name: { en: 'Java', hi: 'Java', ur: 'Java' },
      groups: [
        { label: { en: 'Java', hi: 'Java', ur: 'Java' },
          items: {
            en: ['Syntax, classes & objects', 'OOP: inheritance & interfaces', 'Collections framework', 'Exception handling', 'Strings & arrays', 'Basic data structures'],
            hi: ['सिंटैक्स, क्लास व ऑब्जेक्ट', 'OOP: इनहेरिटेंस व इंटरफ़ेस', 'कलेक्शन फ़्रेमवर्क', 'अपवाद प्रबंधन', 'स्ट्रिंग व ऐरे', 'बुनियादी डेटा स्ट्रक्चर'],
            ur: ['سنٹیکس، کلاس اور آبجیکٹ', 'OOP: وراثت اور انٹرفیس', 'کلیکشن فریم ورک', 'استثنا کا انتظام', 'اسٹرنگ اور ارے', 'بنیادی ڈیٹا اسٹرکچر']
          } }
      ],
      detail: {
        en: 'Object-oriented programming in Java, which I use alongside C++ to compare how the two languages handle the same idea.',
        hi: 'Java में ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग, जिसे मैं C++ के साथ इस्तेमाल करता हूँ ताकि देख सकूँ कि दोनों भाषाएँ एक ही विचार को कैसे संभालती हैं।',
        ur: 'Java میں آبجیکٹ اورینٹڈ پروگرامنگ، جسے میں C++ کے ساتھ استعمال کرتا ہوں تاکہ دیکھ سکوں کہ دونوں زبانیں ایک ہی خیال کو کیسے سنبھالتی ہیں۔'
      },
      use: {
        en: 'Reading and reasoning about object-oriented code.',
        hi: 'ऑब्जेक्ट-ओरिएंटेड कोड को पढ़ना और उस पर तर्क करना।',
        ur: 'آبجیکٹ اورینٹڈ کوڈ کو پڑھنا اور اس پر استدلال کرنا۔'
      } },

    { id: 'ai', k: 2,
      name: { en: 'AI training', hi: 'AI ट्रेनिंग', ur: 'اے آئی ٹریننگ' },
      groups: [
        { label: { en: 'Agentic & robotic AI training', hi: 'एजेंटिक व रोबोटिक AI ट्रेनिंग', ur: 'ایجنٹک اور روبوٹک اے آئی ٹریننگ' },
          items: {
            en: ['Answer evaluation & rubrics', 'Error analysis: fact, calculation, units, method', 'Agent plan review', 'Robot action sequences', 'Spatial & map reasoning', 'Visual annotation', 'Review notes that justify ratings', 'Guideline-first reviewing'],
            hi: ['उत्तर मूल्यांकन व रूब्रिक', 'त्रुटि विश्लेषण: तथ्य, गणना, इकाई, विधि', 'एजेंट योजना की समीक्षा', 'रोबोट के क्रिया-क्रम', 'स्थानिक व मानचित्र तर्क', 'दृश्य एनोटेशन', 'रेटिंग का कारण बताने वाले समीक्षा नोट्स', 'पहले निर्देश, फिर समीक्षा'],
            ur: ['جواب کی جانچ اور رُبرک', 'غلطی کا تجزیہ: حقیقت، حساب، اکائی، طریقہ', 'ایجنٹ منصوبے کی جانچ', 'روبوٹ کے عمل کی ترتیب', 'مکانی اور نقشہ استدلال', 'بصری اینوٹیشن', 'ریٹنگ کی وجہ بتانے والے جانچ نوٹس', 'پہلے ہدایات، پھر جانچ']
          } }
      ],
      detail: {
        en: 'My work: checking how AI systems answer, reason and plan, finding the first wrong step and writing notes that justify each rating.',
        hi: 'मेरा काम: यह जाँचना कि AI प्रणालियाँ कैसे उत्तर देती हैं, तर्क करती हैं और योजना बनाती हैं, पहला ग़लत चरण ढूँढना और हर रेटिंग का कारण बताने वाले नोट्स लिखना।',
        ur: 'میرا کام: یہ جانچنا کہ اے آئی نظام کیسے جواب دیتے ہیں، استدلال کرتے ہیں اور منصوبہ بناتے ہیں، پہلا غلط مرحلہ ڈھونڈنا اور ہر ریٹنگ کی وجہ بتانے والے نوٹس لکھنا۔'
      },
      use: {
        en: 'This is the work itself. The coding habits above (read each step, find the first failure, check the edge cases) are the habits I use when I review.',
        hi: 'यही मेरा काम है। ऊपर की कोडिंग आदतें (हर चरण पढ़ना, पहली विफलता ढूँढना, सीमांत मामले जाँचना) ही वे आदतें हैं जो मैं समीक्षा में इस्तेमाल करता हूँ।',
        ur: 'یہی میرا کام ہے۔ اوپر کی کوڈنگ عادتیں (ہر مرحلہ پڑھنا، پہلی ناکامی ڈھونڈنا، انتہائی صورتیں جانچنا) ہی وہ عادتیں ہیں جو میں جانچ میں استعمال کرتا ہوں۔'
      } },

    { id: 'geo', k: 1,
      name: { en: 'Geography', hi: 'भूगोल', ur: 'جغرافیہ' },
      groups: [
        { label: { en: 'Physical & regional', hi: 'भौतिक व प्रादेशिक', ur: 'طبعی و علاقائی' },
          items: {
            en: ['Indian monsoon & jet streams', 'Air masses, fronts & cyclones', 'Köppen & Thornthwaite climates', 'Hydrological cycle', 'Ocean temperature & salinity', 'Tides, waves & currents', 'Coral reefs', 'Physiography of India', 'Soils & natural vegetation', 'Asia, Europe & North America', 'Geography of Rajasthan', 'Desertification & water conservation'],
            hi: ['भारतीय मानसून व जेट स्ट्रीम', 'वायुराशियाँ, वाताग्र व चक्रवात', 'कोपेन व थॉर्नथ्वेट जलवायु', 'जल चक्र', 'महासागरीय तापमान व लवणता', 'ज्वार, लहरें व धाराएँ', 'प्रवाल भित्तियाँ', 'भारत के भू-आकृतिक विभाग', 'मृदा व प्राकृतिक वनस्पति', 'एशिया, यूरोप व उत्तरी अमेरिका', 'राजस्थान का भूगोल', 'मरुस्थलीकरण व जल संरक्षण'],
            ur: ['ہندوستانی مون سون اور جیٹ اسٹریم', 'ہوائی کمیتیں، محاذ اور طوفان', 'کوپن اور تھورنتھویٹ درجہ بندی', 'آبی چکر', 'سمندری درجۂ حرارت اور نمکینی', 'مد و جزر، لہریں اور رو', 'مرجانی چٹانیں', 'ہندوستان کے طبعی خطے', 'مٹی اور قدرتی نباتات', 'ایشیا، یورپ اور شمالی امریکہ', 'راجستھان کا جغرافیہ', 'صحرا زدگی اور پانی کا تحفظ']
          } },
        { label: { en: 'Maps, projections & surveying', hi: 'मानचित्र, प्रक्षेप व सर्वेक्षण', ur: 'نقشے، پروجیکشن و سروے' },
          items: {
            en: ["Map scales & the Earth's grid", 'Conical projections', 'Cylindrical projections', 'Zenithal projections', 'Mollweide, sinusoidal & globular', 'Topographical sheets & conventional signs', 'Choropleth, isopleth & dot maps', 'Plane-table survey', 'Prismatic compass survey', 'Open & closed traverses', 'Bowditch correction', 'GIS, remote sensing & aerial photos'],
            hi: ['मापनी व पृथ्वी का ग्रिड', 'शंक्वाकार प्रक्षेप', 'बेलनाकार प्रक्षेप', 'खमध्य प्रक्षेप', 'मॉलवाइड, साइनुसॉइडल व ग्लोबुलर', 'स्थलाकृतिक मानचित्र व रूढ़ चिह्न', 'वर्णमात्री, सममान रेखा व बिंदु मानचित्र', 'प्लेन टेबल सर्वेक्षण', 'प्रिज़्मीय कम्पास सर्वेक्षण', 'खुला व बंद मालारेखन', 'बाउडिच संशोधन', 'GIS, सुदूर संवेदन व हवाई चित्र'],
            ur: ['پیمانہ اور زمین کا گرڈ', 'مخروطی پروجیکشن', 'اسطوانی پروجیکشن', 'سمتی (زینتھل) پروجیکشن', 'مولوائیڈ، سائنوسوئیڈل اور گلوبولر', 'ٹوپوگرافک شیٹس اور روایتی نشانات', 'کوروپلیتھ، آئسوپلیتھ اور نقطہ نقشے', 'پلین ٹیبل سروے', 'پرزمیٹک کمپاس سروے', 'کھلا اور بند ٹریورس', 'باؤڈچ درستی', 'GIS، ریموٹ سینسنگ اور فضائی تصاویر']
          } }
      ],
      detail: {
        en: 'My main subject. Theory papers: Climatology & oceanography, Geography of India, World regional geography and Geography of Rajasthan (including the Bhil, Meena and Garasia communities). Practicals: drawing projections by the graphical method, reading Survey of India topographical sheets, plane-table and prismatic-compass surveys, and statistical diagrams. Class XII Geography: 83/100, with 30/30 in the practical.',
        hi: 'मेरा मुख्य विषय। सैद्धांतिक प्रश्नपत्र: जलवायु विज्ञान व समुद्र विज्ञान, भारत का भूगोल, विश्व प्रादेशिक भूगोल और राजस्थान का भूगोल (भील, मीणा व गरासिया समुदायों सहित)। प्रायोगिक: ग्राफ़ीय विधि से प्रक्षेप बनाना, भारतीय सर्वेक्षण विभाग के स्थलाकृतिक मानचित्र पढ़ना, प्लेन टेबल व प्रिज़्मीय कम्पास सर्वेक्षण, और सांख्यिकीय आरेख। कक्षा 12 भूगोल: 83/100, प्रायोगिक में 30/30।',
        ur: 'میرا بنیادی مضمون۔ نظریاتی پرچے: موسمیات و سمندریات، ہندوستان کا جغرافیہ، عالمی علاقائی جغرافیہ اور راجستھان کا جغرافیہ (بھیل، مینا اور گراسیا برادریوں سمیت)۔ عملی کام: گرافیکل طریقے سے پروجیکشن بنانا، سروے آف انڈیا کی ٹوپوگرافک شیٹس پڑھنا، پلین ٹیبل اور پرزمیٹک کمپاس سروے، اور شماریاتی خاکے۔ بارہویں جماعت جغرافیہ: 83/100، پریکٹیکل میں 30/30۔'
      },
      use: {
        en: "Checking a model's claims about places, climate, resources and environments, and spatial reasoning tasks: directions, distances, scale, layout, and whether a described route or scene is physically possible.",
        hi: 'स्थानों, जलवायु, संसाधनों और पर्यावरण के बारे में मॉडल के दावों की जाँच, और स्थानिक तर्क के कार्य: दिशा, दूरी, मापनी, विन्यास, और यह कि वर्णित मार्ग या दृश्य भौतिक रूप से संभव है या नहीं।',
        ur: 'مقامات، آب و ہوا، وسائل اور ماحول کے بارے میں ماڈل کے دعووں کی جانچ، اور مکانی استدلال کے کام: سمت، فاصلہ، پیمانہ، ترتیب، اور یہ کہ بیان کیا گیا راستہ یا منظر طبعی طور پر ممکن ہے یا نہیں۔'
      } },

    { id: 'soc', k: 5,
      name: { en: 'Sociology', hi: 'समाजशास्त्र', ur: 'سماجیات' },
      groups: [
        { label: { en: 'Thought & society', hi: 'चिंतन व समाज', ur: 'فکر و معاشرہ' },
          items: {
            en: ['Comte, Durkheim, Weber & Marx', 'Unity & diversity in India', 'Family, marriage, kinship & caste', 'Sanskritization & westernization', 'Globalization', 'Gender, minorities & affirmative action', 'Vivekananda, Gandhi & Ambedkar', 'Ghurye, Srinivas, Dube & the Mukerjees'],
            hi: ['कॉम्ट, दुर्खीम, वेबर व मार्क्स', 'भारत में एकता व विविधता', 'परिवार, विवाह, नातेदारी व जाति', 'संस्कृतीकरण व पश्चिमीकरण', 'वैश्वीकरण', 'लिंग, अल्पसंख्यक व सकारात्मक कार्रवाई', 'विवेकानंद, गांधी व आंबेडकर', 'घुर्ये, श्रीनिवास, दुबे व मुखर्जी'],
            ur: ['کومٹ، درخائیم، ویبر اور مارکس', 'ہندوستان میں اتحاد اور تنوع', 'خاندان، شادی، رشتہ داری اور ذات', 'سنسکرتائزیشن اور مغربیت', 'عالمگیریت', 'صنف، اقلیتیں اور مثبت اقدام', 'وویکانند، گاندھی اور امبیڈکر', 'گھوریے، سری نواس، دوبے اور مکھرجی']
          } },
        { label: { en: 'Research methods', hi: 'शोध विधियाँ', ur: 'تحقیقی طریقے' },
          items: {
            en: ['Objectivity & scientific enquiry', 'Research design & hypothesis', 'Primary & secondary data', 'Sampling', 'Observation & interview', 'Questionnaire & schedule', 'Coding & tabulation', 'Report writing'],
            hi: ['वस्तुनिष्ठता व वैज्ञानिक जाँच', 'शोध प्रारूप व परिकल्पना', 'प्राथमिक व द्वितीयक आँकड़े', 'प्रतिचयन', 'अवलोकन व साक्षात्कार', 'प्रश्नावली व अनुसूची', 'संकेतन व सारणीयन', 'प्रतिवेदन लेखन'],
            ur: ['معروضیت اور سائنسی تحقیق', 'تحقیقی خاکہ اور مفروضہ', 'بنیادی اور ثانوی ڈیٹا', 'نمونہ گیری', 'مشاہدہ اور انٹرویو', 'سوالنامہ اور شیڈول', 'کوڈنگ اور جدول سازی', 'رپورٹ نویسی']
          } }
      ],
      detail: {
        en: 'Classical sociological thought (Sem III), Understanding Indian society (Sem IV), Social research methods (Sem V) and Indian sociological traditions (Sem VI).',
        hi: 'शास्त्रीय समाजशास्त्रीय चिंतन (सेम III), भारतीय समाज की समझ (सेम IV), सामाजिक शोध विधियाँ (सेम V) और भारतीय समाजशास्त्रीय परंपराएँ (सेम VI)।',
        ur: 'کلاسیکی سماجی فکر (سمسٹر III)، ہندوستانی معاشرے کی سمجھ (سمسٹر IV)، سماجی تحقیق کے طریقے (سمسٹر V) اور ہندوستانی سماجیاتی روایات (سمسٹر VI)۔'
      },
      use: {
        en: 'Annotation and evaluation follow research discipline: clear criteria, careful observation, consistent coding and a written record of each decision. It also helps me judge answers about Indian society for accuracy and bias.',
        hi: 'एनोटेशन और मूल्यांकन शोध अनुशासन जैसे ही हैं: स्पष्ट मानदंड, सावधान अवलोकन, सुसंगत संकेतन और हर निर्णय का लिखित रिकॉर्ड। इससे भारतीय समाज पर उत्तरों की शुद्धता और पूर्वाग्रह परखने में भी मदद मिलती है।',
        ur: 'اینوٹیشن اور جانچ تحقیقی نظم و ضبط جیسے ہی ہیں: واضح معیار، محتاط مشاہدہ، یکساں کوڈنگ اور ہر فیصلے کا تحریری ریکارڈ۔ اس سے ہندوستانی معاشرے پر جوابات کی درستی اور تعصب پرکھنے میں بھی مدد ملتی ہے۔'
      } },

    { id: 'pol', k: 4,
      name: { en: 'Political Science', hi: 'राजनीति विज्ञान', ur: 'سیاسیات' },
      groups: [
        { label: { en: 'Systems, India & the world', hi: 'व्यवस्थाएँ, भारत व विश्व', ur: 'نظام، ہندوستان اور دنیا' },
          items: {
            en: ['Britain & Japan (democratic monarchy)', 'USA & France (presidential)', 'China, Nepal, Switzerland & Sri Lanka', 'Indian national movement', 'Constituent Assembly & Preamble', 'Fundamental Rights & Directive Principles', 'Union & State government', 'Judiciary & judicial review', 'Federalism & Panchayati Raj', 'Plato to Marx', 'Cold War & the United Nations', "India's foreign policy, NAM, ASEAN, SAARC & Quad"],
            hi: ['ब्रिटेन व जापान (लोकतांत्रिक राजशाही)', 'अमेरिका व फ़्रांस (अध्यक्षात्मक)', 'चीन, नेपाल, स्विट्ज़रलैंड व श्रीलंका', 'भारतीय राष्ट्रीय आंदोलन', 'संविधान सभा व प्रस्तावना', 'मौलिक अधिकार व नीति निदेशक तत्व', 'संघ व राज्य सरकार', 'न्यायपालिका व न्यायिक पुनरावलोकन', 'संघवाद व पंचायती राज', 'प्लेटो से मार्क्स तक', 'शीतयुद्ध व संयुक्त राष्ट्र', 'भारत की विदेश नीति, गुटनिरपेक्षता, आसियान, सार्क व क्वाड'],
            ur: ['برطانیہ اور جاپان (جمہوری بادشاہت)', 'امریکہ اور فرانس (صدارتی)', 'چین، نیپال، سوئٹزرلینڈ اور سری لنکا', 'ہندوستانی قومی تحریک', 'دستور ساز اسمبلی اور تمہید', 'بنیادی حقوق اور رہنما اصول', 'مرکزی اور ریاستی حکومت', 'عدلیہ اور عدالتی نظرثانی', 'وفاقیت اور پنچایتی راج', 'افلاطون سے مارکس تک', 'سرد جنگ اور اقوامِ متحدہ', 'ہندوستان کی خارجہ پالیسی، غیر وابستہ تحریک، آسیان، سارک اور کواڈ']
          } }
      ],
      detail: {
        en: 'Selected political systems (Sem III), the Indian political system (Sem IV), Western political thinkers from Plato and Aristotle to Hobbes, Locke, Rousseau, Bentham, Mill, Machiavelli and Marx (Sem V), and international relations since the Second World War (Sem VI).',
        hi: 'प्रमुख राजनीतिक व्यवस्थाएँ (सेम III), भारतीय राजनीतिक व्यवस्था (सेम IV), प्लेटो और अरस्तू से हॉब्स, लॉक, रूसो, बेंथम, मिल, मैकियावेली और मार्क्स तक पाश्चात्य राजनीतिक विचारक (सेम V), और द्वितीय विश्वयुद्ध के बाद से अंतरराष्ट्रीय संबंध (सेम VI)।',
        ur: 'منتخب سیاسی نظام (سمسٹر III)، ہندوستانی سیاسی نظام (سمسٹر IV)، افلاطون اور ارسطو سے ہابز، لاک، روسو، بینتھم، مل، میکیاولی اور مارکس تک مغربی سیاسی مفکرین (سمسٹر V)، اور دوسری عالمی جنگ کے بعد سے بین الاقوامی تعلقات (سمسٹر VI)۔'
      },
      use: {
        en: 'Reviewing answers about governments, constitutions and world affairs for accuracy, balance and the right historical context.',
        hi: 'सरकारों, संविधानों और विश्व मामलों पर उत्तरों की शुद्धता, संतुलन और सही ऐतिहासिक संदर्भ के लिए समीक्षा।',
        ur: 'حکومتوں، دساتیر اور عالمی معاملات پر جوابات کی درستی، توازن اور صحیح تاریخی سیاق کے لیے جانچ۔'
      } },

    { id: 'math', k: 3,
      name: { en: 'Maths', hi: 'गणित', ur: 'ریاضی' },
      groups: [
        { label: { en: 'Mathematics & statistics', hi: 'गणित व सांख्यिकी', ur: 'ریاضی و شماریات' },
          items: {
            en: ['Class 10–12 mathematics (self-study)', 'Mean, median & mode', 'Standard deviation & quartiles', 'Frequency distribution & tabulation', 'Line, bar & pie diagrams', 'Population pyramids', 'Scatter & triangular diagrams', 'Traffic-flow diagrams', 'Scale, distance & angle calculations'],
            hi: ['कक्षा 10–12 गणित (स्व-अध्ययन)', 'माध्य, माध्यिका व बहुलक', 'मानक विचलन व चतुर्थक', 'बारंबारता बंटन व सारणीयन', 'रेखा, दंड व वृत्त आरेख', 'जनसंख्या पिरामिड', 'प्रकीर्ण व त्रिकोणीय आरेख', 'यातायात प्रवाह आरेख', 'मापनी, दूरी व कोण की गणना'],
            ur: ['دسویں تا بارہویں ریاضی (خود مطالعہ)', 'اوسط، وسطانیہ اور عادہ', 'معیاری انحراف اور ربعیے', 'تعددی تقسیم اور جدول سازی', 'لکیری، بار اور پائی خاکے', 'آبادی کے اہرام', 'بکھراؤ اور مثلثی خاکے', 'ٹریفک بہاؤ کے خاکے', 'پیمانہ، فاصلہ اور زاویے کا حساب']
          } }
      ],
      detail: {
        en: 'Class X Mathematics: 86/100. Since then I have practised senior-secondary mathematics on my own: understanding the problem, solving it in a logical order and checking each calculation. Statistics also runs through my geography practicals and social research methods.',
        hi: 'कक्षा 10 गणित: 86/100। तब से मैं वरिष्ठ माध्यमिक गणित का स्वयं अभ्यास करता हूँ: प्रश्न को समझना, तार्किक क्रम में हल करना और हर गणना जाँचना। सांख्यिकी मेरे भूगोल प्रायोगिक और सामाजिक शोध विधियों में भी शामिल है।',
        ur: 'دسویں جماعت ریاضی: 86/100۔ تب سے میں سینئر سیکنڈری ریاضی کی خود مشق کرتا ہوں: سوال کو سمجھنا، منطقی ترتیب میں حل کرنا اور ہر حساب جانچنا۔ شماریات میرے جغرافیہ پریکٹیکل اور سماجی تحقیق کے طریقوں میں بھی شامل ہے۔'
      },
      use: {
        en: 'Step-by-step checking of numerical answers and charts, and catching the one slipped calculation that makes a final answer wrong.',
        hi: 'संख्यात्मक उत्तरों और चार्टों की चरण-दर-चरण जाँच, और उस एक चूकी हुई गणना को पकड़ना जो अंतिम उत्तर ग़लत कर देती है।',
        ur: 'عددی جوابات اور چارٹس کی مرحلہ وار جانچ، اور اس ایک چوکی ہوئی حساب کو پکڑنا جو آخری جواب غلط کر دیتا ہے۔'
      } },

    { id: 'en', k: 7,
      name: { en: 'English', hi: 'अंग्रेज़ी', ur: 'انگریزی' },
      groups: [
        { label: { en: 'Reading & writing', hi: 'पढ़ना व लिखना', ur: 'پڑھنا اور لکھنا' },
          items: {
            en: ['Reading comprehension', 'Following detailed task guidelines', 'Grammar & vocabulary', 'Structured written explanations', 'Report writing', 'Class XII English'],
            hi: ['पठन बोध', 'विस्तृत कार्य-निर्देशों का पालन', 'व्याकरण व शब्दावली', 'व्यवस्थित लिखित व्याख्या', 'प्रतिवेदन लेखन', 'कक्षा 12 अंग्रेज़ी'],
            ur: ['فہمِ عبارت', 'تفصیلی ہدایات پر عمل', 'قواعد اور ذخیرۂ الفاظ', 'منظم تحریری وضاحت', 'رپورٹ نویسی', 'بارہویں جماعت انگریزی']
          } }
      ],
      detail: {
        en: 'Studied as a subject up to Class XII. I read task guidelines carefully and write my review notes in clear, simple English.',
        hi: 'कक्षा 12 तक विषय के रूप में पढ़ी। मैं कार्य-निर्देश ध्यान से पढ़ता हूँ और अपने समीक्षा नोट्स साफ़, सरल अंग्रेज़ी में लिखता हूँ।',
        ur: 'بارہویں جماعت تک بطور مضمون پڑھی۔ میں کام کی ہدایات غور سے پڑھتا ہوں اور اپنے جائزہ نوٹس صاف، سادہ انگریزی میں لکھتا ہوں۔'
      },
      use: {
        en: 'Understanding guidelines exactly as written and justifying every rating in a clear, well-organised note.',
        hi: 'निर्देशों को ठीक वैसे ही समझना जैसे लिखे हैं, और हर रेटिंग का कारण साफ़, व्यवस्थित नोट में लिखना।',
        ur: 'ہدایات کو ٹھیک ویسے ہی سمجھنا جیسے لکھی ہیں، اور ہر ریٹنگ کی وجہ صاف، منظم نوٹ میں لکھنا۔'
      } },

    { id: 'hi', k: 6,
      name: { en: 'Hindi', hi: 'हिंदी', ur: 'ہندی' },
      groups: [
        { label: { en: 'Language skills', hi: 'भाषा कौशल', ur: 'زبان کی مہارتیں' },
          items: {
            en: ['Fluent speaking & writing', 'Devanagari reading', 'Grammar & usage', 'Class XII Hindi', 'Prose & poetry', 'Hindi ↔ English meaning checks'],
            hi: ['धाराप्रवाह बोलना व लिखना', 'देवनागरी पठन', 'व्याकरण व प्रयोग', 'कक्षा 12 हिंदी', 'गद्य व पद्य', 'हिंदी ↔ अंग्रेज़ी अर्थ जाँच'],
            ur: ['روانی سے بولنا اور لکھنا', 'دیوناگری پڑھنا', 'قواعد اور استعمال', 'بارہویں جماعت ہندی', 'نثر اور نظم', 'ہندی ↔ انگریزی معنی کی جانچ']
          } }
      ],
      detail: {
        en: 'Studied Hindi up to Class XII and use it every day.',
        hi: 'कक्षा 12 तक हिंदी पढ़ी और रोज़ इसका उपयोग करता हूँ।',
        ur: 'بارہویں جماعت تک ہندی پڑھی اور روزانہ اس کا استعمال کرتا ہوں۔'
      },
      use: {
        en: 'Reviewing Hindi responses for meaning, grammar and natural tone, and checking that Hindi and English versions say the same thing.',
        hi: 'हिंदी उत्तरों के अर्थ, व्याकरण और स्वाभाविक लहजे की समीक्षा, और यह जाँचना कि हिंदी व अंग्रेज़ी संस्करण एक ही बात कहते हैं।',
        ur: 'ہندی جوابات کے معنی، قواعد اور فطری لہجے کی جانچ، اور یہ دیکھنا کہ ہندی اور انگریزی متن ایک ہی بات کہتے ہیں۔'
      } },

    { id: 'ur', k: 2,
      name: { en: 'Urdu', hi: 'उर्दू', ur: 'اردو' },
      groups: [
        { label: { en: 'Language skills', hi: 'भाषा कौशल', ur: 'زبان کی مہارتیں' },
          items: {
            en: ['Speaking & writing', 'Reading the Nastaliq script', 'Right-to-left text', 'Urdu ↔ Hindi ↔ English meaning checks'],
            hi: ['बोलना व लिखना', 'नस्तालीक़ लिपि पठन', 'दाएँ से बाएँ लिखा पाठ', 'उर्दू ↔ हिंदी ↔ अंग्रेज़ी अर्थ जाँच'],
            ur: ['بولنا اور لکھنا', 'نستعلیق رسم الخط پڑھنا', 'دائیں سے بائیں متن', 'اردو ↔ ہندی ↔ انگریزی معنی کی جانچ']
          } }
      ],
      detail: {
        en: 'I read and write Urdu in the Nastaliq script. This website is fully available in Urdu too — switch the language at the top.',
        hi: 'मैं उर्दू नस्तालीक़ लिपि में पढ़ता-लिखता हूँ। यह वेबसाइट भी पूरी तरह उर्दू में उपलब्ध है — ऊपर भाषा बदलें।',
        ur: 'میں اردو نستعلیق رسم الخط میں پڑھتا لکھتا ہوں۔ یہ ویب سائٹ بھی مکمل طور پر اردو میں دستیاب ہے — اوپر زبان بدلیں۔'
      },
      use: {
        en: 'Reviewing Urdu responses for meaning and fluency, and spotting problems specific to right-to-left text.',
        hi: 'उर्दू उत्तरों के अर्थ और प्रवाह की समीक्षा, और दाएँ से बाएँ लिखे पाठ से जुड़ी समस्याएँ पकड़ना।',
        ur: 'اردو جوابات کے معنی اور روانی کی جانچ، اور دائیں سے بائیں متن سے جڑی خامیاں پکڑنا۔'
      } }
  ],

  /* ------------------------------------------------------------------ B.A. course map (k: 1 geography, 5 sociology, 4 political science) */
  courses: [
    { sem: 'III', year: '2024–25', papers: [
      { code: 'GEO-10T-301', k: 1, t: { en: 'Climatology & Oceanography', hi: 'जलवायु विज्ञान व समुद्र विज्ञान', ur: 'موسمیات و سمندریات' } },
      { code: 'GEO-10P-302', k: 1, t: { en: 'Practical III: diagrams & compass survey', hi: 'प्रायोगिक III: आरेख व कम्पास सर्वेक्षण', ur: 'پریکٹیکل III: خاکے اور کمپاس سروے' } },
      { code: 'SOC-10T-301', k: 5, t: { en: 'Classical Sociological Thought', hi: 'शास्त्रीय समाजशास्त्रीय चिंतन', ur: 'کلاسیکی سماجی فکر' } },
      { code: 'POL-10T-301', k: 4, t: { en: 'Selected Political Systems', hi: 'प्रमुख राजनीतिक व्यवस्थाएँ', ur: 'منتخب سیاسی نظام' } }
    ] },
    { sem: 'IV', year: '2024–25', papers: [
      { code: 'GEO-10T-401', k: 1, t: { en: 'Geography of India', hi: 'भारत का भूगोल', ur: 'ہندوستان کا جغرافیہ' } },
      { code: 'GEO-10P-402', k: 1, t: { en: 'Practical IV: maps & topographical sheets', hi: 'प्रायोगिक IV: मानचित्र व स्थलाकृतिक पत्रक', ur: 'پریکٹیکل IV: نقشے اور ٹوپوگرافک شیٹس' } },
      { code: 'SOC-10T-401', k: 5, t: { en: 'Understanding Indian Society', hi: 'भारतीय समाज की समझ', ur: 'ہندوستانی معاشرے کی سمجھ' } },
      { code: 'POL-10T-401', k: 4, t: { en: 'Indian Political System', hi: 'भारतीय राजनीतिक व्यवस्था', ur: 'ہندوستانی سیاسی نظام' } }
    ] },
    { sem: 'V', year: '2025–26', final: true, papers: [
      { code: 'GEO-10T-501', k: 1, t: { en: 'World Regional Geography', hi: 'विश्व प्रादेशिक भूगोल', ur: 'عالمی علاقائی جغرافیہ' } },
      { code: 'GEO-10P-502', k: 1, t: { en: 'Practical I: projections & plane table', hi: 'प्रायोगिक I: प्रक्षेप व प्लेन टेबल', ur: 'پریکٹیکل I: پروجیکشن اور پلین ٹیبل' } },
      { code: 'SOC-10T-501', k: 5, t: { en: 'Social Research Methods', hi: 'सामाजिक शोध विधियाँ', ur: 'سماجی تحقیق کے طریقے' } },
      { code: 'POL-10T-501', k: 4, t: { en: 'Western Political Thinkers', hi: 'पाश्चात्य राजनीतिक विचारक', ur: 'مغربی سیاسی مفکرین' } }
    ] },
    { sem: 'VI', year: '2025–26', final: true, papers: [
      { code: 'GEO-10T-601', k: 1, t: { en: 'Geography of Rajasthan', hi: 'राजस्थान का भूगोल', ur: 'راجستھان کا جغرافیہ' } },
      { code: 'GEO-10P-602', k: 1, t: { en: 'Practical II: 3-D diagrams, zenithal projections, GIS', hi: 'प्रायोगिक II: त्रिविमीय आरेख, खमध्य प्रक्षेप, GIS', ur: 'پریکٹیکل II: سہ جہتی خاکے، سمتی پروجیکشن، GIS' } },
      { code: 'SOC-10T-601', k: 5, t: { en: 'Indian Sociological Traditions', hi: 'भारतीय समाजशास्त्रीय परंपराएँ', ur: 'ہندوستانی سماجیاتی روایات' } },
      { code: 'POL-10T-601', k: 4, t: { en: 'International Relations since 1945', hi: 'द्वितीय विश्वयुद्ध के बाद अंतरराष्ट्रीय संबंध', ur: 'دوسری عالمی جنگ کے بعد بین الاقوامی تعلقات' } }
    ] }
  ],

  /* ------------------------------------------------------------------ education */
  edu: [
    { k: 1,
      when: { en: 'Pursuing · final year', hi: 'जारी · अंतिम वर्ष', ur: 'جاری · آخری سال' },
      what: { en: 'Bachelor of Arts — Geography, Sociology, Political Science', hi: 'कला स्नातक — भूगोल, समाजशास्त्र, राजनीति विज्ञान', ur: 'بیچلر آف آرٹس — جغرافیہ، سماجیات، سیاسیات' },
      where: { en: 'Maharaja Surajmal Brij University, Bharatpur', hi: 'महाराजा सूरजमल बृज विश्वविद्यालय, भरतपुर', ur: 'مہاراجہ سورج مل برج یونیورسٹی، بھرت پور' },
      badges: [],
      body: {
        en: 'NEP-2020 programme with Geography as the main focus. Geography papers pair theory with practicals in cartography, map projections, surveying and statistical diagrams, kept in an A3 practical record book and examined with a field survey and viva voce.',
        hi: 'NEP-2020 कार्यक्रम, जिसमें भूगोल मुख्य विषय है। भूगोल के प्रश्नपत्रों में सिद्धांत के साथ मानचित्र कला, मानचित्र प्रक्षेप, सर्वेक्षण और सांख्यिकीय आरेखों के प्रायोगिक हैं, जो A3 प्रायोगिक रिकॉर्ड बुक में रखे जाते हैं और क्षेत्र सर्वेक्षण व मौखिकी से जाँचे जाते हैं।',
        ur: 'NEP-2020 پروگرام، جس میں جغرافیہ بنیادی مضمون ہے۔ جغرافیہ کے پرچوں میں نظریے کے ساتھ نقشہ نگاری، نقشہ پروجیکشن، سروے اور شماریاتی خاکوں کے پریکٹیکل ہیں، جو A3 پریکٹیکل ریکارڈ بک میں رکھے جاتے ہیں اور فیلڈ سروے اور زبانی امتحان سے جانچے جاتے ہیں۔'
      } },
    { k: 2,
      when: { en: '2023', hi: '2023', ur: '2023' },
      what: { en: 'Class XII — Humanities', hi: 'कक्षा 12 — मानविकी', ur: 'بارہویں جماعت — ہیومینٹیز' },
      where: { en: 'Sanatan Dharm Shiksha Sadan Senior Secondary School, Dholpur · Board of Secondary Education, Rajasthan', hi: 'सनातन धर्म शिक्षा सदन सीनियर सेकेंडरी स्कूल, धौलपुर · माध्यमिक शिक्षा बोर्ड, राजस्थान', ur: 'سناتن دھرم شکشا سدن سینئر سیکنڈری اسکول، دھول پور · بورڈ آف سیکنڈری ایجوکیشن، راجستھان' },
      badges: [
        { en: '65.20% · First Division', hi: '65.20% · प्रथम श्रेणी', ur: '65.20% · فرسٹ ڈویژن' },
        { en: 'Geography 83/100', hi: 'भूगोल 83/100', ur: 'جغرافیہ 83/100' },
        { en: 'Practical 30/30', hi: 'प्रायोगिक 30/30', ur: 'پریکٹیکل 30/30' }
      ],
      body: {
        en: 'Hindi, English, Political Science, History and Geography, with Social Service Plan as an additional subject.',
        hi: 'हिंदी, अंग्रेज़ी, राजनीति विज्ञान, इतिहास और भूगोल, अतिरिक्त विषय के रूप में सामाजिक सेवा योजना।',
        ur: 'ہندی، انگریزی، سیاسیات، تاریخ اور جغرافیہ، اضافی مضمون کے طور پر سماجی خدمت منصوبہ۔'
      } },
    { k: 3,
      when: { en: '2021', hi: '2021', ur: '2021' },
      what: { en: 'Class X', hi: 'कक्षा 10', ur: 'دسویں جماعت' },
      where: { en: 'Ikra Secondary School, Talaiya Road, Dholpur · Board of Secondary Education, Rajasthan', hi: 'इकरा सेकेंडरी स्कूल, तलैया रोड, धौलपुर · माध्यमिक शिक्षा बोर्ड, राजस्थान', ur: 'اقرا سیکنڈری اسکول، تلیا روڈ، دھول پور · بورڈ آف سیکنڈری ایجوکیشن، راجستھان' },
      badges: [
        { en: '85.83% · First Division', hi: '85.83% · प्रथम श्रेणी', ur: '85.83% · فرسٹ ڈویژن' },
        { en: 'Mathematics 86/100', hi: 'गणित 86/100', ur: 'ریاضی 86/100' }
      ],
      body: {
        en: 'Mathematics was one of my strongest subjects, and I have kept practising Class 10–12 mathematics on my own since.',
        hi: 'गणित मेरे सबसे मज़बूत विषयों में से एक था, और तब से मैं कक्षा 10–12 का गणित ख़ुद अभ्यास करता आ रहा हूँ।',
        ur: 'ریاضی میرے سب سے مضبوط مضامین میں سے ایک تھی، اور تب سے میں دسویں سے بارہویں جماعت کی ریاضی خود مشق کرتا آ رہا ہوں۔'
      } }
  ],

  /* ------------------------------------------------------------------ public profiles */
  profiles: [
    { name: 'GitHub', handle: 'shaankha81-sketch', url: 'https://github.com/shaankha81-sketch', abbr: 'GH', color: '#24292f' },
    { name: 'LeetCode', handle: 'Shaan_Sha', url: 'https://leetcode.com/u/Shaan_Sha/', abbr: 'LC', color: '#a35400' },
    { name: 'HackerRank', handle: 'shaankha81', url: 'https://www.hackerrank.com/profile/shaankha81', abbr: 'HR', color: '#067a43' },
    { name: 'Kaggle', handle: 'shaankha01', url: 'https://www.kaggle.com/shaankha01', abbr: 'K', color: '#0b7ca8' },
    { name: 'LinkedIn', handle: 'shaan-shaan-4559a9422', url: 'https://www.linkedin.com/in/shaan-shaan-4559a9422/', abbr: 'in', color: '#0a66c2' },
    { name: 'Reddit', handle: 'u/Shaan_96', url: 'https://www.reddit.com/user/Shaan_96/', abbr: 'r/', color: '#d93a00' }
  ],

  /* ------------------------------------------------------------------ certificates (verified on HackerRank) */
  certs: [
    { title: 'SQL (Basic)', url: 'https://www.hackerrank.com/certificates/e7bd3dc2dd94', k: 4 },
    { title: 'SQL (Intermediate)', url: 'https://www.hackerrank.com/certificates/ce67f09474c5', k: 4 },
    { title: 'SQL (Advanced)', url: 'https://www.hackerrank.com/certificates/479fa842b0ca', k: 4 }
  ],

  /* ------------------------------------------------------------------ projects (shown in the Projects section) */
  projects: [
    { k: 1,
      name: { en: 'RajAtlas', hi: 'RajAtlas', ur: 'RajAtlas' },
      tag: { en: 'Interactive atlas of Rajasthan', hi: 'राजस्थान का इंटरैक्टिव एटलस', ur: 'راجستھان کا انٹرایکٹو اٹلس' },
      body: {
        en: "Rajasthan's 33 Census 2011 districts drawn on an equal-area map, with five choropleth layers, a district panel and divisions. The map is written in plain JavaScript on a canvas, with no libraries. A Python pipeline reads the boundary files, measures areas on the ellipsoid and simplifies the outlines. Every number on screen names its source and year, and the work is covered by 17 pipeline checks, 15 maths tests and 44 browser checks.",
        hi: 'राजस्थान के 33 जनगणना 2011 ज़िले समक्षेत्र मानचित्र पर, पाँच वर्णमात्री परतों, ज़िला पैनल और संभागों के साथ। मानचित्र सादे JavaScript में canvas पर लिखा है, बिना किसी लाइब्रेरी के। एक Python पाइपलाइन सीमा फ़ाइलें पढ़ती है, दीर्घवृत्ताभ पर क्षेत्रफल मापती है और रूपरेखाएँ सरल बनाती है। स्क्रीन पर दिखने वाली हर संख्या अपना स्रोत और वर्ष बताती है, और काम की जाँच 17 पाइपलाइन जाँचों, 15 गणित परीक्षणों और 44 ब्राउज़र जाँचों से होती है।',
        ur: 'راجستھان کے 33 مردم شماری 2011 اضلاع مساوی رقبہ نقشے پر، پانچ کوروپلیتھ تہوں، ضلع پینل اور ڈویژنوں کے ساتھ۔ نقشہ سادہ JavaScript میں canvas پر لکھا ہے، بغیر کسی لائبریری کے۔ ایک Python پائپ لائن باؤنڈری فائلیں پڑھتی ہے، بیضوی سطح پر رقبہ ناپتی ہے اور خاکوں کو سادہ بناتی ہے۔ اسکرین پر نظر آنے والا ہر عدد اپنا ماخذ اور سال بتاتا ہے، اور کام کی جانچ 17 پائپ لائن جانچوں، 15 ریاضی ٹیسٹوں اور 44 براؤزر جانچوں سے ہوتی ہے۔'
      },
      stack: ['JavaScript', 'Canvas 2D', 'Python', 'pyshp · shapely · pyproj', 'Cloudflare Workers', 'English · हिन्दी · اردو'],
      links: [
        { label: { en: 'Open the atlas', hi: 'एटलस खोलें', ur: 'اٹلس کھولیں' }, url: 'https://rajatlas.shaankha81.workers.dev/' },
        { label: { en: 'Source on GitHub', hi: 'GitHub पर कोड', ur: 'GitHub پر کوڈ' }, url: 'https://github.com/shaankha81-sketch/rajatlas' }
      ] },
    { k: 2,
      name: { en: 'This portfolio', hi: 'यह पोर्टफ़ोलियो', ur: 'یہ پورٹ فولیو' },
      tag: { en: 'Hand-built, three-language site', hi: 'हाथ से बनी, तीन भाषाओं की साइट', ur: 'ہاتھ سے بنی، تین زبانوں کی سائٹ' },
      body: {
        en: 'The site you are on: plain HTML, CSS and JavaScript with no framework, in English, Hindi and Urdu (right-to-left), with light and dark themes and full keyboard access. It includes a C++ section, interactive tools for AI answer review, map projections and compass traverses, and C++ quick checks.',
        hi: 'जिस साइट पर आप हैं: बिना फ़्रेमवर्क के सादा HTML, CSS और JavaScript, अंग्रेज़ी, हिंदी और उर्दू (दाएँ से बाएँ) में, लाइट व डार्क थीम और पूरे कीबोर्ड उपयोग के साथ। इसमें C++ सेक्शन, AI उत्तर समीक्षा, मानचित्र प्रक्षेप और कम्पास सर्वेक्षण के इंटरैक्टिव टूल, और C++ झटपट जाँच शामिल हैं।',
        ur: 'جس سائٹ پر آپ ہیں: بغیر فریم ورک کے سادہ HTML، CSS اور JavaScript، انگریزی، ہندی اور اردو (دائیں سے بائیں) میں، لائٹ اور ڈارک تھیم اور مکمل کی بورڈ رسائی کے ساتھ۔ اس میں C++ سیکشن، اے آئی جواب کی جانچ، نقشہ پروجیکشن اور کمپاس سروے کے انٹرایکٹو ٹول، اور C++ فوری جانچ شامل ہیں۔'
      },
      stack: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Cloudflare'],
      links: [
        { label: { en: 'Source on GitHub', hi: 'GitHub पर कोड', ur: 'GitHub پر کوڈ' }, url: 'https://github.com/shaankha81-sketch/portfolio' }
      ] },
    { k: 3,
      name: { en: 'Problem-solving practice', hi: 'समस्या-समाधान अभ्यास', ur: 'مسئلہ حل کرنے کی مشق' },
      tag: { en: 'C++ and SQL on HackerRank and LeetCode', hi: 'HackerRank और LeetCode पर C++ व SQL', ur: 'HackerRank اور LeetCode پر C++ اور SQL' },
      body: {
        en: 'Regular practice in C++ on HackerRank and LeetCode: data structures, algorithms and the habit of checking a solution against edge cases. On HackerRank I also solve SQL problems and hold three SQL certificates (Basic, Intermediate, Advanced). I use Kaggle for data work in Python.',
        hi: 'HackerRank और LeetCode पर C++ में नियमित अभ्यास: डेटा स्ट्रक्चर, एल्गोरिद्म और हल को सीमांत मामलों पर जाँचने की आदत। HackerRank पर मैं SQL की समस्याएँ भी हल करता हूँ और मेरे पास तीन SQL प्रमाणपत्र हैं (Basic, Intermediate, Advanced)। Python में डेटा के काम के लिए मैं Kaggle इस्तेमाल करता हूँ।',
        ur: 'HackerRank اور LeetCode پر C++ میں باقاعدہ مشق: ڈیٹا اسٹرکچر، الگورتھم اور حل کو انتہائی صورتوں پر جانچنے کی عادت۔ HackerRank پر میں SQL کے مسائل بھی حل کرتا ہوں اور میرے پاس تین SQL سرٹیفکیٹ ہیں (Basic، Intermediate، Advanced)۔ Python میں ڈیٹا کے کام کے لیے میں Kaggle استعمال کرتا ہوں۔'
      },
      stack: ['C++', 'SQL', 'Data structures', 'Algorithms', 'Python', 'Kaggle'],
      links: [
        { label: { en: 'LeetCode', hi: 'LeetCode', ur: 'LeetCode' }, url: 'https://leetcode.com/u/Shaan_Sha/' },
        { label: { en: 'HackerRank', hi: 'HackerRank', ur: 'HackerRank' }, url: 'https://www.hackerrank.com/profile/shaankha81' },
        { label: { en: 'Kaggle', hi: 'Kaggle', ur: 'Kaggle' }, url: 'https://www.kaggle.com/shaankha01' }
      ] }
  ],

  /* ------------------------------------------------------------------ quick checks: the first option is the correct one */
  quiz: [
    { cat: 'cpp',
      q: { en: 'What does this print? ⁦int a = 5; int& r = a; r = 9; std::cout << a;⁩', hi: 'यह क्या प्रिंट करता है? ⁦int a = 5; int& r = a; r = 9; std::cout << a;⁩', ur: 'یہ کیا پرنٹ کرتا ہے؟ ⁦int a = 5; int& r = a; r = 9; std::cout << a;⁩' },
      opts: [
        { t: '9' },
        { t: '5', h: { en: 'r is a reference, another name for a, not a copy.', hi: 'r एक रेफ़रेंस है, यानी a का दूसरा नाम, कोई कॉपी नहीं।', ur: 'r ایک ریفرنس ہے، یعنی a کا دوسرا نام، کوئی کاپی نہیں۔' } },
        { t: '14', h: { en: 'Assigning through a reference replaces the value; it does not add to it.', hi: 'रेफ़रेंस के ज़रिए असाइन करने से मान बदलता है, जुड़ता नहीं।', ur: 'ریفرنس کے ذریعے اسائن کرنے سے قدر بدلتی ہے، جڑتی نہیں۔' } },
        { t: { en: 'Compile error', hi: 'कंपाइल एरर', ur: 'کمپائل ایرر' }, h: { en: 'This is valid C++: a non-const reference can be assigned to.', hi: 'यह मान्य C++ है: non-const रेफ़रेंस में मान असाइन किया जा सकता है।', ur: 'یہ درست C++ ہے: non-const ریفرنس میں قدر اسائن کی جا سکتی ہے۔' } }
      ],
      exp: { en: 'A reference is another name for the same object, so writing to r changes a.', hi: 'रेफ़रेंस उसी ऑब्जेक्ट का दूसरा नाम है, इसलिए r में लिखने से a बदल जाता है।', ur: 'ریفرنس اسی آبجیکٹ کا دوسرا نام ہے، اس لیے r میں لکھنے سے a بدل جاتا ہے۔' } },

    { cat: 'cpp',
      q: { en: 'Which container gives average O(1) lookup by key?', hi: 'कौन-सा कंटेनर कुंजी से औसतन O(1) खोज देता है?', ur: 'کون سا کنٹینر کلید سے اوسطاً O(1) تلاش دیتا ہے؟' },
      opts: [
        { t: 'std::unordered_map' },
        { t: 'std::map', h: { en: 'It is a balanced tree, so lookup is O(log n), not average O(1).', hi: 'यह संतुलित ट्री है, इसलिए खोज O(log n) है, औसतन O(1) नहीं।', ur: 'یہ متوازن ٹری ہے، اس لیے تلاش O(log n) ہے، اوسطاً O(1) نہیں۔' } },
        { t: 'std::vector', h: { en: 'Finding a value by key means scanning the elements: O(n).', hi: 'कुंजी से खोजने के लिए तत्व एक-एक करके देखने पड़ते हैं: O(n)।', ur: 'کلید سے تلاش کے لیے عناصر ایک ایک کر کے دیکھنے پڑتے ہیں: O(n)۔' } },
        { t: 'std::list', h: { en: 'A linked list has to be walked node by node: O(n).', hi: 'लिंक्ड लिस्ट में नोड-दर-नोड चलना पड़ता है: O(n)।', ur: 'لنکڈ لسٹ میں نوڈ بہ نوڈ چلنا پڑتا ہے: O(n)۔' } }
      ],
      exp: { en: 'unordered_map is a hash table: average O(1) lookup, and O(n) in the worst case when many keys collide.', hi: 'unordered_map हैश टेबल है: औसतन O(1) खोज, और बहुत टकराव हों तो सबसे बुरी स्थिति में O(n)।', ur: 'unordered_map ہیش ٹیبل ہے: اوسطاً O(1) تلاش، اور بہت ٹکراؤ ہوں تو بدترین صورت میں O(n)۔' } },

    { cat: 'cpp',
      q: { en: 'What is the time complexity of binary search on a sorted array of n elements?', hi: 'n तत्वों के क्रमबद्ध ऐरे में बाइनरी सर्च की समय जटिलता क्या है?', ur: 'n عناصر کے ترتیب شدہ ارے میں بائنری سرچ کی وقتی پیچیدگی کیا ہے؟' },
      opts: [
        { t: 'O(log n)' },
        { t: 'O(n)', h: { en: 'That is linear search, which looks at every element. Binary search discards half each step.', hi: 'यह लीनियर सर्च है, जो हर तत्व देखता है। बाइनरी सर्च हर बार आधा हिस्सा छोड़ देती है।', ur: 'یہ لینیئر سرچ ہے جو ہر عنصر دیکھتی ہے۔ بائنری سرچ ہر بار آدھا حصہ چھوڑ دیتی ہے۔' } },
        { t: 'O(n log n)', h: { en: 'That is roughly the cost of sorting, not of searching.', hi: 'यह अधिकतर क्रमबद्ध करने की लागत है, खोजने की नहीं।', ur: 'یہ زیادہ تر ترتیب دینے کی لاگت ہے، تلاش کی نہیں۔' } },
        { t: 'O(1)', h: { en: 'O(1) is when you already know the index; here you have to find the element.', hi: 'O(1) तब होता है जब इंडेक्स पहले से पता हो; यहाँ तत्व ढूँढना है।', ur: 'O(1) تب ہوتا ہے جب انڈیکس پہلے سے معلوم ہو؛ یہاں عنصر ڈھونڈنا ہے۔' } }
      ],
      exp: { en: 'Each comparison halves the range still to search, so about log₂ n steps are needed.', hi: 'हर तुलना के बाद खोज का दायरा आधा रह जाता है, इसलिए लगभग log₂ n चरण लगते हैं।', ur: 'ہر موازنے کے بعد تلاش کا دائرہ آدھا رہ جاتا ہے، اس لیے تقریباً log₂ n مرحلے لگتے ہیں۔' } },

    { cat: 'cpp',
      q: { en: 'Which smart pointer expresses sole ownership of an object?', hi: 'कौन-सा स्मार्ट पॉइंटर किसी ऑब्जेक्ट के एकल स्वामित्व को दर्शाता है?', ur: 'کون سا اسمارٹ پوائنٹر کسی آبجیکٹ کی واحد ملکیت ظاہر کرتا ہے؟' },
      opts: [
        { t: 'std::unique_ptr' },
        { t: 'std::shared_ptr', h: { en: 'It allows several owners, tracked by a reference count.', hi: 'इसमें रेफ़रेंस गिनती के साथ कई स्वामी हो सकते हैं।', ur: 'اس میں ریفرنس گنتی کے ساتھ کئی مالک ہو سکتے ہیں۔' } },
        { t: 'std::weak_ptr', h: { en: 'It only observes a shared_ptr and does not own the object.', hi: 'यह shared_ptr का केवल निरीक्षक है, स्वामी नहीं।', ur: 'یہ shared_ptr کا صرف مبصر ہے، مالک نہیں۔' } },
        { t: 'std::auto_ptr', h: { en: 'It was removed in C++17; unique_ptr replaced it.', hi: 'यह C++17 में हटा दिया गया; unique_ptr ने इसकी जगह ली।', ur: 'یہ C++17 میں ہٹا دیا گیا؛ unique_ptr نے اس کی جگہ لی۔' } }
      ],
      exp: { en: 'A unique_ptr cannot be copied, only moved, and it frees the object automatically when its owner goes away.', hi: 'unique_ptr की कॉपी नहीं हो सकती, केवल move हो सकता है, और स्वामी के ख़त्म होने पर ऑब्जेक्ट अपने-आप मुक्त हो जाता है।', ur: 'unique_ptr کی کاپی نہیں ہو سکتی، صرف move ہو سکتا ہے، اور مالک کے ختم ہونے پر آبجیکٹ خود بخود آزاد ہو جاتا ہے۔' } },

    { cat: 'cpp',
      q: { en: 'What does ⁦std::vector<int> v(5, 2);⁩ create?', hi: '⁦std::vector<int> v(5, 2);⁩ क्या बनाता है?', ur: '⁦std::vector<int> v(5, 2);⁩ کیا بناتا ہے؟' },
      opts: [
        { t: { en: 'Five elements, each equal to 2', hi: 'पाँच तत्व, हर एक 2', ur: 'پانچ عناصر، ہر ایک 2' } },
        { t: { en: 'Two elements, each equal to 5', hi: 'दो तत्व, हर एक 5', ur: 'دو عناصر، ہر ایک 5' }, h: { en: 'The first argument is the size and the second is the value of every element.', hi: 'पहला तर्क आकार है, दूसरा हर तत्व का मान।', ur: 'پہلا آرگیومنٹ سائز ہے، دوسرا ہر عنصر کی قدر۔' } },
        { t: { en: 'One element holding the sum, 7', hi: 'एक तत्व जिसमें योग 7 है', ur: 'ایک عنصر جس میں مجموعہ 7 ہے' }, h: { en: 'The two numbers are not added together.', hi: 'दोनों संख्याएँ जोड़ी नहीं जातीं।', ur: 'دونوں اعداد جمع نہیں کیے جاتے۔' } },
        { t: { en: 'Five elements, left uninitialised', hi: 'पाँच तत्व, बिना मान के', ur: 'پانچ عناصر، بغیر قدر کے' }, h: { en: 'The second argument supplies a value, so every element is 2.', hi: 'दूसरा तर्क मान देता है, इसलिए सारे तत्व 2 होते हैं।', ur: 'دوسرا آرگیومنٹ قدر دیتا ہے، اس لیے تمام عناصر 2 ہوتے ہیں۔' } }
      ],
      exp: { en: 'vector(n, value) creates n elements and fills each one with value.', hi: 'vector(n, value) n तत्व बनाता है और हर एक को value से भर देता है।', ur: 'vector(n, value) n عناصر بناتا ہے اور ہر ایک کو value سے بھر دیتا ہے۔' } },

    { cat: 'cpp',
      q: { en: 'After ⁦int i = 3; int j = i++;⁩ what are i and j?', hi: '⁦int i = 3; int j = i++;⁩ के बाद i और j क्या हैं?', ur: '⁦int i = 3; int j = i++;⁩ کے بعد i اور j کیا ہیں؟' },
      opts: [
        { t: 'i = 4, j = 3' },
        { t: 'i = 4, j = 4', h: { en: 'Post-increment returns the old value first, then increases.', hi: 'पोस्ट-इन्क्रिमेंट पुराना मान लौटाता है, फिर बढ़ाता है।', ur: 'پوسٹ انکریمنٹ پرانی قدر لوٹاتا ہے، پھر بڑھاتا ہے۔' } },
        { t: 'i = 3, j = 4', h: { en: 'i is the one that increases; j receives the old value, not the other way round.', hi: 'i बढ़ता है, j को पुराना मान मिलता है, उल्टा नहीं।', ur: 'i بڑھتا ہے، j کو پرانی قدر ملتی ہے، الٹا نہیں۔' } },
        { t: 'i = 3, j = 3', h: { en: 'i++ does increase i.', hi: 'i++ से i बढ़ता ज़रूर है।', ur: 'i++ سے i بڑھتا ضرور ہے۔' } }
      ],
      exp: { en: 'i++ hands the old value (3) to j and then makes i equal to 4. With ++i, j would be 4 as well.', hi: 'i++ पहले पुराना मान (3) j को देता है, फिर i को 4 कर देता है। ++i होता तो j भी 4 होता।', ur: 'i++ پہلے پرانی قدر (3) j کو دیتا ہے، پھر i کو 4 کر دیتا ہے۔ ++i ہوتا تو j بھی 4 ہوتا۔' } },

    { cat: 'cpp',
      q: { en: 'Which keyword stops a derived class from overriding a virtual function any further?', hi: 'कौन-सा कीवर्ड किसी व्युत्पन्न क्लास को virtual फ़ंक्शन को आगे ओवरराइड करने से रोकता है?', ur: 'کون سا کی ورڈ کسی ماخوذ کلاس کو virtual فنکشن کو آگے اووررائڈ کرنے سے روکتا ہے؟' },
      opts: [
        { t: 'final' },
        { t: 'const', h: { en: 'const says the function will not change the object; it does not stop overriding.', hi: 'const बताता है कि फ़ंक्शन ऑब्जेक्ट नहीं बदलेगा; ओवरराइड नहीं रोकता।', ur: 'const بتاتا ہے کہ فنکشن آبجیکٹ نہیں بدلے گا؛ اووررائڈ نہیں روکتا۔' } },
        { t: 'static', h: { en: 'A static member function cannot be virtual at all.', hi: 'static फ़ंक्शन virtual होते ही नहीं।', ur: 'static فنکشن virtual ہوتے ہی نہیں۔' } },
        { t: 'explicit', h: { en: 'explicit prevents implicit conversions, not overriding.', hi: 'explicit अप्रत्यक्ष रूपांतरण रोकता है, ओवरराइड नहीं।', ur: 'explicit بالواسطہ تبدیلی روکتا ہے، اووررائڈ نہیں۔' } }
      ],
      exp: { en: 'Marking a virtual function final means no class derived from here can override it again.', hi: 'virtual फ़ंक्शन को final करने पर आगे की कोई भी क्लास उसे दोबारा ओवरराइड नहीं कर सकती।', ur: 'virtual فنکشن کو final کرنے پر آگے کی کوئی بھی کلاس اسے دوبارہ اووررائڈ نہیں کر سکتی۔' } },

    { cat: 'cpp',
      q: { en: 'Which STL container adapter is first-in, first-out?', hi: 'कौन-सा STL कंटेनर एडैप्टर पहले आओ, पहले जाओ (FIFO) है?', ur: 'کون سا STL کنٹینر اڈاپٹر پہلے آئے، پہلے جائے (FIFO) ہے؟' },
      opts: [
        { t: 'std::queue' },
        { t: 'std::stack', h: { en: 'A stack is last-in, first-out.', hi: 'stack अंतिम आओ, पहले जाओ (LIFO) है।', ur: 'stack آخر میں آئے، پہلے جائے (LIFO) ہے۔' } },
        { t: 'std::priority_queue', h: { en: 'It gives back the largest element first by default, not the oldest.', hi: 'यह डिफ़ॉल्ट रूप से सबसे बड़ा तत्व पहले निकालती है, सबसे पुराना नहीं।', ur: 'یہ بطورِ طے شدہ سب سے بڑا عنصر پہلے نکالتی ہے، سب سے پرانا نہیں۔' } },
        { t: 'std::set', h: { en: 'A set keeps sorted, unique elements; arrival order does not matter to it.', hi: 'set क्रमबद्ध अद्वितीय तत्व रखता है; आने के क्रम से उसका संबंध नहीं।', ur: 'set ترتیب شدہ منفرد عناصر رکھتا ہے؛ آنے کی ترتیب سے اس کا تعلق نہیں۔' } }
      ],
      exp: { en: 'In a queue, push adds at the back and pop removes from the front, so the oldest element leaves first.', hi: 'queue में push पीछे जोड़ता है और pop आगे से हटाता है, इसलिए जो पहले आया वही पहले निकलता है।', ur: 'queue میں push پیچھے جوڑتا ہے اور pop آگے سے ہٹاتا ہے، اس لیے جو پہلے آیا وہی پہلے نکلتا ہے۔' } },

    { cat: 'cpp',
      q: { en: 'What does ⁦std::cout << sizeof(char);⁩ print?', hi: '⁦std::cout << sizeof(char);⁩ क्या प्रिंट करता है?', ur: '⁦std::cout << sizeof(char);⁩ کیا پرنٹ کرتا ہے؟' },
      opts: [
        { t: '1' },
        { t: '8', h: { en: 'sizeof counts bytes, not bits; a byte is usually 8 bits.', hi: 'sizeof बाइट गिनता है, बिट नहीं; एक बाइट आमतौर पर 8 बिट का होता है।', ur: 'sizeof بائٹ گنتا ہے، بٹ نہیں؛ ایک بائٹ عموماً 8 بٹ کا ہوتا ہے۔' } },
        { t: '2', h: { en: 'That is the usual size of a short, not of a char.', hi: 'यह आम तौर पर short का आकार है, char का नहीं।', ur: 'یہ عموماً short کا سائز ہے، char کا نہیں۔' } },
        { t: { en: 'It depends on the compiler', hi: 'यह कंपाइलर पर निर्भर करता है', ur: 'یہ کمپائلر پر منحصر ہے' }, h: { en: 'Not for char: the standard fixes it at 1.', hi: 'char के लिए नहीं: मानक इसे 1 तय करता है।', ur: 'char کے لیے نہیں: معیار اسے 1 طے کرتا ہے۔' } }
      ],
      exp: { en: 'The C++ standard defines sizeof(char) as 1; the sizes of other types are measured in that unit.', hi: 'C++ मानक में sizeof(char) हमेशा 1 होता है; बाकी प्रकारों के आकार इसी इकाई में नापे जाते हैं।', ur: 'C++ معیار میں sizeof(char) ہمیشہ 1 ہوتا ہے؛ باقی اقسام کے سائز اسی اکائی میں ناپے جاتے ہیں۔' } },

    { cat: 'cpp',
      q: { en: 'Why pass a large object to a function as const T& instead of T?', hi: 'किसी बड़े ऑब्जेक्ट को फ़ंक्शन में T की जगह const T& से क्यों भेजते हैं?', ur: 'کسی بڑے آبجیکٹ کو فنکشن میں T کی جگہ const T& سے کیوں بھیجتے ہیں؟' },
      opts: [
        { t: { en: 'It avoids copying the object and stops the function changing it', hi: 'इससे कॉपी नहीं बनती और फ़ंक्शन उसे बदल भी नहीं सकता', ur: 'اس سے کاپی نہیں بنتی اور فنکشن اسے بدل بھی نہیں سکتا' } },
        { t: { en: 'It makes the function run in parallel', hi: 'इससे फ़ंक्शन समानांतर चलता है', ur: 'اس سے فنکشن متوازی چلتا ہے' }, h: { en: 'References have nothing to do with parallelism.', hi: 'रेफ़रेंस का समानांतरता से कोई संबंध नहीं है।', ur: 'ریفرنس کا متوازی چلنے سے کوئی تعلق نہیں۔' } },
        { t: { en: 'It hands ownership of the object to the function', hi: 'इससे ऑब्जेक्ट का स्वामित्व फ़ंक्शन को मिल जाता है', ur: 'اس سے آبجیکٹ کی ملکیت فنکشن کو مل جاتی ہے' }, h: { en: 'Handing over ownership is what std::move and unique_ptr are for.', hi: 'स्वामित्व देने के लिए std::move या unique_ptr होते हैं।', ur: 'ملکیت دینے کے لیے std::move یا unique_ptr ہوتے ہیں۔' } },
        { t: { en: 'It lets the function return a bigger value', hi: 'इससे फ़ंक्शन बड़ा मान लौटा सकता है', ur: 'اس سے فنکشن بڑی قدر لوٹا سکتا ہے' }, h: { en: 'It has no effect on what the function returns.', hi: 'लौटाए जाने वाले मान पर इसका कोई असर नहीं पड़ता।', ur: 'لوٹائی جانے والی قدر پر اس کا کوئی اثر نہیں پڑتا۔' } }
      ],
      exp: { en: 'A const reference skips the copy, which is expensive for a large object, and protects the original from being changed by mistake.', hi: 'const रेफ़रेंस ऑब्जेक्ट की कॉपी नहीं बनाता (बड़े ऑब्जेक्ट के लिए महँगा) और मूल को ग़लती से बदले जाने से भी बचाता है।', ur: 'const ریفرنس آبجیکٹ کی کاپی نہیں بناتا (بڑے آبجیکٹ کے لیے مہنگا) اور اصل کو غلطی سے بدلے جانے سے بھی بچاتا ہے۔' } },

    { cat: 'cpp',
      q: { en: 'What is the amortised cost of std::vector::push_back?', hi: 'std::vector::push_back की औसत (amortised) लागत क्या है?', ur: 'std::vector::push_back کی اوسط (amortised) لاگت کیا ہے؟' },
      opts: [
        { t: 'O(1)' },
        { t: 'O(n)', h: { en: 'One push that reallocates can cost O(n), but averaged over many pushes it is O(1).', hi: 'एक अकेला push, जो नई मेमोरी लेता है, O(n) हो सकता है, पर बहुत सारे push पर औसत O(1) रहता है।', ur: 'ایک اکیلا push، جو نئی میموری لیتا ہے، O(n) ہو سکتا ہے، مگر بہت سے push پر اوسط O(1) رہتا ہے۔' } },
        { t: 'O(log n)', h: { en: 'There is no search or tree here; growing the capacity geometrically keeps the average constant.', hi: 'यहाँ कोई खोज या ट्री नहीं है; क्षमता गुणोत्तर रूप से बढ़ने से औसत स्थिर रहता है।', ur: 'یہاں کوئی تلاش یا ٹری نہیں؛ گنجائش کے گُنوتری طور پر بڑھنے سے اوسط مستقل رہتا ہے۔' } },
        { t: 'O(n log n)', h: { en: 'That is the cost of sorting; push_back is far cheaper.', hi: 'यह क्रमबद्ध करने की लागत है; push_back उससे बहुत सस्ता है।', ur: 'یہ ترتیب دینے کی لاگت ہے؛ push_back اس سے بہت سستا ہے۔' } }
      ],
      exp: { en: 'When the capacity is full the vector grows by a factor (often 2). That costly step is rare, so on average each push is O(1).', hi: 'क्षमता भरने पर वेक्टर एक गुणक से (अक्सर 2) बढ़ता है। यह महँगा कदम कभी-कभार होता है, इसलिए औसतन हर push O(1) पड़ता है।', ur: 'گنجائش بھرنے پر ویکٹر ایک گُنک سے (اکثر 2) بڑھتا ہے۔ یہ مہنگا قدم کبھی کبھار ہوتا ہے، اس لیے اوسطاً ہر push O(1) پڑتا ہے۔' } },

    { cat: 'geo',
      q: { en: 'Which Köppen climate type fits Jaisalmer, a hot desert?', hi: 'गर्म मरुस्थल जैसलमेर के लिए कौन-सा कोपेन जलवायु प्रकार सही है?', ur: 'گرم صحرا جیسلمیر کے لیے کوپن کی کون سی آب و ہوائی قسم درست ہے؟' },
      opts: [
        { t: 'BWh' },
        { t: 'BSh', h: { en: 'BS is semi-arid steppe, a little wetter than a true desert.', hi: 'BS अर्ध-शुष्क स्टेपी है, असली मरुस्थल से थोड़ा अधिक आर्द्र।', ur: 'BS نیم خشک سٹیپ ہے، اصل صحرا سے تھوڑا زیادہ نم۔' } },
        { t: 'Aw', h: { en: 'A is tropical humid; Jaisalmer gets far too little rain for that.', hi: 'A उष्णकटिबंधीय आर्द्र है; जैसलमेर में इसके लिए वर्षा बहुत कम है।', ur: 'A استوائی مرطوب ہے؛ جیسلمیر میں اس کے لیے بارش بہت کم ہے۔' } },
        { t: 'Cwa', h: { en: 'C is mild temperate with enough rain; dry climates belong to group B.', hi: 'C पर्याप्त वर्षा वाली मृदु शीतोष्ण है; शुष्क जलवायु B समूह में आती है।', ur: 'C مناسب بارش والی معتدل ہے؛ خشک آب و ہوا B گروپ میں آتی ہے۔' } }
      ],
      exp: { en: 'B = dry, W = desert (Wüste), h = hot (mean annual temperature above 18 °C). Jaisalmer is a classic BWh station.', hi: 'B = शुष्क, W = मरुस्थल (Wüste), h = गर्म (वार्षिक औसत तापमान 18 °C से अधिक)। जैसलमेर एक विशिष्ट BWh स्टेशन है।', ur: 'B = خشک، W = صحرا (Wüste)، h = گرم (سالانہ اوسط درجۂ حرارت 18 °C سے زیادہ)۔ جیسلمیر ایک مثالی BWh اسٹیشن ہے۔' } },

    { cat: 'map',
      q: { en: 'On a 1:50,000 map, two points are 3 cm apart. What is the distance on the ground?', hi: '1:50,000 के मानचित्र पर दो बिंदु 3 सेमी दूर हैं। ज़मीन पर दूरी क्या है?', ur: '1:50,000 کے نقشے پر دو نقطے 3 سینٹی میٹر دور ہیں۔ زمین پر فاصلہ کیا ہے؟' },
      opts: [
        { t: { en: '1.5 km', hi: '1.5 किमी', ur: '1.5 کلومیٹر' } },
        { t: { en: '15 km', hi: '15 किमी', ur: '15 کلومیٹر' }, h: { en: '3 × 50,000 = 150,000 cm. Check how many cm make 1 km.', hi: '3 × 50,000 = 150,000 सेमी। देखें 1 किमी में कितने सेमी होते हैं।', ur: '3 × 50,000 = 150,000 سینٹی میٹر۔ دیکھیں 1 کلومیٹر میں کتنے سینٹی میٹر ہوتے ہیں۔' } },
        { t: { en: '150 m', hi: '150 मी', ur: '150 میٹر' }, h: { en: '150,000 cm is 1,500 m, not 150 m.', hi: '150,000 सेमी = 1,500 मी, 150 मी नहीं।', ur: '150,000 سینٹی میٹر = 1,500 میٹر، 150 نہیں۔' } },
        { t: { en: '0.15 km', hi: '0.15 किमी', ur: '0.15 کلومیٹر' }, h: { en: 'That is 150 m. Recheck the conversion from centimetres.', hi: 'यह 150 मी है। सेंटीमीटर से रूपांतरण दोबारा जाँचें।', ur: 'یہ 150 میٹر ہے۔ سینٹی میٹر سے تبدیلی دوبارہ جانچیں۔' } }
      ],
      exp: { en: '3 × 50,000 = 150,000 cm = 1,500 m = 1.5 km.', hi: '3 × 50,000 = 150,000 सेमी = 1,500 मी = 1.5 किमी।', ur: '3 × 50,000 = 150,000 سینٹی میٹر = 1,500 میٹر = 1.5 کلومیٹر۔' } },

    { cat: 'map',
      q: { en: 'What is the reduced bearing of a whole-circle bearing of 300°?', hi: '300° के पूर्ण वृत्त दिक्मान का समानीत दिक्मान क्या है?', ur: '300° کی مکمل دائرہ سمت کی مختصر سمت کیا ہے؟' },
      opts: [
        { t: 'N 60° W' },
        { t: 'N 30° W', h: { en: 'A reduced bearing is measured from N or S, not from the E–W line: use 360° − 300°.', hi: 'समानीत दिक्मान N या S से मापा जाता है, E–W रेखा से नहीं: 360° − 300° लें।', ur: 'مختصر سمت N یا S سے ناپی جاتی ہے، E–W لکیر سے نہیں: 360° − 300° لیں۔' } },
        { t: 'S 60° W', h: { en: '300° lies between 270° and 360°: the north-west quadrant.', hi: '300° 270° और 360° के बीच है: उत्तर-पश्चिम चतुर्थांश।', ur: '300° 270° اور 360° کے درمیان ہے: شمال مغربی ربع۔' } },
        { t: 'N 60° E', h: { en: 'Easterly bearings lie between 0° and 180°.', hi: 'पूर्व की ओर के दिक्मान 0° और 180° के बीच होते हैं।', ur: 'مشرقی سمتیں 0° اور 180° کے درمیان ہوتی ہیں۔' } }
      ],
      exp: { en: '300° is in the NW quadrant, so RB = N (360° − 300°) W = N 60° W.', hi: '300° उत्तर-पश्चिम चतुर्थांश में है, इसलिए RB = N (360° − 300°) W = N 60° W।', ur: '300° شمال مغربی ربع میں ہے، اس لیے RB = N (360° − 300°) W = N 60° W۔' } },

    { cat: 'map',
      q: { en: 'Which map shades whole areas by a value per unit area, such as population density by district?', hi: 'कौन-सा मानचित्र पूरे क्षेत्रों को प्रति इकाई क्षेत्र मान से छायांकित करता है, जैसे ज़िलेवार जनसंख्या घनत्व?', ur: 'کون سا نقشہ پورے علاقوں کو فی اکائی رقبہ قدر سے رنگتا ہے، جیسے ضلع وار آبادی کی کثافت؟' },
      opts: [
        { t: { en: 'Choropleth', hi: 'वर्णमात्री (कोरोप्लेथ)', ur: 'کوروپلیتھ' } },
        { t: { en: 'Isopleth', hi: 'सममान रेखा (आइसोप्लेथ)', ur: 'آئسوپلیتھ' }, h: { en: 'Isopleths are lines joining equal values, like isotherms.', hi: 'आइसोप्लेथ समान मानों को जोड़ने वाली रेखाएँ हैं, जैसे समताप रेखाएँ।', ur: 'آئسوپلیتھ برابر قدروں کو جوڑنے والی لکیریں ہیں، جیسے ہم حرارت لکیریں۔' } },
        { t: { en: 'Dot map', hi: 'बिंदु मानचित्र', ur: 'نقطہ نقشہ' }, h: { en: 'A dot map places one dot for a fixed number of units.', hi: 'बिंदु मानचित्र एक निश्चित संख्या के लिए एक बिंदु लगाता है।', ur: 'نقطہ نقشہ ایک مقررہ تعداد کے لیے ایک نقطہ لگاتا ہے۔' } },
        { t: { en: 'Chorochromatic', hi: 'रंगारेख (कोरोक्रोमैटिक)', ur: 'کوروکرومیٹک' }, h: { en: 'Colour patches show categories, like soil types, not values.', hi: 'रंग के धब्बे श्रेणियाँ दिखाते हैं, जैसे मिट्टी के प्रकार, मान नहीं।', ur: 'رنگ کے دھبے اقسام دکھاتے ہیں، جیسے مٹی کی قسمیں، قدریں نہیں۔' } }
      ],
      exp: { en: 'A choropleth map shades each administrative unit by a ratio such as persons per km².', hi: 'वर्णमात्री मानचित्र हर प्रशासनिक इकाई को एक अनुपात, जैसे प्रति वर्ग किमी व्यक्ति, से छायांकित करता है।', ur: 'کوروپلیتھ نقشہ ہر انتظامی اکائی کو ایک تناسب، جیسے فی مربع کلومیٹر افراد، سے رنگتا ہے۔' } },

    { cat: 'stat',
      q: { en: 'What is the mean of 12, 15, 18, 15, 20?', hi: '12, 15, 18, 15, 20 का माध्य क्या है?', ur: '12, 15, 18, 15, 20 کا اوسط کیا ہے؟' },
      opts: [
        { t: '16' },
        { t: '15', h: { en: '15 is the median and the mode. The mean is the sum divided by the count.', hi: '15 माध्यिका और बहुलक है। माध्य = योग ÷ संख्या।', ur: '15 وسطانیہ اور عادہ ہے۔ اوسط = مجموعہ ÷ تعداد۔' } },
        { t: '18', h: { en: 'Add all five values and divide by 5.', hi: 'पाँचों मान जोड़कर 5 से भाग दें।', ur: 'پانچوں قدریں جمع کر کے 5 سے تقسیم کریں۔' } },
        { t: '80', h: { en: '80 is the sum. Divide by the number of values.', hi: '80 योग है। मानों की संख्या से भाग दें।', ur: '80 مجموعہ ہے۔ قدروں کی تعداد سے تقسیم کریں۔' } }
      ],
      exp: { en: '(12 + 15 + 18 + 15 + 20) ÷ 5 = 80 ÷ 5 = 16.', hi: '(12 + 15 + 18 + 15 + 20) ÷ 5 = 80 ÷ 5 = 16।', ur: '(12 + 15 + 18 + 15 + 20) ÷ 5 = 80 ÷ 5 = 16۔' } },

    { cat: 'stat',
      q: { en: 'What is the standard deviation of 2, 4, 4, 4, 5, 5, 7, 9?', hi: '2, 4, 4, 4, 5, 5, 7, 9 का मानक विचलन क्या है?', ur: '2, 4, 4, 4, 5, 5, 7, 9 کا معیاری انحراف کیا ہے؟' },
      opts: [
        { t: '2' },
        { t: '4', h: { en: '4 is the variance. Take its square root.', hi: '4 प्रसरण है। इसका वर्गमूल लें।', ur: '4 تغیر ہے۔ اس کا جذر لیں۔' } },
        { t: '5', h: { en: '5 is the mean — the centre, not the spread.', hi: '5 माध्य है — केंद्र, फैलाव नहीं।', ur: '5 اوسط ہے — مرکز، پھیلاؤ نہیں۔' } },
        { t: '32', h: { en: '32 is the sum of squared deviations. Divide by n, then take the root.', hi: '32 वर्ग विचलनों का योग है। n से भाग देकर वर्गमूल लें।', ur: '32 مربع انحرافات کا مجموعہ ہے۔ n سے تقسیم کر کے جذر لیں۔' } }
      ],
      exp: { en: 'Mean = 40 ÷ 8 = 5. Squared deviations: 9, 1, 1, 1, 0, 0, 4, 16, sum 32. Variance = 32 ÷ 8 = 4, so σ = √4 = 2.', hi: 'माध्य = 40 ÷ 8 = 5। वर्ग विचलन: 9, 1, 1, 1, 0, 0, 4, 16, योग 32। प्रसरण = 32 ÷ 8 = 4, इसलिए σ = √4 = 2।', ur: 'اوسط = 40 ÷ 8 = 5۔ مربع انحرافات: 9, 1, 1, 1, 0, 0, 4, 16، مجموعہ 32۔ تغیر = 32 ÷ 8 = 4، اس لیے σ = √4 = 2۔' } },

    { cat: 'map',
      q: { en: 'Which projection shows every great circle as a straight line?', hi: 'कौन-सा प्रक्षेप हर वृहत वृत्त को सीधी रेखा के रूप में दिखाता है?', ur: 'کون سی پروجیکشن ہر عظیم دائرے کو سیدھی لکیر کی صورت میں دکھاتی ہے؟' },
      opts: [
        { t: { en: 'Gnomonic', hi: 'नोमोनिक', ur: 'نومونک' } },
        { t: { en: 'Mercator', hi: 'मर्केटर', ur: 'مرکیٹر' }, h: { en: 'Mercator straightens lines of constant bearing (rhumb lines), not great circles.', hi: 'मर्केटर स्थिर दिक्मान वाली रेखाओं को सीधा करता है, वृहत वृत्तों को नहीं।', ur: 'مرکیٹر مستقل سمت والی لکیروں کو سیدھا کرتی ہے، عظیم دائروں کو نہیں۔' } },
        { t: { en: 'Stereographic', hi: 'त्रिविम', ur: 'اسٹیریوگرافک' }, h: { en: 'Stereographic keeps circles as circles, but great circles curve.', hi: 'त्रिविम वृत्तों को वृत्त रखता है, पर वृहत वृत्त मुड़ जाते हैं।', ur: 'اسٹیریوگرافک دائروں کو دائرے رکھتی ہے، مگر عظیم دائرے مڑ جاتے ہیں۔' } },
        { t: { en: 'Mollweide', hi: 'मॉलवाइड', ur: 'مولوائیڈ' }, h: { en: 'Mollweide is equal-area; its meridians are curved.', hi: 'मॉलवाइड समक्षेत्र है; उसकी देशांतर रेखाएँ वक्र हैं।', ur: 'مولوائیڈ مساوی رقبہ ہے؛ اس کی طول بلد لکیریں خم دار ہیں۔' } }
      ],
      exp: { en: 'The gnomonic projection is drawn from the centre of the globe, so every plane through the centre — a great circle — becomes a straight line. Try it in the lab above.', hi: 'नोमोनिक प्रक्षेप ग्लोब के केंद्र से बनता है, इसलिए केंद्र से गुज़रने वाला हर तल — एक वृहत वृत्त — सीधी रेखा बनता है। ऊपर लैब में आज़माएँ।', ur: 'نومونک پروجیکشن گلوب کے مرکز سے بنتی ہے، اس لیے مرکز سے گزرنے والی ہر سطح — ایک عظیم دائرہ — سیدھی لکیر بنتی ہے۔ اوپر لیب میں آزمائیں۔' } },

    { cat: 'geo',
      q: { en: 'Which district of Rajasthan does the Tropic of Cancer pass through?', hi: 'कर्क रेखा राजस्थान के किस ज़िले से गुज़रती है?', ur: 'خط سرطان راجستھان کے کس ضلع سے گزرتا ہے؟' },
      opts: [
        { t: { en: 'Banswara', hi: 'बांसवाड़ा', ur: 'بانسواڑہ' } },
        { t: { en: 'Jaisalmer', hi: 'जैसलमेर', ur: 'جیسلمیر' }, h: { en: 'Jaisalmer lies far to the north, around 27°N.', hi: 'जैसलमेर बहुत उत्तर में, लगभग 27°N पर है।', ur: 'جیسلمیر بہت شمال میں، تقریباً 27°N پر ہے۔' } },
        { t: { en: 'Bikaner', hi: 'बीकानेर', ur: 'بیکانیر' }, h: { en: 'Bikaner is near 28°N; the Tropic is at about 23.5°N.', hi: 'बीकानेर लगभग 28°N पर है; कर्क रेखा लगभग 23.5°N पर है।', ur: 'بیکانیر تقریباً 28°N پر ہے؛ خط سرطان تقریباً 23.5°N پر ہے۔' } },
        { t: { en: 'Bharatpur', hi: 'भरतपुर', ur: 'بھرت پور' }, h: { en: 'Bharatpur is in the north-east, near 27°N.', hi: 'भरतपुर उत्तर-पूर्व में, लगभग 27°N पर है।', ur: 'بھرت پور شمال مشرق میں، تقریباً 27°N پر ہے۔' } }
      ],
      exp: { en: 'The Tropic of Cancer (about 23.5°N) crosses the southern tip of Rajasthan in Banswara district.', hi: 'कर्क रेखा (लगभग 23.5°N) राजस्थान के दक्षिणी सिरे पर बांसवाड़ा ज़िले से गुज़रती है।', ur: 'خط سرطان (تقریباً 23.5°N) راجستھان کے جنوبی سرے پر بانسواڑہ ضلع سے گزرتا ہے۔' } },

    { cat: 'geo',
      q: { en: 'Where does the Luni river of Rajasthan end?', hi: 'राजस्थान की लूणी नदी कहाँ समाप्त होती है?', ur: 'راجستھان کا دریائے لونی کہاں ختم ہوتا ہے؟' },
      opts: [
        { t: { en: 'In the Rann of Kutch', hi: 'कच्छ के रण में', ur: 'رن آف کچھ میں' } },
        { t: { en: 'In Sambhar Lake', hi: 'सांभर झील में', ur: 'سانبھر جھیل میں' }, h: { en: 'Sambhar is an inland salt lake fed by small streams, not by the Luni.', hi: 'सांभर एक अंतःस्थलीय खारी झील है जिसे छोटी धाराएँ भरती हैं, लूणी नहीं।', ur: 'سانبھر ایک اندرونی نمکین جھیل ہے جسے چھوٹی ندیاں بھرتی ہیں، لونی نہیں۔' } },
        { t: { en: 'In the Chambal', hi: 'चंबल में', ur: 'چمبل میں' }, h: { en: 'The Chambal flows north-east towards the Yamuna; the Luni flows south-west.', hi: 'चंबल उत्तर-पूर्व की ओर यमुना में जाती है; लूणी दक्षिण-पश्चिम की ओर बहती है।', ur: 'چمبل شمال مشرق کی طرف جمنا میں جاتا ہے؛ لونی جنوب مغرب کی طرف بہتا ہے۔' } },
        { t: { en: 'Directly in the Arabian Sea', hi: 'सीधे अरब सागर में', ur: 'براہ راست بحیرۂ عرب میں' }, h: { en: 'It never reaches the open sea; it is lost in a salt marsh first.', hi: 'यह खुले समुद्र तक नहीं पहुँचती; पहले ही एक खारे दलदल में खो जाती है।', ur: 'یہ کھلے سمندر تک نہیں پہنچتا؛ پہلے ہی ایک نمکین دلدل میں کھو جاتا ہے۔' } }
      ],
      exp: { en: 'The Luni rises in the Aravallis near Ajmer and flows south-west to the marshes of the Rann of Kutch. Its water turns salty below Balotra.', hi: 'लूणी अजमेर के पास अरावली से निकलकर दक्षिण-पश्चिम बहती है और कच्छ के रण के दलदल में समाप्त होती है। बालोतरा के बाद इसका पानी खारा हो जाता है।', ur: 'لونی اجمیر کے قریب اراولی سے نکل کر جنوب مغرب بہتا ہے اور رن آف کچھ کی دلدل میں ختم ہوتا ہے۔ بالوترا کے بعد اس کا پانی نمکین ہو جاتا ہے۔' } },

    { cat: 'geo',
      q: { en: 'Which of these seas has the highest surface salinity?', hi: 'इनमें से किस सागर की सतही लवणता सबसे अधिक है?', ur: 'ان میں سے کس سمندر کی سطحی نمکینی سب سے زیادہ ہے؟' },
      opts: [
        { t: { en: 'Red Sea', hi: 'लाल सागर', ur: 'بحیرۂ احمر' } },
        { t: { en: 'Baltic Sea', hi: 'बाल्टिक सागर', ur: 'بحیرۂ بالٹک' }, h: { en: 'Many rivers and low evaporation make the Baltic one of the least salty seas.', hi: 'अनेक नदियों और कम वाष्पीकरण से बाल्टिक सबसे कम खारे सागरों में है।', ur: 'بہت سے دریاؤں اور کم تبخیر سے بالٹک سب سے کم نمکین سمندروں میں ہے۔' } },
        { t: { en: 'Bay of Bengal', hi: 'बंगाल की खाड़ी', ur: 'خلیج بنگال' }, h: { en: 'The Ganga and Brahmaputra pour in fresh water, lowering salinity.', hi: 'गंगा और ब्रह्मपुत्र मीठा पानी लाती हैं, जिससे लवणता घटती है।', ur: 'گنگا اور برہم پتر میٹھا پانی لاتے ہیں، جس سے نمکینی کم ہوتی ہے۔' } },
        { t: { en: 'Arctic Ocean', hi: 'आर्कटिक महासागर', ur: 'بحر منجمد شمالی' }, h: { en: 'Melting ice and low evaporation keep Arctic water less salty.', hi: 'पिघलती बर्फ़ और कम वाष्पीकरण से आर्कटिक का पानी कम खारा रहता है।', ur: 'پگھلتی برف اور کم تبخیر سے آرکٹک کا پانی کم نمکین رہتا ہے۔' } }
      ],
      exp: { en: 'The Red Sea is hot, almost enclosed and fed by no large river, so evaporation pushes its salinity to about 40‰ or more.', hi: 'लाल सागर गर्म, लगभग घिरा हुआ है और इसमें कोई बड़ी नदी नहीं गिरती, इसलिए वाष्पीकरण से लवणता लगभग 40‰ या अधिक हो जाती है।', ur: 'بحیرۂ احمر گرم، تقریباً گھرا ہوا ہے اور اس میں کوئی بڑا دریا نہیں گرتا، اس لیے تبخیر سے نمکینی تقریباً 40‰ یا اس سے زیادہ ہو جاتی ہے۔' } },

    { cat: 'soc',
      q: { en: 'Which constitutional amendment gave constitutional status to Panchayati Raj?', hi: 'किस संविधान संशोधन ने पंचायती राज को संवैधानिक दर्जा दिया?', ur: 'کس آئینی ترمیم نے پنچایتی راج کو آئینی درجہ دیا؟' },
      opts: [
        { t: { en: '73rd Amendment (1992)', hi: '73वाँ संशोधन (1992)', ur: '73ویں ترمیم (1992)' } },
        { t: { en: '74th Amendment (1992)', hi: '74वाँ संशोधन (1992)', ur: '74ویں ترمیم (1992)' }, h: { en: 'The 74th Amendment covers urban local bodies (municipalities).', hi: '74वाँ संशोधन शहरी स्थानीय निकायों (नगरपालिकाओं) से जुड़ा है।', ur: '74ویں ترمیم شہری مقامی اداروں (میونسپلٹیوں) سے متعلق ہے۔' } },
        { t: { en: '52nd Amendment (1985)', hi: '52वाँ संशोधन (1985)', ur: '52ویں ترمیم (1985)' }, h: { en: 'The 52nd Amendment added the anti-defection law.', hi: '52वें संशोधन ने दल-बदल विरोधी क़ानून जोड़ा।', ur: '52ویں ترمیم نے دل بدلی مخالف قانون شامل کیا۔' } },
        { t: { en: '42nd Amendment (1976)', hi: '42वाँ संशोधन (1976)', ur: '42ویں ترمیم (1976)' }, h: { en: 'The 42nd added "socialist" and "secular" to the Preamble, among much else.', hi: '42वें ने प्रस्तावना में "समाजवादी" और "पंथनिरपेक्ष" जोड़े, और भी बहुत कुछ।', ur: '42ویں نے تمہید میں "سوشلسٹ" اور "سیکولر" شامل کیے، اور بھی بہت کچھ۔' } }
      ],
      exp: { en: 'The 73rd Amendment (1992) added Part IX and the Eleventh Schedule, creating the three-tier Panchayati Raj system.', hi: '73वें संशोधन (1992) ने भाग IX और ग्यारहवीं अनुसूची जोड़ी, जिससे त्रिस्तरीय पंचायती राज बना।', ur: '73ویں ترمیم (1992) نے حصہ IX اور گیارہواں شیڈول شامل کیا، جس سے تین سطحی پنچایتی راج بنا۔' } },

    { cat: 'soc',
      q: { en: 'Who introduced the concept of "Sanskritization"?', hi: '"संस्कृतीकरण" की अवधारणा किसने दी?', ur: '"سنسکرتائزیشن" کا تصور کس نے دیا؟' },
      opts: [
        { t: { en: 'M. N. Srinivas', hi: 'एम. एन. श्रीनिवास', ur: 'ایم این سری نواس' } },
        { t: { en: 'G. S. Ghurye', hi: 'जी. एस. घुर्ये', ur: 'جی ایس گھوریے' }, h: { en: 'Ghurye is known for his work on caste and race, and on Indian sadhus.', hi: 'घुर्ये जाति और प्रजाति तथा भारतीय साधुओं पर अपने कार्य के लिए जाने जाते हैं।', ur: 'گھوریے ذات اور نسل اور ہندوستانی سادھوؤں پر اپنے کام کے لیے جانے جاتے ہیں۔' } },
        { t: { en: 'S. C. Dube', hi: 'एस. सी. दुबे', ur: 'ایس سی دوبے' }, h: { en: "Dube is known for India's Changing Villages.", hi: 'दुबे "इंडियाज़ चेंजिंग विलेजेस" के लिए जाने जाते हैं।', ur: 'دوبے "انڈیاز چینجنگ ولیجز" کے لیے جانے جاتے ہیں۔' } },
        { t: { en: 'Max Weber', hi: 'मैक्स वेबर', ur: 'میکس ویبر' }, h: { en: 'Weber wrote on social action, bureaucracy and authority.', hi: 'वेबर ने सामाजिक क्रिया, नौकरशाही और सत्ता पर लिखा।', ur: 'ویبر نے سماجی عمل، افسر شاہی اور اقتدار پر لکھا۔' } }
      ],
      exp: { en: 'M. N. Srinivas used "Sanskritization" for the process by which castes adopt the customs of higher castes to rise in status. The idea of the dominant caste is also his.', hi: 'एम. एन. श्रीनिवास ने "संस्कृतीकरण" उस प्रक्रिया के लिए कहा जिसमें जातियाँ ऊँची प्रस्थिति के लिए उच्च जातियों की प्रथाएँ अपनाती हैं। प्रबल जाति की अवधारणा भी उन्हीं की है।', ur: 'ایم این سری نواس نے "سنسکرتائزیشن" اس عمل کے لیے کہا جس میں ذاتیں اونچا مقام پانے کے لیے اونچی ذاتوں کے رسم و رواج اپناتی ہیں۔ غالب ذات کا تصور بھی انہی کا ہے۔' } },

    { cat: 'soc',
      q: { en: 'How does a schedule differ from a questionnaire?', hi: 'अनुसूची प्रश्नावली से कैसे भिन्न है?', ur: 'شیڈول سوالنامے سے کیسے مختلف ہے؟' },
      opts: [
        { t: { en: 'The researcher fills it in while meeting the respondent', hi: 'शोधकर्ता उत्तरदाता से मिलकर उसे स्वयं भरता है', ur: 'محقق جواب دہندہ سے مل کر اسے خود بھرتا ہے' } },
        { t: { en: 'It has no fixed questions', hi: 'इसमें कोई निश्चित प्रश्न नहीं होते', ur: 'اس میں کوئی مقررہ سوال نہیں ہوتے' }, h: { en: 'A schedule also has a fixed list of questions.', hi: 'अनुसूची में भी प्रश्नों की निश्चित सूची होती है।', ur: 'شیڈول میں بھی سوالوں کی مقررہ فہرست ہوتی ہے۔' } },
        { t: { en: 'It is always sent by post', hi: 'इसे हमेशा डाक से भेजा जाता है', ur: 'اسے ہمیشہ ڈاک سے بھیجا جاتا ہے' }, h: { en: 'Posting is typical of a questionnaire, which respondents fill in themselves.', hi: 'डाक से भेजना प्रश्नावली की विशेषता है, जिसे उत्तरदाता स्वयं भरते हैं।', ur: 'ڈاک سے بھیجنا سوالنامے کی خصوصیت ہے، جسے جواب دہندہ خود بھرتے ہیں۔' } },
        { t: { en: 'It only collects secondary data', hi: 'यह केवल द्वितीयक आँकड़े एकत्र करती है', ur: 'یہ صرف ثانوی ڈیٹا جمع کرتا ہے' }, h: { en: 'Both tools collect primary data directly from people.', hi: 'दोनों उपकरण सीधे लोगों से प्राथमिक आँकड़े एकत्र करते हैं।', ur: 'دونوں آلات براہ راست لوگوں سے بنیادی ڈیٹا جمع کرتے ہیں۔' } }
      ],
      exp: { en: 'A schedule is filled in by the researcher or enumerator face to face, so it works even where respondents cannot read or write. A questionnaire is filled in by the respondents themselves.', hi: 'अनुसूची शोधकर्ता या प्रगणक आमने-सामने भरता है, इसलिए यह वहाँ भी काम करती है जहाँ उत्तरदाता पढ़-लिख नहीं सकते। प्रश्नावली उत्तरदाता स्वयं भरते हैं।', ur: 'شیڈول محقق یا شمار کنندہ آمنے سامنے بھرتا ہے، اس لیے یہ وہاں بھی کام کرتا ہے جہاں جواب دہندہ لکھ پڑھ نہیں سکتے۔ سوالنامہ جواب دہندہ خود بھرتے ہیں۔' } },

    { cat: 'map',
      q: { en: "In Bowditch's rule, how is the closing error of a traverse shared out?", hi: 'बाउडिच नियम में मालारेखन की संवरण त्रुटि कैसे बाँटी जाती है?', ur: 'باؤڈچ کے اصول میں ٹریورس کی بند ہونے کی غلطی کیسے بانٹی جاتی ہے؟' },
      opts: [
        { t: { en: "In proportion to each leg's length", hi: 'हर भुजा की लंबाई के अनुपात में', ur: 'ہر ضلع کی لمبائی کے تناسب سے' } },
        { t: { en: 'Equally among all legs', hi: 'सभी भुजाओं में बराबर', ur: 'تمام اضلاع میں برابر' }, h: { en: 'Longer legs collect more error, so they take a larger share.', hi: 'लंबी भुजाओं में अधिक त्रुटि जमा होती है, इसलिए उन्हें बड़ा हिस्सा मिलता है।', ur: 'لمبے اضلاع میں زیادہ غلطی جمع ہوتی ہے، اس لیے انہیں بڑا حصہ ملتا ہے۔' } },
        { t: { en: 'All of it to the last leg', hi: 'पूरी अंतिम भुजा पर', ur: 'ساری آخری ضلع پر' }, h: { en: 'That would distort one leg badly instead of spreading the error.', hi: 'इससे त्रुटि फैलने के बजाय एक ही भुजा बुरी तरह बिगड़ जाएगी।', ur: 'اس سے غلطی پھیلنے کے بجائے ایک ہی ضلع بری طرح بگڑ جائے گا۔' } },
        { t: { en: 'In proportion to each bearing', hi: 'हर दिक्मान के अनुपात में', ur: 'ہر سمت کے تناسب سے' }, h: { en: 'Bearings are angles; the rule uses lengths.', hi: 'दिक्मान कोण हैं; नियम लंबाई का उपयोग करता है।', ur: 'سمتیں زاویے ہیں؛ اصول لمبائی استعمال کرتا ہے۔' } }
      ],
      exp: { en: 'Correction to a leg = total error × (leg length ÷ perimeter), applied to latitudes and departures separately. Watch it happen in the Compass traverse tool.', hi: 'किसी भुजा का संशोधन = कुल त्रुटि × (भुजा की लंबाई ÷ परिमाप), लैटिट्यूड और डिपार्चर पर अलग-अलग। इसे कम्पास सर्वेक्षण टूल में देखें।', ur: 'کسی ضلع کی درستی = کل غلطی × (ضلع کی لمبائی ÷ محیط)، لیٹیٹیوڈ اور ڈیپارچر پر الگ الگ۔ اسے کمپاس سروے ٹول میں دیکھیں۔' } }
  ],

  /* ------------------------------------------------------------------ review cases: `flaw` is the 0-based index of the first wrong step; `later` lists steps that are wrong only because of it */
  cases: [
    { k: 1, type: 'fact', flaw: 1, later: [], rubric: [2, 2, 4],
      topic: { en: 'Climatology', hi: 'जलवायु विज्ञान', ur: 'موسمیات' },
      q: { en: 'Why does western Rajasthan receive so little rainfall?', hi: 'पश्चिमी राजस्थान में इतनी कम वर्षा क्यों होती है?', ur: 'مغربی راجستھان میں اتنی کم بارش کیوں ہوتی ہے؟' },
      steps: [
        { en: 'The Arabian Sea branch of the south-west monsoon approaches Rajasthan from the south-west.', hi: 'दक्षिण-पश्चिम मानसून की अरब सागर शाखा राजस्थान की ओर दक्षिण-पश्चिम से आती है।', ur: 'جنوب مغربی مون سون کی بحیرۂ عرب والی شاخ راجستھان کی طرف جنوب مغرب سے آتی ہے۔' },
        { en: 'The Aravalli range lies across the path of these winds, so they rise, rain on the eastern slopes and leave a rain-shadow in the west.', hi: 'अरावली पर्वतमाला इन पवनों के रास्ते में आड़ी पड़ती है, इसलिए वे ऊपर उठकर पूर्वी ढलानों पर बरसती हैं और पश्चिम में वृष्टि-छाया छोड़ देती हैं।', ur: 'اراولی پہاڑی سلسلہ ان ہواؤں کے راستے میں آڑا پڑتا ہے، اس لیے وہ اوپر اٹھ کر مشرقی ڈھلانوں پر برستی ہیں اور مغرب میں بارش کا سایہ چھوڑ دیتی ہیں۔' },
        { en: 'The Bay of Bengal branch has lost most of its moisture by the time it reaches western Rajasthan.', hi: 'बंगाल की खाड़ी शाखा पश्चिमी राजस्थान तक पहुँचते-पहुँचते अपनी अधिकांश नमी खो चुकी होती है।', ur: 'خلیج بنگال والی شاخ مغربی راجستھان تک پہنچتے پہنچتے اپنی زیادہ تر نمی کھو چکی ہوتی ہے۔' },
        { en: 'So western Rajasthan stays dry.', hi: 'इसलिए पश्चिमी राजस्थान शुष्क रहता है।', ur: 'اس لیے مغربی راجستھان خشک رہتا ہے۔' }
      ],
      why: { en: 'The Aravallis run from south-west to north-east, parallel to the Arabian Sea branch. The winds blow along the range instead of being forced up it, so they cross western Rajasthan without shedding much rain. There is no rain-shadow here.', hi: 'अरावली दक्षिण-पश्चिम से उत्तर-पूर्व की ओर, अरब सागर शाखा के समानांतर फैली है। पवनें पर्वत पर चढ़ने के बजाय उसके साथ-साथ बहती हैं, इसलिए पश्चिमी राजस्थान में अधिक वर्षा किए बिना निकल जाती हैं। यहाँ वृष्टि-छाया नहीं है।', ur: 'اراولی جنوب مغرب سے شمال مشرق کی طرف، بحیرۂ عرب والی شاخ کے متوازی پھیلا ہے۔ ہوائیں پہاڑ پر چڑھنے کے بجائے اس کے ساتھ ساتھ چلتی ہیں، اس لیے مغربی راجستھان میں زیادہ بارش کیے بغیر گزر جاتی ہیں۔ یہاں بارش کا سایہ نہیں ہے۔' },
      fix: { en: 'The Aravallis run parallel to the Arabian Sea branch, so the winds are not forced to rise and pass over western Rajasthan with little rain.', hi: 'अरावली अरब सागर शाखा के समानांतर है, इसलिए पवनें ऊपर नहीं उठतीं और कम वर्षा करके पश्चिमी राजस्थान से गुज़र जाती हैं।', ur: 'اراولی بحیرۂ عرب والی شاخ کے متوازی ہے، اس لیے ہوائیں اوپر نہیں اٹھتیں اور کم بارش کر کے مغربی راجستھان سے گزر جاتی ہیں۔' } },

    { k: 2, type: 'unit', flaw: 2, later: [3], rubric: [1, 4, 5],
      topic: { en: 'Map scale', hi: 'मानचित्र मापनी', ur: 'نقشے کا پیمانہ' },
      q: { en: 'On a 1:50,000 topographical sheet, two villages are 4.2 cm apart. How far apart are they on the ground?', hi: '1:50,000 के स्थलाकृतिक मानचित्र पर दो गाँवों के बीच 4.2 सेमी की दूरी है। ज़मीन पर वे कितनी दूर हैं?', ur: '1:50,000 کی ٹوپوگرافک شیٹ پر دو گاؤں کے درمیان 4.2 سینٹی میٹر کا فاصلہ ہے۔ زمین پر وہ کتنے دور ہیں؟' },
      steps: [
        { en: '1 cm on the map stands for 50,000 cm on the ground.', hi: 'मानचित्र पर 1 सेमी ज़मीन पर 50,000 सेमी दर्शाता है।', ur: 'نقشے پر 1 سینٹی میٹر زمین پر 50,000 سینٹی میٹر کو ظاہر کرتا ہے۔' },
        { en: '4.2 × 50,000 = 210,000 cm.', hi: '4.2 × 50,000 = 210,000 सेमी।', ur: '4.2 × 50,000 = 210,000 سینٹی میٹر۔' },
        { en: 'Since 1 km = 10,000 cm, 210,000 cm = 21 km.', hi: 'चूँकि 1 किमी = 10,000 सेमी, इसलिए 210,000 सेमी = 21 किमी।', ur: 'چونکہ 1 کلومیٹر = 10,000 سینٹی میٹر، اس لیے 210,000 سینٹی میٹر = 21 کلومیٹر۔' },
        { en: 'The villages are 21 km apart.', hi: 'गाँव 21 किमी दूर हैं।', ur: 'گاؤں 21 کلومیٹر دور ہیں۔' }
      ],
      why: { en: 'One kilometre is 1,000 m × 100 cm = 100,000 cm, not 10,000 cm. So 210,000 cm is 2.1 km, and the answer is ten times too large.', hi: 'एक किलोमीटर = 1,000 मी × 100 सेमी = 100,000 सेमी, न कि 10,000 सेमी। इसलिए 210,000 सेमी = 2.1 किमी, और उत्तर दस गुना बड़ा है।', ur: 'ایک کلومیٹر = 1,000 میٹر × 100 سینٹی میٹر = 100,000 سینٹی میٹر، نہ کہ 10,000۔ اس لیے 210,000 سینٹی میٹر = 2.1 کلومیٹر، اور جواب دس گنا بڑا ہے۔' },
      fix: { en: '1 km = 100,000 cm, so 210,000 cm = 2.1 km.', hi: '1 किमी = 100,000 सेमी, इसलिए 210,000 सेमी = 2.1 किमी।', ur: '1 کلومیٹر = 100,000 سینٹی میٹر، اس لیے 210,000 سینٹی میٹر = 2.1 کلومیٹر۔' } },

    { k: 7, type: 'calc', flaw: 2, later: [3], rubric: [2, 4, 5],
      topic: { en: 'Atmosphere', hi: 'वायुमंडल', ur: 'کرۂ ہوا' },
      q: { en: 'A station at sea level records 32 °C. Using the normal lapse rate, estimate the temperature at a hill station 1,500 m higher.', hi: 'समुद्र तल पर स्थित एक स्टेशन 32 °C दर्ज करता है। सामान्य ताप ह्रास दर से 1,500 मी ऊँचे पहाड़ी स्टेशन का तापमान अनुमानित करें।', ur: 'سطح سمندر پر واقع ایک اسٹیشن 32 °C درج کرتا ہے۔ عام شرحِ کمیِ حرارت سے 1,500 میٹر اونچے پہاڑی اسٹیشن کا درجۂ حرارت اندازہ کریں۔' },
      steps: [
        { en: 'The normal lapse rate is about 6.5 °C for every 1,000 m of height.', hi: 'सामान्य ताप ह्रास दर लगभग 6.5 °C प्रति 1,000 मी ऊँचाई है।', ur: 'عام شرحِ کمی تقریباً 6.5 °C فی 1,000 میٹر بلندی ہے۔' },
        { en: 'The height difference is 1,500 m, which is 1.5 km.', hi: 'ऊँचाई का अंतर 1,500 मी यानी 1.5 किमी है।', ur: 'بلندی کا فرق 1,500 میٹر یعنی 1.5 کلومیٹر ہے۔' },
        { en: 'Temperature drop = 6.5 × 1.5 = 8.75 °C.', hi: 'तापमान में गिरावट = 6.5 × 1.5 = 8.75 °C।', ur: 'درجۂ حرارت میں کمی = 6.5 × 1.5 = 8.75 °C۔' },
        { en: 'Hill-station temperature ≈ 32 − 8.75 = 23.25 °C.', hi: 'पहाड़ी स्टेशन का तापमान ≈ 32 − 8.75 = 23.25 °C।', ur: 'پہاڑی اسٹیشن کا درجۂ حرارت ≈ 32 − 8.75 = 23.25 °C۔' }
      ],
      why: { en: '6.5 × 1.5 is 9.75, not 8.75 (6.5 + 3.25). The method is right; one multiplication slipped, and the final answer inherits the error.', hi: '6.5 × 1.5 = 9.75 है, 8.75 नहीं (6.5 + 3.25)। विधि सही है; एक गुणा में चूक हुई और अंतिम उत्तर में वही त्रुटि आ गई।', ur: '6.5 × 1.5 = 9.75 ہے، 8.75 نہیں (6.5 + 3.25)۔ طریقہ درست ہے؛ ایک ضرب میں چوک ہوئی اور آخری جواب میں وہی غلطی آ گئی۔' },
      fix: { en: 'Drop = 6.5 × 1.5 = 9.75 °C, so the hill station is about 32 − 9.75 ≈ 22.3 °C.', hi: 'गिरावट = 6.5 × 1.5 = 9.75 °C, इसलिए पहाड़ी स्टेशन लगभग 32 − 9.75 ≈ 22.3 °C है।', ur: 'کمی = 6.5 × 1.5 = 9.75 °C، اس لیے پہاڑی اسٹیشن تقریباً 32 − 9.75 ≈ 22.3 °C ہے۔' } },

    { k: 3, type: 'logic', flaw: 1, later: [2], rubric: [1, 1, 4],
      topic: { en: 'Statistics', hi: 'सांख्यिकी', ur: 'شماریات' },
      q: { en: 'Monthly rainfall (cm) at a station over seven months: 4, 9, 2, 7, 12, 5, 3. Find the median.', hi: 'एक स्टेशन पर सात महीनों की मासिक वर्षा (सेमी): 4, 9, 2, 7, 12, 5, 3। माध्यिका ज्ञात करें।', ur: 'ایک اسٹیشن پر سات مہینوں کی ماہانہ بارش (سینٹی میٹر): 4, 9, 2, 7, 12, 5, 3۔ وسطانیہ معلوم کریں۔' },
      steps: [
        { en: 'There are 7 values, an odd number, so the median is the 4th value.', hi: 'कुल 7 मान हैं, जो विषम संख्या है, इसलिए माध्यिका चौथा मान है।', ur: 'کل 7 قدریں ہیں، جو طاق عدد ہے، اس لیے وسطانیہ چوتھی قدر ہے۔' },
        { en: 'The 4th value in the list is 7.', hi: 'सूची में चौथा मान 7 है।', ur: 'فہرست میں چوتھی قدر 7 ہے۔' },
        { en: 'So the median rainfall is 7 cm.', hi: 'इसलिए माध्यिका वर्षा 7 सेमी है।', ur: 'اس لیے وسطانی بارش 7 سینٹی میٹر ہے۔' }
      ],
      why: { en: 'The median is the middle value after the data is arranged in order. Sorted, the values are 2, 3, 4, 5, 7, 9, 12, so the 4th value is 5. The response took the 4th value of the unsorted list.', hi: 'माध्यिका आँकड़ों को क्रम में लगाने के बाद का मध्य मान है। क्रम में: 2, 3, 4, 5, 7, 9, 12, इसलिए चौथा मान 5 है। उत्तर ने बिना क्रम वाली सूची का चौथा मान ले लिया।', ur: 'وسطانیہ ڈیٹا کو ترتیب دینے کے بعد کی درمیانی قدر ہے۔ ترتیب میں: 2, 3, 4, 5, 7, 9, 12، اس لیے چوتھی قدر 5 ہے۔ جواب نے بغیر ترتیب والی فہرست کی چوتھی قدر لے لی۔' },
      fix: { en: 'In order: 2, 3, 4, 5, 7, 9, 12. The 4th value is 5, so the median is 5 cm.', hi: 'क्रम में: 2, 3, 4, 5, 7, 9, 12। चौथा मान 5 है, इसलिए माध्यिका 5 सेमी है।', ur: 'ترتیب میں: 2, 3, 4, 5, 7, 9, 12۔ چوتھی قدر 5 ہے، اس لیے وسطانیہ 5 سینٹی میٹر ہے۔' } },

    { k: 5, type: 'fact', flaw: 2, later: [], rubric: [1, 2, 5],
      topic: { en: 'Research methods', hi: 'शोध विधि', ur: 'تحقیقی طریقے' },
      q: { en: 'A researcher picks a random number from 1 to 10, then selects every 10th household after it from the voter list. Which sampling method is this?', hi: 'एक शोधकर्ता 1 से 10 के बीच एक यादृच्छिक संख्या चुनता है, फिर मतदाता सूची से उसके बाद हर 10वाँ परिवार चुनता है। यह कौन-सी प्रतिचयन विधि है?', ur: 'ایک محقق 1 سے 10 کے درمیان ایک بے ترتیب عدد چنتا ہے، پھر ووٹر لسٹ سے اس کے بعد ہر 10واں گھرانہ چنتا ہے۔ یہ نمونہ گیری کا کون سا طریقہ ہے؟' },
      steps: [
        { en: 'The starting point is chosen at random, so every household on the list could be selected.', hi: 'प्रारंभिक बिंदु यादृच्छिक रूप से चुना गया है, इसलिए सूची का हर परिवार चुना जा सकता था।', ur: 'آغاز کا نقطہ بے ترتیب چنا گیا ہے، اس لیے فہرست کا ہر گھرانہ چنا جا سکتا تھا۔' },
        { en: 'After the start, households are taken at a fixed interval of 10.', hi: 'शुरुआत के बाद परिवार 10 के निश्चित अंतराल पर लिए जाते हैं।', ur: 'آغاز کے بعد گھرانے 10 کے مقررہ وقفے سے لیے جاتے ہیں۔' },
        { en: 'Because the first pick was random, this is simple random sampling.', hi: 'क्योंकि पहला चयन यादृच्छिक था, इसलिए यह सरल यादृच्छिक प्रतिचयन है।', ur: 'چونکہ پہلا انتخاب بے ترتیب تھا، اس لیے یہ سادہ بے ترتیب نمونہ گیری ہے۔' }
      ],
      why: { en: 'A random start followed by a fixed interval is systematic sampling. In simple random sampling each unit is drawn independently, for example by lottery, so the picks would not be evenly spaced.', hi: 'यादृच्छिक शुरुआत के बाद निश्चित अंतराल पर चयन क्रमबद्ध (सिस्टमैटिक) प्रतिचयन है। सरल यादृच्छिक प्रतिचयन में हर इकाई स्वतंत्र रूप से, जैसे लॉटरी से, चुनी जाती है, इसलिए चयन बराबर अंतराल पर नहीं होता।', ur: 'بے ترتیب آغاز کے بعد مقررہ وقفے سے انتخاب منظم (سسٹمیٹک) نمونہ گیری ہے۔ سادہ بے ترتیب نمونہ گیری میں ہر اکائی آزادانہ، مثلاً قرعہ اندازی سے، چنی جاتی ہے، اس لیے انتخاب برابر وقفوں پر نہیں ہوتا۔' },
      fix: { en: 'A random start with a fixed interval of 10 makes this systematic sampling.', hi: '10 के निश्चित अंतराल के साथ यादृच्छिक शुरुआत इसे क्रमबद्ध प्रतिचयन बनाती है।', ur: '10 کے مقررہ وقفے کے ساتھ بے ترتیب آغاز اسے منظم نمونہ گیری بناتا ہے۔' } },

    { k: 4, type: 'calc', flaw: 2, later: [], rubric: [1, 5, 5],
      topic: { en: 'Surveying', hi: 'सर्वेक्षण', ur: 'سروے' },
      q: { en: 'The forward bearing of a survey line is 70° (whole-circle bearing). What is its back bearing?', hi: 'एक सर्वेक्षण रेखा का अग्र दिक्मान 70° (पूर्ण वृत्त दिक्मान) है। उसका पश्च दिक्मान क्या है?', ur: 'ایک سروے لائن کی اگلی سمت 70° (مکمل دائرہ سمت) ہے۔ اس کی پچھلی سمت کیا ہے؟' },
      steps: [
        { en: 'The forward and back bearings of a line differ by exactly 180°.', hi: 'किसी रेखा के अग्र और पश्च दिक्मान में ठीक 180° का अंतर होता है।', ur: 'کسی لائن کی اگلی اور پچھلی سمت میں ٹھیک 180° کا فرق ہوتا ہے۔' },
        { en: 'The forward bearing is less than 180°, so we add 180°.', hi: 'अग्र दिक्मान 180° से कम है, इसलिए 180° जोड़ते हैं।', ur: 'اگلی سمت 180° سے کم ہے، اس لیے 180° جمع کرتے ہیں۔' },
        { en: 'Back bearing = 70° + 180° = 240°.', hi: 'पश्च दिक्मान = 70° + 180° = 240°।', ur: 'پچھلی سمت = 70° + 180° = 240°۔' }
      ],
      why: { en: 'The method is right but the sum is wrong: 70 + 180 = 250. A quick check: 250° − 180° gives back the forward bearing of 70°.', hi: 'विधि सही है पर योग ग़लत है: 70 + 180 = 250। जाँच: 250° − 180° से फिर 70° अग्र दिक्मान मिलता है।', ur: 'طریقہ درست ہے مگر جمع غلط ہے: 70 + 180 = 250۔ جانچ: 250° − 180° سے دوبارہ 70° اگلی سمت ملتی ہے۔' },
      fix: { en: 'Back bearing = 70° + 180° = 250°.', hi: 'पश्च दिक्मान = 70° + 180° = 250°।', ur: 'پچھلی سمت = 70° + 180° = 250°۔' } }
  ],

  /* ------------------------------------------------------------------ map projections (the maths lives in lab.js) */
  projections: [
    { id: 'equirect', fam: 'cyl', prop: 'equiMer',
      name: { en: 'Cylindrical equidistant', hi: 'बेलनाकार समदूरस्थ', ur: 'اسطوانی مساوی فاصلہ' },
      note: { en: 'Parallels and meridians form a square grid. Simple, but shapes stretch east–west towards the poles.', hi: 'अक्षांश और देशांतर रेखाएँ वर्गाकार जाल बनाती हैं। सरल है, पर ध्रुवों की ओर आकृतियाँ पूर्व–पश्चिम में खिंच जाती हैं।', ur: 'عرض بلد اور طول بلد کی لکیریں مربع جال بناتی ہیں۔ سادہ ہے، مگر قطبین کی طرف شکلیں مشرق–مغرب میں کھنچ جاتی ہیں۔' } },
    { id: 'mercator', fam: 'cyl', prop: 'conformal',
      name: { en: 'Mercator (cylindrical orthomorphic)', hi: 'मर्केटर (बेलनाकार शुद्ध आकृतिक)', ur: 'مرکیٹر (اسطوانی کنفارمل)' },
      note: { en: 'Every compass bearing is a straight line, which is why sailors used it. Areas grow enormously towards the poles.', hi: 'हर कम्पास दिक्मान एक सीधी रेखा है, इसलिए नाविक इसका उपयोग करते थे। ध्रुवों की ओर क्षेत्रफल बहुत बढ़ जाता है।', ur: 'ہر کمپاس سمت ایک سیدھی لکیر ہے، اسی لیے ملاح اسے استعمال کرتے تھے۔ قطبین کی طرف رقبہ بہت بڑھ جاتا ہے۔' } },
    { id: 'cea', fam: 'cyl', prop: 'equalArea',
      name: { en: 'Cylindrical equal-area', hi: 'बेलनाकार समक्षेत्र', ur: 'اسطوانی مساوی رقبہ' },
      note: { en: 'Every circle keeps the same area, but near the poles they are squashed flat.', hi: 'हर वृत्त का क्षेत्रफल समान रहता है, पर ध्रुवों के पास वे चपटे हो जाते हैं।', ur: 'ہر دائرے کا رقبہ برابر رہتا ہے، مگر قطبین کے قریب وہ چپٹے ہو جاتے ہیں۔' } },
    { id: 'gall', fam: 'cyl', prop: 'compromise',
      name: { en: "Gall's stereographic", hi: 'गॉल का त्रिविम', ur: 'گال اسٹیریوگرافک' },
      note: { en: 'A compromise cylinder cut at 45°N and 45°S: less polar stretching than Mercator, but neither shape nor area is exact.', hi: '45°N और 45°S पर काटा गया समझौता बेलन: मर्केटर से कम ध्रुवीय खिंचाव, पर न आकृति शुद्ध, न क्षेत्रफल।', ur: '45°N اور 45°S پر کاٹا گیا درمیانی اسطوانہ: مرکیٹر سے کم قطبی کھنچاؤ، مگر نہ شکل درست نہ رقبہ۔' } },
    { id: 'ortho', fam: 'zen', prop: 'persp',
      name: { en: 'Orthographic', hi: 'लंबकोणीय (ऑर्थोग्राफ़िक)', ur: 'آرتھوگرافک' },
      note: { en: 'Shows one hemisphere as if seen from far away. Distortion grows towards the edge.', hi: 'एक गोलार्ध को ऐसे दिखाता है मानो बहुत दूर से देखा जा रहा हो। किनारे की ओर विकृति बढ़ती है।', ur: 'ایک نصف کرے کو ایسے دکھاتی ہے جیسے بہت دور سے دیکھا جا رہا ہو۔ کنارے کی طرف بگاڑ بڑھتا ہے۔' } },
    { id: 'stereo', fam: 'zen', prop: 'conformal',
      name: { en: 'Stereographic', hi: 'त्रिविम (स्टीरियोग्राफ़िक)', ur: 'اسٹیریوگرافک' },
      note: { en: 'Conformal: circles stay circles, but they grow away from the centre.', hi: 'शुद्ध आकृतिक: वृत्त वृत्त ही रहते हैं, पर केंद्र से दूर बड़े होते जाते हैं।', ur: 'کنفارمل: دائرے دائرے ہی رہتے ہیں، مگر مرکز سے دور بڑے ہوتے جاتے ہیں۔' } },
    { id: 'gnomonic', fam: 'zen', prop: 'gc',
      name: { en: 'Gnomonic', hi: 'नोमोनिक', ur: 'نومونک' },
      note: { en: 'Every great circle is a straight line, so it is used to plan the shortest air and sea routes. It can show less than a hemisphere.', hi: 'हर वृहत वृत्त सीधी रेखा है, इसलिए सबसे छोटे हवाई और समुद्री मार्गों की योजना में काम आता है। यह एक गोलार्ध से कम ही दिखा सकता है।', ur: 'ہر عظیم دائرہ سیدھی لکیر ہے، اس لیے مختصر ترین فضائی اور بحری راستوں کی منصوبہ بندی میں کام آتی ہے۔ یہ نصف کرے سے کم ہی دکھا سکتی ہے۔' } },
    { id: 'aeqd', fam: 'zen', prop: 'equiCtr',
      name: { en: 'Zenithal equidistant', hi: 'खमध्य समदूरस्थ', ur: 'سمتی مساوی فاصلہ' },
      note: { en: 'Distances and directions from the centre are true. The polar case appears in the United Nations emblem.', hi: 'केंद्र से दूरियाँ और दिशाएँ सही रहती हैं। ध्रुवीय रूप संयुक्त राष्ट्र के प्रतीक में दिखता है।', ur: 'مرکز سے فاصلے اور سمتیں درست رہتی ہیں۔ قطبی صورت اقوامِ متحدہ کے نشان میں نظر آتی ہے۔' } },
    { id: 'laea', fam: 'zen', prop: 'equalArea',
      name: { en: 'Zenithal equal-area', hi: 'खमध्य समक्षेत्र', ur: 'سمتی مساوی رقبہ' },
      note: { en: 'Areas are true everywhere; shapes bend towards the edge.', hi: 'क्षेत्रफल हर जगह सही; किनारे की ओर आकृतियाँ मुड़ जाती हैं।', ur: 'رقبہ ہر جگہ درست؛ کنارے کی طرف شکلیں مڑ جاتی ہیں۔' } },
    { id: 'conic', fam: 'con', prop: 'equiMer',
      name: { en: 'Conical, one standard parallel', hi: 'शंक्वाकार, एक मानक अक्षांश', ur: 'مخروطی، ایک معیاری عرض بلد' },
      note: { en: 'The standard parallel is 45°N, where the scale is exact. Good for mid-latitude countries that stretch east–west.', hi: 'मानक अक्षांश 45°N है, जहाँ मापनी सही है। पूर्व–पश्चिम फैले मध्य अक्षांशीय देशों के लिए अच्छा।', ur: 'معیاری عرض بلد 45°N ہے، جہاں پیمانہ درست ہے۔ مشرق–مغرب میں پھیلے درمیانی عرض بلد کے ممالک کے لیے اچھی۔' } },
    { id: 'bonne', fam: 'con', prop: 'equalArea',
      name: { en: "Bonne's", hi: 'बॉन', ur: 'بون' },
      note: { en: 'An equal-area relative of the conic, once common in atlases for continents such as Asia and Europe.', hi: 'शंक्वाकार का समक्षेत्र रूप; कभी एशिया और यूरोप जैसे महाद्वीपों के एटलस मानचित्रों में आम था।', ur: 'مخروطی کی مساوی رقبہ صورت؛ کبھی ایشیا اور یورپ جیسے براعظموں کے اٹلس نقشوں میں عام تھی۔' } },
    { id: 'sinu', fam: 'conv', prop: 'equalArea',
      name: { en: 'Sinusoidal', hi: 'साइनुसॉइडल', ur: 'سائنوسوئیڈل' },
      note: { en: 'Parallels are evenly spaced and true to scale; meridians are sine curves.', hi: 'अक्षांश रेखाएँ बराबर दूरी पर और सही मापनी में; देशांतर रेखाएँ साइन वक्र हैं।', ur: 'عرض بلد کی لکیریں برابر فاصلے پر اور درست پیمانے پر؛ طول بلد کی لکیریں سائن خم ہیں۔' } },
    { id: 'moll', fam: 'conv', prop: 'equalArea',
      name: { en: 'Mollweide', hi: 'मॉलवाइड', ur: 'مولوائیڈ' },
      note: { en: 'An equal-area ellipse showing the whole world; popular for world distribution maps.', hi: 'पूरी दुनिया दिखाने वाला समक्षेत्र दीर्घवृत्त; विश्व वितरण मानचित्रों में लोकप्रिय।', ur: 'پوری دنیا دکھانے والا مساوی رقبہ بیضوی نقشہ؛ عالمی تقسیم کے نقشوں میں مقبول۔' } }
  ]
};
