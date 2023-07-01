import React, { FC, ReactNode } from 'react'
import { BuiRootComponentCommonTypes } from '../buiStyled'
import { BuiFlexBox, BuiFlexBoxProps } from '@prana-ui/bui/components'

export interface BuiLayoutProps extends BuiRootComponentCommonTypes, BuiFlexBoxProps {
  children?: ReactNode
}

export const BuiLayout: FC<BuiLayoutProps> = ({
  children,
  as,
  direction,
  ...rest
}: BuiLayoutProps) => {
  return (
    <BuiFlexBox
      as={as ? as : 'section'}
      spaceSize='none'
      direction={direction ? direction : 'column'}
      {...rest}
    >
      {children}
    </BuiFlexBox>
  )
}
