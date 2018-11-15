import React, { Component } from "react";
 import civil1 from './picture/civil1.jpg';
 import civil2 from './picture/civil2.jpg';
 import civil3 from './picture/civil3.jpg';
class Civil extends Component {
  render() {
    return (
      <div>
        <h2>Civil & Structure Engineering Services</h2>
      <p> Requirements for green, robust and reliable infrastructures are currently increased in high demand and will continue in the future as well. MEGC team leverages state-of-the-art technologies and innovative engineering know-how to reach out every niche of our clients, business partners’ satisfaction and expectation. We assuredly offer our Civil & Structure Engineering Services in Design, Consultancy and Project Management complying with International and Local Standards including Codes of Practice (CP).
Our capable and skillful Civil & Structure engineering professionals offer Seismic or Non‑Seismic design for High‑Rise and Low‑Rise Buildings (Residential, Commercial, Educational, Healthcare, Agricultural and Industrial Buildings). We also provide services related to essential infrastructures such as Transport Hubs, Logistic Facilities, Sport & Recreation Complexes, Multi-Storey Car Parks, Bored Tunneling and Highway & Road Construction. We extend our services in Shallow and Deep Foundations, and Temporary Earth Retaining Structures as well as in Geotechnical Engineering and Monitoring Work.</p>
    
 <ul>
            <li><img src={civil1}  width="500" height="500"   alt="Civil" /></li>
            <br/>
            <li><img src={civil2}   width="500" height="500" alt=""/></li>
            <br/> 
            <li><img src={civil3}  width="500" height="500" alt=""/></li>
          </ul>


      </div>
    );
  }
}
 
export default Civil;

