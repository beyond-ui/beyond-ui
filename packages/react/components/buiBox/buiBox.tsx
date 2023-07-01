import React, { FC, ReactNode } from 'react'
import { BuiRootComponent, BuiRootComponentCommonTypes } from '../buiStyled'

export interface BuiBoxProps extends BuiRootComponentCommonTypes {
  children?: ReactNode
}

export const BuiBox: FC<BuiBoxProps> = ({ children, ...rest }: BuiBoxProps) => {
  return <BuiRootComponent {...rest}>{children}</BuiRootComponent>
}
