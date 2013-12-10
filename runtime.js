var gmail = Gmail();

gmail.observe.on("open_email", function(id, url, body) {
  var link = $('.ado > span').last();

  if (link)
    link.trigger('click');
});

