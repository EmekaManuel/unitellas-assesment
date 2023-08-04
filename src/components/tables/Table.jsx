import "./Table.scss";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import WatchLaterIcon from "@mui/icons-material/WatchLater";

import RateReviewIcon from "@mui/icons-material/RateReview";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    <span className="row-name">
      <span>
        <RateReviewIcon />
      </span>
      <span>Product Review For US Market</span>
    </span>,
    <span className="activity">
      <span className="activity-icon orange">•</span>
      <span>in progress</span>
    </span>,
    <span className="activity">
      <span className="activity-icon">
        <WatchLaterIcon fontSize="small" />
      </span>
      <span>8h</span>
    </span>,
    "•••"
  ),

  createData(
    <span className="row-name">
      <span>
        <SearchIcon />
      </span>
      <span>Search Gross Income For US Market</span>
    </span>,
    <span className="activity">
      <span className="activity-icon blue">•</span>
      <span>on hold</span>
    </span>,
    <span className="activity">
      <span className="activity-icon">
        <WatchLaterIcon fontSize="small" />
      </span>
      <span>8h</span>
    </span>,
    "•••"
  ),
  createData(
    <span className="row-name">
      <span>
        <GitHubIcon />
      </span>
      <span> Review Manuel Code </span>
    </span>,
    <span className="activity">
      <span className="activity-icon green">•</span>
      <span>passed</span>
    </span>,
    <span className="activity">
      <span className="activity-icon">
        <WatchLaterIcon fontSize="small" />
      </span>
      <span>8h</span>
    </span>,
    "•••"
  ),
];

const Tables = () => {
  return (
    <TableContainer className="table" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          {/* <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow> */}
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow className="" key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
