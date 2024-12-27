'use client';
import { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Uploader } from 'uploader'; // Installed by "react-uploader".
import { UploadDropzone } from 'react-uploader';
import arrow from '../../../../public/svg/black-arrow.svg';
import Image from 'next/image';
import { CountrySelect } from 'react-country-state-city';
import 'react-country-state-city/dist/react-country-state-city.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
  aboutProject: string;
  file: File | null;
}
// Validation schema
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  country: Yup.string().required('Country name is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must be numeric')
    .required('Phone number is required'),
  aboutProject: Yup.string().required(
    'Please provide details about your project',
  ),
});

const InquireForm = () => {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const uploader = Uploader({
    apiKey: 'free',
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      phone: '',
      aboutProject: '',
      file: null,
    },
    validationSchema,
    onSubmit: (values) => {
      setSubmittedData(values);
      console.log('Form Data:', values);
    },
  });

  return (
    <div className="flex w-full max-w-[697px] flex-col gap-5 rounded-3xl border border-[#ffffff4a] bg-white/5 px-[22.5px] py-9">
      <h3 className="font-Inter text-xl font-medium leading-6 text-white xl:text-2xl xl:leading-7 5xl:text-[26px] 5xl:leading-8">
        Collaborate with <span className="font-semibold">Optimity Logics</span>
      </h3>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div className="flex w-full gap-6">
          {/* First Name */}
          <div className="w-full">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-b border-b-[#ffffff4a] bg-transparent px-4 pb-5 pt-4 font-Inter text-base font-normal leading-[19.36px] text-[#ffffff80] placeholder:text-[#ffffff80] focus:outline-none"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="mt-1 text-sm text-red">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>

          {/* Last Name */}
          <div className="w-full">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-b border-b-[#ffffff4a] bg-transparent px-4 pb-5 pt-4 font-Inter text-base font-normal leading-[19.36px] text-[#ffffff80] placeholder:text-[#ffffff80] focus:outline-none"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="mt-1 text-sm text-red">
                {formik.errors.lastName}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Email */}
          <div className="w-full">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-b border-b-[#ffffff4a] bg-transparent px-4 pb-5 pt-4 font-Inter text-base font-normal leading-[19.36px] text-[#ffffff80] placeholder:text-[#ffffff80] focus:outline-none"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="mt-1 text-sm text-red">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="w-full">
            <CountrySelect
              value={formik.values.country || 'India'} // Set default value to "India"
              onChange={(country) => {
                if (
                  typeof country === 'object' &&
                  country !== null &&
                  'name' in country
                ) {
                  // Safely extract the name property
                  formik.setFieldValue('country', country.name);
                } else {
                  formik.setFieldValue('country', '');
                }
              }}
              onBlur={() => formik.setFieldTouched('country', true)}
              className="!placeholder:text-[#ffffff80] w-full border-b border-b-[#ffffff4a] bg-transparent px-4 pb-5 pt-4 font-Inter text-base font-normal leading-[19.36px] !text-[#ffffff80] focus:outline-none"
              placeHolder="Search "
            />
            {formik.touched.country && formik.errors.country ? (
              <div className="mt-1 text-sm text-red">
                {formik.errors.country}
              </div>
            ) : null}
          </div>
        </div>

        {/* Phone */}
        <div>
          <PhoneInput
            value={formik.values.phone}
            onChange={formik.handleChange}
            className="w-full border-none"
            placeholder="Phone number"
            defaultCountry="in" // Use lowercase 'in' for India
            inputClassName="w-full !border-b !border-b-[#ffffff4a] !bg-transparent px-4 pb-5 pt-4 font-Inter text-base font-normal leading-[19.36px] placeholder:text-[#ffffff80] focus:outline-none !outline-none !border-transparent !rounded-none !text-[#ffffff4a]"
            countrySelectorStyleProps={{
              className: '!border-none !pl-2 ',
              buttonClassName: '!border-none !rounded-l-lg !bg-transparent',
            }}
          />

          {formik.touched.phone && formik.errors.phone ? (
            <div className="mt-1 text-sm text-red">{formik.errors.phone}</div>
          ) : null}
        </div>

        {/* About Your Project */}
        <div>
          <textarea
            rows={2}
            id="aboutProject"
            name="aboutProject"
            placeholder="About Your Project"
            value={formik.values.aboutProject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="appearance-[#ffffff4a] w-full border-b border-b-[#ffffff4a] bg-transparent px-4 pb-5 pt-4 font-Inter text-base font-normal leading-[19.36px] text-[#ffffff80] placeholder:text-[#ffffff80] focus:outline-none"
          />
          {formik.touched.aboutProject && formik.errors.aboutProject ? (
            <div className="mt-1 text-sm text-red">
              {formik.errors.aboutProject}
            </div>
          ) : null}
        </div>
        <div>
          <UploadDropzone
            uploader={uploader}
            onUpdate={(files) => {
              // Handle file update
              formik.setFieldValue('file', files[0]); // Store first file in Formik state
              alert(files.map((x) => x.fileUrl).join('\n')); // Show file URLs in alert
            }}
            width="100%"
            height="175px"
          />
          <p className="font-Inter text-base font-normal leading-5 text-[#ffffff4a]">
            Please upload a file with one of the following extensions: .pdf,
            .docx, .odt, .ods, .ppt/x, .xls/x, .rtf, .txt
          </p>
          {formik.errors.file ? (
            <div className="mt-1 text-sm text-red">{formik.errors.file}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="flex cursor-pointer items-center gap-2.5 rounded-[30px] bg-white px-4 py-3 font-Inter text-sm font-semibold uppercase md:px-[26px] md:py-4 md:text-base md:leading-6"
        >
          inquire now <Image src={arrow} alt="Arrow" width={20} height={20} />
        </button>
      </form>

      {submittedData && (
        <div className="mt-6 rounded border border-green-500 bg-green-50 p-4">
          <h2 className="text-lg font-medium text-green-800">
            Form submitted successfully!
          </h2>
          <pre className="text-gray-800 mt-2 text-sm">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default InquireForm;
