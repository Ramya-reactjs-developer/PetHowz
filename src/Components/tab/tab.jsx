// import React from "react";
// import { Tabs, Tab, Box } from "@mui/material";
// import PropTypes from "prop-types";
// import "./tab.css";
// /**
//  *
//  * @param {object} props - require props in CustomTab component
//  * @returns {React.ReactElement} - returns the CustomTab component
//  */
// function CustomTab(props) {
//   const { tabList, handleChange, value } = props;
//   return (
//     <Box sx={{ width: "100%", display: "flex" }}>
//       {tabList?.map((item, index) => {
//         const key = index;
//         return (
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             TabIndicatorProps={{
//               style: {
//                 backgroundColor: item.tabColor,
//                 textColor: item.textColor,
//                 // left: '8px',
//                 // width: '75px',
//                 // height: '3px'
//               },
//             }}
//           >
//             <Tab
//               value={key}
//               label={item.tabText}
//               className="tabValue"
//               sx={{
//                 "&.MuiTab-root": {
//                   "&.Mui-selected": {
//                     color: item.tabColor,
//                     fontWeight: 600,
//                     fontSize: "16px",
//                   },
//                 },
//               }}
//             />
//           </Tabs>
//         );
//       })}
//     </Box>
//   );
// }
// export default CustomTab;
// CustomTab.propTypes = {
//   tabList: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
//   handleChange: PropTypes.func.isRequired,
//   value: PropTypes.number.isRequired,
// };







import React from 'react';
import { makeStyles } from '@mui/styles';
import { Tabs, Tab } from "@mui/material";
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CustomTab({ tabs }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange}>
        {tabs.map((tab) => (
          <Tab key={tab.label} label={tab.label} />
        ))}
      </Tabs>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map((tab) => (
          <div key={tab.label}>
            {tab.content}
          </div>
        ))}
      </SwipeableViews>
    </div>
  );
}
