export default function CodeBlock({ children, className }) {
  const language = 'javascript'
  return (
    <code className={`language-${language} ${{ ...className }}`}>
      {children}
    </code>
  )
}
