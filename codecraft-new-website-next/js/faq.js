/* FAQ section (Section-11), accordian toogle between plus and minus icon */
$(function () {
    $('.section-11 .plus-minus-toggle').on('click', function () {
      $(this).toggleClass('collapsed');
    });
  });