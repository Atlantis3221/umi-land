import { classNames } from '@/shared/lib/class-names/class-names'
import { AppText } from '@/shared/ui/app-text'
import { Icon } from '@/shared/ui/icon'
import React, {
	type FC,
	InputHTMLAttributes,
	memo,
	useEffect,
	useRef,
	useState,
} from 'react'
import cls from './app-input.module.scss'
import { TIconPosition, TTagInput } from './helper'
type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>

export interface AppInputProps extends HTMLInputProps {
	className?: string
	placeholder?: string
	value?: string
	label?: string
	onChange?: (value: string) => void
	icon?: React.VFC<React.SVGProps<SVGSVGElement>>
	iconPosition?: TIconPosition
	tag?: TTagInput
	isError?: boolean
	sendButton?: boolean
	clearButton?: boolean
	onClickIcon?: () => void
	onClearValue?: () => void
	onSendCode?: () => void
	onFocus?: () => void
	onBlur?: () => void
}

export const AppInput: FC<AppInputProps> = memo((props: AppInputProps) => {
	const {
		className = '',
		placeholder = '',
		value,
		onChange,
		type = 'text',
		label = '',
		autoFocus,
		tag = 'input',
		icon,
		iconPosition = 'left',
		isError = false,
		onBlur,
		onFocus,
		...otherProps
	} = props

	const CustomTag = tag

	const inputRef = useRef<HTMLInputElement>(null)
	const [isFocused, setIsFocused] = useState(false)

	useEffect(() => {
		if (autoFocus) {
			setIsFocused(true)
			inputRef.current?.focus()
		}

		// return () => setIsFocused(false);
	}, [autoFocus, isFocused])

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value.trim())
	}

	const onBlurHandler = () => {
		setIsFocused(false)
		onBlur?.()
	}

	const onFocusHandler = () => {
		setIsFocused(true)
		onFocus?.()
	}

	const mods = {
		[cls.focused]: isFocused,
		[cls.error]: isError,
	}

	return (
		<div className={classNames(cls.appInput, {}, [className])}>
			{label && (
				<AppText
					text={label}
					fontSize={16}
					lineHeight={27}
					theme={'white'}
					className={cls.label}
				/>
			)}
			<div className={classNames(cls.wrapper, mods, [])}>
				<CustomTag
					ref={inputRef}
					className={cls.input}
					type={type}
					value={value}
					onChange={onChangeHandler}
					onBlur={onBlurHandler}
					onFocus={onFocusHandler}
					onWheel={e => {
						if (e.target instanceof HTMLInputElement) e.target.blur()
					}}
					{...otherProps}
					{...(placeholder ? { placeholder: placeholder } : {})}
				/>
			</div>
		</div>
	)
})
