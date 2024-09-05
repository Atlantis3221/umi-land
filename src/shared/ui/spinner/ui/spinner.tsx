import { classNames } from '@/shared/lib/class-names/class-names';
import cls from './spinner.module.scss';
import { type FC } from 'react';
import { TSpinnerSize, TSpinnerTheme } from './helper';

interface SpinnerProps {
  className?: string;
  size?: TSpinnerSize;
  theme?: TSpinnerTheme;
}

export const Spinner: FC<SpinnerProps> = (props: SpinnerProps) => {
  const { className = '', size = 'small', theme = 'white' } = props;

  const mods = {
    [cls[size]]: true,
    [cls[theme]]: true,
  };

  return (
    <div className={classNames(cls.spinner, mods, [className])}>
      <svg viewBox="0 0 50 50">
        <circle className={cls.path} cx="25" cy="25" r="20" fill="none" strokeWidth="3" />
      </svg>
    </div>
  );
};
