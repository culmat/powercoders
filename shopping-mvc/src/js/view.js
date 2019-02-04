/** HTML view for the ShoppingList. */
class View {
  /**
   * @param model {!Model} App data model
   * @param controller {!controller} App controller
   */
  constructor(model, controller){
    console.log('View ready!');

    /**@private {!Model} App data model */
    this.model_ = model;

    /**@private {!Controller} App controller */
    this.controller_ = controller;

  }
}