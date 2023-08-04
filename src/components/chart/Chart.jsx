import "./Chart.scss";
import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "01 May",
    ThisMonth: 1200,
    PrevMonth: 1900,
  },
  {
    name: "02 May",
    ThisMonth: 800,
    PrevMonth: 1500,
  },
  {
    name: "03 May",
    ThisMonth: 1500,
    PrevMonth: 500,
  },
  {
    name: "04 May",
    ThisMonth: 400,
    PrevMonth: 700,
  },
  {
    name: "05 May",
    ThisMonth: 200,
    PrevMonth: 1700,
  },
  {
    name: "06 May",
    ThisMonth: 500,
    PrevMonth: 900,
  },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="chart-header">
        <span className="header">Performance</span>
        <span className="date-header">
          <span>01-07 May</span>
          <span className="icon">
            {" "}
            <KeyboardArrowDown />{" "}
          </span>
        </span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="ThisMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="PrevMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="ThisMonth"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#ThisMonth)"
          />
          <Area
            type="monotone"
            dataKey="PrevMonth"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#PrevMonth)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
