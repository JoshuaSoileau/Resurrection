import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from 'components/elements/Button';

export interface SignUpData {
  name: string;
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const { errors, handleSubmit, register } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: SignUpData): void => {
    console.log(data);
    setIsLoading(true);
    setTimeout(() => (window.location.href = 'https://serverless.page'), 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md">
        <label
          className="block  font-medium leading-5 text-gray-700"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm: sm:leading-5"
          id="name"
          name="name"
          ref={register({
            required: 'Please enter an name',
            minLength: {
              value: 3,
              message: 'name should have at least 3 characters',
            },
          })}
          type="text"
        />
        {errors.name && (
          <p className="mt-2 text-xs text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div className="mt-4">
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
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
        <label
          className="block  font-medium leading-5 text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <div className="mt-1 rounded-md">
          <input
            className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm: sm:leading-5"
            id="password"
            name="password"
            ref={register({
              required: 'Please enter a password',
              minLength: {
                value: 6,
                message: 'Should have at least 6 characters',
              },
            })}
            type="password"
          />
          {errors.password && (
            <div className="mt-2 text-xs text-red-600">
              {errors.password.message}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4">
        <span className="block w-full rounded-md shadow-sm">
          <Button isLoading={isLoading} title="Sign up" type="submit" />
        </span>
      </div>
    </form>
  );
};

export default SignUpForm;
