import React, { FC } from 'react'

import Restore from '../../../../components/Restore/Restore'
import useProductCategoryRestore from './hooks/useProductCategoryRestore'

const ProductCategoryRestore: FC = () => {
    const { isRestoring, onClickConfirm, onClickCancel } = useProductCategoryRestore()

    return (
        <Restore
            isRestoring={isRestoring}
            title="Восстановление категории"
            content="Вы уверены, что хотите восстановить категорию?"
            onClickCancel={onClickCancel}
            onClickConfirm={onClickConfirm}
        />
    )
}

export default ProductCategoryRestore
