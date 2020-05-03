import React, { FC } from 'react'

import Create from '../../../../../../components/Create/Create'
import useProductAttributeCreate from './hooks/useProductAttributeCreate'

const ProductAttributeCreateForm: FC = () => {
    const { isConfirmEnabled, fields, onClickConfirm, onClickCancel } = useProductAttributeCreate()

    return (
        <Create
            fields={fields}
            isConfirmEnabled={isConfirmEnabled}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductAttributeCreateForm
