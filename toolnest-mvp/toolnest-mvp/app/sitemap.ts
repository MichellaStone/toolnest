import type {MetadataRoute} from 'next';
import {tools} from '../lib/tools';
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL||'https://example.com';return ['', '/about','/privacy','/terms',...tools.map(t=>'/tools/'+t.slug)].map(path=>({url:base+path,lastModified:new Date(),changeFrequency:'monthly' as const,priority:path===''?1:0.7}))}
