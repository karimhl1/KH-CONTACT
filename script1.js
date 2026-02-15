// --- التكوين ونصوص الترجمة ---
const translations = {
    fr: {
        price_tijarix: "À partir de 50 000 DZD",
        detail_tijarix_1: "Gestion complète des Achats et Ventes.",
        detail_tijarix_2: "Facturation automatisée et devis.",
        detail_tijarix_3: "Statistiques et rapports financiers détaillés.",
        
        price_nexus: "À partir de 45 000 DZD",
        detail_nexus_1: "Interface tactile rapide et fluide.",
        detail_nexus_2: "Gestion des tables et commandes en cuisine.",
        detail_nexus_3: "Support multi-utilisateurs (Serveur, Caissier).",
        
        price_stock: "À partir de 35 000 DZD",
        detail_stock_1: "Suivi des entrées/sorties en temps réel.",
        detail_stock_2: "Alertes de rupture de stock intelligentes.",
        detail_stock_3: "Génération de codes-barres et étiquettes.",
        site_title: "KARIX-TECH | Solutions Numériques",
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_services: "Services",
        nav_products: "Nos Logiciels",
        nav_contact: "Contact",
        hero_welcome: "Bienvenue chez KARIX-TECH",
        hero_speciality: "Experts en Développement & Bases de Données",
        hero_desc: "Nous concevons des solutions logicielles robustes et des applications web innovantes pour propulser votre entreprise.",
        btn_view_products: "Voir nos logiciels",
        btn_start_project: "Démarrer un projet",
        about_title: "À propos de KARIX-TECH",
        about_text: "KARIX-TECH est une entreprise technologique spécialisée dans la fourniture de solutions numériques sur mesure. Notre équipe passionnée maîtrise la gestion complexe des données et le développement d'applications performantes. Notre mission : transformer vos défis opérationnels en avantages concurrentiels grâce à des outils numériques fiables.",
        services_title: "Nos Domaines d'Expertise",
        srv_db_title: "Bases de Données Avancées",
        srv_db_desc: "Modélisation, optimisation et administration sécurisée de vos données critiques.",
        srv_desktop_title: "Logiciels Sur Mesure",
        srv_desktop_desc: "Développement d'applications de bureau performantes pour la gestion interne.",
        srv_web_title: "Applications Web & SaaS",
        srv_web_desc: "Création de plateformes web dynamiques, responsives et évolutives.",
        srv_mobile_title: "Solutions Mobiles",
        srv_mobile_desc: "Extension de vos services sur smartphones et tablettes.",
        products_title: "Nos Solutions Prêtes à l'Emploi",
        products_subtitle: "Des logiciels éprouvés disponibles immédiatement sous licence.",
        prod_tijarix_desc: "Solution commerciale complète pour la gestion quotidienne des PME (Achats, Ventes, Stock).",
        prod_nexus_desc: "Système de point de vente (POS) intuitif conçu spécifiquement pour les restaurants et cafés.",
        prod_stock_title: "Gestion de Stock Pro",
        prod_stock_desc: "Logiciel robuste pour le suivi des inventaires, la traçabilité et l'optimisation des approvisionnements.",
        btn_license: "Demander une licence",
        contact_title: "Contactez KARIX-TECH",
        contact_subtitle: "Vous avez un projet ? Vous souhaitez acquérir une licence ? Discutons-en.",
        follow_us: "Suivez-nous :",
        form_name: "Votre Nom complet",
        form_email: "Votre Email professionnel",
        form_type_label: "Nature de votre demande",
        opt_select: "-- Sélectionnez --",
        opt_license: "Acheter une licence logicielle",
        opt_new_project: "Créer un nouveau projet sur mesure",
        opt_partner: "Partenariat / Autre",
        form_project_type: "Quel type de projet souhaitez-vous ?",
        proj_site_vitrine: "Site Web Vitrine (Présentation)",
        proj_ecommerce: "Site E-commerce (Vente en ligne)",
        proj_webapp: "Application Web Complexe (SaaS)",
        proj_desktop: "Logiciel de Bureau (Windows/Mac)",
        proj_mobile: "Application Mobile (iOS/Android)",
        form_message: "Votre message / Détails du projet",
        btn_send: "Envoyer la demande",
        footer_rights: "Tous droits réservés."
    },
    en: {
        site_title: "KARIX-TECH | Digital Solutions",
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_products: "Our Software",
        nav_contact: "Contact",
        hero_welcome: "Welcome to KARIX-TECH",
        hero_speciality: "Development & Database Experts",
        hero_desc: "We design robust software solutions and innovative web applications to propel your business forward.",
        form_name: "Full Name",
        form_type_label: "Nature of Request",
        opt_new_project: "Create a new custom project",
        form_project_type: "What type of project do you need?",
        btn_send: "Send Request"
    },
    ar: {
        price_tijarix: "ابتداءً من 50,000 دج",
        detail_tijarix_1: "إدارة شاملة للمشتريات والمبيعات.",
        detail_tijarix_2: "فواتير آلية وإصدار عروض أسعار.",
        detail_tijarix_3: "إحصائيات وتقارير مالية مفصلة.",
        
        price_nexus: "ابتداءً من 45,000 دج",
        detail_nexus_1: "واجهة لمس سريعة وسلسة.",
        detail_nexus_2: "إدارة الطاولات وتوجيه الطلبات للمطبخ.",
        detail_nexus_3: "دعم تعدد المستخدمين (نادل، كاشير).",
        
        price_stock: "ابتداءً من 35,000 دج",
        detail_stock_1: "تتبع حركة المخزون في الوقت الفعلي.",
        detail_stock_2: "تنبيهات ذكية عند نفاد الكميات.",
        detail_stock_3: "إنشاء وطباعة الباركود والملصقات.",
        site_title: "KARIX-TECH | حلول رقمية",
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_services: "خدماتنا",
        nav_products: "برمجياتنا",
        nav_contact: "اتصل بنا",
        hero_welcome: "مرحباً بكم في KARIX-TECH",
        hero_speciality: "خبراء التطوير وقواعد البيانات",
        hero_desc: "نقوم بتصميم حلول برمجية قوية وتطبيقات ويب مبتكرة لدفع أعمالك نحو الأمام.",
        btn_view_products: "شاهد برمجياتنا",
        btn_start_project: "ابدأ مشروعاً",
        about_title: "عن شركة KARIX-TECH",
        about_text: "KARIX-TECH هي شركة تقنية متخصصة في تقديم الحلول الرقمية المخصصة. يتقن فريقنا الشغوف الإدارة المعقدة للبيانات وتطوير التطبيقات عالية الأداء. مهمتنا: تحويل تحدياتك التشغيلية إلى مزايا تنافسية من خلال أدوات رقمية موثوقة.",
        services_title: "مجالات خبرتنا",
        srv_db_title: "قواعد البيانات المتقدمة",
        srv_db_desc: "نمذجة، تحسين، وإدارة آمنة لبياناتك الهامة.",
        srv_desktop_title: "برمجيات مخصصة",
        srv_desktop_desc: "تطوير تطبيقات سطح مكتب عالية الأداء للإدارة الداخلية.",
        srv_web_title: "تطبيقات الويب و SaaS",
        srv_web_desc: "إنشاء منصات ويب ديناميكية، متجاوبة وقابلة للتطوير.",
        srv_mobile_title: "حلول الجوال",
        srv_mobile_desc: "توسيع خدماتك على الهواتف الذكية والأجهزة اللوحية.",
        products_title: "حلولنا الجاهزة للاستخدام",
        products_subtitle: "برمجيات مثبتة الكفاءة متاحة فوراً بترخيص.",
        prod_tijarix_desc: "حل تجاري متكامل للإدارة اليومية للشركات الصغيرة والمتوسطة (مشتريات، مبيعات، مخزون).",
        prod_nexus_desc: "نظام نقاط بيع (POS) بديهي مصمم خصيصاً للمطاعم والمقاهي.",
        prod_stock_title: "إدارة المخزون برو",
        prod_stock_desc: "برنامج قوي لتتبع المخزون، التتبع وتحسين التوريد.",
        btn_license: "طلب ترخيص",
        contact_title: "اتصل بـ KARIX-TECH",
        contact_subtitle: "هل لديك مشروع؟ هل ترغب في الحصول على ترخيص؟ دعنا نتحدث.",
        follow_us: "تابعونا :",
        form_name: "الاسم الكامل",
        form_email: "البريد الإلكتروني المهني",
        form_type_label: "طبيعة طلبك",
        opt_select: "-- اختر --",
        opt_license: "شراء ترخيص برنامج (Tijarix, POS...)",
        opt_new_project: "إنشاء مشروع جديد مخصص",
        opt_partner: "شراكة / أخرى",
        form_project_type: "ما هو نوع المشروع الذي ترغب به؟",
        proj_site_vitrine: "موقع ويب تعريفي (Vitrine)",
        proj_ecommerce: "موقع تجارة إلكترونية (بيع أونلاين)",
        proj_webapp: "تطبيق ويب معقد (SaaS)",
        proj_desktop: "برنامج سطح مكتب (ويندوز/ماك)",
        proj_mobile: "تطبيق جوال (iOS/أندرويد)",
        form_message: "رسالتك / تفاصيل المشروع",
        btn_send: "إرسال الطلب",
        footer_rights: "جميع الحقوق محفوظة."
    }
};

// --- وظائف تبديل اللغة ---
function setLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.setAttribute('placeholder', translations[lang][key]);
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.textContent.toLowerCase() === lang) {
            btn.classList.add("active");
        }
    });

    localStorage.setItem("karixLang", lang);
}

// --- وظائف النموذج ---
function toggleProjectDetails(selectedValue) {
    const projectDetailsGroup = document.querySelector('.project-details-group');
    if (selectedValue === 'Nouveau Projet') {
        projectDetailsGroup.style.display = 'block';
        projectDetailsGroup.querySelector('select').setAttribute('required', 'required');
    } else {
        projectDetailsGroup.style.display = 'none';
        projectDetailsGroup.querySelector('select').removeAttribute('required');
    }
}

// --- تنفيذ الأكواد عند تحميل الصفحة ---
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. استرجاع اللغة
    const savedLang = localStorage.getItem("karixLang") || "fr";
    setLanguage(savedLang);

    // 2. التمرير السلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if(this.getAttribute('href') === "#") return; 
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. كود إرسال النموذج في الخلفية (AJAX)
    const karixForm = document.getElementById('karix-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    if (karixForm) {
        karixForm.addEventListener('submit', async function(e) {
            
            e.preventDefault(); // هذا السطر هو الذي يمنع ظهور صفحة Formspree

            const currentLang = document.documentElement.getAttribute("lang") || "fr";
            const data = new FormData(karixForm);
            
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = currentLang === 'ar' ? "جاري الإرسال..." : (currentLang === 'en' ? "Sending..." : "Envoi en cours...");
            submitBtn.disabled = true; 
            submitBtn.style.opacity = "0.7";

            try {
                const response = await fetch(karixForm.action, {
                    method: karixForm.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json' 
                    }
                });

                if (response.ok) {
                    formStatus.style.display = 'block';
                    formStatus.style.backgroundColor = 'rgba(46, 204, 113, 0.2)'; 
                    formStatus.style.color = '#2ecc71'; 
                    formStatus.style.border = '1px solid #2ecc71';
                    formStatus.innerText = currentLang === 'ar' ? "تم إرسال طلبك بنجاح! سنتواصل معك قريباً." : (currentLang === 'en' ? "Your request was sent successfully! We will contact you soon." : "Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.");
                    
                    karixForm.reset(); 
                    toggleProjectDetails(""); 
                } else {
                    formStatus.style.display = 'block';
                    formStatus.style.backgroundColor = 'rgba(231, 76, 60, 0.2)';
                    formStatus.style.color = '#e74c3c';
                    formStatus.style.border = '1px solid #e74c3c';
                    formStatus.innerText = currentLang === 'ar' ? "عذراً، حدث خطأ أثناء الإرسال." : "Désolé, une erreur s'est produite.";
                }
            } catch (error) {
                formStatus.style.display = 'block';
                formStatus.style.backgroundColor = 'rgba(231, 76, 60, 0.2)';
                formStatus.style.color = '#e74c3c';
                formStatus.style.border = '1px solid #e74c3c';
                formStatus.innerText = currentLang === 'ar' ? "حدث خطأ في الاتصال، يرجى التحقق من الإنترنت." : "Erreur de connexion. Veuillez vérifier votre internet.";
            } finally {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
                
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 6000);
            }
        });
    }
});