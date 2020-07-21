export default function CodeBlock({ children, className }) {
  return (
    <code className={className ? className : 'lang-javascript'}>
      {children}
    </code>
  )
}
