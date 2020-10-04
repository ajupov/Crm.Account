import React, { FC, useContext } from 'react'

import ContactAttributeContext from '../../contexts/ContactAttributeContext/ContactAttributeContext'
import ContactAttributesRoutes from '../../routes/ContactAttributesRoutes'
import View from '../../../../../../components/common/grids/View/View'
import useContactAttributeView from './hooks/useContactAttributeView'
import useContactAttributesActions from '../../contexts/ContactAttributesActionsContext/hooks/useContactAttributesActions'

const ContactAttributeViewForm: FC = () => {
    const state = useContext(ContactAttributeContext)
    const { isLoading } = useContactAttributesActions()
    const { map, onClickEdit, onClickDelete, onClickRestore, onClickCancel } = useContactAttributeView()

    return (
        <View
            id={state.attribute.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.attribute.isDeleted}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            data={map(state.attribute)}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            historyLink={ContactAttributesRoutes.Changes}
            onClickCancel={onClickCancel}
        />
    )
}

export default ContactAttributeViewForm
