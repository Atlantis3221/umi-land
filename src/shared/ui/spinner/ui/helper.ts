enum SpinnerSize {
  'small',
  'medium',
  'large',
}

enum SpinnerTheme {
  'white',
  'black',
}

export type TSpinnerSize = keyof typeof SpinnerSize;
export type TSpinnerTheme = keyof typeof SpinnerTheme;
