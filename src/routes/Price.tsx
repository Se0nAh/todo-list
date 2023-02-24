import {PriceData} from "../types";

function Price({tickersData}: {tickersData?: PriceData}) {
  if (!tickersData) return <></>

  return (
  <div>
    <h1>Price</h1>

  </div>);
}

export default Price;