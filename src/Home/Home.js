import React from 'react'
import './Home.css'
import { useHistory } from "react-router-dom";
import { Icon } from '@iconify/react';
function Home() {
  const history = useHistory();

  return (
    <>
      <div className="Home-app">
        <Icon icon="mdi:close-box" className="icon-app" color="#ff1708" width="50" height="50" />
        <div className="font-up">
          <div>Teachin Eaksuverapong</div>
          <div>My Project</div>
        </div>

        <div className="btn-p">
          <button className="btn-app" onClick={() => history.push({ pathname: "/Resume" })}>
            Resume
          </button>
        </div>

        <div className="btn-p">
          <button className="btn-app" onClick={() => history.push({ pathname: "/Hotel" })}>
            Hotel
          </button>
        </div>

        <div className="btn-p">
          <button className="btn-app" onClick={() => history.push({ pathname: "/Webapp/MasterPage" })}>
            Web Apps
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
