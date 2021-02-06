import React, { FC, useContext } from 'react'

import DealTypeContext from '../../contexts/DealTypeContext/DealTypeContext'
import DealTypesRoutes from '../../routes/DealTypesRoutes'
import View from '../../../../../components/common/grids/View/View'
import useDealTypeView from './hooks/useDealTypeView'
import useDealTypesActions from '../../contexts/DealTypesActionsContext/hooks/useDealTypesActions'

const DealTypeViewForm: FC = () => {
    const state = useContext(DealTypeContext)
    const { isLoading } = useDealTypesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useDealTypeView()

    return (
        <View
            id={state.type.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.type.isDeleted}
            createDate={state.type.createDateTime}
            lastModifyDateTime={state.type.modifyDateTime}
            data={map(state.type)}
            editLink={DealTypesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={DealTypesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default DealTypeViewForm
