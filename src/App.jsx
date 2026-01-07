import { BrowserRouter, Routes, Route } from "react-router-dom"
import SplashScreen from "./components/SplashScreen"
import UserScreen from "./components/UserScreen"
import SignUpMethod from "./components/SignUpMethod"
import SignUp from "./components/Auth/SignUp"
import Verification from "./components/Auth/Verification"
import SignIn from "./components/Auth/SignIn"
import RecoverPassword from "./components/Auth/Recover Password"
import RecoverPassword2 from "./components/Auth/Recover Password 2"
import SellerKyc from "./components/Auth/SellerKyc"
import KycVerification from "./components/Auth/KycVerification"
import SellerDashboard from "./pages/seller/dashboard/SellerDashboard"
import PropertyListings from "./pages/seller/dashboard/PropertyListings"
import Analytics from "./pages/seller/dashboard/Analytics"
import Enquiries from "./pages/seller/dashboard/Enquiries"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Splash Screen */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/user" element={<UserScreen />} />
        <Route path="/signupmethod" element={<SignUpMethod />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/recoverpassword" element={<RecoverPassword />} />
        <Route path="/recoverpassword2" element={<RecoverPassword2 />} />
        <Route path="/sellerkyc" element={<SellerKyc />} />
        <Route path="/kycverification" element={<KycVerification />} />

        {/* Seller Dashboard Routes */}
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/listings" element={<PropertyListings />} />
        <Route path="/seller/analytics" element={<Analytics />} />
        <Route path="/seller/enquiries" element={<Enquiries />} />

      </Routes>
    </BrowserRouter>
  )
}
