import React, { FC, useContext } from 'react'

import EditForm from '../../../../../../components/common/forms/EditForm/EditForm'
import ProductAttributeContext from '../../contexts/ProductAttributeContext/ProductAttributeContext'
import useProductAttributeEdit from './hooks/useProductAttributeEdit'
import useProductAttributesActions from '../../contexts/ProductAttributesActionsContext/hooks/useProductAttributesActions'

const ProductAttributeEditForm: FC = () => {
    const state = useContext(ProductAttributeContext)
    const { isLoading } = useProductAttributesActions()
    const { fields, isConfirmEnabled, onClickHistory, onClickCancel, onClickConfirm } = useProductAttributeEdit()

    return state.attribute.id ? (
        <EditForm
            id={state.attribute.id}
            fields={fields}
            isLoading={state.isLoading || isLoading}
            isConfirmEnabled={isConfirmEnabled}
            createDate={state.attribute.createDateTime}
            lastModifyDateTime={state.attribute.modifyDateTime}
            onClickHistory={onClickHistory}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    ) : null
}

export default ProductAttributeEditForm
