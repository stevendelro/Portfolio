const CodeBlock = ({ children }) => {
  return (
    <>
      <pre className='language-jsx'>
        <code className='language-jsx'>{children}</code>
      </pre>
    </>
  )
}

export default CodeBlock
