'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../ui/Button';
import { homePageData } from '../utils/Constant';

const HomeContactForm = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'First name must be at least 2 characters')
      .required('First name is required'),

    lastName: Yup.string()
      .min(2, 'Last name must be at least 2 characters')
      .required('Last name is required'),

    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),

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
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
      alert('Form Submitted Successfully!');
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex w-full max-w-full flex-col gap-10 rounded-2xl bg-[#f0f3f5]/10 p-6 shadow-xl backdrop-blur-sm lg:max-w-[737px] xl:px-[23px] xl:py-[52px] xl:shadow-none"
    >
      <div className="flex flex-col gap-[26px]">
        {/* FIRST + LAST NAME */}
        <div className="flex flex-row items-center gap-6 md:flex-col lg:flex-row">
          {/* First Name */}
          <div className="flex w-full flex-col gap-1">
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder={homePageData?.formFirstName}
              className="w-full rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 px-4 py-5 text-lg text-white/70 focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-sm text-red">{formik.errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="flex w-full flex-col gap-1">
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder={homePageData?.formLastName}
              className="w-full rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 px-4 py-5 text-lg text-white/70 focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-sm text-red">{formik.errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <input
            id="email"
            name="email"
            type="email"
            placeholder={homePageData?.formEmail}
            className="rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 px-4 py-5 text-lg text-white/70 focus:outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-sm text-red">{formik.errors.email}</p>
          )}
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-1">
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder={homePageData?.formSubject}
            className="rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 px-4 py-5 text-lg text-white/70 focus:outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          />
          {formik.touched.subject && formik.errors.subject && (
            <p className="text-sm text-red">{formik.errors.subject}</p>
          )}
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <textarea
            id="description"
            name="description"
            rows={2}
            placeholder={homePageData?.formDescription}
            className="resize-none rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 px-4 py-5 text-lg text-white/70 focus:outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description && (
            <p className="text-sm text-red">{formik.errors.description}</p>
          )}
        </div>
        {/* <GoogleCaptcha
          onChange={(token) => formik.setFieldValue('captchaToken', token)}
          error={formik.errors.captchaToken}
          touched={formik.touched.captchaToken}
        /> */}
      </div>

      {/* SUBMIT BUTTON */}
      <Button
        type="submit"
        btnName={homePageData?.formSubmitBtn}
        isButton={true}
        isBackgroundLight={true}
      />
    </form>
  );
};

export default HomeContactForm;
