import "./Widgets.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
// eslint-disable-next-line react/prop-types
const Widgets = ({ type }) => {
  let data;

  switch (type) {
    case "finished":
      data = {
        title: "Finished",
        value: "18",
        boolValue: "positive",
        icon: <ThumbUpOffAltIcon className="icon" />,
        type: "+8 tasks",
      };
      break;
    case "tracked":
      data = {
        title: "Tracked",
        boolValue: "negative",
        value: "31",
        isTime: true,
        icon: <AccessAlarmsIcon className="icon" />,
        type: "-8 hours",
      };
      break;
    case "efficiency":
      data = {
        title: "Efficiency",
        boolValue: "positive",
        value: "91",
        isPercentage: true,
        icon: <LegendToggleIcon className="icon" />,
        type: "93%",
      };
      break;

    default:
      break;
  }
  return (
    <div className="widget">
      <div className="container">
        <div className="icon-container">{data.icon}</div>
        <div className="bottomSection">
          <div className="title">{data.title}</div>
          <div className="statistics">
            <span className="numberValue">
              {data.value}
              {data.isTime && "h"}
              {data.isPercentage && "%"}
            </span>
            <span>
              <ArrowDropDownIcon
                className={`changes ${data.boolValue}`}
                fontSize="50px"
              />
            </span>
            <span className={`changes ${data.boolValue}`}>{data.type}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
