import stones from '../data/stones_art.json'

export default defineEventHandler((event) => {
    return stones.map(item => ({
        ...item,
        slug: slugify(item.name)
    }))
})