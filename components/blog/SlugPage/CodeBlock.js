const CodeBlock = ({ children, className }) => {
  const language = 'javascript'
  return (
      <code className={`language-${language} ${{...className}}`}>{children}</code>
  )
}

export default CodeBlock
