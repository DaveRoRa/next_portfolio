import { memo, useMemo } from 'react';
import {
  Textarea,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  useColorModeValue,
  Button,
  Box
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useTranslation from '../hooks/useTranslation';

const initialValues = { email: '', name: '', content: '' };
const submit = () => {};

const InputFormik = ({ invalid, type, label, onChange, onBlur, id }) => {
  const errorColor = useColorModeValue('red.500', 'pink.300');
  const InputType = type === 'textarea' ? Textarea : Input;
  return (
    <FormControl isRequired mt={4}>
      <FormLabel color={invalid && errorColor}>{label}</FormLabel>
      <InputType
        autoComplete='off'
        name={id}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        isInvalid={invalid}
        _focusVisible={
          invalid && {
            borderColor: errorColor
          }
        }
      />
      <FormHelperText color={errorColor}>{invalid}</FormHelperText>
    </FormControl>
  );
};

const EmailForm = () => {
  const { t } = useTranslation('contact');
  const validationYup = useMemo(
    () =>
      Yup.object({
        email: Yup.string().email(t('errorEmail')).required(t('fieldRequired')),
        name: Yup.string()
          .min(4, t('min4'))
          .max(50, t('max50'))
          .required(t('fieldRequired')),
        content: Yup.string().min(10, t('min10')).required(t('fieldRequired'))
      }),
    [t]
  );
  const { handleChange, handleBlur, errors, touched } = useFormik({
    initialValues,
    onSubmit: submit,
    validationSchema: validationYup
  });

  return (
    <form>
      <InputFormik
        id='email'
        type='email'
        label={t('email')}
        invalid={touched.email && errors.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <InputFormik
        id='name'
        type='text'
        label={t('name')}
        invalid={touched.name && errors.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <InputFormik
        id='content'
        type='textarea'
        label={t('content')}
        invalid={touched.content && errors.content}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Box display='flex' justifyContent='center'>
        <Button mt={5} type='submit' colorScheme={useColorModeValue('blue', 'gray')}>
          {t('submit')}
        </Button>
      </Box>
    </form>
  );
};

export default memo(EmailForm);
