import React, { FC, useContext } from 'react'

import ContactChangesContext from '../../../../contexts/ContactChangesContext/ContactChangesContext'
import Table from '../../../../../../../../components/common/collections/Table/Table'
import useContactChangesTable from './hooks/useContactChangesTable'

const ContactChangesTable: FC = () => {
    const state = useContext(ContactChangesContext)
    const { page, headers, map, onClickDownloadAsCsv, onClickChangePage } = useContactChangesTable()

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

export default ContactChangesTable
