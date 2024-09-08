import { AppContainer } from '@/shared/ui/app-container/ui/app-container'
import { AppText } from '@/shared/ui/app-text'
import cls from './HeroSection.module.scss'
import { Download } from '@/shared/ui/download/ui/download'
import { Button } from '@/shared/ui/button'
import playButton from '@/shared/assets/icons/playButton.svg'
import check from '@/shared/assets/icons/check.svg'

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
						<div className={cls.icon} >
							<img src={check} />
						</div>
						<AppText text={"Вся первоначальная эмиссия отдана сообществу"} />
					</li>
					<li>
						<div className={cls.icon} >
							<img src={check} />
						</div>
						<AppText text={"Вся первоначальная эмиссия отдана сообществу"} />
					</li>
					<li>
						<div className={cls.icon} >
							<img src={check} />
						</div>
						<AppText text={"Вся первоначальная эмиссия отдана сообществу"} />
					</li>
					<li>
						<div className={cls.icon} >
							<img src={check} />
						</div>
						<AppText text={"Вся первоначальная эмиссия отдана сообществу"} />
					</li>
					<li>
						<div className={cls.icon} >
							<img src={check} />
						</div>
						<AppText text={"Вся первоначальная эмиссия отдана сообществу"} />
					</li>
				</ul>
				<hr className={cls.infoLine} />
				<div className={cls.infoButtons}>
					<div className={cls.buttonsWrapper}>
						<Button size='large' text={'Обмен UMI'} />
						<Button size='large' icon={false} text={'Как начать?'} theme='outline' />
					</div>
					<div className={cls.buttonsWrapper}>
						<AppText text={'Скачать:'} />
						<Download />
					</div>
				</div>
			</div>
			<div className={cls.video}>
				<div className={cls.circle}>
					<button className={cls.playButton}>
						<img src={playButton} />
						<div className={cls.playButtonInfo}>
							<AppText text={'Воспроизвести'} />
							<AppText text={'2:56'} />
						</div>
					</button>
					<div className={cls.info}>
						<h2>Узнать больше о UMI</h2>
						<p>Узнайте о всех возможностях блокчейна в нашем видео</p>
					</div>
				</div>

			</div>
		</AppContainer>
	)
}

export default HeroSection
