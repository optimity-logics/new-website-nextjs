'use client';
import { useFormik } from 'formik';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Container from '../common/Container';
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  description: string;
}
const HighlitedHeading = styled.h1`
  span {
    color: #e94e25;
  }
`;
const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      description: '',
    },
    // validationSchema: Yup.object({
    //   firstName: Yup.string().required('First name is required'),
    //   lastName: Yup.string().required('Last name is required'),
    //   email: Yup.string()
    //     .email('Invalid email address')
    //     .required('Email is required'),
    //   subject: Yup.string().required('Subject is required'),
    //   description: Yup.string().required('Description is required'),
    // }),
    onSubmit: (values) => {
      console.log('Form Data', values);
    },
  });

  return (
    <Container className="mb-10 grid grid-cols-1 gap-10 bg-sectionBg bg-cover bg-no-repeat py-10 md:mb-12 lg:grid-cols-2 xl:mb-16 xl:gap-[79.42px] xl:py-20 4xl:mb-[120px] 4xl:items-center 4xl:pl-[100px] 4xl:pr-[255px]">
      <div className="flex flex-col gap-5 lg:max-w-[735px]">
        <div className="flex flex-col items-center gap-[15px] lg:items-start">
          <Button
            btnName="Contact Us"
            className="w-max !rounded-[42px] bg-herobtnbg bg-cover bg-no-repeat !px-[23px] !py-2.5 !font-normal !text-black"
          />
          <HighlitedHeading
            dangerouslySetInnerHTML={{
              __html: `We’re Here to <span>Help, Anytime.</span>`,
            }}
            className="text-center font-Poppins text-[45px] font-semibold leading-[47px] text-lightBlack lg:text-start 4xl:text-[60px] 4xl:leading-[65px]"
          />
        </div>
        <p className="text-center font-Poppins text-base font-normal leading-[19.36px] text-[#595959] lg:text-start">
          Our support team is ready to provide prompt solutions and guidance to
          ensure your experience with us is seamless and satisfying.
        </p>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex w-full flex-col gap-5 lg:max-w-[690px] 3xl:gap-[26.53px]"
      >
        <div className="flex flex-col items-center gap-[26.53px] lg:flex-row xl:gap-[39.79px]">
          <div className="w-full">
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="w-full rounded-xl border-[1.33px] border-secGray bg-transparent p-4 font-Poppins text-[18.57px] font-normal leading-[22.47px] outline-none placeholder:text-mediumGray 3xl:rounded-[20px] 3xl:p-[23.87px]"
            />
            {/* {formik.touched.firstName && formik.errors.firstName ? (
              <div className="font-Poppins text-lg font-medium leading-6 text-red">
                {formik.errors.firstName}
              </div>
            ) : null} */}
          </div>
          <div className="w-full">
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="w-full rounded-xl border-[1.33px] border-secGray bg-transparent p-4 font-Poppins text-[18.57px] font-normal leading-[22.47px] outline-none placeholder:text-mediumGray 3xl:rounded-[20px] 3xl:p-[23.87px]"
            />
            {/* {formik.touched.lastName && formik.errors.lastName ? (
              <div className="font-Poppins text-lg font-medium leading-6 text-red">
                {formik.errors.lastName}
              </div>
            ) : null} */}
          </div>
        </div>

        <div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full rounded-xl border-[1.33px] border-secGray bg-transparent p-4 font-Poppins text-[18.57px] font-normal leading-[22.47px] outline-none placeholder:text-mediumGray 3xl:rounded-[20px] 3xl:p-[23.87px]"
          />
          {/* {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null} */}
        </div>

        <div className="relative w-full">
          <select
            id="subject"
            name="subject"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onClick={() => setIsOpen(!isOpen)}
            onFocus={() => setIsOpen(true)}
            value={formik.values.subject}
            className="w-full appearance-none rounded-xl border-[1.33px] border-secGray bg-transparent p-4 pr-10 font-Poppins text-[18.57px] font-normal leading-[22.47px] text-mediumGray outline-none 3xl:rounded-[20px] 3xl:p-[23.87px]"
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry" onClick={() => setIsOpen(false)}>
              General Inquiry
            </option>
            <option value="Support" onClick={() => setIsOpen(false)}>
              Support
            </option>
            <option value="Feedback" onClick={() => setIsOpen(false)}>
              Feedback
            </option>
          </select>
          <div
            className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-mediumGray"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="w-full resize-none rounded-xl border-[1.33px] border-secGray bg-transparent p-4 font-Poppins text-[18.57px] font-normal leading-[22.47px] outline-none placeholder:text-mediumGray 3xl:rounded-[20px] 3xl:p-[23.87px]"
          />
          {/* {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null} */}
        </div>

        <div>
          <Button
            type="submit"
            btnName="Submit "
            className="bg-red px-[30px] 3xl:mt-[13.26px]"
          />
        </div>
      </form>
    </Container>
  );
};

export default ContactUs;
