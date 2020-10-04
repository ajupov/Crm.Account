import React, { FC, useContext } from 'react'

import ContactAttributesContext from '../../contexts/ContactAttributesContext/ContactAttributesContext'
import ContactAttributesRoutes from '../../routes/ContactAttributesRoutes'
import Table from '../../../../../../components/common/collections/Table/Table'
import useContactAttributesTable from './hooks/useContactAttributesTable'

const ContactAttributesTable: FC = () => {
    const state = useContext(ContactAttributesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useContactAttributesTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.attributes)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            createLink={ContactAttributesRoutes.Create}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default ContactAttributesTable
