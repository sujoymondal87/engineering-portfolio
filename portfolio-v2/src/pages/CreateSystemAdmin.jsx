import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function CreateSystemAdmin() {
    const [name, setName] = useState('')
    const [slug, setSlug] = useState('')
    const [description, setDescription] = useState('')
    const [problem, setProblem] = useState('')
    const [architectureTags, setArchitectureTags] = useState('')
    const [tradeOffs, setTradeOffs] = useState('')
    const [productionProof, setProductionProof] = useState('')
    const [sortOrder, setSortOrder] = useState('')
    const [imgFile, setImgFile] = useState(null)
    const [imgPreviewUrl, setImgPreviewUrl] = useState('')
    const [existingImgUrl, setExistingImgUrl] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const navigate = useNavigate()
    const { slug: slugValue } = useParams()

    useEffect(() => {
        if (!slugValue) return
        const fetchSystem = async () => {
            try {
                const { data, error } = await supabase
                    .from('systems')
                    .select('*')
                    .eq('slug', slugValue)
                    .single()
                if (error) throw error
                setName(data.name)
                setSlug(data.slug)
                setDescription(data.description || '')
                setProblem(data.problem || '')
                setArchitectureTags(data.architecture_tags || '')
                setTradeOffs(data.trade_offs || '')
                setProductionProof(data.production_proof || '')
                setSortOrder(data.sort_order ?? '')
                setExistingImgUrl(data.imgurl || '')
            } catch (error) {
                setError(error.message)
            }
        }
        fetchSystem()
    }, [slugValue])

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (!file) return
        setImgFile(file)
        setImgPreviewUrl(URL.createObjectURL(file))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        setError('')
        try {
            let imgurl = existingImgUrl

            if (imgFile) {
                const fileExt = imgFile.name.split('.').pop()
                const fileName = `${slug}-${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`

                const { error: uploadError } = await supabase.storage
                    .from('post-images')
                    .upload(fileName, imgFile)
                if (uploadError) throw uploadError

                const { data: urlData } = supabase.storage
                    .from('post-images')
                    .getPublicUrl(fileName)
                imgurl = urlData.publicUrl
            }

            const payload = {
                name,
                slug,
                description,
                problem,
                architecture_tags: architectureTags,
                trade_offs: tradeOffs,
                production_proof: productionProof,
                sort_order: sortOrder === '' ? null : parseInt(sortOrder),
                imgurl,
            }

            if (slugValue) {
                const { error: updateError } = await supabase
                    .from('systems')
                    .update(payload)
                    .eq('slug', slugValue)
                if (updateError) throw updateError
            } else {
                const { error: insertError } = await supabase
                    .from('systems')
                    .insert(payload)
                if (insertError) throw insertError
            }

            setSuccess(true)
            setTimeout(() => navigate('/admin/systems/'), 1000)
        } catch (error) {
            if (error.message.includes('duplicate') || error.message.includes('unique')) {
                setError('This slug already exists. Please customize the slug.')
            } else {
                setError(error.message)
            }
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 py-8 px-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-8">
                <h1 className="text-3xl font-black text-blue-700 mb-6 text-center">
                    {slugValue ? 'Edit System' : 'Create a New System'}
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="slug" className="font-semibold text-gray-700">Slug</label>
                        <input
                            className="border border-gray-300 focus:border-blue-500 rounded-md p-2 transition duration-150 focus:outline-none text-black"
                            id="slug"
                            value={slug}
                            onChange={(e) => {
                                const generated = e.target.value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
                                setSlug(generated)
                            }}
                            placeholder="auto-generated or customize"
                            autoComplete="off"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-semibold text-gray-700">Name</label>
                        <input
                            className="border border-gray-300 focus:border-blue-500 rounded-md p-2 transition duration-150 focus:outline-none text-black"
                            id="name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                                const generated = e.target.value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
                                setSlug(generated)
                            }}
                            placeholder="System name"
                            autoComplete="off"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="description" className="font-semibold text-gray-700">Description</label>
                        <textarea
                            className="border border-gray-300 focus:border-blue-500 rounded-md p-2 min-h-[80px] resize-y transition duration-150 focus:outline-none text-black"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Short description"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="problem" className="font-semibold text-gray-700">Problem</label>
                        <textarea
                            className="border border-gray-300 focus:border-blue-500 rounded-md p-2 min-h-[80px] resize-y transition duration-150 focus:outline-none text-black"
                            id="problem"
                            value={problem}
                            onChange={(e) => setProblem(e.target.value)}
                            placeholder="1-2 sentences: what problem does this solve?"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="architectureTags" className="font-semibold text-gray-700">Architecture Tags</label>
                        <input
                            className="border border-gray-300 focus:border-blue-500 rounded-md p-2 transition duration-150 focus:outline-none text-black"
                            id="architectureTags"
                            value={architectureTags}
                            onChange={(e) => setArchitectureTags(e.target.value)}
                            placeholder="comma-separated, e.g. Altitude correction, Building graph, Calibration"
                            autoComplete="off"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="tradeOffs" className="font-semibold text-gray-700">Trade-offs</label>
                        <textarea
                            className="border border-gray-300 focus:border-blue-500 rounded-md p-2 min-h-[80px] resize-y transition duration-150 focus:outline-none text-black"
                            id="tradeOffs"
                            value={tradeOffs}
                            onChange={(e) => setTradeOffs(e.target.value)}
                            placeholder="1-2 sentences: why wasn't this extracted as a repo?"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="productionProof" className="font-semibold text-gray-700">Production Proof</label>
                        <input
                            className="border border-gray-300 focus:border-blue-500 rounded-md p-2 transition duration-150 focus:outline-none text-black"
                            id="productionProof"
                            value={productionProof}
                            onChange={(e) => setProductionProof(e.target.value)}
                            placeholder="1 line: where/how it's used live"
                            autoComplete="off"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="sortOrder" className="font-semibold text-gray-700">Sort Order</label>
                        <input
                            className="border border-gray-300 focus:border-blue-500 rounded-md p-2 transition duration-150 focus:outline-none text-black"
                            id="sortOrder"
                            type="number"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            placeholder="Display order (lower = first)"
                        />
                    </div>

                    {existingImgUrl && !imgPreviewUrl && (
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-gray-700">Current Diagram</label>
                            <img src={existingImgUrl} alt={name} className="w-full h-40 object-contain bg-gray-100 rounded" />
                        </div>
                    )}

                    <div className="flex flex-col gap-2">
                        <label htmlFor="imgurl" className="font-semibold text-gray-700">
                            {existingImgUrl ? 'Replace Diagram' : 'Diagram (DFD PNG)'}
                        </label>
                        <input
                            className="border border-gray-300 rounded-md p-2 file:mr-2 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 text-black"
                            type="file"
                            id="imgurl"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        {imgPreviewUrl && (
                            <img src={imgPreviewUrl} alt="Preview" className="w-full h-40 object-contain bg-gray-100 rounded mt-1" />
                        )}
                    </div>

                    <button
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-lg font-bold hover:from-blue-600 hover:to-blue-800 transition-all mt-2 shadow disabled:opacity-50"
                        type="submit"
                        disabled={submitting}
                    >
                        {submitting ? 'Saving...' : slugValue ? 'Update System' : 'Create System'}
                    </button>
                </form>

                {error && (
                    <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded text-red-700 text-center">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded text-green-700 text-center">
                        {slugValue ? 'System updated successfully' : 'System created successfully'}
                    </div>
                )}
            </div>
        </div>
    )
}
