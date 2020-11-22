import ultimatePagination from 'ultimate-pagination';

const paginationSettings = {
    // Required
    currentPage: 6,
    totalPages: 20,
  
    // Optional
    boundaryPagesRange: 1,
    siblingPagesRange: 2,
    hideEllipsis: false,
    hidePreviousAndNextPageLinks: false,
    hideFirstAndLastPageLinks: true,
  }

  export default function paginationTpl(options) {
    const pagination = ultimatePagination.getPaginationModel(options).map(pagination => {
    let tpl;
    let disable = '';
    let active = '';
    if (pagination.isActive) {
        disable = 'is-disabled';
    }
    if (pagination.type!=="PAGE") {
    tpl = `<a href="#" class="pagination-${pagination.type}-btn ${disable}" data-value = "${pagination.value}">
    <svg class="pagination-link pagination-${pagination.type}-icon ${disable}" width="16" height="16" data-value = "${pagination.value}>
    <use href="../images/${pagination.type}.svg">
    </use></svg></a>`;
    return tpl;
} else {
    if (pagination.isActive){
        active = 'current-page-btn';
    }
    tpl = `<a href="#" class="pagination-link pagination-${pagination.type}-btn
     ${disable} ${active}" data-value="${pagination.value}">${pagination.value}</a>`;
    return tpl;
}
}).join('');
return `<div id="pagination" class="pagination-container">${pagination}</div>`;
  }

//   console.log(ultimatePagination.getPaginationModel(paginationSettings));