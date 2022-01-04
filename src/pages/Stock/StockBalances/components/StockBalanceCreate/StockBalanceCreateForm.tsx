import React, { FC } from 'react'

import CreateForm from '../../../../../components/common/forms/CreateForm/CreateForm'
import useStockBalanceOnChange from '../../hooks/change/useStockBalanceOnChange'

const StockBalanceCreateForm: FC = () => {
    const { isConfirmEnabled, fields, onClickConfirmCreate, onClickCancel } = useStockBalanceOnChange()

    return (
        <CreateForm
            fields={fields}
            isConfirmEnabled={isConfirmEnabled}
            onClickConfirm={onClickConfirmCreate}
            onClickCancel={onClickCancel}
        />
    )
}

export default StockBalanceCreateForm
