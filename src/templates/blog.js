import React from 'react';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/layout';
import slug from 'slug';
import { Link, graphql } from "gatsby";

//Trims a string to a maximum length and re-trim if it's on the middle of a word
function trim(string, maxLength){
  var trimmedString = string.substr(0, maxLength);
  return trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
}

export default (props) => (
  <div>
    <Layout headerTitle="Trucos y tips para sobresalir">
      <Helmet>
        <title>Blog | Marketing Digital y Páginas Web en Mexicali, Baja California</title>

          <meta name="description"
                content="Hacemos Marketing Digital y Páginas Web en Mexicali, Baja California."/>
      </Helmet>

      <h4 className="body-subtitle" id="cat">#Blog</h4>

      {props.data.allContentfulArticle.edges.map(({node})=>(
        <div key={node.id}>
          <h2 className="blog-title">
            <Link to={`/blog/${slug(node.title)}/#cat`}>{node.title}</Link>
          </h2>
          <div className="blog-post-info">
            Por <span>{node.author ? node.author.username : 'guest'}</span>
            &nbsp;| En {node.publishedAt}
          </div>
          <div className="body-p">{
            node.excerpt.excerpt ||
            <ReactMarkdown source={trim(node.content.content.content, 500)} disallowedTypes={['image']} />
          }</div>
        </div>
      ))}

      {props.pageContext.pagesCount>1 &&
      <div className="blog-nav">
        {props.pageContext.prevPath ? <Link className="item prev" to={props.pageContext.prevPath+'#cat'}>&nbsp;</Link> : <span className="item prev">&nbsp;</span>}
        {props.pageContext.nextPath ? <Link className="item next" to={props.pageContext.nextPath+'#cat'}>&nbsp;</Link> : <span className="item next">&nbsp;</span>}
      </div>}

    </Layout>
  </div>
);

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!)  {
    allContentfulArticle(
      filter: {published: {eq: true}}
      sort: {fields: [publishedAt], order: DESC}
      skip: $skip
      limit: $limit
    ){
    edges {
      node {
        id
        title
        content { content }
        excerpt { excerpt }
        author {
          username
        }
        publishedAt(formatString: "MMMM DD, YYYY", locale: "es")
      }
    }
  }
}
`
