'use client';

import ReCAPTCHA from 'react-google-recaptcha';
import { forwardRef, useImperativeHandle, useRef } from 'react';

interface GoogleCaptchaProps {
  onChange: (val: string | null) => void;
  error?: string | null;
  touched?: boolean;
  className?: string;
  isDarkTheme?: boolean;
}
export interface GoogleCaptchaRef {
  reset: () => void;
}
const GoogleCaptcha = forwardRef<GoogleCaptchaRef, GoogleCaptchaProps>(
  ({ onChange, error, touched, className, isDarkTheme }, ref) => {
    const captchaRef = useRef<ReCAPTCHA | null>(null);

    // Expose reset function to parent
    useImperativeHandle(ref, () => ({
      reset: () => captchaRef.current?.reset(),
    }));

    return (
      <div className={`relative mt-2 flex w-full ${className || ''}`}>
        <div className="origin-top-left !scale-[0.9] md:!scale-100">
          <ReCAPTCHA
            ref={captchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={onChange}
            theme={isDarkTheme ? 'dark' : 'light'}
          />
        </div>

        {touched && error && (
          <div className="absolute left-0 top-full mt-0.5 font-opt text-sm font-normal text-red">
            {error}
          </div>
        )}
      </div>
    );
  },
);

GoogleCaptcha.displayName = 'GoogleCaptcha';
export default GoogleCaptcha;
