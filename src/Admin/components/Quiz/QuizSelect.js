import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    backgroundColor: green[400],
    height: 240,
    width: 200
  },
  control: {
    padding: theme.spacing(2)
  },
  main: {
    marginTop: 100,
    marginLeft: 48,
    marginRight: 252
  },
  icon:{
    fontSize:100,
    marginLeft:30,
    marginTop:30
    
  },
  title:{
    fontSize:25,
    
    
  }
});

class QuizSection extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={10}>
              <Grid item>
              <Link to="/admin/quizzes/allquestions">
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h3" align='center' className={classes.title}gutterBottom>
                      All Questions
                    </Typography>
                    <Icon className={classes.icon} >view_list</Icon>
                    
                  </CardContent>
                </Card>
                </Link>
              </Grid>
              <Grid item>
              <Link to="/admin/quizzes/addquiz">
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h3" display="inline"className={classes.title}gutterBottom>
                      Add Questions
                    </Typography>

                    <Icon className={classes.icon} >add_circle</Icon>
                  </CardContent>
                </Card>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(QuizSection);
