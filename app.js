'use strict';

const express = require('express');
const ejs = require('ejs');
const path = require('path');
const Product = require('./Product');

const app = express();
const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || '0.0.0.0';
const viewsPath = path.join(__dirname, 'view');
const publicPath = path.join(__dirname, 'webPage');

app.set('views', viewsPath);
app.set('view engine', 'ejs');

function renderPage(viewName, title, activePage, cssFile, jsFile, getData = () => ({})) {
  return async (req, res, next) => {
    try {
      const data = await getData(req);
      if (data.notFound) {
        return res.status(404).send('ไม่พบสินค้าที่ต้องการ');
      }
      const body = await ejs.renderFile(path.join(viewsPath, `${viewName}.ejs`), data);
      res.render('layout', { title, activePage, cssFile, jsFile, ...data, body });
    } catch (error) {
      next(error);
    }
  };
}

app.get('/', renderPage(
  'index', 'Amber Tech — อุปกรณ์ที่ใช่ ให้ทุกวันไปได้ไกลกว่า', 'home', '/home.css', undefined,
  () => ({ products: Product.getAll().slice(0, 4) })
));
app.get('/about', renderPage('about', 'เกี่ยวกับเรา — Amber Tech', 'about', '/about.css'));
app.get(['/ShowProduct/:id', '/products/:id'], renderPage(
  'showproduct', 'รายละเอียดสินค้า — Amber Tech', 'product', '/showproduct.css', undefined,
  (req) => {
    const product = Product.findById(req.params.id);
    return product ? { product } : { notFound: true };
  }
));
app.get(['/Product.html', '/products'], renderPage(
  'product', 'สินค้า — Amber Tech', 'product', '/product.css', '/product.js',
  () => ({ products: Product.getAll() })
));

app.use(express.static(publicPath));

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('เกิดข้อผิดพลาดในการแสดงหน้าเว็บ กรุณาตรวจสอบเทมเพลต EJS');
});

const server = app.listen(port, host, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

server.on('error', (error) => {
  console.error(`Unable to start server: ${error.message}`);
  process.exitCode = 1;
});

// Keep the process alive on experimental Node builds that may unref HTTP listeners.
const keepAlive = setInterval(() => {}, 60_000);
server.on('close', () => clearInterval(keepAlive));
