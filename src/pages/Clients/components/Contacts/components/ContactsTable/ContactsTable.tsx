import React, { FC, useContext } from 'react'

import ContactsContext from '../../contexts/ContactsContext/ContactsContext'
import Table from '../../../../../../components/common/collections/Table/Table'
import useContactsTable from './hooks/useContactsTable'

const ContactsTable: FC = () => {
    const state = useContext(ContactsContext)
    const { page, headers, map, onClickCreate, onClickDownloadAsCsv, onClickChangePage } = useContactsTable()

    return (
        <Table
            isLoading={state.isLoading}
            hasActions
            headers={headers}
            rows={map(state.contacts)}
            footer={{ page, limit: state.request.limit, total: state.total, onClickChangePage }}
            lastModifyDateTime={state.lastModifyDateTime}
            onClickCreate={onClickCreate}
            onClickDownloadAsCsv={onClickDownloadAsCsv}
        />
    )
}

export default ContactsTable
