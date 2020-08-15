// let hello = 'hello, your javascript is working fine';

// console.log(hello);

const like = document.getElementById('like-button');
const dislike = document.getElementById('dislike-button');
let likes = document.querySelector('.likes');
// let likeBar = document.querySelector('.likeBar'); <-- not working

let likeCount = 0;
let dislikeCount = 0;
likes.textContent = '';

like.addEventListener('click', function (e) {
  likeCount++;
  dislikeCount--;

  // likeBar.style.color = 'red'; <-- isnt working

  console.log(likeCount);
  console.log(dislikeCount);
  console.log('clicked like');

  // if (dislikeCount < 0) { <-- This isnt working
  //   dislikeCount = 0;
  // }
});

dislike.addEventListener('click', function (e) {
  dislikeCount++;
  likeCount--;

  console.log(dislikeCount);
  console.log(likeCount);
  console.log('clicked dislike');
});

likes.textContent = likeCount;
