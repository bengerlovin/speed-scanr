import { AuditResult } from "@/types/scan-results";
import { Disclosure, Transition } from '@headlessui/react'
import { recommendations } from "lib/recommendations";
import { classesBasedOnScore } from "./MetricCard";

const AuditResult = ({ score, details, title, description, data, rank }: {
    score: number, details?: { items?: any[] }, title: string, description: string; data: AuditResult; rank: 'passed' | 'medium' | 'high'
}) => {

    console.log(recommendations[data.id][rank])
    return (
        <div className="w-full my-4 bg-white border-gray-200/50 border-[1px] rounded-md shadow-soft-xsmall">

            <Disclosure as='div' className={`p-4`}>
                {({ open }) => (
                    <>
                        <Disclosure.Button as='div' className="flex justify-between py-2">
                            <div className="flex items-center justify-start gap-x-2">
                                <span className={`md:w-3 md:h-3 h-2 w-2 rounded-full ${classesBasedOnScore(score)}`}></span>
                                <p className="text-base tracking-tight">{title} {data.id}</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`transition-transform duraiton-150 ease-in-out ${open ? "transform rotate-180" : ""} h-4 w-4`} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>

                        </Disclosure.Button>

                        <Transition
                            show={open}
                            enter="transition duration-175 ease-out"
                            enterFrom="transform scale-95 opacity-0 h-0"
                            enterTo="transform scale-100 opacity-100 h-full"
                            leave="transition duration-175 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0 h-0"
                        >
                            <Disclosure.Panel className="text-gray-600 text">
                                <p>{data?.displayValue}</p>
                                <div>{recommendations[data.id][rank]}</div>
                                {/* <p>{description}</p> */}
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>


        </div>
    )
}

export default AuditResult
