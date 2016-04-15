const getSvg = new XMLHttpRequest();

getSvg.onload = function onload() {
  const parametricSvg = document.createElement('parametric-svg');
  parametricSvg.setAttribute('mm', '3.543307692');

  parametricSvg.innerHTML = this.responseText;
  const body = document.body;
  body.appendChild(parametricSvg);

  function updateFunction(range, display, parameter) {
    return function update() {
      const value = range.value;
      display.textContent = Number(value).toPrecision(3);
      parametricSvg.setAttribute(parameter, value);
    };
  }

  ['size'].forEach(function setStuff(variable) {
    const range = document.getElementById(variable);

    const update = updateFunction(
      range,
      document.getElementById(variable + '-display'),
      variable
    );

    setTimeout(update);
    range.addEventListener('input', update);
  });

  // “Save as”
  const saveAsButton = document.getElementById('save-as');
  saveAsButton.addEventListener('click', function() {
    const blob = new Blob([
      parametricSvg.innerHTML,
    ], {type: "image/svg+xml;charset=utf-8"});
    saveAs(blob, "flone3.svg");
  });
};

getSvg.open('get', 'flone3.parametric.svg', true);
getSvg.send();
