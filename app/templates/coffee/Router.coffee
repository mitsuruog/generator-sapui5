jQuery.sap.declare "com.mitsuruog.openui5.odata.Router"

com.mitsuruog.openui5.odata.Router = 

  ###
   * to extend the router with a nav to method that
   * does not write hashes but load the views properly
  ###
  navToWithoutHash: (viewName, viewType = "JS", isMasterPage = false, data) ->
    app = sap.ui.getCore().byId "appConteiner"
    view = @getView viewName, viewType
    app.addPage view, isMasterPage
    app.toDetail view.getId(), "show", data

  ###
   * navigates back if there was a previos navigation,
   * if not, navigation back to home/welcome screen
  ###
  navBack: ->
    history = sap.ui.core.routing.History.getInstance()
    previosHash = history.getPreviousHash()
    if previosHash is undefined
      window.history.go -1
    else
      @navTo "Home", {}, true
