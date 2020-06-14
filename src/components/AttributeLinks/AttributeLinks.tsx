import { Button, Dropdown, DropdownProps, Grid, Icon, Input, InputOnChangeData } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

import IconLink from '../IconLink/IconLink'
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
    text?: string
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
        (item: AttributeLinksItemProps) => (event: React.SyntheticEvent, { value }: DropdownProps) => {
            item.onChangeKey(item.index, value as string)

            event.preventDefault()
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
            <Grid centered columns="4" style={{ margin: 0 }}>
                {items?.map(x => (
                    <Grid.Row key={x.index} style={{ padding: 0 }}>
                        <Grid.Column
                            width="1"
                            style={{ padding: 0, margin: '4px 0', lineHeight: '36px', textAlign: 'center' }}
                        >
                            <IconLink name="remove" onClick={_onClickDelete(x)} />
                        </Grid.Column>
                        <Grid.Column
                            width="5"
                            computer="5"
                            tablet="5"
                            mobile="15"
                            style={{ padding: 0, margin: '4px 0' }}
                        >
                            <Dropdown
                                fluid
                                selection
                                value={x.key}
                                text={x.text}
                                search={options.length > MaxDropdownOptionsCountWithoutSearch}
                                onChange={_onChangeKey(x)}
                                options={options.map(x => ({
                                    key: x.value,
                                    value: x.value,
                                    text: x.text
                                }))}
                                noResultsMessage="Не найдено"
                                style={{ whiteSpace: 'nowrap' }}
                            />
                        </Grid.Column>
                        <Grid.Column only="mobile" width="1" style={{ padding: '0', margin: '4px 0' }}></Grid.Column>
                        <Grid.Column
                            width="10"
                            computer="10"
                            tablet="10"
                            mobile="15"
                            style={{ padding: '0', margin: '4px 0' }}
                        >
                            <Input fluid type="text" value={x.value} onChange={_onChangeValue(x)} />
                        </Grid.Column>
                    </Grid.Row>
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
