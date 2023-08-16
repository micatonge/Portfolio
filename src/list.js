// import React, { useState } from "react";
// import { Breadcrumbs, Popover, List, ListItem, ListItemText } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Chip from '@mui/material/Chip';
// import { emphasize, styled } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from '@mui/material/Tooltip';


import React, { useState } from "react";
import { Breadcrumbs, List, ListItem, ListItemText } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chip from '@mui/material/Chip';
import { emphasize, styled } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
    bottom: {
        marginTop: 15,
        marginLeft: 115,
        fontFamily: 'Montserrat',
      },
      popoverContent: {
        fontFamily: 'Montserrat',
        maxWidth: '200px', // Adjust the width as needed
        padding: 5,
        maxHeight: '200px', // Adjust the max height of the popover content
        overflowY: 'auto', // Add vertical scrolling if content exceeds max height
        backgroundColor: theme.palette.grey[100], // Background color
        borderRadius: theme.shape.borderRadius, // Border radius
        boxShadow: theme.shadows[1], // Add a subtle shadow
      },
      pt2: {
        marginTop: 15,

      },
      p: {
        paddingRight: 15,

      },
}));

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
      '&.differentColor': {
        backgroundColor: 'green',
        color: 'white',
        '&:hover, &:focus': {
          backgroundColor: 'darkgreen',
        },
        '& .MuiSvgIcon-root': {
          fill: 'white',
      },
    },
      '&.differentColor2': {
        backgroundColor: 'orange', // Your desired different color
        color: 'white', // Text color for the different color breadcrumb
        '&:hover, &:focus': {
          backgroundColor: 'darkorange', // Change background color on hover/focus
        },
        '& .MuiSvgIcon-root': {
          fill: 'white', // Icon color for the different color breadcrumb
        },
      },
    };
  }); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591
  
  
  const Listt = () => {

    const classes = useStyles();

    const [isListVisible, setIsListVisible] = useState(false);

    const handleToggleList = () => {
      setIsListVisible(!isListVisible);
    };
  
    return (
      <div className={classes.bottom}>
        <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb component="a" href="#" label="Javascript" />
           <StyledBreadcrumb component="a" href="#" label="Python" />
         <StyledBreadcrumb component="a" href="#" label="C#" />
         <StyledBreadcrumb component="a" href="#" label="Databases" />
     <StyledBreadcrumb component="a" href="#" label="React" />
       <StyledBreadcrumb component="a" href="#" label="Angular" />
       <Tooltip title="Click me!">
          <StyledBreadcrumb
            label="Other skills"
            className="differentColor"
            endIcon={<ExpandMoreIcon />}
            onClick={handleToggleList}
          />
          </Tooltip>
        </Breadcrumbs>

      <div className={classes.pt2}>
        {isListVisible && (
                  <Breadcrumbs aria-label="breadcrumb">
                  <StyledBreadcrumb component="a" href="#" label="Figma"  className="differentColor2"
 />
                <StyledBreadcrumb component="a" href="#" label="AWS Cloud"             className="differentColor2"
 />
                <StyledBreadcrumb component="a" href="#" label="Agile Flow"              className="differentColor2"
/>
                <StyledBreadcrumb component="a" href="#" label="Marketing"              className="differentColor2"
/>
            <StyledBreadcrumb component="a" href="#" label="Adobe Photoshop"              className="differentColor2"
/>
              <StyledBreadcrumb component="a" href="#" label="SEO Strategies"             className="differentColor2"
 />
 </Breadcrumbs>
        )}
        </div>
      </div>
    );
  };
  
  export default Listt;
  

// const MoreSkillsList = ({ onClose }) => {
//   const skills = ["Node.js", "Java", "HTML/CSS", "Design"];

//   return (
//     <List>
//       {skills.map((skill) => (
//         <ListItem button key={skill}>
//           <ListItemText primary={skill} />
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// const Listt = () => {

//   const classes = useStyles();

//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);

//   return (
//     <div className={classes.bottom}>
//       <Breadcrumbs aria-label="breadcrumb">
//         <StyledBreadcrumb component="a" href="#" label="Python" />
//         <StyledBreadcrumb component="a" href="#" label="C#" />
//         <StyledBreadcrumb component="a" href="#" label="Databases" />
//         <StyledBreadcrumb component="a" href="#" label="React" />
//         <StyledBreadcrumb component="a" href="#" label="Angular" />
//         <StyledBreadcrumb
//           label="Other skills"
//           className="differentColor"          deleteIcon={<ExpandMoreIcon />}
//           onDelete={handleClick}
//         />
//       </Breadcrumbs>

//       {/* Popover with the expanded skills list */}
//       <Popover
//         className={classes.pop}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "center",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "center",
//           }}
//       >
//                <div className={classes.popoverContent}>
//           <MoreSkillsList onClose={handleClose} />
//         </div>
//       </Popover>
//     </div>
//   );
// };

// export default Listt;
