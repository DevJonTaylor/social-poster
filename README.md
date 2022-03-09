
# Nuketown Social Poster ![Current Version](https://img.shields.io/badge/Social%20Poster-v0.1.0-blueviolet)

A web app that allows creating, reading, updating, and removing (not yet posted) posts to social media platforms. This will allow you the ability to manage many different accounts ideal for a business situation for Social Media Managers in mind.

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


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The responsive version for wallets and wallet adapter may not function or work as expected for mobile based on plugin and wallet compatibility. For more code examples and implementations please visit the [Solana Cookbook](https://solanacookbook.com/)

## Installation

```bash
npm install
# or
yarn install
```

## Build and Run

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Features

Each Scaffold will contain at least the following features:

```
Wallet Integration with Auto Connec / Refresh

State Management

Components: One or more components demonstrating state management

Web3 Js: Examples of one or more uses of web3 js including a transaction with a connection provider

Sample navigation and page changing to demonstate state

Clean Simple Styling

Notifications (optional): Example of using a notification system

```

A Solana Components Repo will be released in the near future to house a common components library.


### Structure

The scaffold project structure may vary based on the front end framework being utilized. The below is an example structure for the Next js Scaffold.

```
├── public : publically hosted files
├── src : primary code folders and files
│   ├── components : should house anything considered a resuable UI component
│   ├── contexts` : any context considered reusable and useuful to many compoennts that can be passed down through a component tree
│   ├── hooks` : any functions that let you 'hook' into react state or lifecycle features from function components
│   ├── models` : any data structure that may be reused throughout the project
│   ├── pages` : the pages that host meta data and the intended `View` for the page
│   ├── stores` : stores used in state management
│   ├── styles` : contain any global and reusable styles
│   ├── utils` : any other functionality considered reusable code that can be referenced
│   ├── views` : contains the actual views of the project that include the main content and components within
style, package, configuration, and other project files

```

## Contributing

Anyone is welcome to create an issue to build, discuss or request a new feature or update to the existing code base. Please keep in mind the following when submitting an issue. We consider merging high value features that may be utilized by the majority of scaffold users. If this is not a common feature or fix, consider adding it to the component library or cookbook. Please refer to the project's architecture and style when contributing.

If submitting a feature, please reference the project structure shown above and try to follow the overall architecture and style presented in the existing scaffold.

### Committing

To choose a task or make your own, do the following:

1. [Add an issue](https://github.com/solana-dev-adv/solana-dapp-next/issues/new) for the task and assign it to yourself or comment on the issue
2. Make a draft PR referencing the issue.

The general flow for making a contribution:

1. Fork the repo on GitHub
2. Clone the project to your own machine
3. Commit changes to your own branch
4. Push your work back up to your fork
5. Submit a Pull request so that we can review your changes

**NOTE**: Be sure to merge the latest from "upstream" before making a
pull request!

You can find tasks on the [project board](https://github.com/solana-dev-adv/solana-dapp-next/projects/1)
or create an issue and assign it to yourself.


## Learn More Next Js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
