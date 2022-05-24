import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DataInput = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <DatePicker
      closeOnScroll
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default DataInput;
