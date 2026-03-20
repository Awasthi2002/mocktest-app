import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Suspense, lazy } from 'react';
import Loader from './components/loader/Loader';

// Lazy-loaded components
const Main = lazy(() => import('./home/main/mainPage'));
const Login = lazy(() => import('./home/LogIn/Login'));
const SignUp = lazy(() => import('./home/SignUp/SignUp'));
const PaymentGateway = lazy(() => import('./home/PaymentGateway/PaymentGateway'));
const Instructions = lazy(() => import('./home/Instructions/Instructions'));
const Exam = lazy(() => import('./home/Exam/Exam'));
const Profile = lazy(() => import('./home/Profile/Profile'));
const ReviewAnswer = lazy(() => import('./home/Exam/Reviewanswer'));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/payment" element={<PaymentGateway />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/exam/review" element={<ReviewAnswer />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;