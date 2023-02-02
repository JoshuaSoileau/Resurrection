import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from 'components/elements/Button';

const ResetPasswordForm: React.FC = () => {
  const { errors, handleSubmit, register } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: { email: string }) => {
    console.log(data);
    setIsLoading(true);
    setTimeout((window.location.href = 'https://serverless.page'), 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md">
        <label
          className="block  font-medium leading-5 text-gray-700"
          htmlFor="email"
        >
          Email address
        </label>
        <div className="mt-1 rounded-md">
          <input
            className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm: sm:leading-5"
            id="email"
            name="email"
            ref={register({
              required: 'Please enter an email',
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Not a valid email',
              },
            })}
            type="email"
          />
          {errors.email && (
            <div className="mt-2 text-xs text-red-600">
              {errors.email.message}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4">
        <span className="block w-full rounded-md shadow-sm">
          <Button isLoading={isLoading} title="Send reset link" type="submit" />
        </span>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
