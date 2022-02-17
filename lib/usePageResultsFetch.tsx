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
                let encodedURL = encodeURIComponent(URL);
                console.log("calling this url", encodedURL)
                let raw = await fetch(`/api/scan/${encodedURL}`)
                let parsed = await raw.json();
                setIsLoading(false)
                setData(parsed);
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

export default usePageResultsFetch
