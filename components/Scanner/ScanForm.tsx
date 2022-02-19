import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import PageSection from '@/layouts/PageSection';
import { URLRegex } from 'lib/url-regex';
import Spinner from './Spinner';


export default function ScanWebPageInput({ disabled: isLoading, formik }) {


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
            className={`w-52 sm:w-80 flex-shrink-1 flex-grow rounded-md ring-1 placeholder:text-base focus:ring-blue-500 ${formik.touched.url && formik.errors.url ? 'ring-1 focus:ring-red-500 focus:border-red-500 ring-red-400 outline-red-400 border-red-500' : ''}`}
          ></input>
          <button onClick={() => formik.handleSubmit} type='submit' disabled={isLoading} className='flex-shrink-0 inline-block px-3 py-2 ml-4 transition-colors duration-200 ease-in-out bg-blue-700 rounded-md cursor-pointer hover:bg-blue-400 text-slate-100'>

            {isLoading && (
              <span className='relative flex items-center justify-center w-full h-full'>
                <Spinner />
              </span>
            )}
            <span className={isLoading ? 'invisible' : 'visible'}>
              Analyze URL
            </span>


          </button>
          {formik.touched.url && formik.errors.url ? (
            <div className='mt-2 font-medium text-red-500'>{formik.errors.url}</div>
          ) : null}


        </div>

      </form>


    </div>
  );
}


