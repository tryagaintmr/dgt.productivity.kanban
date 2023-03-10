import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhlX1pFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSn9Td0ZiXX5Zc3RURw==;Mgo+DSMBPh8sVXJ0S0J+XE9BdVRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdURjWHxfdHVSRWFUUA==;ORg4AjUWIQA/Gnt2VVhkQlFac1xJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkZiWX5dcXBUQWNfV0U=;MTI5OTI2OUAzMjMwMmUzNDJlMzBUVTgrNzBjS2VWMjFmZzJ2RTYydTRZc3VsRXBvNGFvK2ZqZUV4OFdJM1JjPQ==;MTI5OTI3MEAzMjMwMmUzNDJlMzBnRjdZd2dpZHFiNkZKMVFFOG16TFBrWExNL3FwZlp3OGRWazZsTHlQRFpJPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFpBVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVgWH9fc3VRR2dYUk13;MTI5OTI3MkAzMjMwMmUzNDJlMzBJaDNnVkFOOUtib1B4WnFPdDBRYnRBV1hUeGhTWFIxWWpYdDNhUDlkVXlZPQ==;MTI5OTI3M0AzMjMwMmUzNDJlMzBGNUZ3U3hmdm1sdk5sSDU3OCtoRnBqOXNTY0UxbzBaT2Fobksra0Znd1IwPQ==;Mgo+DSMBMAY9C3t2VVhkQlFac1xJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkZiWX5dcXBUQWVYUEU=;MTI5OTI3NUAzMjMwMmUzNDJlMzBnejBGZ3Q1TVF3eE5vUitqMUR0eXltWXR2R1BISldMUzNiWms4TE9aRFBnPQ==;MTI5OTI3NkAzMjMwMmUzNDJlMzBsd0d5ekFEZkhEcWhVNkg4V0VaNmhGKy9tL0hxUklrUzVId0craDZNaVNrPQ==;MTI5OTI3N0AzMjMwMmUzNDJlMzBJaDNnVkFOOUtib1B4WnFPdDBRYnRBV1hUeGhTWFIxWWpYdDNhUDlkVXlZPQ==');
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
