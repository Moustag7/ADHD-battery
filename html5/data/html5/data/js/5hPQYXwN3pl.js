﻿window.globalProvideData('slide', '{"title":"Hotspot","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"tween","slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":93,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"5o0ta7LwChV","lmsId":"Slide93","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5hPQYXwN3pl","variables":[{"kind":"variable","name":"hotspot_6LEbUkwyNHa_xpos","type":"number","value":-1,"resume":true},{"kind":"variable","name":"hotspot_6LEbUkwyNHa_ypos","type":"number","value":-1,"resume":true}],"actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"#hotspot_6LEbUkwyNHa_xpos","typea":"var","valueb":-1,"typeb":"number"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6mtg7giAG9N"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6AdWfOoHHMW.InvalidPromptSlide"}}]}]},"ReviewInt_6LEbUkwyNHa":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6b5EH8QX8tG"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6mtg7giAG9N.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LEbUkwyNHa_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LEbUkwyNHa_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6LEbUkwyNHa","typea":"var","valueb":"6Ja8MKpl0Jx","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000100101"},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"hotspot_6LEbUkwyNHa_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"hotspot_6LEbUkwyNHa_marker"},"xPos":{"type":"var","value":"#hotspot_6LEbUkwyNHa_xpos"},"yPos":{"type":"var","value":"#hotspot_6LEbUkwyNHa_ypos"},"xOffset":{"type":"number","value":-5},"yOffset":{"type":"number","value":-5}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6Ja8MKpl0Jx.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6LEbUkwyNHa"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6Ja8MKpl0Jx.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6LEbUkwyNHa"}]}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6LEbUkwyNHa","typea":"var","valueb":"5jeCPgZib0d","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000100101"},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"hotspot_6LEbUkwyNHa_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"hotspot_6LEbUkwyNHa_marker"},"xPos":{"type":"var","value":"#hotspot_6LEbUkwyNHa_xpos"},"yPos":{"type":"var","value":"#hotspot_6LEbUkwyNHa_ypos"},"xOffset":{"type":"number","value":-5},"yOffset":{"type":"number","value":-5}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5jeCPgZib0d.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6LEbUkwyNHa"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5jeCPgZib0d.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6LEbUkwyNHa"}]}]},{"kind":"set_review","objRef":{"type":"string","value":"hotspot_6LEbUkwyNHa"},"enabled":{"type":"boolean","value":true}}]},"ReviewIntCorrectIncorrect_6LEbUkwyNHa":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6b5EH8QX8tG.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6b5EH8QX8tG"}}]},{"kind":"set_enabled","objRef":{"type":"string","value":"6b5EH8QX8tG"},"enabled":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"6b5EH8QX8tG.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"6b5EH8QX8tG"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6LEbUkwyNHa":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6LEbUkwyNHa"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000100101"}]}]},"DisableChoices_6LEbUkwyNHa":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6b5EH8QX8tG"},"enabled":{"type":"boolean","value":false}}]},"6LEbUkwyNHa_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6mtg7giAG9N.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6Ja8MKpl0Jx.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_player.5jeCPgZib0d.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6LEbUkwyNHa"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6mtg7giAG9N.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6mtg7giAG9N.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6LEbUkwyNHa"}]}]}]}]},"SetLayout_pxabnsnfns00000100101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000100101"}]}]},"NavigationRestrictionNextSlide_5hPQYXwN3pl":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5wiBroaFYgL"}}]},"NavigationRestrictionPreviousSlide_5hPQYXwN3pl":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000100101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6AdWfOoHHMW","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6AdWfOoHHMW","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6LEbUkwyNHa","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6LEbUkwyNHa"}],"elseActions":[{"kind":"exe_actiongroup","id":"6LEbUkwyNHa_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6LEbUkwyNHa","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6LEbUkwyNHa","typea":"var","valueb":"6Ja8MKpl0Jx","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6Ja8MKpl0Jx"},"completed_slide_ref":{"type":"string","value":"_player.6Gt2YC7IfXc.5nR55SdFTrc"},"status_filter":""}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6LEbUkwyNHa","typea":"var","valueb":"5jeCPgZib0d","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5jeCPgZib0d"},"completed_slide_ref":{"type":"string","value":"_player.6Gt2YC7IfXc.6mPXfzFUW2C"},"status_filter":""}],"elseActions":[]}]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6LEbUkwyNHa","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6LEbUkwyNHa","typea":"var","valueb":"6Ja8MKpl0Jx","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6Ja8MKpl0Jx"},"completed_slide_ref":{"type":"string","value":"_player.6Gt2YC7IfXc.5nR55SdFTrc"},"status_filter":""}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6LEbUkwyNHa","typea":"var","valueb":"5jeCPgZib0d","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5jeCPgZib0d"},"completed_slide_ref":{"type":"string","value":"_player.6Gt2YC7IfXc.6mPXfzFUW2C"},"status_filter":""}],"elseActions":[]}]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5hPQYXwN3pl"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5hPQYXwN3pl"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":500,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"hotspot_6LEbUkwyNHa"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5nIBsf4TlIs"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5iWqkmxPxQQ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6b5EH8QX8tG"}}]},{"kind":"ontimelinetick","time":500,"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5nIBsf4TlIs.$OnStage","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"5nIBsf4TlIs.TransitionOut"}]}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":5,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":270,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":540,"pngfb":false,"pr":{"l":"Lib","i":26}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":540,"strokewidth":0}},"width":720,"height":540,"resume":true,"useHandCursor":true,"id":"hotspot_6LEbUkwyNHa","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6LEbUkwyNHa_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6LEbUkwyNHa_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6LEbUkwyNHa_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6LEbUkwyNHa_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6LEbUkwyNHa_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6LEbUkwyNHa_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-151,"yPos":195,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":34,"rotateYPos":47,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":70,"bottom":96,"altText":"Oval 1","pngfb":false,"pr":{"l":"Lib","i":252}},"html5data":{"xPos":-1,"yPos":-1,"width":71,"height":97,"strokewidth":1}},"width":69,"height":95,"resume":true,"useHandCursor":true,"id":"5nIBsf4TlIs","actionGroups":{"TransitionOut":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wiBroaFYgL"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wiBroaFYgL"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wiBroaFYgL"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wiBroaFYgL"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wiBroaFYgL"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wiBroaFYgL"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wiBroaFYgL"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wiBroaFYgL"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wiBroaFYgL"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wiBroaFYgL"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wiBroaFYgL"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wiBroaFYgL"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wiBroaFYgL"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wiBroaFYgL"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Gt2YC7IfXc.5wiBroaFYgL"}}]}},"events":[{"kind":"ontransitionoutcomplete","actions":[{"kind":"exe_actiongroup","id":"TransitionOut"}]},{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6LEbUkwyNHa_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6LEbUkwyNHa_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6LEbUkwyNHa_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6LEbUkwyNHa_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6LEbUkwyNHa_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6LEbUkwyNHa_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":66,"id":"01","url":"story_content/5XFNjl31PB0.png","type":"normal","altText":"Screenshot (42).png","width":1440,"height":810,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":270,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":540,"altText":"Screenshot (42).png","pngfb":false,"pr":{"l":"Lib","i":207}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":540,"strokewidth":0}},"width":720,"height":540,"resume":true,"useHandCursor":true,"id":"5iWqkmxPxQQ","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6LEbUkwyNHa_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6LEbUkwyNHa_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6LEbUkwyNHa_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6LEbUkwyNHa_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6LEbUkwyNHa_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6LEbUkwyNHa_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":106.5,"rotateYPos":269.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":214,"bottom":540,"altText":"Rectangular Hotspot 1","pngfb":false,"pr":{"l":"Lib","i":298}},"html5data":{"xPos":0,"yPos":0,"width":214,"height":540,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":215,"bottom":541,"altText":"Rectangular Hotspot 1","pngfb":false,"pr":{"l":"Lib","i":299}},"html5data":{"xPos":-1,"yPos":-1,"width":216,"height":542,"strokewidth":2}}}],"width":214,"height":540,"resume":true,"useHandCursor":true,"id":"6b5EH8QX8tG","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6LEbUkwyNHa_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6LEbUkwyNHa_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6LEbUkwyNHa_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6LEbUkwyNHa_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6LEbUkwyNHa_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6LEbUkwyNHa_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-30,"yPos":-30,"tabIndex":4,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":5,"rotateYPos":5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":10,"height":10,"resume":true,"useHandCursor":true,"id":"hotspot_6LEbUkwyNHa_marker"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6LEbUkwyNHa_CorrectReview","id":"01","linkId":"6LEbUkwyNHa_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":33}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6LEbUkwyNHa_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6LEbUkwyNHa_IncorrectReview","id":"01","linkId":"6LEbUkwyNHa_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":35}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":34}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6LEbUkwyNHa_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","animations":[{"kind":"animation","id":"5o0ta7LwChV","duration":100,"hidetextatstart":true,"animateshapewithtext":false,"pushdirection":"up","tweens":[{"kind":"tween","time":0,"duration":100,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"0","y":"540","dx":"0","dy":"0"},"anchorb":{"x":"0","y":"0","dx":"0","dy":"0"}}],"duration":100,"easing":"exponetial","easingdir":"easein"}}]}],"useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');