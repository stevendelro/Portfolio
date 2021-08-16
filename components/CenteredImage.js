export default function CenteredImage({ ...props }) {
  let newProps = props
  if (props.src.includes('github.com')) {
    newProps = {
      ...props,
      src: `${props.src}?raw=true`,
    }
  }
  return <img {...newProps} style={{ display: 'block', margin: '0 auto' }} />
}
