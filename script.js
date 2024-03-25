$(document).ready(function() {
    $('#studentTable').DataTable({
      order: [],
      columns: [
        {data: 'nim',
        type: "string",
        width: '130px'},
        {data: 'name',
        type: "string",
        width: "300px"},
        {data: 'alamat',
        type: "string",
        width: "auto"},
        {data: 'pengaturan',
        width: '150px'}
      ],
      columnDefs: [
        { "orderable": false, targets: 3 },
      ],
      language: {
        'paginate': {
          'previous': '<span class="fa fa-chevron-left"></span>',
          'next': '<span class="fa fa-chevron-right"></span>'
        },
        "lengthMenu": 'Display <select class="form-control input-sm">'+
        '<option value="10">10</option>'+
        '<option value="20">20</option>'+
        '<option value="30">30</option>'+
        '<option value="40">40</option>'+
        '<option value="50">50</option>'+
        '<option value="-1">All</option>'+
        '</select> results'
      }
    })  
} );