import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
          <button onClick={() => navigate('./Contact')}>Start Your Journey</button> 
          <button>Discover Your Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import React from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const Hero = () => {
//   const navigate = useNavigate(); // Initialize navigate function

//   return (
//     <section className="hero">
//       <div className="content">
//         <div className="title">
//           <h1>LET'S</h1>
//           <h1>GET</h1>
//           <h1>MOVING</h1>
//         </div>
//         <div className="sub-title">
//           <p>Your Journey to Fitness Starts Here</p>
//           <p>Unleash Your Potential</p>
//         </div>
//         <div className="buttons">
//           <button onClick={() => navigate('/pricing')}>Start Your Journey</button>
//           <button onClick={() => navigate('/pricing')}>Discover Your Plan</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

