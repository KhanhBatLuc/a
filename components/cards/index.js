import { Box, Card, Typography, CardMedia } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const Cards = (props) =>
  props.image || props.name ? (
    <Card
      sx={{
        height: "100%",
        cursor: "pointer",
        boxShadow: "0 2px 9px rgb(0 0 0 / 21%)",
        transition: ".75s transform ease ",
        "&:hover": {
          boxShadow: "0 10px 10px rgb(0 0 0 / 25%)",
          transform: "translateY(-8px)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200px"
        image={props.image || "/static/images/cards/khanh.jpg"}
        alt="image"
      />
      <Box sx={{ py: 3 }}>
        <Typography variant="h6" component="h4" align="center">
          {props.name}
        </Typography>
      </Box>
    </Card>
  ) : (
    <Card
      sx={{
        height: "272px",
        border: "1px dashed #283593",
        backgroundColor: "transparent",
        cursor: "pointer",
        boxShadow: "0 2px 9px rgb(0 0 0 / 21%)",
      }}
    >
      <Box
        sx={{
          m: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: "translateY(50%)",
          marginTop: "75px",
        }}
      >
        <AddIcon
          fontSize="large"
          sx={{ fontWeight: "400", color: "#283593" }}
        />
        <Typography
          variant="h6"
          component="h4"
          color="#283593"
          fontWeight="400"
          align="center"
        >
          Add Card
        </Typography>
      </Box>
    </Card>
  );

Cards.defaultProps = {
  image: "",
  name: "",
};
