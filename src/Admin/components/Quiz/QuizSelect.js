import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
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
              <Link to="/admin/quizzes/">
                <Card className={classes.card}>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      All Questions
                    </Typography>

                    <Typography color="textSecondary">adjective</Typography>
                  </CardContent>
                </Card>
                </Link>
              </Grid>
              <Grid item>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Add your questions
                    </Typography>

                    <Typography color="textSecondary">adjective</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(QuizSection);
