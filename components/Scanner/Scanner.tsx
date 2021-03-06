import ScanResults from "./ScanResults"
import ScanForm from "./ScanForm"
import { useCallback, useEffect, useState } from "react"
import usePageResultsFetcher, { ParsedResults } from "lib/usePageResultsFetch"
import PageSection from "@/layouts/PageSection"
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { URLRegex } from "lib/url-regex"

const Scanner = ({ }) => {

    // State
    const [pageResultsData, setPageResultsData] = useState(null)
    const [errorState, setErrorState] = useState(false)
    const [isLoading, setIsLoading] = useState(false)




    // Formik
    const initialValues = { url: '' }
    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
            url: Yup.string().matches(URLRegex, "URL must have http:// or https://").required('Please enter a URL'),
        }),
        onSubmit: async ({ url }) => {
            await fetchPageResultsData(url)
            console.log("finished fetching in onSubmit")
        },
    });



    // Functions 

    // data to fetch page results data
    async function fetchPageResultsData(url: string) {
        try {
            setIsLoading(true)
            let raw = await fetch(`/api/scan/${encodeURIComponent(url)}`)
            let data: ParsedResults = await raw.json();
            setPageResultsData(data);
            setIsLoading(false)
        }
        catch (error) {
            setIsLoading(false)
            setErrorState(true)

        }
    }


    return (
        <>

            {/* Form Element With Button */}
            <PageSection margin="mt-4" fullWidth alignment='items-center'>
                <ScanForm disabled={isLoading} formik={formik} />
            </PageSection>

            {/* Results From Scan */}
            <PageSection margin="mt-4" fullWidth >

                {pageResultsData && !isLoading && !errorState && (
                    <ScanResults desktopResults={pageResultsData.desktop}
                        mobileResults={pageResultsData.mobile} />
                )}
                {isLoading && (
                    <div></div>
                )}

            </PageSection>
        </>
    )
}



export default Scanner
