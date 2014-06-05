sap.ui.controller "view.Home",

  onInit: ->
    @router = sap.ui.core.UIComponent.getRouterFor @
    @router.attachRouteMatched @onRouteMatched, @

  onRouteMatched: (evt, param) ->
    unless evt.getParameter("name") is "Home"
      return