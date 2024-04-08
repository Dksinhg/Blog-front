import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// impome from "";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import About from "./pages/page/About";
import Pages from "./pages/page/Pages";
import Blog from "./pages/page/Blog";
import Contact from "./pages/page/Contact";
import Create from "./components/Accounts/Create";
import Account from "./components/Accounts/Account";
import Order from "./components/Accounts/Order";
import Wishlist from "./components/Accounts/Wishlist";
import Help from "./components/Accounts/Help";
import Logout from "./components/Accounts/Logout";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <switch>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/details/:id" element={<Details />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/pages" element={<Pages />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/contact" element={<Contact />} />

            {/* <-------------Account------------------> */}
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/Wishlist" element={<Wishlist />} />
            <Route exact path="/help" element={<Help />} />
            <Route exact path="/logout" element={<Logout />} />
            
          </Routes>
        </switch>
      </Router>
    </div>
  );
}

export default App;
