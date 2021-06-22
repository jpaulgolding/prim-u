/* eslint-disable no-unused-vars */
import { createClient } from "contentful";
import Head from "next/head";
import {
  Accordion,
  Banner,
  Contact,
  Events,
  Footer,
  FooterBanner,
  Hero,
  NavBar,
  Platform,
  Products,
  Reviews,
  Services,
  Video,
} from "../components";
import { Divider } from "../components/global-components";
import { CarrouselCard } from "../components/products/products.styles";
import { dataTransformer } from "../helpers/data-transformer";
import BaseLayout from "../layouts/base";

export default function Home({
  data,
  services,
  faqQuestions,
  partnersQuestions,
  bigCards,
  reviews,
  banner,
  footerData,
  freelancersSalons,
  beautyProducts,
}) {
  return (
    <BaseLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Hero />
      <Banner data={banner} />
      <Services data={services} />
      <Divider />

      <Events data={bigCards} />
      <Divider />

      <Contact data={freelancersSalons} />

      <Platform />
      <Video />

      <Divider />
      <Reviews data={reviews} />
      <Divider />
      <Products data={beautyProducts} />
      <Divider />

      <Accordion
        data={faqQuestions}
        subtitle="For Customers"
        title="Frequently asked"
        span="questions"
      />
      <Accordion data={partnersQuestions} subtitle="For Partners" />
      <Divider mt={[60, 100, 80]} mb={[60, 80, 80]} />

      <FooterBanner data={footerData} />
      <Footer />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: "udvzxn7no754",
    accessToken: "6CYnQJMm1J9PqAIfK0-i1c0h-n8krHGJfNdBOTnVoxU",
  });
  const res = await client.getEntries();

  const {
    services,
    faqQuestions,
    partnersQuestions,
    bigCards,
    banner,
    reviews,
    freelancersSalons,
    footerData,
    beautyProducts,
  } = dataTransformer(res);

  return {
    props: {
      data: res.items,
      services,
      faqQuestions,
      partnersQuestions,
      bigCards,
      reviews,
      banner,
      footerData,
      freelancersSalons,
      beautyProducts,
    },
  };
}
