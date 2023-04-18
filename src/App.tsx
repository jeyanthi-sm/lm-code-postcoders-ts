import { SetStateAction, useEffect, useState } from "react";
import { getAreaData } from "./api";
import { Place } from "./types/Area";
import "./App.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function App() {
  const [areas, setAreas] = useState<Place[]>([]);
  const [inputOuterPostCode, setInputOuterPostCode] = useState<string>();

  const load = async (inputPostCode: string) => {
    try {
      console.log(inputPostCode);
      const areaData = await getAreaData(inputPostCode);
      areas.concat(areaData);
      console.log(areaData);
      setAreas(areaData);
    } catch (error) {
      window.alert("todo: fix app");
      console.log(`error ${error}`);
    }
  };

  const myDebounceFunction = (callBackFunction: Function, delay: number) => {
    let timeOutId: number | undefined;
    return function (...args: any) {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
      setTimeout(() => {
        callBackFunction(...args);
      }, delay);
    };
  };

  useEffect(() => {
    load(inputOuterPostCode as string);
  }, [inputOuterPostCode]);

  const inputMyHandler = myDebounceFunction((e: any) => {
    setInputOuterPostCode(e.target.value);
  }, 1000);

  return (
    <div className="App">
      <h1>Postcoders</h1>

      <input
        type="text"
        onChange={inputMyHandler}
        // onChange={(e) => setInputOuterPostCode(e.target.value)}
      />
      <>
        {areas &&
          areas.length &&
          areas.map((elem) => {
            return (
              <>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Place Name :{elem["place name"]}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Latitude : {elem.latitude}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Longitude : {elem.longitude}
                    </Typography>
                    <Typography variant="h5">State : {elem.state}</Typography>
                    <Typography variant="body2">
                      State Abbreviation :{elem["state abbreviation"]}
                    </Typography>
                  </CardContent>
                </Card>
              </>
            );
          })}
      </>
    </div>
  );
}

export default App;
