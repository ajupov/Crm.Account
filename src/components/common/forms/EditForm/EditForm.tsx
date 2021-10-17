import { Button, Card, Form, Icon } from 'semantic-ui-react'
import FormField, { FormFieldProps } from '../FormField'
import React, { FC } from 'react'
import { getCreateDateTimeText, getLastChangeDateTimeText } from '../../../../helpers/entityDateTimeHelper'

import BackLink from '../../links/BackLink/BackLink'
import HistoryLink from '../../links/HistoryLink/HistoryLink'
import Loader from '../../other/Loader/Loader'

export interface EditFormProps {
    id: string
    fields: FormFieldProps[]
    isLoading: boolean
    isConfirmEnabled: boolean
    createDate?: string
    lastModifyDateTime?: string
    historyLink: string
    onClickConfirm: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const EditForm: FC<EditFormProps> = ({
    id,
    fields,
    isLoading,
    isConfirmEnabled,
    createDate,
    lastModifyDateTime,
    historyLink,
    onClickConfirm,
    onClickCancel
}) => (
    <>
        <Loader isLoading={isLoading} />
        <BackLink onClick={onClickCancel} />
        {id && historyLink && <HistoryLink link={`${historyLink}/${id}`} />}
        <Card.Meta textAlign="right">{getCreateDateTimeText(createDate)}</Card.Meta>
        <Card.Meta textAlign="right">{getLastChangeDateTimeText(lastModifyDateTime)}</Card.Meta>
        <Form onSubmit={onClickConfirm}>
            {fields.map((x, i) => (
                <FormField key={i} {...x} />
            ))}
            <Form.Field>
                <Button.Group basic floated="right">
                    <Button type="reset" onClick={onClickCancel}>
                        <Icon name="cancel" /> Отмена
                    </Button>
                    <Button type="submit" disabled={!isConfirmEnabled}>
                        <Icon name="save" /> Сохранить
                    </Button>
                </Button.Group>
            </Form.Field>
        </Form>
    </>
)

export default EditForm
