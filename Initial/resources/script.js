$(document).ready(configure_events);

function configure_events() {
  $('#submit').click(submit_button_clicked);
}

function submit_button_clicked(e){
  /* stop form from submitting normally */
      //e.preventDefault();
      var m1_input = $(e.currentTarget.parentElement).find('#field1').val();
      var v1_input = $(e.currentTarget.parentElement).find('#field2').val();
      var m2_input = $(e.currentTarget.parentElement).find('#field3').val();
      var v2_input =  $(e.currentTarget.parentElement).find('#field4').val();

      // find the empty input and display the result in that field
      // in a very stupid way
      var result = 0;
      var empty;

      if(m1_input.length == 0){
        empty = $(e.currentTarget.parentElement).find('#field1')
        result = parseInt(m2_input)*parseInt(v2_input)/parseInt(v1_input);
      }

      if(v1_input.length == 0){
        empty = $(e.currentTarget.parentElement).find('#field2')
        result = parseInt(m2_input)*parseInt(v2_input)/parseInt(m1_input);
      }

      if(m2_input.length == 0){
        empty = $(e.currentTarget.parentElement).find('#field3')
        result = parseInt(m1_input)*parseInt(v1_input)/parseInt(v2_input);
      }

      if(v2_input.length == 0){
        empty = $(e.currentTarget.parentElement).find('#field4')
        result = parseInt(m1_input)*parseInt(v1_input)/parseInt(m2_input);
      }

      //console.log("result = ", result)
      empty.val( result );
}
