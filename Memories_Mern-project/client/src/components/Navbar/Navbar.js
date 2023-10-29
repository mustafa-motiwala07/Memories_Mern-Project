// import React, { useState, useEffect } from 'react';
// import { Link , useNavigate , useLocation } from 'react-router-dom';
// import { Toolbar, Typography, Avatar, Button } from '@material-ui/core';
// import { useDispatch } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   toolbar: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   profile: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   purple: {
//     color: theme.palette.getContrastText('#512DA8'),
//     backgroundColor: '#512DA8',
//   },
//   userName: {
//     marginLeft: '10px',
//   },
//   logout: {
//     marginLeft: '20px',
//   },
// }));

// function Navbar() {
//   const classes = useStyles();
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
//   const dispatch = useDispatch();
//   const history = useNavigate();
//   const location = useLocation();

//   const logout = () => {
//     dispatch({ type: 'LOGOUT'});

//     history.push('/');

//     setUser(null);
//   };

//   useEffect(() => {
//     const token = user?.token;

//     setUser(JSON.parse(localStorage.getItem('profile')));
//   }, [location]);

//   return (
//     <div className="Navbar">
//       <Toolbar className={classes.toolbar}>
//         <div className="navbar-logo">
//           <h1>Memories</h1>
//         </div>
//         {user ? (
//           <div className={classes.profile}>
//             <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
//               {user.result.name.charAt(0)}
//             </Avatar>
//             <Typography className={classes.userName} variant="h6">
//               {user.result.name}
//             </Typography>
//             <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>
//               Logout
//             </Button>
//           </div>
//         ) : (
//           <Button component={Link} to="/auth" variant="contained" color="primary">
//             Sign In
//           </Button>
//         )}
//       </Toolbar>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Toolbar, Typography, Avatar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history('/');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <div className="Navbar">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="navbar-logo">
          <h1>Memories</h1>
        </div>
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar alt={user.result.name} src={user.result.imageUrl}>
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography variant="h6" style={{ marginLeft: '10px' }}>
              {user.result.name}
            </Typography>
            <Button variant="contained" color="secondary" onClick={logout} style={{ marginLeft: '20px' }}>
              Logout
            </Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">
            Sign In
          </Button>
        )}
      </Toolbar>
    </div>
  );
}

export default Navbar;


