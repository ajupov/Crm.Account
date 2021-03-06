import AttributeLinksGroup, {
    AttributesLinksGroupProps
} from '../../fields/AttributesLinksGroupProps/AttributeLinksGroup'
import Autocomplete, { AutocompleteProps } from '../../fields/Autocomplete/Autocomplete'
import { Button, Card, Form, Icon } from 'semantic-ui-react'
import Checkbox, { CheckboxProps } from '../../fields/Checkbox/Checkbox'
import DateInput, { DateInputProps } from '../../fields/DateInput/DateInput'
import Dropdown, { DropdownProps } from '../../fields/Dropdown/Dropdown'
import NumberInput, { NumberInputProps } from '../../fields/NumberInput/NumberInput'
import React, { FC, useMemo } from 'react'
import TextInput, { TextInputProps } from '../../fields/TextInput/TextInput'
import { getCreateDateTimeText, getLastChangeDateTimeText } from '../../../../helpers/entityDateTimeHelper'

import BackLink from '../../links/BackLink/BackLink'
import HistoryLink from '../../links/HistoryLink/HistoryLink'
import Loader from '../../other/Loader/Loader'

export type EditFormFieldProps =
    | TextInputProps
    | NumberInputProps
    | DateInputProps
    | CheckboxProps
    | DropdownProps
    | AttributesLinksGroupProps
    | AutocompleteProps

export interface EditFormProps {
    id: string
    fields: EditFormFieldProps[]
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
}) => {
    const fieldComponents = useMemo(
        () =>
            fields.map(x => {
                switch (x.type) {
                    case 'text':
                        return <TextInput {...x} key={x.topLabel} />
                    case 'number':
                        return <NumberInput {...x} key={x.topLabel} />
                    case 'date':
                        return <DateInput {...x} key={x.topLabel} />
                    case 'checkbox':
                        return <Checkbox {...x} key={x.label} />
                    case 'dropdown':
                        return <Dropdown {...x} key={x.label} />
                    case 'attributes':
                        return <AttributeLinksGroup {...x} key={x.label} />
                    case 'autocomplete':
                        return <Autocomplete {...x} key={x.label} />
                }
            }),
        [fields]
    )

    return (
        <>
            <Loader isLoading={isLoading} />
            <BackLink onClick={onClickCancel} />
            {id && historyLink && <HistoryLink link={`${historyLink}/${id}`} />}
            <Card.Meta textAlign="right">{getCreateDateTimeText(createDate)}</Card.Meta>
            <Card.Meta textAlign="right">{getLastChangeDateTimeText(lastModifyDateTime)}</Card.Meta>
            <Form onSubmit={onClickConfirm}>
                {fieldComponents}
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
}

export default EditForm
