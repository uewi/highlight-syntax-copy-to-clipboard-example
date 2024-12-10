const pre = document.querySelectorAll('pre');

pre.forEach((el) => {
  const copyBtn = document.createElement('span');
  copyBtn.innerText = 'copy';
  copyBtn.classList.add('copy-btn');
  el.appendChild(copyBtn);

  const copyToClipboard = async () => {
    copyBtn.style.display = 'none';
    const text = el.innerText;
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.innerText = 'copied!';
      copyBtn.style.display = 'inline';
      setTimeout(function () {
        copyBtn.innerText = 'copy';
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  copyBtn.addEventListener('click', copyToClipboard);
  el.addEventListener('click', copyToClipboard);
});
