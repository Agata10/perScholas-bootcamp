export default function Welcome(props) {
  //console.log(props);
  return (
    <>
      <h1 style={props.style}>
        Hello, {props.firstName} {props.lastName}
      </h1>
    </>
  );
}
