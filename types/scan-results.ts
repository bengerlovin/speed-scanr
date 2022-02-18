import { validateYupSchema } from "formik";

export type MetricsResults = Array<MetricResult>;

export type MetricResult = {
    id: string;
    title: string;
    description: string;
    displayValue: string;
    numericUnit: 'millisecond' | 'second' | 'unitless'
    numericValue: number;
}

export type LighthouseResults = {
    keyAudits: {
        'dom-size': AuditResult;
        'render-blocking-resources': AuditResult;
        'total-blocking-time': AuditResult;
        'uses-responsive-images': AuditResult;
        'offscreen-images': AuditResult;
        'final-screenshot': AuditImage;
        'redirects': AuditResult;
        'uses-optimized-images': AuditResult;
        'server-responsive-time': AuditResult & ServerResponseTimeDetails;
        'font-display': AuditResult;
    };
    allAuditData?: Array<AuditResult | AuditImage | AuditResult & ServerResponseTimeDetails>
    runWarning?: any[];
    stackPacks?: StackPack[];
    timing: { total: number }
}


export type AuditResult = {
    description: string;
    id: string;
    numericUnit: 'millisecond' | 'second' | 'unitless' | 'element'
    score: number;
    scoreDisplayMode: string;
    title: string;
}

export type AuditImage = {
    description: string;
    title: string;
    id: string;
    details: {
        data: string;
        timing: number;
        timestamp: number;
    }

}

export type ServerResponseTimeDetails = {
    details: {
        items: { url: string; responsiveTime: number; }[]
        overallSavingsMs: number
    }
}

export type StackPack = {
    descriptions: {
        'dom-size'?: string;
        'redirects'?: string;
        'server-response-time'?: string;
        'user-timings'?: string
    };
    id: string;
    title: string;
}

export type KeyAuditId = keyof LighthouseResults['keyAudits']

export type AuditResultArray = Array<AuditResult | AuditImage | AuditResult & ServerResponseTimeDetails>

export type GenericAuditResult = AuditResult | AuditImage | AuditResult & ServerResponseTimeDetails

const KeyAuditIdValues = ["dom-size", "render-blocking-resources", "total-blocking-time", "uses-responsive-images", "offscreen-images", "final-screenshot", "redirects", "uses-optimized-images", "server-responsive-time", "font-display"]

export function isKeyAudit(keyValue: string): keyValue is KeyAuditId {
    return KeyAuditIdValues.includes(keyValue);
}
