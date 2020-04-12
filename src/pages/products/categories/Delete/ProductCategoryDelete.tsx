import React, { FC } from 'react'

import Delete from '../../../../components/Delete/Delete'
import useProductCategoryDelete from './hooks/useProductCategoryDelete'

const ProductCategoryDelete: FC = () => {
    const { isDeleting, onClickConfirm, onClickCancel } = useProductCategoryDelete()

    return (
        <Delete
            isDeleting={isDeleting}
            title="Удаление категории"
            content="Вы уверены, что хотите удалить категорию?"
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductCategoryDelete
