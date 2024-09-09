import { AppContainer } from '@/shared/ui/app-container/ui/app-container'
import { AppInput } from '@/shared/ui/app-input'
import { AppText } from '@/shared/ui/app-text'
import { Button } from '@/shared/ui/button'
import cls from './JoinWallet.module.scss'

export const JoinWallet = () => {
	return (
		<AppContainer className={cls.joinWallet}>
			<div className={cls.joinWalletWrapper}>
				<AppText
					text={'Join Wallet'}
					fontSize={48}
					lineHeight={64}
					className={cls.title}
				/>
				<AppInput label='Wallet Address' tag={'textarea'} className={cls.mnemonicInput} />
				<div className={cls.buttons}>
					<Button text={'Войти'} size='large' />
					<Button text={'Создать кошелек'} theme='outline' size='large' icon={false} />
				</div>
			</div>
		</AppContainer>
	)
}
