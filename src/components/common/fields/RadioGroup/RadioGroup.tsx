import { Checkbox, CheckboxProps, Form } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface RadioGroupProps {
    type: 'radio'
    isHorizontal?: boolean
    topLabel?: string
    label1?: string
    label2?: string
    label3?: string
    value1?: string | number | undefined
    value2?: string | number | undefined
    value3?: string | number | undefined
    checked1?: boolean
    checked2?: boolean
    checked3?: boolean
    onChange: (_: any, { value }: CheckboxProps) => void
}

const RadioGroup: FC<RadioGroupProps> = ({
    isHorizontal,
    topLabel,
    label1,
    label2,
    label3,
    value1,
    value2,
    value3,
    checked1,
    checked2,
    checked3,
    onChange
}) => (
    <Form.Field inline={isHorizontal}>
        <>
            {topLabel && <label>{topLabel}:</label>}
            <Checkbox
                radio
                label={label1}
                placeholder={topLabel}
                value={value1}
                checked={checked1}
                onChange={onChange}
                style={{ marginRight: '20px' }}
            />
            {isHorizontal || <br />}
            <Checkbox
                radio
                label={label2}
                placeholder={topLabel}
                value={value2}
                checked={checked2}
                onChange={onChange}
            />
            {value3 && (
                <>
                    {isHorizontal || <br />}
                    <Checkbox
                        radio
                        label={label3}
                        placeholder={topLabel}
                        value={value3}
                        checked={checked3}
                        onChange={onChange}
                    />
                </>
            )}
        </>
    </Form.Field>
)

export default RadioGroup
