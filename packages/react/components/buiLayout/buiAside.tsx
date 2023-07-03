import React, { CSSProperties, FC, ReactNode, useMemo } from 'react'
import {BuiFlexItem, BuiFlexItemProps} from "../buiFlexBox";
import { BuiStyled } from '../buiStyled';
import {BuiBox} from "../buiBox";

export interface BuiAsideProps extends BuiFlexItemProps {
  children?: ReactNode
  asideWidth?: number | undefined
  collapsed?: boolean
  collapsedWidth?: number | undefined
}

const StyledBuiFlexItem = BuiStyled(BuiFlexItem)<{
  $styled?: CSSProperties
}>(({ $styled }) => ({
  ...$styled,
}))

export const BuiAside: FC<BuiAsideProps> = ({
  children,
  as,
  grow,
  asideWidth,
  collapsed,
  collapsedWidth,
  ...rest
}: BuiAsideProps) => {
  const getAsideWidth = useMemo(() => {
    if (collapsed) {
      return collapsedWidth
    } else {
      return asideWidth
    }
  }, [asideWidth, collapsed, collapsedWidth])
  return (
    <StyledBuiFlexItem
      as={as ? as : 'aside'}
      $styled={{ transition: 'width 0.5s', width: getAsideWidth, display: 'fixed' }}
      grow={grow ? grow : 0}
      {...rest}
    >
      <BuiBox csx={{ width: asideWidth, overflow: 'hidden' }}>{children}</BuiBox>
    </StyledBuiFlexItem>
  )
}

BuiAside.defaultProps = {
  asideWidth: 230,
  collapsed: false,
  collapsedWidth: 80,
}
