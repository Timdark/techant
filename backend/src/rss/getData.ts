import { PrismaClient } from '@prisma/client';
import Parser from 'rss-parser';

const prisma = new PrismaClient();
let parser = new Parser();

const anandtech = async () => {
    let feed = await parser.parseURL('https://www.anandtech.com/rss');

    let site = feed.title;
    let icon = feed.image?.url;

    for (const item of feed.items) {
        await prisma.rssData.create({
            data: {
                siteName: String(site),
                siteIcon: String(icon),
                title: String(item.title),
                linkUrl: String(item.link),
                date: new Date(String(item.isoDate))
            }
        })
    }
}

export default async () => {
    // Clear table
    await prisma.rssData.deleteMany({})

    // Anandtech
    /*let feed = await parser.parseURL('https://www.anandtech.com/rss');

    let site = feed.title;
    let icon = feed.image?.url;

    for (const item of feed.items) {
        await prisma.rssData.create({
            data: {
                siteName: String(site),
                siteIcon: String(icon),
                title: String(item.title),
                linkUrl: String(item.link),
                date: new Date(String(item.isoDate))
            }
        })
    }*/
    anandtech()
};