import { MenuItemProps } from '../../../components/Menu/Menu'

const useProductsMenu = (): MenuItemProps[] => [
    { name: 'Продукты', path: '/products' },
    { name: 'Категории', path: '/products/categories' },
    { name: 'Атрибуты', path: '/products/attributes' },
    { name: 'Статусы', path: '/products/statuses' }
]

export default useProductsMenu
