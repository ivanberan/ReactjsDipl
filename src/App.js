import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { getData } from "./services/getData";
import DetailsPage from "./components/DetailsPage";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data.data);
    };
    fetchData();
  }, []);

  return (
    <StyledDiv>
      <Stars>
        <BrowserRouter>
          <Routes>
          <Route path="/"  element={<MainScreen data={data} />} />

            {Object.values(data).map((item) => {
              return (
                <Route key={item.id}
                  path={`/${item.id}`}
                  element={<DetailsPage card={item} />}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </Stars>
    </StyledDiv>
  );
}

export default App;
const StyledDiv = styled.div`
  position: sticky;
  height: 100%;
  width: 100%;
  background: -webkit-linear-gradient(
    90deg,
    #0f022b 10%,
    #1b0426 90%
  ); /* Chrome 10+, Saf5.1+ */
  background: -moz-linear-gradient(
    90deg,
    #0f022b 10%,
    #1b0426 90%
  ); /* FF3.6+ */
  background: -ms-linear-gradient(90deg, #0f022b 10%, #1b0426 90%); /* IE10 */
  background: -o-linear-gradient(
    90deg,
    #0f022b 10%,
    #1b0426 90%
  ); /* Opera 11.10+ */
  background: linear-gradient(90deg, #0f022b 10%, #1b0426 90%); /* W3C */
`;
const Stars = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: url(http://www.script-tutorials.com/demos/360/images/stars.png)
    repeat top center;
  z-index: 1;
`;
