_.register({
  rule: {
    host: /^(ai18\.pics|cnpics\.org|idol69\.net|javball\.com|ovabee\.com|pig69\.com|porn4f\.com)$/,
  },
  async ready () {
    const img = $('.fileviewer-file img');

    const url = img.src.replace(/\?.*/, '');
    await $.openImage(url);
  },
});
