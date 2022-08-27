import { memo, useMemo, useState, useEffect } from 'react';
import {
  Textarea,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  useColorModeValue,
  Button,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { EmailIcon, RepeatIcon } from '@chakra-ui/icons';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import useTranslation from '../hooks/useTranslation';

const initialValues = { email: '', name: '', content: '' };

const InputFormik = ({ invalid, type, label, onChange, onBlur, id, disabled }) => {
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
        disabled={disabled}
      />
      <FormHelperText color={errorColor}>{invalid}</FormHelperText>
    </FormControl>
  );
};

const getYupValidation = (t) =>
  Yup.object({
    email: Yup.string().email(t('errorEmail')).required(t('fieldRequired')),
    name: Yup.string().min(4, t('min4')).max(50, t('max50')).required(t('fieldRequired')),
    content: Yup.string().min(10, t('min10')).required(t('fieldRequired'))
  });

function ButtonAndMessage({ onSubmitButton, loading, error }) {
  const { t } = useTranslation('contact');
  const { isOpen, onClose, onOpen } = useDisclosure();
  const colorError = useColorModeValue('red.700', undefined);
  const schemeButton = useColorModeValue('blue', 'gray');

  useEffect(() => {
    if (error !== null) onOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return isOpen ? (
    <Alert status='error' color={colorError} mt={4} borderRadius={4}>
      <AlertIcon />
      <Box flex={1}>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{t(`status${error}`)}</AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        justify='flex-end'
        position='relative'
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <Box display='flex' justifyContent='center'>
      <Button
        mt={5}
        onClick={onSubmitButton}
        colorScheme={schemeButton}
        isLoading={loading}
        loadingText={t('submitting')}
        leftIcon={<EmailIcon />}>
        {t('submit')}
      </Button>
    </Box>
  );
}

const EmailForm = () => {
  const { t } = useTranslation('contact');
  const validationYup = useMemo(() => getYupValidation(t), [t]);

  const [{ error, loading, success }, setStatus] = useState({
    loading: false,
    error: null,
    success: false
  });
  const bgAlertSuccess = useColorModeValue('white', 'transparent');
  const submit = async (values) => {
    setStatus({
      loading: true,
      error: null,
      success: false
    });
    try {
      await axios.post(
        'https://notification-telegram-bot-dave.herokuapp.com/api/contact-mail',
        values
      );
      setStatus({
        loading: false,
        error: null,
        success: true
      });
    } catch (error) {
      setStatus({
        loading: false,
        error: error.response.status,
        success: false
      });
    }
  };

  const { handleChange, handleBlur, errors, touched, submitForm, resetForm } = useFormik({
    initialValues,
    onSubmit: submit,
    validationSchema: validationYup
  });

  const onSubmitButton = (e) => {
    e.preventDefault();
    submitForm();
  };

  const onSendAnother = () => {
    resetForm();
    setStatus({
      loading: false,
      error: null,
      success: false
    });
  };

  if (success)
    return (
      <Alert
        mt={4}
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        borderRadius={4}
        bg={bgAlertSuccess}
        borderStyle='solid'
        borderWidth='2px'
        borderColor='green.200'>
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          {t('success')}
        </AlertTitle>
        <AlertDescription maxWidth='sm'>{t('status201')}</AlertDescription>
        <Button
          mt={5}
          onClick={onSendAnother}
          colorScheme='green'
          leftIcon={<RepeatIcon />}>
          {t('sendAnother')}
        </Button>
      </Alert>
    );

  return (
    <form>
      <InputFormik
        id='email'
        type='email'
        label={t('email')}
        invalid={touched.email && errors.email}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={loading || success}
      />
      <InputFormik
        id='name'
        type='text'
        label={t('name')}
        invalid={touched.name && errors.name}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={loading || success}
      />
      <InputFormik
        id='content'
        type='textarea'
        label={t('content')}
        invalid={touched.content && errors.content}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={loading || success}
      />
      <ButtonAndMessage {...{ error, loading, onSubmitButton }} />
    </form>
  );
};

export default memo(EmailForm);
