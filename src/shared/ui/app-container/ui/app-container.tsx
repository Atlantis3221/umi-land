import { classNames } from '@/shared/lib/class-names/class-names'
import cls from './app-container.module.scss'

export const AppContainer = (props) => {
	const { className = '', children } = props;
	return (
		<div className={classNames(cls.appContainer, {}, [className])}>
			{children}
		</div>
	)
}