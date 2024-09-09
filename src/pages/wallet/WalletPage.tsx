import { CreateWallet } from '@/widgets/wallet/createWallet/CreateWallet'
import { JoinWallet } from '@/widgets/wallet/joinWallet/JoinWallet'
import { Wallet } from '@/widgets/wallet/wallet/Wallet'

export const WalletPage = () => {
	return (
		<div>
			<JoinWallet />
			<CreateWallet />
			<Wallet />
		</div>
	)
}