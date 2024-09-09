import { AppText } from '../../app-text';
import { Button } from '../../button'
import { Icon } from '../../icon'
import cls from './CourseSelector.module.scss';
import arrowUp from '@/shared/assets/icons/arrow-up-right.svg';


const courses = [
	{
		id: 1,
		text: '$',
		price: 10
	},
	{
		id: 2,
		text: 'BTC',
		price: 10
	},
	{
		id: 3,
		text: '€',
		price: 10
	},
	{
		id: 4,
		text: '₽',
		price: 10
	}
]

export const CourseSelector = () => {
	return (
		<div className={cls.courseSelector}>
			<AppText
				text={'145,789.12'}
				fontSize={28}
				lineHeight={34}
				className={cls.title}
			/>
			<div className={cls.courseRow}>
				<div className={cls.signs}>
				{courses.map(course => (
					<div key={course.id} className={cls.courseSign}>
							<AppText
								text={course.text}
								fontSize={14}
								lineHeight={20}
								theme={'white'}/>
						</div>
				))}
				</div>
				<hr className={cls.courseLine} />
					<AppText className={cls.courseValue} text={'~96934.1₽'} />
			</div>
		</div>
	)
}