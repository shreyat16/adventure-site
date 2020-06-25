import React from 'react'

const BackButton = React.forwardRef(
  ({ children, ...props }, ref) => {
    const onClick = e => {
      e.preventDefault()
      history.back()
    }
    return (
      <a {...props} ref={ref} href="#" onClick={onClick}>
        {children}
      </a>
    )
  }
)

BackButton.displayName = 'BackButton'
export { BackButton }