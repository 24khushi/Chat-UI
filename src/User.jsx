import * as React from "react";

import './index.css';
import RyanImg from './Ryan.jpg';
import DurvaImg from './Dhurva.jpg';
import DollyImg from './Dolly.jpg';
import vaishImg from './vaish.jpg';
import YashasviImg from './yashavsi.jpg';
import RamImg from './Ram.jpg';
import SanskritiImg from './Sanskriti.jpg';
import SachinImg from './Sachin.jpg';
const User = (props) => {
    return (
        // <div>
            /* <div className="chat-header">
                <h>CHAT APPLICATION</h>
            </div> */
            /* <div className="chat-body"> */
                // <div className ="list">
                    <div className="box">
                        <div className="avatar-container">
                            <img className="avatar" src={props.avatar}/>
                        </div>
                        <div className="content-container">
                            <p className="bold name">{props.name}</p>
                            <p className="light no-margin">{props.mobile}</p>
                            <p className="light no-margin">{props.email}</p>
                        </div>
                    {/* </div> */
                    /* <div className="box">
                    <div className="avatar-container">
                        <img className="avatar" src={RyanImg}/>
                    </div>
                    <div className="content-container">
                        <p className="bold name">Aarti</p>
                        <p className="mobile light">9809809910</p>
                    </div>
                </div>
                <div className="box">
                <div className="avatar-container">
                    <img className="avatar" src={DurvaImg}/>
                </div>
                <div className="content-container">
                    <p className="bold name">Ashish</p>
                    <p className="mobile light">0954869086</p>
                </div>
            </div>
            <div className="box">
                <div className="avatar-container">
                    <img className="avatar" src={DollyImg}/>
                </div>
                <div className="content-container">
                    <p className="bold name">Shreya</p>
                    <p className="mobile light">6576687687</p>
                </div>
            </div>
            <div className="box">
                <div className="avatar-container">
                    <img className="avatar" src={vaishImg}/>
                </div>
                <div className="content-container">
                    <p className="bold name">Shivani</p>
                    <p className="mobile light">54765897098</p>
                </div>
            </div>
            <div className="box">
                <div className="avatar-container">
                    <img className="avatar" src={YashasviImg}/>
                </div>
                <div className="content-container">
                    <p className="bold name">Rajiv</p>
                    <p className="mobile light">7676442987</p>
                </div>
            </div>
            <div className="box">
                <div className="avatar-container">
                    <img className="avatar" src={RamImg}/>
                </div>
                <div className="content-container">
                    <p className="bold name">Puneet</p>
                    <p className="mobile light">826873590</p>
                </div>
            </div>
            <div className="box">
                <div className="avatar-container">
                    <img className="avatar" src={SanskritiImg}/>
                </div>
                <div className="content-container">
                    <p className="bold name">Sanskriti</p>
                    <p className="mobile light">876454287</p>
                </div>
            </div>
            <div className="box">
                <div className="avatar-container">
                    <img className="avatar" src={SachinImg}/>
                </div>
                <div className="content-container">
                    <p className="bold name">Sachin</p>
                    <p className="mobile light">8397276233</p>
                </div>
            </div> */}
            
            {/* </div> */}
                {/* <div className="main">
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
                               <div className="sender"><p>Hey</p></div></div>
                           <div className="cons">
                               <div className="receiver"><p>Hello</p></div></div>
                           <div className="con">
                               <div className="sender"><p>How you doing?</p></div></div>
                           <div className="cons">
                               <div className="receiver"><p>Good, What about you!</p></div></div>
                           <div className="con">
                               <div className="sender"><p>Fine, whats going on nowdays?</p></div></div>
                           <div className="cons">
                               <div className="receiver"><p>Nothing Much, boring days!</p></div></div>
                        </div>
                        <div className="text-message">
                            <div style={{flex: 1}}>
                                <input
                                    style={{width: '100%', height: 35}}
                                    type="text"
                                    placeholder="Type your message"
                                />
                            </div>
                            <button className="send-button">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            </div> */}
           {/* </div>  */}
     </div>
    )
        }

export default User;