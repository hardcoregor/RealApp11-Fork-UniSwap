import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../moralis-logo.svg';
import Eth from '../eth.svg';

function Header({ connect, isConnected, address }) {
  return (
    <header>
      <div className='leftH'>
        <img src={Logo} className="logo" alt="logo" />
        <Link to="/" className='link'>
          <div className='headerItem'>Swap</div>
        </Link>
        <Link to="/tokens" className='link'>
          <div className='headerItem'>Tokens</div>
        </Link>
      </div>
      <div className='rightH'>
        <div className='headerItem'>
          <img src={Eth} alt="eth" className='eth' />
          Ethereum
        </div>
        <div className='connectButton' onClick={connect}>
          {isConnected ? (address.slice(0,4) +"..." +address.slice(38)) : 'Connect'}
        </div>
      </div>
    </header>
  )
}

export default Header