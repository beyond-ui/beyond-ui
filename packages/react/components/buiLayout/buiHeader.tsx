import React, { FC, ReactNode } from 'react'
import { BuiRootComponentCommonTypes } from '../buiStyled'
import { BuiFlexItem, BuiFlexItemProps } from '@prana-ui/bui/components'

export interface BuiHeaderProps extends BuiRootComponentCommonTypes, BuiFlexItemProps {
  children?: ReactNode
}

export const BuiHeader: FC<BuiHeaderProps> = ({ children, as, ...rest }: BuiHeaderProps) => {
  return (
    <BuiFlexItem as={as ? as : 'header'} {...rest}>
      {children}
    </BuiFlexItem>
  )
}
