import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'

export default function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        if (!isOpen) return
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={onClose}
        >
            <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-amber-500 transition"
                aria-label="Close"
            >
                <FiX size={28} />
            </button>
            <div onClick={(e) => e.stopPropagation()} className="max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
                {children}
            </div>
        </div>
    )
}
