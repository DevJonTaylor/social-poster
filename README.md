
# Social Poster ![Current Version](https://img.shields.io/badge/Social%20Poster-v0.0.1-blueviolet)  
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
   * MongoDB - [MongoDB - https://dbdiagram.io/d/5dd7ed5eedf08a25543e3f76](https://dbdiagram.io/d/5dd7ed5eedf08a25543e3f76)
   * [MySQL (Primary Storage) - https://dbdiagram.io/d/5dd811daedf08a25543e40b2](https://dbdiagram.io/d/5dd811daedf08a25543e40b2)
   * Express
		   * MicroServices to perform actions using WebSockets
			   * Social Posts
				   * Scheduling
				   * Updating
				   * Notifications during the automation process
			   * Chats/Team Chats
				   * Sending
				   * Receiving
				   * Has Read Notifications "Direct Messaging Only"
				   * Is Typing Notifications
   * Nginx "mainly for reverse proxy"  
   * Linux
   
 ## Roadmap   
 ### Version 0.0.1  
 * [x] Setup React-Create-App  
 * [x] Setup Mock API Server  
 * [x] Setup SocketIO  
 * [x] Setup MySQL  
 * [ ] Setup MongoDB  
 * [ ] Setup Virtual Machine for ideal end-game server  
 * [ ] Design Login Process  
 * [ ] Design Registration Process

## I am amazing! Take that JON!!!!!!