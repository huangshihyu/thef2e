$('#my-element').paroller({
  factor: 0.5,
  factorXs: 0.2,
  type: 'foreground',
  direction: 'vertical',
});
// start

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

  const showTitle = gsap
    .from('.title h1:last-child', {
      opacity: 0,
      duration: 1,
    })
    .progress(1);

  const titleMove = gsap
    .from('.title h1:first-child', {
      color: '#fff',
      fontSize: '24px',
      duration: 2,
    })
    .progress(1);

  ScrollTrigger.create({
    start: 'top top',
    end: 99999,
    onUpdate: (self) => {
      console.log(self);
      self.direction === -1 ? showTitle.play() : showTitle.reverse();
      self.direction === -1 ? titleMove.play() : titleMove.reverse();
    },
  });

  // section 1 insect

  function parallaxScroll(y) {
    $('#insectL').css({ top: 200 - y * 0.25 + 'px', left: -(35 / (1 + y * 0.25)) + 'px' });
    $('#insectR').css('top', 200 - y * 0.4 + 'px');
  }
  $(window).scroll(() => {
    const scrolled = $(window).scrollTop();
    parallaxScroll(scrolled);
    console.log('scrolled', scrolled);
    // p = $(this).scrollTop();

    // if (t < p) {
    //   console.log('下');
    //   document.getElementById('title').classList.remove('hide');
    // } else {
    //   console.log('上');
    //   document.getElementById('title').classList.add('hide');
    // }

    // setTimeout(() => {
    //   t = p;
    // }, 0);
  });
});
