import PropertiesForm from "../../components/propertiesForm/propertiesForm";

const NewPropertyPage = () => {
  return (
    <div>
      <h1 className='title'>New Property</h1>
      <p className='subtitle'>Fill all field to go to next step</p>
      <PropertiesForm/>
    </div>
  );
}

export default NewPropertyPage;