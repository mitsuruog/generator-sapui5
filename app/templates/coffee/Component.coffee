jQuery.sap.declare "<%= namespace %>.Component"

sap.ui.core.UIComponent.extend "<%= namespace %>.Component",
  metadata: 
    routing:
      config:
        viewType: "JS"
        viewPath: "view"
        targetControl: "appConteiner"
        clearTarget: false
        transition: "slide"
      routes: [{
        pattern: ""
        name: "Menu"
        view: "Menu"
        viewLevel: 0
        preservePageInSplitContainer: true
        targetAggregation: "masterPages"
        subroutes: [{
          pattern: "sub/{id}"
          name: "Sub"
          view: "Sub"
          viewLevel: 1
          targetAggregation: "detailPages"
        }, {
          pattern: ":all*:"
          name: "NotFound"
          view: "NotFound"  
          viewLevel: 1
          targetAggregation: "detailPages"   
        }]
      }]

  init: ->
    jQuery.sap.require "sap.m.routing.RouteMatchedHandler"
    jQuery.sap.require "<%= namespace %>.Router"

    # call overriden init.
    sap.ui.core.UIComponent.prototype.init.apply @, arguments

    # set custom behavior to the router.
    router = @getRouter()
    router.navBack = <%= namespace %>.Router.navBack;
    router.navToWithoutHash = <%= namespace %>.Router.navToWithoutHash;

    # monkey patch
    unless sap.ui.Device.system.phone
      router.navToWithoutHash "view.Home", "JS", false

    # initialize the router
    @routeHandler = new sap.m.routing.RouteMatchedHandler router
    router.initialize()

  destroy: ->
    if @routeHandler
      @routeHandler.destroy()
    # call overriden destroy.
    sap.ui.core.UIComponent.prototype.destroy.apply @, arguments

  createContent: ->
    # create root view.
    view = sap.ui.view
      id: "app"
      viewName: "view.App"
      type: "JS"
      viewData: 
        component: @

    #
    # load the global data model here.
    #

    view