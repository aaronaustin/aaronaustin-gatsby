import path from 'path';
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import config from '../config';

const getSchemaOrgJSONLD = ({
    isBlogPost,
    url,
    title,
    image,
    description,
    datePublished,
}) => {
    const schemaOrgJSONLD = [
        {
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            url,
            name: title,
            alternateName: config.title,
        },
    ];

    return isBlogPost
        ? [
            ...schemaOrgJSONLD,
            {
                '@context': 'http://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        item: {
                            '@id': url,
                            name: title,
                            image,
                        },
                    },
                ],
            },
            {
                '@context': 'http://schema.org',
                '@type': 'BlogPosting',
                url,
                name: title,
                alternateName: config.title,
                headline: title,
                image: {
                    '@type': 'ImageObject',
                    url: image,
                },
                description,
                author: {
                    '@type': 'Person',
                    name: 'Jason Lengstorf',
                },
                publisher: {
                    '@type': 'Organization',
                    url: 'https://lengstorf.com',
                    logo: config.logo,
                    name: 'Jason Lengstorf',
                },
                mainEntityOfPage: {
                    '@type': 'WebSite',
                    '@id': config.url,
                },
                datePublished,
            },
        ]
        : schemaOrgJSONLD;
};

const SEO = (props) => {
    const title = props.title || config.title;
    const description = props.description || config.description;
    const image = `http:${props.image}` || config.image;
    const url = props.path
        ? `${config.url}${path.sep}${props.path}`
        : config.url;
    const datePublished = props.isBlogPost ? datePublished : false;
    const category = props.category;
    const isBlogPost = props.isBlogPost;

    const schemaOrgJSONLD = getSchemaOrgJSONLD({
        isBlogPost,
        url,
        title,
        image,
        description,
        datePublished,
    });

    return (
        <Helmet defaultTitle={config.title}>
            {/* General tags */}
            <title>{`${category.toUpperCase()} | ${title}`}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />

            {/* Schema.org tags */}
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
            </script>

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            {isBlogPost ? <meta property="og:type" content="article" /> : null}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="fb:app_id" content={config.fbAppID} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={config.twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    path: PropTypes.string,
    date: PropTypes.string,
    category: PropTypes.string,
    isBlogPost: PropTypes.bool,
};
SEO.defaultProps = {
    isBlogPost: false,
    postImage: null,
};

export default SEO;



{/* <SEO
    key={`seo-${postID}`}
    postImage={postImage}
    postData={postData}
    isBlogPost
    /> */}