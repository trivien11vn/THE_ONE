import { Route, Routes } from 'react-router-dom';
import path from './utils/path';
import Public from './pages/public/Public';
import { AboutUs, Blog, BlogDetail, BookFlight, Career, ChoosingPaymentMethod, ConfirmFail, ConfirmSuccess, ConfirmSuccessTransfer, ContactUs, ContentCheck, ContentCheckLegal, CountryDetail, DetailCareer, FAQ, FillInfoDetail, FillInfoWeb, MissingInfo, Policies, TermAndCondition, VisaApply, VisaCountry, VisaHome } from './pages/public';
import News from 'pages/public/News';
import SearchFlight from 'pages/public/SearchFlight';
import MyAccount from 'pages/public/MyAccount';
import UserLayout from 'pages/public/UserLayout';
import MyBooking from 'pages/public/MyBooking';
import MyInvoice from 'pages/public/MyInvoice';
import MyProfile from 'pages/public/MyProfile';
import MyBookingDetail from 'pages/public/MyBookingDetail';
import ReviewInfo from 'pages/public/ReviewInfo';
import PaymentPage from 'pages/public/PaymentPage';

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
          <Route path={path.MISSING_INFO} element={<MissingInfo />} />
          <Route path={path.COUNTRY_DETAIL} element={<CountryDetail />} />
          <Route path={path.BOOKING_FLIGHT} element={<BookFlight />} />
          <Route path={path.SEARCH_FLIGHT} element={<SearchFlight />} />
          <Route path={path.FILL_INFO_DETAIL} element={<FillInfoDetail />} />
          <Route path={path.REVIEW_INFO} element={<ReviewInfo />} />
          <Route path={path.PAYMENT} element={<PaymentPage />} />

          <Route path={path.USER} element={<UserLayout />}>
            <Route path='' element={<MyAccount />} /> 
            <Route path={path.BOOKING} element={<MyBooking />} />
            <Route path={path.INVOICE} element={<MyInvoice />} />
            <Route path={path.PROFILE} element={<MyProfile />}/>
            <Route path={path.BOOKING_DETAIL} element={<MyBookingDetail />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
