import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Hero from './Pages/Hero'
import Main from './Pages/Main'
import Deposit from './Pages/Deposit'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

// 1. Get projectId
const projectId = '653a9d4ac000e644b7472298be285b91'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains,themeVariables: {
  '--w3m-accent': '#7b3fe4',
} })

function App() {
  return (
    <>
    <WagmiConfig config={wagmiConfig}
    >
      <Router>
      <Routes>
          <Route exact path="/" element={<Hero/>}/>
          <Route exact path="/main" element={<Main/>}/>
          <Route exact path="/deposit" element={<Deposit/>}/>
        </Routes>
      </Router>
    </WagmiConfig>
    </>
  )
}

export default App
