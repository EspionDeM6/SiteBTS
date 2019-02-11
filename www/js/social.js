var screenTop = (screen.width/2)-300;
  var screenLeft = (screen.height/2)-300;
  var opt = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600,top='+screenTop+',left='+screenLeft;

  function twitShare(){
    open("https://twitter.com/intent/tweet?text=" + location.href, '', opt)
  }

  function fbShare(){
    open("https://www.facebook.com/sharer/sharer.php?u=" + location.href, '', opt)
  }

  function gplusShare(){
    open("https://plus.google.com/share?url=" + location.href, '', opt)
  }

  function mailShare(){
    open("mailto:?body=" + location.href, '', opt)
  }
