import { useEffect } from "react";


const Form = () => {

    useEffect(() => {console.log("form mounted")}, [])
  return (
    <form>
        <input type="text" placeholder="Name..."/>
        <input type="text" placeholder="Age..." />
    </form>
  )
}

export default Form;