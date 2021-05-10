import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Publish from "./containers/Publish";
import Cookies from "js-cookie";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 1 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <Router>
      <Header userToken={userToken} setUser={setUser} />
      <Switch>
        <Route path="/offer/:id">
          <Offer data={data.offers} />
        </Route>
        <Route path="/signup">
          <Signup setUser={setUser} userToken={userToken} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/publish">
          <Publish userToken={userToken} />
        </Route>
        <Route path="/">
          <Home data={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
