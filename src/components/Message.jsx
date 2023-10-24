import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockUserData } from "../data";

const Message = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      {mockUserData.map((user) => (
        <Box
          display="flex"
          mb="25px"
        >
          <img class="avatar" src={user.img} alt="" />
          <Box ml="15px">
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              {user.name}
            </Typography>
            <Typography color={colors.grey[300]} variant="h6" fontWeight="500">
              {user.message}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Message;
