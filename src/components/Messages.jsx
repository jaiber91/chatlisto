import React from "react";
import {SendMessage} from '../components/SendMessage'
import {IncommitMesage} from '../components/IncommitMesage'
import {OutgoingMessage} from '../components/OutgoingMessage'


export const Messages = () => {
    const msgs = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="mesgs">
      <div className="msg_history">
       {
           msgs.map(msg =>(
              (msg % 2)
                ? <IncommitMesage key={msg}/>
                : <OutgoingMessage key={msg}/>
           ))
       }
       
       

      
      </div>

      <SendMessage/>
    </div>
  );
};
