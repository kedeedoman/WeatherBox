import React, { Component } from "react";

class Weather extends Component {
  state = {};
  render() {
    console.log(this.props.data);
    return (
      <div className="weather__info">
        {this.props.data.city && this.props.data.country && (
          <p className="weather__key">
            Location:{" "}
            <span className="weather__value">
              {this.props.data.city}, {this.props.data.country}
            </span>
          </p>
        )}
        {this.props.data.temperature && (
          <p className="weather__key">
            Temperature:{" "}
            <span className="weather__value">
              {this.props.data.temperature}
            </span>
          </p>
        )}
        {this.props.data.humidity && (
          <p className="weather__key">
            Humidity:{" "}
            <span className="weather__value">{this.props.data.humidity}</span>
          </p>
        )}
        {this.props.data.description && (
          <p className="weather__key">
            Description:{" "}
            <span className="weather__value">
              {this.props.data.description}
            </span>
          </p>
        )}
        {this.props.data.error && (
          <p className="weather__key">{this.props.data.error}</p>
        )}
      </div>
    );
  }
}

export default Weather;
