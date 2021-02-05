import React, { FC } from 'react'

import CreateForm from '../../../../../../components/common/forms/CreateForm/CreateForm'
import useLeadOnChange from '../../hooks/change/useLeadOnChange'

const LeadCreateForm: FC = () => {
    const { isConfirmEnabled, fields, onClickConfirmCreate, onClickCancel } = useLeadOnChange()

    return (
        <CreateForm
            fields={fields}
            isConfirmEnabled={isConfirmEnabled}
            onClickConfirm={onClickConfirmCreate}
            onClickCancel={onClickCancel}
        />
    )
}

export default LeadCreateForm
