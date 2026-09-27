//constructor function
function Technology(name) {
  this.name = name;
}

Technology.prototype.hello = function () {
  let name = "html";
  console.log("Hello! we are learning", name);//html
  console.log("Hello! we are learning", this.name);//JS
};

let t = new Technology("JS");
t.hello();
