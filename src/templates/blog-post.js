import React from 'react';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/layout';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const Media = props => (
  <div className="media customers">
    <img className="image" src={props.src} title={props.title} alt={props.alt} />
  </div>
);

const ArticleTemplate = ({ data }) => (
  <div>
    <Layout headerTitle="Trucos y tips para sobresalir">
      <Helmet>
        <title>{data.strapiArticle.title} | Paginas Web Mexicali y Marketing Digital</title>
        <meta name="description"
              content="Blog. Paginas web Mexicali, Desarrollo de Aplicaciones, y Marketing Digital."/>
      </Helmet>

      <h4 className="body-subtitle">#<Link to="/blog">Blog</Link></h4>
      <div className="blog-post-wrapper">
        <h1 className="body-title blog-post-title" id="title">{data.strapiArticle.title}</h1>
        <div className="blog-post-info">
          Por <span>{data.strapiArticle.author ? data.strapiArticle.author.username : 'guest'}</span>
          &nbsp;| En {data.strapiArticle.publishedAt}
        </div>
      </div>
      <ReactMarkdown className="body-p" source={data.strapiArticle.content} renderers={{image: Media}} />

    </Layout>
  </div>
);

export default ArticleTemplate;

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      content
      author {
        id
        username
      }
      publishedAt(formatString: "MMMM DD, YYYY", locale: "es")
    }
  }
`
