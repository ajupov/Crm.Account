import React, { FC } from 'react'

import CreateForm from '../../../../../../components/common/forms/CreateForm/CreateForm'
import useContactAttributeCreate from './hooks/useContactAttributeCreate'

const ContactAttributeCreateForm: FC = () => {
    const { isConfirmEnabled, fields, onClickConfirm, onClickCancel } = useContactAttributeCreate()

    return (
        <CreateForm
            fields={fields}
            isConfirmEnabled={isConfirmEnabled}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
}

export default ContactAttributeCreateForm
