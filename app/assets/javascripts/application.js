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
var data_obj;

put_action_link_id = function(model,action, id) {
  var link_id;  
  var id_id=id>0 ? "_"+id : "";
  link_id = model+'_'+action + id_id;                    
  return $('#action_link_id').attr('value', link_id);
};  
                           

function  load_calendar(month) { 
     return $("#main_div").load('events?month="' + month + '&ajax=true"');      
 };          

function load_new_comment(id,parent_id){ 
    var parent_param= parent_id>=0 ? "&parent_id="+parent_id : "";
    var new_comment_div = parent_id>=0 ? "reply_to_"+parent_id+"_div" : "new_comment_div";
    $(".reply_to_div").html("")
    return  $("#"+new_comment_div).load("../events/"+id+"/comments/new?layout=false"+parent_param) ;
}

jQuery(function() {
  return $('#dp3').datepicker();
});


$(document).ready(function(){
    $('#NewModal').on('show',function(){    
        var link_element=$('#action_link_id').attr('value');      
        var link=$('#'+link_element).attr('href');   
        var element_params= link_element.split("_"); 
        var model_name=element_params[0];
        var action=element_params[1];    
        var idModal=action;           
        $('#'+action+'Modal').load(link);
    })   
    
    $('#new_comment')
        .live("ajax:beforeSend", function(evt, xhr, settings){
          var origText=$("#submit_comment").val();
          //var $submitButton = $(this).find('input[name="commit"]'); 
          // Update the text of the submit button to let the user know stuff is happening.
          // But first, store the original text of the submit button, so it can be restored when the request is finished.
          $("#submit_comment").data( 'origText', origText );
          $("#submit_comment").val( "Submitting..." );

        })
.live("ajax:success", function(evt, data, status, xhr){ 
      data_obj=data;                                 
      $(".comments").load("../events/"+ data.id +"/comments?layout=false"); 
    })

});               
 $("#mv_culture").load("../enterprises/1");                                                        