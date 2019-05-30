import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleIcon from '@material-ui/icons/People';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountCircleIcons from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";


export const mainListItems = (
  <div>
      <Link to="/dashboard">
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
    <Link to="/courses/">
    <ListItem button>
      <ListItemIcon>
        <LibraryBooksIcon />
      </ListItemIcon>
      <ListItemText primary="Courses" />
    </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <Link to="/admin/quizsection">
    <ListItem button>
      <ListItemIcon>
        <AssessmentIcon />
      </ListItemIcon>
      
      <ListItemText primary="Quizzes" />
    </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <AccountCircleIcons />
      </ListItemIcon>
      <ListItemText primary="Profiles" />
    </ListItem>
    </div>

  
);

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );
