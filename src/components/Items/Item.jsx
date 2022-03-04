import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Item({ products }) {
  return (
    <Card style={{ margin: "2rem" }} sx={{ maxWidth: 345 }}>
      <CardMedia
        style={{ width: "14rem", height: "15rem" }}
        image={products.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {products.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h4>${products.price}</h4>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${products.id}`}>
          <Button variant="contained">Ver Mas</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
