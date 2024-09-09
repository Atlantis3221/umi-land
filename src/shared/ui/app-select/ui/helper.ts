export enum AppSelectVerticalPosition {
  'top',
  'bottom',
}

export enum AppSelectHorizontalPosition {
  'left',
  'right',
}

export type TAppSelectVerticalPosition = keyof typeof AppSelectVerticalPosition;
export type TAppSelectHorizontalPosition = keyof typeof AppSelectHorizontalPosition;
