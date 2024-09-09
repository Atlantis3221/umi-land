import HeroSection from '@/widgets/main/heroSection/HeroSection'
import { BuisenessSection } from '@/widgets/main/buisenessSection/BuisenessSection'
import { BlockchainSection } from '@/widgets/main/blockchainSection/BlockchainSection'
import { StackingSection } from '@/widgets/main/stackingSection/StackingSection'
import { BurnSection } from '@/widgets/main/burnSection/BurnSection'
import { TokenomicSection } from '@/widgets/main/tokenomicSection/TokenomicSection'
import { MissionSection } from '@/widgets/main/missionSection/MissionSection'
import { AllAboutSection } from '@/widgets/main/allAboutSection/allAboutSection'

export const MainPage = () => {
	return (
		<>
			<HeroSection />
      <BuisenessSection />
      <BlockchainSection />
      <StackingSection />
      <BurnSection />
      <TokenomicSection />
      <MissionSection />
      <AllAboutSection />
		</>
	)
}