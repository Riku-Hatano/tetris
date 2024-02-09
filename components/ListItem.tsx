import { ListItem } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../theme/theme";

const ThemeListItem = styled(ListItem)(() => ({
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}));

export default ThemeListItem;
