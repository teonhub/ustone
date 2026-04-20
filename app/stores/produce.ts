import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Produce {
    id:             string
    sku:            string
    type:           string
    series:         string
    name:           string
    base_color:     string
    surface:        string
    type_color:     string
    height:         string
    size:           string
    quantity:       string
    manufacturer:   string
    price:          string
    discounted:     string
    picture:        string
    slug:           string // Добавляем в интерфейс
}

export const useProduceStore = defineStore('stones', () => {
    const rawStones = [
          {
            id: "1",
            sku: "П-01",
            type: "Тротуарная плитка",
            series: "Новый город",
            name: "Новый город, 40мм, Белый, гладкая",
            base_color: "Белый",
            surface: "гладкая",
            type_color: "Моноколор",
            height: "40",
            size: "260х160, 160х160,160х100",
            quantity: "18,144",
            manufacturer: "Артстрой",
            price: "1100",
            discounted: "0",
            picture: "no-image.jpg"
        },
        {
            id: "2",
            sku: "П-01",
            type: "Тротуарная плитка",
            series: "Новый город Лион",
            name: "Новый город Лион, 60мм, Серый, гладкая",
            base_color: "Серый",
            surface: "гладкая",
            type_color: "Моноколор",
            height: "40",
            size: "255х155, 155х155, 155х95",
            quantity: "18,144",
            manufacturer: "Артстрой",
            price: "1100",
            discounted: "0",
            picture: "no-image.jpg"
        }
    ]

    // Автоматически создаем слаги для каждого товара
    const stones = ref<Produce[]>(rawStones.map(item => ({
        ...item,
        slug: slugify(item.name)
    })))

    return { stones }
})