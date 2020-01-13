import * as React from 'react'
import { responsive } from '../responsive-system'

const FixedAspectRatioBox = responsive(
  React.forwardRef(function FixedAspectRatioBox(props, ref) {
    const {
      contentProps = {},

      children,
      ...baseProps
    } = props

    return (
      <FixedAspectRatioBoxBase ref={ref} {...baseProps}>
        <FixedAspectRatioBoxContent {...contentProps}>
          {children}
        </FixedAspectRatioBoxContent>
      </FixedAspectRatioBoxBase>
    )
  })
)

export { FixedAspectRatioBox }

//
// ─── FIXED ASPECT RATIO BOX BASE ────────────────────────────────────────────────
//

const FixedAspectRatioBoxBase = React.forwardRef((props, ref) => {
  const {
    aspectRatio,

    className,
    style = {},
    ...otherProps
  } = props

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: 'relative',
        paddingBottom: `${aspectRatio * 100}%`,
        width: '100%',
        ...style,
      }}
      {...otherProps}
    />
  )
})

FixedAspectRatioBoxBase.displayName = 'FixedAspectRatioBoxBase'

export { FixedAspectRatioBoxBase }

//
// ─── FIXED ASPECT RATIO BOX CONTENT ─────────────────────────────────────────────
//

const FixedAspectRatioBoxContent = React.forwardRef((props, ref) => {
  const { style = {}, ...otherProps } = props

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        ...style,
      }}
      {...otherProps}
    />
  )
})

FixedAspectRatioBoxContent.displayName = 'FixedAspectRatioBoxContent'

export { FixedAspectRatioBoxContent }

//
// ─── CAPPED WIDTH BOX ───────────────────────────────────────────────────────────
//

const CappedWidthBox = React.forwardRef((props, ref) => {
  const { maxWidth, style = {}, ...otherProps } = props

  return (
    <div
      ref={ref}
      style={{ maxWidth, width: '100%', ...style }}
      {...otherProps}
    />
  )
})

CappedWidthBox.displayName = 'CappedWidthBox'

export { CappedWidthBox }

//
// ─── CAPPED HEIGHT BOX ──────────────────────────────────────────────────────────
//

const CappedHeightBox = React.forwardRef((props, ref) => {
  const { maxHeight, style = {}, ...otherProps } = props

  return (
    <div
      ref={ref}
      style={{ maxHeight, height: '100%', width: '100%', ...style }}
      {...otherProps}
    />
  )
})

CappedHeightBox.displayName = 'CappedHeightBox'

export { CappedHeightBox }
