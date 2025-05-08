import React, { useState } from 'react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'ai', text: 'Hi! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;

    // Add user message
    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = getAIResponse(input);
      setMessages((prev) => [
        ...prev,
        { type: 'ai', text: aiResponse },
      ]);
    }, 1000);
  };

  // Mock AI response (replace with real API call if needed)
  const getAIResponse = (userInput) => {
    const responses = {
      "How do I sell my license?":
        "To sell your license, follow these simple steps: 1. Log into your account. 2. Navigate to the 'Sell' section. 3. Fill out the details and submit your license for sale.",
      "What is the return policy?":
        "Our return policy allows you to return products within 30 days of purchase for a full refund.",
      "How do I contact customer support?":
        "You can contact customer support via email at support@softsell.com or use our live chat feature on this page.",
      "What is SoftSell?":
        "SoftSell is an online platform for buying and selling software licenses in a secure environment.",
      "How can I track my order?":
        "To track your order, log into your account and go to the 'Orders' section to see the status of your current orders.",
      "Can I get a discount?":
        "Currently, we don't offer discounts, but be sure to subscribe to our newsletter for any promotions or updates.",
    };

    // Default fallback response
    return responses[userInput] || "I'm sorry, I didn't understand that. Can you please rephrase?";
  };

  return (
    <>
      <div className={`chat-widget ${isOpen ? 'open' : 'closed'}`}>
        {isOpen ? (
          <div className="chat-box">
            <div className="chat-header">
              <h3>SoftSell Chat</h3>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                ×
              </button>
            </div>
            <div className="chat-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-message ${msg.type}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        ) : (
          <button className="chat-fab" onClick={() => setIsOpen(true)}>
            💬
          </button>
        )}
      </div>
    </>
  );
};

export default ChatWidget;
