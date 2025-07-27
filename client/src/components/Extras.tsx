import React from 'react';
import './Extras.css';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import riotgunbuddy from '../assets/imgs/riotgun.png'; 

const Extras = () => (
  <div className="extras-page">
    <h1>About Me</h1>
    <p>i mainly made this page to list out my random hobbies, interests, and favorite things
        so feel free to mention literally any of these w/ me if u want to chat xp
    </p>
    <div className='interests-wrapper'>
      <img src={riotgunbuddy} alt="riotbuddy" className="riot" />
      <div className='interests'>
          kpop groups (enhypen is my all time favorite (after bts ofc))
          <br/>
          outside of kpop i like a lot of types of music. i have most recently been listening
          to kendrick lamar's gnx album!
          <br/>
          <a href="https://open.spotify.com/user/ayeshafira?si=34f257d467eb4cd4" className='spotify-link'>
              click for spotify
          </a>
          <br/>
          reading (fantasy books + romcoms, i like emily henry and ali hazelwood, leigh bardugo books,
          most recently read dance of thieves duology! ask for my goodreads if u see this!! mwahaha)
          <br/>
          love island season 7.
          <br/>
          i play valorant and sometimes fortnite. i built my own gaming pc and she is my
          favorite thing in the world
          <br/>
          i have picked up pilates but also enjoy lifting 
          <br/>
          traveling! (i went to pakistan in 2025 where i visited my parents hometowns karachi and hyderabad,
          but finally got the opportunity to go to travel some cities in gilgit baltistan which was
          an incredible experience) i also took the opportunity to travel locally
          a bit while i was in the bay area and visited sf, monterey, santa cruz, and lake tahoe which was cool!!
          <br/>
          I cannot seem to think of more things but will update this page as i come up with more 
          non technical hobbies
      </div>
    </div>
    <div className='footer-tab'>
        <Link to="/"><FaHome size={28} color="#d94c86" /></Link>
    </div>
  </div>
);

export default Extras;