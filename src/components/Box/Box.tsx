import { BoxProps } from "./BoxBaseProps";
import { BoxBase } from "./styles";


export default function Box({ align, backgroundColor, border, display, height, justify, margin, padding, width, children }: BoxProps) {
  return (
    <BoxBase
      $alignItems={align}
      $backgroundColor={backgroundColor}
      $border={border}
      $display={display}
      $height={height}
      $justifyContent={justify}
      $margin={margin}
      $padding={padding}
      $width={width}
    >
      {children}
    </BoxBase>
  )
}
