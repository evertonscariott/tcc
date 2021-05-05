 import fs = require('fs');
 import { configService } from 'src/infra/connectors/database';

 require('dotenv').config();

 fs.writeFileSync(
   'ormconfig.json',
   JSON.stringify(configService.getTypeOrmConfig(), null, 2),
 );
