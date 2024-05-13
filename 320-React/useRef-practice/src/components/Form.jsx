import { useEffect } from "react";


const Form = () => {

    useEffect(() => {console.log("form mounted")
        //cleanup function
        return ()=> {
            console.log("Cleanup form...")
        }
    }, [])
  return (
    <form>
        <input type="text" placeholder="Name..."/>
        <input type="text" placeholder="Age..." />
        <button>Submit</button>
    </form>
  )
}

export default Form;