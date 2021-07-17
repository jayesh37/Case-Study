import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Study from "./pages/Study/Study";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import ModelView from "./pages/ModelView/ModelView";
import ArView from "./pages/ArView/ArView";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/study">
          <Study />
        </Route>
        <Route path="/model-view">
          <ModelView />
        </Route>
        <Route path="/ar-view">
          <ArView></ArView>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;