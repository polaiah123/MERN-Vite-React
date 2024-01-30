
import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
// import { useOutletContext } from 'react-router-dom';

import { Form } from 'react-router-dom';


const AddJob = () => {
  // const { user } = useOutletContext();
  return (
    <Wrapper>
    <Form method='post' className='form'>
      <h4 className='form-title'>add job</h4>
      <div className='form-center'>
        <FormRow type='text' name='position' />
        <FormRow type='text' name='company' />
        <FormRow
          type='text'
          labelText='job location'
          name='jobLocation'
          defaultValue={''}
        />
        <FormRowSelect
          labelText='job status'
          name='jobStatus'
          defaultValue={""}
          list={""}
        />
        <FormRowSelect
          labelText='job type'
          name='jobType'
          defaultValue={""}
          list={""}
        />
        <SubmitBtn formBtn />
        <FormRow type='text' name='position' />
        <FormRow type='text' name='position' />
        <FormRow type='text' name='position' />
        <FormRow type='text' name='position' />
        <FormRow type='text' name='position' />
        <FormRow type='text' name='position' />
        <FormRow type='text' name='position' />
        <FormRow type='text' name='position' />
        <FormRow type='text' name='position' />
      </div>
    </Form>
  </Wrapper>
  )
}

export default AddJob