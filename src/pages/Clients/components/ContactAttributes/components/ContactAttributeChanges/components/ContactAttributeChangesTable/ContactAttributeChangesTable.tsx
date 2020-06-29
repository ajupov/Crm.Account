import React, { FC, useContext } from 'react'

import ContactAttributeChangesContext from '../../../../contexts/ContactAttributeChangesContext/ContactAttributeChangesContext'
import Table from '../../../../../../../../components/common/collections/Table/Table'
import useContactAttributeChangesTable from './hooks/useContactAttributeChangesTable'

const ContactAttributeChangesTable: FC = () => {
    const state = useContext(ContactAttributeChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useContactAttributeChangesTable()

    return (
        <Table
            isLoading={state.isLoading}
            headers={headers}
            rows={map(state.changes)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default ContactAttributeChangesTable
