function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const {name, age, color, recomend, button} = form.elements;

        // check the name
        if(!name.value.trim()) return alert("Name is required")
        if(name.value.trim().length < 2) return alert("The name has to be 2 or more characters long")

        // check the age
        if(!age.value.trim()) return alert("Age is required")
        const ageNum = parseInt(age.value.trim(), 10);
        if(Number.isNaN(ageNum) || ageNum < 5 || ageNum > 120) return alert("Age has to be a number between 5 and 120")
        
        let recommendation;
        recomend.forEach(e => {
            if(e.checked === true) recommendation = e.value
        })
        
        const surveyData = {
            name: name.value.trim(),
            age: ageNum,
            color: color.value,
            recomend: recommendation
        }

    }
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type='text' name='name' />
      <label>Age</label>
      <input type='text' name='age' />
      <label>
        Favorite Color
        <select name="color" defaultValue="">
          <option value='' disabled>
            Select...
          </option>
          <option value='red'>Red</option>
          <option value='green'>Green</option>
          <option value='blue'>Blue</option>
        </select>
      </label>
      <fieldset>
        <legend>Would you recomend our site</legend>
        <label>
          yes
          <input type='checkbox' name='recomend' value='yes' />
        </label>
        <label>
          no
          <input type='checkbox' name='recomend' value='no' />
        </label>
      </fieldset>
      <button name="button" type="submit">Send</button>
    </form>
  );
}

export default Form;
