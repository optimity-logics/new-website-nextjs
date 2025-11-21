'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import Button from '../ui/Button';

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  captcha: boolean;
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
      .matches(
        /^[0-9]{10}$/,
        'Phone number must be 10 digits and contain only numbers',
      )
      .required('Phone number is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),
    captcha: Yup.boolean()
      .oneOf([true], 'Please verify that you are not a robot')
      .required('Captcha verification is required'),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
      captcha: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form Data', values);
    },
  });

  return (
    <div className="flex w-full flex-col gap-[30px] rounded-[20px] border border-[#D9D9D9] bg-[#FCFCFC] p-4 shadow-lg md:p-8 lg:max-w-[678px] 3xl:gap-[26.53px]">
      <h3 className="font-opt text-xl font-medium leading-6 text-primary">
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
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full border-b border-b-[#D1D9E6] bg-transparent pb-3 font-opt text-base font-normal leading-6 text-optDesc outline-none transition-all duration-200 ease-in placeholder:text-[#999999] focus:border-b-black-250-alpha"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="font-opt text-base font-normal leading-4 text-red">
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-2">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full border-b border-b-[#D1D9E6] !bg-transparent pb-3 font-opt text-base font-normal leading-6 text-optDesc outline-none transition-all duration-200 ease-in placeholder:text-[#999999] focus:border-b-black-250-alpha"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="font-opt text-base font-normal leading-4 text-red">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-2">
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="Phone number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className="w-full border-b border-b-[#D1D9E6] bg-transparent pb-3 font-opt text-base font-normal leading-6 text-optDesc outline-none transition-all duration-200 ease-in placeholder:text-[#999999] focus:border-b-black-250-alpha"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="font-opt text-base font-normal leading-4 text-red">
              {formik.errors.phoneNumber}
            </div>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-2">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full border-b border-b-[#D1D9E6] bg-transparent pb-3 font-opt text-base font-normal leading-6 text-optDesc outline-none transition-all duration-200 ease-in placeholder:text-[#999999] focus:border-b-black-250-alpha"
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="font-opt text-base font-normal leading-4 text-red">
              {formik.errors.message}
            </div>
          ) : null}
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="cpta flex items-center justify-between rounded-lg border-1.5 border-[#3B506833] bg-transparent px-[18px] py-2.5">
            <label className="flex cursor-pointer items-center gap-2.5">
              <input
                id="captcha"
                name="captcha"
                type="checkbox"
                checked={formik.values.captcha}
                onChange={formik.handleChange}
                className="block h-5 w-5 appearance-none"
              />
              <span className="font-opt text-sm font-normal leading-4 text-optDesc">
                I’m Not Robot
              </span>
            </label>
            <div>
              <Image
                src="/images/captcha.png"
                width={90}
                height={72}
                alt="recaptcha"
                className="object-contain"
              />
            </div>
          </div>
          {formik.touched.captcha && formik.errors.captcha ? (
            <div className="font-opt text-base font-normal leading-4 text-red">
              {formik.errors.captcha}
            </div>
          ) : null}
        </div>

        <Button isButton={true} btnName="Submit" type="submit" />
      </form>
    </div>
  );
};

export default ContactUsForm;
