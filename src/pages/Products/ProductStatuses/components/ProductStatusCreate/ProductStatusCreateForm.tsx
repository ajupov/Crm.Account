import React, { FC } from 'react'

import CreateForm from '../../../../../components/common/forms/CreateForm/CreateForm'
import useProductStatusOnChange from '../../hooks/change/useProductStatusOnChange'

const ProductStatusCreateForm: FC = () => {
    const { isConfirmEnabled, fields, onClickConfirmCreate, onClickCancel } = useProductStatusOnChange()

    return (
        <CreateForm
            fields={fields}
            isConfirmEnabled={isConfirmEnabled}
            onClickConfirm={onClickConfirmCreate}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductStatusCreateForm
