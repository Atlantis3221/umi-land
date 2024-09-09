import { AppText } from '@/shared/ui/app-text';
import { AppContainer } from '@/shared/ui/app-container/ui/app-container';
import cls from './Wallet.module.scss';
import { CourseSelector } from '@/shared/ui/wallet/courseSelector/CourseSelector'
import { AddressWrapper } from '@/shared/ui/wallet/addressWrapper/AddressWrapper'

export const Wallet = () => {
	return (
		<AppContainer className={cls.wallet}>
			<AppText
				text={'UMI-wallet'}
				fontSize={48}
				lineHeight={64}
				className={cls.title}
			/>
			<CourseSelector />
			<AddressWrapper />
		</AppContainer>
	)
}