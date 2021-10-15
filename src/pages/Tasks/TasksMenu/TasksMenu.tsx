import React, { FC } from 'react'

import Menu from '../../../components/common/collections/Menu/Menu'
import TasksRoutes from '../Tasks/routes/TasksRoutes'

const TasksMenu: FC = () => <Menu items={[{ name: 'Задачи', path: TasksRoutes.Index }]} />

export default TasksMenu
