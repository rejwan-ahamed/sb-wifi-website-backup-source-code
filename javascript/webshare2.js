const shareData = {
    title: 'collaboration',
    text: 'red halozen brand promotion and design collaboration.',
    url: 'https://redhalogen.xyz/shout2.html'
  }
  
  const btn = document.querySelector('button');
  const resultPara = document.querySelector('.result');
  
  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
      resultPara.textContent = 'shared successfully'
    } catch(err) {
      resultPara.textContent = 'Error: ' + err
    }
  });