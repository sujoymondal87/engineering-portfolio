import { supabase } from '../lib/supabase'
import { useState, useEffect } from 'react'

import Card from '../components/Card';
import Layout from "../components/Layout";
import SEO from '../components/SEO'

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data, error } = await supabase
                    .from('posts')
                    .select('*, post_images(url, sort_order)')
                    .or('category.is.null,category.neq.casestudy')
                    .order('created_at', { ascending: false })
                if (error) throw error
                setPosts(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

    return (
        <Layout>
            <SEO
            title="Engineering Notes"
            description="Notes, write-ups and everything else that isn't a full engineering case study."
            url="/posts"
            />
            <div className="py-6 md:py-16">
                <p className="text-amber-500 text-sm font-mono mb-4">Engineering Notes</p>
                <h1 className="text-4xl font-bold text-white mb-10">Notes and write-ups.</h1>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && posts.length === 0 && <p className="text-gray-400">No posts yet.</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {posts.map((post) => (
                        <Card key={post.id} url="posts" id={post.id} slug={post.slug}
                        imgUrl={post.post_images?.find(img => img.sort_order === 0)?.url || post.post_images?.[0]?.url || post.imgurl}
                        name={post.title} desc={post.content} timestamp={post.created_at} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}
