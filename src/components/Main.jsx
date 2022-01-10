import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowCase from "./ShowCase";
import Cinema from "./Cinema";
import Navbar from "./NavBar";

const movies = [
  {
    name: " Spider-Man - No way home ",
    price: 120,
    occupied: [25, 18, 9, 33, 4, 54, 78, 60, 88, 115],
  },
];

const Main = () => {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  let navigate = useNavigate();

  const shoot = () => {
    navigate("/checkout");
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <p className="movieName">
          {" "}
          Your seleceted movie is "{selectedMovie.name}"
        </p>
        <Cinema
          movie={selectedMovie}
          selectedSeats={selectedSeats}
          onSelectedSeatsChange={(selectedSeats) =>
            setSelectedSeats(selectedSeats)
          }
        />
        <ShowCase />
        <button type="button" className="bg" onClick={shoot}>
          Check Out
        </button>
        <p className="info">
          Total seats selected{" "}
          <span className="count">{selectedSeats.length}</span>. Total price is{" "}
          <span className="total">
            {"Rs." + selectedSeats.length * selectedMovie.price}
          </span>
        </p>
      </div>
    </>
  );
};
export default Main;
