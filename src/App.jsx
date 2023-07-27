import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import {
  AddProduct,
  AuthPage,
  Borehole,
  Dredging,
  Engineers,
  Equipments,
  EquipmentsPage,
  HomePage,
  Lifts,
  ProductDetailsPage,
  Profile,
  Repairs,
  SavedAds,
  Supplies,
} from "./pages";
import PrivateRoute from "./layout/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route element={<PrivateRoute />}> */}
          <Route path="add-product" element={<AddProduct />} />
          {/* </Route> */}
          <Route path="product-details" element={<ProductDetailsPage />} />
          <Route path="Equipments" element={<Equipments />} />
          <Route path="Engineers" element={<Engineers />} />
          <Route path="Dredging" element={<Dredging />} />
          <Route path="Borehole" element={<Borehole />} />
          <Route path="Lifts" element={<Lifts />} />
          <Route path="Supplies" element={<Supplies />} />
          <Route path="Repairs" element={<Repairs />} />
          <Route path="saved" element={<SavedAds />} />
          <Route path="equipments" element={<EquipmentsPage />} />
        </Route>
        <Route path="auth" element={<AuthPage />} />
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="profile" element={<Profile />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
