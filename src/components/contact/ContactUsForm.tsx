'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../ui/Button';

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
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
    <div className="flex w-full flex-col gap-[30px] rounded-[20px] border border-[#D9D9D9] bg-white p-5 shadow-lg md:p-8 lg:-mt-[124px] lg:max-w-[678px] 3xl:gap-[26.53px] 4xl:p-11 5xl:p-[56px]">
      <h3 className="font-base text-xl font-medium leading-6 text-primary md:text-start 5xl:text-2xl 5xl:leading-7">
        Fill the below details
      </h3>
      <form
        onSubmit={formik.handleSubmit}
        className="flex w-full flex-col gap-5 lg:max-w-[690px] 3xl:gap-[26.53px]"
      >
        <div className="flex w-full flex-col gap-3">
          <label
            htmlFor="name"
            className="font-base text-lg font-normal leading-6 text-primary"
          >
            Name<span className="text-cyanBlue">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-ful lbg-transparent font-base border-b border-b-[#D1D9E6] pb-4 text-lg font-normal leading-6 text-primary outline-none placeholder:text-[#999999] focus:border-b-charcoalBlue"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="font-base text-base font-light leading-4 text-red">
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-3">
          <label
            htmlFor="email"
            className="font-base text-lg font-normal leading-6 text-primary"
          >
            Email<span className="text-cyanBlue">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-ful lbg-transparent font-base border-b border-b-[#D1D9E6] pb-4 text-lg font-normal leading-6 text-primary outline-none placeholder:text-[#999999] focus:border-b-charcoalBlue"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="font-base text-base font-light leading-4 text-red">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-3">
          <label
            htmlFor="phoneNumber"
            className="font-base text-lg font-normal leading-6 text-primary"
          >
            Phone Number<span className="text-cyanBlue">*</span>
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="Enter your phone number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className="w-ful lbg-transparent font-base border-b border-b-[#D1D9E6] pb-4 text-lg font-normal leading-6 text-primary outline-none placeholder:text-[#999999] focus:border-b-charcoalBlue"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="font-base text-base font-light leading-4 text-red">
              {formik.errors.phoneNumber}
            </div>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-3">
          <label
            htmlFor="message"
            className="font-base text-lg font-normal leading-6 text-primary"
          >
            Message<span className="text-cyanBlue">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-ful lbg-transparent font-base border-b border-b-[#D1D9E6] pb-4 text-lg font-normal leading-6 text-primary outline-none placeholder:text-[#999999] focus:border-b-charcoalBlue"
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="font-base text-base font-light leading-4 text-red">
              {formik.errors.message}
            </div>
          ) : null}
        </div>

        <div>
          <Button
            type="submit"
            btnName="Submit"
            className="bg-lightBlue px-[30px] 3xl:mt-[13.26px]"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
