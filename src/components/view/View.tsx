import { Button, Card } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'
import { getCreateDateTimeText, getLastChangeDateTimeText as getLastModifyDateTimeText } from '../../helpers/textHelper'

import BackLink from '../BackLink/BackLink'
import Loader from '../Loader/Loader'

export interface ViewDataProps {
    label: string
    value?: string
}

export interface ViewProps {
    id: string
    isLoading: boolean
    isDeleted: boolean
    createDate: string
    lastModifyDateTime?: string
    data: ViewDataProps[]
    onClickEdit: (id: string) => void
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickCancel: () => void
}

const View: FC<ViewProps> = ({
    id,
    isLoading,
    isDeleted,
    createDate,
    lastModifyDateTime,
    data,
    onClickCancel,
    onClickEdit,
    onClickDelete,
    onClickRestore
}) => {
    const renderData = (data: ViewDataProps[]): JSX.Element[] =>
        data.map(x => (
            <div key={x.label}>
                {x.label && <p>{x.label}:</p>}
                {x.value && <b>{x.value}</b>}
            </div>
        ))

    const _onClickEdit = useCallback(
        (event: React.MouseEvent) => {
            onClickEdit(id)

            event.stopPropagation()
        },
        [id, onClickEdit]
    )

    const _onClickDelete = useCallback(
        (event: React.MouseEvent) => {
            onClickDelete(id)

            event.stopPropagation()
        },
        [id, onClickDelete]
    )

    const _onClickRestore = useCallback(
        (event: React.MouseEvent) => {
            onClickRestore(id)

            event.stopPropagation()
        },
        [id, onClickRestore]
    )

    return (
        <>
            <Loader isLoading={isLoading} />
            <BackLink onClick={onClickCancel} />
            <Card.Meta textAlign="right">{getCreateDateTimeText(createDate)}</Card.Meta>
            <Card.Meta textAlign="right">{getLastModifyDateTimeText(lastModifyDateTime)}</Card.Meta>
            {renderData(data)}
            {!isDeleted && (
                <Button.Group floated="right" style={{ marginTop: '30px' }}>
                    <Button onClick={_onClickEdit}>Редактировать</Button>
                    <Button onClick={_onClickDelete}>Удалить</Button>
                </Button.Group>
            )}
            {isDeleted && (
                <Button floated="right" style={{ marginTop: '30px' }} onClick={_onClickRestore}>
                    Восстановить
                </Button>
            )}
        </>
    )
}

export default View
