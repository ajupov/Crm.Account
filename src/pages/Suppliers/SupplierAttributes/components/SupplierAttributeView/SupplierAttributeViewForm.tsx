import React, { FC, useContext } from 'react'

import SupplierAttributeContext from '../../contexts/SupplierAttributeContext/SupplierAttributeContext'
import SupplierAttributesRoutes from '../../routes/SupplierAttributesRoutes'
import View from '../../../../../components/common/grids/View/View'
import useSupplierAttributeView from './hooks/useSupplierAttributeView'
import useSupplierAttributesActions from '../../contexts/SupplierAttributesActionsContext/hooks/useSupplierAttributesActions'

const SupplierAttributeViewForm: FC = () => {
    const state = useContext(SupplierAttributeContext)
    const { isLoading } = useSupplierAttributesActions()
    const { map, onClickDelete, onClickRestore, onClickCancel } = useSupplierAttributeView()

    return (
        <View
            id={state.attribute.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.attribute.isDeleted}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            data={map(state.attribute)}
            editLink={SupplierAttributesRoutes.Edit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={SupplierAttributesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default SupplierAttributeViewForm
