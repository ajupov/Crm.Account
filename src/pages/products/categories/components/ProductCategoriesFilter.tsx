/* eslint-disable array-bracket-newline */

import { Button, CheckboxProps, Form, Header, InputOnChangeData } from 'semantic-ui-react'
import React, { FC, useCallback, useContext, useState } from 'react'

import ProductCategoriesContext from '../contexts/ProductCategoriesContext'
import useProductCategoriesFilters from '../hooks/useProductCategoriesFilters'

const ProductCategoriesFilter: FC = () => {
    const { request, setRequest } = useContext(ProductCategoriesContext)
    const [name, setName] = useState<string | undefined>()

    const {
        // name,
        // setName,
        isDeleted,
        setIsDeleted,
        minCreateDate,
        setMinCreateDate,
        maxCreateDate,
        setMaxCreateDate,
        minModifyDate,
        setMinModifyDate,
        maxModifyDate,
        setMaxModifyDate
    } = useProductCategoriesFilters()

    const onClickApply = useCallback(() => {
        setRequest({ ...request, name, isDeleted, minCreateDate, maxCreateDate, minModifyDate, maxModifyDate })
    }, [isDeleted, maxCreateDate, maxModifyDate, minCreateDate, minModifyDate, name, request, setRequest])

    const onClickClear = useCallback(() => {
        setName(void 0)
        setIsDeleted(false)
        setMinCreateDate(void 0)
        setMaxCreateDate(void 0)
        setMinModifyDate(void 0)
        setMaxModifyDate(void 0)
    }, [setIsDeleted, setMaxCreateDate, setMaxModifyDate, setMinCreateDate, setMinModifyDate, setName])

    const onChangeName = useCallback(
        (_, { value }: InputOnChangeData) => {
            setName(value)
        },
        [setName]
    )

    const onChangeMinCreateDate = useCallback((_, data: InputOnChangeData) => () => setMinCreateDate(data.value), [
        setMinCreateDate
    ])

    const onChangeMaxCreateDate = useCallback((_, data: InputOnChangeData) => () => setMaxCreateDate(data.value), [
        setMaxCreateDate
    ])

    const onChangeMinModifyDate = useCallback((_, data: InputOnChangeData) => () => setMinModifyDate(data.value), [
        setMinModifyDate
    ])

    const onChangeMaxModifyDate = useCallback((_, data: InputOnChangeData) => () => setMaxModifyDate(data.value), [
        setMaxModifyDate
    ])

    const onChangeIsDeleted = useCallback((_, data: CheckboxProps) => setIsDeleted(data.value === 'true'), [
        setIsDeleted
    ])

    return (
        <>
            <Header as="h4">Фильтры</Header>

            <Form onSubmit={onClickApply}>
                <Form.Field>
                    <label>Наименование:</label>
                    <Form.Input
                        name="name"
                        size="mini"
                        fluid
                        placeholder="Наименование"
                        value={name}
                        onChange={onChangeName}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Дата создания:</label>
                    <Form.Input
                        size="mini"
                        type="date"
                        value={minCreateDate}
                        onChange={onChangeMinCreateDate}
                        label="с"
                    />
                    <Form.Input
                        size="mini"
                        type="date"
                        value={maxCreateDate}
                        onChange={onChangeMaxCreateDate}
                        label="по"
                    />
                </Form.Field>

                <Form.Field>
                    <label>Дата изменения:</label>
                    <Form.Input
                        size="mini"
                        type="date"
                        value={minModifyDate}
                        onChange={onChangeMinModifyDate}
                        label="с"
                    />
                    <Form.Input
                        size="mini"
                        type="date"
                        value={maxModifyDate}
                        onChange={onChangeMaxModifyDate}
                        label="по"
                    />
                </Form.Field>

                <Form.Field>
                    <label>Статус:</label>
                    <Form.Checkbox
                        size="mini"
                        radio
                        label="Действующие"
                        value="false"
                        name="checkboxRadioGroup"
                        checked={isDeleted === false}
                        onChange={onChangeIsDeleted}
                    />
                    <Form.Checkbox
                        size="mini"
                        radio
                        label="Удаленные"
                        value="true"
                        name="checkboxRadioGroup"
                        checked={isDeleted}
                        onChange={onChangeIsDeleted}
                    />
                </Form.Field>

                <Form.Field>
                    <Button.Group size="mini" floated="right">
                        <Form.Button basic onClick={onClickClear}>
                            Сброc
                        </Form.Button>

                        <Form.Button type="submit">Применить</Form.Button>
                    </Button.Group>
                </Form.Field>
            </Form>
        </>
    )
}

export default ProductCategoriesFilter
