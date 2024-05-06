export default function Image({ href, src, alt }) {
  //or if passed (props)
  //let href= props.href
  //let src=props.src
  //let alt=props.alt

  return (
    <a href={href} target="_blank">
      <img src={src} alt={alt} className="logo" />
    </a>
  );
}
