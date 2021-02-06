import React, { FC } from 'react'

import CreateForm from '../../../../../components/common/forms/CreateForm/CreateForm'
import useDealTypeOnChange from '../../hooks/change/useDealTypeOnChange'

const DealTypeCreateForm: FC = () => {
    const { isConfirmEnabled, fields, onClickConfirmCreate, onClickCancel } = useDealTypeOnChange()

    return (
        <CreateForm
            fields={fields}
            isConfirmEnabled={isConfirmEnabled}
            onClickConfirm={onClickConfirmCreate}
            onClickCancel={onClickCancel}
        />
    )
}

export default DealTypeCreateForm
