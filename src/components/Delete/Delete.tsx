import React, { FC } from 'react'

import { Confirm } from 'semantic-ui-react'

export interface DeleteProps {
    isDeleting: boolean
    title: string
    content: string
    onClickConfirm: () => void
    onClickCancel: () => void
}

const Delete: FC<DeleteProps> = ({ isDeleting, title, content, onClickConfirm, onClickCancel }) => (
    <Confirm
        open={isDeleting}
        size="mini"
        header={title}
        content={content}
        onCancel={onClickCancel}
        cancelButton="Нет"
        onConfirm={onClickConfirm}
        confirmButton="Да"
    />
)

export default Delete
