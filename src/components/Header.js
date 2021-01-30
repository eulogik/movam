// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     textAlign:'right',
//     justifyContent:'flex-end',
//     alignContent:'flex-end'
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" style={{backgroundColor:'white', color:'black'}}>
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <img alt='logo'/>
//           </IconButton>
//           <Typography variant="h4" >
//             MOVAM
//           </Typography>
//           <Typography variant="h7" style={{color:'grey'}} >
//            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Tracking DashBoard
//           </Typography>
//           <Button color="inherit" className={classes.title}>Aiden smith</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign:'right',
     justifyContent:'flex-end',
     alignContent:'flex-end'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'white', color:'black'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <img alt='logo'/>
          </IconButton>
          <Typography variant="h4" >
          MOVAM
          </Typography>
          <Typography variant="h7" style={{color:'grey'}} >
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Tracking DashBoard
           </Typography>
          <Typography color="inherit" className={classes.title}>Aiden smith</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
