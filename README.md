# Social Poster ![Current Version](https://img.shields.io/badge/Social%20Post_v0.0.1-blueviolet)
This project is initially thought out and is being created as a replacement for my wife "A Social Media Manager" and we'll see where it goes from there.  The ideal features should look something like this
* Clients
	* Unlimited clients
	* Ability to have view a specific client
	* Ability to see all clients.
	* Ability to search for a specific list of clients
* Platforms
	* Facebook
	* Twitter
	* LinkedIn
* Automation
	* Scheduling
	* Updating
	* Alerts
		* Successful
		* One Time Alerts
		* Errors
		* Unsuccessful

This will be a long term project and welcome all contributors and feel free to take, reuse, re-purpose, submit errors, tickets, or just to say hi I am down for conversation.  =)
  
## Direction of Stack
* Frontend
	* **1React
	* UIKit
		* SCSS Tree shaking
	* React-Icons
	* Lodash
	* **2 SocketIO
	* **2 axios
* Backend
	* SocketIO
	* MongoDB (Scheduling, queuing, emails, alerts)
	* MySQL (Primary Storage, "Clients, tokens, previous attempts/successful posts, etc)
	* Express
	* Linux
	* Nginx "mainly for reverse proxy"
  
 **1 I switch to VueJS as I have a great deal more experience using Vue.  I choose React as a passion to learn it more in detail.
 **2 I added both SocketIO and axios as React development environment already uses a WebSocket for hot-updates so axios will be a fall back if for some reason cannot get SocketIO to function properly.
 
 ## Roadmap 
 ### Version 0.0.1
 * [x] Setup React-Create-App
 * [x] Setup Mock API Server
 * [x] Setup SocketIO
 * [ ] Setup MySQL
 * [ ] Setup MongoDB
 * [ ] Setup Virtual Machine for ideal end-game server
 * [ ] Design Login Process
 * [ ] Design Registration Process
