import { useState } from "react";

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (event) => {
      setName(event.target.value.trim());
    };
    const handleEmailChange = (event) => {
      setEmail(event.target.value.trim());
    };
    console.log(name, email);
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!name || !email) return alert('Fill all the fields!');

      const userData = {
        name,
        email,
      };

      localStorage.setItem('userData', JSON.stringify(userData));

      // reset the form
      setName('');
      setEmail('');
    };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleNameChange} type='text' name='name' value={name} />
      <input onChange={handleEmailChange} type='email' name='email' value={email} />
      <button type='submit'>Send</button>
    </form>
  );
}

export default Form