import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useState, useEffect } from 'react'

function BotsPage() {
  const [allBots, setAllBots] = useState([])
  const [botArmy, setBotArmy] = useState([])
  

  useEffect (() => {
    const request = async () => {
      let req = await fetch('http://localhost:8002/bots')
      let res = await req.json()
      setAllBots(res)
    }
    request()
  }, [])

  const addToArmy = (bot) => {
    if (botArmy.includes(bot)) return;
    setBotArmy([...botArmy, bot])
  }

  const releaseBot = (bot) => {
    setBotArmy((currentBots) => {
      return ([...currentBots.filter((cB) => {
        return cB.id !== bot.id })]
        )
    })
  }

  const dischargeBot = async(bot) => {
    await fetch(`http://localhost:8002/${bot.id}`, {
      method: "DELETE"
    })
    setBotArmy((currentArmy) => {
      return ([...currentArmy.filter((cA) => {
        return cA.id !== bot.id })]
        )
    })
  }

  return (
    <div>
      <YourBotArmy botArmy={botArmy} releaseBot={releaseBot} />
      <BotCollection allBots={allBots} addToArmy={addToArmy}/>
    </div>
  )
}

export default BotsPage;
