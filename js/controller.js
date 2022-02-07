$(document).ready(onInit);

function onInit() {
  $('.contact-form button').on('click', onHandleSubmit);
  renderProjects();
}

function renderProjects() {
  var projs = getProjsForDisplay();
  var strHTML = projs.map((proj) => {
    return `
    <div class="col-md-4 col-sm-6 portfolio-item h-50" data-proj="${proj.name}">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${proj.imgUrl}" alt="${proj.name} website image" />
      </a>
      <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.title}</p>
      </div>
  </div>`;
  });
  $('.proj-grid').html(strHTML.join(''));
  $('.portfolio-item').on('click', renderModal);
}

function renderModal() {
  var projName = $(this).data().proj;
  var proj = getProjByName(projName);
  $('.modal-dialog img').attr('src', 'img/portfolio/' + proj.imgUrl);
  $('.modal-dialog h4').text(proj.title);
  $('.proj-desc').text(proj.desc);
  $('.text-success').attr('href', 'https://lioramar55.github.io/' + proj.id);
  $('.text-success').attr('target', '_blank');
}

function onHandleSubmit() {
  var email = $('.contact-form input[type="email"]').val();
  var subj = $('.contact-form input[type="text"]').val();
  var msgBody = $('.contact-form textarea').val() + '___Email sent from: ' + email;
  var emailUrl = `https://mail.google.com/mail/u/0/?fs=1&to=lioramar55@gmail.com&su=${subj}&body=${msgBody}&tf=cm`;
  window.open(emailUrl);
  $('.contact-form input[type="email"]').val('');
  $('.contact-form input[type="text"]').val('');
  $('.contact-form textarea').val('');
}
