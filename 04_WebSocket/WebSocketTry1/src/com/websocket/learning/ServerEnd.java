package com.websocket.learning;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/serverend")
public class ServerEnd {
	@OnOpen
	public void handleOpen()
	{
		System.out.println("Conn Open by client");
	}
	
	@OnMessage
	public String handleMessage(String msg)
	{
		System.out.println("Got from client: " + msg);
		return "GOT MSG: " + msg;
	}
	
	@OnClose
	public void handleClose()
	{
		System.out.println("Conn closed by client");
	}
	
	@OnError
	public void handleError(Throwable t)
	{
		t.printStackTrace();
	}
}
