sap.ui.jsview "view.Sub",

  getControllerName: -> "view.Sub"

  createContent: (oController) ->
    @page = new sap.m.Page
      title: "Sub page"

    @page