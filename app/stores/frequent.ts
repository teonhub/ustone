    import { defineStore } from 'pinia';
    import { ref } from 'vue';

    interface frequentElement {
        frame_url:  string;
        frame_img:  string;
        frame_name: string;
        frame_rate: string;
        frame_bran: string;
        frame_stat: string;
    }

    export const useFrequentElementsStore = defineStore('frequentElements', () => {
        const frequentElements = ref<frequentElement[]>([
            {
                frame_url: "/",
                frame_img: "ya-tro-1.jpg",
                frame_name: "Инсбрук",
                frame_rate: "980",
                frame_bran: "Ярстрой",
                frame_stat: "В наличии"
            },
            {
                frame_url: "/",
                frame_img: "ya-tro-2.png",
                frame_name: "Вилла",
                frame_rate: "980",
                frame_bran: "Ярстрой",
                frame_stat: "В наличии"
            },
            {
                frame_url: "/",
                frame_img: "ar-tro-1.jpeg",
                frame_name: "Инсбрук Альт",
                frame_rate: "900",
                frame_bran: "Артстрой",
                frame_stat: "В наличии"
            },
            {
                frame_url: "/",
                frame_img: "ar-tro-2.jpeg",
                frame_name: "Инсбрук Тироль",
                frame_rate: "1 070",
                frame_bran: "Артстрой",
                frame_stat: "В наличии"
            },
            {
                frame_url: "/",
                frame_img: "ar-tro-3.jpeg",
                frame_name: "Валенсия",
                frame_rate: "1 240",
                frame_bran: "Артстрой",
                frame_stat: "В наличии"
            },
            {
                frame_url: "/",
                frame_img: "ar-tro-4.jpeg",
                frame_name: "Новый город Рид",
                frame_rate: "1 240",
                frame_bran: "Артстрой",
                frame_stat: "В наличии"
            },
            {
                frame_url: "/",
                frame_img: "ya-tro-3.jpg",
                frame_name: "Старый Город",
                frame_rate: "820",
                frame_bran: "Ярстрой",
                frame_stat: "В наличии"
            },
            {
                frame_url: "/",
                frame_img: "ya-tro-4.jpg",
                frame_name: "Кирпич",
                frame_rate: "780",
                frame_bran: "Ярстрой",
                frame_stat: "В наличии"
            }
        ]);

        return { frequentElements };
        
    });