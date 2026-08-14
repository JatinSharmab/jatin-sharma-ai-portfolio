function GradientText({ as: Component = 'span', className = '', children }) {
  return (
    <Component className={`gradient-text ${className}`.trim()}>{children}</Component>
  )
}

export default GradientText
