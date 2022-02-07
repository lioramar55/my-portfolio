$(document).ready(onInit);

function onInit() {
  console.log('Starting');
  renderProjects();
  renderModals();
}

function renderProjects() {
  var projs = getProjsForDisplay();

  var strHTML = projs.map((proj, idx) => {
    return `
    <div class="col-md-4 col-sm-6 portfolio-item">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${idx}">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${proj.url}" alt="${proj.name} website image" />
      </a>
      <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.title}</p>
      </div>
  </div>`;
  });
  $('.proj-grid').html(strHTML);
}

function renderModals() {
  var projs = getProjsForDisplay();
  var strHTML = projs.map((proj, idx) => {
    return `              
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal${idx}"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container ">
            <div class="row">
            <div class="col-md-4 col-sm-6 portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${idx}">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  class="img-fluid"
                  src="img/portfolio/${proj.url}"
                  alt="${proj.name} website image"
                />
              </a>
              <div class="portfolio-caption">
                <h4>${proj.name}</h4>
                <p class="text-muted">${proj.title}</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>`;
  });

  $('.portfolio-modals').html(strHTML);
}
