'use client';
import { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Uploader } from 'uploader'; // Installed by "react-uploader".
import { UploadButton, UploadDropzone } from 'react-uploader';

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
  file: Yup.mixed().test(
    'fileType',
    'Unsupported File Format. Allowed formats: .pdf, .docx, .odt, .ods, .ppt, .pptx, .xls, .xlsx, .rtf, .txt',
    (value) => {
      if (!value) return true; // If no file is uploaded
      const allowedFormats: any | null = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.oasis.opendocument.text',
        'application/vnd.oasis.opendocument.spreadsheet',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/rtf',
        'text/plain',
      ];
      return value && allowedFormats.includes(value);
    },
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
    <div className="flex flex-col gap-5 rounded-[10px] border border-secGray bg-transparent px-[22.5px] py-9">
      <h3 className="font-Inter text-[26px] font-medium leading-8 text-black">
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
              className="w-full border-b border-b-secGray bg-transparent px-4 pb-5 pt-4 font-Inter text-base font-normal leading-[19.36px] placeholder:text-[#00000080] focus:outline-none"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-600 mt-1 text-sm">
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
              className="w-full border-b border-b-secGray bg-transparent px-4 pb-5 pt-4 font-Inter text-base font-normal leading-[19.36px] placeholder:text-[#00000080] focus:outline-none"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-600 mt-1 text-sm">
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
              className="w-full border-b border-b-secGray bg-transparent px-4 pb-5 pt-4 font-Inter text-base font-normal leading-[19.36px] placeholder:text-[#00000080] focus:outline-none"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600 mt-1 text-sm">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          {/* Country */}
          <div className="w-full">
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country Name"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-b border-b-secGray bg-transparent px-4 pb-5 pt-4 font-Inter text-base font-normal leading-[19.36px] placeholder:text-[#00000080] focus:outline-none"
            />
            {formik.touched.country && formik.errors.country ? (
              <div className="text-red-600 mt-1 text-sm">
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
            autoFocus
            className="w-full border-none"
            placeholder="Phone number"
            defaultCountry="in" // Use lowercase 'in' for India
            inputClassName="w-full !border-b !border-b-secGray !bg-transparent px-4 pb-5 pt-4 font-Inter text-base font-normal leading-[19.36px] placeholder:text-[#00000080] focus:outline-none !outline-none !border-transparent !rounded-none"
            countrySelectorStyleProps={{
              className: '!border-none !pl-2 ',
              buttonClassName: '!border-none !rounded-l-lg !bg-transparent',
            }}
          />

          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-600 mt-1 text-sm">
              {formik.errors.phone}
            </div>
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
            className="w-full border-b border-b-secGray bg-transparent px-4 pb-5 pt-4 font-Inter text-base font-normal leading-[19.36px] placeholder:text-[#00000080] focus:outline-none"
          />
          {formik.touched.aboutProject && formik.errors.aboutProject ? (
            <div className="text-red-600 mt-1 text-sm">
              {formik.errors.aboutProject}
            </div>
          ) : null}
        </div>

        {/* File Upload */}
        {/* <div>
          <label htmlFor="file" className="block text-sm font-medium">
            Attach File
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={(event) =>
              formik.setFieldValue('file', event.currentTarget.files?.[0])
            }
            className="border-gray-300 mt-1 w-full rounded border p-2"
          />
          <p className="text-gray-500 mt-1 text-sm">
            Please upload a file with one of the following extensions: .pdf,
            .docx, .odt, .ods, .ppt/x, .xls/x, .rtf, .txt
          </p>
          {formik.errors.file ? (
            <div className="text-red-600 mt-1 text-sm">
              {formik.errors.file}
            </div>
          ) : null}
        </div> */}
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

          {formik.errors.file ? (
            <div className="text-red-600 mt-1 text-sm">
              {formik.errors.file}
            </div>
          ) : null}
          <p className="text-gray-500 mt-1 text-sm">
            Please upload a file with one of the following extensions: .pdf,
            .docx, .odt, .ods, .ppt/x, .xls/x, .rtf, .txt
          </p>
          {formik.errors.file ? (
            <div className="text-red-600 mt-1 text-sm">
              {formik.errors.file}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          className="font-Inter"
        >
          inquire now
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
