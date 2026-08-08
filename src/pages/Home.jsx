import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'

const POSTS_PER_PAGE = 5

function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const modules = import.meta.glob('../data/blogs/*.json', { as: 'raw', eager: true })
        const posts = []

        for (const path in modules) {
          const jsonString = modules[path]
          const blog = JSON.parse(jsonString)
          if (blog && blog.id && blog.title) {
            posts.push(blog)
          }
        }

        // Sort by date in descending order
        return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
      } catch (error) {
        console.error('Error loading blog posts:', error)
        return []
      }
    }

    loadBlogPosts().then(posts => {
      setBlogPosts(posts)
      setLoading(false)
    })
  }, [])

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE
    return blogPosts.slice(startIndex, endIndex)
  }, [currentPage, blogPosts])

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }

  const renderPageButtons = () => {
    const buttons = []
    const maxVisible = 5

    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2))
    let endPage = Math.min(totalPages, startPage + maxVisible - 1)

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`pagination-button ${currentPage === i ? 'active' : ''}`}
        >
          {i}
        </button>
      )
    }

    return buttons
  }

  return (
    <section className="home">
      <h1>Intelligent Briefs</h1>
      <h2>Navigating the Next Frontier: AI, Machine Learning, and Beyond</h2>

      {loading ? (
        <div className="loading">Loading blog posts...</div>
      ) : (
        <>
          <div className="blog-posts">
            {paginatedPosts.map((post) => (
              <article key={post.id} className="post">
                <h3>{post.title}</h3>
                <span className="date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more-btn">Read More</Link>
              </article>
            ))}
          </div>

          <div className="pagination">
            <div className="pagination-nav">
              <button 
                className="pagination-prev"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                ← Previous
              </button>

              <div className="pagination-center">
                {renderPageButtons()}
              </div>

              <button 
                className="pagination-next"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next →
              </button>
            </div>

            <div className="page-info">
              Showing {(currentPage - 1) * POSTS_PER_PAGE + 1} to {Math.min(currentPage * POSTS_PER_PAGE, blogPosts.length)} of {blogPosts.length} posts
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Home
