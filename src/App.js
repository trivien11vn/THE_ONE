import { Route, Routes } from 'react-router-dom';
import path from './utils/path';
import Public from './pages/public/Public';
import { AboutUs, Blog, BlogDetail, Career, ChoosingPaymentMethod, ConfirmFail, ConfirmSuccess, ConfirmSuccessTransfer, ContactUs, ContentCheck, ContentCheckLegal, DetailCareer, FAQ, FillInfoWeb, Policies, TermAndCondition, VisaApply, VisaCountry, VisaHome } from './pages/public';
import News from 'pages/public/News';

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
          <Route path={path.CONTENT_CHECK_ILLEGAL} element={<ContentCheckLegal />}/>
          <Route path={path.ABOUT_US} element={<AboutUs />}/>
          <Route path={path.CAREER} element={<Career />}/>
          <Route path={path.DETAIL_CAREER} element={<DetailCareer />}/>
          <Route path={path.POLICIES} element={<Policies />}/>
          <Route path={path.TERM_AND_CONDITION} element={<TermAndCondition />}/>
          <Route path={path.FAQ} element={<FAQ />}/>
          <Route path={path.NEWS} element={<News />}/>
          <Route path={path.BLOGS} element={<Blog />}/>
          <Route path={path.BLOG_DETAIL} element={<BlogDetail />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
