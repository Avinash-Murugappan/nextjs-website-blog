/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://avinashmurugappan.dev",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || "https://avinashmurugappan.dev"}/sitemap.xml`,
      `${
        process.env.SITE_URL || "https://avinashmurugappan.dev"
      }/server-sitemap.xml`,
    ],
  },
};
