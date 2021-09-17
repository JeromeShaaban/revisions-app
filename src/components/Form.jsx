export default function userForm({setFormData,formData,handleSubmit}){
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }
    return (
        <form>
          <label>
            Name:
            <input onChange={handleChange} type="text" name="personName" />
          </label>
          <label>
            Description:
            <input onChange={handleChange} type="text" name="description" />
          </label>
            <button className="submitButton" onClick={handleSubmit}>ENVOYER</button>
        </form>
    )
}