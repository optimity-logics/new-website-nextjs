'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AnimatedArrow from '../common/AnimatedArrow';
import { useState } from 'react';

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactUsForm = () => {
  const [hover, setHover] = useState<boolean>(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phoneNumber: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        'Phone number must be 10 digits and contain only numbers',
      )
      .required('Phone number is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form Data', values);
    },
  });

  return (
    <div className="flex w-full flex-col gap-[30px] rounded-[20px] border border-[#D9D9D9] bg-[#FCFCFC] p-4 shadow-lg md:p-8 lg:max-w-[678px] 3xl:gap-[26.53px]">
      <h3 className="font-opt text-xl font-medium leading-6 text-primary md:text-start 5xl:text-2xl 5xl:leading-7">
        Fill the below details
      </h3>
      <form
        onSubmit={formik.handleSubmit}
        className="flex w-full flex-col gap-5 lg:max-w-[690px] 3xl:gap-[26.53px]"
      >
        <div className="flex w-full flex-col gap-2">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full border-b border-b-[#D1D9E6] bg-transparent pb-3 font-opt text-base font-normal leading-6 text-optDesc outline-none transition-all duration-200 ease-in placeholder:text-[#999999] focus:border-b-black-250-alpha"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="font-opt text-base font-light leading-4 text-red">
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-2">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full border-b border-b-[#D1D9E6] !bg-transparent pb-3 font-opt text-base font-normal leading-6 text-optDesc outline-none transition-all duration-200 ease-in placeholder:text-[#999999] focus:border-b-black-250-alpha"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="font-opt text-base font-light leading-4 text-red">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-2">
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="Enter your phone number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className="w-full border-b border-b-[#D1D9E6] bg-transparent pb-3 font-opt text-base font-normal leading-6 text-optDesc outline-none transition-all duration-200 ease-in placeholder:text-[#999999] focus:border-b-black-250-alpha"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="font-opt text-base font-light leading-4 text-red">
              {formik.errors.phoneNumber}
            </div>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-2">
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full border-b border-b-[#D1D9E6] bg-transparent pb-3 font-opt text-base font-normal leading-6 text-optDesc outline-none transition-all duration-200 ease-in placeholder:text-[#999999] focus:border-b-black-250-alpha"
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="font-opt text-base font-light leading-4 text-red">
              {formik.errors.message}
            </div>
          ) : null}
        </div>

        <div>
          <button
            type="submit"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseEnter}
            onMouseDown={handleMouseLeave}
            className={`flex h-10 w-max items-center gap-1 rounded-[50px] bg-[#1A6AA3] py-[8px] pl-[16px] pr-[14px] font-opt text-base font-normal leading-tight text-white`}
          >
            Submit
            <AnimatedArrow hover={hover} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
