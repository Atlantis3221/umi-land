
import './_styles/global.scss'
import './_styles/reset.scss'
import './_styles/variables.scss'
import Header from '@/widgets/layout/Header/Header'
import { AppContainer } from '@/shared/ui/app-container/ui/app-container'
import HeroSection from '@/widgets/main/heroSection/HeroSection'

function App() {

  return (
    <div className="App">
      <Header />
      <HeroSection />
    </div>
  )
}

export default App
