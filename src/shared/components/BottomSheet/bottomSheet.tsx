import React, {useCallback, useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {Portal} from '@gorhom/portal';
import {StyledContainer, StyledContentContainer} from './bottomSheet.styled';
import {BottomSheetProps} from './bottonSheet.props';

export const CustomBottomSheet: React.FC<BottomSheetProps> = ({
  onClose,
  show,
  children,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    if (index == -1) {
      onClose && onClose();
    }
  }, []);
  if (!show) {
    return null;
  }
  return (
    <Portal hostName="bottomsheet">
      <StyledContainer>
        <BottomSheet
          enablePanDownToClose
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <StyledContentContainer>{children}</StyledContentContainer>
        </BottomSheet>
      </StyledContainer>
    </Portal>
  );
};
