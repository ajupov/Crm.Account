import React, { FC, useContext } from 'react'

import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import ProductStatusContext from '../../contexts/ProductStatusContext/ProductStatusContext'
import useProductStatusEdit from './hooks/useProductStatusEdit'
import useProductStatusesActions from '../../contexts/ProductStatusesActionsContext/hooks/useProductStatusesActions'

const ProductStatusEditForm: FC = () => {
    const state = useContext(ProductStatusContext)
    const { isLoading } = useProductStatusesActions()
    const { fields, isConfirmEnabled, onClickHistory, onClickCancel, onClickConfirm } = useProductStatusEdit()

    return state.status.id ? (
        <EditForm
            id={state.status.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.status.createDateTime}
            lastModifyDateTime={state.status.modifyDateTime}
            onClickHistory={onClickHistory}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default ProductStatusEditForm
