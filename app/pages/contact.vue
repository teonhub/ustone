<script setup lang="ts">

    definePageMeta({
        breadcrumb: 'Контактная информация'
    })

</script>

<template>
    <main>
        <section class="layout-commodity">
            <div class="container-large">
                <InterfaceBreadcrumbs />
                <InterfaceHeading title="Контактная информация" />

                <div class="wrap-contact">
                    <div class="contact-line">
                        <div>Адрес</div>
                        <div>Орёл, ул. Московская, 43А</div>
                    </div>
                    <div class="contact-line">
                        <div>Офис продаж (Whatsapp/Telegram)</div>
                        <div>+7 962 475 24 00</div>
                    </div>    
                    <div class="contact-line">
                        <div>Руководитель отдела продаж (Whatsapp/Telegram)</div>
                        <div>+7 910 201 07 85</div>
                    </div>
                    <div class="contact-line">
                        <div>Электронная почта</div>
                        <div>under-stone@yandex.ru</div>
                    </div>    
                    <div class="contact-line">
                        <div>График работы</div>
                        <div>пн.-пт. 9:00 - 18:00</div>
                    </div>
                </div>
                <div>
                     <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac23eba7a73fa1597f687f8f705c0ee96c86af6386fb012ffe1298bc385320aa3&amp;source=constructor"
                        width="100%"
                        height="700"
                        frameborder="0">
                    </iframe>
                </div>
            </div>
        </section>
    </main>
</template>