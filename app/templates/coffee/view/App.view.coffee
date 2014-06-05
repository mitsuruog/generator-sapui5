sap.ui.jsview "view.App",

  getControllerName: -> "view.App"

  createContent: (oController) ->
    @setDisplayBlock true
    new sap.m.App "appConteiner"
   		afterDetailNavigate: ->
   			@hideMaster()
   		homeIcon:
   			"phone": "img/57_icon.png"
				"phone@2": "img/114_icon.png"
				"tablet": "img/72_icon.png"
				"tablet@2": "img/144_icon.png"
				"favicon": "img/favicon.ico"
				"precomposed": false