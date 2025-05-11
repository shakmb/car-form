import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
import { createSelector } from "@reduxjs/toolkit";

// updated to use this format to handle RTK rerender warning
const memoizedCars = createSelector(
  [(state) => state.cars.data, (state) => state.cars.searchTerm],
  (data, searchTerm) =>
    data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
);

function CarList() {
  const dispatch = useDispatch();

  const name = useSelector(({ form }) => form.name);

  // const { cars, name } = useSelector(({ form, cars: { searchTerm, data } }) => {
  //   const filteredCars = data.filter((car) =>
  //     car.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   return {
  //     cars: filteredCars,
  //     name: form.name,
  //   };
  // });

  const cars = useSelector(memoizedCars);

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  console.log(cars);

  const renderedCars = cars.map((car) => {
    // decide if the car name should be bold
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
