import * as yup from 'yup';

export const contactSchema = yup.object({
  name: yup.string().required().min(3).max(30),
  phone: yup.number().required(),
  email: yup.string().email(),
});

export const userLoginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(7).max(14),
});

export const userRegisterSchema = yup.object({
  name: yup.string().required().min(3).max(30),
  email: yup.string().required().email(),
  password: yup.string().required().min(7).max(14),
});
