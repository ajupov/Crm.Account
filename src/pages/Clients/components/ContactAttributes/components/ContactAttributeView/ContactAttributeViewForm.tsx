import React, { FC, useContext } from 'react'

import ContactAttributeContext from '../../contexts/ContactAttributeContext/ContactAttributeContext'
import View from '../../../../../../components/common/grids/View/View'
import useContactAttributeView from './hooks/useContactAttributeView'
import useContactAttributesActions from '../../contexts/ContactAttributesActionsContext/hooks/useContactAttributesActions'

const ContactAttributeViewForm: FC = () => {
    const state = useContext(ContactAttributeContext)
    const { isLoading } = useContactAttributesActions()
    const { map, onClickEdit, onClickDelete, onClickRestore, onClickCancel, onClickHistory } = useContactAttributeView()

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
            onClickHistory={onClickHistory}
            onClickCancel={onClickCancel}
        />
    )
}

export default ContactAttributeViewForm
