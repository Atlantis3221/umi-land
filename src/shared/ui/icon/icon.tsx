import React, { memo } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import cls from './icon.module.scss';
import { TIconTheme } from '@/shared/ui/icon/helper';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  size?: number;
  theme?: TIconTheme;
  url?: string;
  pointer?: boolean;
}

export const Icon = memo<IconProps>(function Icon(props: IconProps) {
  const {
    className = '',
    Svg,
    size = 24,
    theme = 'white',
    url = '',
    pointer = false,
    ...otherProps
  } = props;

  const IconClasses = () => {
    return {
      [cls[theme]]: true,
      [cls.pointer]: pointer,
    };
  };

  return (
    <Svg
      className={classNames(cls.icon, IconClasses(), [className])}
      height={size}
      width={size}
      // @ts-expect-error TODO: fix
      url={url}
      preserveAspectRatio={'xMidYMid meet'}
      {...otherProps}
    />
  );
});
