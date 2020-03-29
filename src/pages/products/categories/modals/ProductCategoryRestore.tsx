import React, { FC } from 'react'

import { Confirm } from 'semantic-ui-react'
import useRestoreActions from '../hooks/actions/useRestoreActions'

const ProductCategoryRestore: FC = () => {
    const { isRestoring, onClickConfirm, onClickCancel } = useRestoreActions()

    return (
        <Confirm
            open={isRestoring}
            size="mini"
            header="Восстановление категории"
            content="Вы уверены, что хотите восстановить категорию?"
            onCancel={onClickCancel}
            cancelButton="Нет"
            onConfirm={onClickConfirm}
            confirmButton="Да"
        />
    )
}

export default ProductCategoryRestore
