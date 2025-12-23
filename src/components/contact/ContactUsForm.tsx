'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../ui/Button';
import GoogleCaptcha from '../common/GoogleCaptcha';
import { toast } from 'react-toastify';
import { useRef, useState } from 'react';

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  captchaToken: string;
}

const ContactUsForm = () => {
  const captchaRef = useRef<{ reset: () => void }>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email format')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email structure invalid')
      .matches(/.+\..+$/, 'Email must contain top-level domain'),
    phoneNumber: Yup.string()
      .min(10, 'Phone number must be at least 10 digits')
      .max(15, 'Phone number cannot exceed 15 digits')
      .matches(/^[0-9]+$/, 'Phone number must contain only digits')
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
      setIsLoading(true);
      setIsSuccess(false);
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        const result = await res.json();

        if (!result.success) {
          toast.error(result.message || 'Something went wrong!');
          return;
        }
        toast.success(result.message || 'Message sent successfully!');
        setIsSuccess(true);
        formik.resetForm();
        captchaRef.current?.reset();
        setTimeout(() => setIsSuccess(false), 1000);
      } catch {
        toast.error('Server error! Try again later.');
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div
      className={`flex w-full flex-col gap-[30px] rounded-[20px] border ${Object.keys(formik.errors).length > 0 && Object.keys(formik.touched).length > 0 ? 'border-red' : 'border-silverGray'} bg-paperWhite p-4 shadow-lg md:p-8 lg:max-w-[678px]`}
    >
      <h3 className="font-opt text-xl font-medium text-primary">
        Fill the below details
      </h3>
      <form
        onSubmit={formik.handleSubmit}
        className="flex w-full flex-col gap-6"
      >
        <div className="relative flex">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`w-full border-b bg-transparent pb-1 font-opt text-base text-optDesc outline-none ${formik.touched.name && formik.errors.name ? 'border-b-red' : 'border-b-mutedBlue'}`}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="absolute left-0 top-full mt-0.5 font-opt text-sm font-normal text-red">
              {formik.errors.name}
            </div>
          )}
        </div>
        <div className="relative flex">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`w-full border-b bg-transparent pb-1 font-opt text-base text-optDesc outline-none ${formik.touched.email && formik.errors.email ? 'border-b-red' : 'border-b-mutedBlue'}`}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="absolute left-0 top-full mt-0.5 font-opt text-sm font-normal text-red">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="relative flex">
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="Phone number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className={`w-full border-b bg-transparent pb-1 font-opt text-base text-optDesc outline-none ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-b-red' : 'border-b-mutedBlue'}`}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="absolute left-0 top-full mt-0.5 font-opt text-sm font-normal text-red">
              {formik.errors.phoneNumber}
            </div>
          )}
        </div>
        <div className="relative flex">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className={`w-full border-b bg-transparent pb-1 font-opt text-base text-optDesc outline-none ${formik.touched.message && formik.errors.message ? 'border-b-red' : 'border-b-mutedBlue'}`}
          />
          {formik.touched.message && formik.errors.message && (
            <div className="absolute left-0 top-full mt-0.5 font-opt text-sm font-normal text-red">
              {formik.errors.message}
            </div>
          )}
        </div>
        <GoogleCaptcha
          ref={captchaRef}
          onChange={(token) => formik.setFieldValue('captchaToken', token)}
          error={formik.errors.captchaToken}
          touched={formik.touched.captchaToken}
        />

        <Button
          isButton={true}
          btnName="Submit"
          type="submit"
          className="mt-2"
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      </form>
    </div>
  );
};

export default ContactUsForm;
