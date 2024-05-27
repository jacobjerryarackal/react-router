import NewProducts from "./Components/NewProducts";
import FeaturedProducts from "./Components/FeaturedProducts";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import NoMatch from "./Components/NoMatch";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { Users } from "./Components/Users";
import { UserDetails } from "./Components/UserDetails";
import { Admin } from "./Components/Admin";
import { About } from "./Components/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/Products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="Featured" element={<FeaturedProducts />} />
          <Route path="New" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
