const getSvg = new XMLHttpRequest();

getSvg.onload = function onload() {
  const parametricSvg = document.createElement('parametric-svg');
  parametricSvg.setAttribute('mm', '3.543307692');

  parametricSvg.innerHTML = this.responseText;
  const body = document.body;
  body.insertBefore(parametricSvg, body.firstChild);

  function updateFunction(range, display, parameter) {
    return function update() {
      const value = range.value;
      display.textContent = Number(value).toPrecision(2);
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
};

getSvg.open('get', 'flone3.parametric.svg', true);
getSvg.send();
