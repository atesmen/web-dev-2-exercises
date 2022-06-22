$(() => {
  // code here
  $.ajax({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
    datatype: 'json',
  }).done((data) =>{
    console.log('data get ajax', data);
    $.each(data, (i, post) =>{
      $('#posts').append(`
      
      <div class='post'>
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      </div>
      `
      );
    });
  });

  $.ajax({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/comments',
    datatype: 'json',
  }).done((data) =>{
    console.log('data get ajax', data);
    $.each(data, (i, comments) =>{
      $('#posts').append(`
      <button id="slideTog">Slide Toggle</button>
      <div id="comment">
      <h2>${comments.name}</h2>
      <p>${comments.body}</p>
      </div>
      `
      );
    });
  });

  $('#slideTog').on('click', () => {
    $('#comment').slideToggle(3000, () => {
      console.log('slide toggle done');
    });
  });

});
