export enum themeButtonEnum {
  'green',
  'outline',
  'round',
}

export enum sizeButtonEnum {
  'small',
  'medium',
  'large',
}

export type TThemeButton = keyof typeof themeButtonEnum;
export type TSizeButton = keyof typeof sizeButtonEnum;
