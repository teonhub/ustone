<script setup lang="ts">

    definePageMeta({
        breadcrumb: 'Сертификаты'
    })

</script>

<template>
    <main>
        <section class="layout-commodity">
            <div class="container-large">
                <div class="bread-crumbs" aria-label="Хлебные крошки">
                    <AppBreadcrumbs />
                    <h1>Сертификаты</h1>
                </div>
                <div class="document-items">
                    <AppPDFitem url="/files/pdf/understone-serf-001.pdf" name="Сертификат соответствия на Камни бетонные бортовые" type="добровольный" size="901" />
                    <AppPDFitem url="/files/pdf/understone-serf-002.pdf" name="Сертификат соответствия на Камни бетонные бортовые ТР ТС 014" type="обязательный" size="984" />
                    <AppPDFitem url="/files/pdf/understone-serf-003.pdf" name="Сертификат соответствия на Камни бетонные стеновые" type="добровольный" size="998" />
                    <AppPDFitem url="/files/pdf/understone-serf-004.pdf" name="Сертификат соответствия на Камни бетонные стеновые" type="пожарный" size="998" />
                    <AppPDFitem url="/files/pdf/understone-serf-005.pdf" name="Сертификат соответствия на Лотки прикромочные Б1-20-50 ТР ТС 014" type="обязательный" size="1 596" />
                    <AppPDFitem url="/files/pdf/understone-serf-006.pdf" name="Сертификат соответствия на малые архитектурные формы" type="добровольный" size="968" />
                    <AppPDFitem url="/files/pdf/understone-serf-007.pdf" name="Сертификат соответствия на Плиты бетонные тротуарные" type="обязательный" size="787" />
                    <AppPDFitem url="/files/pdf/understone-serf-008.pdf" name="Сертификат соответствия на Плиты бетонные тротуарные по ТУ" type="добровольный" size="510" />
                    <AppPDFitem url="/files/pdf/understone-serf-009.pdf" name="Сертификат соответствия на Плиты бетонные тротуарные РБ" type="добровольный" size="1194" />
                    <AppPDFitem url="/files/pdf/understone-serf-010.pdf" name="Сертификат соответствия на покрытие на основе красок водно-дисперсионных" type="обязательный" size="690" />
                    <AppPDFitem url="/files/pdf/understone-serf-011.pdf" name="Сертификат соответствия на изделия профильные из минерально-полимерного композита" type="добровольный" size="352" />
                    <AppPDFitem url="/files/pdf/understone-serf-012.pdf" name="Сертификат соответствия на изделия пластиковые лотки, пескоуловители, дождеприемники, трапы" type="добровольный" size="444" />
                </div>
            </div>
        </section>
    </main>    
</template>