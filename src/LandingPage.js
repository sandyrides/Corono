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

class LandingPage extends React.Component{
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
    render(){
        const { data, country } = this.state;
        return(
      
        <div class="w-full">
        <nav class="bg-gray-800 w-full py-4">
        <div class="flex-shrink-0 flex items-center w-full">
          <img class="hidden lg:block h-8 w-auto" src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="SANDY's"/>
          <a href="#" class="text-blue-200 px-6 py-2 font-bold	text-xl font-medium"><Link to={"/LandingPage"}>Detect Covid</Link></a>
          <a href="#" class="text-blue-200 px-6 py-2 font-bold	text-xl font-medium"><Link to={"/GlobalChart"}>Global Chart</Link></a>
          <a href="#" class="text-blue-200 px-6 py-2 font-bold	text-xl font-medium"><Link to={"/HeatMap"}>Heat Map</Link></a>
        
  </div>
  

 
</nav>
    <div className={styles.container}>
        <div class="py-8">
        <img className={styles.image} src={coronaImage} />
        </div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
      </div>
      </div>
        )
    }
} 
export default LandingPage;