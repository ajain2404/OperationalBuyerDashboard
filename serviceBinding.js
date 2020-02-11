function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZC_ANALYTICALCARD_CDS/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}