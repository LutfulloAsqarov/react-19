import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SingleProduct from "./pages/single-product/SingleProduct";
import Login from "./pages/login/Login";
import Auth from "./pages/auth";
import Admin from "./pages/admin/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/single/:id" element={<SingleProduct />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Auth />}>
                    <Route path="admin" element={<Admin />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default App;
