export const slugify = (text: string): string => {
    const translit: { [key: string]: string } = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts',
        'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
    };

    return text
        .toLowerCase()
        .split('')
        .map(char => translit[char] || char)
        .join('')
        .replace(/,/g, '')       // убираем запятые
        .replace(/\s+/g, '-')    // пробелы в дефисы
        .replace(/[^-a-z0-9]/g, '') // удаляем всё что не буквы, цифры и дефисы
        .replace(/--+/g, '-')    // убираем двойные дефисы
        .trim();
};