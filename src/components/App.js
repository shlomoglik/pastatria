import { Route, Routes } from "react-router-dom";
import { routeNames } from "../data/routeNames";
import DetailsForm from "../pages/DetailsForm";
import FormProductsTable from "../pages/FormProductsTable"
import CheckOut from "../pages/CheckOut"
import FormSteps from "./FormSteps"
import ThankYou from "../pages/ThankYou"
import OrdersTable from "../pages/OrdersTable";


function App() {
  return (
       <div dir="rtl" style={{ padding: "1vw" ,justifyContent:'center' }}>
        <FormSteps />
        <Routes>
          <Route path="/" >
            <Route path="" element={<DetailsForm/>}/>
            <Route path={routeNames.ORDER_DETAILS} element={<DetailsForm/>}/>
            <Route path={`${routeNames.SELECT_PRODUCTS}`} element={<FormProductsTable/>}/>
            <Route path={`${routeNames.CHECK_OUT}`} element={<CheckOut/>}/>
            <Route path="system">
              <Route path={`${routeNames.THANK_YOU}`} element={<ThankYou/>}/>
              <Route path={`${routeNames.ORDERS}`} element={<OrdersTable/>}/>
            </Route>
          </Route>
        </Routes>
       </div>
  );
}

export default App;
