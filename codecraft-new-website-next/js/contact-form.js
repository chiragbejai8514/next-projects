
/* contact form start*/
const setAmount = document.getElementById('amount');
const amountRange = document.getElementById('amount-range');
const contactForm = document.getElementById('contact-form');
const formStatusMsg = document.getElementById('form-status-message');
setAmount.innerText = '15 - 30 L';
let currencySelected = 'INR';

currencyChanged = value => {
  currencySelected = value;
  amountSelected(amountRange.value);
}

const amountSelected = rangeSelected => {
  switch (rangeSelected) {
    case '0':
      setAmount.innerText = currencySelected === 'USD' ? 'below 25 k' : 'below 15 L';
      return;
    case '1':
      setAmount.innerText = currencySelected === 'USD' ? '25 - 50 k' : '15 - 30 L';
      return;
    case '2':
      setAmount.innerText = currencySelected === 'USD' ? '50 - 150 k' : '30 - 100 L';
      return;
    case '3':
      setAmount.innerText = currencySelected === 'USD' ? '150 - 500 k' : '100 - 300 L';
      return;
    case '4':
      setAmount.innerText = currencySelected === 'USD' ? 'above 500 k' : 'above 300 L';
      return;
    default:
      return;
  }
}

contactForm.addEventListener('submit', event => {

  // Prevent default posting of form and reloading the page
  event.preventDefault();

  const formData = {
    aboutProjectProposal: event.target[0].value,
    timeline: event.target[1].value,
    budget: setAmount.innerText,
    currencyType: currencySelected,
    name: event.target[5].value,
    company: event.target[6].value,
    phone: event.target[7].value,
    email: event.target[8].value,
    tellUs: event.target[9].value
  }

  const validEmail = (new RegExp(/^(\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(formData.email));
  const validPhoneNumber = (new RegExp(/^[0-9]+$/).test(formData.phone));

  // validate What you would like us to work on field
  if (!formData.aboutProjectProposal) {
    changeDisplayProperty('work-field-err', 'block');
  } else {
    changeDisplayProperty('work-field-err', 'none');
  }

  // validate name field
  if (!formData.name) {
    changeDisplayProperty('name-field-err', 'block');
  } else {
    changeDisplayProperty('name-field-err', 'none');
  }

  // validate company field
  if (!formData.company) {
    changeDisplayProperty('company-field-err', 'block');
  } else {
    changeDisplayProperty('company-field-err', 'none');
  }

  // validate phone field
  if (!validPhoneNumber) {
    if (formData.phone) {
      changeElementColor('email-label', '#d50000');
    } else {
      changeElementColor('phone-label', 'rgba(18, 18, 18, 0.5)');
    }
    changeDisplayProperty('phone-field-err', 'block');
  } else {
    changeElementColor('phone-label', 'rgba(18, 18, 18, 0.5)');
    changeDisplayProperty('phone-field-err', 'none');
  }

  // validate phone email
  if (!validEmail) {
    if (formData.email) {
      changeElementColor('email-label', '#d50000');
    } else {
      changeElementColor('email-label', 'rgba(18, 18, 18, 0.5)');
    }
    changeDisplayProperty('email-field-err', 'block');
  } else {
    changeElementColor('email-label', 'rgba(18, 18, 18, 0.5)');
    changeDisplayProperty('email-field-err', 'none');
  }


  /**
 * if all fields valid, make ajax call to php page to send mail
 * else scroll to top of the form and to display all the invalid fields to to filled for the user
 */
  if (validEmail && validPhoneNumber
    && formData.currencyType && formData.aboutProjectProposal
    && formData.name && formData.company
    && formData.budget) {
    const hr = new XMLHttpRequest();

    const params = `aboutProjectProposal=${formData.aboutProjectProposal}
      &timeline=${formData.timeline}&budget=${formData.budget}&currencyType=${formData.currencyType}
      &name=${formData.name}&company=${formData.company}
      &email=${formData.email}&phone=${formData.phone}
      &tellUs=${formData.tellUs}`;
    hr.open("POST", 'php/sendMail.php', true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function () {
      if (hr.readyState == 4 && hr.status == 200) {
        if (parseInt(hr.responseText)) {
          changeDisplayProperty('contact-form-title', 'none');
          setFormStatusMessage('block',
            `Thank you ${formData.name}, your message has been submitted to us.`,
            '#00addf');
          scrollToTopOfTheForm();
          contactForm.style.display = 'none';
        } else {
          changeDisplayProperty('contact-form-title', 'none');
          setFormStatusMessage('block',
            `Apologies ${formData.name}, your message could not be delivered. Please try again later. Alternatively, you could also send an email to <span>contactus@codecraft.co.in</span>`,
            '#d50000');
          scrollToTopOfTheForm();
          changeDisplayProperty('try-again-btn', 'block');
          contactForm.style.display = 'none';
        }
      }
    }

    // Send the data to PHP now... and wait for response come back
    hr.send(params); // Actually execute the request
  } else {
    scrollToTopOfTheForm();
  }
});

const setFormStatusMessage = (displayStatus, innerText, textColor) => {
  formStatusMsg.style.display = displayStatus;
  formStatusMsg.innerHTML = innerText;
  formStatusMsg.style.color = textColor;
}

tryAgainContactForm = () => {
  changeDisplayProperty('try-again-btn', 'none');
  formStatusMsg.style.display = 'none';
  changeDisplayProperty('contact-form-title', 'block');
  contactForm.reset();
  contactForm.style.display = 'block';
}

const scrollToTopOfTheForm = () => {
  document.getElementById("contact-section").scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const changeElementColor = (elementId, color) => {
  document.getElementById(elementId).style.color = color;
}

const changeDisplayProperty = (elementId, state) => {
  document.getElementById(elementId).style.display = state;
}
/* contact form end */
