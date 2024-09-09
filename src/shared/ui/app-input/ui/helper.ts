export enum IconPosition {
  'left',
  'right',
}
export enum tagInputEnum {
  'input',
  'textarea'
}

export type TTagInput = keyof typeof tagInputEnum;
export type TIconPosition = keyof typeof IconPosition;
