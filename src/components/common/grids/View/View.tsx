import { Button, Card, Icon } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'
import {
    getCreateDateTimeText,
    getLastChangeDateTimeText as getLastModifyDateTimeText
} from '../../../../helpers/entityDateTimeHelper'

import BackLink from '../../links/BackLink/BackLink'
import HistoryLink from '../../links/HistoryLink/HistoryLink'
import { Link } from 'react-router-dom'
import Loader from '../../other/Loader/Loader'

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
    editLink: string
    onClickDelete: (id: string) => void
    onClickRestore: (id: string) => void
    historyLink: string
    onClickCancel: () => void
}

// TODO: Move to l10n
const View: FC<ViewProps> = ({
    id,
    isLoading,
    isDeleted,
    createDate,
    lastModifyDateTime,
    data,
    onClickCancel,
    historyLink,
    editLink,
    onClickDelete,
    onClickRestore
}) => {
    const renderData = useCallback(
        (data: ViewDataProps[]) =>
            data.map(
                x =>
                    x.value && (
                        <div key={x.label} style={{ marginBottom: '20px' }}>
                            {x.label && <b style={{ display: 'inline-block', minWidth: '180px' }}>{x.label}: </b>}
                            {x.value && <span style={{ display: 'inline-block' }}> {x.value}</span>}
                        </div>
                    )
            ),
        []
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
            {id && historyLink && <HistoryLink link={`${historyLink}/${id}`} />}
            <Card.Meta textAlign="right">{getCreateDateTimeText(createDate)}</Card.Meta>
            <Card.Meta textAlign="right">{getLastModifyDateTimeText(lastModifyDateTime)}</Card.Meta>
            {renderData(data)}
            <div style={{ marginTop: '20px', marginBottom: '80px' }}>
                {!isDeleted && (
                    <Button.Group basic floated="right">
                        {id && editLink && (
                            <Button as={Link} to={`${editLink}/${id}`}>
                                <Icon name="edit" /> Редактировать
                            </Button>
                        )}
                        <Button onClick={_onClickDelete}>
                            <Icon name="trash" /> Удалить
                        </Button>
                    </Button.Group>
                )}
                {isDeleted && (
                    <Button basic floated="right" onClick={_onClickRestore}>
                        <Icon name="redo" /> Восстановить
                    </Button>
                )}
            </div>
        </>
    )
}

export default View
