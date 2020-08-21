const like = document.getElementById('like-button');
const dislike = document.getElementById('dislike-button');
const likeBar = document.getElementById('likeBar');
const disLikeBar = document.getElementById('disLikeBar');
const likesNum = document.getElementById('likesNum');
const disLikesNum = document.getElementById('disLikesNum');

let likeCount = 30;
let disLikeCount = 30;

let likeNumCount = 1;
let disLikeNumCount = 1;



like.addEventListener('click', function () {
  
  likeBar.style.width = `${likeCount++}rem`;
  disLikeBar.style.width = `${disLikeCount--}rem`;

  likeBar.style.borderColor = '#6fa5e4';
  disLikeBar.style.borderColor = '#1f79ad';
  
  likesNum.textContent = likeNumCount++;
  

  console.log(likeCount);
  console.log(disLikeCount);
  console.log('clicked like');
});

dislike.addEventListener('click', function () {
  
  disLikeBar.style.width = `${disLikeCount++}rem`;
  likeBar.style.width = `${likeCount--}rem`;

  disLikeBar.style.borderColor = '#6fa5e4';
  likeBar.style.borderColor = '#1f79ad';

  disLikesNum.textContent = disLikeNumCount++;


  console.log(disLikeCount);
  console.log(likeCount);
  console.log('clicked dislike');
});


