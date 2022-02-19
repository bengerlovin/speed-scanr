export const recommendations = {

    'total-blocking-time': {
        passed: totalBlockingTime('passed'),
        medium: totalBlockingTime('medium'),
        high: totalBlockingTime('high'),

    },

    'dom-size': {
        passed: domSize('passed'),
        medium: domSize('medium'),
        high: domSize('high'),

    },
    'uses-responsive-images': {
        passed: responsiveImages('passed'),
        medium: responsiveImages('medium'),
        high: responsiveImages('high'),

    },
    'offscreen-images': {
        passed: offscreenImages('passed'),
        medium: offscreenImages('medium'),
        high: offscreenImages('high'),

    },
    'redirects': {
        passed: redirects('passed'),
        medium: redirects('medium'),
        high: redirects('high'),

    },
    'render-blocking-resources': {
        passed: renderBlockingResources('passed'),
        medium: renderBlockingResources('medium'),
        high: renderBlockingResources('high'),

    },
    'font-display': {
        passed: fontDisplay('passed'),
        medium: fontDisplay('medium'),
        high: fontDisplay('high'),

    },
    'uses-optimized-images': {
        passed: optimizedImages('passed'),
        medium: optimizedImages('medium'),
        high: optimizedImages('high'),

    },

}

export const metrics = {


    'first-contentful-paint': {
        passed: firstContentfulPaint('passed'),
        medium: firstContentfulPaint('medium'),
        high: firstContentfulPaint('high'),

    },

    'speed-index': {
        passed: speedIndex('passed'),
        medium: speedIndex('medium'),
        high: speedIndex('high'),

    },

    'interactive': {
        passed: timeToInteractive('passed'),
        medium: timeToInteractive('medium'),
        high: timeToInteractive('high'),

    },

    'first-meaningful-paint': {
        passed: firstMeaningfulPaint('passed'),
        medium: firstMeaningfulPaint('medium'),
        high: firstMeaningfulPaint('high'),

    },

}


export function getRank(score: number): 'passed' | 'medium' | 'high' {
    if (score < 0.5) {
        return 'high'
    } else if (score > 0.5 && score < 0.9) {
        return 'medium'
    } else {
        return 'passed'
    }
}


// Metrics

function firstContentfulPaint(rank: 'passed' | 'medium' | 'high') {

    if (rank === 'passed') {
        return (
            <div>
                <p className="my-2">
                    First contentful paint (FCP) is a <span>Core Web Vital</span> metric. It measures when the browser renders the first bit of content on a webpage, giving visual feedback to the user that the webpage is, in fact, loading.
                </p>
                <p>{` This website had a FCP score above 0.9 out of 1, a very high rank. According to Google's Pagespeed Insights ranking, this metric is passed.`} </p>
            </div>
        )
    } else if (rank === 'medium') {
        return (
            <div>
                <p className="my-2">
                    First contentful paint (FCP) is a <span>Core Web Vital</span> metric. It measures when the browser renders the first bit of content on a webpage, giving visual feedback to the user that the webpage is, in fact, loading.
                </p>
                <p className="my-2"> A good FCP score to shoot for is around <b>2.5 seconds</b>. Here are some way to improve FCP: </p>
                <ul>
                    <li>Enable Website Caching</li>
                    <li>Use A Faster Server</li>
                    <li>Eliminate Render Blocking Resources</li>
                    <li>Preload Critical Resources</li>
                    <li>Optimize Fonts And Other Static Resources</li>
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <p className="my-2">
                    First contentful paint (FCP) is a <span>Core Web Vital</span> metric. It measures when the browser renders the first bit of content on a webpage, giving visual feedback to the user that the webpage is, in fact, loading.
                </p>
                <p className="my-2"> A good FCP score to shoot for is around <b>2.5 seconds</b>. Here are some way to improve FCP: </p>
                <ul className="list-disc marker:text-gray-300">
                    <li className="pb-2 pl-2">Enable Website Caching</li>
                    <li className="pb-2 pl-2">Use A Faster Server</li>
                    <li className="pb-2 pl-2">Eliminate Render Blocking Resources</li>
                    <li className="pb-2 pl-2">Preload Critical Resources</li>
                    <li className="pb-2 pl-2">Optimize Fonts And Other Static Resources</li>
                </ul>
            </div>
        )
    }
}

function speedIndex(rank: 'passed' | 'medium' | 'high') {

    if (rank === 'passed') {
        return (
            <p>
                Passed blocking time with flying colors
            </p>
        )
    } else if (rank === 'medium') {
        return (
            <p>

            </p>
        )
    } else {
        return (
            <p>
                Failed blocking time spectacularly. <a target={'_blank'} rel="noreferrer" href="https://google.com">Link to something!</a>
            </p>
        )
    }
}

function timeToInteractive(rank: 'passed' | 'medium' | 'high') {

    if (rank === 'passed') {
        return (
            <p>
                Passed blocking time with flying colors
            </p>
        )
    } else if (rank === 'medium') {
        return (
            <p>

            </p>
        )
    } else {
        return (
            <p>
                low time to interactive

            </p>
        )
    }
}

function firstMeaningfulPaint(rank: 'passed' | 'medium' | 'high') {

    if (rank === 'passed') {
        return (
            <p>
                Passed blocking time with flying colors
            </p>
        )
    } else if (rank === 'medium') {
        return (
            <p>
                medium meaningful paint result!

            </p>
        )
    } else {
        return (
            <p>
                Failed blocking time spectacularly. <a target={'_blank'} rel="noreferrer" href="https://google.com">Link to something!</a>
            </p>
        )
    }
}

// Audits
function totalBlockingTime(rank: 'passed' | 'medium' | 'high') {

    if (rank === 'passed') {
        return (
            <p>
                Passed blocking time with flying colors
            </p>
        )
    } else if (rank === 'medium') {
        return (
            <p>

            </p>
        )
    } else {
        return (
            <p>
                Failed blocking time spectacularly. <a target={'_blank'} rel="noreferrer" href="https://google.com">Link to something!</a>
            </p>
        )
    }
}

function domSize(rank: 'passed' | 'medium' | 'high') {

    if (rank === 'passed') {
        return (
            <p>
                Passed blocking time with flying colors
            </p>
        )
    } else if (rank === 'medium') {
        return (
            <p>

            </p>
        )
    } else {
        return (
            <p>
                Failed blocking time spectacularly. <a target={'_blank'} rel="noreferrer" href="https://google.com">Link to something!</a>
            </p>
        )
    }
}

function responsiveImages(rank: 'passed' | 'medium' | 'high') {

    if (rank === 'passed') {
        return (
            <p>
                Passed blocking time with flying colors
            </p>
        )
    } else if (rank === 'medium') {
        return (
            <p>

            </p>
        )
    } else {
        return (
            <p>
                Failed blocking time spectacularly. <a target={'_blank'} rel="noreferrer" href="https://google.com">Link to something!</a>
            </p>
        )
    }
}

function offscreenImages(rank: 'passed' | 'medium' | 'high') {

    if (rank === 'passed') {
        return (
            <p>
                Passed blocking time with flying colors
            </p>
        )
    } else if (rank === 'medium') {
        return (
            <p>

            </p>
        )
    } else {
        return (
            <p>
                Failed blocking time spectacularly. <a target={'_blank'} rel="noreferrer" href="https://google.com">Link to something!</a>
            </p>
        )
    }
}

function redirects(rank: 'passed' | 'medium' | 'high') {

    if (rank === 'passed') {
        return (
            <p>
                Passed blocking time with flying colors
            </p>
        )
    } else if (rank === 'medium') {
        return (
            <p>

            </p>
        )
    } else {
        return (
            <p>
                Failed blocking time spectacularly. <a target={'_blank'} rel="noreferrer" href="https://google.com">Link to something!</a>
            </p>
        )
    }
}

function renderBlockingResources(rank: 'passed' | 'medium' | 'high') {

    if (rank === 'passed') {
        return (
            <p>
                Passed blocking time with flying colors
            </p>
        )
    } else if (rank === 'medium') {
        return (
            <p>

            </p>
        )
    } else {
        return (
            <p>
                Failed blocking time spectacularly. <a target={'_blank'} rel="noreferrer" href="https://google.com">Link to something!</a>
            </p>
        )
    }
}

function fontDisplay(rank: 'passed' | 'medium' | 'high') {

    if (rank === 'passed') {
        return (
            <p>
                Passed blocking time with flying colors
            </p>
        )
    } else if (rank === 'medium') {
        return (
            <p>

            </p>
        )
    } else {
        return (
            <p>
                Failed blocking time spectacularly. <a target={'_blank'} rel="noreferrer" href="https://google.com">Link to something!</a>
            </p>
        )
    }
}

function optimizedImages(rank: 'passed' | 'medium' | 'high') {

    if (rank === 'passed') {
        return (
            <p>
                Passed blocking time with flying colors
            </p>
        )
    } else if (rank === 'medium') {
        return (
            <p>

            </p>
        )
    } else {
        return (
            <p>
                Failed blocking time spectacularly. <a target={'_blank'} rel="noreferrer" href="https://google.com">Link to something!</a>
            </p>
        )
    }
}