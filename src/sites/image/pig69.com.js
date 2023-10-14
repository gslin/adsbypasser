_.register({
  rule: {
    host: /^(ai18\.pics|idol69\.net|javball\.com|pig69\.com)$/,
  },
  async ready () {
    const img = $('.fileviewer-file img');

    const url = img.src.replace(/\?.*/, '');
    await $.openImage(url);
  },
});
