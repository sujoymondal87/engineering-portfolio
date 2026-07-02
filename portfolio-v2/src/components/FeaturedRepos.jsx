import { useState, useRef } from 'react'
import { FiPlay, FiExternalLink, FiGithub } from 'react-icons/fi'
import { featuredRepos } from '../data/featuredRepos'
import Modal from './Modal'

function RepoCard({ repo }) {
    const [modalOpen, setModalOpen] = useState(false)
    const videoRef = useRef(null)
    const clickable = repo.hasVideo || repo.thumbnailUrl

    const closeModal = () => {
        videoRef.current?.pause()
        setModalOpen(false)
    }

    return (
        <article className="bg-gray-800 border border-gray-700 p-4 rounded-md flex flex-col">
            <div className="w-full h-[200px] rounded-md mb-3 bg-gray-900 overflow-hidden relative">
                {clickable ? (
                    <button
                        type="button"
                        onClick={() => setModalOpen(true)}
                        className="w-full h-full flex items-center justify-center group relative"
                        aria-label={repo.hasVideo ? `Play demo video for ${repo.title}` : `View screenshot for ${repo.title}`}
                    >
                        {repo.thumbnailUrl && (
                            <img src={repo.thumbnailUrl} alt={repo.title} className="absolute inset-0 w-full h-full object-contain p-1" />
                        )}
                        {repo.hasVideo && (
                            <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-amber-500 text-gray-900 group-hover:bg-amber-400 transition">
                                <FiPlay size={24} />
                            </span>
                        )}
                    </button>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm text-gray-500 font-mono">
                        Screenshot coming soon
                    </div>
                )}
            </div>

            <h3 className="text-lg font-bold text-white mb-2">{repo.title}</h3>
            <p className="text-sm text-gray-200 mb-3">{repo.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
                {repo.tags.map((tag) => (
                    <span key={tag} className="text-xs text-amber-400 border border-amber-500/40 rounded-full px-2 py-0.5">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex gap-2 mt-auto">
                <a
                    href={repo.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900 px-3 py-1.5 rounded transition"
                >
                    <FiExternalLink size={14} /> Live Demo
                </a>
                <a
                    href={repo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm border border-gray-600 text-gray-200 hover:border-amber-500 hover:text-amber-500 px-3 py-1.5 rounded transition"
                >
                    <FiGithub size={14} /> GitHub
                </a>
            </div>

            {clickable && (
                <Modal isOpen={modalOpen} onClose={closeModal}>
                    {repo.hasVideo ? (
                        <video
                            ref={videoRef}
                            className="max-h-[85vh] max-w-full"
                            src={repo.videoUrl}
                            autoPlay
                            controls
                        />
                    ) : (
                        <img src={repo.thumbnailUrl} alt={repo.title} className="max-h-[85vh] max-w-full object-contain rounded-md" />
                    )}
                </Modal>
            )}
        </article>
    )
}

export default function FeaturedRepos() {
    return (
        <section className="pt-8 md:pt-16 pb-2 md:pb-4 border-b border-gray-800">
            <p className="text-amber-500 text-sm font-mono mb-4">Featured Repos</p>
            <h2 className="text-3xl font-bold text-white mb-10">Proof it actually works.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredRepos.map((repo) => (
                    <RepoCard key={repo.slug} repo={repo} />
                ))}
            </div>
        </section>
    )
}
