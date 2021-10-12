import YAML from 'https://unpkg.com/js-yaml@4.1.0/dist/js-yaml.mjs';
import {documentReady} from 'https://unpkg.com/html-ready';

documentReady.then(() => {
  const formatInput = document.querySelector('#format-input');
  const formatOutput = document.querySelector('#format-output');
  const formatError = document.querySelector('#format-error');

  formatInput.addEventListener('input', () => {
    try {
      const yaml = YAML.load(formatInput.value);
      formatOutput.value = YAML.dump(yaml, {
        indent: 2,
      });
      formatError.textContent = '';
    } catch (error) {
      formatError.textContent = error.message;
    }
  });
});
