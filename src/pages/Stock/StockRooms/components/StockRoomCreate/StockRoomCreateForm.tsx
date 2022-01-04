import React, { FC } from 'react'

import CreateForm from '../../../../../components/common/forms/CreateForm/CreateForm'
import useStockRoomOnChange from '../../hooks/change/useStockRoomOnChange'

const StockRoomCreateForm: FC = () => {
    const { isConfirmEnabled, fields, onClickConfirmCreate, onClickCancel } = useStockRoomOnChange()

    return (
        <CreateForm
            fields={fields}
            isConfirmEnabled={isConfirmEnabled}
            onClickConfirm={onClickConfirmCreate}
            onClickCancel={onClickCancel}
        />
    )
}

export default StockRoomCreateForm
