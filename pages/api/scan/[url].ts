import { AuditImage, AuditResult, AuditResultArray, GenericAuditResult, isKeyAudit, ServerResponseTimeDetails } from "@/types/scan-results";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    let requestURLMobile = setUpQuery(req.query.url as string, 'mobile')
    let requestURLDesktop = setUpQuery(req.query.url as string, 'desktop')

    let mobileResults = await fetchPageResultsData(requestURLMobile)
    let desktopResults = await fetchPageResultsData(requestURLDesktop)

    let fullResults = {
        desktop: desktopResults,
        mobile: mobileResults,
    }

    try {
        return res.status(200).json(fullResults)
    } catch (error) {
        return res.status(500).send("error here")
    }

}

async function fetchPageResultsData(url: string) {


    let raw = await fetch(url);
    if (!raw.ok) return new Error(`An error occured: ${raw.status} Please try again later`)

    let parsedData = await raw.json();



    let lighthouse = parsedData.lighthouseResult;

    let allAudits: AuditResultArray = [];
    let keyAudits: AuditResultArray = [];

    for (const [key, value] of Object.entries(lighthouse.audits)) {
        allAudits.push(value as GenericAuditResult)
    }

    Object.entries(lighthouse.audits).forEach(
        function ([key, value]) {
            if (isKeyAudit(key)) {
                keyAudits.push(value as GenericAuditResult)
            }
        }
    );

    let parsedLightHouseResults = {
        keyAudits: keyAudits,
        allAudits: allAudits,
        runWarning: lighthouse.runWarning ?? null,
        stackPacks: lighthouse.stackPacks ?? null,
        timing: lighthouse.timing,
    }
    let lighthouseMetrics = [
        lighthouse.audits['first-contentful-paint'],
        lighthouse.audits['speed-index'],
        lighthouse.audits['interactive'],
        lighthouse.audits['first-meaningful-paint'],
        lighthouse.audits['first-cpu-idle'],
        lighthouse.audits['estimated-input-latency']
    ];


    return { lighthouse: parsedLightHouseResults, metrics: lighthouseMetrics }


}

function setUpQuery(url: string, mode: 'desktop' | 'mobile') {
    const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
    const API_KEY = process.env.GOOGLE_API_KEY;
    let query = `${api}?url=${encodeURIComponent(url)}&strategy=${mode}&key=${API_KEY}`;
    return query;
}