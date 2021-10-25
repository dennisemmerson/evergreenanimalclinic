///NOTE: FOR THIS TO WORK YOU NEED TO ENTER THE FOLLOWING INTO THE COMMAND LINE:
//    sanity exec deleteDocsByFilter.js --with-user-token //////////



import client from 'part:@sanity/base/client'

client
  .delete({query: '*[_type == "vet"][0...999]'})
  .then(console.log)
  .catch(console.error)