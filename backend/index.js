require('dotenv').config();
const app = require('./app');
const next = require('next');
const nextApp = next({ dir: './frontend' });
const handle = nextApp.getRequestHandler();

require('./src/database');

async function main() {
  try {
    await nextApp.prepare();
    app.use('/', require('./src/routers/authentication.routes'));
    app.get('*', (req, res) => {
      return handle(req, res)
    });
    // app.listen(app.get('port'));
    console.log('>> SERVER ON PORT 3000');
  } catch (e) {
    console.log('>> PROBLEM IN SERVER');
    console.log(e);
  }
}

main();
module.exports = nextApp;