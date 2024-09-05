import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from '@/shared/lib/class-names/class-names';
import { TAlignText, TTagText, TThemeText } from '@/shared/ui/app-text/ui/helper';
import cls from './app-text.module.scss';

interface AppTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: TThemeText;
  text: string | number;
  fontWeight?: number;
  fontSize?: number;
  lineHeight?: number;
  tag?: TTagText;
  align?: TAlignText;
  upperCase?: boolean;
  onClick?: () => void;
}

export const AppText: FC<AppTextProps> = (props) => {
  const {
    className = '',
    theme = 'white',
    text,
    fontWeight = 400,
    fontSize = 14,
    lineHeight = 16,
    tag = 'p',
    align = 'left',
    upperCase = false,
    onClick,
  } = props;

  const CustomTag = tag;

  const textStyle = () => {
    return {
      fontSize: `${fontSize}px`,
      lineHeight: `${lineHeight}px`,
      fontWeight: fontWeight,
      textAlign: align,
    };
  };

  return (
    <CustomTag
      style={textStyle()}
      className={classNames(cls.appText, { [cls.upperCase]: upperCase }, [cls[theme], className])}
      onClick={onClick}
    >
      {text}
    </CustomTag>
  );
};
