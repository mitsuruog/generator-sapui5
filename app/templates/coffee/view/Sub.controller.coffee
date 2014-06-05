sap.ui.controller "view.Sub",

  onInit: ->
    @router = sap.ui.core.UIComponent.getRouterFor @
    @router.attachRouteMatched @onRouteMatched, @

  onRouteMatched: (evt, param) ->
    unless evt.getParameter("name") is "Sub"
      return