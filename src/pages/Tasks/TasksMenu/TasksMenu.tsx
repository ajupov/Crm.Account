import React, { FC } from 'react'

import Menu from '../../../components/common/collections/Menu/Menu'
import TaskAttributesRoutes from '../TaskAttributes/routes/TaskAttributesRoutes'
import TaskStatusesRoutes from '../TaskStatuses/routes/TaskStatusesRoutes'
import TaskTypesRoutes from '../TaskTypes/routes/TaskTypesRoutes'
import TasksRoutes from '../Tasks/routes/TasksRoutes'

const TasksMenu: FC = () => (
    <Menu
        items={[
            { name: 'Задачи', path: TasksRoutes.Index },
            { name: 'Типы', path: TaskTypesRoutes.Index },
            { name: 'Статусы', path: TaskStatusesRoutes.Index },
            { name: 'Атрибуты', path: TaskAttributesRoutes.Index }
        ]}
    />
)

export default TasksMenu
