<script setup>

    import { useProduceStore } from '~/stores/produce'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const store = useProduceStore()

    await useAsyncData('stones', () => store.fetchStones())

    const product = computed(() => {
        return store.stones.find(s => s.slug === route.params.slug)
    })

    useHead({
        title: product.value ? product.value.name : 'Загрузка...'
    })

</script>

<template>
    <main>
        <section class="layout-commodity">
            <div class="container-large">
                <InterfaceBreadcrumbs />
                    <div v-if="product" class="layout-product">
                        <div class="gallery-product">
                            <img :src="`/files/image/season/${product.picture}`" :alt="product.name">
                        </div>
                        <div class="product-detail">
                            <h1>{{ product.name }}</h1>
                                <ul>
                                    <li class="brand">{{ product.manufacturer }}</li>
                                    <li>{{ product.type }}</li>
                                </ul>
                                <div class="add-cart">
                                    <div class="product-price">{{ product.price }} ₽</div>
                                    <div class="product-art">Код товара {{ product.sku }}</div>
                                    <div class="product-btns">
                                        <button type="button" class="button-submit-application">Добавить в избранное</button>
                                        <button type="button" class="button-submit-application">Оформить заказ</button>
                                    </div>
                                </div>
                                <h2>Характеристики</h2>
                                <div class="product-description">
                                    <div class="product-specf">
                                        <div>Цвет</div>
                                        <div>{{ product.base_color }}</div>
                                    </div>
                                    <div class="product-specf">
                                        <div>Тип цвета</div>
                                        <div>{{ product.type_color }}</div>
                                    </div>
                                    <div class="product-specf">
                                        <div>Количество</div> 
                                        <div>{{ product.quantity }}</div>
                                    </div>
                                    <div class="product-specf">
                                        <div>Поверхность</div>
                                        <div>{{ product.surface }}</div>
                                    </div>
                                    <div class="product-specf">
                                        <div>Высота</div>
                                        <div>{{ product.height }} мм</div>
                                    </div>
                                    <div class="product-specf">
                                        <div>Размер</div>
                                        <div>{{ product.size }}</div>
                                    </div>
                                    <div class="product-specf">
                                        <div>Количество</div> 
                                        <div>{{ product.quantity }}</div>
                                    </div>
                                </div>
                                <NuxtLink to="/" class="btn-back">Вернуться в каталог</NuxtLink>
                                    <p v-if="product.discounted !== '0'"><strong>Скидка:</strong> {{ product.discounted }}%</p>
                                </div>
                            </div>
                            <div v-else>
                                Товар не найден
                            </div>
                        </div>
                    </section>
                </main>
</template>

<style scoped>

.layout-product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    justify-content: stretch;
}

.product-detail {
    padding: 35px;
    border: 1px solid #ebebeb;
    border-radius: 4px;
}

.product-detail h1 {
    font-family: 'DrukWide';
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;
}

.product-detail h2 {
    font-size: 15px;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 15px;
}

.product-detail ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 50px;
}

.product-detail ul li{
    font-size: 13px;
    font-weight: 400;
    padding: 9px 15px;
    background-color: #f3f3f3;
    color: #454545;
    border-radius: 19px;
    margin-right: 10px;
}

.product-detail .product-art {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 35px;
    color: #999999;
}

.product-detail .product-color {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 45px;
}

.product-detail .product-price {
    font-family: 'DrukWide';
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 5px;
}

.product-detail .product-specf {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    font-size: 14px;
    border-bottom: 1px dashed #ddd;
}

.product-detail .product-specf:last-child {
    border-bottom: 0;
}

.product-detail .add-cart {
    max-width: 100%;
    margin-bottom: 50px;
}

.product-detail .product-btns{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    justify-content: stretch;
}

.product-detail .product-description{
    max-width: 100%;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    padding: 15px 25px;
    border-radius: 4px;
}

.product-detail .btn-back{
    display: block;
    margin-top: 20px;
    height: 48px;
    width: 100%;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 48px;
    border-radius: 4px;
    text-align: center;
    background-color: #f3f3f3;
    text-decoration: none;
    transition: all 0.3s ease-in-out 0s;
}

</style>

