import { WebSocketServer } from "ws"
const wss = new WebSocketServer({ port: 8080 })

function parseData(data) {
  try {
    return { ok: true, message: JSON.parse(data) }
  } catch (err) {
    return { ok: false, err: err.message }
  }
}

const HEARTBEAT_TIME = 10_000

let TICKS = 0
const START = Date.now()

function sendToAll(wss, msg) {
  wss.clients.forEach((client) => {
    const respTS = Date.now()
    const live = (respTS - START) / 1000
    const body = JSON.stringify({ ...msg, respTS, ticks: TICKS, live })
    client.send(body)
  })
}

setInterval(() => {
  TICKS += 1
  sendToAll(wss, { ok: true, message: "Heartbeat" })
}, HEARTBEAT_TIME)

wss.on("connection", (ws) => {
  ws.send("Welcome to EvenSlackerThanSlack :)")

  ws.on("message", (data) => {
    const message = parseData(data)
    const resp = { ...message }
    sendToAll(wss, resp)
  })
})
