
import YAML from 'js-yaml';
import {documentReady} from 'html-ready';

documentReady.then(() => {
  const formatInput = document.querySelector('#format-input');
  const formatOutput = document.querySelector('#format-output');
  const formatError = document.querySelector('#format-error');

  formatInput.addEventListener('input', () => {
    try {
      const yaml = YAML.safeLoad(formatInput.value);
      formatOutput.value = YAML.safeDump(yaml, {
        indent: 2
      });
      formatError.textContent = '';
    } catch (error) {
      formatError.textContent = error.message;
    }
  });
});
