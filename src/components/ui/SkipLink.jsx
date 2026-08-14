function SkipLink({ href, children }) {
  return (
    <a className="skip-link" href={href}>
      {children}
    </a>
  )
}

export default SkipLink
