import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap/bootstrap.min.css';
import data from './user'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {data["results"][0].name["first"].slice(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${data["results"][0].name["first"]} ${data["results"][0].name["last"]}`}
        subheader={data["results"][0].email}
      />
      <CardMedia
        className={classes.media}
        image={data["results"][0].picture["large"]}
        title={`${data["results"][0].name["first"]} ${data["results"][0].name["last"]}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Address: {`${data["results"][0].location.street["number"]} ${data["results"][0].location.street["name"]} ${','} ${data["results"][0].location["city"]}`} <br />
          Postcode: {data["results"][0].location['postcode']} <br />
          Country: {data["results"][0].location['country']}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <strong>Age: </strong> {data["results"][0].dob['age']}
          </Typography>
          <Typography paragraph>
            <strong>Coordinates:</strong> <br />
            - Latitude : {data["results"][0].location.coordinates['latitude']} <br />
            - Longitude : {data["results"][0].location.coordinates['longitude']}
          </Typography>
          <Typography paragraph>
            <strong>Login:</strong> {data["results"][0].login["username"]}
          </Typography>
          <Typography paragraph>
            <strong>Phone:</strong> {data["results"][0]['phone']}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
