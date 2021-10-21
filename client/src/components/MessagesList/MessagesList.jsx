// React
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import serverUtils from '../../serverUtils';

// Stylesheet
import './MessagesList.css';
import Message from '../Message/Message';
import messages from '../../dummyData/messagesList.js';

const MessagesList = ({ messages }) => {
  const { id } = useContext(UserContext);

  let userId = 10;
  if (process.env.NODE_ENV !== 'test') {
    userId = parseInt(useParams().userId, 10);
  }

  const [allMessages, setMessages] = useState([]);

  const getData = () => serverUtils.messages.getMessages(userId, id).then((data) => data);

  useEffect(async () => {
    if (process.env.NODE_ENV !== 'test') {
      setMessages(await getData());
    } else {
      setMessages(messages)
    }

  }, []);

  // setInterval(async () => {
  //   setMessages(await getData());
  // }, 5000);

  const newMessage = (e) => {
    e.preventDefault();
    const newMessageToPost = e.target.newMessage.value;
    const formData = {
      text: newMessageToPost,
      senderId: userId,
      recipientId: id,
    };
    serverUtils.messages.postMessage(formData, userId, id);
  };

  return (
    <div data-testid="MessagesList" className="messages-container">
      {
        allMessages.length
          ? allMessages.map((message) => <Message message={message} key={message.message_id} />)
          : <div>No messages found!</div>
      }
      <form onSubmit={newMessage}>
        <input name="newMessage" placeholder="Enter Message Here" />
        <button type="submit">Post Message</button>
      </form>
    </div>
  );
};

export default MessagesList;
