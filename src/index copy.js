import { Scraper } from '@democracy-deutschland/scapacra';
import { NamedPollScraper } from '@democracy-deutschland/scapacra-bt';

Scraper.scrape(new NamedPollScraper(), async dataPackage => {console.log(dataPackage.data.id)});