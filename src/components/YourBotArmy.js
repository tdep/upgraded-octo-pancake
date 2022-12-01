import React from "react";
import BotCard from './BotCard'

function YourBotArmy({ botArmy, releaseBot}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
          {
            botArmy.map((bot) => {
              return(
                <div onClick={releaseBot(bot)}>
                  <BotCard bot={bot} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
