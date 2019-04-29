import React, { Component } from "react";
import Title from "./components/titles";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "6ca313a3e4ebea72789e7dd97caaea32";

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-5 title-container">
                  <Title />
                </div>
                <div className="col-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather data={this.state} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const fetch_data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await fetch_data.json();
    let requiredData;

    if (city && country) {
      console.log(data);
      requiredData = {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      };
    } else {
      requiredData = {
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        error: "Error! Please enter city & country"
      };
    }
    this.setState(requiredData);
  };
}

export default App;
