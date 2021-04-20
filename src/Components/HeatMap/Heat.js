import React, { Component } from "react";
import { fetchData } from "../../api";
import { Link } from "react-router-dom";
import styles from ".././Charts/Charts.module.css";
import HeatMap from "./HeatMap"

class Heat extends React.Component {
    state = {
        data: {},
        country: "",
      };
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
        <div class="w-full bg-white">
        <nav class="bg-gray-800 w-full py-4">
        <div class="flex-shrink-0 flex items-center w-full">
          <img class="hidden lg:block h-8 w-auto" src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="SANDY's"/>
          <a href="#" class="text-blue-200 px-6 py-2 font-bold	text-xl font-medium"><Link to={"/LandingPage"}>Detect Covid</Link></a>
          <a href="#" class="text-blue-200 px-6 py-2 font-bold	text-xl font-medium"><Link to={"/GlobalChart"}>Global Chart</Link></a>
          <a href="#" class="text-blue-200 px-6 py-2 font-bold	text-xl font-medium"><Link to={"/HeatMap"}>Heat Map</Link></a>
        
  </div>
  

 
</nav>
        <div class="flex flex-col text-center py-8">
        
        <div class="text-yellow-900 text-center px-3 py-2 font-bold	text-5xl font-medium">Heat Map</div>
        <div class="pl-0 w-auto h-auto">
          
            
            <HeatMap />
        
        </div>
        </div>
        </div>
    );
}
}
export default Heat;