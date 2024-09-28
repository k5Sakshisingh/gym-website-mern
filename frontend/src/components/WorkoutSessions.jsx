import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        <h3>Welcome to Our Top Workout Session!</h3>
        At Iron Haven, we pride ourselves on offering the most effective and engaging workout sessions. Whether you're a beginner or a seasoned athlete, our top sessions are designed to push your limits, improve your strength, and help you achieve your fitness goals.
        <br /><br /><br />
        <b>Join our community</b>of like-minded fitness enthusiasts and take your workout to the next level with personalized coaching and dynamic exercises tailored for all fitness levels.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        <h3>High-Intensity Bootcamps for Every Fitness Level</h3>
        Our bootcamps are designed to challenge you while ensuring you have fun. 
        These high-intensity group sessions are packed with a variety of workouts that target strength, 
        endurance, and flexibility. Perfect for those who love training in a team environment, our bootcamps
         will motivate you to push your limits.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength Bootcamp</h4>
            <p>
            Build and tone your muscles with a mix of bodyweight exercises, weight training, and functional movements. Whether you're a beginner or an advanced athlete, this bootcamp will help you improve your strength and overall fitness.
            <p><b>Duration:</b>45 minutes<b>| Intensity:</b>Moderate to High</p>
            <b>Equipment:</b><p>Free weights, kettlebells, resistance bands</p>
            </p>
          </div>
          <div>
          <h4>Cardio Burn Bootcamp</h4>
            <p>
            Get your heart pumping and burn calories fast with our cardio-focused bootcamp. Featuring interval training, sprints, and agility drills, this session will help you shed fat and improve cardiovascular health.
            <p><b>Duration:</b>60 minutes<b>| Intensity:</b>High</p>
            <b>Equipment:</b><p>Jump ropes, agility ladders, bodyweight exercises</p>
            </p>
          </div>
          <div>
          <h4>HIIT Bootcamp</h4>
            <p>
            Short on time but need an intense workout? Our HIIT (High-Intensity Interval Training) bootcamp is designed to maximize your results in just 30 minutes. You'll alternate between bursts of intense activity and brief recovery periods to keep your metabolism revved up long after the workout.
            <p><b>Duration:</b>30 minutes<b>| Intensity:</b>Very High</p>
            <b>Equipment:</b><p>Battle ropes, slam balls, bodyweight</p>
            </p>
          </div>
          <div>
            <h4>And many more....</h4>
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;


