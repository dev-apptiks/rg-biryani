import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./CardStyle.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "95%",
    padding:"5px",
    margin:"10px",
    height:"100px"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width:"100%",
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 200,
    objectFit: "cover",
    objectPosition:"50%",
    display: "block",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "4px"
  },
  title:{
    fontSize: 16,
    fontFamily: "DD-TTNorms",
    fontWeight: 700,
    lineHeight: "22px",
    letterSpacing: "-0.04ch",
  },
  description:{
    fontSize: "14px",
    fontFamily: "DD-TTNorms",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "0ch",
    textTransform: "none",
    color: "rgb(73, 73, 73)",
    margin: "0px",
    padding: "0px",
    display: "block"
  }
}));

const CardDisplay=({data})=> {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography classes={{
            root:classes.title
          }} 
          component="h5" variant="h5">
            {data.title}
          </Typography>
          <Typography className={classes.description} variant="subtitle1" color="textSecondary">
            {data.desc}
          </Typography>
          <Typography className={classes.description} variant="subtitle1" color="textSecondary">
            {data.price}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={data.itemImg}
        title="Item images"
      />
    </Card>
  );
}
 
export default CardDisplay;