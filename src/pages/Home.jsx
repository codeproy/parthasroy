import { useState, useMemo } from 'react'
import { blogPosts } from '../data/blogPosts'

const POSTS_PER_PAGE = 5

function Home() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE
    return blogPosts.slice(startIndex, endIndex)
  }, [currentPage])

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
      <h1>Latest Blog Posts</h1>
      <h2>Insights and thoughts on AI, Machine Learning, and Technology</h2>

      <div className="blog-posts">
        {paginatedPosts.map((post) => (
          <article key={post.id} className="post">
            <h3>{post.title}</h3>
            <span className="date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <p>{post.excerpt}</p>
            <button className="read-more-btn">Read More</button>
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
    </section>
  )
}

export default Home
