import { ToastContainer } from "react-toastify";
import "./App.css";
import RoutesApp from "./Routes/Routes";
import { AuthProvider } from "./Context/AuthProvider";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>

      <ToastContainer />
    </>
  );
}

export default App;
