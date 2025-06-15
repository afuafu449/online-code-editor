const html = document.getElementById("html");
const css  = document.getElementById("css");
const js   = document.getElementById("js");
const iframe = document.getElementById("preview");

let t;
function update(){
  clearTimeout(t);
  t = setTimeout(() => {
    iframe.srcdoc = `
      <html>
        <head><style>${css.value}</style></head>
        <body>
          ${html.value}
          <script>${js.value}<\/script>
        </body>
      </html>
    `;
  }, 250);
}

[html, css, js].forEach(el => el.addEventListener("input", update));

// Starter content
html.value = "<h1>Hello, Afna!</h1>";
css.value = "body { color: #444; text-align: center; }";
js.value = "console.log('Editor is ready');";
update();
