import RegistrationPage from "../src/components/RegistrationPage/RegistrationPage";
import RegistrationSuccess from "../src/components/RegistrationSuccess/RegistrationSuccess";
import ChangePassword from "../src/components/ChangePassword/ChangePassword";
import { Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
function App() {
  return (
    <div className="App">
      <Route path="/" exact component={RegistrationPage} />
      <Route
        path="/registration-success"
        exact
        component={RegistrationSuccess}
      />
      <Route path="/change-password" exact component={ChangePassword} />
      <Route path="/home" exact component={Home} />
    </div>
  );
}

export default App;
