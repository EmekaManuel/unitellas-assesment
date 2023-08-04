import "./Transactions.scss";
import { KeyboardArrowDown } from "@mui/icons-material";
import Tables from "../tables/Table";
const Transactions = () => {
  return (
    <div className="transaction">
      <div className="transaction-header">
        <span className="header">
          <span className="title">Current Tasks</span>
          <span> Done 30%</span>
        </span>
        <span className="date-header">
          <span>Week</span>
          <span className="icon">
            {" "}
            <KeyboardArrowDown />{" "}
          </span>
        </span>
      </div>

      <div className="transaction-tables">
        <Tables />
      </div>
    </div>
  );
};

export default Transactions;
