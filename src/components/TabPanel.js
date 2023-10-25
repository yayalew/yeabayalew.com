import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../styles/TabPanel.css'
import { makeStyles } from "@material-ui/core/styles";
import { Fade } from 'react-reveal';

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid `
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Smartrend Manufacturing Group": {
      jobTitle: "Embedded Software Developer Intern @",
      duration: "MAY 2023 - DEC 2023",
      desc: [
        "Developed a test suite using Pytest framework from the ground up to test an Electric Vehicle Charge Controller.",
        "Developed and designed command line interfaces to communicate directly to a Cortex M0 microprocessor.",
        "Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations."
      ]
    },
    "Healthcare Systems R&D": {
      jobTitle: "Software Engineering Intern @",
      duration: "APRIL 2022 - SEPT 2022",
      desc: [
        "Collaborated with team of 4 to develop a production mobile app using responsive UI components via React native for smooth interactions from the ground up.",
        "Collaborated with a team using various developer tools to determine design of schemas and relations for database management system.",
        "Worked alongside team to implement RESTful API using a SQL database, with the use of AWS cloud services.",
      ]
    },
  }
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
    <Tabs
      orientation={!isHorizontal ? "vertical" : null}
      variant={isHorizontal ? "fullWidth" : "scrollable"}
      value={value}
      onChange={handleChange}
      className={classes.tabs}
    >
      {Object.keys(experienceItems).map((key, i) => (
        <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
      ))}
    </Tabs>
    {Object.keys(experienceItems).map((key, i) => (
      <TabPanel value={value} index={i}>
        <span className="joblist-job-title">
          {experienceItems[key]["jobTitle"] + " "}
        </span>
        <span className="joblist-job-company">{key}</span>
        <div className="joblist-duration">
          {experienceItems[key]["duration"]}
        </div>
        <ul className="job-description">
          {experienceItems[key]["desc"].map(function (descItem, i) {
            return (
              <Fade  bottom delay={`${i + 1}00ms`}>
                <li key={i}>{descItem}</li>
              </Fade>
            );
          })}
        </ul>
      </TabPanel>
    ))}
  </div>
  );
}

export default JobList;