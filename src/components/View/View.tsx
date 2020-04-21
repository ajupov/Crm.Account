import { Button, Card, Icon } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'
import { getCreateDateTimeText, getLastChangeDateTimeText as getLastModifyDateTimeText } from '../../helpers/textHelper'

import BackLink from '../BackLink/BackLink'
import HistoryLink from '../HistoryLink/HistoryLink'
import Loader from '../Loader/Loader'

export interface ViewDataProps {
    label: string
    value?: string
}

export interface ViewProps {
    id?: string
    isLoading: boolean
    isDeleted: boolean
    createDate?: string
    lastModifyDateTime?: string
    data: ViewDataProps[]
    onClickEdit: (id: string) => void
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    onClickHistory: (id: string) => void
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
    onClickHistory,
    onClickEdit,
    onClickDelete,
    onClickRestore
}) => {
    const renderData = useCallback(
        (data: ViewDataProps[]) =>
            data.map(x => (
                <div key={x.label} style={{ marginBottom: '20px' }}>
                    {x.label && <p>{x.label}:</p>}
                    {x.value && <b>{x.value}</b>}
                </div>
            )),
        []
    )

    const _onClickEdit = useCallback(
        (event: React.MouseEvent) => {
            if (id) {
                onClickEdit(id)
            }

            event.stopPropagation()
        },
        [id, onClickEdit]
    )

    const _onClickHistory = useCallback(
        (event: React.MouseEvent) => {
            if (id) {
                onClickHistory(id)
            }

            event.stopPropagation()
        },
        [id, onClickHistory]
    )

    const _onClickDelete = useCallback(
        (event: React.MouseEvent) => {
            if (id) {
                onClickDelete(id)
            }

            event.stopPropagation()
        },
        [id, onClickDelete]
    )

    const _onClickRestore = useCallback(
        (event: React.MouseEvent) => {
            if (id) {
                onClickRestore(id)
            }

            event.stopPropagation()
        },
        [id, onClickRestore]
    )

    return (
        <>
            <Loader isLoading={isLoading} />
            <BackLink onClick={onClickCancel} />
            <HistoryLink onClick={_onClickHistory} />
            <Card.Meta textAlign="right">{getCreateDateTimeText(createDate)}</Card.Meta>
            <Card.Meta textAlign="right">{getLastModifyDateTimeText(lastModifyDateTime)}</Card.Meta>
            {renderData(data)}
            {!isDeleted && (
                <Button.Group basic floated="right" style={{ marginTop: '30px' }}>
                    <Button onClick={_onClickEdit}>
                        <Icon name="edit" /> Редактировать
                    </Button>
                    <Button onClick={_onClickDelete}>
                        <Icon name="trash" /> Удалить
                    </Button>
                </Button.Group>
            )}
            {isDeleted && (
                <Button basic floated="right" style={{ marginTop: '30px' }} onClick={_onClickRestore}>
                    <Icon name="redo" /> Восстановить
                </Button>
            )}
        </>
    )
}

export default View
