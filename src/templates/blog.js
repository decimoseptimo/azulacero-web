import React from 'react';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/layout';
import Link from 'gatsby-link';
import slug from 'slug';
// import Img from 'gatsby-image';

//Trims a string to a maximum length and re-trim if it's on the middle of a word
function trim(string, maxLength){
  var trimmedString = string.substr(0, maxLength);
  return trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
}

export default (props) => (
  <div>
    <Layout headerTitle="Trucos y tips para sobresalir">
      <Helmet>
        <title>Blog | Paginas Web Mexicali y Marketing Digital</title>
        <meta name="description"
              content="Blog. Paginas web Mexicali, Desarrollo de Aplicaciones, y Marketing Digital."/>
      </Helmet>

      <h4 className="body-subtitle" id="cat">#Blog</h4>

      {props.data.allStrapiArticle.edges.map(({node})=>(
        <div key={node.id}>
          <h2 className="blog-title">
            <Link to={`/blog/${slug(node.title)}#cat`}>{node.title}</Link>
          </h2>
          <div className="blog-post-info">
            Por <span>{node.author ? node.author.username : 'guest'}</span>
            &nbsp;| En {node.publishedAt}
          </div>
          <div className="body-p">{
            node.excerpt ||
            <ReactMarkdown source={trim(node.content, 500)} disallowedTypes={['image']} />
          }</div>
        </div>
      ))}

      {props.pathContext.pagesCount>1 &&
      <div className="blog-nav">
        {props.pathContext.prevPath ? <Link className="item prev" to={props.pathContext.prevPath+'#cat'}>&nbsp;</Link> : <span className="item prev">&nbsp;</span>}
        {props.pathContext.nextPath ? <Link className="item next" to={props.pathContext.nextPath+'#cat'}>&nbsp;</Link> : <span className="item next">&nbsp;</span>}
      </div>}

    </Layout>
  </div>
);

export const pageQuery = graphql`
  query IndexQuery($skip: Int!, $limit: Int!)  {
    allStrapiArticle(
      filter: {published: {eq: true}}
      sort: {fields: [publishedAt], order: DESC}
      skip: $skip
      limit: $limit
    ){
    edges {
      node {
        id
        title
        content
        excerpt
        author {
          username
        }
        publishedAt(formatString: "MMMM DD, YYYY", locale: "es")
      }
    }
  }
}
`
