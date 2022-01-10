import React, { FC } from 'react'
import { Route, Switch } from 'react-router'

import Calendar from '../../../pages/Calendar/Calendar'
import CustomerAttributeChanges from '../../../pages/Customers/CustomerAttributes/components/CustomerAttributeChanges/CustomerAttributeChanges'
import CustomerAttributeCreate from '../../../pages/Customers/CustomerAttributes/components/CustomerAttributeCreate/CustomerAttributeCreate'
import CustomerAttributeEdit from '../../../pages/Customers/CustomerAttributes/components/CustomerAttributeEdit/CustomerAttributeEdit'
import CustomerAttributeView from '../../../pages/Customers/CustomerAttributes/components/CustomerAttributeView/CustomerAttributeView'
import CustomerAttributes from '../../../pages/Customers/CustomerAttributes/CustomerAttributes'
import CustomerAttributesRoutes from '../../../pages/Customers/CustomerAttributes/routes/CustomerAttributesRoutes'
import CustomerChanges from '../../../pages/Customers/Customers/components/CustomerChanges/CustomerChanges'
import CustomerCreate from '../../../pages/Customers/Customers/components/CustomerCreate/CustomerCreate'
import CustomerEdit from '../../../pages/Customers/Customers/components/CustomerEdit/CustomerEdit'
import CustomerSourceChanges from '../../../pages/Customers/CustomerSources/components/CustomerSourceChanges/CustomerSourceChanges'
import CustomerSourceCreate from '../../../pages/Customers/CustomerSources/components/CustomerSourceCreate/CustomerSourceCreate'
import CustomerSourceEdit from '../../../pages/Customers/CustomerSources/components/CustomerSourceEdit/CustomerSourceEdit'
import CustomerSourceView from '../../../pages/Customers/CustomerSources/components/CustomerSourceView/CustomerSourceView'
import CustomerSources from '../../../pages/Customers/CustomerSources/CustomerSources'
import CustomerSourcesRoutes from '../../../pages/Customers/CustomerSources/routes/CustomerSourcesRoutes'
import CustomerView from '../../../pages/Customers/Customers/components/CustomerView/CustomerView'
import Customers from '../../../pages/Customers/Customers/Customers'
import CustomersRoutes from '../../../pages/Customers/Customers/routes/CustomersRoutes'
import Dashboard from '../../../pages/Dashboard/Dashboard'
import NotFound from '../../../pages/NotFound/NotFound'
import OrderAttributeChanges from '../../../pages/Orders/OrderAttributes/components/OrderAttributeChanges/OrderAttributeChanges'
import OrderAttributeCreate from '../../../pages/Orders/OrderAttributes/components/OrderAttributeCreate/OrderAttributeCreate'
import OrderAttributeEdit from '../../../pages/Orders/OrderAttributes/components/OrderAttributeEdit/OrderAttributeEdit'
import OrderAttributeView from '../../../pages/Orders/OrderAttributes/components/OrderAttributeView/OrderAttributeView'
import OrderAttributes from '../../../pages/Orders/OrderAttributes/OrderAttributes'
import OrderAttributesRoutes from '../../../pages/Orders/OrderAttributes/routes/OrderAttributesRoutes'
import OrderChanges from '../../../pages/Orders/Orders/components/OrderChanges/OrderChanges'
import OrderCreate from '../../../pages/Orders/Orders/components/OrderCreate/OrderCreate'
import OrderEdit from '../../../pages/Orders/Orders/components/OrderEdit/CustomerEdit'
import OrderStatusChanges from '../../../pages/Orders/OrderStatuses/components/OrderStatusChanges/OrderStatusChanges'
import OrderStatusCreate from '../../../pages/Orders/OrderStatuses/components/OrderStatusCreate/OrderStatusCreate'
import OrderStatusEdit from '../../../pages/Orders/OrderStatuses/components/OrderStatusEdit/OrderStatusEdit'
import OrderStatusView from '../../../pages/Orders/OrderStatuses/components/OrderStatusView/OrderStatusView'
import OrderStatuses from '../../../pages/Orders/OrderStatuses/OrderStatuses'
import OrderStatusesRoutes from '../../../pages/Orders/OrderStatuses/routes/OrderStatusesRoutes'
import OrderTypeChanges from '../../../pages/Orders/OrderTypes/components/OrderTypeChanges/OrderTypeChanges'
import OrderTypeCreate from '../../../pages/Orders/OrderTypes/components/OrderTypeCreate/OrderTypeCreate'
import OrderTypeEdit from '../../../pages/Orders/OrderTypes/components/OrderTypeEdit/OrderTypeEdit'
import OrderTypeView from '../../../pages/Orders/OrderTypes/components/OrderTypeView/OrderTypeView'
import OrderTypes from '../../../pages/Orders/OrderTypes/OrderTypes'
import OrderTypesRoutes from '../../../pages/Orders/OrderTypes/routes/OrderTypesRoutes'
import OrderView from '../../../pages/Orders/Orders/components/OrderView/OrderView'
import Orders from '../../../pages/Orders/Orders/Orders'
import OrdersRoutes from '../../../pages/Orders/Orders/routes/OrdersRoutes'
import ProductAttributeChanges from '../../../pages/Products/ProductAttributes/components/ProductAttributeChanges/ProductAttributeChanges'
import ProductAttributeCreate from '../../../pages/Products/ProductAttributes/components/ProductAttributeCreate/ProductAttributeCreate'
import ProductAttributeEdit from '../../../pages/Products/ProductAttributes/components/ProductAttributeEdit/ProductAttributeEdit'
import ProductAttributeView from '../../../pages/Products/ProductAttributes/components/ProductAttributeView/ProductAttributeView'
import ProductAttributes from '../../../pages/Products/ProductAttributes/ProductAttributes'
import ProductAttributesRoutes from '../../../pages/Products/ProductAttributes/routes/ProductAttributesRoutes'
import ProductCategories from '../../../pages/Products/ProductCategories/ProductCategories'
import ProductCategoriesRoutes from '../../../pages/Products/ProductCategories/routes/ProductCategoriesRoutes'
import ProductCategoryChanges from '../../../pages/Products/ProductCategories/components/ProductCategoryChanges/ProductCategoryChanges'
import ProductCategoryCreate from '../../../pages/Products/ProductCategories/components/ProductCategoryCreate/ProductCategoryCreate'
import ProductCategoryEdit from '../../../pages/Products/ProductCategories/components/ProductCategoryEdit/ProductCategoryEdit'
import ProductCategoryView from '../../../pages/Products/ProductCategories/components/ProductCategoryView/ProductCategoryView'
import ProductChanges from '../../../pages/Products/Products/components/ProductChanges/ProductChanges'
import ProductCreate from '../../../pages/Products/Products/components/ProductCreate/ProductCreate'
import ProductEdit from '../../../pages/Products/Products/components/ProductEdit/ProductEdit'
import ProductStatusChanges from '../../../pages/Products/ProductStatuses/components/ProductStatusChanges/ProductStatusChanges'
import ProductStatusCreate from '../../../pages/Products/ProductStatuses/components/ProductStatusCreate/ProductStatusCreate'
import ProductStatusEdit from '../../../pages/Products/ProductStatuses/components/ProductStatusEdit/ProductStatusEdit'
import ProductStatusView from '../../../pages/Products/ProductStatuses/components/ProductStatusView/ProductStatusView'
import ProductStatuses from '../../../pages/Products/ProductStatuses/ProductStatuses'
import ProductStatusesRoutes from '../../../pages/Products/ProductStatuses/routes/ProductStatusesRoutes'
import ProductView from '../../../pages/Products/Products/components/ProductView/ProductView'
import Products from '../../../pages/Products/Products/Products'
import ProductsRoutes from '../../../pages/Products/Products/routes/ProductsRoutes'
import Settings from '../../../pages/Settings/Settings'
import StockArrivalChanges from '../../../pages/Stock/StockArrivals/components/StockArrivalChanges/StockArrivalChanges'
import StockArrivalCreate from '../../../pages/Stock/StockArrivals/components/StockArrivalCreate/StockArrivalCreate'
import StockArrivalEdit from '../../../pages/Stock/StockArrivals/components/StockArrivalEdit/StockArrivalEdit'
import StockArrivalView from '../../../pages/Stock/StockArrivals/components/StockArrivalView/StockArrivalView'
import StockArrivals from '../../../pages/Stock/StockArrivals/StockArrivals'
import StockArrivalsRoutes from '../../../pages/Stock/StockArrivals/routes/StockArrivalsRoutes'
import StockBalanceChanges from '../../../pages/Stock/StockBalances/components/StockBalanceChanges/StockBalanceChanges'
import StockBalanceCreate from '../../../pages/Stock/StockBalances/components/StockBalanceCreate/StockBalanceCreate'
import StockBalanceEdit from '../../../pages/Stock/StockBalances/components/StockBalanceEdit/StockBalanceEdit'
import StockBalanceView from '../../../pages/Stock/StockBalances/components/StockBalanceView/StockBalanceView'
import StockBalances from '../../../pages/Stock/StockBalances/StockBalances'
import StockBalancesRoutes from '../../../pages/Stock/StockBalances/routes/StockBalancesRoutes'
import StockRoomChanges from '../../../pages/Stock/StockRooms/components/StockRoomChanges/StockRoomChanges'
import StockRoomCreate from '../../../pages/Stock/StockRooms/components/StockRoomCreate/StockRoomCreate'
import StockRoomEdit from '../../../pages/Stock/StockRooms/components/StockRoomEdit/StockRoomEdit'
import StockRoomView from '../../../pages/Stock/StockRooms/components/StockRoomView/StockRoomView'
import StockRooms from '../../../pages/Stock/StockRooms/StockRooms'
import StockRoomsRoutes from '../../../pages/Stock/StockRooms/routes/StockRoomsRoutes'
import SupplierAttributeChanges from '../../../pages/Suppliers/SupplierAttributes/components/SupplierAttributeChanges/SupplierAttributeChanges'
import SupplierAttributeCreate from '../../../pages/Suppliers/SupplierAttributes/components/SupplierAttributeCreate/SupplierAttributeCreate'
import SupplierAttributeEdit from '../../../pages/Suppliers/SupplierAttributes/components/SupplierAttributeEdit/SupplierAttributeEdit'
import SupplierAttributeView from '../../../pages/Suppliers/SupplierAttributes/components/SupplierAttributeView/SupplierAttributeView'
import SupplierAttributes from '../../../pages/Suppliers/SupplierAttributes/SupplierAttributes'
import SupplierAttributesRoutes from '../../../pages/Suppliers/SupplierAttributes/routes/SupplierAttributesRoutes'
import SupplierChanges from '../../../pages/Suppliers/Suppliers/components/SupplierChanges/SupplierChanges'
import SupplierCreate from '../../../pages/Suppliers/Suppliers/components/SupplierCreate/SupplierCreate'
import SupplierEdit from '../../../pages/Suppliers/Suppliers/components/SupplierEdit/SupplierEdit'
import SupplierView from '../../../pages/Suppliers/Suppliers/components/SupplierView/SupplierView'
import Suppliers from '../../../pages/Suppliers/Suppliers/Suppliers'
import SuppliersRoutes from '../../../pages/Suppliers/Suppliers/routes/SuppliersRoutes'
import TaskAttributeChanges from '../../../pages/Tasks/TaskAttributes/components/TaskAttributeChanges/TaskAttributeChanges'
import TaskAttributeCreate from '../../../pages/Tasks/TaskAttributes/components/TaskAttributeCreate/TaskAttributeCreate'
import TaskAttributeEdit from '../../../pages/Tasks/TaskAttributes/components/TaskAttributeEdit/TaskAttributeEdit'
import TaskAttributeView from '../../../pages/Tasks/TaskAttributes/components/TaskAttributeView/TaskAttributeView'
import TaskAttributes from '../../../pages/Tasks/TaskAttributes/TaskAttributes'
import TaskAttributesRoutes from '../../../pages/Tasks/TaskAttributes/routes/TaskAttributesRoutes'
import TaskStatusChanges from '../../../pages/Tasks/TaskStatuses/components/TaskStatusChanges/TaskStatusChanges'
import TaskStatusCreate from '../../../pages/Tasks/TaskStatuses/components/TaskStatusCreate/TaskStatusCreate'
import TaskStatusEdit from '../../../pages/Tasks/TaskStatuses/components/TaskStatusEdit/TaskStatusEdit'
import TaskStatusView from '../../../pages/Tasks/TaskStatuses/components/TaskStatusView/TaskStatusView'
import TaskStatuses from '../../../pages/Tasks/TaskStatuses/TaskStatuses'
import TaskStatusesRoutes from '../../../pages/Tasks/TaskStatuses/routes/TaskStatusesRoutes'
import TaskTypeChanges from '../../../pages/Tasks/TaskTypes/components/TaskTypeChanges/TaskTypeChanges'
import TaskTypeCreate from '../../../pages/Tasks/TaskTypes/components/TaskTypeCreate/TaskTypeCreate'
import TaskTypeEdit from '../../../pages/Tasks/TaskTypes/components/TaskTypeEdit/TaskTypeEdit'
import TaskTypeView from '../../../pages/Tasks/TaskTypes/components/TaskTypeView/TaskTypeView'
import TaskTypes from '../../../pages/Tasks/TaskTypes/TaskTypes'
import TaskTypesRoutes from '../../../pages/Tasks/TaskTypes/routes/TaskTypesRoutes'
import Tasks from '../../../pages/Tasks/Tasks/Tasks'
import TasksRoutes from '../../../pages/Tasks/Tasks/routes/TasksRoutes'
import StockConsumptionChanges from '../../../pages/Stock/StockConsumptions/components/StockConsumptionChanges/StockConsumptionChanges'
import StockConsumptionCreate from '../../../pages/Stock/StockConsumptions/components/StockConsumptionCreate/StockConsumptionCreate'
import StockConsumptionEdit from '../../../pages/Stock/StockConsumptions/components/StockConsumptionEdit/StockConsumptionEdit'
import StockConsumptionView from '../../../pages/Stock/StockConsumptions/components/StockConsumptionView/StockConsumptionView'
import StockConsumptionsRoutes from '../../../pages/Stock/StockConsumptions/routes/StockConsumptionsRoutes'
import StockConsumptions from '../../../pages/Stock/StockConsumptions/StockConsumptions'

const Routes: FC = () => {
    const withId = (route: string): string => `${route}/:id`

    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/settings" component={Settings} />

            {/*  */}

            <Route path={OrdersRoutes.Index} exact component={Orders} />
            <Route path={OrdersRoutes.Create} exact component={OrderCreate} />
            <Route path={withId(OrdersRoutes.View)} exact component={OrderView} />
            <Route path={withId(OrdersRoutes.Edit)} exact component={OrderEdit} />
            <Route path={withId(OrdersRoutes.Changes)} exact component={OrderChanges} />

            <Route path={OrderStatusesRoutes.Index} exact component={OrderStatuses} />
            <Route path={OrderStatusesRoutes.Create} exact component={OrderStatusCreate} />
            <Route path={withId(OrderStatusesRoutes.View)} exact component={OrderStatusView} />
            <Route path={withId(OrderStatusesRoutes.Edit)} exact component={OrderStatusEdit} />
            <Route path={withId(OrderStatusesRoutes.Changes)} exact component={OrderStatusChanges} />

            <Route path={OrderTypesRoutes.Index} exact component={OrderTypes} />
            <Route path={OrderTypesRoutes.Create} exact component={OrderTypeCreate} />
            <Route path={withId(OrderTypesRoutes.View)} exact component={OrderTypeView} />
            <Route path={withId(OrderTypesRoutes.Edit)} exact component={OrderTypeEdit} />
            <Route path={withId(OrderTypesRoutes.Changes)} exact component={OrderTypeChanges} />

            <Route path={OrderAttributesRoutes.Index} exact component={OrderAttributes} />
            <Route path={OrderAttributesRoutes.Create} exact component={OrderAttributeCreate} />
            <Route path={withId(OrderAttributesRoutes.View)} exact component={OrderAttributeView} />
            <Route path={withId(OrderAttributesRoutes.Edit)} exact component={OrderAttributeEdit} />
            <Route path={withId(OrderAttributesRoutes.Changes)} exact component={OrderAttributeChanges} />

            {/*  */}

            <Route path={TasksRoutes.Index} exact component={Tasks} />
            {/* <Route path={TasksRoutes.Create} exact component={TaskCreate} /> */}
            {/* <Route path={withId(TasksRoutes.View)} exact component={TaskView} /> */}
            {/* <Route path={withId(TasksRoutes.Edit)} exact component={TaskEdit} /> */}
            {/* <Route path={withId(TasksRoutes.Changes)} exact component={TaskChanges} /> */}

            <Route path={TaskStatusesRoutes.Index} exact component={TaskStatuses} />
            <Route path={TaskStatusesRoutes.Create} exact component={TaskStatusCreate} />
            <Route path={withId(TaskStatusesRoutes.View)} exact component={TaskStatusView} />
            <Route path={withId(TaskStatusesRoutes.Edit)} exact component={TaskStatusEdit} />
            <Route path={withId(TaskStatusesRoutes.Changes)} exact component={TaskStatusChanges} />

            <Route path={TaskTypesRoutes.Index} exact component={TaskTypes} />
            <Route path={TaskTypesRoutes.Create} exact component={TaskTypeCreate} />
            <Route path={withId(TaskTypesRoutes.View)} exact component={TaskTypeView} />
            <Route path={withId(TaskTypesRoutes.Edit)} exact component={TaskTypeEdit} />
            <Route path={withId(TaskTypesRoutes.Changes)} exact component={TaskTypeChanges} />

            <Route path={TaskAttributesRoutes.Index} exact component={TaskAttributes} />
            <Route path={TaskAttributesRoutes.Create} exact component={TaskAttributeCreate} />
            <Route path={withId(TaskAttributesRoutes.View)} exact component={TaskAttributeView} />
            <Route path={withId(TaskAttributesRoutes.Edit)} exact component={TaskAttributeEdit} />
            <Route path={withId(TaskAttributesRoutes.Changes)} exact component={TaskAttributeChanges} />

            {/*  */}

            <Route path={CustomersRoutes.Index} exact component={Customers} />
            <Route path={CustomersRoutes.Create} exact component={CustomerCreate} />
            <Route path={withId(CustomersRoutes.View)} exact component={CustomerView} />
            <Route path={withId(CustomersRoutes.Edit)} exact component={CustomerEdit} />
            <Route path={withId(CustomersRoutes.Changes)} exact component={CustomerChanges} />

            <Route path={CustomerSourcesRoutes.Index} exact component={CustomerSources} />
            <Route path={CustomerSourcesRoutes.Create} exact component={CustomerSourceCreate} />
            <Route path={withId(CustomerSourcesRoutes.View)} exact component={CustomerSourceView} />
            <Route path={withId(CustomerSourcesRoutes.Edit)} exact component={CustomerSourceEdit} />
            <Route path={withId(CustomerSourcesRoutes.Changes)} exact component={CustomerSourceChanges} />

            <Route path={CustomerAttributesRoutes.Index} exact component={CustomerAttributes} />
            <Route path={CustomerAttributesRoutes.Create} exact component={CustomerAttributeCreate} />
            <Route path={withId(CustomerAttributesRoutes.View)} exact component={CustomerAttributeView} />
            <Route path={withId(CustomerAttributesRoutes.Edit)} exact component={CustomerAttributeEdit} />
            <Route path={withId(CustomerAttributesRoutes.Changes)} exact component={CustomerAttributeChanges} />

            {/*  */}

            <Route path={ProductsRoutes.Index} exact component={Products} />
            <Route path={ProductsRoutes.Create} exact component={ProductCreate} />
            <Route path={withId(ProductsRoutes.View)} exact component={ProductView} />
            <Route path={withId(ProductsRoutes.Edit)} exact component={ProductEdit} />
            <Route path={withId(ProductsRoutes.Changes)} exact component={ProductChanges} />

            <Route path={ProductCategoriesRoutes.Index} exact component={ProductCategories} />
            <Route path={ProductCategoriesRoutes.Create} exact component={ProductCategoryCreate} />
            <Route path={withId(ProductCategoriesRoutes.View)} exact component={ProductCategoryView} />
            <Route path={withId(ProductCategoriesRoutes.Edit)} exact component={ProductCategoryEdit} />
            <Route path={withId(ProductCategoriesRoutes.Changes)} exact component={ProductCategoryChanges} />

            <Route path={ProductAttributesRoutes.Index} exact component={ProductAttributes} />
            <Route path={ProductAttributesRoutes.Create} exact component={ProductAttributeCreate} />
            <Route path={withId(ProductAttributesRoutes.View)} exact component={ProductAttributeView} />
            <Route path={withId(ProductAttributesRoutes.Edit)} exact component={ProductAttributeEdit} />
            <Route path={withId(ProductAttributesRoutes.Changes)} exact component={ProductAttributeChanges} />

            <Route path={ProductStatusesRoutes.Index} exact component={ProductStatuses} />
            <Route path={ProductStatusesRoutes.Create} exact component={ProductStatusCreate} />
            <Route path={withId(ProductStatusesRoutes.View)} exact component={ProductStatusView} />
            <Route path={withId(ProductStatusesRoutes.Edit)} exact component={ProductStatusEdit} />
            <Route path={withId(ProductStatusesRoutes.Changes)} exact component={ProductStatusChanges} />

            {/*  */}

            <Route path={SuppliersRoutes.Index} exact component={Suppliers} />
            <Route path={SuppliersRoutes.Create} exact component={SupplierCreate} />
            <Route path={withId(SuppliersRoutes.View)} exact component={SupplierView} />
            <Route path={withId(SuppliersRoutes.Edit)} exact component={SupplierEdit} />
            <Route path={withId(SuppliersRoutes.Changes)} exact component={SupplierChanges} />

            <Route path={SupplierAttributesRoutes.Index} exact component={SupplierAttributes} />
            <Route path={SupplierAttributesRoutes.Create} exact component={SupplierAttributeCreate} />
            <Route path={withId(SupplierAttributesRoutes.View)} exact component={SupplierAttributeView} />
            <Route path={withId(SupplierAttributesRoutes.Edit)} exact component={SupplierAttributeEdit} />
            <Route path={withId(SupplierAttributesRoutes.Changes)} exact component={SupplierAttributeChanges} />

            {/*  */}

            <Route path={StockBalancesRoutes.Index} exact component={StockBalances} />
            <Route path={StockBalancesRoutes.Create} exact component={StockBalanceCreate} />
            <Route path={withId(StockBalancesRoutes.View)} exact component={StockBalanceView} />
            <Route path={withId(StockBalancesRoutes.Edit)} exact component={StockBalanceEdit} />
            <Route path={withId(StockBalancesRoutes.Changes)} exact component={StockBalanceChanges} />

            <Route path={StockArrivalsRoutes.Index} exact component={StockArrivals} />
            <Route path={StockArrivalsRoutes.Create} exact component={StockArrivalCreate} />
            <Route path={withId(StockArrivalsRoutes.View)} exact component={StockArrivalView} />
            <Route path={withId(StockArrivalsRoutes.Edit)} exact component={StockArrivalEdit} />
            <Route path={withId(StockArrivalsRoutes.Changes)} exact component={StockArrivalChanges} />

            <Route path={StockConsumptionsRoutes.Index} exact component={StockConsumptions} />
            <Route path={StockConsumptionsRoutes.Create} exact component={StockConsumptionCreate} />
            <Route path={withId(StockConsumptionsRoutes.View)} exact component={StockConsumptionView} />
            <Route path={withId(StockConsumptionsRoutes.Edit)} exact component={StockConsumptionEdit} />
            <Route path={withId(StockConsumptionsRoutes.Changes)} exact component={StockConsumptionChanges} />

            <Route path={StockRoomsRoutes.Index} exact component={StockRooms} />
            <Route path={StockRoomsRoutes.Create} exact component={StockRoomCreate} />
            <Route path={withId(StockRoomsRoutes.View)} exact component={StockRoomView} />
            <Route path={withId(StockRoomsRoutes.Edit)} exact component={StockRoomEdit} />
            <Route path={withId(StockRoomsRoutes.Changes)} exact component={StockRoomChanges} />

            {/*  */}

            <Route component={NotFound} />
        </Switch>
    )
}

export default Routes
