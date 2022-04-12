import React from "react"

const IconWrapper = ({ iconSrcUrl, children }) => {
  return (
    <div className="icon">
      <a href={iconSrcUrl} className="icon">
        {children}
      </a>
    </div>
  )
}
export default IconWrapper
