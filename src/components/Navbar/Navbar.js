import React from 'react';
import logo_etherscan from '../../assets/logo_etherscan.svg'
const Navbar = () => {
    const nav = ["Home", "Blockchain", "Token", "NFTs", "Resources", "Developers", "More"]
    return (
        <nav className="p-4 shadow-md">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">
                        <img src={logo_etherscan} className='h-10 w-36' alt="log"/>
                    </div>
                    <ul className='flex justify-between space-x-3'>
                        {nav.map((item)=>{return(<li key={item}>{item}</li>)})}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;