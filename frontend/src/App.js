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
import { OperatorProductsPage } from "./pages/operator/OperatorProductsPage";
import { HeaderComponent } from "./pages/components/HeaderComponent";
import { FooterComponent } from "./pages/components/FooterComponent";

import { RouteWithUserChatComponent } from "./pages/components/userComponent/RouteWithUserChatComponent";

import { ScrollToTop } from "./utils/ScrollToTop";
import { UserOrdersDetailsPage } from "./pages/user/UserOrdersDetailsPage";
import { UserCartDetailsPage } from "./pages/user/UserCartDetailsPage";
import { OperatorOrdersPage } from "./pages/operator/OperatorOrdersPage";
import { OperatorOrderDetailsPage } from "./pages/operator/OperatorOrderDetailsPage";
import { OperatorCreateProductPage } from "./pages/operator/OperatorCreateProductPage";
import { OperatorEditProductPage } from "./pages/operator/OperatorEditProductPage";
import { OperatorUsersPage } from "./pages/operator/OperatorUsersPage";
import { OperatorChatsPage } from "./pages/operator/OperatorChatsPage";
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
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route
            path="/user/order-details"
            element={<UserOrdersDetailsPage />}
          />
        </Route>
        {/* User Protected routes X */}
        <Route element={<ProtectedRoutes admin={true} />}>
          <Route path="/operator/profile" element={<OperatorProfilePage />} />
          <Route path="/operator/orders" element={<OperatorOrdersPage />} />
          <Route path="/operator/orders-details" element={<OperatorOrderDetailsPage />} />
          <Route path="/operator/create-new-product" element={<OperatorCreateProductPage />} />
          <Route path="/operator/edit-product" element={<OperatorEditProductPage />} />
          <Route path="/operator/edit-user" element={<OperatorEditUserPage />} />
          <Route path="/operator/users-list" element={<OperatorUsersPage />} />
          <Route path="/operator/chats" element={<OperatorChatsPage />} />
          <Route
            path="/operator/analytics"
            element={<OperatorAnalyticsPage />}
          />
          <Route
            path="/operator/product-list"
            element={<OperatorProductsPage />}
          />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
