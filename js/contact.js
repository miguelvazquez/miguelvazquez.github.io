$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "introduce la respuesta correcta (-_-)");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Debes introducir tu nombre",
                    minlength: "tu nombre debe contener al menos 2 caracteres"
                },
                subject: {
                    required: "Debes introducir un asunto",
                    minlength: "tu asunto debe contener al menos 4 caracteres"
                },
                number: {
                    required: "Debes introducir tu número",
                    minlength: "tu número debe contener al menos 5 caracteres"
                },
                email: {
                    required: "Debes introducir tu email"
                },
                message: {
                    required: "Debes escribir algo que enviar, ¿no crees?",
                    minlength: "¿sólo eso? escribe un poco más..."
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
                            $('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
                            $('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})