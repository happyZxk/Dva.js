import dva from 'dva';
import './index.css';
// import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory as createHistory } from 'history';

// 1. Initialize
const app = dva({
    history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
// app.model(require('./models/product').default);
require('./models/index').default.forEach(key => app.model(key.default))

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

/*
    <a href="#hello"></a>
    #haha
*/