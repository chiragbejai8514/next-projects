/* FAQ section (Section-11), accordian toogle between plus and minus icon */
// $(function () {
//   $('.section-11 .plus-minus-toggle').on('click', function () {
//     $(this).toggleClass('collapsed');
//   });
// });

window.onscroll = () => {
  const nav = document.querySelector('.navbar');
  if (this.scrollY <= 10) {
    nav.style.backgroundColor = 'transparent';
    nav.style.boxShadow = 'none';
  } else {
    nav.style.backgroundColor = '#021342';
    nav.style.boxShadow = 'rgba(0, 0, 0, 0.075) 0px 0.125rem 0.25rem';
  }
}
