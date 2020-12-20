import { PrismaClient } from '@prisma/client';
import Parser from 'rss-parser';
import { add, toDate, format, parse, parseISO } from 'date-fns'

const prisma = new PrismaClient();
let parser = new Parser();

export default async () => {
    // Anandtech
    let feed = await parser.parseURL('https://www.anandtech.com/rss');

    let site = feed.title;

    for (const item of feed.items) {
        await prisma.rssData.create({
            data: {
                siteName: String(site),
                title: String(item.title),
                linkUrl: String(item.link),
                date: new Date(String(item.isoDate))
            }
        })
    }
};