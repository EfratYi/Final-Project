import React, { useState } from 'react'

const GenericChanges = ({ formData,attributesArrHe, attributesArrEn,handleSave, func}) => {
  const [visiblityState, setVisiblityState] = useState(false);
  const [genericFormData, setGenericFormData]=useState(formData);
  const captions={
    add:"הוספה",
    update: "עריכה",
    delete:"מחיקה"
  };
  const handleChange = (event) => {
    const { name, value } = event.target
    setGenericFormData(genericFormData => {
      return {
        ...genericFormData,
        [name]: value
      }
    })
  }
  function handleSaveFunction() {
    handleSave(genericFormData, func );
    setVisiblityState(!visiblityState)
  }
  
  return (
    <div>
      {!visiblityState && (
        <button onClick={() => setVisiblityState(!visiblityState)}>             
        {`${captions[func]}`}
        </button>)}
      {visiblityState && (
        <>
          <form>
            {attributesArrEn.map((attribute, index) => (
              <>
              <input
                key={index}
                type="text"
                placeholder={attributesArrHe[index]}
                onChange={handleChange}
                name={attribute}
                value={genericFormData[attribute]}
              />
              <br />
              </>
            ))}
          </form>
          <button onClick={()=>handleSaveFunction()}>{`${captions[func]}`}</button>
        </>)}
    </div>
  );
};
export default GenericChanges