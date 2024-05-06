export default function Image({ href, src, alt }) {
  //or if passed (props)
  //let href= props.href etc
  return (
    <a href={href} target="_blank">
      <img src={src} alt={alt} className="logo" />
    </a>
  );
}
