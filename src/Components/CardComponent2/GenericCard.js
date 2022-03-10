import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import biryaniCardJson from '../CardComponent2/biryaniCard.json'
import GenericDailog from '../Dailog/GenericDailog'

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
    flex: '1 0 auto',
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
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const openDailog = () => {
    setOpen(true);
  }

  return ( 
  <>
 
    <Card className={classes.root} onClick={openDailog}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.data.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
              {props.data.shortDesc}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
              {props.data.price}
          </Typography>
        </CardContent>

      </div>
      <CardMedia
        className={classes.cover}
        image={props.data.itemImg}
        title="Live from space album cover"
      />
    </Card>
    {
      open && <GenericDailog dailogOpen={open} data={props.data}/>
    }
      
    </>
  );
}
