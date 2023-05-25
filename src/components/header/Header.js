import React from 'react';


const Header = React.memo(() => {
    return (
        <div className="w-full h-16 py-3 bg-violet-800">

            <nav className="text-3xl h-full text-white font-semibold flex justify-between items-center mx-20">
                <h1>SQL Editor</h1>
                <ul className="text-xl flex justify-end items-center">
                    <li className="mx-5 cursor-pointer group-hover:scale-105 group-hover:underline">
                        Tables
                    </li>
                    <li className="mx-5 cursor-pointer">
                        Queries
                    </li>
                    <li className="mx-5 cursor-pointer">
                        About
                    </li>
                </ul>
            </nav>
        </div>
    );
})

export default Header;