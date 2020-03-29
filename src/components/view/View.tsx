import { Button, Card } from 'semantic-ui-react'
import React, { FC } from 'react'
import { getCreateDateTimeText, getLastChangeDateTimeText as getLastModifyDateTimeText } from '../../helpers/textHelper'

import BackLink from '../backLink/BackLink'
import Loader from '../loader/Loader'

export interface ViewDataProps {
    label: string
    value?: string
}

export interface ViewProps {
    isLoading: boolean
    isDeleted: boolean
    createDate: string
    lastModifyDateTime?: string
    data: ViewDataProps[]
    onClickBack: () => void
    onClickEdit: (event: React.MouseEvent) => void
    onClickDelete: (event: React.MouseEvent) => void
    onClickRestore: (event: React.MouseEvent) => void
}

const View: FC<ViewProps> = ({
    isLoading,
    isDeleted,
    createDate,
    lastModifyDateTime,
    data,
    onClickBack,
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

    return (
        <>
            <Loader isLoading={isLoading} />

            <BackLink onClick={onClickBack} />

            <Card.Meta textAlign="right">{getCreateDateTimeText(createDate)}</Card.Meta>

            <Card.Meta textAlign="right">{getLastModifyDateTimeText(lastModifyDateTime)}</Card.Meta>

            {renderData(data)}

            {!isDeleted && (
                <Button.Group floated="right" style={{ marginTop: '30px' }}>
                    <Button onClick={onClickEdit}>Редактировать</Button>

                    <Button onClick={onClickDelete}>Удалить</Button>
                </Button.Group>
            )}

            {isDeleted && (
                <Button floated="right" style={{ marginTop: '30px' }} onClick={onClickRestore}>
                    Восстановить
                </Button>
            )}
        </>
    )
}

export default View
