import { classNames } from '@/shared/lib/class-names/class-names'
import { AppText } from '@/shared/ui/app-text'
import { TSizeButton, TThemeButton } from '@/shared/ui/button/ui/helper'
import { Icon } from '@/shared/ui/icon'
import { TIconTheme } from '@/shared/ui/icon/helper'
import React, { type ButtonHTMLAttributes, type FC } from 'react'
import arrowUp from '@/shared/assets/icons/arrow-up-right.svg'
import cls from './button.module.scss'

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: TThemeButton
	size?: TSizeButton
	text?: string
	price?: string
	icon?: boolean
	iconTheme?: TIconTheme
	isLoading?: boolean
	image?: string
	borderRadius?: number
	iconRight?: string
	uppercase?: boolean
}

export const Button: FC<AppButtonProps> = (props: AppButtonProps) => {
	const {
		className = '',
		theme = 'green',
		size = 'default',
		text = '',
		price = '',
		icon = true,
		iconTheme = 'none',
		children,
		uppercase = false,
		...otherProps
	} = props

	const buttonClasses = () => {
		return {
			[cls[theme]]: true,
			[cls[size]]: true,
			[cls.withPrice]: !!price?.length,
		}
	}

	return (
		<button
			type='button'
			className={classNames(cls.appButton, buttonClasses(), [className])}
			{...otherProps}
		>
			{text && (
				<AppText
					text={text}
					fontWeight={600}
					fontSize={16}
					lineHeight={14}
					align={'center'}
					upperCase={uppercase}
					className={classNames(cls.text, { [cls.shrink]: !!price.length }, [])}
				/>
			)}
			{icon && <img src={arrowUp} />}
			{children}
		</button>
	)
}
