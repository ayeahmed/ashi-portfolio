import React from 'react';
import './Welcome.css';

interface WelcomePopup {
  onAccept: () => void;
}

const Welcome: React.FC<WelcomePopup> = ({ onAccept}) => (
    <div className="modal-overlay">
        <div className="modal-content">
        <h2>hello there!</h2>
        <p>
            welcome to my site — this is still a work in progress and thus not entirely
            refined for mobile viewing. keep that in mind if ur on ur phone!
            <br/>
            happy you're here ₍^. .^₎⟆
            <br/>
            please click “accept” to proceed to my site</p>
        <button onClick={onAccept}>accept</button>
        </div>
  </div>
)

export default Welcome;