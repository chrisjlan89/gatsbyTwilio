import React, { useEffect } from "react"
import { Router } from "@reach/router"
import VideoDisplay from "../components/video-display"
import Layout from "../components/layout"
import { navigate } from "gatsby"

const BounceToHome = () => {
  useEffect(() => {
    navigate("/", { replace: true })
  }, [])
  return null
}

const Room = () => {
  return (
    <Layout>
      <Router>
        <VideoDisplay path="room/:roomID" />
        <BounceToHome default />
      </Router>
    </Layout>
  )
}

export default Room
