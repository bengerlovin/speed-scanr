import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { url } = req.query
    console.log(url, "------- in url.ts")
    res.status(200).json({ msg: `scanning this url ${url}` })
}

function run() {
    const url = setUpQuery();
    fetch(url)
        .then(response => response.json())
        .then(json => {
            // See https://developers.google.com/speed/docs/insights/v5/reference/pagespeedapi/runpagespeed#response
            // to learn more about each of the properties in the response object.
            const cruxMetrics = {
                "First Contentful Paint": json.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category,
                "First Input Delay": json.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category
            };
            const lighthouse = json.lighthouseResult;
            const lighthouseMetrics = {
                'First Contentful Paint': lighthouse.audits['first-contentful-paint'].displayValue,
                'Speed Index': lighthouse.audits['speed-index'].displayValue,
                'Time To Interactive': lighthouse.audits['interactive'].displayValue,
                'First Meaningful Paint': lighthouse.audits['first-meaningful-paint'].displayValue,
                'First CPU Idle': lighthouse.audits['first-cpu-idle'].displayValue,
                'Estimated Input Latency': lighthouse.audits['estimated-input-latency'].displayValue
            };
        });
}

function setUpQuery() {
    const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
    const parameters = {
        url: encodeURIComponent('https://developers.google.com')
    };
    let query = `${api}?`;
    return query;
}