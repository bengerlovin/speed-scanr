import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    let requestURL = setUpQuery(req.query.url as string)

    try {
        return res.status(200).json(await fetchPageResultsData(requestURL))
    } catch (error) {
        return res.status(500).send("error here")
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


    return { crux: cruxMetrics, lighthouse: lighthouse, metrics: lighthouseMetrics }


}

function setUpQuery(url: string) {
    const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
    const API_KEY = process.env.GOOGLE_API_KEY;
    let query = `${api}?url=${encodeURIComponent(url)}&key=${API_KEY}`;
    return query;
}