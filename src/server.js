import path from 'path';
import http from 'http';
import express from 'express';
import http_proxy from 'http-proxy';
// import routes from './routes';
// import store from './store';

export default function(parameters)
{
    const app = new express();
    const server = new http.Server(app);

    app.use(express.static(path.join(__dirname, '..', 'build/assets')));

    app.use((req, res) =>
	{
		// Match current URL to the corresponding React page
		react_router_match_url(routes, req.originalUrl).then((error, result) =>
		{
			if (error)
			{
				res.status(500);
				return res.send('Server error');
			}

			// Render React page
			const page = redux.provide(result, store);

			res.status(200);
			res.send('<!doctype html>' + '\n' + ReactDOM.renderToString(<Html>{page}</Html>));
		})
    })
    
    // Start the HTTP server
	server.listen();
}