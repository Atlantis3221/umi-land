import React from 'react';
import styles from './Header.module.scss';
import { Button } from '@/shared/ui/button'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <img src="/path-to-your-logo.png" alt="UMI Logo" />
        </div>

        <nav className={styles.headerNav}>
          <ul>
            <li><a href="#umi">О UMI</a></li>
            <li><a href="#ecosystem">Экосистема</a></li>
            <li><a href="#tools">Инструменты</a></li>
            <li><a href="#support">Поддержка</a></li>
          </ul>
        </nav>

        <div className={styles.headerActions}>
          
          <Button text='Обмен UMI' size='small' />
          <Button text='Как начать?' theme='outline' size='small' />

          <div className={styles.headerIcons}>
            <i className="fas fa-search"></i>
            <i className="fas fa-wallet"></i>
            <i className="fas fa-user"></i>
          </div>

          <div className={styles.headerLang}>
            <select>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;