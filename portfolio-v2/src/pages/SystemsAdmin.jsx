import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'
import SystemsTable from '../components/SystemsTable'
import toast from 'react-hot-toast'
import { FiPlus } from 'react-icons/fi'

export default function SystemsAdmin() {
    const [systems, setSystems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchSystems = async () => {
            try {
                const { data, error } = await supabase
                    .from('systems')
                    .select('*')
                    .order('sort_order', { ascending: true })
                if (error) throw error
                setSystems(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchSystems()
    }, [])

    const handleDelete = async (slug) => {
        try {
            const confirmed = window.confirm('Are you sure you want to delete this system?')
            if (!confirmed) return
            const { error } = await supabase.from('systems').delete().eq('slug', slug)
            if (error) {
                toast.error(error.message)
                return
            }
            toast.success('System deleted successfully', {
                position: 'top-right',
                duration: 3000,
                theme: {
                    primary: '#000',
                    secondary: '#fff',
                },
            })
            setSystems(systems.filter(s => s.slug !== slug))
        } catch (error) {
            console.error(error)
            toast.error(error.message)
        }
    }

    return (
        <div>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Systems</h1>
                <button
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition w-fit"
                onClick={() => navigate('/admin/systems/create')}
                >
                <FiPlus size={18} />
                Create System
                </button>
                <SystemsTable systems={systems} loading={loading} error={error} onDelete={handleDelete} />
            </div>
        </div>
    )
}
