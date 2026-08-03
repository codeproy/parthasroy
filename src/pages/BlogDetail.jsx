import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import '../styles/BlogDetail.css'

function BlogDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const modules = import.meta.glob('../data/blogs/*.json', { query: '?raw', eager: true })
        let foundBlog = null

        for (const path in modules) {
          const jsonString = modules[path]
          const blogData = JSON.parse(jsonString)
          if (blogData.id === parseInt(id)) {
            foundBlog = blogData
            break
          }
        }

        if (foundBlog) {
          setBlog(foundBlog)
        } else {
          setError('Blog post not found')
        }
      } catch (err) {
        console.error('Error loading blog:', err)
        setError('Error loading blog post')
      } finally {
        setLoading(false)
      }
    }

    loadBlog()
  }, [id])

  if (loading) {
    return <div className="loading">Loading blog post...</div>
  }

  if (error) {
    return (
      <section className="blog-detail">
        <div className="error-message">{error}</div>
        <button onClick={() => navigate('/')} className="back-btn">
          ← Back to Posts
        </button>
      </section>
    )
  }

  if (!blog) {
    return (
      <section className="blog-detail">
        <div className="error-message">Blog post not found</div>
        <button onClick={() => navigate('/')} className="back-btn">
          ← Back to Posts
        </button>
      </section>
    )
  }

  return (
    <section className="blog-detail">
      <button onClick={() => navigate('/')} className="back-btn">
        ← Back to Posts
      </button>

      <article className="blog-article">
        <header className="blog-header">
          <h1>{blog.title}</h1>
          <div className="blog-meta">
            <span className="blog-date">
              {new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </header>

        <div className="blog-content">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      </article>
    </section>
  )
}

export default BlogDetail
