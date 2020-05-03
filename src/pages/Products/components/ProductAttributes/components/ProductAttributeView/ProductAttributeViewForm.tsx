import React, { FC, useContext } from 'react'

import ProductAttributeContext from '../../contexts/ProductAttributeContext/ProductAttributeContext'
import View from '../../../../../../components/View/View'
import useProductAttributeView from './hooks/useProductAttributeView'
import useProductAttributesActions from '../../contexts/ProductAttributesActionsContext/hooks/useProductAttributesActions'

const ProductAttributeViewForm: FC = () => {
    const state = useContext(ProductAttributeContext)
    const { isLoading } = useProductAttributesActions()
    const { map, onClickEdit, onClickDelete, onClickRestore, onClickCancel, onClickHistory } = useProductAttributeView()

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

export default ProductAttributeViewForm
