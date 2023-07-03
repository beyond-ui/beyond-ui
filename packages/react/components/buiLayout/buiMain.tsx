import React, { FC, ReactNode } from 'react'
import { BuiRootComponentCommonTypes } from '../buiStyled'
import { BuiFlexItem, BuiFlexItemProps } from '../buiFlexBox'

export interface BuiMainProps extends BuiRootComponentCommonTypes, BuiFlexItemProps {
  children?: ReactNode
}

export const BuiMain: FC<BuiMainProps> = ({ children, as, ...rest }: BuiMainProps) => {
  return (
    <BuiFlexItem as={as ? as : 'main'} {...rest}>
      {children}
    </BuiFlexItem>
  )
}
