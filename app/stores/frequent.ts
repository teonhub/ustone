    import { defineStore } from 'pinia';
    import { ref } from 'vue';

    interface frequentElement {
        frame_url:  string;
        frame_img:  string;
        frame_name: string;
        frame_rate: string;
        frame_bran: string;
    }

    export const useFrequentElementsStore = defineStore('frequentElements', () => {
    const frequentElements = ref<frequentElement[]>([
	{
		frame_url: "/",
		frame_img: "ya-tro-1.jpg",
		frame_name: "Тротуарная плитка Инсбрук (песчаный) гладкая 40мм",
		frame_rate: "980",
		frame_bran: "Ярстрой"
	},
	{
		frame_url: "/",
		frame_img: "ya-tro-2.png",
		frame_name: "Тротуарная плитка Вилла (песчаный) гладкая 40мм",
		frame_rate: "980",
		frame_bran: "Ярстрой"
	},
	{
		frame_url: "/",
		frame_img: "ar-tro-1.jpeg",
		frame_name: "Тротуарная плитка Инсбрук Альт (песчаный) гладкая 40мм",
		frame_rate: "900",
		frame_bran: "Артстрой"
	},
	{
		frame_url: "/",
		frame_img: "ar-tro-2.jpeg",
		frame_name: "Тротуарная плитка Инсбрук Тироль (песчаный) гладкая 40мм",
		frame_rate: "1 070",
		frame_bran: "Артстрой"
	},
	{
		frame_url: "/",
		frame_img: "ar-tro-3.jpeg",
		frame_name: "Тротуарная плитка Валенсия (песчаный) гладкая 40мм",
		frame_rate: "1 240",
		frame_bran: "Артстрой"
	},
	{
		frame_url: "/",
		frame_img: "ar-tro-4.jpeg",
		frame_name: "Тротуарная плитка Новый город Рид (песчаный) гладкая 40мм",
		frame_rate: "1 240",
		frame_bran: "Артстрой"
	},
	{
		frame_url: "/",
		frame_img: "ya-tro-3.jpg",
		frame_name: "Тротуарная плитка Старый Город (песчаный) гладкая 40мм",
		frame_rate: "820",
		frame_bran: "Ярстрой"
	},
	{
		frame_url: "/",
		frame_img: "ya-tro-4.jpg",
		frame_name: "Тротуарная плитка Кирпич (песчаный) гладкая 40мм",
		frame_rate: "780",
		frame_bran: "Ярстрой"
	}]);
    return { frequentElements };
});