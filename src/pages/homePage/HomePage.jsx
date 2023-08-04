import "./HomePage.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Menubar from "../../components/usermenubar/Menubar";
import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";
import Chart from "../../components/chart/Chart";
import Transactions from "../../components/lists/Transactions";
const HomePage = () => {
  return (
    <div className="home">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="homeContainer">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="widgets">
          <Widgets type="finished" />
          <Widgets type="tracked" />
          <Widgets type="efficiency" />
        </div>
        <div className="chart">
          <Chart />
        </div>
        <div className="transactions">
          <Transactions />
        </div>
      </div>
      <div className="menubar">
        <Menubar />
      </div>
    </div>
  );
};

export default HomePage;
