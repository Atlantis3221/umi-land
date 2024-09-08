
import './_styles/global.scss'
import './_styles/reset.scss'
import './_styles/variables.scss'
import Header from '@/widgets/layout/Header/Header'
import HeroSection from '@/widgets/main/heroSection/HeroSection'
import { BuisenessSection } from '@/widgets/main/buisenessSection/BuisenessSection'
import { BlockchainSection } from '@/widgets/main/blockchainSection/BlockchainSection'

function App() {

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <BuisenessSection />
      <BlockchainSection />
    </div>
  )
}

export default App
