import React, { FC, useContext } from 'react'

import DealStatusContext from '../../contexts/DealStatusContext/DealStatusContext'
import DealStatusesRoutes from '../../routes/DealStatusesRoutes'
import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import useDealStatusOnChange from '../../hooks/change/useDealStatusOnChange'
import useDealStatusesActions from '../../contexts/DealStatusesActionsContext/hooks/useDealStatusesActions'

const DealStatusEditForm: FC = () => {
    const state = useContext(DealStatusContext)
    const { isLoading } = useDealStatusesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useDealStatusOnChange()

    return state.status.id ? (
        <EditForm
            id={state.status.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.status.createDateTime}
            lastModifyDateTime={state.status.modifyDateTime}
            historyLink={DealStatusesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default DealStatusEditForm
