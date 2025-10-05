const element=React.createElement("h1",{},"Hello coder Army");
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

const li1=React.createElement("li",{},"HTML");
const li2=React.createElement("li",{},"CSS");
const li3=React.createElement("li",{},"JavaScript");

const ul1=React.createElement("ul",{},[li1,li2,li3]);

const el=React.createElement("div",{},[element,ul1]);
root.render(el);
