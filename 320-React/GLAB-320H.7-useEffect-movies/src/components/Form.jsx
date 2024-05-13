import { useState } from 'react';
export default function Form(props) {
  //hold data from form
  const [formData, setForData] = useState({
    searchterm: '',
  });
  ///update state when typing into input
  const handleChange = (event) => {
    setForData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.moviesearch(formData.searchterm);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          value={formData.searchterm}
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
