import React, { FC, useContext } from 'react'

import DealAttributeContext from '../../contexts/DealAttributeContext/DealAttributeContext'
import DealAttributesRoutes from '../../routes/DealAttributesRoutes'
import View from '../../../../../components/common/grids/View/View'
import useDealAttributeView from './hooks/useDealAttributeView'
import useDealAttributesActions from '../../contexts/DealAttributesActionsContext/hooks/useDealAttributesActions'

const DealAttributeViewForm: FC = () => {
    const state = useContext(DealAttributeContext)
    const { isLoading } = useDealAttributesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useDealAttributeView()

    return (
        <View
            id={state.attribute.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.attribute.isDeleted}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            data={map(state.attribute)}
            editLink={DealAttributesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={DealAttributesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default DealAttributeViewForm
