<!DOCTYPE html>
<html lang="ru" id="htmlLang">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="SHANRAK CARGO - быстрая и надежная доставка товаров из Китая в Астану и по всему Казахстану. Отслеживание груза, консолидация, таможенное оформление.">
    <meta name="keywords" content="доставка из Китая, карго, Астана, Казахстан, товары из Китая, грузоперевозки">
    <title>SHANRAK KARGO - Доставка товаров из Китая в Астану и Казахстан</title>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body>
    <!-- New Year Decorative Elements -->
    <div class="new-year-decoration">
        <!-- Christmas Tree -->
        <div class="christmas-tree">
            <div class="tree-top"></div>
            <div class="tree-middle"></div>
            <div class="tree-bottom"></div>
            <div class="tree-trunk"></div>
            <div class="tree-star">⭐</div>
            <div class="ornament ornament-1">🔴</div>
            <div class="ornament ornament-2">🟢</div>
            <div class="ornament ornament-3">🔵</div>
            <div class="ornament ornament-4">🟡</div>
        </div>
        
        <!-- Garland -->
        <div class="garland garland-top"></div>
        <div class="garland garland-left"></div>
        <div class="garland garland-right"></div>
    </div>

    <!-- Falling Snow -->
    <div class="snow-container" id="snowContainer"></div>

    <!-- Language Switcher - Top Left -->
    <div class="language-switcher">
        <button class="lang-btn active" data-lang="ru">🇷🇺 RU</button>
        <button class="lang-btn" data-lang="kk">🇰🇿 KZ</button>
    </div>

    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="container">
            <div class="nav-wrapper">
                <a href="#home" class="logo">SHANRAK CARGO</a>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="#home" class="nav-link" data-i18n="nav.home">Главная</a></li>
                    <li><a href="#about" class="nav-link" data-i18n="nav.about">О нас</a></li>
                    <li><a href="#services" class="nav-link" data-i18n="nav.services">Услуги</a></li>
                    <li><a href="#wholesale" class="nav-link" data-i18n="nav.wholesale">Оптовикам</a></li>
                    <li><a href="#marketplaces" class="nav-link" data-i18n="nav.marketplaces">Маркетплейсы</a></li>
                    <li><a href="#prohibited" class="nav-link" data-i18n="nav.prohibited">Запрещенные товары</a></li>
                    <li><a href="#tracking" class="nav-link" data-i18n="nav.tracking">Отследить груз</a></li>
                    <li><a href="#reviews" class="nav-link" data-i18n="nav.reviews">Отзывы</a></li>
                    <li><a href="#branches" class="nav-link" data-i18n="nav.branches">Филиалы</a></li>
                    <li><a href="#contacts" class="nav-link" data-i18n="nav.contacts">Контакты</a></li>
                </ul>
                <div class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-background">
            <img src="image.jpg" alt="SHANRAK KARGO" class="hero-image">
            <div class="hero-overlay"></div>
        </div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title">SHANRAK KARGO</h1>
                    <p class="hero-subtitle" data-i18n="hero.subtitle">Товары из Китая</p>
                    <p class="hero-description" data-i18n="hero.description">
                        Быстрая и надежная доставка товаров из Китая в Астану и по всему Казахстану
                    </p>
                    <div class="hero-buttons">
                        <a href="https://wa.me/7761111515" target="_blank" class="btn btn-primary">
                            <i class="fab fa-whatsapp"></i> <span data-i18n="hero.whatsapp">Написать в WhatsApp</span>
                        </a>
                        <a href="https://www.instagram.com/shanrak.kargo?igsh=MTNkZGcybzd4em9mYg==" target="_blank" class="btn btn-secondary">
                            <i class="fab fa-instagram"></i> <span data-i18n="hero.instagram">Мы в Instagram</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="scroll-indicator">
            <div class="mouse"></div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title" data-i18n="about.title">О компании SHANRAK KARGO</h2>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <p data-i18n="about.text1">
                        SHANRAK KARGO – это надежный партнер в доставке товаров из Китая в Казахстан. 
                        Мы специализируемся на быстрой и безопасной транспортировке грузов любого объема 
                        и веса. Наша компания находится в Астане, район Жагалау, что позволяет нам 
                        оперативно обрабатывать и отдовать в целости и сохранности.
                    </p>
                    <p data-i18n="about.text2">
                        Мы понимаем, как важна скорость доставки для вашего бизнеса. Поэтому мы 
                        предлагаем доставку от 7 дней от момента отправки из Китая. Наши партнеры 
                        в Китае обеспечивают быструю обработку заказов, а собственная логистическая 
                        сеть гарантирует надежную доставку по всему Казахстану.
                    </p>
                    <p data-i18n="about.text3">
                        Прозрачные тарифы, честный вес, профессиональная упаковка и полное 
                        сопровождение на всех этапах доставки – это то, что отличает нас от конкурентов. 
                        Мы работаем как с частными лицами, так и с компаниями, предлагая 
                        индивидуальные условия для каждого клиента.
                    </p>
                    <p class="about-highlight" data-i18n="about.highlight">
                        Доставляем ваши заказы из Китая быстро и без лишних забот
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section services-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title" data-i18n="services.title">Наши услуги</h2>
                <p class="section-subtitle" data-i18n="services.subtitle">Полный спектр услуг по доставке товаров из Китая</p>
            </div>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-shipping-fast"></i>
                    </div>
                    <h3 class="service-title" data-i18n="services.service1.title">Доставка товаров из Китая под ключ</h3>
                    <p class="service-description" data-i18n="services.service1.desc">
                        Полный цикл доставки: от приема заказа в Китае до доставки в ваш город. 
                        Сроки от 7 дней, прозрачные тарифы, отслеживание на каждом этапе.
                    </p>
                    <ul class="service-features">
                        <li><i class="fas fa-check-circle"></i> <span data-i18n="services.service1.feat1">Доставка от 7 дней</span></li>
                        <li><i class="fas fa-check-circle"></i> <span data-i18n="services.service1.feat2">Любой объем груза</span></li>
                        <li><i class="fas fa-check-circle"></i> <span data-i18n="services.service1.feat3">Полное сопровождение</span></li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-warehouse"></i>
                    </div>
                    <h3 class="service-title" data-i18n="services.service2.title">Консолидация и проверка товара на складе</h3>
                    <p class="service-description" data-i18n="services.service2.desc">
                        Наш склад в Китае позволяет объединять заказы из разных магазинов, 
                        проверять качество товаров и упаковывать их для безопасной транспортировки.
                    </p>
                    <ul class="service-features">
                        <li><i class="fas fa-check-circle"></i> <span data-i18n="services.service2.feat1">Объединение заказов</span></li>
                        <li><i class="fas fa-check-circle"></i> <span data-i18n="services.service2.feat2">Проверка качества</span></li>
                        <li><i class="fas fa-check-circle"></i> <span data-i18n="services.service2.feat3">Фотоотчет товара</span></li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-file-alt"></i>
                    </div>
                    <h3 class="service-title" data-i18n="services.service3.title">Оформление документов и таможни</h3>
                    <p class="service-description" data-i18n="services.service3.desc">
                        Мы берем на себя все вопросы, связанные с таможенным.\
                        Вы получаете груз уже с полностью соглосившись на наши условия.
                    </p>
                    <ul class="service-features">
                        <li><i class="fas fa-check-circle"></i> <span data-i18n="services.service3.feat1">Таможенное оформление</span></li>
                        <li><i class="fas fa-check-circle"></i> <span data-i18n="services.service3.feat2">Подготовка документов</span></li>
                        <li><i class="fas fa-check-circle"></i> <span data-i18n="services.service3.feat3">Консультации по вопросам</span></li>
                    </ul>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-truck"></i>
                    </div>
                    <h3 class="service-title" data-i18n="services.service4.title">Отправка по Казахстану</h3>
                    <p class="service-description" data-i18n="services.service4.desc">
                        Доставка по всем городам Казахстана. Работаем с надежными транспортными 
                        компаниями и курьерскими службами для быстрой доставки в ваш город.
                    </p>
                    <ul class="service-features">
                        <li><i class="fas fa-check-circle"></i> <span data-i18n="services.service4.feat1">Доставка по всему Казахстану</span></li>
                        <li><i class="fas fa-check-circle"></i> <span data-i18n="services.service4.feat2">Быстрая отправка</span></li>
                        <li><i class="fas fa-check-circle"></i> <span data-i18n="services.service4.feat3">Отслеживание доставки</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Wholesale Section -->
    <section id="wholesale" class="section wholesale-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title" data-i18n="wholesale.title">Оптовикам выгодный тариф</h2>
                <p class="section-subtitle" data-i18n="wholesale.subtitle">Специальные условия для оптовых покупателей</p>
            </div>
            <div class="wholesale-content">
                <div class="wholesale-text">
                    <p class="wholesale-desc" data-i18n="wholesale.desc">
                        Для постоянных клиентов и оптовых закупок мы предлагаем выгодные тарифы. 
                        Чем больше объем, тем ниже цена за килограмм.
                    </p>
                    <div class="wholesale-pricing">
                        <div class="pricing-card">
                            <div class="pricing-title" data-i18n="wholesale.price1.title">Стандартный тариф</div>
                            <div class="pricing-value">3,8$ <span data-i18n="wholesale.price1.unit">за 1 кг</span></div>
                        </div>
                        <div class="pricing-card highlight">
                            <div class="pricing-badge" data-i18n="wholesale.badge">Выгодный тариф</div>
                            <div class="pricing-title" data-i18n="wholesale.price2.title">От 10 кг</div>
                            <div class="pricing-value">3,6$ <span data-i18n="wholesale.price2.unit">за 1 кг</span></div>
                        </div>
                        <div class="pricing-card highlight">
                            <div class="pricing-badge" data-i18n="wholesale.badge">Выгодный тариф</div>
                            <div class="pricing-title" data-i18n="wholesale.price3.title">От 20 кг</div>
                            <div class="pricing-value">3,4$ <span data-i18n="wholesale.price3.unit">за 1 кг</span></div>
                        </div>
                    </div>
                    <div class="wholesale-benefits">
                        <div class="benefit-item">
                            <i class="fas fa-user-tie"></i>
                            <span data-i18n="wholesale.benefits2">Персональный менеджер</span>
                        </div>
                        <div class="benefit-item">
                            <i class="fas fa-clock"></i>
                            <span data-i18n="wholesale.benefits3">Приоритетная обработка заказов</span>
                        </div>
                        <div class="benefit-item">
                            <i class="fas fa-money-bill-wave"></i>
                            <span data-i18n="wholesale.benefits4">Гибкая система оплаты</span>
                        </div>
                    </div>
                    <div class="wholesale-cta">
                        <a href="https://wa.me/7761111515" target="_blank" class="btn btn-primary">
                            <i class="fab fa-whatsapp"></i> <span data-i18n="wholesale.contact">Свяжитесь с нами для получения индивидуального тарифа</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Marketplaces Section -->
    <section id="marketplaces" class="section marketplaces-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title" data-i18n="marketplaces.title">Китайские маркетплейсы</h2>
                <p class="section-subtitle" data-i18n="marketplaces.subtitle">Заказывайте товары на популярных китайских площадках</p>
            </div>
            <div class="marketplaces-grid">
                <div class="marketplace-card">
                    <div class="marketplace-icon">
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                    <h3 class="marketplace-name">Pinduoduo</h3>
                    <p class="marketplace-desc" data-i18n="marketplaces.pinduoduo.desc">Низкие цены и выгодные акции</p>
                    <a href="https://mobile.yangkeduo.com/goods1.html?ps=cIuFekbpG8" target="_blank" class="btn btn-secondary">
                        <i class="fas fa-external-link-alt"></i> <span data-i18n="marketplaces.visit">Перейти</span>
                    </a>
                </div>
                <div class="marketplace-card">
                    <div class="marketplace-icon">
                        <i class="fas fa-sneakers"></i>
                    </div>
                    <h3 class="marketplace-name">POIZON</h3>
                    <p class="marketplace-desc" data-i18n="marketplaces.poizon.desc">Аутентичные кроссовки и одежда</p>
                    <a href="https://play.google.com/store/apps/details?id=com.shizhuang.poizon.hk" target="_blank" class="btn btn-secondary">
                        <i class="fas fa-external-link-alt"></i> <span data-i18n="marketplaces.visit">Перейти</span>
                    </a>
                </div>
                <div class="marketplace-card">
                    <div class="marketplace-icon">
                        <i class="fas fa-store"></i>
                    </div>
                    <h3 class="marketplace-name">Taobao</h3>
                    <p class="marketplace-desc" data-i18n="marketplaces.taobao.desc">Огромный выбор товаров</p>
                    <a href="https://play.google.com/store/apps/details?id=com.taobao.taobao" target="_blank" class="btn btn-secondary">
                        <i class="fas fa-external-link-alt"></i> <span data-i18n="marketplaces.visit">Перейти</span>
                    </a>
                </div>
                <div class="marketplace-card">
                    <div class="marketplace-icon">
                        <i class="fas fa-industry"></i>
                    </div>
                    <h3 class="marketplace-name">1688 (Alibaba)</h3>
                    <p class="marketplace-desc" data-i18n="marketplaces.alibaba.desc">Оптовые закупки и B2B</p>
                    <a href="https://play.google.com/store/apps/details?id=com.alibaba.wireless" target="_blank" class="btn btn-secondary">
                        <i class="fas fa-external-link-alt"></i> <span data-i18n="marketplaces.visit">Перейти</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Prohibited Items Section -->
    <section id="prohibited" class="section prohibited-section">
        <div class="container">
            <div class="prohibited-content">
                <div class="prohibited-header">
                    <h2 class="section-title" data-i18n="prohibited.title">Товары, которые нельзя заказывать</h2>
                    <p class="prohibited-subtitle" data-i18n="prohibited.subtitle">Товары, запрещенные к заказу из Китая:</p>
                </div>
                <div class="prohibited-list">
                    <div class="prohibited-item">
                        <i class="fas fa-ban"></i>
                        <div class="prohibited-text">
                            <strong data-i18n="prohibited.item1.title">(Медицинские изделия и др.)</strong>
                            <span data-i18n="prohibited.item1.desc">(лекарства, витамины, фитотерапия и др.)</span>
                        </div>
                    </div>
                    <div class="prohibited-item">
                        <i class="fas fa-ban"></i>
                        <div class="prohibited-text">
                            <strong data-i18n="prohibited.item2.title">Предметы военного назначения</strong>
                            <span data-i18n="prohibited.item2.desc">(дрон, бинокль, ролик др.)</span>
                        </div>
                    </div>
                    <div class="prohibited-item">
                        <i class="fas fa-ban"></i>
                        <div class="prohibited-text">
                            <strong data-i18n="prohibited.item3.title">Устройства для майнинга</strong>
                            <span data-i18n="prohibited.item3.desc">(Биткоин, устройства для заработка электронных денег, видеокарта и др.)</span>
                        </div>
                    </div>
                    <div class="prohibited-item">
                        <i class="fas fa-ban"></i>
                        <div class="prohibited-text">
                            <strong data-i18n="prohibited.item4.title">Контрабандные товары</strong>
                            <span data-i18n="prohibited.item4.desc">(золото, серебро, норка/мех др.)</span>
                        </div>
                    </div>
                    <div class="prohibited-item">
                        <i class="fas fa-ban"></i>
                        <div class="prohibited-text">
                            <strong data-i18n="prohibited.item5.title">(Электронная сигарета , кальян др.)</strong>
                            <span data-i18n="prohibited.item5.desc"></span>
                        </div>
                    </div>
                    <div class="prohibited-item">
                        <i class="fas fa-ban"></i>
                        <div class="prohibited-text">
                            <strong data-i18n="prohibited.item6.title">Жидкости</strong>
                        </div>
                    </div>
                </div>
                <div class="prohibited-warning">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p data-i18n="prohibited.warning">
                        Если эти товары заказаны, владелец этих товаров будет нести все расходы и ответственность, 
                        если товары задерживаются из-за пограничного контроля или доставки. Разместите заказ, 
                        если вы согласны с этими условиями, если вы не согласны, не размещайте заказ.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Tracking Section -->
    <section id="tracking" class="section tracking-section">
        <div class="container">
            <div class="tracking-content">
                <div class="tracking-text">
                    <h2 class="section-title" data-i18n="tracking.title">Отследить груз</h2>
                    <p class="tracking-description" data-i18n="tracking.description">
                        Используйте наш сервис отслеживания, чтобы всегда знать, где находится ваш груз. 
                        Введите номер накладной и получите актуальную информацию о статусе доставки.
                    </p>
                    <a href="https://cargo-1.kz/" target="_blank" class="btn btn-primary btn-large">
                        <i class="fas fa-search"></i> <span data-i18n="tracking.button">Перейти к отслеживанию</span>
                    </a>
                </div>
                <div class="tracking-image">
                    <i class="fas fa-box-open"></i>
                </div>
            </div>
        </div>
    </section>

    <!-- Reviews Section -->
    <section id="reviews" class="section reviews-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title" data-i18n="reviews.title">Отзывы клиентов</h2>
                <p class="section-subtitle" data-i18n="reviews.subtitle">Пишут в WhatsApp и социальных сетях</p>
            </div>
            <div class="reviews-grid">
                <div class="review-card">
                    <div class="review-header">
                        <div class="review-name">Айгуль</div>
                        <div class="review-stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="review-text">
                        Күшті карго, заттарымыз шамамен 7 күнде келді, бәрі бүтін, қызметі ұнады. 
                        WhatsApp арқылы байланысқанда тез жауап берді, бәрін түсіндірді. Келесі 
                        рет қайтадан осы компанияға жүгінемін.
                    </p>
                </div>
                <div class="review-card">
                    <div class="review-header">
                        <div class="review-name">Дмитрий</div>
                        <div class="review-stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="review-text">
                        Заказывал товары для магазина. Доставили за 9 дней, все аккуратно упаковано, 
                        ничего не повредилось. Вес соответствует заявленному, никаких скрытых доплат. 
                        Операторы в WhatsApp всегда на связи, отвечают быстро. Рекомендую!
                    </p>
                </div>
                <div class="review-card">
                    <div class="review-header">
                        <div class="review-name">Асель</div>
                        <div class="review-stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="review-text">
                        Первый раз заказывала через карго, немного переживала. Но все прошло отлично! 
                        Заказ пришел за 8 дней, все целое, упаковка качественная. В WhatsApp помогли 
                        с оформлением, объяснили все нюансы. Очень довольна сервисом.
                    </p>
                </div>
                <div class="review-card">
                    <div class="review-header">
                        <div class="review-name">Ерлан</div>
                        <div class="review-stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="review-text">
                        Заказывал электронику из Китая. Доставили быстро, за 6 дней! Товар в идеальном 
                        состоянии, все работает. Отслеживание груза работает отлично, всегда знал где 
                        находится посылка. Честный вес, прозрачные тарифы. Спасибо SHANRAK CARGO!
                    </p>
                </div>
                <div class="review-card">
                    <div class="review-header">
                        <div class="review-name">Мария</div>
                        <div class="review-stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="review-text">
                        Регулярно заказываю товары через SHANRAK CARGO. Всегда все вовремя, качественно 
                        упаковано. Операторы в WhatsApp очень вежливые, помогают с любыми вопросами. 
                        Цены адекватные, никаких скрытых платежей. Лучший карго в Астане!
                    </p>
                </div>
                <div class="review-card">
                    <div class="review-header">
                        <div class="review-name">Нурлан</div>
                        <div class="review-stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="review-text">
                        Заказ пришел за 10 дней, все отлично! Упаковка крепкая, товары целые. 
                        В WhatsApp быстро отвечают, помогли с отслеживанием. Вес честный, тарифы 
                        прозрачные. Буду заказывать еще, рекомендую всем!
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Branches Section -->
    <section id="branches" class="section branches-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title" data-i18n="branches.title">Наши филиалы</h2>
                <p class="section-subtitle" data-i18n="branches.subtitle">Пункты выдачи заказов в разных районах</p>
            </div>
            <div class="branches-grid">
                <div class="branch-card">
                    <div class="branch-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h3 class="branch-name">BAGSTAN KARGO</h3>
                    <div class="branch-info">
                        <p><i class="fas fa-city"></i> <span data-i18n="branches.bagstan.city">г. Астана, район Есиль</span></p>
                        <p><i class="fas fa-home"></i> <span data-i18n="branches.bagstan.address">Адрес выдачи: ЖК "Багыстан"</span></p>
                        <p><i class="fas fa-building"></i> <span data-i18n="branches.branch">Филиал "SHANRAK KARGO"</span></p>
                        <p><i class="fas fa-phone"></i> <a href="tel:+77772230546">+7 777 223 05 46</a></p>
                    </div>
                </div>
                <div class="branch-card">
                    <div class="branch-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h3 class="branch-name">VICTORIA KARGO</h3>
                    <div class="branch-info">
                        <p><i class="fas fa-city"></i> <span data-i18n="branches.victoria.city">г. Астана, район Сарыарка</span></p>
                        <p><i class="fas fa-home"></i> <span data-i18n="branches.victoria.address">ул. Ы. Алтынсарина 6/2</span></p>
                        <p><i class="fas fa-building"></i> <span data-i18n="branches.branch">Филиал "SHANRAK KARGO"</span></p>
                        <p><i class="fas fa-phone"></i> <a href="tel:+77761111515">+7 776 111 1515</a></p>
                    </div>
                </div>
                <div class="branch-card">
                    <div class="branch-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h3 class="branch-name">LOTUS KARGO</h3>
                    <div class="branch-info">
                        <p><i class="fas fa-city"></i> <span data-i18n="branches.lotus.city">г. Астана, район Есиль</span></p>
                        <p><i class="fas fa-home"></i> <span data-i18n="branches.lotus.address">ул. Кунаева 35/1</span></p>
                        <p><i class="fas fa-building"></i> <span data-i18n="branches.branch">Филиал "SHANRAK KARGO"</span></p>
                        <p><i class="fas fa-phone"></i> <a href="tel:+77761111515">+7 776 111 1515</a></p>
                    </div>
                </div>
                <div class="branch-card">
                    <div class="branch-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h3 class="branch-name">AI KARGO</h3>
                    <div class="branch-info">
                        <p><i class="fas fa-city"></i> <span data-i18n="branches.ai.city">село Акмол (Малиновка)</span></p>
                        <p><i class="fas fa-home"></i> <span data-i18n="branches.ai.address">мкр. Бакыт, дом 12</span></p>
                        <p><i class="fas fa-building"></i> <span data-i18n="branches.branch">Филиал "SHANRAK KARGO"</span></p>
                        <p><i class="fas fa-phone"></i> <a href="tel:+77782692323">+7 778 269 2323</a></p>
                    </div>
                </div>
                <div class="branch-card">
                    <div class="branch-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h3 class="branch-name">ASYA KARGO</h3>
                    <div class="branch-info">
                        <p><i class="fas fa-city"></i> <span data-i18n="branches.asya.city">РК, Алматинская область, район Карасайский</span></p>
                        <p><i class="fas fa-home"></i> <span data-i18n="branches.asya.address">сельский округ Райымбекский, село Жанатурмыс, ул. Бөктер дом 5</span></p>
                        <p><i class="fas fa-building"></i> <span data-i18n="branches.branch">Филиал "SHANRAK KARGO"</span></p>
                        <p><i class="fas fa-phone"></i> <a href="tel:+77770336737">+7 777 033 6737</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contacts Section -->
    <section id="contacts" class="section contacts-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title" data-i18n="contacts.title">Контакты и адрес</h2>
            </div>
            <div class="contacts-content">
                <div class="contacts-info">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fab fa-whatsapp"></i>
                        </div>
                        <div class="contact-details">
                            <h3 data-i18n="contacts.whatsapp">WhatsApp</h3>
                            <a href="https://wa.me/7761111515" target="_blank">+7 776 111 1515</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fab fa-instagram"></i>
                        </div>
                        <div class="contact-details">
                            <h3 data-i18n="contacts.instagram">Instagram</h3>
                            <a href="https://www.instagram.com/shanrak.kargo?igsh=MTNkZGcybzd4em9mYg==" target="_blank">@shanrak.kargo</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h3 data-i18n="contacts.address">Адрес</h3>
                            <p data-i18n="contacts.addressText">Астана, район Жагалау</p>
                            <p class="contact-note" data-i18n="contacts.addressNote">находится внутри салона красоты Гульмира</p>
                            <a href="https://2gis.kz/astana/geo/70000001083950497" target="_blank" class="contact-link">
                                <i class="fas fa-external-link-alt"></i> <span data-i18n="contacts.mapLink">Открыть в 2GIS</span>
                            </a>
                        </div>
                    </div>
                    <div class="contact-item warehouse-item">
                        <div class="contact-icon">
                            <i class="fas fa-warehouse"></i>
                        </div>
                        <div class="contact-details">
                            <h3 data-i18n="contacts.warehouse">Адрес склада в Китае</h3>
                            <p class="warehouse-address">
                                高高花SHANRAK KARGO 18057977986<br>
                                浙江省金华市义乌市<br>
                                物华路39号哈萨克物流公司<br>
                                入库号 高高花 SHANRAK KARGO<br>
                                <strong>Имя (номер телефона, город)</strong>
                            </p>
                            <p class="warehouse-note" data-i18n="contacts.warehouseNote">
                                Для отправки груза укажите адрес склада и ваш номер телефона
                            </p>
                        </div>
                    </div>
                </div>
                <div class="map-container">
                    <iframe 
                        src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%5B71.4306%2C51.1694%5D%2C%22zoom%22%3A15%2C%22id%22%3A%2270000001083950497%22%7D" 
                        width="100%" 
                        height="400" 
                        frameborder="0" 
                        style="border:0; border-radius: 12px;"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3 class="footer-logo">SHANRAK CARGO</h3>
                    <p class="footer-description" data-i18n="footer.description">
                        Доставка товаров из Китая в Астану и по всему Казахстану
                    </p>
                </div>
                <div class="footer-section">
                    <h4 class="footer-title" data-i18n="footer.contacts">Контакты</h4>
                    <ul class="footer-links">
                        <li><a href="https://wa.me/7761111515" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a></li>
                        <li><a href="https://www.instagram.com/shanrak.kargo?igsh=MTNkZGcybzd4em9mYg==" target="_blank"><i class="fab fa-instagram"></i> Instagram</a></li>
                        <li><a href="https://2gis.kz/astana/geo/70000001083950497" target="_blank"><i class="fas fa-map-marker-alt"></i> 2GIS</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4 class="footer-title" data-i18n="footer.services">Услуги</h4>
                    <ul class="footer-links">
                        <li><a href="#services" data-i18n="services.service1.title">Доставка из Китая</a></li>
                        <li><a href="#services" data-i18n="services.service2.title">Консолидация</a></li>
                        <li><a href="#services" data-i18n="services.service3.title">Таможенное оформление</a></li>
                        <li><a href="https://cargo-1.kz/" target="_blank"><i class="fas fa-search"></i> <span data-i18n="footer.tracking">Отследить груз</span></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 SHANRAK CARGO. <span data-i18n="footer.copyright">Все права защищены.</span></p>
            </div>
        </div>
    </footer>

    <script src="translations.js"></script>
    <script>
        // Wait for translations to load before initializing language
        function initLanguage() {
            if (typeof translations !== 'undefined') {
                // Initialize language switching after translations are loaded
                let currentLang = localStorage.getItem('lang') || 'ru';
                const htmlLang = document.getElementById('htmlLang');

                function setLanguage(lang) {
                    currentLang = lang;
                    localStorage.setItem('lang', lang);
                    if (htmlLang) {
                        htmlLang.setAttribute('lang', lang);
                    }
                    document.documentElement.setAttribute('lang', lang);
                    
                    // Update active button
                    document.querySelectorAll('.lang-btn').forEach(btn => {
                        btn.classList.remove('active');
                        if (btn.dataset.lang === lang) {
                            btn.classList.add('active');
                        }
                    });
                    
                    // Update all text elements
                    document.querySelectorAll('[data-i18n]').forEach(element => {
                        const key = element.dataset.i18n;
                        const keys = key.split('.');
                        let value = translations[lang];
                        
                        if (!value) return;
                        
                        for (let k of keys) {
                            if (value && typeof value === 'object') {
                                value = value[k];
                            } else {
                                value = null;
                                break;
                            }
                        }
                        
                        if (value !== null && value !== undefined) {
                            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                                element.value = value;
                            } else if (element.tagName === 'SPAN') {
                                // Для span элементов (обычно внутри кнопок/ссылок с иконками) просто заменяем текст
                                element.textContent = value;
                            } else {
                                // Для других элементов проверяем наличие иконок
                                const icons = element.querySelectorAll('i, svg, img');
                                if (icons.length > 0) {
                                    // Сохраняем иконки и заменяем только текст
                                    const iconHTML = Array.from(icons).map(icon => icon.outerHTML).join('');
                                    element.innerHTML = iconHTML + ' ' + value;
                                } else {
                                    // Нет иконок - просто заменяем текст
                                    element.textContent = value;
                                }
                            }
                        }
                    });
                    
                    // Обновляем title страницы
                    const titleElement = document.querySelector('title');
                    if (titleElement && translations[lang] && translations[lang].meta && translations[lang].meta.title) {
                        titleElement.textContent = translations[lang].meta.title;
                    }
                }

                // Initialize language
                setLanguage(currentLang);

                // Language switcher buttons
                document.querySelectorAll('.lang-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const lang = btn.dataset.lang;
                        setLanguage(lang);
                    });
                });
            } else {
                setTimeout(initLanguage, 100);
            }
        }
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initLanguage);
        } else {
            initLanguage();
        }
    </script>
    <script src="script.js"></script>
</body>
</html>
