/*
@module features 
Export all features from this module
to setup handlers
*/

/*
To add a feature's handlers to the MockerServer
export an array of msw.rest handlers called `handlers`
from the feature and export the feature from this
module

// ./MyFeature/index.js
export { handlers } from ....

// ./index.js
export * as MyFeature from './MyFeature'; 
*/
