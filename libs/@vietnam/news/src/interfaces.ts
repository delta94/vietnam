'use strict';

export interface IOptions {
  sources?: Array<string>;
  category?: string;
}

export interface ISource {
  id?: string;
  name?: string;
  url?: string;
  category?: string;
  categories?: Array<string>;
  rss?: any;
}

export interface ITime {
  day: string;
  year: number;
  month: number;
  date: number;
  hours: number;
  minutes: number;
  seconds: number;
  timestamp: number;
  dateTimeString: string;
}

export interface IArticle {
  title: string;
  description: string;
  url: string;
  source: string;
  day: string;
  year: number;
  month: number;
  date: number;
  hours: number;
  minutes: number;
  seconds: number;
  timestamp: number;
  dateTimeString: string;
  pubDate: string;
}

export interface IResponse {
  message: string;
  articles: Array<IArticle>;
}
