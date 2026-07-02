import { supabase } from '../lib/supabase'
import { useState, useEffect } from 'react'

import SystemCard from '../components/SystemCard'
import Layout from "../components/Layout";
import SEO from '../components/SEO'

export default function Systems() {
    const [systems, setSystems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

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
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchSystems()
    }, [])

    return (
        <Layout>
            <SEO
            title="Systems"
            description="Production systems built and operated over 10+ years. Offline-first, AI orchestration, browser AR, analytics, payments and more."
            url="/systems"
            />
            <div className="py-6 md:py-16">
                <p className="text-amber-500 text-sm font-mono mb-4">Systems</p>
                <h1 className="text-4xl font-bold text-white mb-3">Built for production. Not on GitHub.</h1>
                <p className="text-gray-400 text-sm mb-10 max-w-2xl">Tightly coupled to a decade-old platform's infrastructure — extracting them as standalone repos would mean rebuilding context that doesn't exist outside it.</p>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && systems.length === 0 && <p className="text-gray-400">No systems yet.</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {systems.map((system) => (
                        <SystemCard key={system.id} system={system} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}
