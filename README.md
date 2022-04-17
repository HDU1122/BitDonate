# BitDonate
A decentralized web application which helps people or organizations in need to raise money.

## How to use
1. Go to your working directory and run `git clone` to download the repository.
2. Run `cd client` and run `npm install` to install all the dependencies.
3. Run `npm start` to start the web application.
4. Visit `localhost:3000` to view the website.

## Inspiration
For the past two years, several dramatic events happened around the world that impact people's life. COVID-19 stucks everyone at home. Some of them ended in losing their jobs, causing their lives harder and harder. Even worse, millions of lives are taken away by the pandemic. More recently, the war between Ukraine and Russia disrupts the lives of people from both Ukraine and Russia. Under this circumstances, online donation can help people in need to receive kindness from people around the world, but how can people assure that their money goes to the right hand when all the data are kept secret by the organizations? The purpose of our application is to create a decentralized platform for people to donate money to people in need, and show the detail of every transaction.

## Functionalities
### Connect to your digital wallet
By clicking the `Connect Wallet` button on the upper right corner, users are able to connect their MetaMask wallet, so that they can donate money or start a donation for themselves. 

### View different donation posts and donate money
By clicking on the post on home page, we are able to see the details of the donation event to decide whether donate money or not.  

### Create post to raise money
By clicking the `Ask Donate` button on the upper right corner, users are able to create a donation with their name, description, and images about them so that they can get other users' attention. During the process of creating post, our app will get the address of the user's wallet, so that every donation will go to their wallet directly.

### Transparent transaction
Users can see all their donation transactions on their digital wallet. Users can check the full details of transaction to verify the authenticity. Every transaction is guarenteed to be secure since it can be verified by every address on the blockchain.

## How we build the Frontend
We use React.js, tailwindCSS, solidity, and Redux to build the frontend. React.js is used to build the UI components and dynamic pages of the web app, alongside with tailwindCSS to ease the process of styling and designing.

## How we build our app on blockchain

## Challenges we ran into
The most difficult part is to implement the interface between blockchain and frontend. Blockchain is a totally new area for us to explore, and we did our best to learn the basic idea and APIs in just a weekend. We still encounter some problems on how to connect to the personal wallet using MetaMask API, and how to store the data onto the blockchain. Storing all the relating data of each donation on blockchain will be expensive, both in the aspect of computational complexity and cost. In order to reduce the gas fee charged by the blockchain, we decided to store large data such as images into Firebase and store the url into the blockchain. Also, we ran into some troubles finding getting the address of each user.
