'use client';

import ReCAPTCHA from 'react-google-recaptcha';

interface GoogleCaptchaProps {
  onChange: (val: string | null) => void;
  error?: string | null;
  touched?: boolean;
  className?: string;
}

const GoogleCaptcha = ({
  onChange,
  error,
  touched,
  className,
}: GoogleCaptchaProps) => {
  return (
    <div className={`flex w-full flex-col gap-2 ${className || ''}`}>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        onChange={onChange}
      />

      {touched && error && <div className="text-red">{error}</div>}
    </div>
  );
};

export default GoogleCaptcha;
