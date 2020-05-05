import React, { FC } from 'react'

import Create from '../../../../../../components/Create/Create'
import useProductCreate from './hooks/useProductCreate'

const ProductCreateForm: FC = () => {
    const { isConfirmEnabled, fields, onClickConfirm, onClickCancel } = useProductCreate()

    return (
        <Create
            fields={fields}
            isConfirmEnabled={isConfirmEnabled}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductCreateForm
