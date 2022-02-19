import { AuditResult } from "@/types/scan-results";

const AuditResult = ({ score, details, title, description, data }: {
    score: number, details?: { items?: any[] }, title: string, description: string; data: AuditResult
}) => {
    return (
        <div className="w-full p-0 my-2 bg-white shadow-soft-small">
            <p>{score}</p>
            <p>{title}</p>
            <p>{data?.displayValue}</p>
            {/* <p>{description}</p> */}

        </div>
    )
}

export default AuditResult
