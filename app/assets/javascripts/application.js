// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap 
//= require_tree .
var put_action_link_id;

put_action_link_id = function(model,action, id) {
  var link_id;
  link_id = model+'_'+action + '_' + id;                    
  return $('#action_link_id').attr('value', link_id);
};  
                           

function  load_calendar(month) { 
     return $("#main_div").load('events?month="' + month + '&ajax=true"');      
 };

jQuery(function() {
  return $('#dp3').datepicker();
});


$(document).ready(function(){
    $('#EditModal').on('show',function(){    
        var link_element=$('#action_link_id').attr('value');      
        var link=$('#'+link_element).attr('href');   
        var element_params= link_element.split("_"); 
        var model_name=element_params[0];
        var action=element_params[1];    
        var idModal=action;           
        $('#'+action+'Modal').load(link);
    })  
    $("#mv_culture").load("enterprises/1");                                     
})                                                                   