
const gloAcademyList = document.querySelector('.glo-academy-list');
const trendingList = document.querySelector('.trending-list');
const musicList  = document.querySelector('.music-list');

const createCard = (dataVideo) => {
    const imgUrl = dataVideo.snippet.thumbnails.high.url;
    const videoId = dataVideo.id.videoId;
    const titleVideo = dataVideo.snippet.title;
    const dateVideo = dataVideo.snippet.publishedAt;
    const videoChanel = dataVideo.snippet.channelTitle;

    const card = document.createElement('div');
    card.classList.add('video-card');
    card.innerHTML = `
    <div class="video-thumb">
        <a class="link-video youtube-modal" href="https://youtu.be/${videoId}">
          <img src=${imgUrl} alt="" class="thumbnail">
        </a>
    </div>
    <h3 class="video-title">${titleVideo}</h3>
    <div class="video-info">
         <span class="video-counter">
           <span class="video-date">${dateVideo}</span>
         </span>
         <span class="video-channel">${videoChanel}</span>
    `;
    return card;
}
const createList = (wrapper, listVideo) => {
    wrapper.textContent = '';
    listVideo.forEach(item => {
        const card = createCard(item);
        wrapper.append(card);
    });
    listVideo.forEach(item => {
      if(item.statistics !== undefined){
        const videoCounter = trendingList.querySelector('.video-counter');
        const span = document.createElement('span');
        span.textContent = item.statistics.viewCount;
      
      }
    });

};
createList(gloAcademyList, gloAcademy);
createList(trendingList, trending);
createList(musicList, music);

