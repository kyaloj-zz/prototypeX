 $(document).ready(function(){
      $('.slider').slider({full_width: true});
       $('.parallax').parallax();
       $(".button-collapse").sideNav();
       $('select').material_select();

       $('.datepicker').pickadate({
		    selectMonths: true, 
		    selectYears: 15 
		  });

       $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });


    });

 
