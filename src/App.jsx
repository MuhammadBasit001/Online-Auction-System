import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import SignUpForm from "./Component/SignUpForm";
import SignInForm from "./Component/SignInForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
