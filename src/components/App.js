import React, { useState } from "react";
import "../styles/App.css";

const data = {
  "Madhya Pradesh": {
    description:
      "Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
    cities: {
      Indore: {
        description: "Food Capital of MP",
        landmarks: {
          Rajwada: "Historic Palace in Indore",
          Sarafa: "Famous Night Market",
        },
      },
      Bhopal: {
        description: "City of Lakes",
        landmarks: {
          "Upper Lake": "Largest Artificial Lake in India",
          "Taj-ul-Masjid": "One of the Largest Mosques in Asia",
        },
      },
    },
  },
  Rajasthan: {
    description: "Land of Kings",
    cities: {
      Jaipur: {
        description: "Pink City",
        landmarks: {
          "Hawa Mahal": "Palace of Winds",
          "Amber Fort": "Famous Fort in Jaipur",
        },
      },
      Udaipur: {
        description: "City of Lakes",
        landmarks: {
          "City Palace": "Historic Palace in Udaipur",
          "Lake Pichola": "Famous Lake in Udaipur",
        },
      },
    },
  },
  Assam: {
    description:
      "Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations.",
    cities: {
      Guwhati: {
        description:
          "Guwahati is a sprawling city beside the Brahmaputra River in the northeast Indian state of Assam. It's known for holy sites like the hilltop Kamakhya Temple",
        landmarks: {
          "Ganesh Guri": "Famous because of PVR city center.",
          "Kalyani Nagar": "located near famous Lakshmi Nagar",
        },
      },
      Tezpur: {
        description:
          "Tezpur is a landmark and urban agglomeration in Sonitpur district, Assam state, India. Tezpur is located on the banks of the river Brahmaputra, 175 kilometres northeast of Guwahati, and is the largest of the north bank landmarks with a population exceeding 100,000 as per Metropolitan Census 2011.",
        landmarks: {
          "Bamuni Hills": "Best location for photoshoots",
          "Bhujkhowa Bazar": "Central Market for Tezpur",
        },
      },
    },
  },
};

const App = () => {
  const [selectedState, setSelectedState] = useState("Madhya Pradesh");
  const [selectedCity, setSelectedCity] = useState("Indore");
  const [selectedLandmark, setSelectedLandmark] = useState("Rajwada");

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    const firstCity = Object.keys(data[newState].cities)[0];
    setSelectedCity(firstCity);
    setSelectedLandmark(
      Object.keys(data[newState].cities[firstCity].landmarks)[0]
    );
  };

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setSelectedCity(newCity);
    setSelectedLandmark(
      Object.keys(data[selectedState].cities[newCity].landmarks)[0]
    );
  };

  return (
    <div className="container">
      <div className="tag-container">
        <div>
          <label>State:</label>
          <select id="state" value={selectedState} onChange={handleStateChange}>
            {Object.keys(data).map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>City:</label>{" "}
          <select id="city" value={selectedCity} onChange={handleCityChange}>
            {Object.keys(data[selectedState].cities).map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div>
          {" "}
          <label>Landmark:</label>{" "}
          <select
            id="landmark"
            value={selectedLandmark}
            onChange={(e) => setSelectedLandmark(e.target.value)}
          >
            {Object.keys(
              data[selectedState].cities[selectedCity].landmarks
            ).map((landmark, index) => (
              <option key={index} value={landmark}>
                {landmark}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="info-container">
        <div className="box">
          {" "}
          <div id="box-name">{selectedState}</div>
          <div id="state-description">{data[selectedState].description}</div>
        </div>
        <div className="box">
          {" "}
          <div id="box-name">{selectedCity}</div>
          <div id="city-description">
            {data[selectedState].cities[selectedCity].description}
          </div>
        </div>
        <div className="box">
          {" "}
          <div id="box-name">{selectedLandmark}</div>
          <div id="landmark-description">
            {
              data[selectedState].cities[selectedCity].landmarks[
                selectedLandmark
              ]
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
