sap.ui.jsview "view.App",

  getControllerName: -> "view.App"

  createContent: (oController) ->
    @setDisplayBlock true
    new sap.m.SplitApp "appConteiner",
      afterDetailNavigate: ->
        @hideMaster()
      homeIcon:
        "phone": "img/icon_057.png"
        "phone@2": "img/icon_114.png"
        "tablet": "img/icon_072.png"
        "tablet@2": "img/icon_144.png"
        "favicon": "favicon.ico"
        "precomposed": false