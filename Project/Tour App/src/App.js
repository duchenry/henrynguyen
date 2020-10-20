import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.netlify.app/api/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true); /* set loading === true */
  const [tours, setTours] = useState([]);

  //use filter and id to remove tour
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  //fetch url API tour
  const fetchTours = async function () {
    setLoading(true);
    /* try...catch makes sure async func run correctly */
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false); /* after receive data, set loading = false */
      setTours(tours); /* give data to tours */
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    /* use right after render (<Loading />)*/
    fetchTours();
  }, []); /* paras 2 [] is an array state that useEffect is 
  called when tours = [(blank)] */

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div>
          <h2>No left tour</h2>
          <button className="btn" onClick={() => fetchTours()}>
            Reset your App
          </button>{/* make refresh button when no left tour*/}
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
