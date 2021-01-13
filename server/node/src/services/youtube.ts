'use strict';

import { redisClient } from '../clients';
import { youTube } from '../libs';

export default class YouTubeService {
  public async getTrending(categoryId: number = 0): Promise<Array<any>> {
    const key: string = `youtube-trending-${categoryId}`;
    const cache: string = await redisClient.get(key);
    if (cache) {
      console.log('Get YouTube Trending from Cache');
      return JSON.parse(cache);
    }
    const videos: Array<any> = await youTube.getMostPopularVideos(categoryId);
    await redisClient.setex(key, JSON.stringify(videos), 60 * 60);
    return videos;
  }

  public async getVideoCategories() {
    const key: string = 'youtube-video-categories';
    const cache: string = await redisClient.get(key);
    if (cache) {
      console.log('Get YouTube Video Categories from Cache');
      return JSON.parse(cache);
    }
    const categories = await youTube.getVideoCategories();
    await redisClient.setex(key, JSON.stringify(categories), 60 * 60);
    return categories;
  }
}
