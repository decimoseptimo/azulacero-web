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

      <h4 className="body-subtitle">#Blog</h4>

      {props.data.allStrapiArticle.edges.map(({node})=>(
        <div key={node.id}>
          <h2 className="blog-title">
            <Link to={`/blog/${slug(node.title)}#title`}>{node.title}</Link>
          </h2>
          <div className="blog-post-info">
            Por <span>{node.author ? node.author.username : 'guest'}</span>
            &nbsp;| En {node.publishedAt}
          </div>
          <ReactMarkdown className="body-p" source={trim(node.content, 500)} disallowedTypes={['image']} />
        </div>
      ))}

    </Layout>
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle(
      filter: {published: {eq: true}}
      sort: {fields: [publishedAt], order: DESC}
    ) {
      edges {
        node {
          id
          title
          content
          author {
            username
          }
          publishedAt(formatString: "MMMM DD, YYYY", locale: "es")
        }
      }
    }
  }
`;
