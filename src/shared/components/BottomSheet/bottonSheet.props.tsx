import {ReactNode} from 'react';

export interface BottomSheetProps {
  show?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}
