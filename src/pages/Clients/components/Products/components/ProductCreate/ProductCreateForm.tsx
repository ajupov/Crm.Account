import React, { FC } from 'react'

import CreateForm from '../../../../../../components/common/forms/CreateForm/CreateForm'
import useProductCreate from './hooks/useProductCreate'

const ProductCreateForm: FC = () => {
    const { isConfirmEnabled, fields, onClickConfirm, onClickCancel } = useProductCreate()

    return (
        <CreateForm
            fields={fields}
            isConfirmEnabled={isConfirmEnabled}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductCreateForm
