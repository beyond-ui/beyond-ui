import React, { FC, ReactNode } from 'react'
import { BuiRootComponentCommonTypes } from '../buiStyled'
import { BuiFlexItem, BuiFlexItemProps } from '@prana-ui/bui/components'

export interface BuiFooterProps extends BuiRootComponentCommonTypes, BuiFlexItemProps {
  children?: ReactNode
}

export const BuiFooter: FC<BuiFooterProps> = ({ children, as, ...rest }: BuiFooterProps) => {
  return (
    <BuiFlexItem as={as ? as : 'footer'} {...rest}>
      {children}
    </BuiFlexItem>
  )
}
