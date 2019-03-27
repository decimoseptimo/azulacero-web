import React from 'react';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/layout';
import DisqusThread from '../components/DisqusThread.js';
import { Link, graphql } from "gatsby";

const Media = props => (
  <div className="media customers">
    <img className="image" src={props.src} title={props.title} alt={props.alt} />
  </div>
);

const ArticleTemplate = ({ data, location }) => (
  <div>
    <Layout headerTitle="Trucos y tips para sobresalir">
      <Helmet>
        <title>{data.strapiArticle.title} | Azulacero.mx</title>
          <meta name="description"
              content={data.strapiArticle.excerpt} />
      </Helmet>

      <h4 className="body-subtitle" id="cat">#<Link to="/blog">Blog</Link></h4>
      <div className="blog-post-wrapper">
        <h1 className="body-title blog-post-title">{data.strapiArticle.title}</h1>
        <div className="blog-post-info">
          Por <span>{data.strapiArticle.author ? data.strapiArticle.author.username : 'guest'}</span>
          &nbsp;| En {data.strapiArticle.publishedAt}
        </div>
      </div>
      <ReactMarkdown className="body-p" source={data.strapiArticle.content} renderers={{image: Media}} />
		  {/*console.log(`
		  ${data.strapiArticle.id}
		  ${data.strapiArticle.title}
		  ${location.pathname}
		  `)*/}
	  <DisqusThread
          id="{data.strapiArticle.id}"
          title="{data.strapiArticle.title}"
          path="{location.pathname}"
        />
    </Layout>
  </div>
);

export default ArticleTemplate;

export const query = graphql`
  query($id: String!) {
    strapiArticle(id: {eq: $id}) {
      id
      title
      content
	  excerpt
      author {
        id
        username
      }
      publishedAt(formatString: "MMMM DD, YYYY", locale: "es")
    }
  }
`
