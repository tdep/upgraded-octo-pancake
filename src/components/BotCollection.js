import BotCard from './BotCard'
import React from "react";

function BotCollection({ allBots, addToArmy}) {
  
  return (
    <div className="ui four column grid">
      <div className="row">
        Collection of all bots
        {
          allBots.map((bot) => {
            return (
              <div onClick={() => {addToArmy(bot)}}>
                <BotCard bot={bot} addToArmy={addToArmy}/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default BotCollection;
