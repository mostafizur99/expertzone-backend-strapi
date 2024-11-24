import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentTextField extends Schema.Component {
  collectionName: 'components_component_text_fields';
  info: {
    displayName: 'textField';
    icon: 'filter';
  };
  attributes: {
    textData: Attribute.String;
  };
}

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
    displayName: 'Feature Card';
    icon: 'chartPie';
    description: '';
  };
  attributes: {
    subTitle: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    thumb: Attribute.Media<'images'>;
    features: Attribute.Component<'component.text-field', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.text-field': ComponentTextField;
      'component.seo': ComponentSeo;
      'block.features': BlockFeatures;
    }
  }
}
