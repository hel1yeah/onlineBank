import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';

export default function useRequestForm() {
  const { isSubmitting, handleSubmit } = useForm();

  const {
    value: fullName,
    errorMessage: fError,
    handleBlur: fBlur,
  } = useField(
    'fullName',
    yup.string().trim().required('Enter full name client')
  );

  const {
    value: phone,
    errorMessage: pError,
    handleBlur: pBlur,
  } = useField(
    'phone',
    yup.string().trim().required('The phone cannot be empty')
  );

  const {
    value: sum,
    errorMessage: sError,
    handleBlur: sBlur,
  } = useField(
    'sum',
    yup
      .number()
      .required('Enter sum')
      .min(0, 'The amount cannot be less than zero')
  );

  const { value: status } = useField('status');

  const onSubmit = handleSubmit(async () => {});

  return {
    isSubmitting,
    onSubmit,
    fullName,
    fError,
    fBlur,
    phone,
    pError,
    pBlur,
    sum,
    sError,
    sBlur,
    status,
  };
}
