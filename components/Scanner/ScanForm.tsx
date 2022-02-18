import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import PageSection from '@/layouts/PageSection';
import { URLRegex } from 'lib/url-regex';


export default function ScanWebPageInput({ disabled, formik }) {


  console.log("------------------- input re rendered ----------------")


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
          <button onClick={() => formik.handleSubmit} type='submit' disabled={disabled} className='ml-4 px-3 py-1.5 bg-blue-700 rounded-md text-slate-100'>{disabled ? 'disabled' : 'Call scanner'}</button>
          {formik.touched.url && formik.errors.url ? (
            <div className='mt-2 font-medium text-red-500'>{formik.errors.url}</div>
          ) : null}
        </div>



      </form>


    </div>
  );
}


