import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  //   uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ljcdt56mom01yrdswgf7n9/master',
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4od73941vhh01z7c7ip8afu/master',
  cache: new InMemoryCache()
})
