import EmptyChart from "../EmptyChart";
import OrderedList from "../OrderedList";
import { useSelector } from "react-redux";

const Chart = () => {
  const orderedPrcie = useSelector((state) => state.pizzasListState.orderedPrcie);

  return (
    <div>
      {!orderedPrcie && <EmptyChart />}
      {orderedPrcie && <OrderedList />}
    </div>
  );
};

export default Chart;
