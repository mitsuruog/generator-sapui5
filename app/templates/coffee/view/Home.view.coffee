sap.ui.jsview "view.Home",

  getControllerName: -> "view.Home"

  createContent: (oController) ->
    @page = new sap.m.Page
      title: "Home"

    @page