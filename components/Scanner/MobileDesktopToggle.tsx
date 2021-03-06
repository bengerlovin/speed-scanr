import { useState } from 'react'
import { Switch } from '@headlessui/react'

function MobileDesktopToggle({ toggleState, toggleFunction }) {

    return (
        <Switch
            checked={toggleState}
            onChange={toggleFunction}
            className={`${toggleState == true ? 'bg-blue-600' : 'bg-gray-200'
                } relative inline-flex items-center h-6 rounded-full w-11 outline-none ring-0`}
        >
            <span className="sr-only">Mobile and desktop page speed results</span>
            <span
                className={`${toggleState == true ? 'translate-x-6' : 'translate-x-1'
                    } inline-block w-4 h-4 transform transition-transform duration-200 ease-in-out bg-white rounded-full`}
            />
        </Switch>
    )
}

export default MobileDesktopToggle