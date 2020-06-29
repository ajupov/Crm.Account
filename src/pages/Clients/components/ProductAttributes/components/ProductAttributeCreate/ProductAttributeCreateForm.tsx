import React, { FC } from 'react'

import CreateForm from '../../../../../../components/common/forms/CreateForm/CreateForm'
import useProductAttributeCreate from './hooks/useProductAttributeCreate'

const ProductAttributeCreateForm: FC = () => {
    const { isConfirmEnabled, fields, onClickConfirm, onClickCancel } = useProductAttributeCreate()

    return (
        <CreateForm
            fields={fields}
            isConfirmEnabled={isConfirmEnabled}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductAttributeCreateForm
