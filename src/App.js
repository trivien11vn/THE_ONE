import { Route, Routes } from 'react-router-dom';
import path from './utils/path';
import Public from './pages/public/Public';
import { ChoosingPaymentMethod, ConfirmFail, ConfirmSuccess, ConfirmSuccessTransfer, ContactUs, ContentCheck, FillInfoWeb, VisaApply, VisaCountry, VisaHome } from './pages/public';

function App() {
  return (
    <div className="w-screen h-screen relative">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<VisaHome />} />
          <Route path={path.VISA_APPLY} element={<VisaApply />} />
          <Route path={path.VISA_COUNTRY} element={<VisaCountry />}/>
          <Route path={path.FILL_INFO_WEB} element={<FillInfoWeb />} />
          <Route path={path.CHOOSING_PAYMENT_METHOD} element={<ChoosingPaymentMethod />} />
          <Route path={path.CONFIRM_SUCCESS} element={<ConfirmSuccess />} />
          <Route path={path.CONFIRM_SUCCESS_TRANSFER} element={<ConfirmSuccessTransfer />}/>
          <Route path={path.CONFIRM_FAIL} element={<ConfirmFail />} />
          <Route path={path.CONTACT_US} element={<ContactUs />} />
          <Route path={path.CONTENT_CHECK} element={<ContentCheck />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
