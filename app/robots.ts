export default function robots() {
    return {
      rules: [{userAgent: '*'}],
      sitemap: `${process.env.HOSTED_URL}/sitemap.xml`,
      host: `${process.env.HOSTED_URL}`,
    };
  }
  