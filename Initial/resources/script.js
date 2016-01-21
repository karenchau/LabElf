$(document).ready(configure_events);

function configure_events() {
  $('#field3-radio').click(radio_button_3_clicked);
  $('#field4-radio').click(radio_button_4_clicked);
  $('#submit').click(submit_button_clicked);
}

function radio_button_3_clicked(e) {
  /* The option selected will disable the text box for that category because
      that is the field that we are trying to calculate. */

      var textbox_to_be_disabled = $(e.currentTarget.parentElement.parentElement).find('#field3');
      textbox_to_be_disabled.prop("disabled",true);
      $(e.currentTarget.parentElement.parentElement).find('#field4').prop("disabled", false);
}

function radio_button_4_clicked(e) {
  /* The option selected will disable the text box for that category because
      that is the field that we are trying to calculate. */

      var textbox_to_be_disabled = $(e.currentTarget.parentElement.parentElement).find('#field4');
      textbox_to_be_disabled.prop("disabled", true);
      $(e.currentTarget.parentElement.parentElement).find('#field3').prop("disabled", false);
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

      if(m2_input.length == 0){
        empty = $(e.currentTarget.parentElement).find('#field3')
        $(e.currentTarget.parentElement).find('#field3_label').hide();
        result = parseInt(m1_input)*parseInt(v1_input)/parseInt(v2_input);
      }

      if(v2_input.length == 0){
        empty = $(e.currentTarget.parentElement).find('#field4')
        $(e.currentTarget.parentElement).find('#field4_label').hide();
        result = parseInt(m1_input)*parseInt(v1_input)/parseInt(m2_input);
      }

      //console.log("result = ", result)
      empty.addClass('result');
      empty.val( result );
}
