import { 
    createClient, 
    createPreviewSubscriptionHook, 
    createImageUrlBuilder, 
    createPortableTextComponent, 
} from 'next-sanity';

const config ={
    projectId: 'wxk0irdu',
    dataset: 'production',
    apiVersion:'2021-03-25',
    useCdn: true,
}

export const sanityClient= createClient(config);
export const createPreviewSubscription =  createPreviewSubscriptionHook(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const PortableText = createPortableTextComponent({
    ...config,
    serializers: {},
});

