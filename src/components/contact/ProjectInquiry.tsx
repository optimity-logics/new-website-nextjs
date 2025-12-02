'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../ui/Button';
import { homePageData } from '../utils/Constant';
import GoogleCaptcha from '../common/GoogleCaptcha';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const ProjectInquiry = () => {
  const captchaRef = useRef<{ reset: () => void }>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'First name must be at least 2 characters')
      .required('First name is required'),

    lastName: Yup.string()
      .min(2, 'Last name must be at least 2 characters')
      .required('Last name is required'),

    email: Yup.string()
      .required('Email is required')
      .email('Invalid email format')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email structure invalid')
      .matches(/.+\..+$/, 'Email must contain top-level domain'),

    subject: Yup.string()
      .min(3, 'Subject must be at least 3 characters')
      .required('Subject is required'),

    description: Yup.string()
      .min(10, 'Description must be at least 10 characters')
      .required('Description is required'),

    captchaToken: Yup.string().required('Captcha verification is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      description: '',
      captchaToken: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      setIsSuccess(false);
      try {
        const res = await fetch('/api/project-inquiry', {
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
    <form
      onSubmit={formik.handleSubmit}
      className={`flex w-full max-w-full flex-col gap-10 rounded-2xl border bg-[#f0f3f5]/10 p-6 shadow-xl backdrop-blur-sm lg:max-w-[737px] xl:px-[23px] xl:py-[52px] xl:shadow-none ${Object.keys(formik.errors).length > 0 && Object.keys(formik.touched).length > 0 ? 'border-red' : 'border-transparent'}`}
    >
      <div className="flex flex-col gap-[26px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="relative flex w-full">
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder={homePageData?.formFirstName}
              className={`w-full rounded-xl border bg-[#CCCCCC5C]/30 p-2.5 text-lg text-white/70 focus:outline-none lg:px-4 lg:py-5 ${formik.touched.firstName && formik.errors.firstName ? 'border-red' : 'border-[#CCCCCC5C]'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="absolute left-1 top-full mt-0.5 font-opt text-sm font-normal text-red">
                {formik.errors.firstName}
              </p>
            )}
          </div>
          <div className="relative flex w-full">
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder={homePageData?.formLastName}
              className={`w-full rounded-xl border bg-[#CCCCCC5C]/30 p-2.5 text-lg text-white/70 focus:outline-none lg:px-4 lg:py-5 ${formik.touched.lastName && formik.errors.lastName ? 'border-red' : 'border-[#CCCCCC5C]'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="absolute left-1 top-full mt-0.5 font-opt text-sm font-normal text-red">
                {formik.errors.lastName}
              </p>
            )}
          </div>
        </div>
        <div className="relative flex w-full">
          <input
            id="email"
            name="email"
            type="email"
            placeholder={homePageData?.formEmail}
            className={`w-full rounded-xl border bg-[#CCCCCC5C]/30 p-2.5 text-lg text-white/70 focus:outline-none lg:px-4 lg:py-5 ${formik.touched.email && formik.errors.email ? 'border-red' : 'border-[#CCCCCC5C]'}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="absolute left-1 top-full mt-0.5 font-opt text-sm font-normal text-red">
              {formik.errors.email}
            </p>
          )}
        </div>
        <div className="relative flex w-full">
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder={homePageData?.formSubject}
            className={`w-full rounded-xl border bg-[#CCCCCC5C]/30 p-2.5 text-lg text-white/70 focus:outline-none lg:px-4 lg:py-5 ${formik.touched.subject && formik.errors.subject ? 'border-red' : 'border-[#CCCCCC5C]'}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          />
          {formik.touched.subject && formik.errors.subject && (
            <p className="absolute left-1 top-full mt-0.5 font-opt text-sm font-normal text-red">
              {formik.errors.subject}
            </p>
          )}
        </div>
        <div className="relative flex w-full">
          <textarea
            id="description"
            name="description"
            rows={2}
            placeholder={homePageData?.formDescription}
            className={`w-full rounded-xl border bg-[#CCCCCC5C]/30 p-2.5 text-lg text-white/70 focus:outline-none lg:px-4 lg:py-5 ${formik.touched.description && formik.errors.description ? 'border-red' : 'border-[#CCCCCC5C]'}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description && (
            <p className="absolute left-1 top-full mt-0.5 font-opt text-sm font-normal text-red">
              {formik.errors.description}
            </p>
          )}
        </div>
        <GoogleCaptcha
          ref={captchaRef}
          onChange={(token) => formik.setFieldValue('captchaToken', token)}
          error={formik.errors.captchaToken}
          touched={formik.touched.captchaToken}
          isDarkTheme={true}
        />
      </div>
      <Button
        type="submit"
        btnName={homePageData?.formSubmitBtn}
        isButton={true}
        isBackgroundLight={true}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </form>
  );
};

export default ProjectInquiry;
