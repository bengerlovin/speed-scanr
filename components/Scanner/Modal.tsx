import { Dialog } from "@headlessui/react"
import { useState } from "react"

const Modal = ({ isOpen, setIsOpen, children, title }) => {

    return (
        <Dialog as='div' open={isOpen} onClose={() => setIsOpen(false)}
            className="fixed left-0 z-20 w-full mx-auto overflow-y-auto top-1/3">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <div className="relative max-w-sm p-4 mx-auto bg-white rounded-md">
                <Dialog.Title as='div' className={`text-black font-inter tracking-tight font-medium`}>{title}</Dialog.Title>

                <div className="mt-4 mb-4">
                    <div className="overflow-y-scroll text-base text-gray-600 tracking-tight leading-[1.08] max-h-28 h-28">{children} </div>

                </div>

                <button className="text-gray-500 text-base font-medium rounded-md bg-gray-300/60 hover:text-blue-500 px-3 py-0.5" onClick={() => setIsOpen(false)}>Close</button>

            </div>


        </Dialog>
    )
}

export default Modal
