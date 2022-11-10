// $('#my-element').paroller({
//   factor: 0.5,
//   factorXs: 0.2,
//   type: 'foreground',
//   direction: 'vertical',
// });
// // start

$(document).ready(() => {
  // let p = 0,
  //   t = 0;
  // $(window).scroll(() => {
  //   p = $(this).scrollTop();
  //   if (t < p) {
  //     console.log('下');
  //     document.getElementById('title').classList.remove('hide');
  //   } else {
  //     console.log('上');
  //     document.getElementById('title').classList.add('hide');
  //   }
  //   setTimeout(() => {
  //     t = p;
  //   }, 0);
  // });

  // section 1 insect
  function parallaxScroll(y) {
    $('#insectL').css({ top: 200 - y * 0.25 + 'px', left: -(35 / (1 + y * 0.25)) + 'px' });
    $('#insectR').css('top', 200 - y * 0.4 + 'px');
    if (y > 287) {
      $('#title').removeClass('hide');
      $('.banner h1:first-child').addClass('hide');
    } else {
      $('#title').addClass('hide');
      $('.banner h1:first-child').removeClass('hide');
    }
  }
  $(window).scroll(() => {
    const scrolled = $(window).scrollTop();
    parallaxScroll(scrolled);
  });
  // section 1
  const sectionOneTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: '#section1',
      start: 'top top',
      end: '+300',
      scrub: true,
    },
  });
  sectionOneTrigger
    .fromTo(
      '.banner h1:first-child',
      { opacity: 1 },
      { color: '#FFF', fontSize: '24px', fontWeight: 500 },
      0,
    )
    .fromTo('.banner h1:last-child', { opacity: 1 }, { opacity: 0, fontSize: '24px' }, 0);

  // section 2
  const sectionTwoTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: '#section2',
      start: 'top top',
      scrub: true,
    },
  });
  sectionTwoTrigger.fromTo(
    '.jelly',
    { top: 0 },
    {
      top: function () {
        return;
      },
    },
  );
});

// document.addEventListener('DOMContentLoaded', function () {
//   // Handler when the DOM is fully loaded
//   const classTrigger = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.class', // 偵測用來觸發的 trigger
//       start: 'top center', // animation 開始的 scrollbar 位置
//       end: 'top top', // 結束位置
//       scrub: true,
//     },
//   });
//   classTrigger.fromTo('.class', { opacity: 0 }, { opacity: 1 });
// });
