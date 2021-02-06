import React, { FC, useContext } from 'react'

import DealAttributeContext from '../../contexts/DealAttributeContext/DealAttributeContext'
import DealAttributesRoutes from '../../routes/DealAttributesRoutes'
import EditForm from '../../../../../components/common/forms/EditForm/EditForm'
import useDealAttributeOnChange from '../../hooks/change/useDealAttributeOnChange'
import useDealAttributesActions from '../../contexts/DealAttributesActionsContext/hooks/useDealAttributesActions'

const DealAttributeEditForm: FC = () => {
    const state = useContext(DealAttributeContext)
    const { isLoading } = useDealAttributesActions()
    const { fields, isConfirmEnabled, onClickConfirmUpdate, onClickCancel } = useDealAttributeOnChange()

    return state.attribute.id ? (
        <EditForm
            id={state.attribute.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            historyLink={DealAttributesRoutes.Changes}
            onClickConfirm={onClickConfirmUpdate}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default DealAttributeEditForm
