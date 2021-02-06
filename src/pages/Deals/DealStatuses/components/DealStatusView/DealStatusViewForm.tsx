import React, { FC, useContext } from 'react'

import DealStatusContext from '../../contexts/DealStatusContext/DealStatusContext'
import DealStatusesRoutes from '../../routes/DealStatusesRoutes'
import View from '../../../../../components/common/grids/View/View'
import useDealStatusView from './hooks/useDealStatusView'
import useDealStatusesActions from '../../contexts/DealStatusesActionsContext/hooks/useDealStatusesActions'

const DealStatusViewForm: FC = () => {
    const state = useContext(DealStatusContext)
    const { isLoading } = useDealStatusesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useDealStatusView()

    return (
        <View
            id={state.status.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.status.isDeleted}
            createDate={state.status.createDateTime}
            lastModifyDateTime={state.status.modifyDateTime}
            data={map(state.status)}
            editLink={DealStatusesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={DealStatusesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default DealStatusViewForm
