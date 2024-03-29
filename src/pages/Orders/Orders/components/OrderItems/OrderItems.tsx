import { Button, Dropdown, DropdownProps, Grid, Icon, Input, InputOnChangeData } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

import IconLink from '../../../../../components/common/links/IconLink/IconLink'

export interface OrderItemsOptionProps {
    value: number | string
    text: string
}

export interface OrderItemsItemProps {
    index: number
    key: string
    value?: string
    text?: string
    onChangeKey: (index: number, value: string) => void
    onChangeValue: (index: number, value: string) => void
    onClickDelete: (index: number) => void
}

export interface OrderItemsProps {
    options: OrderItemsOptionProps[]
    items: OrderItemsItemProps[]
    onClickAddItem: () => void
}

const MaxDropdownOptionsCountWithoutSearch = 5

// TODO: Move to l10n
const OrderItems: FC<OrderItemsProps> = ({ options, items, onClickAddItem }) => {
    const _onClickAddItem = useCallback(
        (event: React.MouseEvent) => {
            onClickAddItem()

            event.stopPropagation()
            event.preventDefault()
        },
        [onClickAddItem]
    )

    const _onChangeKey = useCallback(
        (item: OrderItemsItemProps) => (event: React.SyntheticEvent, data: DropdownProps) => {
            item.onChangeKey(item.index, data.value as string)

            event.stopPropagation()
            event.preventDefault()
        },
        []
    )

    const _onChangeValue = useCallback(
        (item: OrderItemsItemProps) => (_: any, data: InputOnChangeData) => {
            item.onChangeValue(item.index, data.value)
        },
        []
    )

    const _onClickDelete = useCallback(
        (item: OrderItemsItemProps) => (event: React.MouseEvent) => {
            item.onClickDelete(item.index)

            event.stopPropagation()
            event.preventDefault()
        },
        []
    )

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
                        <Grid.Column computer="5" tablet="5" mobile="15" style={{ padding: 0, margin: '4px 0' }}>
                            <Dropdown
                                fluid
                                selection
                                value={x.key}
                                text={x.text}
                                search={options && options.length > MaxDropdownOptionsCountWithoutSearch}
                                onChange={_onChangeKey(x)}
                                options={options?.map(x => ({
                                    key: x.value,
                                    value: x.value,
                                    text: x.text
                                }))}
                                noResultsMessage="Не найдено"
                                style={{ whiteSpace: 'nowrap' }}
                            />
                        </Grid.Column>
                        <Grid.Column only="mobile" width="1" style={{ padding: '0', margin: '4px 0' }}></Grid.Column>
                        <Grid.Column computer="10" tablet="10" mobile="15" style={{ padding: '0', margin: '4px 0' }}>
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

export default OrderItems
