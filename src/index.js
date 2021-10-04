
require('./database')

const app = require('./app')



app.listen(app.get('port')); //3000
console.log('Server on port',app.get('port'));