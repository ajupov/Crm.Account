import { Button, Card, Icon, Modal } from 'semantic-ui-react'
import FilterForm, { FilterFormProps } from '../../forms/FilterForm/FilterForm'
import React, { FC } from 'react'

export interface FilterMobileModalProps {
    isShow: boolean
    onShow: () => void
    onHide: () => void
}

// TODO: Move to l10n
const FilterMobileModal: FC<FilterMobileModalProps & FilterFormProps> = ({
    isShow,
    onShow,
    onHide,
    fields,
    isApplyEnabled,
    onApply,
    isResetEnabled,
    onReset
}) => (
    <>
        <Button basic icon size="mini" floated="right" onClick={onShow}>
            <Icon name="filter" />
            Фильтры
        </Button>
        <Modal size="mini" open={isShow} onClose={onHide}>
            <Card fluid>
                <Card.Content>
                    <FilterForm
                        fields={fields}
                        isApplyEnabled={isApplyEnabled}
                        onApply={onApply}
                        isResetEnabled={isResetEnabled}
                        onReset={onReset}
                    />
                </Card.Content>
            </Card>
        </Modal>
    </>
)

export default FilterMobileModal
