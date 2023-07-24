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
        <h1 className="h-2">Popular</h1>
        <h3 className="p-2">products</h3>
      </div>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {Menulist.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m:5}}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
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
