import React, { Component } from 'react';
import logo from './logo.png';
import civil1 from './picture/civil1.jpg';
import civil2 from './picture/civil2.jpg';
import civil3 from './picture/civil3.jpg';
import arch1 from './picture/arch1.jpg';
import arch2 from './picture/arch2.jpg';
import arch3 from './picture/arch3.jpg';
import it1 from './picture/it1.jpg';
import it2 from './picture/it2.jpg';
import it3 from './picture/it3.jpg';
import mech1 from './picture/mech1.jpg';
import mech2 from './picture/mech2.jpg';
import mech3 from './picture/mech3.jpg';
import mech4 from './picture/mech4.jpg';
import mech5 from './picture/mech5.jpg';
import oil1 from './picture/oil1.jpg';
import oil2 from './picture/oil2.jpg';
import port1 from './picture/port1.jpg';
import port2 from './picture/port2.jpg';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Activity from "./Activity";
import Civil from "./Civil";
import Engineering from "./Engineering";
import Architecture from "./Architecture";
import ICT from "./ICT";
import Oil from "./oil";
import Manufacture from "./Manufacture";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";
import StickyFooter from 'react-sticky-footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import './MGEC.css';

const styles = theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  }
});


class MGEC extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
       <HashRouter>
     <div>
     <div className="logo">
      <img src={logo} width="80px" height="80px" alt="logo"/>
      </div>
          <h1>Myanmar  Gateway Engineering & Consultancy</h1>
        
         
      <br />
      

          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
             <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/activity">Activity</NavLink></li>
             <li><NavLink to="/engineering">Engineering</NavLink>
           <ul className="sub">
            <li><NavLink to="/civil">Civil</NavLink></li>
           <li><NavLink to="/architecture">Architecture</NavLink></li>
             <li><NavLink to="/ict">ICT</NavLink></li>
              <li><NavLink to="/oil">Oil</NavLink></li>
             <li><NavLink to="/manufacture">Manufacture</NavLink></li>
             <li><NavLink to="/">ICT</NavLink></li>
             </ul>
             </li>    
              </ul>
  <h1>hayyy</h1>
  <Carousel>
                <div>
                   <img src={civil1}    alt="Civil" />
                    <p className="legend">Civil and Structure</p>
                </div>
                <div>
                   <img src={civil2}     alt="Civil" />
                    <p className="legend">Civil and Structure</p>
                </div>
                <div>
                    <img src={civil3}    alt="Civil" />
                    <p className="legend">Civil and Structure</p>
                </div>
                <div>
                   <img src={arch1}    alt="Arch" />
                    <p className="legend">Architecture</p>
                </div>
                <div>
                   <img src={arch2}     alt="Arch" />
                    <p className="legend">Architecture</p>
                </div>
                <div>
                    <img src={arch3}    alt="Arch" />
                    <p className="legend">Architecture</p>
                </div>
                <div>
                   <img src={it1}    alt="ICT" />
                    <p className="legend">ICT</p>
                </div>
                <div>
                   <img src={it2}     alt="ICT" />
                    <p className="legend">ICT</p>
                </div>
                <div>
                    <img src={it3}    alt="ICT" />
                    <p className="legend">ICT</p>
                </div>
                 <div>
                   <img src={mech1}    alt="Mech" />
                    <p className="legend">Mechanical</p>
                </div>
                <div>
                   <img src={mech2}     alt="Mech" />
                    <p className="legend">Mechanical</p>
                </div>
                <div>
                    <img src={mech3}    alt="Mech" />
                    <p className="legend">Mechanical</p>
                </div>
                 <div>
                   <img src={mech4}    alt="Mech" />
                    <p className="legend">Mechanical</p>
                </div>
                <div>
                   <img src={mech5}     alt="Mech" />
                    <p className="legend">Mechanical</p>
                </div>
                <div>
                    <img src={oil1}    alt="Oil" />
                    <p className="legend">Oil</p>
                </div>
                 <div>
                    <img src={oil2}    alt="Oil" />
                    <p className="legend">Oil</p>
                </div>
                 <div>
                    <img src={port1}    alt="Port" />
                    <p className="legend">Port</p>
                </div>
                 <div>
                    <img src={port2}    alt="Port" />
                    <p className="legend">Port</p>
                </div>
            </Carousel>
            <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/About" component={About}/>
            <Route path="/Activity" component={Activity}/>
            <Route path="/Civil" component={Civil}/>
            <Route exact path="/Engineering" component={Engineering}/>
            <Route path="/Architecture" component={Architecture}/>
            <Route path="/ICT" component={ICT}/>
            <Route path="/Oil" component={Oil}/>
            <Route path="/Manufacture" component={Manufacture}/>
           

          </div>
                <div className={classes.root}>
        <div>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            Engineering
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                      <MenuItem onClick={this.handleClose}>My account</MenuItem>
                      <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
<br />
<br />
<br />

<StickyFooter
    bottomThreshold={50}
    normalStyles={{
    backgroundColor: "#999999",
    padding: "2rem"
    }}
    stickyStyles={{
    backgroundColor: "rgba(255,255,255,.8)",
    padding: "2rem"
    }}
>
    Add any footer markup here
</StickyFooter>



        </div>
        
      </HashRouter>                              
      
    );
  }
}
MGEC.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MGEC);


