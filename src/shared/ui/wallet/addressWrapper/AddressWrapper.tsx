import { AppText } from '../../app-text';
import cls from './AddressWrapper.module.scss';
import { Icon } from '../../icon';
import ArrowUp from '@/shared/assets/icons/arrow-up-right.svg';

export const AddressWrapper = () => {
	return (
		<div className={cls.addressWrapper}>
			<AppText
				text={'Ваш адрес:'}
				fontSize={16}
				lineHeight={27}
			/>
			<AppText
				text={'umitrade1qqqumpt2jchfa63qc0jxztud7twd5x89ya49h58sw34hdls8kl3a60cl4qmrf'}
			/>
			<div className={cls.copyIcon}>
				<ArrowUp />
			</div>
		</div>
	);
}