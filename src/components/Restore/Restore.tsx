import React, { FC } from 'react'

import { Confirm } from 'semantic-ui-react'

export interface RestoreProps {
    isRestoring: boolean
    title: string
    content: string
    onClickConfirm: () => void
    onClickCancel: () => void
}

const Restore: FC<RestoreProps> = ({ isRestoring, title, content, onClickConfirm, onClickCancel }) => (
    <Confirm
        open={isRestoring}
        size="mini"
        header={title}
        content={content}
        onCancel={onClickCancel}
        cancelButton="Нет"
        onConfirm={onClickConfirm}
        confirmButton="Да"
    />
)

export default Restore
