<template>
    <footer>
        <div class="container-large">
            <div class="footer-contact">
                <LayoutAppFooterBrand name="Greatstone" />
                <LayoutAppFooterBrand name="Артстрой" />
                <LayoutAppFooterBrand name="Ярстрой" />
                <LayoutAppFooterBrand name="Ecodecking" />
                <LayoutAppFooterBrand name="Gidrolica" />
                <LayoutAppFooterBrand name="Interbau" />
            </div>
        </div>
        <div class="copyright">
            <div class="container-large">
                <div class="footer-logo">
                    <div>
                        <UiAppLogotype />
                    </div>
                    <div>
                        <a class="btn-phone" href="tel:+79624752400">Тел. +7 962 475 24 00</a>
                    </div>
                </div>
                <div class="grid-footer">
                    <div>
                        <ul>
                            <li>Политика</li>
                            <li><NuxtLink to="/policy">Политика конфиденциальности</NuxtLink></li>
                            <li><NuxtLink to="/policy">Пользовательское соглашение</NuxtLink></li>
                            <li><NuxtLink to="/policy">Правила использование файлов-cookie</NuxtLink></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Категории</li>
                            <li><NuxtLink to="/">Товарный бетон и раствор</NuxtLink></li>
                            <li><NuxtLink to="/">Бордюрый камень</NuxtLink></li>
                            <li><NuxtLink to="/">Водоотводные системы</NuxtLink></li>
                            <li><NuxtLink to="/">Декоративный камень</NuxtLink></li>
                            <li><NuxtLink to="/">Малые архитектурные формы</NuxtLink></li>
                            <li><NuxtLink to="/">Стеновые материалы</NuxtLink></li>
                            <li><NuxtLink to="/">Террасная доска</NuxtLink></li>
                            <li><NuxtLink to="/">Тротуарная плитка</NuxtLink></li>
                            <li><NuxtLink to="/">Ступени</NuxtLink></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Контактная информация</li>
                            <li>г. Орёл, ул. Московская, 43а</li>
                            <li>9:00 - 18:00 : Пн. – Пт. без перерыва</li>
                            <li>Почта: <a href="mailto:under-stone@yandex.ru">under-stone@yandex.ru</a></li>
                        </ul>
                    </div> 
                </div>
                <div class="btns-service">
                    <LayoutAppFooterRating />
                    <LayoutAppFooterSocial />
                </div>
                <div class="footer-copyright">
                    <LayoutAppFooterBottom />
                </div>
            </div>
        </div>
    </footer>
</template>