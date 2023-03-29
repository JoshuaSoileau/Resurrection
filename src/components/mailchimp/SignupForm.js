import React from 'react';
import 'twin.macro';

const SignupForm = () => {
  return (
    <form
      action="https://resurrectionrockhill.us16.list-manage.com/subscribe/post?u=3cd12dec7449507aececbf84e&id=0522a11d77&f_id=008c7ee0f0"
      id="mc-embedded-subscribe-form"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
      tw="grid grid-cols-1 md:grid-cols-6 gap-4"
    >
      <input
        id="mce-FNAME"
        name="FNAME"
        placeholder="First name"
        tw="w-full md:col-span-3"
        type="text"
      />
      <input
        id="mce-LNAME"
        name="LNAME"
        placeholder="Last name"
        tw="w-full md:col-span-3"
        type="text"
      />
      <input
        id="mce-EMAIL"
        name="EMAIL"
        placeholder="Email address"
        tw="md:col-span-4"
        type="email"
        required
      />
      <input
        className="button"
        id="mc-embedded-subscribe"
        name="subscribe"
        tw="md:col-span-2 border-2 border-white font-light text-white  uppercase tracking-widest py-3 text-center cursor-pointer hover:bg-emerald-800 hover:text-white"
        type="submit"
        value="Subscribe"
      ></input>
      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
        <input
          name="b_3cd12dec7449507aececbf84e_0522a11d77"
          tabIndex="-1"
          type="text"
        />
      </div>
    </form>
  );
};

export default SignupForm;
