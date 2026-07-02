import { useState } from 'react'
import Modal from './Modal'

export default function SystemCard({ system }) {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <article className="bg-gray-800 border border-gray-700 p-4 rounded-md">
            {system.imgurl && (
                <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="block w-full mb-3"
                    aria-label={`View full diagram for ${system.name}`}
                >
                    <img
                        src={system.imgurl}
                        alt={system.name}
                        className="w-full h-[200px] rounded-md object-contain bg-gray-900 p-1 cursor-pointer hover:opacity-90 transition"
                    />
                </button>
            )}
            <h3 className="text-lg font-bold text-white mb-2">{system.name}</h3>
            <p className="text-sm text-gray-200 mb-3">{system.problem}</p>

            {system.architecture_tags && (
                <div className="flex flex-wrap gap-2 mb-3">
                    {system.architecture_tags.split(',').map((tag) => tag.trim()).filter(Boolean).map((tag) => (
                        <span key={tag} className="text-xs text-amber-400 border border-amber-500/40 rounded-full px-2 py-0.5">
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            {system.trade_offs && (
                <div className="mb-3">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Trade-offs</p>
                    <p className="text-sm text-gray-300">{system.trade_offs}</p>
                </div>
            )}

            {system.production_proof && (
                <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Production Proof</p>
                    <p className="text-sm text-gray-300">{system.production_proof}</p>
                </div>
            )}

            {system.imgurl && (
                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                    <img src={system.imgurl} alt={system.name} className="max-h-[85vh] max-w-full object-contain rounded-md" />
                </Modal>
            )}
        </article>
    )
}
