import React, { FC } from 'react'

import Create from '../../../../../../components/Create/Create'
import useProductStatusCreate from './hooks/useProductStatusCreate'

const ProductStatusCreateForm: FC = () => {
    const { isConfirmEnabled, fields, onClickConfirm, onClickCancel } = useProductStatusCreate()

    return (
        <Create
            fields={fields}
            isConfirmEnabled={isConfirmEnabled}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductStatusCreateForm
