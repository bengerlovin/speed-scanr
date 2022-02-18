import React, { useState, useEffect } from 'react'

const usePageResultsFetch = (URL: string) => {

    const [isLoading, setIsLoading] = useState(true)
    const [errorState, setErrorState] = useState(false)
    const [errorData, setErrorData] = useState(null)
    const [data, setData] = useState(null)


    useEffect(() => {

        const fetchData = async () => {


            if (URL === undefined || URL === null) {
                console.log("undefined url")
                return;
            }

            console.log("fetching data")
            try {

                let raw = await fetch(`/api/scan/${encodeURIComponent(URL)}`)
                let data = await raw.json();
                console.log("data found from api call", data)
                setIsLoading(false)
                setData(data);
            }
            catch (error) {
                setErrorData(error)
                setIsLoading(false)
                setErrorState(true)
            }

        }

        fetchData();

    }, [URL])

    return {
        data,
        errorState,
        errorData,
        isLoading
    }
}

async function fetchPageResultsData(url: string) {


    let raw = await fetch(url);
    if (!raw.ok) return new Error(`An error occured: ${raw.status} Please try again later`)

    let parsedData = await raw.json();


    let cruxMetrics = {
        "First Contentful Paint": parsedData.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category,
        "First Input Delay": parsedData.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category
    };
    let lighthouse = parsedData.lighthouseResult;
    let lighthouseMetrics = {
        'First Contentful Paint': lighthouse.audits['first-contentful-paint'],
        'Speed Index': lighthouse.audits['speed-index'],
        'Time To Interactive': lighthouse.audits['interactive'],
        'First Meaningful Paint': lighthouse.audits['first-meaningful-paint'],
        'First CPU Idle': lighthouse.audits['first-cpu-idle'],
        'Estimated Input Latency': lighthouse.audits['estimated-input-latency']
    };

    console.log("found data", { cruxMetrics, lighthouse, lighthouseMetrics })


    return { ...cruxMetrics, ...lighthouse, ...lighthouseMetrics }


}

// function setUpQuery(url: string) {
//     const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
//     let query = `${api}?url=${encodeURIComponent(url)}`;
//     // https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https%3A%2F%2Fgoogle.com&key=AIzaSyAgYF38EQC3lvSDD5TGxSyKrrinxJ3728Y
//     return query;
// }

export default usePageResultsFetch
