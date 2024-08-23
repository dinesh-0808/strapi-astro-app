import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heroText: Attribute.String;
    heroDescription: Attribute.String;
  };
}

export interface AboutAbout extends Schema.Component {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    aboutText: Attribute.String;
    aboutPhoto: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hero.hero': HeroHero;
      'about.about': AboutAbout;
    }
  }
}
