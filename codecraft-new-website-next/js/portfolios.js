/* on page scroll, if scrollY is greater than 0, navbar color is changed from transparent to white */
window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    if (this.scrollY <= 10) {
      nav.style.backgroundColor = 'transparent';
      nav.style.boxShadow = 'none';
    } else {
      nav.style.backgroundColor = '#ffffff';
      nav.style.boxShadow = 'rgba(0, 0, 0, 0.075) 0px 0.125rem 0.25rem';
    }
  }
  