import { AppContainer } from '@/shared/ui/app-container/ui/app-container'
import { AppInput } from '@/shared/ui/app-input'
import { AppText } from '@/shared/ui/app-text'
import { Button } from '@/shared/ui/button'
import cls from './CreateWallet.module.scss'

export const CreateWallet = () => {
	return (
		<AppContainer className={cls.createWallet}>
			<div className={cls.createWalletWrapper}>
				<AppText
					text={'Create Wallet'}
					fontSize={48}
					lineHeight={64}
					className={cls.title}
				/>
				<AppText text={'Для начала сгенерируйте мнемоническую фразу'} />
				<AppInput label='Mnemonic phrase:' tag={'textarea'} className={cls.mnemonicInput} />
				<div className={cls.buttons}>
					<Button text={'Сгенерировать'} />
					<Button text={'Вход'} theme='outline' size='large' icon={false} />
				</div>
			</div>
		</AppContainer>
	)
}
