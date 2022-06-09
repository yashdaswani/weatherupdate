import React from "react";
import { useState, useEffect } from "react";
import "./Cards.css";
import sun from "../sun.png";
import cloud from "../cloud.png";
import rain from "../rain.png";
import { weather } from "../api/api";
const Cards = () => {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState("Haridwar");
  

  const getdata = async () => {
    try {
      const response = await weather(city);
      // console.log(response.data);
      setWeatherData(response.data);
      //  console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

 

  

  const changeHandle = (e) => {
    setCity(e.target.value);
  };
  return (
    <>
      {weatherdata !== null ? (
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div
            className="card d-flex justify-content-center align-items-center"
            style={{ width: "20rem", height: "35em" }}
          >
            <div className="search"style={{margin:"5px 0px"}}>
              <input
                type="text"
                defaultValue={city}
                onChange={changeHandle}
                placeholder="Enter your city name"
                style={{height:"60%",width:"70%",borderRadius:"20px",padding:"10px",background:"#c3bebe2b",borderColor:"#05d1ff",color:"#ffffff"}}
              />
              <button onClick={() => getdata()}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                </svg>
              </button>
            </div>

            <div className="city_temp" style={{ fontSize: "1.4rem",color:"#ffffff",fontWeight:"700" }}>
              Weather in {weatherdata.name}
            </div>

            <div
              className="temp-1 d-flex justify-content-center align-items-center"
              style={{ width: "100%" ,margin:"0",marginTop:"5px"}}
            >
              <h1 class="temp" style={{fontSize:"2rem",margin:"0git"}}>{weatherdata.main.temp}°C</h1>
              <div class="flex">
                <img
                  src={`https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`}
                  alt="imgicon"
                  style={{width:"80px",height:"80px"}}
                />
                <div class="description" style={{marginBottom:"5px",fontWeight:"600",fontSize:"1.2rem"}}>{weatherdata.weather[0].main}</div>
              </div>
            
            </div>

            <div className="time_container my-1.5 d-flex flex-column justify-content-center align-items-center">
              <div className="time">{new Date(weatherdata.dt*1000).toDateString()}</div>
              <div className="pressure">Pressure : {weatherdata.main.pressure}</div>
              <div className="humidity">Humidity : {weatherdata.main.humidity}</div>
              <div className="sunrise">Sunrise:{new Date(weatherdata.sys.sunrise*1000).toLocaleTimeString()}</div>
              <div className="sunset" >Sunset:{new Date(weatherdata.sys.sunset*1000).toLocaleTimeString()}</div>
              {/* <div className="day">Sun</div>
              <div className="date">06 June 2022</div>
              <div className="time">21:18</div> */}
            </div>
            <div
              className="last_container  d-flex flex-row justify-content-center align-items-center"
              style={{ padding: "2rem" }}
            >
              <div className="future weather d-flex flex-column justify-content-center align-items-center">
                <div className="future_time" style={{ fontSize: "12px" }}>
                  Now
                </div>
                <div className="future_img">
                  <img
                    src={cloud}
                    alt=""
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </div>
                <div className="future_temp">28°C</div>
              </div>{" "}
              <div className="future weather d-flex flex-column justify-content-center align-items-center">
                <div className="future_time" style={{ fontSize: "12px" }}>
                  09:00
                </div>
                <div className="future_img">
                  <img
                    src={sun}
                    alt=""
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </div>
                <div className="future_temp">26°C</div>
              </div>{" "}
              <div className="future weather d-flex flex-column justify-content-center align-items-center">
                <div className="future_time" style={{ fontSize: "12px" }}>
                  10:00
                </div>
                <div className="future_img">
                  <img
                    src={rain}
                    alt=""
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </div>
                <div className="future_temp">30°C</div>
              </div>{" "}
              <div className="future weather d-flex flex-column justify-content-center align-items-center">
                <div className="future_time" style={{ fontSize: "12px" }}>
                  11:00
                </div>
                <div className="future_img">
                  <img
                    src={cloud}
                    alt=""
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </div>
                <div className="future_temp">28°C</div>
              </div>{" "}
              <div className="future weather d-flex flex-column justify-content-center align-items-center">
                <div className="future_time" style={{ fontSize: "12px" }}>
                  12:00
                </div>
                <div className="future_img">
                  <img
                    src={rain}
                    alt=""
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </div>
                <div className="future_temp">28°C</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Cards;
