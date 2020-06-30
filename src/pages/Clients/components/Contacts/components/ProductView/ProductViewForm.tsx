import React, { FC, useContext } from 'react'

import ContactContext from '../../contexts/ContactContext/ContactContext'
import View from '../../../../../../components/common/grids/View/View'
import useContactsActions from '../../contexts/ContactsActionsContext/hooks/useContactsActions'
import useProductView from './hooks/useProductView'

const ProductViewForm: FC = () => {
    const state = useContext(ContactContext)
    const { isLoading } = useContactsActions()
    const { map, onClickEdit, onClickDelete, onClickRestore, onClickCancel, onClickHistory } = useProductView()

    return (
        <View
            id={state.product.id}
            isLoading={state.isLoading || isLoading}
            isDeleted={state.product.isDeleted}
            createDate={state.product.createDateTime}
            lastModifyDateTime={state.product.modifyDateTime}
            data={map(state.product)}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            onClickRestore={onClickRestore}
            onClickHistory={onClickHistory}
            onClickCancel={onClickCancel}
        />
    )
}

export default ProductViewForm
