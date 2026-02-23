import { useEffect, useState } from "react"

const Countdown = ({targetMS}) => {
  const getTimeLeft = () => Math.max(targetMS - Date.now(), 0);
  const[time, setTime] = useState(getTimeLeft)

  useEffect(() =>{
    setInterval(()=>{
      setTime(getTimeLeft())
    }, 1000)
  }, [targetMS])

  const getFormattedTime = (Milloseconds) =>{
    let total_seconds = parseInt(Math.floor(Milloseconds/1000))
    let total_minutes = parseInt(Math.floor(total_seconds/60))
    let total_hours = parseInt(Math.floor(total_minutes/60))
    let days = parseInt(Math.floor(total_hours/24))

    let seconds = Math.floor(total_seconds%60)
    let minutes = Math.floor(total_minutes%60)
    let hours = Math.floor(total_hours%24)


    return `${days} Days: ${hours} Hours: ${minutes} Minutes: ${seconds} seconds`

  }

  return (
    <>
        <div id="Schedule">
                <div className = "countdown">
                    <h2>Countdown to the #FIFA2026 World Cup</h2>
                    <p>{getFormattedTime(time)}</p>
            <p className="paragraph">A live countdown from any where, at any time, in any place to remind you how close we
                are to the 2026 World Cup!
            </p>
            </div>
        </div>
    </>
  )
}

export default Countdown
