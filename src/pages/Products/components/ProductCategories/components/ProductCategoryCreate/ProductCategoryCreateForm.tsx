import React, { FC } from 'react'

import Create from '../../../../../../components/Create/Create'
import useProductCategoryCreate from './hooks/useProductCategoryCreate'

const ProductCategoryCreateForm: FC = () => {
    const { isConfirmEnabled, fields, onClickConfirm, onClickCancel } = useProductCategoryCreate()

    return (
        <Create
            fields={fields}
            isConfirmEnabled={isConfirmEnabled}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductCategoryCreateForm
