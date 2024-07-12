// import React from 'react';
// import './index.css';
// import bornaCrime from './bornaCrime.png';

// function VideoSection() {
//   return (
//     <div className="video-section">
//       <h2>Videos</h2>
//       <div className="content">
//         <div className="video-preview">
//           <img src={bornaCrime} alt="Video preview" />
//           <button className="view-all">View all</button>
//         </div>
//         <div className="description">
//           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VideoSection;


// index.js
import React from 'react';
import './index.css';
import bornaCrime from './bornaCrime.png';

function VideoSection() {
  return (
    <div className="video-section">
      <h2>Videos</h2>
      <div className="content">
        <div className="video-preview">
          <img src={bornaCrime} alt="Video preview" />
          <button className="view-all">View all</button>
        </div>
        <div className="description">
          <p>Explore our collection of marketing videos, featuring insights from industry experts and practical tips to boost your marketing strategies.</p>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;