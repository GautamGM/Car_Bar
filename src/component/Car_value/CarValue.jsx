import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ car: { carsData, searchString } }) => {
    const filterData = carsData
      .filter((car) =>car.name.toLowerCase().includes(searchString.toLowerCase())
      )
      .reduce((acc, car) => {
        return acc + Number(car.cost);
      }, 0);

    return filterData;
  });

  console.log(totalCost, "dfgdsfgdsfg");
  return (
    <div className="flex justify-center">
      <h1 className="text-[24px] font-[700]">Total ${totalCost}</h1>
    </div>
  );
};
export { CarValue };
