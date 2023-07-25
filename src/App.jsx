import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './layout/SharedLayout';
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
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="product-details" element={<ProductDetailsPage />} />
          <Route path="Equipments" element={<Equipments />} />
          <Route path="Engineers" element={<Engineers />} />
          <Route path="Dredging" element={<Dredging />} />
          <Route path="Borehole" element={<Borehole />} />
          <Route path="Lifts" element={<Lifts />} />
          <Route path="Supplies" element={<Supplies />} />
          <Route path="Repairs" element={<Repairs />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="saved" element={<SavedAds />} />
          <Route path="equipments" element={<EquipmentsPage />} />
        </Route>
        <Route path="auth" element={<AuthPage />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
