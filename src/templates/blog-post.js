import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from "gatsby"
import rehypeReact from "rehype-react"

import Layout from '../components/layout'
import DisqusThread from '../components/DisqusThread.js'

const Media = props => (
  <div className="media">
      {props.children}
  </div>
)

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { media: Media },
    // components: { img: Media },
}).Compiler

const ArticleTemplate = ({ data, location }) => {
    const article = data.contentfulArticle
    return (
    <div>
        <Layout headerTitle="Trucos y tips para sobresalir">
            <Helmet>
                <title>{article.title} | Azulacero.mx</title>
                <meta name="description"
                      content={article.excerpt.excerpt}/>
            </Helmet>

            <h4 className="body-subtitle" id="cat">#<Link to="/blog">Blog</Link></h4>
            <div className="blog-post-wrapper">
                <h1 className="body-title blog-post-title">{article.title}</h1>
                <div className="blog-post-info">
                    Por <span>{article.author ? article.author.username : 'guest'}</span>
                    &nbsp;| En {article.publishedAt}
                </div>
            </div>
            <div className="body-p">{renderAst(article.content.childMarkdownRemark.htmlAst)}</div>

            <DisqusThread
                id="{article.id}"
                title="{article.title}"
                path="{location.pathname}"
            />
        </Layout>
    </div>
    )};

export default ArticleTemplate;

export const query = graphql`
  query($id: String!) {
    contentfulArticle(id: {eq: $id}) {
      id
      title
      content {
        childMarkdownRemark { htmlAst }
      }
	  excerpt { excerpt }
      author {
        id
        username
      }
      publishedAt(formatString: "MMMM DD, YYYY", locale: "es")
    }
  }
`
