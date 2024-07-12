// import './index.css'
// import { GiPlayButton } from "react-icons/gi";


// const Podcast = () =>{
//     return(
// <div>
//     <div className='intro'>
//         <div>
//     <img src='/Images/podcast.jpg' alt='' className='img'/></div>
// <div>
//     <p>Join us for the slack podcast where we explore how to leverage power of slack to streamline your workflow,boost productivity,and foster better collaboration within your team.In each episode
//     Whether you're new to Slack or a seasoned pro, this podcast is your guide to mastering the art of workplace communication and taking your team's efficiency to new heights.
//  </p><button>Play Now</button></div>

  
// {/* In each episode, we dive into practical tips and strategies for getting the most out of Slack, from optimizing your workspace settings to integrating powerful apps and automations. You'll hear from productivity experts, Slack power users, and the Slack team themselves as we uncover hidden features and best practices. */}
//     </div>
// </div>
//     )
// }
// export default Podcast


// index.js
import React from 'react';
import './index.css';
import podcast from './podcast.jpg';

const Podcast = () => {
  return (
    <div className='podcast-section'>
      <h2>Podcast</h2>
      <div className='podcast-content'>
        <div className='podcast-image'>
          <img src={podcast} alt='Podcast' className='img'/>
        </div>
        <div className='podcast-text'>
          <p>Join us for the slack podcast where we explore how to leverage power of slack to streamline your workflow, boost productivity, and foster better collaboration within your team. Whether you're new to Slack or a seasoned pro, this podcast is your guide to mastering the art of workplace communication and taking your team's efficiency to new heights.</p>
          <button className='play-button'>Play Now</button>
        </div>
      </div>
    </div>
  )
}

export default Podcast;

