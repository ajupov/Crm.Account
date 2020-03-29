import React, { FC } from 'react'

import { Confirm } from 'semantic-ui-react'
import useDeleteActions from '../hooks/actions/useDeleteActions'

const ProductCategoryDelete: FC = () => {
    const { isDeleting, onClickConfirm, onClickCancel } = useDeleteActions()

    return (
        <Confirm
            open={isDeleting}
            size="mini"
            header="Удаление категории"
            content="Вы уверены, что хотите удалить категорию?"
            onCancel={onClickCancel}
            cancelButton="Нет"
            onConfirm={onClickConfirm}
            confirmButton="Да"
        />
    )
}

export default ProductCategoryDelete
