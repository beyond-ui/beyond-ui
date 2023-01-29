import { BuiRootComponent, BuiRootComponentCommonTypes } from '../buiStyled'
import React, { FC, ReactNode } from 'react'

export interface BuiFlexItemProps extends BuiRootComponentCommonTypes {
  children?: ReactNode
  grow?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
}

export const BuiFlexItem: FC<BuiFlexItemProps> = ({
  children,
  grow,
  ...rest
}: BuiFlexItemProps) => {
  return (
    <BuiRootComponent
      preStyle={{
        display: 'flex',
        flexFlow: 'column',
        flexBasis: grow === 0 ? 'auto' : '0%',
        flexGrow: grow,
      }}
      {...rest}
    >
      {children}
    </BuiRootComponent>
  )
}

BuiFlexItem.defaultProps = {
  grow: 1,
}
