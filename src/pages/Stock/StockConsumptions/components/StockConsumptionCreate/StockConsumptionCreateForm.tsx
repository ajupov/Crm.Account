import React, { FC } from 'react'

import CreateForm from '../../../../../components/common/forms/CreateForm/CreateForm'
import useStockConsumptionOnChange from '../../hooks/change/useStockConsumptionOnChange'

const StockConsumptionCreateForm: FC = () => {
    const { isConfirmEnabled, fields, onClickConfirmCreate, onClickCancel } = useStockConsumptionOnChange()

    return (
        <CreateForm
            fields={fields}
            isConfirmEnabled={isConfirmEnabled}
            onClickConfirm={onClickConfirmCreate}
            onClickCancel={onClickCancel}
        />
    )
}

export default StockConsumptionCreateForm
