﻿window.globalProvideData('slide', '{"title":"Sequence Drag-and-Drop","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"tween","slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":49,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"5zTqRQAjrIl","lmsId":"Slide49","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5dp7A0SXQs1","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"eval_interaction","id":"_this.5atPVfo3LOR"}]},"ReviewInt_5g05Ppa6wya":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5atPVfo3LOR.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5g05Ppa6wya_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5g05Ppa6wya_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5g05Ppa6wya","typea":"var","valueb":"69zvFwrEduX","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000100101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.69zvFwrEduX.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5g05Ppa6wya"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.69zvFwrEduX.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5g05Ppa6wya"}]}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5g05Ppa6wya","typea":"var","valueb":"6cFIoBoxmXj","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000100101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6cFIoBoxmXj.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5g05Ppa6wya"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6cFIoBoxmXj.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5g05Ppa6wya"}]}]},{"kind":"set_enabled","objRef":{"type":"string","value":"list_5g05Ppa6wya"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_5g05Ppa6wya":{"kind":"actiongroup","actions":[{"kind":"set_review","objRef":{"type":"string","value":"list_5g05Ppa6wya"},"enabled":{"type":"boolean","value":true}}]},"AnsweredInt_5g05Ppa6wya":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5g05Ppa6wya"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000100101"}]},{"kind":"set_enabled","objRef":{"type":"string","value":"list_5g05Ppa6wya"},"enabled":{"type":"boolean","value":false}}]},"DisableChoices_5g05Ppa6wya":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"list_5g05Ppa6wya"},"enabled":{"type":"boolean","value":false}}]},"5g05Ppa6wya_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5atPVfo3LOR.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.69zvFwrEduX.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_player.6cFIoBoxmXj.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5g05Ppa6wya"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5atPVfo3LOR.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5atPVfo3LOR.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5g05Ppa6wya"}]}]}]}]},"SetLayout_pxabnsnfns00000100101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000100101"}]}]},"NavigationRestrictionNextSlide_5dp7A0SXQs1":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5wuuVQaoO0r"}}]},"NavigationRestrictionPreviousSlide_5dp7A0SXQs1":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000100101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6AdWfOoHHMW","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6AdWfOoHHMW","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5g05Ppa6wya","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5g05Ppa6wya"}],"elseActions":[{"kind":"exe_actiongroup","id":"5g05Ppa6wya_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5g05Ppa6wya","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5g05Ppa6wya","typea":"var","valueb":"69zvFwrEduX","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.69zvFwrEduX"},"completed_slide_ref":{"type":"string","value":"_player.6Gt2YC7IfXc.5fw4jFbFAW0"},"status_filter":""}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5g05Ppa6wya","typea":"var","valueb":"6cFIoBoxmXj","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6cFIoBoxmXj"},"completed_slide_ref":{"type":"string","value":"_player.6Gt2YC7IfXc.5wuuVQaoO0r"},"status_filter":""}],"elseActions":[]}]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5g05Ppa6wya","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5g05Ppa6wya","typea":"var","valueb":"69zvFwrEduX","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.69zvFwrEduX"},"completed_slide_ref":{"type":"string","value":"_player.6Gt2YC7IfXc.5fw4jFbFAW0"},"status_filter":""}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5g05Ppa6wya","typea":"var","valueb":"6cFIoBoxmXj","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6cFIoBoxmXj"},"completed_slide_ref":{"type":"string","value":"_player.6Gt2YC7IfXc.5wuuVQaoO0r"},"status_filter":""}],"elseActions":[]}]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5dp7A0SXQs1"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5dp7A0SXQs1"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":30000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ft2gFlVOdc"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"list_5g05Ppa6wya"}}]},{"kind":"ontimelinetick","time":30000,"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6ft2gFlVOdc.$OnStage","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"6ft2gFlVOdc.TransitionOut"}]}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-91,"yPos":201,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":5,"rotateYPos":20.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":12,"bottom":43,"altText":"Oval 1","pngfb":false,"pr":{"l":"Lib","i":229}},"html5data":{"xPos":-1,"yPos":-1,"width":13,"height":44,"strokewidth":1}},"width":11,"height":42,"resume":true,"useHandCursor":true,"id":"6ft2gFlVOdc","actionGroups":{"TransitionOut":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wuuVQaoO0r"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wuuVQaoO0r"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wuuVQaoO0r"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wuuVQaoO0r"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wuuVQaoO0r"}}]}},"events":[{"kind":"ontransitionoutcomplete","actions":[{"kind":"exe_actiongroup","id":"TransitionOut"}]}]},{"kind":"sequencectrl","rtl":false,"shapemaskId":"","xPos":36,"yPos":49,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":214.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"number_text","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0x000000","alpha":100,"stop":0}]}},{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"itemlist":[{"kind":"item","itemdata":"choices.choice_6pk93IPrWm9","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6pk93IPrWm9","type":"vectortext","altText":"105","lmstext":"105","xPos":10,"yPos":3,"xAccOffset":0,"yAccOffset":0,"width":564,"height":28,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":28,"bottom":22,"altText":"105","lmstext":"105","pngfb":false,"pr":{"l":"Lib","i":230}}}},{"kind":"item","itemdata":"choices.choice_6rnlhfIAqKC","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6rnlhfIAqKC","type":"vectortext","altText":"93","lmstext":"93","xPos":10,"yPos":3,"xAccOffset":0,"yAccOffset":0,"width":564,"height":28,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":19,"bottom":22,"altText":"93","lmstext":"93","pngfb":false,"pr":{"l":"Lib","i":231}}}},{"kind":"item","itemdata":"choices.choice_5YTextk7tpu","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5YTextk7tpu","type":"vectortext","altText":"87","lmstext":"87","xPos":10,"yPos":3,"xAccOffset":0,"yAccOffset":0,"width":564,"height":28,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":19,"bottom":22,"altText":"87","lmstext":"87","pngfb":false,"pr":{"l":"Lib","i":232}}}},{"kind":"item","itemdata":"choices.choice_5cGLgQ4BgHx","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5cGLgQ4BgHx","type":"vectortext","altText":"79","lmstext":"79","xPos":10,"yPos":3,"xAccOffset":0,"yAccOffset":0,"width":564,"height":28,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":19,"bottom":22,"altText":"79","lmstext":"79","pngfb":false,"pr":{"l":"Lib","i":233}}}},{"kind":"item","itemdata":"choices.choice_5ZXVqXiLYim","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5ZXVqXiLYim","type":"vectortext","altText":"66","lmstext":"66","xPos":10,"yPos":3,"xAccOffset":0,"yAccOffset":0,"width":564,"height":28,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":19,"bottom":22,"altText":"66","lmstext":"66","pngfb":false,"pr":{"l":"Lib","i":234}}}},{"kind":"item","itemdata":"choices.choice_5wG3CN5XZ2k","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5wG3CN5XZ2k","type":"vectortext","altText":"51","lmstext":"51","xPos":10,"yPos":3,"xAccOffset":0,"yAccOffset":0,"width":564,"height":28,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":19,"bottom":22,"altText":"51","lmstext":"51","pngfb":false,"pr":{"l":"Lib","i":235}}}},{"kind":"item","itemdata":"choices.choice_6Cl5dlUgNol","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6Cl5dlUgNol","type":"vectortext","altText":"42","lmstext":"42","xPos":10,"yPos":3,"xAccOffset":0,"yAccOffset":0,"width":564,"height":28,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":19,"bottom":22,"altText":"42","lmstext":"42","pngfb":false,"pr":{"l":"Lib","i":236}}}},{"kind":"item","itemdata":"choices.choice_6AdBZsK3Io6","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6AdBZsK3Io6","type":"vectortext","altText":"37","lmstext":"37","xPos":10,"yPos":3,"xAccOffset":0,"yAccOffset":0,"width":564,"height":28,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":19,"bottom":22,"altText":"37","lmstext":"37","pngfb":false,"pr":{"l":"Lib","i":237}}}},{"kind":"item","itemdata":"choices.choice_5YwDgmo5uRC","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5YwDgmo5uRC","type":"vectortext","altText":"28","lmstext":"28","xPos":10,"yPos":3,"xAccOffset":0,"yAccOffset":0,"width":564,"height":28,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":19,"bottom":22,"altText":"28","lmstext":"28","pngfb":false,"pr":{"l":"Lib","i":238}}}},{"kind":"item","itemdata":"choices.choice_6AYpGh7m4wE","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6AYpGh7m4wE","type":"vectortext","altText":"16","lmstext":"16","xPos":10,"yPos":3,"xAccOffset":0,"yAccOffset":0,"width":564,"height":28,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":19,"bottom":22,"altText":"16","lmstext":"16","pngfb":false,"pr":{"l":"Lib","i":239}}}}]},"width":648,"height":429,"resume":true,"useHandCursor":true,"id":"list_5g05Ppa6wya"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5g05Ppa6wya_CorrectReview","id":"01","linkId":"5g05Ppa6wya_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":33}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5g05Ppa6wya_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5g05Ppa6wya_IncorrectReview","id":"01","linkId":"5g05Ppa6wya_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":35}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":34}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5g05Ppa6wya_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","animations":[{"kind":"animation","id":"5zTqRQAjrIl","duration":100,"hidetextatstart":true,"animateshapewithtext":false,"pushdirection":"up","tweens":[{"kind":"tween","time":0,"duration":100,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"0","y":"540","dx":"0","dy":"0"},"anchorb":{"x":"0","y":"0","dx":"0","dy":"0"}}],"duration":100,"easing":"exponetial","easingdir":"easein"}}]}],"useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');