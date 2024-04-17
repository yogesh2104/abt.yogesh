export default async function sitemap() {
    let routes = ['', '/contact-us','/education', '/guestbook', '/linkss', '/project','/skill','/terminal'].map((route) => ({
      url: `${process.env.HOSTED_URL}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }));
  
    return [...routes];
  }