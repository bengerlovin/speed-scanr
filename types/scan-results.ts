import { validateYupSchema } from "formik";

export type MetricsResults = Array<MetricResult>;

export type MetricResult = {
    id: string;
    title: string;
    description: string;
    score: number;
    displayValue: string;
    numericUnit: 'millisecond' | 'second' | 'unitless'
    numericValue: number;
}

export type AuditResult = {
    description: string;
    id: string;
    numericUnit: 'millisecond' | 'second' | 'unitless' | 'element'
    score: number;
    scoreDisplayMode: string;
    displayValue: string;
    title: string;
}


export type LighthouseResults = {
    keyAudits: Array<AuditResult & AuditImage & AuditResult & ServerResponseTimeDetails>
    allAuditData?: Array<AuditResult | AuditImage | AuditResult & ServerResponseTimeDetails>
    runWarning?: any[];
    stackPacks?: StackPack[];
    timing: { total: number }
}



export type AuditImage = AuditResult & {
    details: {
        data: string;
        timing: number;
        timestamp: number;
    }

}

export type ServerResponseTimeDetails = AuditResult & {
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

export type KeyAuditId = typeof KeyAuditIdValues[number]

export type AuditResultArray = Array<AuditResult | AuditImage | AuditResult & ServerResponseTimeDetails>

export type GenericAuditResult = AuditResult | AuditImage | AuditResult & ServerResponseTimeDetails

const KeyAuditIdValues = ['dom-size', 'render-blocking-resources', 'total-blocking-time', 'uses-responsive-images', 'offscreen-images', 'redirects', 'uses-optimized-images', 'server-responsive-time', 'font-display'] as const;

export function isKeyAudit(keyValue: string): keyValue is KeyAuditId {
    return KeyAuditIdValues.includes(keyValue as KeyAuditId);
}
