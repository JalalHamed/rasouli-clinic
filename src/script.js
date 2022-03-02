(function app() {
  const handleLoad = () => {
    setTimeout(() => {
      document.querySelector('.pre-load').style.display = 'none';
    }, 2000);
  };

  addEventListener('load', handleLoad);
})();
