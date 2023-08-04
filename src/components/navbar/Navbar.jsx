import "./Navbar.scss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const Navbar = () => {
  const name = "Margaret";
  return (
    <div className="navbar">
      <div className="top-section">
        <span className="username">Hello, {name} </span>
        <span className="date">
          <span>16 May, 2023</span>
          <span>
            <CalendarMonthIcon />
          </span>
        </span>
      </div>
      <div className="description">
        {" "}
        Track team progress here. You almost reached a goal!{" "}
      </div>
    </div>
  );
};

export default Navbar;
