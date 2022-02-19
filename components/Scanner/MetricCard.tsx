import { MetricResult } from "@/types/scan-results"
import { useState } from "react"
import Modal from "./Modal"

type ScoreType = | 'low' | 'medium' | 'high'

const MetricCard = ({ metricItem }: { metricItem: MetricResult }) => {

    let { title, description, displayValue, score, id } = metricItem

    const [metricModalOpen, setMetricModalOpen] = useState(false)

    function classesBasedOnScore(score: number) {
        let lowScore = ' bg-red-500'
        let mediumScore = ' bg-yellow-500'
        let highScore = ' bg-green-500'

        if (score < 0.5) {
            return lowScore
        } else if (score > 0.5 && score < 0.8) {
            return mediumScore
        } else {
            return highScore
        }
    }

    function statusClasses(score) {

    }



    return (
        <div className="p-5 rounded-md shadow-soft-small">
            <div className="flex items-center justify-between">
                <p className="text-[14px] md:text-base">{title}</p>
                <span className={`md:w-3 md:h-3 h-2.5 w-2.5 rounded-full ${classesBasedOnScore(score)}`}></span>
            </div>
            {/* <p>{description}</p> */}
            <p className="mt-2 mb-1 text-2xl font-semibold tracking-tight text-black font-inter">{displayValue}</p>
            <button className="inline-flex items-center mt-1 text-[12px] text-blue-900 transition-colors duration-200 ease-in-out gap-x-1 group hover:text-blue-500" onClick={() => setMetricModalOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>About This Result</p>
            </button>
            {/* <p>{score}</p> */}



            {/* Extra Info Modal */}
            <Modal isOpen={metricModalOpen} setIsOpen={setMetricModalOpen} title={metricItem.title}>
                {metricItem.id === 'speed-index' &&
                    <div>
                        <p> speed index description!!!!!!!</p>
                        <p> speed index description!!!!!!!</p>
                        <p> speed index description!!!!!!!</p>
                    </div>
                }
                {metricItem.id === 'first-contentful-paint' &&
                    <div>
                        <p>First contentful paint stuff</p>
                        <p>First contentful paint stuff</p>
                        <p>First contentful paint stuff</p>
                        <p>First contentful paint stuff</p>
                    </div>
                }
                {metricItem.id === 'interactive' &&
                    <div>
                        <p>time to interactive stuff</p>
                        <p>time to interactive stuff</p>
                        <p>time to interactive stuff</p>
                        <p>time to interactive stuff</p>
                    </div>
                }
                {metricItem.id === 'first-meaningful-paint' &&
                    <div>
                        <p>First meaningful paint stuff</p>
                        <p>First meaningful paint stuff</p>
                        <p>First meaningful paint stuff</p>
                        <p>First meaningful paint stuff</p>
                    </div>
                }
            </Modal>
        </div>
    )
}

export default MetricCard
