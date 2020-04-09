import { Button, Card } from 'semantic-ui-react'
import React, { FC } from 'react'
import { getCreateDateTimeText, getLastChangeDateTimeText } from '../../helpers/textHelper'

import BackLink from '../BackLink/BackLink'
import Loader from '../Loader/Loader'

export interface EditProps {
    isLoading: boolean
    createDate: string
    lastModifyDateTime?: string
    onClickBack: () => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const Edit: FC<EditProps> = ({
    children,
    isLoading,
    createDate,
    lastModifyDateTime,
    onClickBack,
    onClickConfirm,
    onClickCancel
}) => (
    <>
        <Loader isLoading={isLoading} />

        <BackLink onClick={onClickBack} />

        <Card.Meta textAlign="right">{getCreateDateTimeText(createDate)}</Card.Meta>

        <Card.Meta textAlign="right">{getLastChangeDateTimeText(lastModifyDateTime)}</Card.Meta>

        {children}
    </>
)

export default Edit
