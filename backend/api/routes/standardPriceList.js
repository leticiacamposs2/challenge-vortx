module.exports = app => {
    const controller = app.controllers.standardPriceList;

    app.route('/api/v1/standard-price-list')
        .get(controller.listStandardPrice);

}
