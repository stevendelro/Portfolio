export default function CodeBlock({ children, className }) {
  const language = 'javascript'
  return (
    <code className={`language-${className ? className : language}`}>
      {children}
    </code>
  )
}
