import { AppContainer } from '@/shared/ui/app-container/ui/app-container'
import { AppText } from '@/shared/ui/app-text'
import cls from './HeroSection.module.scss'

const HeroSection = () => {
	return (
		<AppContainer className={cls.heroSection}>
			<div className={cls.heroInfo}>
				<AppText
					fontSize={58}
					lineHeight={63}
					text={'UMI — Криптовалюта и Экосистема для бизнеса и развлечений'}
				/>
				<ul className={cls.infoList}>
					<li>
						<div className={cls.icon} />
						<AppText text={"Вся первоначальная эмиссия отдана сообществу"}/>
					</li>
					<li>
						<div className={cls.icon} />
						<AppText text={"Вся первоначальная эмиссия отдана сообществу"}/>
					</li>
					<li>
						<div className={cls.icon} />
						<AppText text={"Вся первоначальная эмиссия отдана сообществу"}/>
					</li>
					<li>
						<div className={cls.icon} />
						<AppText text={"Вся первоначальная эмиссия отдана сообществу"}/>
					</li>
					<li>
						<div className={cls.icon} />
						<AppText text={"Вся первоначальная эмиссия отдана сообществу"}/>
					</li>
				</ul>
				<hr className={cls.infoLine} />
				<div className={cls.infoButtons} />
			</div>
			<div className={cls.heroVideo}></div>
		</AppContainer>
	)
}

export default HeroSection
