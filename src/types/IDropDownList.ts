export interface IDropDownListState {
  options: string[];
  label: string;
  getValue: (value: string) => void;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export type IWrapper = Pick<
  IDropDownListState,
  'top' | 'bottom' | 'left' | 'right'
>;
