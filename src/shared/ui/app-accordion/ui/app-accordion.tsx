import { classNames } from '@/shared/lib/class-names/class-names';
import cls from './app-accordion.module.scss';
import { type FC, useState } from 'react';

interface AppAccordionProps {
  className?: string;
  header: JSX.Element;
  content: JSX.Element;
  isOpen?: (value: boolean) => void;
}

export const AppAccordion: FC<AppAccordionProps> = (props: AppAccordionProps) => {
  const { className = '', header, content, isOpen } = props;

  const [opened, setOpened] = useState(false);

  const changeActive = () => {
    setOpened(!opened);
    isOpen?.(!opened);
  };

  return (
    <div
      className={classNames(cls.appAccordion, { [cls.opened]: opened, opened: opened }, [
        className,
      ])}
    >
      <div className={classNames(cls.header, {}, [])} onClick={changeActive}>
        {header}
      </div>
      <div className={cls.content}>{content}</div>
    </div>
  );
};
