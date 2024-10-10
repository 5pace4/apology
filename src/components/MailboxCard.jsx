import React, { useState } from 'react';
import '/src/App.css'; // Ensure this path is correct for your project

const MailboxCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true); // Open the card when clicked or touched
  };

  return (
    <div className="container">
      <div className="watermark-bg"></div> {/* Watermark of kiss emojis */}
      {!isOpen ? (
        <div className="mailbox-card" onClick={handleClick}>
          <div className="flag"></div>
          <div className="mailbox-lid"></div>
          <div className="mailbox-body"></div>
          <div className="text-hover">Click Me 💌</div>
        </div>
      ) : (
        <div className="message-card">
          <p className="love-text">
            Sorry babee! ❤️ <br />
            I love you more than words can say, <br />
            You are my sunshine every day. ☀️
          </p>
        </div>
      )}
    </div>
  );
};

export default MailboxCard;
