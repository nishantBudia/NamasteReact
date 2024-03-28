const heading = (id) =>
  React.createElement("h1", { id: "heading" + id }, "Hello World from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading(3));

const wrapper = React.createElement("div", { id: "wrapper" }, [
  heading(1),
  heading(2),
]);

setTimeout(() => root.render(wrapper), 1000);
