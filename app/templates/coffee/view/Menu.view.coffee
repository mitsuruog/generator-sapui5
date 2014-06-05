sap.ui.jsview "view.Menu",

  getControllerName: -> "view.Menu"

  createContent: (oController) ->
    @page = new sap.m.Page
      title: "Menu"

    @page