<script setup lang="ts">

    definePageMeta({
        breadcrumb: 'Сертификаты'
    });

    interface Sertificate {
        sertificate_url:  string;
        sertificate_name: string;
        sertificate_type: string;
        sertificate_size: string;
    }


    const sertificates: Sertificate[] = [
        {
            sertificate_url: "/files/pdf/understone-serf-001.pdf",
            sertificate_name: "Сертификат соответствия на Камни бетонные бортовые",
            sertificate_type: "Добровольный",
            sertificate_size: "901"
        },
        {
            sertificate_url: "/files/pdf/understone-serf-002.pdf",
            sertificate_name: "Сертификат соответствия на Камни бетонные бортовые ТР ТС 014",
            sertificate_type: "Обязательный",
            sertificate_size: "984"
        },
        {
            sertificate_url: "/files/pdf/understone-serf-003.pdf",
            sertificate_name: "Сертификат соответствия на Камни бетонные стеновые",
            sertificate_type: "Добровольный",
            sertificate_size: "998"
        },
        {
            sertificate_url: "/files/pdf/understone-serf-004.pdf",
            sertificate_name: "Сертификат соответствия на Камни бетонные стеновые",
            sertificate_type: "Пожарный",
            sertificate_size: "998"
        },
        {
            sertificate_url: "/files/pdf/understone-serf-005.pdf",
            sertificate_name: "Сертификат соответствия на Лотки прикромочные Б1-20-50 ТР ТС 014",
            sertificate_type: "Обязательный",
            sertificate_size: "1 596"
        },
        {
            sertificate_url: "/files/pdf/understone-serf-006.pdf",
            sertificate_name: "Сертификат соответствия на малые архитектурные формы",
            sertificate_type: "Добровольный",
            sertificate_size: "968"
        },
        {
            sertificate_url: "/files/pdf/understone-serf-007.pdf",
            sertificate_name: "Сертификат соответствия на Плиты бетонные тротуарные",
            sertificate_type: "Обязательный",
            sertificate_size: "787"
        },
        {
            sertificate_url: "/files/pdf/understone-serf-008.pdf",
            sertificate_name: "Сертификат соответствия на Плиты бетонные тротуарные по ТУ",
            sertificate_type: "Добровольный",
            sertificate_size: "510"
        },
        {
            sertificate_url: "/files/pdf/understone-serf-009.pdf",
            sertificate_name: "Сертификат соответствия на Плиты бетонные тротуарные РБ",
            sertificate_type: "Добровольный",
            sertificate_size: "1194"
        },
        {
            sertificate_url: "/files/pdf/understone-serf-010.pdf",
            sertificate_name: "Сертификат соответствия на покрытие на основе красок водно-дисперсионных",
            sertificate_type: "Обязательный",
            sertificate_size: "690"
        },
        {
            sertificate_url: "/files/pdf/understone-serf-011.pdf",
            sertificate_name: "Сертификат соответствия на изделия профильные из минерально-полимерного композита",
            sertificate_type: "Добровольный",
            sertificate_size: "352"
        },
        {
            sertificate_url: "/files/pdf/understone-serf-012.pdf",
            sertificate_name: "Сертификат соответствия на изделия пластиковые лотки, пескоуловители, дождеприемники, трапы",
            sertificate_type: "Добровольный",
            sertificate_size: "444"
        }
    ];

</script>

<template>
    <main>
        <section class="layout-commodity">
            <div class="container-large">
                <UiAppBreadcrumbs />
                <UiAppPageHeading title="Сертификаты" />

                <div class="document-items">
                    <div v-for="sertificate in sertificates" :key="sertificate.sertificate_name" class="document-item">
                        <a target="_blank" :href="sertificate.sertificate_url">
                            <div>
                                {{ sertificate.sertificate_name }}
                            </div>
                            <div class="document-option">
                                <div class="document-format">PDF</div>
                                <div class="document-format">
                                    {{ sertificate.sertificate_type }}
                                </div>
                                <div class="document-size">
                                    {{ sertificate.sertificate_size }} Кб
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>