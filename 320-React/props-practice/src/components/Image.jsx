export default function Image(props) {
  return (
    <a href={props.href} target="_blank">
      <img src={props.src} alt={props.alt} className="logo" />
    </a>
  );
}
