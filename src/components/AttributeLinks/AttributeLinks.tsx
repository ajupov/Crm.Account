import { Button, Dropdown, DropdownProps, Grid, Icon, Input, InputOnChangeData } from 'semantic-ui-react'
import React, { FC, Fragment, useCallback } from 'react'

import { SelectOptionCreateFieldProps } from '../Create/Create'

export interface AttributeLinksProps {
    options: SelectOptionCreateFieldProps[]
    items?: AttributeLinksItemProps[]
    onClickAddItem: () => void
}

export interface AttributeLinksItemProps {
    index: number
    key: string
    onChangeKey: (index: number, value: string) => void
    value?: string
    onChangeValue: (index: number, value: string) => void
    onClickDelete: (index: number) => void
}

const AttributeLinks: FC<AttributeLinksProps> = ({ options, items, onClickAddItem }) => {
    const _onClickAddItem = useCallback(
        (event: React.MouseEvent) => {
            onClickAddItem()

            event.preventDefault()
        },
        [onClickAddItem]
    )

    const _onChangeKey = useCallback(
        (item: AttributeLinksItemProps) => (_: any, { value }: DropdownProps) => {
            item.onChangeKey(item.index, value as string)
        },
        []
    )

    const _onChangeValue = useCallback(
        (item: AttributeLinksItemProps) => (_: any, { value }: InputOnChangeData) => {
            item.onChangeValue(item.index, value)
        },
        []
    )

    const _onClickDelete = useCallback(
        (item: AttributeLinksItemProps) => (event: React.MouseEvent) => {
            item.onClickDelete(item.index)

            event.preventDefault()
        },
        []
    )

    const MaxDropdownOptionsCountWithoutSearch = 5

    return (
        <>
            <Grid columns="3" style={{ margin: 0 }}>
                {items?.map(x => (
                    <Fragment key={x.key}>
                        <Grid.Column width="8" style={{ padding: '0', margin: '4px 0' }}>
                            <Dropdown
                                fluid
                                selection
                                value={x.value}
                                search={options.length > MaxDropdownOptionsCountWithoutSearch}
                                onChange={_onChangeKey(x)}
                                options={options.map(x => ({
                                    key: x.value,
                                    value: x.value,
                                    text: x.text
                                }))}
                            />
                        </Grid.Column>
                        <Grid.Column width="7" style={{ padding: '0', margin: '4px 0' }}>
                            <Input fluid type="text" value={x.value} onChange={_onChangeValue(x)} />
                        </Grid.Column>
                        <Grid.Column width="1" stretched style={{ padding: '0', margin: '4px 0' }}>
                            <Button basic onClick={_onClickDelete(x)} icon="remove" />
                        </Grid.Column>
                    </Fragment>
                ))}
            </Grid>
            <Button basic compact size="mini" onClick={_onClickAddItem}>
                <Icon name="add" />
                Добавить
            </Button>
        </>
    )
}

export default AttributeLinks
