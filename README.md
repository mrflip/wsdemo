# wsdemo

Simplest reasonable Websockets demo.

https://codesandbox.io/s/simplest-websocket-chat-demo-2lvj2

Demo: wss://2lvj2.sse.codesandbox.io/

Try it yourself using [wscat](https://www.npmjs.com/package/wscat) (You'll need to fork the sandbox and replace the "2lvj2" part with your url uniquer)

```
                                                
wscat -c wss://2lvj2.sse.codesandbox.io/ wss://codesandbox.io/s/simplest-websocket-chat-demo-2lvj2
Connected (press CTRL+C to quit)
< Welcome to EvenSlackerThanSlack :)
< {"ok":true,"message":"Heartbeat","respTS":1632003431615,"ticks":47,"live":470.386}
> {"messge": "HI!"}
< {"ok":true,"message":{"messge":"HI!"},"respTS":1632003437162,"ticks":47,"live":475.933}
< {"ok":true,"message":"Heartbeat","respTS":1632003441619,"ticks":48,"live":480.39}
> 
```




