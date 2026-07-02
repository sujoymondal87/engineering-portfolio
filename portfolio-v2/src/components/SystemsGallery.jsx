import { supabase } from '../lib/supabase'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SystemCard from './SystemCard'

export default function SystemsGallery() {
    const [systems, setSystems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchSystems = async () => {
            try {
                const { data, error } = await supabase
                    .from('systems')
                    .select('*')
                    .order('sort_order', { ascending: true })
                if (error) throw error
                setSystems((data || []).filter(s => s.name && s.problem))
            } catch (error) {
                console.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchSystems()
    }, [])

    if (!loading && systems.length === 0) return null

    return (
        <section className="pt-8 md:pt-16 pb-2 md:pb-4 border-b border-gray-800">
            <p className="text-amber-500 text-sm font-mono mb-4">Production Systems</p>
            <h2 className="text-3xl font-bold text-white mb-3">Built for production. Not on GitHub.</h2>
            <p className="text-gray-400 text-sm mb-10 max-w-2xl">Tightly coupled to a decade-old platform's infrastructure — extracting them as standalone repos would mean rebuilding context that doesn't exist outside it.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {systems.map((system) => (
                    <SystemCard key={system.id} system={system} />
                ))}
            </div>
            <Link to="/systems" className="text-amber-500 text-sm font-mono hover:underline mt-6 inline-block">
                View all systems →
            </Link>
        </section>
    )
}
