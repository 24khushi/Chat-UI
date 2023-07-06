import React, { useState, useRef, useEffect } from 'react';
import DurvaImg from './Dhurva.jpg';
import RamImg from './Ram.jpg';
import YashasviImg from './yashavsi.jpg';
import vaishImg from './vaish.jpg';
import DollyImg from './Dolly.jpg';
import RyanImg from './Ryan.jpg';
import './index.css'
import User from './User';

let incomingMes =[{
    
  "text": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
  "time": "12:46 PM",
  "type": "text",
  "sendby": "you"
}, {
  "text": "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
  "time": "5:41 AM",
  "type": "text",
  "sendby": "you"
}, {
  "text": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  "time": "4:16 AM",
  "type": "text",
  "sendby": "you"
}, {
  "text": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
  "time": "1:26 PM",
  "type": "text",
  "sendby": "me"
}, {
  "text": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
  "time": "1:06 PM",
  "type": "text",
  "sendby": "you"
}, {
  "text": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
  "time": "6:06 PM",
  "type": "text",
  "sendby": "me"
}, {
  "text": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
  "time": "4:16 AM",
  "type": "text",
  "sendby": "you"
}, {
  "text": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
  "time": "2:48 AM",
  "type": "text",
  "sendby": "you"
}, {
  "text": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
  "time": "2:54 AM",
  "type": "text",
  "sendby": "you"
}, {
  "text": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
  "time": "11:00 AM",
  "type": "text",
  "sendby": "me"
}]

const ChatPage = () => {
    const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState(incomingMes);
  const chatContainerRef = useRef(null);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
    const handleSendMessage = () => {
      if (inputValue.trim() !== '') {
          const newMessage = {
          text: inputValue,
          sendby: 'me',
        };
  
        setMessages([...messages, newMessage]);
        setInputValue('');
      }
    };
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleSendMessage();
      }
    };
    useEffect(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }, [messages]);
 let users = [{
    "name": "Evelin Torbeck",
    "email": "etorbeck0@amazonaws.com",
    "mobile": "11-252-4797",
    "avatar": "https://robohash.org/explicaboipsaet.png?size=50x50&set=set1"
  }, {
    "name": "Alfonse Crimes",
    "email": "acrimes1@wikispaces.com",
    "mobile": "55-370-4207",
    "avatar": "https://robohash.org/veniamautqui.png?size=50x50&set=set1"
  }, {
    "name": "Rube Austick",
    "email": "raustick2@hatena.ne.jp",
    "mobile": "01-389-1269",
    "avatar": "https://robohash.org/quistemporesaepe.png?size=50x50&set=set1"
  }, {
    "name": "Robert Bachellier",
    "email": "rbachellier3@fotki.com",
    "mobile": "19-497-1795",
    "avatar": "https://robohash.org/eosasperioresminus.png?size=50x50&set=set1"
  }, {
    "name": "Kirstin Calbaithe",
    "email": "kcalbaithe4@skyrock.com",
    "mobile": "56-612-0572",
    "avatar": "https://robohash.org/quieaquesuscipit.png?size=50x50&set=set1"
  }, {
    "name": "Jeremiah Wahlberg",
    "email": "jwahlberg5@w3.org",
    "mobile": "71-463-0312",
    "avatar": "https://robohash.org/repellatcorruptialias.png?size=50x50&set=set1"
  }, {
    "name": "Currie Eagers",
    "email": "ceagers6@jiathis.com",
    "mobile": "71-416-4150",
    "avatar": "https://robohash.org/magnieosad.png?size=50x50&set=set1"
  }, {
    "name": "Grenville Tuny",
    "email": "gtuny7@ucla.edu",
    "mobile": "54-288-4110",
    "avatar": "https://robohash.org/velautemcorrupti.png?size=50x50&set=set1"
  }, {
    "name": "Konrad Jelly",
    "email": "kjelly8@devhub.com",
    "mobile": "16-793-2145",
    "avatar": "https://robohash.org/voluptaspariaturvoluptates.png?size=50x50&set=set1"
  }, {
    "name": "Sandro Chilcotte",
    "email": "schilcotte9@mozilla.org",
    "mobile": "62-098-8064",
    "avatar": "https://robohash.org/vitaequiipsam.png?size=50x50&set=set1"
  }]

  return (
    <div className='container'>
      <div className="chat-header">
                <h>CHAT APPLICATION</h>
            </div>
          <div className='chat-body'>
            <div className='list'>
      {users.map((user, index) => (
        <User
          name={user.name}
          email={user.email}
          mobile={user.mobile}
          avatar={user.avatar}
        /> 
      ))} </div>
          <div className="main">
                    <div className="chat-head">
                        <div className="avatar-container">
                            <img className="avatar" src={RamImg}/>
                        </div>
                        <div className="content-container">
                            <p className="bold margin name">Puneet</p>
                        </div>
                    </div>
                    <div className="chat-window">
                        <div className="messages">
                           <div className="con">
                               <div className="sender"><p>Hey</p></div>
                            </div>
                           <div className="cons">
                               <div className="receiver"><p>Hello</p></div>
                           </div>
                           <div className="con">
                               <div className="sender"><p>How you doing?</p></div></div>
                            <div className="cons">
                               <div className="receiver"><p>Good, What about you!</p></div>
                            </div>
                           <div className="con">
                               <div className="sender"><p>Fine, whats going on nowdays?</p></div></div>
                           <div className="cons">
                               <div className="receiver"><p>Nothing Much, boring days!</p></div></div>
                            <div className="intext">
                               {messages.map((incomingMes, index) => (
                                  <div className={ incomingMes.sendby == 'me' ? "cons" : "con"}>
                                      <div className={ incomingMes.sendby == 'me' ? "receiver" : "sender"}>
                                        <p>{incomingMes.text}</p>
                                      </div> 
                                  </div>
                                    //  incomingMes.sendby == 'me' ?  
                                    //   <div className="cons">
                                    //     <div className="receiver"><p>{incomingMes.text}</p></div>
                                    //   </div> :
                                    //   <div className="con">
                                    //     <div className="sender">
                                    //       <p>{incomingMes.text}</p>
                                    //     </div>
                                    //   </div>
                                 ))}
                                  <div ref={chatContainerRef}></div>
                            </div>
                            {/* <div className="chat-logs">
        {messages.map((message) => (
          <div className={`message ${message.sendby === 'me' ? "cons" : "con" }`}>
            <div className={ message.sendby == 'me' ? "receiver" : "sender"}>
            <p>{message.text}</p>
          </div>
          </div>
        ))}
      </div> */}
                       </div>
                        <div className="text-message">
                            <div style={{flex: 1}}>
                                <input
                                    style={{width: '100%', height: 35}}
                                    type="text"
                                    placeholder="Type your message"
                                    value={inputValue}
                                    onChange={handleInputChange} 
                                    onKeyPress={handleKeyPress}
                                />
                               
                            </div>
                            <button className="send-button" onClick={handleSendMessage}>Send</button>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
                        
   );
};
export default ChatPage;