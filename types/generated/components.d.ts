import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentSeo extends Schema.Component {
  collectionName: 'components_component_seos';
  info: {
    displayName: 'Seo';
    icon: 'chartCircle';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media<'images'>;
  };
}

export interface BlockFeatures extends Schema.Component {
  collectionName: 'components_block_features';
  info: {
    displayName: 'Features';
    icon: 'chartPie';
  };
  attributes: {
    subTitle: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    thumb: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.seo': ComponentSeo;
      'block.features': BlockFeatures;
    }
  }
}
