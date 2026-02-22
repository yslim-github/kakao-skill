const express = require('express');
const app = express();
app.use(express.json());

// ??ì¤?ì¶”ê?
process.stdout.setEncoding('utf8');  // ì½˜ì†”??

app.post('/skill', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');  // ??ì¤?ì¶”ê?
  const utterance = req.body?.userRequest?.utterance || '';
  
  res.json({
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: `ë°›ì? ë©”ì‹œì§€: ${utterance}`
          }
        }
      ]
    }
  });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('?¤í‚¬ ?œë²„ ?¤í–‰ ì¤? http://localhost:3000');
});
