export enum tagTextEnum {
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'span',
  'p',
}

export enum themeTextEnum {
  'white',
  'black',
  'grey',
  'orange',
  'blue',
  'red',
  'green',
}

export enum alignTextEnum {
  'left',
  'center',
  'right',
}

export type TTagText = keyof typeof tagTextEnum;
export type TThemeText = keyof typeof themeTextEnum;
export type TAlignText = keyof typeof alignTextEnum;
