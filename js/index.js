let video = document.querySelector('video')

function startWebCam() {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function (err0r) {
            console.log("Something went wrong!");
        });
  }
}
startWebCam();

// A little bit of a jest, we like to have a laugh here and there

// NOT NEEDED
// document.addEventListener('resize', function () {
//   document.querySelector('#footer').style.bottom = '0';
// });

// document.addEventListener('scroll', function () {
//   document.querySelector('#footer').style.bottom = '0';
// });