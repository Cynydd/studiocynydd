import PropTypes from "prop-types";
import { Header, Footer } from "@librairy/organisms/index"; 
import Head from 'next/head';
import { Anchors } from "@librairy/atoms/Links";

export const Layout = ({
  children,
  title = 'Papeterie pleine de vie',
  type = "index-header",
  herologo,
  slogan,
  labelFooter
}) => {
  return (
    <>
      <Head>
        <title>{`Studio Cynydd | ${title}`}</title>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#8d0c22" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Boutique et information du Studio Cynydd, créations artisanales, fait-main français, designer graphique." />
        <meta name="author" content="Studio Cynydd" />
        <meta name="keywords" content="Papeterie, Fait-main, boutique, Cynydd, Rennes, cadeaux" />
        <meta property="og:title" content="Studio Cynydd" />
        <meta property="og:description" content="Boutique et information du Studio Cynydd, créations artisanales, fait-main français, designer graphique." />

        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.26/default/snipcart.css" />
        
      </Head>
      <Header type={type} herologo={herologo} slogan={slogan} />
      <main style={{position:'relative'}}>
        {children}
        <Anchors />
      </main>
      <Footer labelFooter={labelFooter} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string,
  type: PropTypes.string
}
