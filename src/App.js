import React from "react";
import "./App.css";
import { fetchData } from "./api";
import Cards from "./Components/Cards/Cards"
import CountryPicker from "./Components/CountryPicker/CountryPicker"
import Charts from "./Components/Charts/Charts"
import styles from "./App.module.css";
import coronaImage from "./Images/image.png";
import { BrowserRouter,Link, Route, Switch } from "react-router-dom";
import GlobalChart from "./Components/Charts/GlobalChart"
import Router from "./Routes/route"
import LandingPage from "./LandingPage"
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country,
    });
  };
  render() {
    const { data, country } = this.state;
    return (
      <BrowserRouter>
      <div className={styles.container}>  
       <Router />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
