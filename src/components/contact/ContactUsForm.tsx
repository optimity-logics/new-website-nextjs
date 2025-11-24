'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../ui/Button';
import GoogleCaptcha from '../common/GoogleCaptcha';

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  captchaToken: string;
}

const ContactUsForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),
    captchaToken: Yup.string().required('Captcha verification is required'),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
      captchaToken: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      // Call API to verify CAPTCHA
      const res = await fetch('/api/verify-captcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: values.captchaToken }),
      });

      const result = await res.json();

      if (!result.success) {
        alert('Captcha failed, try again!');
        return;
      }

      console.log('Form Data', values);
      alert('Form submitted successfully!');
    },
  });

  return (
    <div className="flex w-full flex-col gap-[30px] rounded-[20px] border border-[#D9D9D9] bg-[#FCFCFC] p-4 shadow-lg md:p-8 lg:max-w-[678px]">
      <h3 className="font-opt text-xl font-medium text-primary">
        Fill the below details
      </h3>

      <form
        onSubmit={formik.handleSubmit}
        className="flex w-full flex-col gap-5"
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full border-b border-b-[#D1D9E6] bg-transparent pb-3 font-opt text-base text-optDesc outline-none"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red">{formik.errors.name}</div>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full border-b border-b-[#D1D9E6] bg-transparent pb-3 font-opt text-base text-optDesc outline-none"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red">{formik.errors.email}</div>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="Phone number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className="w-full border-b border-b-[#D1D9E6] bg-transparent pb-3 font-opt text-base text-optDesc outline-none"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="text-red">{formik.errors.phoneNumber}</div>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full border-b border-b-[#D1D9E6] bg-transparent pb-3 font-opt text-base text-optDesc outline-none"
          />
          {formik.touched.message && formik.errors.message && (
            <div className="text-red">{formik.errors.message}</div>
          )}
        </div>

        {/* REAL GOOGLE RECAPTCHA */}
        <GoogleCaptcha
          onChange={(token) => formik.setFieldValue('captchaToken', token)}
          error={formik.errors.captchaToken}
          touched={formik.touched.captchaToken}
        />

        <Button isButton={true} btnName="Submit" type="submit" />
      </form>
    </div>
  );
};

export default ContactUsForm;
