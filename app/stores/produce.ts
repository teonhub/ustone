import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Produce {
    id:             number
    sku:            string
    type:           string
    series:         string
    name:           string
    color:          string
    surface:        string
    height:         string
    size:           string
    quantity:       string
    manufacturer:   string
    price:          string
    discounted:     string
    picture:        string
    description:    string
}

export const useProduceStore = defineStore('stones', () => {
    const stones = ref<Produce[]>([
        {
            id: 1,
            sku: '',
            type: '',
            series: '',
            name: '',
            color: '',
            surface: '',
            height: '',
            size: '',
            quantity: '',
            manufacturer: '',
            price: '',
            discounted: '',
            picture: '',
            description: ''
        }
    ])

    return {
        stones
    }
})