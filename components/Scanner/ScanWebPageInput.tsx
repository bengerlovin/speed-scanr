import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup'

/**
 * Component handles input validation and parsing of input URL for scanner API
 * When a valid https address is inputted and the "Scan" button is clicked, the
 * component will navigate to /scan/[url].tsx page - the component that handles that
 * page will render the ScanResult component (which uses SWR for loading/error states)
 */

export default function ScanWebPageInput() {
  const router = useRouter();

  const initialValues = { url: '' }

  const expression = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const urlRegex = new RegExp(expression);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      url: Yup.string().matches(urlRegex, "URL must have http:// or https://").required('Please enter a URL'),
    }),
    onSubmit: ({ url }) => {
      console.log('submit method', url)
      routeToScanPage(url)
      formik.resetForm();
    },
  });

  //  Functions
  function routeToScanPage(urlParam: string) {
    console.log('routing to scan page with url');

    router.push(`/scan?url=${urlParam}`);
  }

  return (
    <div>

      {/* call api button */}
      <form onSubmit={formik.handleSubmit} className='flex items-start justify-start pl-0'>

        <div>
          <label htmlFor='url'></label>
          <input
            type='url'
            id='url'
            placeholder='http://example.com'
            value={formik.values.url}
            onChange={formik.handleChange}
            className={`rounded-md ring-1 focus:ring-blue-500 ${formik.touched.url && formik.errors.url ? 'ring-1 focus:ring-red-500 focus:border-red-500 ring-red-400 outline-red-400 border-red-500' : ''}`}
          ></input>
          <button onClick={() => formik.handleSubmit} className='ml-4 px-3 py-1.5 bg-blue-700 rounded-md text-slate-100'>Call scanner</button>
        </div>

      </form>

      {formik.touched.url && formik.errors.url ? (
        <div className='mt-2 font-medium text-red-500'>{formik.errors.url}</div>
      ) : null}

    </div>
  );
}


