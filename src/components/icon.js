import React from "react"

const IconWrapper = ({ iconSrcUrl, children }) => {
  return (
    <div className="icon">
      <a href={iconSrcUrl} className="icon" target="_blank">
        {children}
      </a>
    </div>
  )
}
export default IconWrapper
