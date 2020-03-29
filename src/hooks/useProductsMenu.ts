import { MenuItemProps } from '../components/menu/Menu'

const useProductsMenu = (): { menu: MenuItemProps[] } => ({
    menu: [
        { name: 'Продукты', path: '/products' },
        { name: 'Категории', path: '/products/categories' },
        { name: 'Атрибуты', path: '/products/attributes' },
        { name: 'Статусы', path: '/products/statuses' }
    ]
})

export default useProductsMenu
