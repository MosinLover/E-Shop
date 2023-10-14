import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { ProductListPage } from "./pages/ProductListPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { ShopCartPage } from "./pages/ShopCartPage";

import { UserCartPage } from "./pages/user/UserCartPage";
import { UserOrdersPage } from "./pages/user/UserOrdersPage";
import { UserProfilePage } from "./pages/user/UserProfilePage";

import { ProtectedRoutes } from "./pages/components/ProtectedRoutes";
import { OperatorProfilePage } from "./pages/operator/OperatorProfilePage";
import { OperatorAnalyticsPage } from "./pages/operator/OperatorAnalyticsPage";
import { OperatorEditUserPage } from "./pages/operator/OperatorEditUserPage";
import { OperatorProductPage } from "./pages/operator/OperatorProductPage";
import { HeaderComponent } from "./pages/components/HeaderComponent";
import { FooterComponent } from "./pages/components/FooterComponent";

import { RouteWithUserChatComponent } from "./pages/components/userComponent/RouteWithUserChatComponent";

import { ScrollToTop } from "./utils/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route element={<RouteWithUserChatComponent />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/cart" element={<ShopCartPage />} />
          {/* User Protected routes */}
        </Route>
        <Route element={<ProtectedRoutes admin={false} />}>
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route path="/user/orders" element={<UserOrdersPage />} />
          <Route path="/user/cart" element={<UserCartPage />} />
        </Route>
        {/* User Protected routes X */}
        <Route element={<ProtectedRoutes admin={true} />}>
          <Route path="/operator/profile" element={<OperatorProfilePage />} />
          <Route
            path="/operator/edit-user"
            element={<OperatorEditUserPage />}
          />
          <Route
            path="/operator/analytics"
            element={<OperatorAnalyticsPage />}
          />
          <Route
            path="/operator/product-details"
            element={<OperatorProductPage />}
          />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
