import React, { useState, useEffect } from "react"
import useTwiloVideo from "../hooks/use-twilio-video"
import { navigate } from "gatsby"
const Join = ({ location }) => {
  const defaultRoom =
    (location && location.state && location.state.roomName) || ""
  const { state, getRoomToken } = useTwiloVideo()
  const [identity, setIdentity] = useState("")
  const [roomName, setRoomName] = useState(defaultRoom)
  useEffect(() => {
    if (state.token && state.roomName) {
      navigate(`room/${state.roomName}`)
    }
  }, [state])

  const handleSubmit = e => {
    e.preventDefault()

    getRoomToken({ identity, roomName })
  }
  return (
    <>
      <h1> Start or Join a Video Call</h1>
      {/* <pre> {JSON.stringify(state, null, 2)}</pre> */}
      <form className="start-form" onSubmit={handleSubmit}>
        <label htmlFor="identity">
          DISPLAY NAME:
          <input
            type="text"
            id="identity"
            value={identity}
            onChange={e => setIdentity(e.target.value)}
          ></input>
        </label>
        <label htmlFor="roomName">
          Which Room Do you want to Join?
          <input
            type="text"
            id="roomName"
            value={roomName}
            onChange={e => setRoomName(e.target.value)}
          ></input>
        </label>
        <button type="submit"> Join Video Chat</button>
      </form>
    </>
  )
}
export default Join
