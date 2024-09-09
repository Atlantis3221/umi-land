import { classNames } from '@/shared/lib/class-names/class-names';
import cls from './app-select.module.scss';
import React, { type FC, ReactElement, ReactNode, useState } from 'react';
import { useOutsideClick } from '@/shared/hooks/use-outside-click';
import {
  TAppSelectHorizontalPosition,
  TAppSelectVerticalPosition,
} from '@/shared/ui/app-select/ui/helper';

interface AppSelectProps {
  className?: string;
  dropdownClassName?: string;
  activator: ReactNode;
  dropdown: ReactElement;
  verticalPosition?: TAppSelectVerticalPosition;
  horizontalPosition?: TAppSelectHorizontalPosition;
  onToggle?: (state: boolean) => void;
}

export const AppSelect: FC<AppSelectProps> = (props: AppSelectProps) => {
  const {
    className = '',
    dropdownClassName = '',
    activator,
    dropdown,
    verticalPosition = 'bottom',
    horizontalPosition = 'left',
    onToggle,
  } = props;

  const ref = useOutsideClick(() => {
    if (isOpen) {
      setIsOpen(false);
      onToggle?.(isOpen);
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
    onToggle?.(isOpen);
  };

  const clickDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
    // event.stopPropagation();
  };

  const log = () => {
    console.log('log');
  };

  const AppSelectClasses = () => {
    return {
      [cls[verticalPosition]]: true,
      [cls[horizontalPosition]]: true,
    };
  };

  return (
    <div ref={ref} className={classNames(cls.appSelect, AppSelectClasses(), [className])}>
      <div className={cls.activator} onClick={(e) => toggleDropdown(e)}>
        {activator}
        <div
          className={classNames(cls.dropdown, { [cls.hide]: !isOpen }, [dropdownClassName])}
          onClick={(e) => clickDropdown(e)}
        >
          {React.cloneElement(dropdown as ReactElement, { onClick: () => log() })}
        </div>
      </div>
    </div>
  );
};
