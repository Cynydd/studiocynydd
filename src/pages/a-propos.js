import { getAssetById, getPageContent } from '@utils/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { options } from '@utils/rich-text-options';
import { Layout } from "@components/Layout";
import { H1, Subtitle } from "@librairy/atoms";

export const About = ({ herologo, title, description, body }) => {
  return (
    <Layout title={title} type="page-header" herologo={herologo}>
    <H1>{title}</H1>
    <Subtitle>{description}</Subtitle>
    <section id="about">
      {documentToReactComponents(body, options)}
    </section>
    </Layout>
  )
}

export default About;

export async function getStaticProps() {
  const data = await getPageContent('1IsqRJpW34hcSL9VzNlaxp');
  return {
    props: {
      herologo: await getAssetById('13trf7K2jrx5M7fWiW5pbo'),
      title: data?.title ?? null,
      description: data?.description ?? null,
      body: data?.body ?? null,
    }
  }
}