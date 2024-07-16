let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let header = document.querySelector('.header')
let upButton = document.querySelector('.scroll-down')
const apiKey = 'AIzaSyBs7rvv6V7jSE7rJxtt0ON6uNe-jNp2kDY';
const videoIds = [
    'gdZLi9oWNZg', 'WMweEpGlu_U', 'XsX3ATc3FbA',
    '-5q5mZbe3V8', 'pBuZEGYXA6E', 'SwMOUg08wXw',
    'VIDEO_ID7', 'VIDEO_ID8', 'VIDEO_ID9',
    'VIDEO_ID10', 'VIDEO_ID11', 'VIDEO_ID12'
];
const viewElements = [
    'views1', 'views2', 'views3',
    'views4', 'views5', 'views6',
    'views7', 'views8', 'views9',
    'views10', 'views11', 'views12'
];
const titleElementId =[
    'video-title1','video-title2','video-title3',
    'video-title4','video-title5','video-title6',
    'video-title7','video-title8','video-title9',
    'video-title10','video-title11','video-title12',
]
const thumbnailElementId  =[
    'video-thumbnail1','video-thumbnail2','video-thumbnail3',
    'video-thumbnail4','video-thumbnail5','video-thumbnail6',
    'video-thumbnail7','video-thumbnail8','video-thumbnail9',
    'video-thumbnail10','video-thumbnail11','video-thumbnail12',
]

videoIds.forEach((videoId, index) => {
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
          if (data.items && data.items.length > 0) {
              const viewCount = data.items[0].statistics.viewCount;
              document.getElementById(viewElements[index]).textContent = `${viewCount} Aufrufe`;
          } else {
              document.getElementById(viewElements[index]).textContent = 'Aufrufe nicht gefunden';
          }
      })
      .catch(error => {
          document.getElementById(viewElements[index]).textContent = 'Fehler beim Laden';
          console.error('Error fetching YouTube data:', error);
      })
      fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
          if (data.items && data.items.length > 0) {
            const videoSnippet = data.items[0].snippet;
            const videoTitle = videoSnippet.title;
            const videoThumbnailUrl = videoSnippet.thumbnails.standard.url;

              document.getElementById(titleElementId[index]).textContent = videoTitle;
              document.getElementById(thumbnailElementId[index]).src = videoThumbnailUrl;
          } else {
              document.getElementById(titleElementId[index]).textContent = 'Titel nicht gefunden';
              document.getElementById(thumbnailElementId[index]).alt = 'Thumbnail nicht gefunden';
          }
      })
      .catch(error => {
          document.getElementById(titleElementId[index]).textContent = 'Fehler beim Laden des Titels';
          document.getElementById(thumbnailElementId[index]).alt = 'Fehler beim Laden des Thumbnails';
          console.error('Error fetching YouTube data:', error);
      });
});