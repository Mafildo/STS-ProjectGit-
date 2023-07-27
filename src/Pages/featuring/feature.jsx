import React from "react";
import "../featuring/feature.css";
import { Menulist } from "../../data/data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const feature = () => {
  return (
    <>
      <div className="paras">
        <h1 className="h-2">Popular Products</h1>
        <p className="p-2">Not Finding Customers For Our Product BUT Finding Products For Our Customers</p>
      </div>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {Menulist.map((menu, index) => (
          <Card sx={{ maxHeight: "350px", maxWidth: "250px", display: "flex", m:5}} key={index} >
            <CardActionArea>
              <CardMedia
                sx={{ maxHeight: "200px", maxWidth: "220px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom componenet={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography variant="body2">{menu.price}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default feature;
