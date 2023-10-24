import { Box } from "@mui/material";
import Header from "../components/Header";
import BumpChart from "../components/BumpChart";

const Bump = () => {
  return (
    <Box m="20px">
      <Header title="BUMP CHART" />
      <Box height="75vh">
        <BumpChart />
      </Box>
    </Box>
  );
};

export default Bump;
