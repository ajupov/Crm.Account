import React, { FC } from 'react'

import CreateForm from '../../../../../../components/common/forms/CreateForm/CreateForm'
import useCustomerOnChange from '../../hooks/change/useCustomerOnChange'

const CustomerCreateForm: FC = () => {
    const { isConfirmEnabled, fields, onClickConfirmCreate, onClickCancel } = useCustomerOnChange()

    return (
        <CreateForm
            fields={fields}
            isConfirmEnabled={isConfirmEnabled}
            onClickConfirm={onClickConfirmCreate}
            onClickCancel={onClickCancel}
        />
    )
}

export default CustomerCreateForm
