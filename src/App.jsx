import { BrowserRouter, Route, Routes } from "react-router-dom";
import linkPage from "./utils/navigate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRouteAdmin from "./utils/PrivateRouteAdmin";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRouteAdmin />}>
            <Route path={"/admin"} element={<Admin />} />
          </Route>
          {linkPage.map((link) => {
            return (
              <Route key={link.link} path={link.link} element={link.element} />
            );
          })}
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
