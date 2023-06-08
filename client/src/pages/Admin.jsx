import React from "react";
import "./admin.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Admin = () => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="adminContainer">
      <div className="inventoryContainer">
        <h3 className="commonHeading">INVENTORY</h3>
        <div className="inventoryItems">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 0.5, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Base" {...a11yProps(0)} />
                <Tab label="Sauce" {...a11yProps(1)} />
                <Tab label="Veggie" {...a11yProps(2)} />
                <Tab label="Cheese" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div className="inItems">
                Classic <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
              <div className="inItems">
                Thin Crust <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
              <div className="inItems">
                Thick Crust <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
              <div className="inItems">
                Gluten Free <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
              <div className="inItems">
                Wood Fire <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="inItems">
                Marinara <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
              <div className="inItems">
                Alfredo <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
              <div className="inItems">
                Pesto <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
              <div className="inItems">
                BBQ<span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
              <div className="inItems">
                Spicy Red <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="inItems">
                Mushrooms <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
              <div className="inItems">
                Bell Peppers <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
              <div className="inItems">
                Onions <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
              <div className="inItems">
                Olives <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
              <div className="inItems">
                Baby Corn <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div className="inItems">
                Mozzarella <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
              <div className="inItems">
                Cheddar <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
              <div className="inItems">
                Parmesan <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
              <div className="inItems">
                Swiss <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
              <div className="inItems">
                Gouda <span>30</span>
                <button type="button" className="valueIncBtn">
                  +
                </button>
              </div>
            </TabPanel>
          </Box>
        </div>
      </div>
      <div className="orderStatusList">
        <div className="orderStatus">
          <h3 className="commonHeading">ORDER STATUS</h3>
        </div>
        <button type="button" className="adminLogout">
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Admin;
