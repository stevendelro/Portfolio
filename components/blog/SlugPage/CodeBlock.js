const CodeBlock = ({ children }) => {
  const language = 'javascript'
  return <code className={`language-${language}`}>{children}</code>
}

export default CodeBlock
