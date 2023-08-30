import { ReactNode } from "react";

export interface BoxBaseProps {
  $width?: string
  $height?: string
  $backgroundColor?: string
  $display?: string
  $alignItems?: string
  $justifyContent?: string
  $margin?: string
  $padding?: string
  $border?: string
}

export interface BoxProps {
  width?: string
  height?: string
  backgroundColor?: string
  display?: string
  align?: string
  justify?: string
  margin?: string
  padding?: string
  border?: string
  children?: ReactNode
}