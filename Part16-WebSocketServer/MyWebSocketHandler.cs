using System;
using Microsoft.Web.WebSockets;

namespace MyWebSocket
{
    public class MyWebSocketHandler : WebSocketHandler
    {
        private int clientsConnectCount;

        public override void OnOpen()
        {
            clientsConnectCount++;
        }

        public override void OnMessage(string message)
        {
            this.Send(clientsConnectCount + " " + message);
        }
    }
}