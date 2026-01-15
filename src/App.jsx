import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RoleProvider } from "./context/RoleContext"
import SplashScreen from "./components/common/SplashScreen"
import UserScreen from "./components/common/UserScreen"
import SignupMethod from "./components/common/SignUpMethod"
import SignUp from "./components/common/SignUp"
import SignIn from "./components/common/SignIn"
import Verification from "./components/common/Verification"
import RecoverPassword from "./components/common/Recover Password"
import RecoverPassword2 from "./components/common/Recover Password 2"
import SellerKyc from "./components/seller/sellerkyc"
import KycVerification from "./components/seller/kycverification"
import BuyerType from "./components/Buyer/BuyerType"

import SellerDashboard from "./pages/dashboard/seller/SellerDashboard"
import Attorney from "./pages/dashboard/seller/Attorney"
import BuyerDashboard from "./pages/dashboard/buyer/BuyerDashboard"
import PropertyListings from "./pages/dashboard/seller/PropertyListings"
import Analytics from "./pages/dashboard/seller/Analytics"
import Enquiries from "./pages/dashboard/seller/Enquiries"
import Offers from "./pages/dashboard/seller/Offers"
import OfferDraft from "./pages/dashboard/seller/OfferDraft"
import OfferDetails from "./pages/dashboard/seller/OfferDetails"
import Negotiations from "./pages/dashboard/seller/Negotiations"
import Vault from "./pages/dashboard/seller/Vault"
import CreateListing from "./pages/dashboard/seller/create-listing/CreateListing"
import BrowseProperties from "./pages/dashboard/buyer/browse/BrowseProperties"
import PropertyDetails from "./pages/dashboard/buyer/browse/PropertyDetails"
import MyInquiries from "./pages/dashboard/buyer/enquiries/MyInquiries"
import SubmitOffer from "./pages/dashboard/buyer/enquiries/SubmitOffer"
import MyOffers from "./pages/dashboard/buyer/offers/MyOffers"
import BuyerOfferDraft from "./pages/dashboard/buyer/offers/OfferDraft"
import BuyerAttorney from "./pages/dashboard/buyer/buyer attorney/BuyerAttorney"
import BuyerVault from "./pages/dashboard/buyer/vault/BuyerVault"
import AttorneyAccess from "./pages/dashboard/attorney/AttorneyAccess"
import AttorneyDashboard from "./pages/dashboard/attorney/AttorneyDashboard"
import BondAttorneyDetails from "./components/Buyer/BondAttorneyDetails"

export default function App() {
  return (
    <RoleProvider>
      <BrowserRouter>
        <Routes>
          {/* Splash Screen */}
          <Route path="/" element={<SplashScreen />} />
          <Route path="/user" element={<UserScreen />} />
          <Route path="/SignupMethod" element={<SignupMethod />} />

          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Verification" element={<Verification />} />
          <Route path="/RecoverPassword" element={<RecoverPassword />} />
          <Route path="/RecoverPassword2" element={<RecoverPassword2 />} />


          <Route path="/BuyerType" element={<BuyerType />} />
          <Route path="/BondAttorneyDetails" element={<BondAttorneyDetails />} />


          <Route path="/sellerkyc" element={<SellerKyc />} />
          <Route path="/kycverification" element={<KycVerification />} />

          <Route path="/seller/dashboard" element={<SellerDashboard />} />
          <Route path="/seller/listings" element={<PropertyListings />} />
          <Route path="/seller/analytics" element={<Analytics />} />
          <Route path="/seller/enquiries" element={<Enquiries />} />
          <Route path="/seller/offers" element={<Offers />} />
          <Route path="/seller/attorney" element={<Attorney />} />
          <Route path="/seller/vault" element={<Vault />} />
          <Route path="/seller/offers/details/:offerId" element={<OfferDetails />} />
          <Route path="/seller/offers/draft/:offerId" element={<OfferDraft />} />
          <Route path="/seller/offers/negotiation/:offerId" element={<Negotiations />} />
          <Route path="/seller/create-listing" element={<CreateListing />} />


          <Route path="/buyertype" element={<BuyerType />} />
          <Route path="/bondattorneydetails" element={<BondAttorneyDetails />} />
          <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
          <Route path="/buyer/browse" element={<BrowseProperties />} />
          <Route path="/buyer/browse/:propertyId" element={<PropertyDetails />} />
          <Route path="/buyer/enquiries" element={<MyInquiries />} />
          <Route path="/buyer/enquiries/:enquiryId" element={<MyInquiries />} />
          <Route path="/buyer/submit-offer/:propertyId" element={<SubmitOffer />} />
          <Route path="/buyer/offers" element={<MyOffers />} />
          <Route path="/buyer/offer-draft/:offerId" element={<BuyerOfferDraft />} />
          <Route path="/buyer/attorney" element={<BuyerAttorney />} />
          <Route path="/buyer/vault" element={<BuyerVault />} />

          {/* Attorney Routes */}
          <Route path="/attorney/access" element={<AttorneyAccess />} />
          <Route path="/attorney/dashboard" element={<AttorneyDashboard />} />

        </Routes>
      </BrowserRouter>
    </RoleProvider>
  )
}

