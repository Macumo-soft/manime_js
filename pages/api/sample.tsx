
import * as ReactDOMServer from 'react-dom/server';

export default function handler(req, res) {
  // var test: JSX.Element = ReactDOMServer.renderToString(Test());

  res.status(200).send(
    `
    <div>
      <iframe src="/sample" width="500" height="500" frameborder="0" >
      </iframe>
    </div>
    `
  );
}

