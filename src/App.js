import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';
import WeatherWidget from './WeatherWidget';
import './App.css';

const LINK = 'http://apidev.accuweather.com';
const APIKEY = 'hoArfRosT1215';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: {
        city: '',
        temperature: ''
      }
    };
  }

  fetchData = (city = '') => {
    this.setState({ loading: true });

    axios.get(`${LINK}/locations/v1/search`, {
      method: 'get',
      params: {
        q: city,
        apikey: APIKEY,
      }
    })
      .then(response => {
        const cityKey = response.data[0] ? response.data[0].Key : '';
        const cityName = response.data[0] ? response.data[0].EnglishName : '';
        if (cityKey.length) {
          return axios.get(`${LINK}/currentconditions/v1/${cityKey}.json`, {
            method: 'get',
            params: {
              language: 'en',
              apikey: APIKEY,
            }
          })
            .then(response => {
              this.setState({
                loading: false,
                data: { city: cityName, temperature: response.data[0].Temperature.Metric.Value }
              });
            })
        }
        else {
          this.setState({ loading: false, data: { city: "City is not found" } });
        }
      })
      .catch(error => {
        this.setState({ loading: false });
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
  };


  render() {
    const { loading, data: { city, temperature } } = this.state;
    return (
      <div className='App'>
        <Form fetchData={this.fetchData}/>
        <WeatherWidget temperature={temperature} city={city} loading={loading}/>
      </div>
    );
  }
}

export default App;
