import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Web3 from 'web3';
import { ethers } from "ethers";

export default function Navbar() {

    function search() {}

    const [searchValue, setSearchValue] = useState("");
    return (
        <div className='flex flex-row items-center justify-between w-[1320px] py-30px'>
            <Link to="/">
                <div id="logo">
                    BitFund
                </div>
            </Link>
            <div id="searchBar" className="flex items-center justify-between rounded-10px border-0.5px border-gray-300 bg-white h-50px w-[800px] text-gray-200">
                <input id="search term" className="w-full border-0 mx-5 py-2 rounded-lg focus:outline-none text-14px text-gray-500 placeholder-gray-200" placeholder="Look up ways to help" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
                <button onClick={() => search()} className="flex justify-center items-center rounded-10px bg-gradient-to-r from-blue-400 to-blue-500 opacity-60 w-50px h-35px mr-10px hover:cursor-pointer">
                    <div className="w-20px h-20px">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5234 8.54252C15.5234 12.5919 12.3066 15.835 8.38672 15.835C4.46681 15.835 1.25 12.5919 1.25 8.54252C1.25 4.49318 4.46681 1.25 8.38672 1.25C12.3066 1.25 15.5234 4.49318 15.5234 8.54252Z" stroke="white" stroke-width="2.5"/>
                            <rect width="2.40176" height="7.52443" rx="1.20088" transform="matrix(0.70057 -0.713584 0.70057 0.713584 13.0459 14.6307)" fill="white"/>
                        </svg>
                    </div>
                </button>
            </div>
            <div id="Buttons" className='flex flex-row space-x-30px'>
                <AskDonate />
                <ConnectToWallet />
            </div>
        </div>
    )
}

function AskDonate() {
    return (
        <Link to="/askdonate">
            <div className='flex justify-center items-center w-[150px] h-50px rounded-10px bg-blue-300 text-16px text-white font-semibold leading-none hover:bg-blue-200'>Ask Donate</div>
        </Link>
    )
}

function ConnectToWallet() {

    const [walletConnected, setWalletConnected] = useState(false)

    const [data, setdata] = useState({
        address: "",
        Balance: null,
      });

    let web3;
    function handleConnect() {
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
            window.ethereum.request({ method: "eth_requestAccounts" })
            web3 = new Web3(window.ethereum)
            setWalletConnected(true);
        } else {
            console.log("error")
        }
    }

    // function connectToWallet() {

    //     console.log(getbalance())
    //     // Asking if metamask is already present or not
    //     if (window.ethereum) {
    
    //         // res[0] for fetching a first wallet
    //         window.ethereum
    //         .request({ method: "eth_requestAccounts" })
    //         .then((res) => accountChangeHandler(res[0]));
    //     } else {
    //         alert("install metamask extension!!");
    //     }    
    // }

    // const getbalance = (address) => {
  
    //     // Requesting balance method
    //     window.ethereum
    //       .request({ 
    //         method: "eth_getBalance", 
    //         params: [address, "latest"] 
    //       })
    //       .then((balance) => {
    //         // Setting balance
    //         setdata({
    //           Balance: ethers.utils.formatEther(balance),
    //         });
    //       });
    //   };

    // // Function for getting handling all events
    // const accountChangeHandler = (account) => {
    //     // Setting an address data
    //     setdata({
    //     address: account,
    //     });
    
    //     // Setting a balance
    //     getbalance(account);
    // };


        if (walletConnected){
            return(
                <button onClick={() => handleConnect()}>
                    <div className='flex flex-row items-center justify-center w-[180px] h-50px rounded-10px bg-blue-400 space-x-[5px] hover:bg-blue-200'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 5.6052H2.25V4.8552L18.75 3.5352V4.8552H21V2.6052C21 0.955204 19.6635 -0.202796 18.0315 0.0297041L2.97 2.1807C1.3365 2.4147 0 3.9552 0 5.6052V20.6052C0 21.4009 0.31607 22.1639 0.87868 22.7265C1.44129 23.2891 2.20435 23.6052 3 23.6052H21C21.7956 23.6052 22.5587 23.2891 23.1213 22.7265C23.6839 22.1639 24 21.4009 24 20.6052V8.6052C24 7.80955 23.6839 7.04649 23.1213 6.48388C22.5587 5.92127 21.7956 5.6052 21 5.6052ZM18.75 16.1142C18.4544 16.1141 18.1618 16.0558 17.8887 15.9426C17.6157 15.8294 17.3676 15.6635 17.1587 15.4544C16.9498 15.2454 16.7841 14.9972 16.671 14.7241C16.558 14.451 16.4999 14.1583 16.5 13.8627C16.5001 13.5671 16.5584 13.2745 16.6716 13.0014C16.7848 12.7284 16.9507 12.4803 17.1598 12.2714C17.3688 12.0625 17.617 11.8968 17.8901 11.7837C18.1632 11.6707 18.4559 11.6126 18.7515 11.6127C19.3484 11.6129 19.9208 11.8502 20.3428 12.2725C20.7648 12.6947 21.0017 13.2673 21.0015 13.8642C21.0013 14.4611 20.764 15.0335 20.3417 15.4555C19.9195 15.8775 19.3469 16.1144 18.75 16.1142Z" fill="white"/>
                        </svg>
                        <div className='text-16px text-white font-semibold leading-none'>Connect Wallet</div>

                    </div>
                </button>
            )
        }else{
            return(
                <button onClick={() => handleConnect()}>
                    <div className='flex flex-row items-center justify-center w-[180px] h-50px rounded-10px bg-blue-400 space-x-[5px] hover:bg-blue-200'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 5.6052H2.25V4.8552L18.75 3.5352V4.8552H21V2.6052C21 0.955204 19.6635 -0.202796 18.0315 0.0297041L2.97 2.1807C1.3365 2.4147 0 3.9552 0 5.6052V20.6052C0 21.4009 0.31607 22.1639 0.87868 22.7265C1.44129 23.2891 2.20435 23.6052 3 23.6052H21C21.7956 23.6052 22.5587 23.2891 23.1213 22.7265C23.6839 22.1639 24 21.4009 24 20.6052V8.6052C24 7.80955 23.6839 7.04649 23.1213 6.48388C22.5587 5.92127 21.7956 5.6052 21 5.6052ZM18.75 16.1142C18.4544 16.1141 18.1618 16.0558 17.8887 15.9426C17.6157 15.8294 17.3676 15.6635 17.1587 15.4544C16.9498 15.2454 16.7841 14.9972 16.671 14.7241C16.558 14.451 16.4999 14.1583 16.5 13.8627C16.5001 13.5671 16.5584 13.2745 16.6716 13.0014C16.7848 12.7284 16.9507 12.4803 17.1598 12.2714C17.3688 12.0625 17.617 11.8968 17.8901 11.7837C18.1632 11.6707 18.4559 11.6126 18.7515 11.6127C19.3484 11.6129 19.9208 11.8502 20.3428 12.2725C20.7648 12.6947 21.0017 13.2673 21.0015 13.8642C21.0013 14.4611 20.764 15.0335 20.3417 15.4555C19.9195 15.8775 19.3469 16.1144 18.75 16.1142Z" fill="white"/>
                        </svg>
                        <div className='text-16px text-white font-semibold leading-none'>Disconnect Wallet</div>

                    </div>
                </button>
            )
        }
        
        
    
}